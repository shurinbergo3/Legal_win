import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const ROOT = join(import.meta.dirname, '..', 'content', 'blog');
const LOCALES = ['ru', 'en', 'pl', 'tr'];

const bySlug = {};
for (const loc of LOCALES) {
  const dir = join(ROOT, loc);
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.md'))) {
    const slug = f.replace(/\.md$/, '');
    const fm = matter(readFileSync(join(dir, f), 'utf8')).data;
    bySlug[slug] ??= {};
    bySlug[slug][loc] = {
      t: fm.title ?? '',
      d: fm.description ?? '',
      tLen: (fm.title ?? '').length,
      dLen: (fm.description ?? '').length
    };
  }
}

writeFileSync(
  join(import.meta.dirname, 'blog-seo-current.json'),
  JSON.stringify(bySlug, null, 2)
);
console.log(`Slugs: ${Object.keys(bySlug).length}`);
