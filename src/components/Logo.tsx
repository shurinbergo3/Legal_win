/**
 * LegalWin brand mark — "Layered Monogram".
 *
 * Three-layer composition:
 *   1. Themis scales (back) — hairline ghosted halo (opacity 0.18)
 *   2. W (mid) — cream/ink-50, thinner stroke; W frames the canvas
 *   3. L (front) — primary gold (currentColor); L stem sits on the W's
 *      central vertical axis, L foot ends at the W's right-bottom vertex
 *
 * The L is centered inside the W: its stem coincides with the W's middle
 * peak, and its foot terminates at the W's right-bottom — the two letters
 * share that endpoint, integrating cleanly. The W "embraces" the L.
 *
 *   <LogoBadge size={32} compact />  // favicon-tier — LW only
 *   <LogoBadge size={108} />         // header — full lockup
 *   <LogoBadge size={168} />         // footer / hero
 *
 * L color follows parent (currentColor); W is fixed cream so the two
 * letters remain visually distinct regardless of parent text-* class.
 */

import { cn } from '@/lib/cn';

const W_COLOR = '#f5f7fb'; // ink-50 — cream-white, fixed accent for the W
const FONT_STACK =
  "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, serif";

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
        {/* W — wide, behind, frames the L on both sides */}
        <path
          d="M 40 70 L 100 250 L 160 140 L 220 250 L 280 70"
          stroke={W_COLOR}
          strokeWidth="22"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* L — front; stem on W's central axis, foot ends at W's right-bottom */}
        <path
          d="M 160 70 L 160 250 L 220 250"
          stroke="currentColor"
          strokeWidth="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
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
      {/* === THEMIS SCALES (background) — more legible === */}
      <g
        opacity="0.28"
        stroke="currentColor"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top finial */}
        <path d="M 156 22 L 160 16 L 164 22 L 160 28 Z" stroke="none" />
        {/* Vertical pole */}
        <line x1="160" y1="26" x2="160" y2="200" strokeWidth="2.0" fill="none" />
        {/* Beam (subtly arched) */}
        <path d="M 50 76 Q 160 68 270 76" strokeWidth="3.2" fill="none" />
        {/* Center balance diamond */}
        <path d="M 156 72 L 160 64 L 164 72 L 160 80 Z" stroke="none" />
        {/* Beam end caps */}
        <circle cx="50" cy="76" r="3.5" stroke="none" />
        <circle cx="270" cy="76" r="3.5" stroke="none" />
        {/* Suspension chains */}
        <line x1="50" y1="76" x2="32" y2="100" strokeWidth="1.8" fill="none" />
        <line x1="50" y1="76" x2="50" y2="100" strokeWidth="1.8" fill="none" />
        <line x1="50" y1="76" x2="68" y2="100" strokeWidth="1.8" fill="none" />
        <line x1="270" y1="76" x2="252" y2="100" strokeWidth="1.8" fill="none" />
        <line x1="270" y1="76" x2="270" y2="100" strokeWidth="1.8" fill="none" />
        <line x1="270" y1="76" x2="288" y2="100" strokeWidth="1.8" fill="none" />
        {/* Left pan */}
        <ellipse cx="50" cy="104" rx="25" ry="4.5" strokeWidth="2.4" fill="none" />
        <path d="M 25 105 Q 50 123 75 105" strokeWidth="2.4" fill="none" />
        {/* Right pan */}
        <ellipse cx="270" cy="104" rx="25" ry="4.5" strokeWidth="2.4" fill="none" />
        <path d="M 245 105 Q 270 123 295 105" strokeWidth="2.4" fill="none" />
      </g>

      {/* === W (mid layer, cream) — editorial: thin stroke, flat caps, miter corners === */}
      <path
        d="M 50 50 L 108 200 L 160 114 L 212 200 L 270 50"
        stroke={W_COLOR}
        strokeWidth="12"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* W serif accents — small horizontal bars at all four terminals */}
      <line x1="42" y1="50" x2="58" y2="50" stroke={W_COLOR} strokeWidth="5" strokeLinecap="butt" />
      <line x1="262" y1="50" x2="278" y2="50" stroke={W_COLOR} strokeWidth="5" strokeLinecap="butt" />
      <line x1="100" y1="200" x2="116" y2="200" stroke={W_COLOR} strokeWidth="5" strokeLinecap="butt" />
      <line x1="204" y1="200" x2="220" y2="200" stroke={W_COLOR} strokeWidth="5" strokeLinecap="butt" />

      {/* === L (front layer, gold) — editorial: thinner, flat caps, miter corner === */}
      <path
        d="M 160 50 L 160 200 L 212 200"
        stroke="currentColor"
        strokeWidth="16"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* L serif accents */}
      <line x1="151" y1="50" x2="169" y2="50" stroke="currentColor" strokeWidth="6.5" strokeLinecap="butt" />
      <line x1="212" y1="192" x2="212" y2="208" stroke="currentColor" strokeWidth="6.5" strokeLinecap="butt" />

      {/* === WORDMARK: LEGALWIN === */}
      <text
        x="160"
        y="232"
        textAnchor="middle"
        fontSize="22"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="5.4"
        style={{ fontFamily: FONT_STACK }}
      >
        LEGALWIN
      </text>

      {/* Hairline divider */}
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
        style={{ fontFamily: FONT_STACK }}
      >
        WARSZAWA · POLSKA
      </text>
    </svg>
  );
}

/* ---------- Backwards-compat exports ---------- */
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
