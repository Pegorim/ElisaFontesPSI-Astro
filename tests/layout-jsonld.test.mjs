import assert from 'node:assert/strict';
import test from 'node:test';

import { safeJsonLdSerialize } from 'emdash/page';

test('safeJsonLdSerialize escapes angle brackets before JSON-LD is embedded in HTML', () => {
  const serialized = safeJsonLdSerialize({
    headline: '</script><script>alert("xss")</script><!--',
  });

  assert.doesNotMatch(serialized, /</);
  assert.match(
    serialized,
    /\\u003c\/script\\u003e\\u003cscript\\u003ealert\(\\\"xss\\\"\)\\u003c\/script\\u003e\\u003c!--/,
  );
});
