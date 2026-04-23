'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/cn';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Chatbot() {
  const t = useTranslations('Chat');
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, status, error } = useChat({
    api: '/api/chat'
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, open]);

  const loading = status === 'submitted' || status === 'streaming';

  return (
    <>
      {/* Floating toggle */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: 1.2 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          'group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-ink-950 shadow-elite transition-colors duration-300 sm:bottom-8 sm:right-8',
          open ? 'bg-ink-50' : 'bg-gold-400 hover:bg-gold-300'
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
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            role="dialog"
            aria-label={t('title')}
            className="glass-strong fixed inset-x-4 bottom-24 z-40 flex h-[min(560px,70dvh)] flex-col overflow-hidden rounded-[1.5rem] shadow-elite sm:inset-auto sm:bottom-28 sm:right-8 sm:h-[520px] sm:w-[380px]"
          >
            <header className="flex items-center gap-3 border-b hairline px-5 py-4">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                <Sparkles className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold text-ink-50">
                  {t('title')}
                </span>
                <span className="text-[11px] text-ink-400">{t('subtitle')}</span>
              </div>
            </header>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-5 py-5 text-sm"
            >
              {messages.length === 0 && (
                <div className="rounded-2xl rounded-bl-sm bg-ink-800/70 px-4 py-3 text-ink-100">
                  {t('greeting')}
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    'max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed',
                    m.role === 'user'
                      ? 'ml-auto rounded-br-sm bg-gold-400 text-ink-950'
                      : 'mr-auto rounded-bl-sm bg-ink-800/70 text-ink-100'
                  )}
                >
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className="mr-auto inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-ink-800/70 px-4 py-3">
                  <Dot delay={0} />
                  <Dot delay={0.15} />
                  <Dot delay={0.3} />
                </div>
              )}

              {error && (
                <p className="text-xs text-red-400" role="alert">
                  {error.message}
                </p>
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

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-ink-300"
      animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}
