# Deploy & runtime performance notes

The site is built in GitHub Actions → pushed to ghcr → Dokploy pulls the image
and runs it. Build does **not** happen on the prod box. Prod is a single Dokploy
server (46.224.44.50, 4GB RAM + 2GB swap), no CDN in front by default.

Because everything is served from one small box with no edge cache, two runtime
costs dominate perceived slowness:

## 1. Persist the optimized-image cache (important)

`next/image` optimizes images **on demand at runtime** with `sharp`. Each
distinct (image, width, format) variant is generated once and cached under
`/app/.next/cache/images`. That directory lives inside the container, so it is
**wiped on every redeploy** — meaning the first visitor after each deploy
re-triggers sharp for every image on the page. On 4GB RAM this is the main
source of "the site lags when I open it" right after a deploy.

**Fix: mount a persistent volume at `/app/.next/cache`.**

In Dokploy → the app → **Advanced → Volumes**, add:

| Type         | Host path / volume name | Container path      |
|--------------|-------------------------|---------------------|
| Volume mount | `legalwin-next-cache`   | `/app/.next/cache`  |

The cache keys are based on source image content + request params (not the build
ID), so the volume stays valid across redeploys as long as the source images in
`public/` are unchanged. Source images are capped at 1920px wide (the largest
`deviceSizes` entry in `next.config.ts`) to keep sharp's decode cost down — see
the image-compression note below.

## 2. Put a CDN / edge cache in front (recommended)

Routing the domain through Cloudflare (free plan is enough) caches both the
static HTML (all content pages are statically prerendered — 435 routes) and the
`/_next/image` responses at the edge, which:

- removes the cold-start lag after deploys (edge keeps serving cached variants),
- offloads bandwidth and sharp CPU from the 4GB box,
- adds latency-reducing PoPs for visitors outside Poland.

Cache rules to set in Cloudflare:

- Cache everything for `/_next/static/*` and `/_next/image*` (Next already sends
  long `Cache-Control` for these; just don't strip it).
- Respect origin cache headers for HTML, or set a short edge TTL (e.g. 5 min)
  with stale-while-revalidate.
- Do **not** cache `/api/*` (Telegram webhook, chat, leads) — bypass cache.

## Image compression

Source images in `public/` are kept ≤1920px wide and webp quality ~80. If you
add new large source images, downscale them before committing — a 4032px camera
original forces sharp to decode ~9MP on every variant generation. A one-off pass:

```js
// node -e with sharp (already a dependency)
const s = require('sharp'), fs = require('fs'), path = require('path');
// resize >1920px wide to 1920, re-encode webp q80, overwrite if smaller
```

(See the git history around this note for the exact script used.)
