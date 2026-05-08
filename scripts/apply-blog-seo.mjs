import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const ROOT = join(import.meta.dirname, '..', 'content', 'blog');
const LOCALES = ['ru', 'en', 'pl', 'tr'];
const TITLE_MAX = 60;
const DESC_MAX = 155;
const DRY = process.argv.includes('--dry');

const rewrites = JSON.parse(
  readFileSync(join(import.meta.dirname, 'blog-seo-rewrites.json'), 'utf8')
);

let problems = [];
for (const [slug, byLoc] of Object.entries(rewrites)) {
  for (const loc of LOCALES) {
    const r = byLoc[loc];
    if (!r) {
      problems.push(`MISSING: ${slug}/${loc}`);
      continue;
    }
    if (r.t.length > TITLE_MAX) problems.push(`title>${TITLE_MAX} (${r.t.length}): ${slug}/${loc}: ${r.t}`);
    if (r.d.length > DESC_MAX) problems.push(`desc>${DESC_MAX} (${r.d.length}): ${slug}/${loc}: ${r.d}`);
  }
}
if (problems.length) {
  console.log('Pre-flight problems:');
  for (const p of problems) console.log(' -', p);
  console.log(`\nTotal: ${problems.length}`);
  if (!process.argv.includes('--force')) process.exit(1);
}

let updated = 0;
let skipped = 0;
const missingFiles = [];
for (const [slug, byLoc] of Object.entries(rewrites)) {
  for (const loc of LOCALES) {
    const r = byLoc[loc];
    if (!r) continue;
    const path = join(ROOT, loc, `${slug}.md`);
    let raw;
    try { raw = readFileSync(path, 'utf8'); } catch { missingFiles.push(path); continue; }
    const parsed = matter(raw);
    const before = { t: parsed.data.title, d: parsed.data.description };
    if (before.t === r.t && before.d === r.d) { skipped++; continue; }
    parsed.data.title = r.t;
    parsed.data.description = r.d;
    const out = matter.stringify(parsed.content, parsed.data);
    if (!DRY) writeFileSync(path, out);
    updated++;
  }
}

console.log(`Updated: ${updated}`);
console.log(`Already current: ${skipped}`);
if (missingFiles.length) {
  console.log('Missing files (skipped):');
  for (const p of missingFiles) console.log(' -', p);
}
if (DRY) console.log('(dry run, no files written)');
