import { createOpenAI } from '@ai-sdk/openai';
import type { LanguageModelV1 } from '@ai-sdk/provider';

/**
 * Chat model selection with a Groq fallback.
 *
 * OpenAI is the primary provider. Groq stays wired up as a spare so an OpenAI
 * outage (or a revoked key) degrades the bot instead of killing it.
 *
 * The switch is a circuit breaker rather than a per-request retry: `streamText`
 * only surfaces provider errors once the stream is already open, so there is no
 * clean way to swap mid-response. Instead the first failure trips the breaker
 * and every request for the next FAILOVER_WINDOW_MS goes straight to Groq.
 */

const OPENAI_MODEL = process.env.OPENAI_CHAT_MODEL ?? 'gpt-5.4';
const GROQ_MODEL = process.env.GROQ_CHAT_MODEL ?? 'llama-3.3-70b-versatile';
const FAILOVER_WINDOW_MS = 3 * 60 * 1000;

let openaiDownUntil = 0;

const openai = process.env.OPENAI_API_KEY
  ? createOpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const groq = process.env.GROQ_API_KEY
  ? createOpenAI({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: process.env.GROQ_API_KEY
    })
  : null;

export type ChatProvider = {
  model: LanguageModelV1;
  name: 'openai' | 'groq';
  modelId: string;
};

export function hasAnyProvider(): boolean {
  return Boolean(openai || groq);
}

export function pickProvider(): ChatProvider | null {
  const openaiHealthy = openai && Date.now() >= openaiDownUntil;
  if (openaiHealthy) {
    return { model: openai(OPENAI_MODEL), name: 'openai', modelId: OPENAI_MODEL };
  }
  if (groq) {
    return { model: groq(GROQ_MODEL), name: 'groq', modelId: GROQ_MODEL };
  }
  // OpenAI is in its cooldown window but there is no spare — better to retry it
  // than to answer nothing.
  if (openai) {
    return { model: openai(OPENAI_MODEL), name: 'openai', modelId: OPENAI_MODEL };
  }
  return null;
}

export function reportProviderFailure(name: ChatProvider['name'], error: unknown) {
  if (name === 'openai' && groq) {
    openaiDownUntil = Date.now() + FAILOVER_WINDOW_MS;
    console.error(
      `[chat] OpenAI failed, falling back to Groq for ${FAILOVER_WINDOW_MS / 1000}s:`,
      error
    );
    return;
  }
  console.error(`[chat] ${name} failed:`, error);
}
