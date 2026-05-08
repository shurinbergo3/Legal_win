/**
 * LegalWin brand mark - gold shield with LW monogram + LEGALWIN wordmark.
 *
 *   <LogoBadge size={32} compact />  // favicon-tier - shield only
 *   <LogoBadge size={108} />         // header - shield + wordmark + tagline
 *   <LogoBadge size={168} />         // footer / hero
 *
 * The L and W on the shield share an identical cap height (rendered in a
 * serif so capital letters align top and bottom).
 */

import { useId } from 'react';
import { cn } from '@/lib/cn';
import { ThemisScalesPaths } from './ThemisScales';

const FONT_STACK =
  "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, 'Times New Roman', serif";

type GradientIds = {
  rim: string;
  body: string;
  shadow: string;
};

function GradientDefs({ ids }: { ids: GradientIds }) {
  return (
    <defs>
      <linearGradient id={ids.rim} x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#F4DA84" />
        <stop offset="22%" stopColor="#E1BC5E" />
        <stop offset="50%" stopColor="#9A6F1E" />
        <stop offset="78%" stopColor="#D9B358" />
        <stop offset="100%" stopColor="#7E5710" />
      </linearGradient>
      <linearGradient id={ids.body} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0e1a36" />
        <stop offset="100%" stopColor="#05091a" />
      </linearGradient>
      <filter id={ids.shadow} x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.55" />
      </filter>
    </defs>
  );
}

function Shield({ ids }: { ids: GradientIds }) {
  return (
    <g>
      <path
        d="M 50 24 L 270 24 Q 282 24 282 36 L 282 198 Q 282 250 160 292 Q 38 250 38 198 L 38 36 Q 38 24 50 24 Z"
        fill={`url(#${ids.rim})`}
        filter={`url(#${ids.shadow})`}
      />
      <path
        d="M 58 34 L 262 34 Q 272 34 272 44 L 272 195 Q 272 244 160 281 Q 48 244 48 195 L 48 44 Q 48 34 58 34 Z"
        fill={`url(#${ids.body})`}
      />
      <path
        d="M 64 40 L 256 40 Q 266 40 266 50 L 266 192 Q 266 238 160 273 Q 54 238 54 192 L 54 50 Q 54 40 64 40 Z"
        fill="none"
        stroke={`url(#${ids.rim})`}
        strokeWidth="0.9"
        opacity="0.85"
      />
      {/* Themis silhouette behind the LW monogram - thin, gold, ~22% opacity so
          it reads like an embossed watermark rather than a competing element.
          Paths are scaled to fit the inner shield bounds (54-266 × 40-273). */}
      <g
        transform="translate(60 40) scale(0.83)"
        color="#c9a84c"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.22"
      >
        <ThemisScalesPaths />
      </g>
      {/* Solid gold fill (not a gradient via url(#…)). iOS Safari can drop SVG
          <text> fills referencing internal gradients when an ancestor has CSS
          `filter: drop-shadow(...)` and is repainted (e.g. on scroll). */}
      <text
        x="160"
        y="194"
        textAnchor="middle"
        fontSize="116"
        fontWeight="700"
        fill="#E1BC5E"
        letterSpacing="-2"
        style={{ fontFamily: FONT_STACK }}
      >
        LW
      </text>
    </g>
  );
}

export function LogoBadge({
  className,
  size = 64,
  compact = false
}: {
  className?: string;
  size?: number;
  compact?: boolean;
}) {
  const uid = useId().replace(/[:]/g, '');
  const ids: GradientIds = {
    rim: `lw-rim-${uid}`,
    body: `lw-body-${uid}`,
    shadow: `lw-shadow-${uid}`
  };

  if (compact) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 320"
        width={size}
        height={size}
        className={cn(className)}
        role="img"
        aria-label="LegalWin"
      >
        <GradientDefs ids={ids} />
        <Shield ids={ids} />
      </svg>
    );
  }

  const fullHeight = Math.round((size * 420) / 320);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 420"
      width={size}
      height={fullHeight}
      className={cn(className)}
      role="img"
      aria-label="LegalWin · Warszawa · Polska"
    >
      <GradientDefs ids={ids} />
      <Shield ids={ids} />

      <text
        x="160"
        y="345"
        textAnchor="middle"
        fontSize="36"
        fontWeight="500"
        fill="#E1BC5E"
        letterSpacing="6"
        style={{ fontFamily: FONT_STACK }}
      >
        LEGALWIN
      </text>

      <line
        x1="118"
        y1="365"
        x2="202"
        y2="365"
        stroke={`url(#${ids.rim})`}
        strokeWidth="1"
        opacity="0.65"
      />

      <text
        x="160"
        y="395"
        textAnchor="middle"
        fontSize="13"
        fontWeight="500"
        fill="#E1BC5E"
        letterSpacing="6"
        opacity="0.9"
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
