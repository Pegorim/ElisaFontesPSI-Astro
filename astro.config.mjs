// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import emdash, { local, memoryCache, s3 } from 'emdash/astro';
import { postgres, sqlite } from 'emdash/db';

const useLocalEmdash = process.env.EMDASH_LOCAL === 'true';

if (!useLocalEmdash) {
  const requiredEnvironmentVariables = [
    'DATABASE_URL',
    'S3_ENDPOINT',
    'S3_BUCKET',
    'S3_ACCESS_KEY_ID',
    'S3_SECRET_ACCESS_KEY',
    'S3_REGION',
    'S3_PUBLIC_URL',
    'EMDASH_ENCRYPTION_KEY',
  ];
  const missingEnvironmentVariables = requiredEnvironmentVariables.filter((name) => !process.env[name]);

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `Emdash production configuration is incomplete. Missing: ${missingEnvironmentVariables.join(', ')}. ` +
      'Use npm run build:local for local validation.',
    );
  }
}

const localDatabasePath = process.env.EMDASH_DATABASE_PATH ?? './.emdash/dev.db';
const localUploadsPath = process.env.EMDASH_UPLOADS_PATH ?? './.emdash/uploads';
const database = useLocalEmdash
  ? sqlite({ url: localDatabasePath.startsWith('file:') ? localDatabasePath : `file:${localDatabasePath}` })
  : postgres({
      connectionString: process.env.DATABASE_URL,
      migrationConnectionStringEnv: 'DATABASE_URL',
    });
const storage = useLocalEmdash
  ? local({ directory: localUploadsPath, baseUrl: '/_emdash/api/media/file' })
  : s3();

// https://astro.build/config
export default defineConfig({
  site: 'https://elisafontes.com.br',
  output: 'server',
  trailingSlash: 'never',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    emdash({
      database,
      storage,
      siteUrl: 'https://elisafontes.com.br',
      objectCache: memoryCache({ defaultTtl: 60 }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
