import type { APIRoute } from 'astro';

import { bairros } from '../data/bairros';
import { getPublishedBlogPostsOrEmpty } from '../utils/emdash-blog';
import {
  buildAbsoluteUrl,
  buildSitemapUrlSetXml,
  fixedPublicRoutes,
  formatSitemapLastmod,
  SITEMAP_CACHE_CONTROL,
  SITEMAP_CONTENT_TYPE,
} from '../utils/sitemap.js';

export const prerender = false;

const fallbackSiteUrl = 'https://elisafontes.com.br';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.href ?? fallbackSiteUrl;
  const posts = await getPublishedBlogPostsOrEmpty(undefined, 'sitemap');
  const entries = [
    ...fixedPublicRoutes.map((pathname) => ({
      loc: buildAbsoluteUrl(pathname, siteUrl),
    })),
    ...bairros.map((bairro) => ({
      loc: buildAbsoluteUrl(`/areas-atendidas/${bairro.slug}`, siteUrl),
    })),
    ...posts.map((post) => ({
      loc: buildAbsoluteUrl(`/blog/${post.id}`, siteUrl),
      lastmod: formatSitemapLastmod(post.data.publication_date),
    })),
  ];

  return new Response(buildSitemapUrlSetXml(entries), {
    headers: {
      'Content-Type': SITEMAP_CONTENT_TYPE,
      'Cache-Control': SITEMAP_CACHE_CONTROL,
    },
  });
};
