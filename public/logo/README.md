# LegalWin — Brand Mark ("Polish Bar")

One letter, one gesture: a monumental Polish **Ł**.

- Reads as "L" worldwide → Legal
- Polish letter Ł → unique national signature; no Western law firm uses this
- Built-in graphic detail (cross-stroke) replaces all decoration

Brutalist editorial: sharp corners, geometric stems, no rings, no ornaments.
Confidence through reduction.

## Files

| File | Use case | Color |
|------|----------|-------|
| `legal-win-gold.svg` | Standalone export for Figma, PDF, business cards, signatures | Gold (`#B8923A`) on transparent |
| `legal-win-ink.svg` | Letterhead, invoices, light surfaces | Ink (`#0a1021`) on transparent |

The favicon at `/public/favicon.svg` is the Ł mark only (no wordmark — illegible
at favicon size) on a rounded ink-navy chip.

## In-app component

`src/components/Logo.tsx` exports `<LogoBadge>`:

```tsx
<LogoBadge size={32} compact />   // favicon-tier — Ł only
<LogoBadge size={108} />          // header — Ł + LEGALWIN + tagline
<LogoBadge size={168} />          // footer / hero
```

- `size` (number, default 64) — pixel dimension
- `compact` (boolean) — strip wordmark + tagline (use for sizes <40px)
- `className` — applied to root SVG; controls color via `text-*` (currentColor)

## Brand colors

```
Ink-950   #05091a   (background)
Ink-900   #0a1021   (background — slightly lighter)
Ink-50    #f5f7fb   (foreground)
Gold-300  #f3d78a
Gold-400  #E9C269   (accent — light gold)
Gold-500  #D4A647   (accent — primary gold)
Gold-600  #B4862E   (accent — bronze, used in standalone SVG)
Gold-700  #8a631e
```

## Typography

- Ł monogram: rendered as pure SVG paths — no font dependency
- Wordmark `LEGALWIN` + tagline `WARSZAWA · POLSKA`: **Fraunces** (Latin) / **Source Serif 4** (Cyrillic fallback) via `--font-fraunces` / `--font-source-serif` (loaded in `layout.tsx`)

## Clearspace

Reserve at least the height of the badge on every side. Do not crop. Do not
recolor outside the gold/ink palette. Do not modify the proportions of the Ł
or the typography lockup. The diagonal cross-stroke must always slope from
lower-left to upper-right (the standard Polish Ł direction); reversing it
would look like a "cancel" mark.
