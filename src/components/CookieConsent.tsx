'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Cookie, Settings as SettingsIcon, ShieldCheck, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import {
  ACCEPT_ALL,
  NECESSARY_ONLY,
  loadConsent,
  saveConsent,
  type ConsentChoices
} from '@/lib/cookie-consent';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Choices = Omit<ConsentChoices, 'necessary'>;

export function CookieConsent() {
  const t = useTranslations('Cookies');
  const [show, setShow] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [choices, setChoices] = useState<Choices>({
    functional: true,
    analytical: false,
    marketing: false
  });

  useEffect(() => {
    if (loadConsent() === null) {
      // Defer slightly so we don't block first paint.
      const id = window.setTimeout(() => setShow(true), 600);
      return () => window.clearTimeout(id);
    }
  }, []);

  // Allow other parts of the app to re-open settings (e.g. footer button).
  useEffect(() => {
    function reopen() {
      // Seed the toggles from the saved consent, otherwise the modal shows
      // hardcoded defaults and "Save" silently overwrites the user's choice.
      const saved = loadConsent();
      if (saved) {
        const { functional, analytical, marketing } = saved.choices;
        setChoices({ functional, analytical, marketing });
      }
      setShow(true);
      setSettingsOpen(true);
    }
    window.addEventListener('legalwin-open-cookie-settings', reopen);
    return () =>
      window.removeEventListener('legalwin-open-cookie-settings', reopen);
  }, []);

  function commit(c: Choices) {
    saveConsent(c);
    setShow(false);
    setSettingsOpen(false);
  }

  function closeSettings() {
    setSettingsOpen(false);
    // Don't resurrect the banner for users who already gave valid consent
    // (e.g. the modal was reopened from the footer and dismissed unchanged).
    if (loadConsent() !== null) setShow(false);
  }

  if (!show) return null;

  return (
    <>
      <AnimatePresence>
        {show && !settingsOpen && (
          <motion.div
            key="banner"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            role="dialog"
            aria-modal="false"
            aria-label={t('bannerTitle')}
            className="glass-strong fixed inset-x-3 bottom-3 z-[70] mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border hairline-gold p-5 shadow-elite sm:bottom-5 sm:inset-x-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
          >
            <div className="flex flex-1 items-start gap-3">
              <Cookie
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400"
                strokeWidth={1.6}
                aria-hidden
              />
              <div className="flex flex-col gap-1.5 text-sm text-ink-200">
                <span className="font-medium text-ink-50">
                  {t('bannerTitle')}
                </span>
                <p className="text-xs leading-relaxed text-ink-300">
                  {t('bannerIntro')}{' '}
                  <Link
                    href="/polityka-cookies"
                    className="text-gold-400 underline-offset-2 hover:underline"
                  >
                    {t('readMore')}
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border hairline px-4 py-2 text-xs text-ink-200 transition-colors hover:border-gold-500/50 hover:text-gold-400"
              >
                <SettingsIcon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
                {t('settings')}
              </button>
              <button
                type="button"
                onClick={() => commit(NECESSARY_ONLY)}
                className="inline-flex items-center justify-center rounded-full border hairline px-4 py-2 text-xs text-ink-200 transition-colors hover:border-gold-500/50 hover:text-gold-400"
              >
                {t('necessaryOnly')}
              </button>
              <button
                type="button"
                onClick={() => commit(ACCEPT_ALL)}
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-5 py-2 text-xs font-medium text-ink-950 ring-gold transition-colors hover:bg-gold-300"
              >
                {t('acceptAll')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {settingsOpen && (
          <SettingsModal
            t={t}
            choices={choices}
            onChange={setChoices}
            onSave={() => commit(choices)}
            onAcceptAll={() => commit(ACCEPT_ALL)}
            onNecessaryOnly={() => commit(NECESSARY_ONLY)}
            onClose={closeSettings}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function SettingsModal({
  t,
  choices,
  onChange,
  onSave,
  onAcceptAll,
  onNecessaryOnly,
  onClose
}: {
  t: (key: string) => string;
  choices: Choices;
  onChange: (c: Choices) => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onNecessaryOnly: () => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={t('settingsTitle')}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink-950/70 backdrop-blur-sm sm:items-center"
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease }}
        className="glass-strong relative max-h-[85dvh] w-full max-w-lg overflow-hidden rounded-t-3xl border hairline-gold shadow-elite sm:max-h-[80dvh] sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b hairline px-5 py-4 sm:px-7">
          <div className="flex items-center gap-2.5">
            <ShieldCheck
              className="h-5 w-5 text-gold-400"
              strokeWidth={1.6}
              aria-hidden
            />
            <h2 className="font-display text-lg font-semibold text-ink-50">
              {t('settingsTitle')}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('close')}
            className="rounded-full border hairline p-1.5 text-ink-300 transition-colors hover:border-gold-500/50 hover:text-gold-400"
          >
            <X className="h-4 w-4" strokeWidth={1.6} aria-hidden />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[55dvh] overflow-y-auto px-5 py-5 sm:px-7">
          <p className="mb-5 text-sm leading-relaxed text-ink-300">
            {t('settingsIntro')}
          </p>

          <div className="flex flex-col gap-2.5">
            <CategoryRow
              title={t('catNecessaryTitle')}
              desc={t('catNecessaryDesc')}
              checked={true}
              disabled
            />
            <CategoryRow
              title={t('catFunctionalTitle')}
              desc={t('catFunctionalDesc')}
              checked={choices.functional}
              onChange={(v) => onChange({ ...choices, functional: v })}
            />
            <CategoryRow
              title={t('catAnalyticalTitle')}
              desc={t('catAnalyticalDesc')}
              checked={choices.analytical}
              onChange={(v) => onChange({ ...choices, analytical: v })}
            />
            <CategoryRow
              title={t('catMarketingTitle')}
              desc={t('catMarketingDesc')}
              checked={choices.marketing}
              onChange={(v) => onChange({ ...choices, marketing: v })}
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col gap-2 border-t hairline bg-ink-900/40 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onNecessaryOnly}
              className="inline-flex items-center justify-center rounded-full border hairline px-4 py-2 text-xs text-ink-200 transition-colors hover:border-gold-500/50 hover:text-gold-400"
            >
              {t('necessaryOnly')}
            </button>
            <button
              type="button"
              onClick={onAcceptAll}
              className="inline-flex items-center justify-center rounded-full border hairline px-4 py-2 text-xs text-ink-200 transition-colors hover:border-gold-500/50 hover:text-gold-400"
            >
              {t('acceptAll')}
            </button>
          </div>
          <button
            type="button"
            onClick={onSave}
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-2.5 text-xs font-medium text-ink-950 ring-gold transition-colors hover:bg-gold-300"
          >
            {t('saveChoice')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CategoryRow({
  title,
  desc,
  checked,
  disabled,
  onChange
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div
      className={cn(
        'flex items-start justify-between gap-4 rounded-xl border hairline bg-ink-950/60 px-4 py-3.5',
        disabled && 'opacity-90'
      )}
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-ink-50">{title}</span>
        <span className="text-xs leading-relaxed text-ink-400">{desc}</span>
      </div>
      <Toggle
        checked={checked}
        disabled={disabled}
        onChange={onChange ?? (() => {})}
        ariaLabel={title}
      />
    </div>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
  ariaLabel
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200',
        checked ? 'bg-gold-400' : 'bg-ink-700',
        disabled && 'cursor-not-allowed opacity-80'
      )}
    >
      <span
        aria-hidden
        className={cn(
          'inline-block h-5 w-5 rounded-full bg-ink-50 shadow-sm transition-transform duration-200',
          checked ? 'translate-x-[22px]' : 'translate-x-0.5'
        )}
      />
    </button>
  );
}
