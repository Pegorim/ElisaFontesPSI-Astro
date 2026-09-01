import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import matter from 'gray-matter';
import { markdownToPortableText } from 'emdash/client';
import { validateSeed } from 'emdash/seed';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const defaultSourceDir = resolve(projectRoot, 'src/content/blog');
const defaultOutputPath = resolve(projectRoot, '.emdash/seed.json');

// Snapshot of the articles that were already public when the CMS migration began.
// New/delayed articles stay in editorial review even after their frontmatter date arrives.
const publishedAtMigration = new Set([
  'ansiedade',
  'ansiedade-psicoterapia',
  'ansiedade-sinais-mente-pedindo-cuidado',
  'ansiedade-sintomas-fisicos',
  'ansiedade-trabalho',
  'autoconhecimento',
  'como-saber-se-preciso-fazer-terapia',
  'crise-ansiedade',
  'medo-de-comecar-terapia',
  'o-que-acontece-primeira-sessao-terapia',
  'psicanalise-na-pratica',
  'psicologo-niteroi',
  'sobrecarga-emocional-quando-a-vida-parece-pesada-demais',
  'terapia-online-funciona',
  'terapia-para-adolescentes-a-partir-de-16-anos',
]);

const saoPauloDateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function getSaoPauloDateKey(date = new Date()) {
  const parts = saoPauloDateFormatter.formatToParts(date);
  const year = parts.find((part) => part.type === 'year')?.value;
  const month = parts.find((part) => part.type === 'month')?.value;
  const day = parts.find((part) => part.type === 'day')?.value;

  return `${year}-${month}-${day}`;
}

function getFrontmatterDateKey(value, filename) {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }

  const dateKey = String(value ?? '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
    throw new Error(`${filename}: pubDate must use YYYY-MM-DD`);
  }

  return dateKey;
}

function requireText(value, field, filename) {
  const text = String(value ?? '').trim();
  if (!text) throw new Error(`${filename}: ${field} is required`);
  return text;
}

function slugifyTerm(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function buildSeed({ sourceDir = defaultSourceDir, now = new Date() } = {}) {
  const today = getSaoPauloDateKey(now);
  const filenames = (await readdir(sourceDir))
    .filter((filename) => extname(filename) === '.md')
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));

  const categories = new Map();
  const posts = [];

  for (const filename of filenames) {
    const source = await readFile(resolve(sourceDir, filename), 'utf8');
    const { data, content } = matter(source);
    const slug = basename(filename, '.md');
    const title = requireText(data.title, 'title', filename);
    const description = requireText(data.description, 'description', filename);
    const category = requireText(data.category, 'category', filename);
    const publicationDate = getFrontmatterDateKey(data.pubDate, filename);
    const categorySlug = slugifyTerm(category);
    const portableText = markdownToPortableText(content.trim());

    if (!portableText.length) throw new Error(`${filename}: article content is empty`);

    categories.set(categorySlug, category);
    posts.push({
      id: `post:${slug}`,
      slug,
      status: publishedAtMigration.has(slug) && publicationDate <= today ? 'published' : 'draft',
      locale: 'pt-BR',
      data: {
        title,
        description,
        content: portableText,
        publication_date: `${publicationDate}T12:00:00.000Z`,
        category,
        image_url: data.image ? String(data.image) : null,
      },
      taxonomies: { category: [categorySlug] },
      bylines: [{ byline: 'byline:elisa-fontes', roleLabel: 'Autora' }],
    });
  }

  const seed = {
    version: '1',
    defaultLocale: 'pt-BR',
    meta: {
      name: 'Elisa Fontes — migração do blog',
      description: 'Modelo editorial e artigos migrados do Astro para o Emdash.',
      author: 'Elisa Fontes Psicologia',
    },
    settings: {
      title: 'Elisa Fontes Psicologia',
      tagline: 'Psicologia clínica em Niterói e online para todo o Brasil',
    },
    collections: [
      {
        slug: 'posts',
        label: 'Artigos',
        labelSingular: 'Artigo',
        description: 'Conteúdo editorial do blog da Elisa Fontes.',
        icon: 'file-text',
        sortOrder: 1,
        titleField: 'title',
        dateField: 'publication_date',
        urlPattern: '/blog/{slug}',
        supports: ['drafts', 'revisions', 'preview', 'scheduling', 'search', 'seo'],
        admin: {
          listColumns: ['title', 'category', 'publication_date'],
        },
        fields: [
          { slug: 'title', label: 'Título', type: 'string', required: true, searchable: true },
          { slug: 'description', label: 'Descrição', type: 'text', required: true, searchable: true },
          { slug: 'content', label: 'Conteúdo', type: 'portableText', required: true, searchable: true },
          { slug: 'publication_date', label: 'Data de publicação', type: 'datetime', required: true, indexed: true },
          { slug: 'category', label: 'Categoria', type: 'string', required: true, indexed: true, searchable: true },
          { slug: 'featured_image', label: 'Imagem destacada', type: 'image' },
          { slug: 'image_url', label: 'Imagem legada', type: 'string' },
        ],
      },
    ],
    taxonomies: [
      {
        name: 'category',
        label: 'Categorias',
        labelSingular: 'Categoria',
        hierarchical: false,
        collections: ['posts'],
        locale: 'pt-BR',
        terms: [...categories.entries()]
          .sort((a, b) => a[1].localeCompare(b[1], 'pt-BR'))
          .map(([slug, label]) => ({ slug, label, locale: 'pt-BR' })),
      },
    ],
    bylines: [
      {
        id: 'byline:elisa-fontes',
        slug: 'elisa-fontes',
        displayName: 'Elisa Fontes',
        bio: 'Psicóloga clínica com abordagem em psicanálise. CRP 05/62794.',
        websiteUrl: 'https://elisafontes.com.br/sobre',
      },
    ],
    content: { posts },
  };

  const validation = validateSeed(seed);
  if (!validation.valid) {
    throw new Error(`Invalid Emdash seed:\n${validation.errors.join('\n')}`);
  }

  return seed;
}

async function main() {
  const seed = await buildSeed();
  await mkdir(dirname(defaultOutputPath), { recursive: true });
  await writeFile(defaultOutputPath, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

  const published = seed.content.posts.filter((post) => post.status === 'published').length;
  const drafts = seed.content.posts.length - published;
  console.log(`Emdash seed generated: ${seed.content.posts.length} articles (${published} published, ${drafts} drafts).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
