import assert from 'node:assert/strict';
import test from 'node:test';

import { buildSeed, getSaoPauloDateKey } from '../scripts/generate-emdash-seed.mjs';

const beforeAugust26InSaoPaulo = new Date('2026-08-26T02:00:00.000Z');

test('uses the calendar date in São Paulo for publication decisions', () => {
  assert.equal(getSaoPauloDateKey(beforeAugust26InSaoPaulo), '2026-08-25');
  assert.equal(getSaoPauloDateKey(new Date('2026-08-26T15:00:00.000Z')), '2026-08-26');
});

test('migrates every article and keeps future articles as drafts', async () => {
  const seed = await buildSeed({ now: beforeAugust26InSaoPaulo });
  const posts = seed.content.posts;
  const drafts = posts.filter((post) => post.status === 'draft').map((post) => post.slug).sort();

  assert.equal(posts.length, 21);
  assert.equal(posts.filter((post) => post.status === 'published').length, 15);
  assert.deepEqual(drafts, [
    'ansiedade-insonia',
    'autoestima',
    'crise-de-panico',
    'luto-e-perdas',
    'relacionamentos-e-limites',
    'tristeza-ou-depressao',
  ]);

  for (const post of posts) {
    assert.ok(post.data.title);
    assert.ok(post.data.description);
    assert.match(post.data.publication_date, /^\d{4}-\d{2}-\d{2}T12:00:00\.000Z$/);
    assert.ok(Array.isArray(post.data.content));
    assert.ok(post.data.content.length > 0);
    assert.equal(post.bylines[0].byline, 'byline:elisa-fontes');
  }
});

test('keeps articles that need editorial review as drafts after their planned date', async () => {
  const seed = await buildSeed({ now: new Date('2026-08-26T15:00:00.000Z') });
  const post = seed.content.posts.find((entry) => entry.slug === 'ansiedade-insonia');

  assert.equal(post.status, 'draft');
});
