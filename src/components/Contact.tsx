'use client';

import { motion } from 'framer-motion';
import { useActionState, useId, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Fingerprint,
  Truck,
  Award,
  Briefcase,
  Receipt,
  MoreHorizontal,
  ShieldCheck,
  Lock,
  Timer
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { submitContact, type ContactState } from '@/app/[locale]/actions';
import { serviceValues, type ServiceValue } from '@/lib/schemas';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const initialState: ContactState = { status: 'idle' };

const serviceIcon: Record<ServiceValue, LucideIcon> = {
  trc: Fingerprint,
  driver: Truck,
  citizenship: Award,
  business: Briefcase,
  tax: Receipt,
  other: MoreHorizontal
};

export function Contact({ locale }: { locale: string }) {
  const t = useTranslations('Contact');
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t hairline py-24 sm:py-28 lg:py-36">
      {/* Ambient gold halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-1/4 h-[560px] w-[760px] rounded-full bg-gold-500/[0.07] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-0 h-[420px] w-[580px] rounded-full bg-cyan-accent/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — heading + contact details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 flex flex-col gap-10 lg:col-span-5"
          >
            <div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
                <span className="inline-block h-px w-10 bg-gold-500/60" />
                {t('eyebrow')}
              </div>
              <h2 className="font-display section-size mt-5 text-balance font-semibold text-ink-50">
                {t('title')}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300">
                {t('subtitle')}
              </p>
            </div>

            <ul className="flex flex-col gap-5 border-t hairline pt-8 text-sm">
              <InfoRow Icon={Phone} href={`tel:${t('phoneLine').replace(/\s/g, '')}`} label={t('phoneLine')} />
              <InfoRow Icon={Mail} href={`mailto:${t('emailLine')}`} label={t('emailLine')} />
              <InfoRow Icon={Clock} label={t('hours')} />
              <InfoRow Icon={MapPin} label={t('address')} />
            </ul>
          </motion.div>

          {/* RIGHT — premium form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="col-span-12 lg:col-span-7"
          >
            <FormCard>
              {state.status === 'success' ? (
                <SuccessPanel />
              ) : (
                <ContactForm
                  locale={locale}
                  action={formAction}
                  pending={pending}
                  state={state}
                />
              )}
            </FormCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Premium card frame ---------- */

function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      {/* Outer gold ring frame */}
      <div className="relative rounded-[28px] border hairline-gold bg-ink-900/40 p-px shadow-[0_0_0_1px_rgba(212,166,71,0.08),0_30px_120px_-40px_rgba(212,166,71,0.25)] backdrop-blur-xl">
        {/* Inner gradient background */}
        <div className="relative overflow-hidden rounded-[27px] bg-gradient-to-br from-ink-900/80 via-ink-950/95 to-ink-950">
          {/* Corner brackets — decorative */}
          <CornerBracket position="tl" />
          <CornerBracket position="tr" />
          <CornerBracket position="bl" />
          <CornerBracket position="br" />

          {/* Soft gold halo top-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
          />

          {/* Top status strip */}
          <div className="relative flex items-center justify-between border-b hairline px-6 py-3.5 sm:px-8">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-400">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.6} aria-hidden />
              <span>Form · 01 / Secure</span>
            </div>
            <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-400 sm:flex">
              <Lock className="h-3 w-3" strokeWidth={1.6} aria-hidden />
              <span>GDPR · TLS</span>
            </div>
          </div>

          {/* Body */}
          <div className="relative p-6 sm:p-8 lg:p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

function CornerBracket({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const map = {
    tl: 'top-3 left-3 border-t border-l rounded-tl-md',
    tr: 'top-3 right-3 border-t border-r rounded-tr-md',
    bl: 'bottom-3 left-3 border-b border-l rounded-bl-md',
    br: 'bottom-3 right-3 border-b border-r rounded-br-md'
  } as const;
  return (
    <span
      aria-hidden
      className={cn(
        'pointer-events-none absolute h-3 w-3 border-gold-500/50',
        map[position]
      )}
    />
  );
}

/* ---------- Reusable info row (left column) ---------- */

function InfoRow({
  Icon,
  label,
  href
}: {
  Icon: LucideIcon;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="h-4 w-4 flex-shrink-0 text-gold-400" strokeWidth={1.6} aria-hidden />
      <span>{label}</span>
    </>
  );
  if (href) {
    return (
      <li>
        <a href={href} className="flex items-center gap-3 text-ink-200 transition-colors hover:text-gold-400">
          {content}
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-3 text-ink-300">{content}</li>;
}

/* ---------- Form ---------- */

function ContactForm({
  locale,
  action,
  pending,
  state
}: {
  locale: string;
  action: (formData: FormData) => void;
  pending: boolean;
  state: ContactState;
}) {
  const t = useTranslations('Contact');
  const fieldErrors =
    state.status === 'invalid' ? state.fieldErrors : ({} as Record<string, string[]>);

  return (
    <form action={action} className="relative flex flex-col gap-7" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="text" name="hp" autoComplete="off" tabIndex={-1} aria-hidden className="sr-only" />

      {/* Personal info row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <Field
          name="name"
          label={t('name')}
          placeholder={t('namePlaceholder')}
          autoComplete="name"
          Icon={User}
          required
          error={fieldErrors.name && t('validation.nameMin')}
        />
        <Field
          name="email"
          type="email"
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          autoComplete="email"
          Icon={Mail}
          error={fieldErrors.email && t('validation.emailInvalid')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
      >
        <Field
          name="phone"
          type="tel"
          label={t('phone')}
          placeholder={t('phonePlaceholder')}
          autoComplete="tel"
          Icon={Phone}
          required
          error={fieldErrors.phone && t('validation.phoneInvalid')}
        />
      </motion.div>

      {/* Service chip group */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.15 }}
      >
        <ServiceChips
          required
          error={fieldErrors.service && t('validation.serviceRequired')}
        />
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
      >
        <TextareaField
          name="message"
          label={t('message')}
          placeholder={t('messagePlaceholder')}
          Icon={MessageSquare}
          error={fieldErrors.message && t('validation.messageMin')}
        />
      </motion.div>

      {/* Trust strip + submit */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.25 }}
        className="flex flex-col gap-5 border-t hairline pt-6"
      >
        {/* Trust signals */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-ink-400">
          <TrustChip Icon={Timer} label="≤ 1h reply" />
          <TrustChip Icon={ShieldCheck} label="Free · 30 min" />
          <TrustChip Icon={Lock} label="GDPR · encrypted" />
        </div>

        {/* Error + submit row */}
        <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          {state.status === 'error' ? (
            <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              {t('errorMessage')}
            </p>
          ) : (
            <span className="text-xs text-ink-400 sm:max-w-[260px]">
              {t('submit') === 'Отправить заявку'
                ? 'Юрист свяжется в течение часа.'
                : t('submit') === 'Wyślij zgłoszenie'
                ? 'Prawnik odpowie w ciągu godziny.'
                : 'A lawyer will reply within the hour.'}
            </span>
          )}

          <button
            type="submit"
            disabled={pending}
            className={cn(
              'group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-base font-medium text-ink-950 ring-gold transition-all duration-300',
              'bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600',
              'shadow-[0_8px_30px_-6px_rgba(212,166,71,0.55)] hover:shadow-[0_12px_40px_-6px_rgba(212,166,71,0.7)]',
              'hover:translate-y-[-1px]',
              'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'
            )}
          >
            {/* Shimmer overlay */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
            />
            {pending ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
                {t('submitting')}
              </>
            ) : (
              <>
                {t('submit')}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={1.6} aria-hidden />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </form>
  );
}

/* ---------- Trust chip ---------- */

function TrustChip({ Icon, label }: { Icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="h-3 w-3 text-gold-400" strokeWidth={1.8} aria-hidden />
      {label}
    </span>
  );
}

/* ---------- Success ---------- */

function SuccessPanel() {
  const t = useTranslations('Contact');
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease }}
      role="status"
      className="flex flex-col items-center gap-4 py-14 text-center"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-400 ring-1 ring-gold-500/40">
        <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} aria-hidden />
      </span>
      <h3 className="font-display text-3xl font-semibold text-ink-50">
        {t('successTitle')}
      </h3>
      <p className="max-w-sm text-ink-300">{t('successMessage')}</p>
    </motion.div>
  );
}

/* ---------- Field with icon prefix ---------- */

function Field({
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  Icon,
  required,
  error
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  Icon?: LucideIcon;
  required?: boolean;
  error?: string | false;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-300">
        <span>{label}</span>
        {required && <span className="text-gold-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={cn(
              'pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200',
              focused ? 'text-gold-400' : 'text-ink-500',
              error && 'text-red-400'
            )}
            strokeWidth={1.6}
            aria-hidden
          />
        )}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            'w-full rounded-xl border hairline bg-ink-950/60 py-3.5 text-base text-ink-50 placeholder:text-ink-500',
            Icon ? 'pl-11 pr-4' : 'px-4',
            'transition-all duration-200 focus:border-gold-500/60 focus:bg-ink-950/80 focus:outline-none focus:ring-4 focus:ring-gold-500/[0.08]',
            error && 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/[0.08]'
          )}
        />
      </div>
      {error && (
        <p id={`${id}-err`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- Textarea with icon prefix ---------- */

function TextareaField({
  name,
  label,
  placeholder,
  Icon,
  required,
  error
}: {
  name: string;
  label: string;
  placeholder?: string;
  Icon?: LucideIcon;
  required?: boolean;
  error?: string | false;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-300">
        <span>{label}</span>
        {required && <span className="text-gold-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={cn(
              'pointer-events-none absolute left-4 top-4 h-4 w-4 transition-colors duration-200',
              focused ? 'text-gold-400' : 'text-ink-500',
              error && 'text-red-400'
            )}
            strokeWidth={1.6}
            aria-hidden
          />
        )}
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            'w-full resize-none rounded-xl border hairline bg-ink-950/60 py-3.5 text-base text-ink-50 placeholder:text-ink-500',
            Icon ? 'pl-11 pr-4' : 'px-4',
            'transition-all duration-200 focus:border-gold-500/60 focus:bg-ink-950/80 focus:outline-none focus:ring-4 focus:ring-gold-500/[0.08]',
            error && 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/[0.08]'
          )}
        />
      </div>
      {error && (
        <p id={`${id}-err`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- Service chip selector ---------- */

function ServiceChips({
  required,
  error
}: {
  required?: boolean;
  error?: string | false;
}) {
  const t = useTranslations('Contact');
  const [selected, setSelected] = useState<ServiceValue | ''>('');

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-300">
        <span>{t('service')}</span>
        {required && <span className="text-gold-400">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {serviceValues.map((value) => {
          const Icon = serviceIcon[value];
          const label = t(`service${value.charAt(0).toUpperCase() + value.slice(1)}` as 'serviceTrc');
          const isSelected = selected === value;
          return (
            <label
              key={value}
              className={cn(
                'group/chip relative inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-200',
                isSelected
                  ? 'border-gold-500/70 bg-gold-400/15 text-gold-300 shadow-[0_0_0_3px_rgba(212,166,71,0.08)]'
                  : 'border-[color-mix(in_oklab,var(--color-ink-50)_10%,transparent)] bg-ink-950/40 text-ink-200 hover:border-gold-500/30 hover:bg-ink-900/60 hover:text-ink-50'
              )}
            >
              <input
                type="radio"
                name="service"
                value={value}
                required={required}
                checked={isSelected}
                onChange={() => setSelected(value)}
                className="sr-only"
                aria-invalid={!!error}
              />
              <Icon
                className={cn(
                  'h-3.5 w-3.5 transition-colors duration-200',
                  isSelected ? 'text-gold-400' : 'text-ink-400 group-hover/chip:text-gold-400'
                )}
                strokeWidth={1.7}
                aria-hidden
              />
              <span className="leading-none">{label}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
