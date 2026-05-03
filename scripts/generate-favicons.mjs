#!/usr/bin/env node
/**
 * Renders public/favicon.svg into the PNG raster sizes that browsers and
 * mobile platforms still request alongside the SVG. Run after editing
 * favicon.svg: `node scripts/generate-favicons.mjs`.
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'public/favicon.svg');
const PUB = path.join(ROOT, 'public');

const TARGETS = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-maskable-512.png', size: 512, padding: 0.1 }
];

const svg = await readFile(SRC);

for (const { name, size, padding = 0 } of TARGETS) {
  const inner = Math.round(size * (1 - padding * 2));
  const rendered = await sharp(svg, { density: 384 })
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  if (padding === 0) {
    await writeFile(path.join(PUB, name), rendered);
  } else {
    const pad = Math.round((size - inner) / 2);
    await sharp({
      create: { width: size, height: size, channels: 4, background: '#0a1330' }
    })
      .composite([{ input: rendered, top: pad, left: pad }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(PUB, name));
  }
  console.log(`✓ ${name} (${size}×${size})`);
}

const manifest = {
  name: 'LegalWin',
  short_name: 'LegalWin',
  description: 'LegalWin — юридическая помощь в Польше',
  start_url: '/',
  display: 'standalone',
  background_color: '#0a1330',
  theme_color: '#0a1330',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ]
};
await writeFile(
  path.join(PUB, 'site.webmanifest'),
  JSON.stringify(manifest, null, 2) + '\n'
);
console.log('✓ site.webmanifest');
