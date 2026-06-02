// buildbyalex.com serves localized versions by path; we link to the version in
// the current page's language. Ukrainian lives at /ua (not /uk); unknown locales
// fall back to English.
const BBA_LOCALE: Record<string, string> = { ru: 'ru', pl: 'pl', en: 'en', uk: 'ua' };

type SiteCreditProps = {
  /** Localized lead-in, e.g. "Built by" / "Realizacja" / "Разработка". */
  label: string;
  /** Current site locale ('ru' | 'pl' | 'en' | 'tr' | 'uk'). */
  locale: string;
};

export function SiteCredit({ label, locale }: SiteCreditProps) {
  const href = `https://buildbyalex.com/${BBA_LOCALE[locale] ?? 'en'}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: buildbyalex`}
      className="group/bba inline-flex w-fit items-center gap-3.5 rounded-full border hairline bg-ink-900/30 px-[18px] py-[11px] no-underline transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.5 hover:border-gold-500/50 hover:bg-ink-900/55 hover:shadow-[0_12px_34px_-12px_rgba(212,166,71,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 motion-reduce:transition-none max-[540px]:gap-[11px] max-[540px]:px-[15px] max-[540px]:py-[10px]"
      style={{ boxShadow: '0 0 26px -14px rgba(212,166,71,0.45)' }}
    >
      <span className="font-mono text-[11px] uppercase leading-none tracking-[0.2em] text-ink-400 transition-colors duration-300 group-hover/bba:text-ink-100 max-[540px]:text-[10px] max-[540px]:tracking-[0.16em]">
        {label}
      </span>

      <span
        aria-hidden
        className="h-px w-[18px] bg-ink-50/20 transition-colors duration-300 group-hover/bba:bg-gold-500/70"
      />

      <svg
        viewBox="0 0 196 32"
        role="img"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        className="h-[21px] w-auto shrink-0 max-[540px]:h-[19px]"
      >
        <text
          x="0"
          y="25"
          fontFamily="'Bricolage Grotesque','Manrope',system-ui,sans-serif"
          fontWeight="700"
          fontSize="30"
          letterSpacing="-0.6"
          textLength="178"
          lengthAdjust="spacingAndGlyphs"
        >
          <tspan fill="#E7EBF3">build</tspan>
          <tspan fill="#E7EBF3" fillOpacity="0.5">by</tspan>
          <tspan fill="#F2682E">alex</tspan>
        </text>
        <circle cx="187" cy="23" r="3.4" fill="#F2682E" />
      </svg>

      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="shrink-0 text-gold-400 opacity-75 transition-[transform,opacity] duration-300 group-hover/bba:-translate-y-0.5 group-hover/bba:translate-x-0.5 group-hover/bba:opacity-100 motion-reduce:transition-none"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  );
}
