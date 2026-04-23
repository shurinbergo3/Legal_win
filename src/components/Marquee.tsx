'use client';

import { useTranslations } from 'next-intl';

export function Marquee() {
  const t = useTranslations('Marquee');
  const items = t('items');
  const row = `${items} · ${items} · `;

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y hairline-gold bg-ink-950 py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex whitespace-nowrap">
        <span className="animate-marquee flex shrink-0 items-center font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold italic tracking-[-0.02em] text-gold-400/80">
          {row}
        </span>
        <span className="animate-marquee flex shrink-0 items-center font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold italic tracking-[-0.02em] text-gold-400/80">
          {row}
        </span>
      </div>
    </section>
  );
}
