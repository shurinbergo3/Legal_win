'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Member = { initials: string; name: string; role: string };

const gradients = [
  'from-gold-400 to-gold-600',
  'from-cyan-accent to-ink-600',
  'from-gold-500 to-ink-700',
  'from-ink-400 to-gold-600',
  'from-gold-400 to-ink-700',
  'from-cyan-accent to-gold-600',
  'from-gold-500 to-ink-600',
  'from-ink-500 to-gold-500'
];

export function Team() {
  const t = useTranslations('Team');
  const members = t.raw('members') as Member[];

  return (
    <section id="team" className="relative border-t hairline py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
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
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-8"
          >
            {t('title')}
          </motion.h2>
          <p className="col-span-12 max-w-md self-end text-base text-ink-300 lg:col-span-4 lg:text-right">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-[color-mix(in_oklab,var(--color-ink-50)_8%,transparent)] sm:grid-cols-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="group relative flex flex-col gap-5 bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900 lg:p-8"
            >
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
                <span className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold text-ink-950">
                  {m.initials}
                </span>
                <span className="absolute bottom-3 right-3 font-mono text-[10px] text-ink-950/60">
                  0{i + 1}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-display text-lg font-semibold leading-tight text-ink-50">
                  {m.name}
                </span>
                <span className="text-xs text-ink-400">{m.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
