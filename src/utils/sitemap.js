export const SITEMAP_CONTENT_TYPE = 'application/xml; charset=utf-8';
export const SITEMAP_CACHE_CONTROL = 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400';

export const fixedPublicRoutes = [
  '/',
  '/sobre',
  '/contato',
  '/blog',
  '/areas-atendidas',
  '/psicanalise-e-psicoterapia',
  '/psicologa-em-niteroi',
  '/psicoterapia-adolescentes',
  '/psicoterapia-para-ansiedade',
  '/terapia-online',
  '/atendimento-psicologico-sao-francisco-niteroi',
];

const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
const sitemapNamespace = 'http://www.sitemaps.org/schemas/sitemap/0.9';

export function buildAbsoluteUrl(pathname, siteUrl) {
  return new URL(pathname, siteUrl).href;
}

export function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function formatSitemapLastmod(value) {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return undefined;
  return date.toISOString();
}

export function buildSitemapIndexXml(locations) {
  const sitemapEntries = locations
    .map((location) => `  <sitemap>\n    <loc>${escapeXml(location)}</loc>\n  </sitemap>`)
    .join('\n');

  return `${xmlDeclaration}
<sitemapindex xmlns="${sitemapNamespace}">
${sitemapEntries}
</sitemapindex>
`;
}

export function buildSitemapUrlSetXml(entries) {
  const urlEntries = entries
    .map(({ loc, lastmod }) => {
      const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmodTag}\n  </url>`;
    })
    .join('\n');

  return `${xmlDeclaration}
<urlset xmlns="${sitemapNamespace}">
${urlEntries}
</urlset>
`;
}
