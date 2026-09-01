import { getEmDashCollection, getEmDashEntry } from 'emdash';
import type { EditProxy, MediaValue, PortableTextBlock } from 'emdash';

import { isPublicationDatePublic } from './blog';

export interface BlogPostData {
  title: string;
  description: string;
  content: PortableTextBlock[];
  publication_date: string;
  category: string;
  featured_image?: MediaValue | null;
  image_url?: string | null;
}

export interface BlogPostEntry {
  id: string;
  data: BlogPostData;
  edit: EditProxy;
}

const blogDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const blogOrder = { publication_date: 'desc' } as const;

function keepPublicPosts(entries: BlogPostEntry[]) {
  return entries.filter((post) => isPublicationDatePublic(post.data.publication_date));
}

function getBlogLoadErrorDetails(error: unknown) {
  const cause = error instanceof Error ? error.cause : undefined;
  const causeCode =
    typeof cause === 'object' &&
    cause !== null &&
    'code' in cause &&
    typeof cause.code === 'string'
      ? cause.code
      : undefined;

  return {
    errorName: error instanceof Error ? error.name : typeof error,
    causeName: cause instanceof Error ? cause.name : undefined,
    causeCode,
  };
}

function logPublishedBlogPostsError(surface: string, error: unknown) {
  console.error(`[blog] Failed to load published posts for ${surface}.`, getBlogLoadErrorDetails(error));
}

export function getBlogImage(post: BlogPostData) {
  return post.featured_image ?? post.image_url ?? null;
}

export function getBlogImageUrl(post: BlogPostData) {
  const image = getBlogImage(post);
  if (!image) return '/images/profile.jpg';
  if (typeof image === 'string') return image;
  if (image.src) return image.src;

  const storageKey = typeof image.meta?.storageKey === 'string' ? image.meta.storageKey : image.id;
  return `/_emdash/api/media/file/${storageKey}`;
}

export function formatBlogDate(publicationDate: string) {
  return blogDateFormatter.format(new Date(publicationDate));
}

export async function getPublishedBlogPosts(limit?: number) {
  if (!limit) {
    const { entries, error } = await getEmDashCollection<'posts', BlogPostData>('posts', {
      status: 'published',
      orderBy: blogOrder,
      locale: 'pt-BR',
    });

    if (error) throw new Error('Não foi possível carregar os artigos do Emdash.', { cause: error });
    return keepPublicPosts(entries as BlogPostEntry[]);
  }

  const published: BlogPostEntry[] = [];
  const pageSize = Math.max(limit, 10);
  let cursor: string | undefined;

  do {
    const result = await getEmDashCollection<'posts', BlogPostData>('posts', {
      status: 'published',
      limit: pageSize,
      cursor,
      orderBy: blogOrder,
      locale: 'pt-BR',
    });

    if (result.error) {
      throw new Error('Não foi possível carregar os artigos do Emdash.', { cause: result.error });
    }

    published.push(...keepPublicPosts(result.entries as BlogPostEntry[]));
    cursor = result.hasMore ? result.nextCursor : undefined;
  } while (published.length < limit && cursor);

  return published.slice(0, limit);
}

export async function getPublishedBlogPostsOrEmpty(limit: number | undefined, surface: string) {
  try {
    return await getPublishedBlogPosts(limit);
  } catch (error) {
    logPublishedBlogPostsError(surface, error);
    return [];
  }
}

export async function getPublishedBlogPost(slug: string) {
  const { entry, error, isPreview } = await getEmDashEntry<'posts', BlogPostData>('posts', slug, {
    locale: 'pt-BR',
  });

  // Astro 6 reports an absent live entry as an error; it is still a normal 404.
  if (error?.name === 'LiveEntryNotFoundError') return { post: null, isPreview };
  if (error) throw new Error(`Não foi possível carregar o artigo "${slug}" do Emdash.`, { cause: error });
  if (!entry) return { post: null, isPreview };
  if (!isPreview && !isPublicationDatePublic(entry.data.publication_date)) {
    return { post: null, isPreview };
  }

  return { post: entry as BlogPostEntry, isPreview };
}
