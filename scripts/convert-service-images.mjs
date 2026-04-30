#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve('Image/для лендингов');
const OUT_DIR = path.resolve('public/services');

const SLUG_ORDER = [
  'karta-pobytu',
  'karta-stalego-pobytu',
  'obywatelstwo',
  'ochrona-miedzynarodowa',
  'apelacje',
  'kod-95',
  'pesel',
  'meldunek',
  'akty-stanu-cywilnego',
  'apostille',
  'wymiana-prawa-jazdy',
  'zaswiadczenia-zus-us',
  'zaswiadczenie-o-niekaralnosci',
  'tlumaczenia-przysiegle',
  'zaproszenia',
  'odbior-z-lotniska',
  'wyszukiwanie-mieszkania',
  'tlumacz-na-wizyty',
  'pomoc-w-zatrudnieniu',
  'zapis-dzieci-do-szkoly',
  'blog'
];

if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

const all = (await readdir(SRC_DIR))
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

if (all.length !== SLUG_ORDER.length) {
  console.warn(`! sources=${all.length} slots=${SLUG_ORDER.length}`);
}

const pairs = SLUG_ORDER.map((slug, i) => [all[i], slug]).filter(([s]) => s);

for (const [filename, slug] of pairs) {
  const inPath = path.join(SRC_DIR, filename);
  const outPath = path.join(OUT_DIR, `${slug}.webp`);
  const meta = await sharp(inPath).metadata();
  const targetWidth = Math.min(2000, meta.width ?? 2000);
  await sharp(inPath)
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(outPath);
  console.log(`✔ ${slug}.webp  ←  ${filename}`);
}

// Generate base64 blur placeholders
const blurs = {};
for (const [, slug] of pairs) {
  const outPath = path.join(OUT_DIR, `${slug}.webp`);
  const buf = await sharp(outPath)
    .resize({ width: 10 })
    .jpeg({ quality: 30 })
    .toBuffer();
  blurs[slug] = `data:image/jpeg;base64,${buf.toString('base64')}`;
}
console.log('\nBLUR_PLACEHOLDERS=');
console.log(JSON.stringify(blurs, null, 2));
