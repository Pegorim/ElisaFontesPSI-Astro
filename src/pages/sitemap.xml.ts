import type { APIRoute } from 'astro';

import {
  buildAbsoluteUrl,
  buildSitemapIndexXml,
  SITEMAP_CACHE_CONTROL,
  SITEMAP_CONTENT_TYPE,
} from '../utils/sitemap.js';

export const prerender = false;

const fallbackSiteUrl = 'https://elisafontes.com.br';

export const GET: APIRoute = async ({ site }) =>
  new Response(
    buildSitemapIndexXml([buildAbsoluteUrl('/sitemap-content.xml', site?.href ?? fallbackSiteUrl)]),
    {
      headers: {
        'Content-Type': SITEMAP_CONTENT_TYPE,
        'Cache-Control': SITEMAP_CACHE_CONTROL,
      },
    },
  );
