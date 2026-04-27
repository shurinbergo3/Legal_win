'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Send, X } from 'lucide-react';
import { cn } from '@/lib/cn';

// Operator portrait — drop the photo at public/chatbot/operator.jpg.
// Used in the floating toggle, the panel header, and beside each
// assistant message for a "live operator" feel.
const OPERATOR_AVATAR = '/chatbot/operator.png';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Open the tease popup after this many ms of idleness, once per session.
const IDLE_TEASE_MS = 10_000;
const TEASE_SESSION_KEY = 'lw-chat-tease-shown';

export function Chatbot() {
  const t = useTranslations('Chat');
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [tease, setTease] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, status, error } = useChat({
    api: '/api/chat'
  });

  // Auto-scroll to bottom when messages arrive or panel opens
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, open]);

  /* --- Tease: open mini-popup ~10s after first visit, once per session.
     Earlier version reset the timer on mousemove/scroll, so on a normal
     browsing session it never fired. Now it's a simple page-time timer. */
  useEffect(() => {
    if (reduce) return;
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(TEASE_SESSION_KEY)) return;
    if (open) return;

    const timer = window.setTimeout(() => {
      // Re-check at fire time — user might have opened chat in the meantime.
      if (!sessionStorage.getItem(TEASE_SESSION_KEY)) {
        setTease(true);
        sessionStorage.setItem(TEASE_SESSION_KEY, '1');
      }
    }, IDLE_TEASE_MS);

    return () => window.clearTimeout(timer);
  }, [open, reduce]);

  // Opening the chat dismisses the tease
  const openChat = useCallback(() => {
    setOpen(true);
    setTease(false);
  }, []);

  const dismissTease = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setTease(false);
  }, []);

  const loading = status === 'submitted' || status === 'streaming';

  return (
    <>
      {/* === Floating toggle === */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
        {/* Pulsing halo — only when closed and no reduced-motion */}
        {!open && !reduce && (
          <>
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-gold-400/40"
              animate={{ scale: [1, 1.65], opacity: [0.45, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: 'easeOut'
              }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-gold-400/30"
              animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 2.2,
                delay: 0.4,
                ease: 'easeOut'
              }}
            />
          </>
        )}

        <motion.button
          type="button"
          onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'group relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full text-ink-950 shadow-elite transition-colors duration-300',
            open
              ? 'bg-ink-50'
              : 'bg-gold-400 ring-2 ring-gold-400/30 ring-offset-2 ring-offset-ink-950 hover:bg-gold-300'
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" strokeWidth={1.8} aria-hidden />
              </motion.span>
            ) : (
              <motion.span
                key="avatar"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.25, ease }}
                className="relative h-full w-full"
              >
                <Image
                  src={OPERATOR_AVATAR}
                  alt={t('title')}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
                {/* Online dot */}
                <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-gold-400 bg-emerald-400" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* === Tease popup === */}
        <AnimatePresence>
          {tease && !open && (
            <motion.div
              key="tease"
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 360,
                damping: 28,
                mass: 0.6
              }}
              role="button"
              tabIndex={0}
              aria-label={t('teaseCta')}
              onClick={openChat}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openChat();
                }
              }}
              style={{ transformOrigin: 'bottom right' }}
              className="glass-strong absolute bottom-[calc(100%+12px)] right-0 w-[280px] cursor-pointer overflow-hidden rounded-2xl border hairline-gold shadow-elite transition-shadow hover:shadow-[0_30px_80px_-20px_rgba(212,166,71,0.45)] sm:w-[320px]"
            >
              {/* Dismiss */}
              <button
                type="button"
                onClick={dismissTease}
                aria-label="Dismiss"
                className="absolute right-2 top-2 z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-950/70 text-ink-300 transition-colors hover:bg-ink-900 hover:text-ink-50"
              >
                <X className="h-3 w-3" strokeWidth={2} aria-hidden />
              </button>

              <div className="flex gap-3 p-4">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/40">
                  <Image
                    src={OPERATOR_AVATAR}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
                </div>
                <div className="min-w-0 flex-1 pr-5">
                  <div className="flex items-baseline gap-2 text-[11px]">
                    <span className="font-medium text-ink-50">{t('operatorName')}</span>
                    <span className="text-ink-400">{t('operatorRole')}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-snug text-ink-100">
                    {t('teaseGreeting')}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-gold-400">
                    {t('teaseCta')} →
                  </span>
                </div>
              </div>

              {/* Bottom hairline */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === Chat panel === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 28,
              mass: 0.7,
              opacity: { duration: 0.18 }
            }}
            role="dialog"
            aria-label={t('title')}
            style={{ transformOrigin: 'bottom right' }}
            className="glass-strong fixed inset-x-4 bottom-24 z-40 flex h-[min(560px,70dvh)] flex-col overflow-hidden rounded-[1.5rem] shadow-elite sm:inset-auto sm:bottom-28 sm:right-8 sm:h-[520px] sm:w-[380px]"
          >
            <header className="flex items-center gap-3 border-b hairline px-5 py-4">
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/40">
                <Image
                  src={OPERATOR_AVATAR}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-ink-50">
                  {t('operatorName')}
                </span>
                <span className="text-[11px] text-ink-400">
                  {t('operatorRole')} · {t('subtitle')}
                </span>
              </div>
            </header>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-5 py-5 text-sm"
            >
              {messages.length === 0 && (
                <AssistantMessage>{t('greeting')}</AssistantMessage>
              )}

              {messages.map((m) =>
                m.role === 'user' ? (
                  <div
                    key={m.id}
                    className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gold-400 px-4 py-2.5 leading-relaxed text-ink-950"
                  >
                    {m.content}
                  </div>
                ) : (
                  <AssistantMessage key={m.id}>{m.content}</AssistantMessage>
                )
              )}

              {loading && (
                <div className="flex items-end gap-2">
                  <span className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/30">
                    <Image src={OPERATOR_AVATAR} alt="" fill sizes="28px" className="object-cover" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-ink-800/70 px-4 py-3">
                    <Dot delay={0} />
                    <Dot delay={0.15} />
                    <Dot delay={0.3} />
                  </span>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm border hairline bg-ink-900/70 px-4 py-3 text-sm text-ink-200"
                >
                  <p className="font-medium text-ink-50">Чат временно недоступен</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-300">
                    Напишите нам в{' '}
                    <a
                      href="https://t.me/legalwin"
                      target="_blank"
                      rel="noopener"
                      className="text-gold-400 underline-offset-2 hover:underline"
                    >
                      Телеграм
                    </a>{' '}
                    или оставьте заявку через форму на сайте — юрист ответит в течение часа.
                  </p>
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t hairline px-3 py-3"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={t('placeholder')}
                className="flex-1 bg-transparent px-3 py-2 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none"
                aria-label={t('placeholder')}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-ink-950 transition-all duration-200 hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={t('send')}
              >
                <Send className="h-4 w-4" strokeWidth={1.6} aria-hidden />
              </button>
            </form>

            <p className="border-t hairline px-5 py-2.5 text-[10px] text-ink-500">
              {t('disclaimer')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Assistant message bubble with avatar ---------- */

function AssistantMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-end gap-2">
      <span className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold-500/30">
        <Image src={OPERATOR_AVATAR} alt="" fill sizes="28px" className="object-cover" />
      </span>
      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-ink-800/70 px-4 py-2.5 leading-relaxed text-ink-100">
        {children}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-ink-300"
      animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}
