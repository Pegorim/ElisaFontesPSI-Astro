import type { APIRoute } from 'astro';
import { getEmDashCollection } from 'emdash';

export const prerender = false;

async function isCmsReady() {
  try {
    const { error } = await getEmDashCollection('posts', {
      status: 'published',
      limit: 1,
      locale: 'pt-BR',
    });

    return !error;
  } catch {
    return false;
  }
}

export const GET: APIRoute = async () =>
  new Response(null, {
    status: (await isCmsReady()) ? 204 : 503,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
