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
        {/* Ł — fills the canvas */}
        {/* Stem */}
        <rect x="112" y="44" width="32" height="220" fill="currentColor" />
        {/* Foot */}
        <rect x="112" y="232" width="124" height="32" fill="currentColor" />
        {/* Diagonal cross-stroke (the Polish bar) */}
        <line
          x1="86"
          y1="174"
          x2="166"
          y2="116"
          stroke="currentColor"
          strokeWidth="16"
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
      {/* Stem */}
      <rect x="138" y="32" width="22" height="156" fill="currentColor" />
      {/* Foot */}
      <rect x="138" y="170" width="86" height="22" fill="currentColor" />
      {/* Diagonal cross-stroke */}
      <line
        x1="120"
        y1="124"
        x2="172"
        y2="86"
        stroke="currentColor"
        strokeWidth="11"
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
