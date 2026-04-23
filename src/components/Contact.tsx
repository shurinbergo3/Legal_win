'use client';

import { motion } from 'framer-motion';
import { useActionState, useId, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2, AlertCircle, Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { submitContact, type ContactState } from '@/app/[locale]/actions';
import { serviceValues } from '@/lib/schemas';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const initialState: ContactState = { status: 'idle' };

export function Contact({ locale }: { locale: string }) {
  const t = useTranslations('Contact');
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <section id="contact" className="relative border-t hairline py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[800px] -translate-x-1/2 bg-gold-500/5 blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
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
              <InfoRow
                Icon={Phone}
                href={`tel:${t('phoneLine').replace(/\s/g, '')}`}
                label={t('phoneLine')}
              />
              <InfoRow
                Icon={Mail}
                href={`mailto:${t('emailLine')}`}
                label={t('emailLine')}
              />
              <InfoRow Icon={Clock} label={t('hours')} />
              <InfoRow Icon={MapPin} label={t('address')} />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="glass relative overflow-hidden rounded-[var(--radius-card)] p-6 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
              />
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  Icon,
  label,
  href
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>;
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
    <form action={action} className="relative flex flex-col gap-5" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="text" name="hp" autoComplete="off" tabIndex={-1} aria-hidden className="sr-only" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label={t('name')}
          placeholder={t('namePlaceholder')}
          autoComplete="name"
          required
          error={fieldErrors.name && t('validation.nameMin')}
        />
        <Field
          name="email"
          type="email"
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          autoComplete="email"
          required
          error={fieldErrors.email && t('validation.emailInvalid')}
        />
        <Field
          name="phone"
          type="tel"
          label={t('phone')}
          placeholder={t('phonePlaceholder')}
          autoComplete="tel"
          required
          error={fieldErrors.phone && t('validation.phoneInvalid')}
        />
        <SelectField
          name="service"
          label={t('service')}
          placeholder={t('servicePlaceholder')}
          options={serviceValues.map((v) => ({
            value: v,
            label: t(`service${v.charAt(0).toUpperCase() + v.slice(1)}` as 'serviceTrc')
          }))}
          required
          error={fieldErrors.service && t('validation.serviceRequired')}
        />
      </div>

      <TextareaField
        name="message"
        label={t('message')}
        placeholder={t('messagePlaceholder')}
        required
        error={fieldErrors.message && t('validation.messageMin')}
      />

      <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        {state.status === 'error' ? (
          <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            {t('errorMessage')}
          </p>
        ) : (
          <span className="text-xs text-ink-400" />
        )}

        <button
          type="submit"
          disabled={pending}
          className={cn(
            'group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-ink-950 ring-gold transition-all duration-300',
            'hover:bg-gold-300',
            'disabled:cursor-not-allowed disabled:opacity-60'
          )}
        >
          {pending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950" />
              {t('submitting')}
            </>
          ) : (
            <>
              {t('submit')}
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.6} aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

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
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
        <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} aria-hidden />
      </span>
      <h3 className="font-display text-3xl font-semibold text-ink-50">
        {t('successTitle')}
      </h3>
      <p className="max-w-sm text-ink-300">{t('successMessage')}</p>
    </motion.div>
  );
}

function Field({
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  required,
  error
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string | false;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
        {label}
        {required && <span className="ml-0.5 text-gold-400">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(
          'w-full rounded-xl border hairline bg-ink-950/60 px-4 py-3.5 text-base text-ink-50 placeholder:text-ink-500',
          'transition-colors duration-200 focus:border-gold-500/50 focus:outline-none',
          error && 'border-red-500/60 focus:border-red-500/80'
        )}
      />
      {error && (
        <p id={`${id}-err`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({
  name,
  label,
  placeholder,
  required,
  error
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string | false;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
        {label}
        {required && <span className="ml-0.5 text-gold-400">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(
          'w-full resize-none rounded-xl border hairline bg-ink-950/60 px-4 py-3.5 text-base text-ink-50 placeholder:text-ink-500',
          'transition-colors duration-200 focus:border-gold-500/50 focus:outline-none',
          error && 'border-red-500/60 focus:border-red-500/80'
        )}
      />
      {error && (
        <p id={`${id}-err`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  name,
  label,
  placeholder,
  options,
  required,
  error
}: {
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string | false;
}) {
  const id = useId();
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
        {label}
        {required && <span className="ml-0.5 text-gold-400">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={cn(
            'w-full appearance-none rounded-xl border hairline bg-ink-950/60 px-4 py-3.5 pr-10 text-base text-ink-50',
            'transition-colors duration-200 focus:border-gold-500/50 focus:outline-none',
            !value && 'text-ink-500',
            error && 'border-red-500/60 focus:border-red-500/80'
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="bg-ink-950 text-ink-50">
              {o.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {error && (
        <p id={`${id}-err`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
