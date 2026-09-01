import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildSitemapIndexXml,
  buildSitemapUrlSetXml,
  escapeXml,
  formatSitemapLastmod,
} from '../src/utils/sitemap.js';

test('escapes XML-sensitive characters in sitemap values', () => {
  assert.equal(
    escapeXml(`https://example.com/?a=1&b=<tag>"quote"'apostrophe'`),
    'https://example.com/?a=1&amp;b=&lt;tag&gt;&quot;quote&quot;&apos;apostrophe&apos;',
  );
});

test('formats valid sitemap lastmod values and drops invalid ones', () => {
  assert.equal(formatSitemapLastmod('2026-08-27T12:00:00.000Z'), '2026-08-27T12:00:00.000Z');
  assert.equal(formatSitemapLastmod('not-a-date'), undefined);
});

test('renders sitemap XML documents with escaped URLs', () => {
  const indexXml = buildSitemapIndexXml(['https://example.com/sitemap-content.xml?x=1&y=2']);
  const urlSetXml = buildSitemapUrlSetXml([
    {
      loc: 'https://example.com/blog/post?x=1&y=2',
      lastmod: '2026-08-27T12:00:00.000Z',
    },
  ]);

  assert.match(indexXml, /<sitemapindex/);
  assert.match(indexXml, /https:\/\/example\.com\/sitemap-content\.xml\?x=1&amp;y=2/);
  assert.match(urlSetXml, /<urlset/);
  assert.match(urlSetXml, /https:\/\/example\.com\/blog\/post\?x=1&amp;y=2/);
  assert.match(urlSetXml, /<lastmod>2026-08-27T12:00:00.000Z<\/lastmod>/);
});
