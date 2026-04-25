# LegalWin — Brand Mark ("Sovereign Signet")

Signet-stamp aesthetic: double hairline ring, heraldic star ornament,
monumental geometric LW monogram (pure paths — font-independent),
engraved rule with diamond stops, and `LEGAL · WIN / WARSZAWA` lockup.
Scales 16px → poster.

## Files

| File | Use case | Color |
|------|----------|-------|
| `legal-win-gold.svg` | Standalone export for Figma, PDF, business cards, signatures | Gold (`#B8923A`) on transparent |
| `legal-win-ink.svg` | Letterhead, invoices, light surfaces | Ink (`#0a1021`) on transparent |

The favicon at `/public/favicon.svg` is a compact mark-only signet (no
wordmark — illegible at favicon size) on a rounded ink-navy chip.

## In-app component

`src/components/Logo.tsx` exports `<LogoBadge>`:

```tsx
<LogoBadge size={32} compact />   // favicon-tier — mark only
<LogoBadge size={108} />          // header — full badge
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

- LW monogram: rendered as pure SVG paths — no font dependency
- Wordmark `LEGAL · WIN` + tagline `WARSZAWA`: **Fraunces** (Latin) / **Source Serif 4** (Cyrillic fallback)
  via `--font-fraunces` / `--font-source-serif` (loaded in `layout.tsx`)

## Clearspace

Reserve at least the height of the badge on every side. Do not crop.
Do not recolor outside the gold/ink palette. Do not modify proportions
of the LW monogram or the typography lockup.
