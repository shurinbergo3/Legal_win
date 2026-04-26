/**
 * LegalWin brand mark — "Polish Bar".
 *
 * One letter, one gesture: a monumental Polish Ł.
 *   - Reads as "L" for Legal worldwide
 *   - Polish Ł — unique national signature; no Western law firm uses this
 *   - Built-in graphic detail (cross-stroke) replaces all decoration
 *
 * Brutalist editorial: sharp corners, geometric stems, no rings, no
 * ornaments. Confidence through reduction. Pairs with a tracked LEGALWIN
 * wordmark + WARSZAWA · POLSKA tagline.
 *
 *   <LogoBadge size={32} compact />  // favicon-tier — mark only
 *   <LogoBadge size={108} />         // header — mark + wordmark + tagline
 *   <LogoBadge size={168} />         // footer / hero
 *
 * Uses currentColor so the parent's text-* class controls ink/gold tone.
 */

import { cn } from '@/lib/cn';

export function LogoBadge({
  className,
  size = 64,
  compact = false
}: {
  className?: string;
  size?: number;
  /** Strip the wordmark + tagline (use for favicon-tier sizes < 40px). */
  compact?: boolean;
}) {
  if (compact) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 320"
        width={size}
        height={size}
        className={cn('text-gold-500', className)}
        role="img"
        aria-label="LegalWin"
      >
        {/* Ł — fills the canvas. The L-shape (stem+foot) is the dominant
            visual mass, so we center IT on the canvas: foot center sits
            at x=160. Stem ends up slightly left of canvas center; slash
            is contained as a graphic detail crossing the stem
            symmetrically (not pulled out as a separate wing). */}
        {/* Stem */}
        <rect x="116" y="50" width="32" height="220" fill="currentColor" />
        {/* Foot — centered horizontally on canvas */}
        <rect x="116" y="234" width="88" height="32" fill="currentColor" />
        {/* Diagonal cross-stroke (the Polish bar) — symmetric across stem */}
        <line
          x1="84"
          y1="152"
          x2="180"
          y2="88"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="square"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 320"
      width={size}
      height={size}
      className={cn('text-gold-500', className)}
      role="img"
      aria-label="LegalWin · Warszawa"
    >
      {/* === Ł MONOGRAM === */}
      {/* L-shape centered on canvas: foot center sits at x=160. */}
      {/* Stem */}
      <rect x="128" y="22" width="22" height="156" fill="currentColor" />
      {/* Foot — centered horizontally on canvas */}
      <rect x="128" y="156" width="64" height="22" fill="currentColor" />
      {/* Diagonal cross-stroke — symmetric across stem, contained as detail */}
      <line
        x1="108"
        y1="92"
        x2="170"
        y2="56"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="square"
      />

      {/* === WORDMARK: LEGALWIN === */}
      <text
        x="160"
        y="232"
        textAnchor="middle"
        fontSize="22"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="5.4"
        style={{
          fontFamily:
            "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, serif"
        }}
      >
        LEGALWIN
      </text>

      {/* Hairline divider — single line, no diamonds, brutalist clean */}
      <line
        x1="116"
        y1="252"
        x2="204"
        y2="252"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.45"
      />

      {/* === TAGLINE === */}
      <text
        x="160"
        y="270"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="4.2"
        opacity="0.62"
        style={{
          fontFamily:
            "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, serif"
        }}
      >
        WARSZAWA · POLSKA
      </text>
    </svg>
  );
}

/* ---------- Backwards-compat exports ---------- */
// Existing imports throughout the app keep working.
export const LogoMark = (props: { className?: string; size?: number; strokeWidth?: number }) => (
  <LogoBadge className={props.className} size={props.size ?? 32} compact />
);

export const LogoLockup = (props: {
  className?: string;
  markSize?: number;
  wordSize?: number;
}) => (
  <LogoBadge className={props.className} size={props.markSize ?? 56} />
);

export const LogoStamp = (props: { className?: string; size?: number }) => (
  <LogoBadge className={props.className} size={props.size ?? 144} />
);
