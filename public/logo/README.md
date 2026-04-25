# LegalWin — Brand Mark

Vector circular badge with Themis scales of justice, italic "LW" monogram,
and "LEGAL · WIN / WARSZAWA" lockup. Scales 16px → poster.

## Files

| File | Use case | Color |
|------|----------|-------|
| `legal-win-gold.svg` | Standalone export for Figma, PDF, business cards, signatures | Gold (`#B8923A`) on transparent |
| `legal-win-ink.svg` | Letterhead, invoices, light surfaces | Ink (`#0a1021`) on transparent |

The favicon at `/public/favicon.svg` is the same scales motif (without the
LW typography — illegible at favicon size) on a rounded ink-navy chip.

## In-app component

`src/components/Logo.tsx` exports `<LogoBadge>`:

```tsx
<LogoBadge size={48} compact />   // header — scales only
<LogoBadge size={168} />          // footer — full badge with text
```

- `size` (number, default 64) — pixel dimension
- `compact` (boolean) — hide LW + wordmark text (use for sizes <40px)
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

- LW italic monogram + LEGAL · WIN + WARSZAWA — **Cormorant Garamond**
  (loaded via next/font in `layout.tsx`)

## Clearspace

Reserve at least the height of the badge on every side. Do not crop.
Do not recolor outside the gold/ink palette. Do not modify proportions
of the scales or the typography lockup.
