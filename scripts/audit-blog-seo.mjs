import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const ROOT = join(import.meta.dirname, '..', 'content', 'blog');
const LOCALES = ['ru', 'en', 'pl', 'tr'];
const TITLE_MAX = 60;
const DESC_MAX = 155;

const rows = [];
for (const loc of LOCALES) {
  const dir = join(ROOT, loc);
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.md'))) {
    const fm = matter(readFileSync(join(dir, f), 'utf8')).data;
    const title = fm.title ?? '';
    const desc = fm.description ?? '';
    rows.push({ loc, file: f, tLen: title.length, dLen: desc.length, title, desc });
  }
}

const overTitle = rows.filter((r) => r.tLen > TITLE_MAX);
const overDesc = rows.filter((r) => r.dLen > DESC_MAX);

console.log(`Total posts: ${rows.length}`);
console.log(`Title > ${TITLE_MAX}: ${overTitle.length}`);
console.log(`Desc  > ${DESC_MAX}: ${overDesc.length}`);
console.log('');
console.log('--- TITLE OVER ---');
for (const r of overTitle) console.log(`${r.loc}\t${r.tLen}\t${r.file}\t${r.title}`);
console.log('');
console.log('--- DESC OVER ---');
for (const r of overDesc) console.log(`${r.loc}\t${r.dLen}\t${r.file}`);
