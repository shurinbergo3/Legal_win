# LegalWin — Brand Mark Kit

All marks are vector (SVG) so they scale to any size — favicon, business card, billboard.

## Files

| File | Use case | Color |
|------|----------|-------|
| `mark-gold.svg` | Icon-only mark, 320×320 | Gold (`#D4A647`) on transparent |
| `mark-ink.svg` | Icon-only mark for light surfaces | Ink (`#05091a`) on transparent |
| `lockup-gold-on-dark.svg` | Header / dark business card / signature | Gold + cream on ink |
| `lockup-ink-on-light.svg` | Letterhead / invoice / light deck | Bronze + ink on cream |
| `stamp-gold-on-dark.svg` | Notarial stamp / footer ornament / wax-seal moments | Gold on ink |

The favicon at `/public/favicon.svg` is the same mark on a rounded ink-navy chip.

## In-app components

The site uses `src/components/Logo.tsx`:

- `<LogoMark />` — accepts `size`, `strokeWidth`, `className`. Inherits `currentColor`.
- `<LogoLockup />` — `markSize`, `wordSize`, optional subtitle.
- `<LogoStamp />` — circular badge with curved text + centered mark.

## Brand colors

```
Ink-950   #05091a   (background)
Ink-50    #f5f7fb   (foreground)
Gold-400  #E9C269   (accent — light gold)
Gold-500  #D4A647   (accent — primary gold)
Gold-600  #B4862E   (accent — bronze)
```

## Clearspace

Reserve at least the height of the mark on every side. Don't crop the mark.
Don't recolor outside the brand palette. Don't italicize the wordmark.
