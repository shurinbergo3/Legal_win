# LegalWin — Brand Mark ("Layered Monogram")

Three-layer composition:

1. **Themis scales** (back) — hairline halo at low opacity (~0.18). Beam and pans peek out around the LW silhouette; pole is hidden behind the L.
2. **W** (mid layer) — cream / ink-50, thinner stroke. Four-stroke zigzag.
3. **L** (front layer) — primary gold, bolder stroke.

L and W **share the upper-left vertex** (a true ligature monogram). They diverge from that point: L goes straight down (vertical stem + horizontal foot), W zigzags right.

## Files

| File | Use case | Color |
|------|----------|-------|
| `legal-win-gold.svg` | Standalone export for Figma, PDF, business cards, signatures | Gold (`#B8923A`) + cream (`#f5f7fb`) on transparent |
| `legal-win-ink.svg` | Letterhead, invoices, light surfaces | Ink (`#0a1021`) + mid-gray (`#9aa6bd`) on transparent |

The favicon at `/public/favicon.svg` is the LW monogram only (no Themis, no
wordmark — illegible at favicon size) on a rounded ink-navy chip.

## In-app component

`src/components/Logo.tsx` exports `<LogoBadge>`:

```tsx
<LogoBadge size={32} compact />   // favicon-tier — LW only
<LogoBadge size={108} />          // header — Themis + LW + wordmark + tagline
<LogoBadge size={168} />          // footer / hero
```

- `size` (number, default 64) — pixel dimension
- `compact` (boolean) — strip Themis + wordmark + tagline (use for sizes <40px)
- `className` — applied to root SVG; controls the L color via `text-*` (currentColor)

## Brand colors

```
Ink-950   #05091a   (background)
Ink-900   #0a1021   (background — slightly lighter)
Ink-100   #e7ebf3   (light text on dark)
Ink-50    #f5f7fb   (cream-white — used for the W on dark surfaces)
Gold-300  #f3d78a   (light champagne)
Gold-400  #E9C269   (accent — light gold)
Gold-500  #D4A647   (accent — primary gold; used for the L)
Gold-600  #B4862E   (bronze — used in standalone gold SVG)
```

L color follows parent (`currentColor`); W is fixed (`#f5f7fb` on dark, `#9aa6bd` on light).

## Typography

- L and W: rendered as pure SVG paths — no font dependency
- Wordmark `LEGALWIN` + tagline `WARSZAWA · POLSKA`: **Fraunces** (Latin) / **Source Serif 4** (Cyrillic fallback) via `--font-fraunces` / `--font-source-serif` (loaded in `layout.tsx`)

## Clearspace

Reserve at least the height of the badge on every side. Do not crop.
Do not modify the proportions of the L+W ligature or the typography lockup.
The L and W must share the upper-left vertex — don't introduce a gap there.
