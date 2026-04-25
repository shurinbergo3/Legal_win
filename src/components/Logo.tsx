/**
 * LegalWin brand mark — "Sovereign Signet".
 *
 * A signet-stamp aesthetic: double hairline ring, heraldic star ornament,
 * monumental LW monogram (pure SVG paths — no font dependency), engraved
 * rule with diamond stops, and a tracked LEGAL · WIN wordmark below.
 *
 *   <LogoBadge size={56} />          // header
 *   <LogoBadge size={168} />         // footer / hero
 *   <LogoBadge size={32} compact />  // favicon-tier (mark only)
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
      {/* === SIGNET FRAME === */}
      {/* Outer hairline ring */}
      <circle
        cx="160"
        cy="160"
        r="152"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      {/* Inner ghost ring — gives the signet its doubled-border craft */}
      <circle
        cx="160"
        cy="160"
        r="146"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.45"
      />

      {/* === TOP ORNAMENT (heraldic star + flanking ticks) === */}
      {/* Five-point star at 12 o'clock — discreet sovereignty mark */}
      <path
        d="M160 16 L162.65 23.15 L170.3 23.15 L164.0 27.6 L166.4 35.05 L160 30.55 L153.6 35.05 L156.0 27.6 L149.7 23.15 L157.35 23.15 Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* Symmetric flanking ticks */}
      <line
        x1="132"
        y1="25"
        x2="142"
        y2="25"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.55"
      />
      <line
        x1="178"
        y1="25"
        x2="188"
        y2="25"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.55"
      />

      {/* === LW MONOGRAM (pure paths, font-independent) === */}
      {/* Capital L — confident vertical with extending foot */}
      <path
        d="M 104 80 L 104 184 L 152 184"
        stroke="currentColor"
        strokeWidth="13"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Capital W — four geometric strokes meeting at sharp peaks */}
      <path
        d="M 168 80 L 184 184 L 192 132 L 200 184 L 216 80"
        stroke="currentColor"
        strokeWidth="13"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tiny linking dot between L and W — turns two letters into one mark */}
      <circle cx="160" cy="184" r="2.2" fill="currentColor" />

      {!compact && (
        <>
          {/* === ENGRAVED RULE — connects mark to wordmark === */}
          <line
            x1="92"
            y1="214"
            x2="228"
            y2="214"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.7"
          />
          {/* Diamond end caps */}
          <path
            d="M88 214 L92 209 L96 214 L92 219 Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M224 214 L228 209 L232 214 L228 219 Z"
            fill="currentColor"
            opacity="0.85"
          />

          {/* === WORDMARK: LEGAL ⋄ WIN === */}
          <text
            x="151"
            y="244"
            textAnchor="end"
            fontSize="16.5"
            fontWeight="600"
            fill="currentColor"
            letterSpacing="3.6"
            style={{
              fontFamily:
                "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, serif"
            }}
          >
            LEGAL
          </text>
          {/* Centered diamond between the two halves of the name */}
          <path
            d="M155 238 L160 232 L165 238 L160 244 Z"
            fill="currentColor"
          />
          <text
            x="169"
            y="244"
            textAnchor="start"
            fontSize="16.5"
            fontWeight="600"
            fill="currentColor"
            letterSpacing="3.6"
            style={{
              fontFamily:
                "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, serif"
            }}
          >
            WIN
          </text>

          {/* === TAGLINE: WARSZAWA === */}
          <text
            x="160"
            y="266"
            textAnchor="middle"
            fontSize="9"
            fontWeight="500"
            fill="currentColor"
            letterSpacing="4.8"
            opacity="0.62"
            style={{
              fontFamily:
                "var(--font-fraunces), var(--font-source-serif), 'Fraunces', 'Cormorant Garamond', Georgia, serif"
            }}
          >
            WARSZAWA
          </text>
        </>
      )}
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
