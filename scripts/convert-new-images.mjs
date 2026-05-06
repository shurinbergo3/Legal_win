import sharp from 'sharp';
import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC_DIR = path.resolve('Image/для лендингов');
const OUT_DIR = path.resolve('public/services');

// Map May 6 screenshots → descriptive slugs (matched by HH.MM.SS suffix
// because macOS NFD-encodes the Cyrillic filename, which breaks literal compares).
const MAY6_SUFFIXES = [
  ['12.52.41', 'gdansk-aerial'],
  ['12.55.17', 'warszawa-tramwaj'],
  ['12.57.49', 'warszawa-swiatynia'],
  ['13.00.00', 'warszawa-pkin-noc'],
  ['13.01.01', 'warszawa-defilad-noc'],
  ['13.01.49', 'warszawa-spire']
];

const all = await readdir(SRC_DIR);
const may6Files = all.filter((f) => f.includes('2026-05-06') && f.endsWith('.png'));

const blurs = {};

for (const [suffix, slug] of MAY6_SUFFIXES) {
  const filename = may6Files.find((f) => f.includes(suffix));
  if (!filename) {
    console.warn(`! could not find file for ${suffix}`);
    continue;
  }
  const inPath = path.join(SRC_DIR, filename);
  const outPath = path.join(OUT_DIR, `${slug}.webp`);
  const meta = await sharp(inPath).metadata();
  const targetWidth = Math.min(1600, meta.width ?? 1600);
  await sharp(inPath)
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 72, effort: 6 })
    .toFile(outPath);
  console.log(`✔ ${slug}.webp  ←  ${filename}`);

  const buf = await sharp(outPath)
    .resize({ width: 32 })
    .webp({ quality: 55 })
    .toBuffer();
  blurs[`/services/${slug}.webp`] = `data:image/webp;base64,${buf.toString('base64')}`;
}

await writeFile('/tmp/new-blurs.json', JSON.stringify(blurs, null, 2));
console.log('\n✔ wrote /tmp/new-blurs.json');
