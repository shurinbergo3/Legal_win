/**
 * LegalWin logo system.
 *
 * Three variants share the same geometric scales mark:
 *  - <LogoMark />     icon-only (favicon, social avatars, compact UI)
 *  - <LogoLockup />   mark + "LegalWin" wordmark (header, business cards)
 *  - <LogoStamp />    circular notarial-stamp badge (footer, formal docs)
 *
 * The mark is a single-stroke architectural scales-of-justice glyph:
 * vertical pillar + horizontal beam + two suspended pans + tiered base.
 * No ornament. Reads at 16×16 (favicon) and at 320×320 (print).
 *
 * All variants use currentColor so they inherit theme colors.
 */

import { cn } from '@/lib/cn';

/* ---------- Mark ---------- */

export function LogoMark({
  className,
  size = 32,
  strokeWidth = 1.5
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Top finial */}
      <circle cx="16" cy="4" r="1.3" fill="currentColor" stroke="none" />
      {/* Central pillar */}
      <line x1="16" y1="5.4" x2="16" y2="25" />
      {/* Crossbeam */}
      <line x1="5" y1="9.5" x2="27" y2="9.5" />
      {/* Suspension drops */}
      <line x1="6" y1="9.5" x2="6" y2="13.4" />
      <line x1="26" y1="9.5" x2="26" y2="13.4" />
      {/* Left pan — shallow bowl */}
      <path d="M1.6 13.4 L10.4 13.4 Q6 18.4 1.6 13.4 Z" />
      {/* Right pan — shallow bowl */}
      <path d="M21.6 13.4 L30.4 13.4 Q26 18.4 21.6 13.4 Z" />
      {/* Tiered base */}
      <line x1="12.5" y1="25" x2="19.5" y2="25" />
      <line x1="10.5" y1="27" x2="21.5" y2="27" />
      <line x1="8.5" y1="29" x2="23.5" y2="29" />
    </svg>
  );
}

/* ---------- Lockup (mark + wordmark) ---------- */

export function LogoLockup({
  className,
  markSize = 32,
  wordSize = 22,
  showSubtitle = false,
  subtitle = 'Adwokaci · Warszawa'
}: {
  className?: string;
  markSize?: number;
  wordSize?: number;
  showSubtitle?: boolean;
  subtitle?: string;
}) {
  return (
    <span
      className={cn('inline-flex items-center gap-2.5 text-ink-50', className)}
      aria-label="LegalWin"
    >
      <LogoMark size={markSize} className="text-gold-400" />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-semibold tracking-[-0.02em]"
          style={{ fontSize: wordSize }}
        >
          LegalWin
        </span>
        {showSubtitle && (
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.32em] text-ink-400">
            {subtitle}
          </span>
        )}
      </span>
    </span>
  );
}

/* ---------- Stamp (circular badge with curved text) ---------- */

export function LogoStamp({
  className,
  size = 144
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 144 144"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="LegalWin · Warszawa"
    >
      <defs>
        {/* Top arc for curved text — runs left-to-right across the top */}
        <path
          id="legalwin-stamp-top-arc"
          d="M 18 72 A 54 54 0 0 1 126 72"
          fill="none"
        />
      </defs>

      {/* Outer ring (very thin, faded) */}
      <circle
        cx="72"
        cy="72"
        r="69"
        strokeWidth="0.5"
        opacity="0.35"
      />
      {/* Inner ring */}
      <circle cx="72" cy="72" r="62" strokeWidth="0.7" />

      {/* Side dots — anchor points where rings meet */}
      <circle cx="10" cy="72" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="134" cy="72" r="1.4" fill="currentColor" stroke="none" />

      {/* Curved text along top arc */}
      <text
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="7"
        fontWeight="500"
        letterSpacing="2.6"
        fill="currentColor"
        stroke="none"
      >
        <textPath
          href="#legalwin-stamp-top-arc"
          startOffset="50%"
          textAnchor="middle"
        >
          L E G A L W I N · W A R S Z A W A
        </textPath>
      </text>

      {/* Centered scales mark */}
      <g transform="translate(56, 50) scale(1.3)">
        <circle cx="16" cy="4" r="1.3" fill="currentColor" stroke="none" />
        <line x1="16" y1="5.4" x2="16" y2="25" strokeWidth="1.2" />
        <line x1="5" y1="9.5" x2="27" y2="9.5" strokeWidth="1.2" />
        <line x1="6" y1="9.5" x2="6" y2="13.4" strokeWidth="1.2" />
        <line x1="26" y1="9.5" x2="26" y2="13.4" strokeWidth="1.2" />
        <path
          d="M1.6 13.4 L10.4 13.4 Q6 18.4 1.6 13.4 Z"
          strokeWidth="1.2"
        />
        <path
          d="M21.6 13.4 L30.4 13.4 Q26 18.4 21.6 13.4 Z"
          strokeWidth="1.2"
        />
        <line x1="12.5" y1="25" x2="19.5" y2="25" strokeWidth="1.2" />
        <line x1="10.5" y1="27" x2="21.5" y2="27" strokeWidth="1.2" />
        <line x1="8.5" y1="29" x2="23.5" y2="29" strokeWidth="1.2" />
      </g>

      {/* Bottom est. line — straight, mono, small */}
      <text
        x="72"
        y="118"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontSize="6"
        letterSpacing="1.8"
        fill="currentColor"
        stroke="none"
        textAnchor="middle"
      >
        EST · MMXIX
      </text>
    </svg>
  );
}
