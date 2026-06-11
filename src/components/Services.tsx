'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight, Fingerprint, FileText, Building2, Home, Plane, Car } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { slugFromName } from '@/lib/services/slug-map';
import { Reveal } from './Reveal';

type GroupKey = 'immigration' | 'documents' | 'business' | 'realestate' | 'relocation' | 'auto';

type GlowConfig = {
  Icon: LucideIcon;
  rgb: string;
  spotOpacity: number;
  lineOpacity: number;
  ambientOpacity: number;
};

const groupMeta: Record<GroupKey, GlowConfig> = {
  immigration: { Icon: Fingerprint, rgb: '202, 138, 4',   spotOpacity: 0.17, lineOpacity: 0.9,  ambientOpacity: 0.055 },
  documents:   { Icon: FileText,    rgb: '34, 211, 238',  spotOpacity: 0.13, lineOpacity: 0.75, ambientOpacity: 0.04  },
  business:    { Icon: Building2,   rgb: '202, 138, 4',   spotOpacity: 0.17, lineOpacity: 0.9,  ambientOpacity: 0.055 },
  realestate:  { Icon: Home,        rgb: '148, 163, 184', spotOpacity: 0.10, lineOpacity: 0.6,  ambientOpacity: 0.03  },
  relocation:  { Icon: Plane,       rgb: '34, 211, 238',  spotOpacity: 0.13, lineOpacity: 0.75, ambientOpacity: 0.04  },
  auto:        { Icon: Car,         rgb: '202, 138, 4',   spotOpacity: 0.17, lineOpacity: 0.9,  ambientOpacity: 0.055 },
};

const groupOrder: GroupKey[] = [
  'immigration',
  'documents',
  'business',
  'realestate',
  'relocation',
  'auto'
];

type ServiceItem = { name: string; desc: string };

export function Services() {
  const t = useTranslations('Services');

  return (
    <section id="services" className="relative isolate overflow-clip py-28 lg:py-40">
      {/* Editorial giant "§" watermark - the legal section sign as a quiet authority mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 right-2 select-none font-display text-[clamp(12rem,26vw,26rem)] font-semibold leading-none text-gold-500/[0.05] sm:right-8"
      >
        §
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="mb-20 grid grid-cols-12 gap-x-0 gap-y-8 lg:mb-28 lg:gap-x-8">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <Reveal
            as="h2"
            margin="-100px"
            className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-9"
          >
            {t('title')}
          </Reveal>
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
  const { Icon, rgb, spotOpacity, lineOpacity, ambientOpacity } = groupMeta[groupKey];

  const number = t('number');
  const title = t('title');
  const lead = t('lead');
  const items = t.raw('items') as ServiceItem[];

  return (
    <>
      {/* Anchor for header dropdown deep-links (scroll-mt offsets the sticky header) */}
      <div id={`services-${groupKey}`} aria-hidden className="scroll-mt-28" />
      <Reveal
        margin="-80px"
        delay={(index % 3) * 50}
        className="group relative border-t hairline py-14 lg:py-20"
      >
      {/* Layer 1: always-visible ambient - anchored left, not centered */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-56"
        style={{
          background: `radial-gradient(ellipse 48% 100% at 14% 0%, rgba(${rgb}, ${ambientOpacity}) 0%, transparent 70%)`
        }}
      />

      {/* Layer 2: hover - luminous hairline along the border-top, peaks left-of-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg,
            rgba(${rgb}, 0) 0%,
            rgba(${rgb}, ${lineOpacity * 0.6}) 18%,
            rgba(${rgb}, ${lineOpacity}) 38%,
            rgba(${rgb}, ${lineOpacity}) 52%,
            rgba(${rgb}, ${lineOpacity * 0.6}) 72%,
            rgba(${rgb}, 0) 100%)`
        }}
      />

      {/* Layer 3: hover - elliptical spot light, anchored at the left content column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 52% 100% at 14% 0%,
            rgba(${rgb}, ${spotOpacity}) 0%,
            rgba(${rgb}, ${spotOpacity * 0.35}) 40%,
            transparent 70%)`
        }}
      />

      <div className="relative grid grid-cols-12 gap-x-6 gap-y-10">
        {/* Left: number + icon + heading - sticks during the group's scroll range */}
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-400">
              / {number}
            </span>
            {/* Static accent hairline */}
            <span
              aria-hidden
              className="relative h-px flex-1 overflow-hidden bg-ink-800"
            >
              <span
                aria-hidden
                className="absolute inset-0 block opacity-60"
                style={{
                  background: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, ${lineOpacity * 0.5}) 50%, rgba(${rgb}, ${lineOpacity * 0.8}) 100%)`
                }}
              />
            </span>
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
              <Reveal
                as="li"
                key={it.name}
                margin="-40px"
                delay={idx * 40}
              >
                <ServiceItemRow item={it} index={idx} slug={slug} />
              </Reveal>
            );
          })}
        </ul>
      </div>
      </Reveal>
    </>
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
