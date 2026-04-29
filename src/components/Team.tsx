'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Member = { initials: string; name: string; role: string };

export function Team() {
  const t = useTranslations('Team');
  const members = t.raw('members') as Member[];

  return (
    <section
      id="team"
      className="relative isolate overflow-hidden border-t hairline py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient gold accent — anchored top-right, like Cases */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-12%] h-[520px] w-[640px] rounded-full bg-gold-500/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section heading — same editorial pattern as Cases / Services */}
        <div className="mb-14 grid grid-cols-12 gap-6 lg:mb-20">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-9"
          >
            {t('title')}
          </motion.h2>
          <p className="col-span-12 max-w-md self-end text-base text-ink-300 lg:col-span-3 lg:text-right">
            {t('subtitle')}
          </p>
        </div>

        {/* Member grid */}
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border hairline bg-[color-mix(in_oklab,var(--color-ink-50)_8%,transparent)] sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.06 }}
              className="group relative flex flex-col gap-5 bg-ink-950 p-7 transition-colors duration-500 hover:bg-ink-900 lg:p-8"
            >
              {/* Hover gold halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top row: index */}
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500">
                / 0{i + 1}
              </span>

              {/* Initials portrait — placeholder until real photos are wired in.
                  Engraved-medallion style: gold ring, soft inner shadow, display
                  serif initials, tasteful and on-brand for a law firm. */}
              <div className="relative flex h-24 w-24 items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_30%_30%,rgba(233,194,105,0.25),transparent_60%)]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full border hairline-gold"
                />
                <div
                  aria-hidden
                  className="absolute inset-1 rounded-full border border-ink-50/[0.04] bg-ink-900/60"
                />
                <span className="relative font-display text-3xl font-semibold tracking-[-0.02em] text-gold-300">
                  {m.initials}
                </span>
              </div>

              {/* Name + role */}
              <div className="mt-auto flex flex-col gap-2 border-t hairline pt-5">
                <h3 className="font-display text-lg font-semibold leading-tight text-ink-50 sm:text-xl">
                  {m.name}
                </h3>
                <p className="text-sm leading-snug text-ink-300">{m.role}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
