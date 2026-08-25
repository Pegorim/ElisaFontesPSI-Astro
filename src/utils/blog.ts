import type { CollectionEntry } from 'astro:content';

const publicationDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function getPublicationDateKey(date: Date) {
  const parts = publicationDateFormatter.formatToParts(date);
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;

  return `${year}-${month}-${day}`;
}

export function isPublishedPost(post: CollectionEntry<'blog'>) {
  const publicationDate = post.data.pubDate.toISOString().slice(0, 10);
  return publicationDate <= getPublicationDateKey(new Date());
}
