/**
 * Themis scales — line-art silhouette used as a decorative watermark.
 *
 *   <ThemisScales className="text-gold-400/[0.10] h-full w-full" />     (standalone)
 *   <g transform="translate(...) scale(...)"><ThemisScalesPaths /></g>  (nested)
 *
 * `ThemisScalesPaths` lets the Logo embed the same silhouette inside the
 * shield without nesting another <svg>; it also lets the Header reuse it as a
 * background watermark.
 */
export function ThemisScalesPaths() {
  return (
    <>
      {/* Top finial */}
      <circle cx="120" cy="22" r="4" fill="currentColor" stroke="none" />
      <line x1="120" y1="26" x2="120" y2="38" />
      {/* Decorative cap */}
      <path d="M112 38 L128 38 L126 44 L114 44 Z" />
      {/* Central column */}
      <line x1="120" y1="44" x2="120" y2="222" />
      {/* Crossbar */}
      <line x1="38" y1="60" x2="202" y2="60" />
      <circle cx="38" cy="60" r="2" fill="currentColor" stroke="none" />
      <circle cx="202" cy="60" r="2" fill="currentColor" stroke="none" />
      {/* Chains (left) */}
      <line x1="38" y1="62" x2="22" y2="118" />
      <line x1="38" y1="62" x2="54" y2="118" />
      {/* Chains (right) */}
      <line x1="202" y1="62" x2="186" y2="118" />
      <line x1="202" y1="62" x2="218" y2="118" />
      {/* Left pan */}
      <path d="M14 118 L62 118" />
      <path d="M14 118 Q38 148 62 118" />
      <path d="M22 134 Q38 142 54 134" opacity="0.6" />
      {/* Right pan */}
      <path d="M178 118 L226 118" />
      <path d="M178 118 Q202 148 226 118" />
      <path d="M186 134 Q202 142 218 134" opacity="0.6" />
      {/* Base */}
      <line x1="120" y1="222" x2="120" y2="240" />
      <path d="M92 240 L148 240" />
      <path d="M82 252 L158 252" />
      <path d="M76 262 L164 262" />
    </>
  );
}

export function ThemisScales({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <ThemisScalesPaths />
    </svg>
  );
}
