import { cn } from '@/lib/cn';

const GOLD_STOPS = (
  <defs>
    <linearGradient id="lgGold" x1="15%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%"   stopColor="#F2E08A" />
      <stop offset="30%"  stopColor="#C9A84C" />
      <stop offset="55%"  stopColor="#9A6F1E" />
      <stop offset="80%"  stopColor="#C9A84C" />
      <stop offset="100%" stopColor="#8B6210" />
    </linearGradient>
    <linearGradient id="lgText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stopColor="#F0DC82" />
      <stop offset="45%"  stopColor="#C9A84C" />
      <stop offset="100%" stopColor="#A07828" />
    </linearGradient>
    <linearGradient id="lgNavy" x1="0%" y1="0%" x2="100%" y2="120%">
      <stop offset="0%"   stopColor="#1E2E55" />
      <stop offset="100%" stopColor="#09142A" />
    </linearGradient>
    <filter id="lgDrop" x="-20%" y="-10%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.5" />
    </filter>
    <filter id="lgGlow">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="b" />
      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>
);

/** Shield body — shared between compact and full */
function ShieldMark() {
  return (
    <>
      {/* Outer gold rim */}
      <path
        d="M 28,12 L 172,12 Q 192,12 192,34 L 192,150 Q 192,202 100,236 Q 8,202 8,150 L 8,34 Q 8,12 28,12 Z"
        fill="url(#lgGold)"
        filter="url(#lgDrop)"
      />
      {/* Navy body */}
      <path
        d="M 37,21 L 163,21 Q 181,21 181,41 L 181,148 Q 181,196 100,228 Q 19,196 19,148 L 19,41 Q 19,21 37,21 Z"
        fill="url(#lgNavy)"
      />
      {/* Inner border */}
      <path
        d="M 45,29 L 155,29 Q 171,29 171,46 L 171,145 Q 171,189 100,220 Q 29,189 29,145 L 29,46 Q 29,29 45,29 Z"
        fill="none"
        stroke="url(#lgGold)"
        strokeWidth="1.3"
      />
      {/* Hairline inner border */}
      <path
        d="M 51,35 L 149,35 Q 163,35 163,50 L 163,143 Q 163,183 100,212 Q 37,183 37,143 L 37,50 Q 37,35 51,35 Z"
        fill="none"
        stroke="url(#lgGold)"
        strokeWidth="0.5"
        opacity="0.55"
      />
      {/* Corner diamonds */}
      <polygon points="45,29 51,35 45,41 39,35" fill="url(#lgGold)" opacity="0.9" />
      <polygon points="155,29 161,35 155,41 149,35" fill="url(#lgGold)" opacity="0.9" />
      {/* LW monogram */}
      <text
        x="100"
        y="152"
        fontFamily="'Georgia','Times New Roman',Times,serif"
        fontSize="84"
        fontWeight="700"
        fill="url(#lgText)"
        textAnchor="middle"
        letterSpacing="-3"
        filter="url(#lgGlow)"
      >
        LW
      </text>
    </>
  );
}

export function LogoBadge({
  className,
  size = 64,
  compact = false
}: {
  className?: string;
  size?: number;
  /** Compact mode: shield mark only, no wordmark. Use for small/favicon-tier sizes. */
  compact?: boolean;
}) {
  // height derived from aspect ratio to keep proportions
  const compactH = Math.round(size * (228 / 200));
  const fullH    = Math.round(size * (268 / 200));

  if (compact) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 228"
        width={size}
        height={compactH}
        className={cn(className)}
        role="img"
        aria-label="LegalWin"
      >
        {GOLD_STOPS}
        <ShieldMark />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 268"
      width={size}
      height={fullH}
      className={cn(className)}
      role="img"
      aria-label="LegalWin · Warszawa"
    >
      {GOLD_STOPS}
      <ShieldMark />

      {/* Divider */}
      <line x1="18" y1="247" x2="182" y2="247" stroke="url(#lgGold)" strokeWidth="0.7" opacity="0.6" />

      {/* LEGALWIN wordmark */}
      <text
        x="100"
        y="263"
        fontFamily="'Georgia','Times New Roman',Times,serif"
        fontSize="16.5"
        fontWeight="600"
        fill="url(#lgText)"
        textAnchor="middle"
        letterSpacing="8"
      >
        LEGALWIN
      </text>
    </svg>
  );
}

/* ---------- Backwards-compat exports ---------- */
export const LogoMark = (props: { className?: string; size?: number }) => (
  <LogoBadge className={props.className} size={props.size ?? 32} compact />
);

export const LogoLockup = (props: { className?: string; markSize?: number }) => (
  <LogoBadge className={props.className} size={props.markSize ?? 56} />
);

export const LogoStamp = (props: { className?: string; size?: number }) => (
  <LogoBadge className={props.className} size={props.size ?? 144} />
);
