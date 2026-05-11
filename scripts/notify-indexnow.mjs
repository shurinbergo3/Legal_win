#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'legalwin.pl';
const SITE_URL = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const KEY = process.env.INDEXNOW_KEY;
const VERCEL_ENV = process.env.VERCEL_ENV;

if (VERCEL_ENV && VERCEL_ENV !== 'production') {
  console.log(`[indexnow] Skipping — VERCEL_ENV=${VERCEL_ENV} (not production)`);
  process.exit(0);
}

if (!KEY) {
  console.log('[indexnow] Skipping — INDEXNOW_KEY env var is not set');
  process.exit(0);
}

const candidates = [
  join('.next', 'server', 'app', 'sitemap.xml.body'),
  join('.next', 'server', 'app', 'sitemap.xml')
];

let xml = null;
for (const path of candidates) {
  if (existsSync(path)) {
    xml = readFileSync(path, 'utf8');
    console.log(`[indexnow] Reading sitemap from ${path}`);
    break;
  }
}

if (!xml) {
  console.log(`[indexnow] Local sitemap not found, falling back to ${SITE_URL}/sitemap.xml`);
  try {
    const res = await fetch(`${SITE_URL}/sitemap.xml`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.error(`[indexnow] Could not load sitemap: ${err.message}`);
    process.exit(0);
  }
}

const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].trim())
  .filter((u) => u.startsWith(SITE_URL));

if (urls.length === 0) {
  console.log('[indexnow] No URLs found in sitemap, skipping');
  process.exit(0);
}

console.log(`[indexnow] Submitting ${urls.length} URLs to IndexNow…`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${SITE_URL}/${KEY}.txt`,
  urlList: urls
};

try {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] ✓ Accepted (${res.status})`);
  } else {
    const text = await res.text().catch(() => '');
    console.warn(`[indexnow] Returned ${res.status} ${res.statusText} — ${text}`);
  }
} catch (err) {
  console.warn(`[indexnow] Request failed: ${err.message}`);
}

process.exit(0);
