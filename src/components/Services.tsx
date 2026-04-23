'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Fingerprint, FileText, Building2, Home, Plane } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { slugFromName } from '@/lib/services/slug-map';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type GroupKey = 'immigration' | 'documents' | 'business' | 'realestate' | 'relocation';

const groupMeta: Record<GroupKey, { Icon: LucideIcon; tone: string }> = {
  immigration: { Icon: Fingerprint, tone: 'from-gold-500/10' },
  documents: { Icon: FileText, tone: 'from-cyan-accent/10' },
  business: { Icon: Building2, tone: 'from-gold-500/10' },
  realestate: { Icon: Home, tone: 'from-ink-400/10' },
  relocation: { Icon: Plane, tone: 'from-cyan-accent/10' }
};

const groupOrder: GroupKey[] = [
  'immigration',
  'documents',
  'business',
  'realestate',
  'relocation'
];

type ServiceItem = { name: string; desc: string };

export function Services() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="mb-20 grid grid-cols-12 gap-8 lg:mb-28">
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
          <p className="col-span-12 max-w-lg self-end text-base text-ink-300 lg:col-span-3 lg:text-right">
            {t('subtitle')}
          </p>
        </div>

        {/* Category blocks */}
        <div className="flex flex-col">
          {groupOrder.map((key, i) => (
            <ServiceGroup key={key} groupKey={key} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGroup({ groupKey, index }: { groupKey: GroupKey; index: number }) {
  const t = useTranslations(`Services.groups.${groupKey}`);
  const tRoot = useTranslations('Services');
  const { Icon, tone } = groupMeta[groupKey];

  const number = t('number');
  const title = t('title');
  const lead = t('lead');
  const items = t.raw('items') as ServiceItem[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay: (index % 3) * 0.05 }}
      className="group relative border-t hairline py-14 lg:py-20"
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b opacity-0 transition-opacity duration-700 group-hover:opacity-100',
          tone,
          'to-transparent'
        )}
      />

      <div className="relative grid grid-cols-12 gap-x-6 gap-y-10">
        {/* Left: number + icon + heading */}
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-400">
              / {number}
            </span>
            <span className="h-px flex-1 bg-ink-800" />
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline bg-ink-950">
              <Icon className="h-4 w-4 text-gold-400" strokeWidth={1.6} aria-hidden />
            </span>
          </div>
          <h3 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.025em] text-ink-50">
            {title}
          </h3>
          <p className="max-w-md text-base leading-relaxed text-ink-300">{lead}</p>
          <a
            href="#contact"
            className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
          >
            <span className="gold-underline">{tRoot('cta')}</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
          </a>
        </div>

        {/* Right: items list */}
        <ul className="col-span-12 flex flex-col divide-y divide-[color-mix(in_oklab,var(--color-ink-50)_8%,transparent)] lg:col-span-7">
          {items.map((it, idx) => {
            const slug = slugFromName(it.name);
            return (
              <motion.li
                key={it.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease, delay: idx * 0.04 }}
              >
                <ServiceItemRow item={it} index={idx} slug={slug} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

function ServiceItemRow({
  item,
  index,
  slug
}: {
  item: ServiceItem;
  index: number;
  slug: string | null;
}) {
  const body = (
    <div className="group/item relative flex items-start gap-6 py-5 transition-colors hover:bg-ink-900/40">
      <span className="flex-shrink-0 pt-1 font-mono text-[11px] text-ink-500">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1">
        <h4 className="font-display text-xl font-semibold leading-tight text-ink-50 transition-colors group-hover/item:text-gold-400 sm:text-2xl">
          {item.name}
        </h4>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-300">
          {item.desc}
        </p>
      </div>
      <ArrowUpRight
        className="mt-1 h-5 w-5 flex-shrink-0 text-ink-500 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-gold-400"
        strokeWidth={1.4}
        aria-hidden
      />
    </div>
  );

  if (slug) {
    return (
      <Link href={`/uslugi/${slug}`} className="block">
        {body}
      </Link>
    );
  }
  return body;
}
