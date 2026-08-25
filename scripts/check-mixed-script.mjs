#!/usr/bin/env node
// Ищет слова, в которых смешаны кириллица и латиница: «урząd», «Меldunek», «landlordа».
// Такие слова читаются как обычный текст, но это опечатка - см. §5.5 в .claude.md.

import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, extname, relative } from 'node:path';

const ROOT = process.cwd();
const DIRS = ['content', 'messages', 'src'];
const EXTS = new Set(['.md', '.mdx', '.json', '.ts', '.tsx', '.js', '.jsx']);
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'dist', 'build']);
const SKIP_FILES = new Set([
  'src/lib/detect-language.ts', // regex-классы вида [a-zа-яё]
]);

const TOKEN = /[A-Za-zÀ-ɏА-Яа-яЁёЇїІіЄєҐґ]+/g;
const CYR = /[А-Яа-яЁёЇїІіЄєҐґ]/;
const LAT = /[A-Za-zÀ-ɏ]/;

async function walk(dir, out = []) {
  let entries;
  try {
    entries = await readdir(join(ROOT, dir), { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const rel = join(dir, e.name);
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) await walk(rel, out);
    } else if (EXTS.has(extname(e.name)) && !SKIP_FILES.has(rel)) {
      out.push(rel);
    }
  }
  return out;
}

const files = (await Promise.all(DIRS.map((d) => walk(d)))).flat();
const hits = [];

for (const file of files) {
  const lines = readFileSync(join(ROOT, file), 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const m of line.matchAll(TOKEN)) {
      const word = m[0];
      if (!CYR.test(word) || !LAT.test(word)) continue;
      if (m.index > 0 && line[m.index - 1] === '\\') continue; // \nТекст
      hits.push({ file: relative(ROOT, file), line: i + 1, word, ctx: line.trim().slice(0, 120) });
    }
  });
}

if (hits.length === 0) {
  console.log('mixed-script: чисто');
  process.exit(0);
}

for (const h of hits) {
  console.error(`${h.file}:${h.line}  «${h.word}»  ${h.ctx}`);
}
console.error(`\nНайдено слов со смешанным алфавитом: ${hits.length}. Привести каждое к одному алфавиту.`);
process.exit(1);
