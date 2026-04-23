'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const item = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease } }
};

export function Hero() {
  const t = useTranslations('Hero');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 220]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -180]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="hero-gradient relative isolate overflow-hidden pt-36 pb-28 sm:pt-44 lg:pt-52 lg:pb-36"
    >
      {/* Editorial grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage:
            'radial-gradient(ellipse 70% 65% at 50% 35%, #000 60%, transparent 100%)'
        }}
      />

      {/* Ambient parallax orbs */}
      <motion.div
        aria-hidden
        style={{ y: orb1Y }}
        className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full bg-gold-500/25 blur-[130px] blob-1"
      />
      <motion.div
        aria-hidden
        style={{ y: orb2Y }}
        className="pointer-events-none absolute bottom-[-25%] left-[-12%] h-[520px] w-[520px] rounded-full bg-cyan-accent/10 blur-[130px] blob-2"
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 gap-y-10 px-6 lg:px-10"
      >
        {/* Status strip */}
        <motion.div
          variants={item}
          className="col-span-12 flex flex-wrap items-center justify-between gap-5"
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <div className="flex items-center gap-2 rounded-full border hairline bg-ink-900/40 px-3 py-1.5 text-[11px] text-ink-200">
            <span className="relative inline-flex h-2 w-2">
              <span className="pulse-dot absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t('availableNow')} · {t('hoursToday')}
          </div>
        </motion.div>

        {/* Oversized headline */}
        <motion.h1
          variants={item}
          className="font-display hero-size col-span-12 text-balance font-semibold text-ink-50"
        >
          <span className="block">{t('titleLine1')}</span>
          <span className="block italic text-gold-400">
            {t('titleLine2')}
            <span className="caret ml-1 inline-block h-[0.75em] w-[0.08em] translate-y-[-0.1em] bg-gold-400 align-middle" />
          </span>
        </motion.h1>

        {/* Subtitle + CTAs */}
        <motion.p
          variants={item}
          className="col-span-12 max-w-2xl text-pretty text-lg leading-relaxed text-ink-300 lg:col-span-7 lg:text-xl"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          variants={item}
          className="col-span-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-ink-950 ring-gold transition-all duration-300 hover:bg-gold-300"
          >
            {t('ctaPrimary')}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.6}
              aria-hidden
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border hairline px-7 py-4 text-base text-ink-50 transition-colors duration-300 hover:border-gold-500/50 hover:bg-ink-800/60"
          >
            {t('ctaSecondary')}
          </a>
          <a
            href="tel:+48506550721"
            className="hidden items-center gap-2 pl-2 text-sm text-ink-300 transition-colors hover:text-gold-400 sm:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            +48 506 55 07 21
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ink-400">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          scroll
        </motion.div>
      </div>
    </section>
  );
}
