/**
 * LegalWin brand mark.
 *
 * Single circular badge with Themis scales, "LW" italic monogram,
 * "LEGAL · WIN / WARSZAWA" caps below. Vector. Scales 16px → poster.
 *
 *   <LogoBadge size={56} />          // compact (header)
 *   <LogoBadge size={180} />         // full (footer, formal docs)
 *   <LogoBadge size={32} compact />  // scales-only (favicon-style)
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
  /** Hide LW + wordmark text (use for favicon-tier sizes <40px). */
  compact?: boolean;
}) {
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
      {/* Outer rings */}
      <circle cx="160" cy="160" r="148" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="160" cy="160" r="142" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Themis scales group */}
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Top diamond + finial */}
        <path d="M 160 66 L 163 74 L 160 78 L 157 74 Z" fill="currentColor" stroke="none" />
        <circle cx="160" cy="74" r="1.53" fill="currentColor" stroke="none" />

        {/* Twin pole lines */}
        <line x1="159" y1="78" x2="159" y2="162.5" strokeWidth="1.19" />
        <line x1="161" y1="78" x2="161" y2="162.5" strokeWidth="1.19" />

        {/* Beam (curved) + shadow line */}
        <path d="M 85 105.5 Q 160 96 235 105.5" strokeWidth="2.04" />
        <path d="M 89 108.5 Q 160 99 231 108.5" strokeWidth="0.68" opacity="0.65" />

        {/* Center balance diamond */}
        <path d="M 160 98.5 L 164 103.5 L 160 108.5 L 156 103.5 Z" fill="currentColor" stroke="none" />

        {/* Beam end caps */}
        <circle cx="85" cy="105.5" r="2.72" fill="currentColor" stroke="none" />
        <circle cx="235" cy="105.5" r="2.72" fill="currentColor" stroke="none" />

        {/* Suspension chains — left */}
        <line x1="85" y1="104.5" x2="59.5" y2="126.45" strokeWidth="0.94" />
        <line x1="85" y1="104.5" x2="85" y2="125.17" strokeWidth="0.94" />
        <line x1="85" y1="104.5" x2="110.5" y2="126.45" strokeWidth="0.94" />

        {/* Suspension chains — right */}
        <line x1="235" y1="104.5" x2="260.5" y2="126.45" strokeWidth="0.94" />
        <line x1="235" y1="104.5" x2="235" y2="125.17" strokeWidth="0.94" />
        <line x1="235" y1="104.5" x2="209.5" y2="126.45" strokeWidth="0.94" />

        {/* Left pan */}
        <g>
          <ellipse cx="85" cy="129" rx="30" ry="6.38" stroke="currentColor" strokeWidth="1.53" fill="none" />
          <ellipse cx="85" cy="129" rx="30" ry="5.42" fill="currentColor" stroke="none" opacity="0.95" />
          <path d="M 57 130 Q 85 147.6 113 130" strokeWidth="1.7" stroke="currentColor" fill="none" />
          <path d="M 60 132 Q 85 144 110 132" strokeWidth="0.68" stroke="currentColor" fill="none" opacity="0.55" />
          <circle cx="85" cy="148.6" r="1.02" fill="currentColor" stroke="none" />
        </g>

        {/* Right pan */}
        <g>
          <ellipse cx="235" cy="129" rx="30" ry="6.38" stroke="currentColor" strokeWidth="1.53" fill="none" />
          <ellipse cx="235" cy="129" rx="30" ry="5.42" fill="currentColor" stroke="none" opacity="0.95" />
          <path d="M 207 130 Q 235 147.6 263 130" strokeWidth="1.7" stroke="currentColor" fill="none" />
          <path d="M 210 132 Q 235 144 260 132" strokeWidth="0.68" stroke="currentColor" fill="none" opacity="0.55" />
          <circle cx="235" cy="148.6" r="1.02" fill="currentColor" stroke="none" />
        </g>

        {/* Tiered pedestal */}
        <rect x="150.55" y="162.5" width="18.9" height="2.38" fill="currentColor" stroke="none" />
        <path d="M 133.75 170.5 L 186.25 170.5 L 179.95 165.5 L 140.05 165.5 Z" fill="currentColor" stroke="none" />
        <rect x="127.45" y="172.5" width="65.1" height="2.72" fill="currentColor" stroke="none" />
        <line x1="123.25" y1="177.5" x2="196.75" y2="177.5" strokeWidth="0.85" />
      </g>

      {/* Decorative divider with end caps + dots */}
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <line x1="74" y1="186" x2="246" y2="186" />
        <line x1="74" y1="183" x2="74" y2="189" />
        <line x1="246" y1="183" x2="246" y2="189" />
        <circle cx="160" cy="186" r="2" fill="currentColor" stroke="none" />
        <circle cx="116" cy="186" r="1" fill="currentColor" stroke="none" />
        <circle cx="204" cy="186" r="1" fill="currentColor" stroke="none" />
      </g>

      {/* LW italic monogram + LEGAL · WIN / WARSZAWA — hidden in compact mode */}
      {!compact && (
        <>
          <text
            x="160"
            y="244"
            textAnchor="middle"
            fontSize="66"
            fontWeight="500"
            fontStyle="italic"
            fill="currentColor"
            letterSpacing="-2.64"
            style={{ fontFamily: "var(--font-cormorant), var(--font-cormorant), 'Cormorant Garamond', var(--font-source-serif), Georgia, serif" }}
          >
            LW
          </text>
          <text
            x="160"
            y="276"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="currentColor"
            letterSpacing="6"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', var(--font-source-serif), Georgia, serif" }}
          >
            LEGAL · WIN
          </text>
          <text
            x="160"
            y="294"
            textAnchor="middle"
            fontSize="9"
            fill="currentColor"
            letterSpacing="5"
            opacity="0.75"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', var(--font-source-serif), Georgia, serif" }}
          >
            WARSZAWA
          </text>
        </>
      )}
    </svg>
  );
}

/* ---------- Backwards-compat exports ---------- */
// Keep old names alive so existing imports don't break while we refactor.
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
