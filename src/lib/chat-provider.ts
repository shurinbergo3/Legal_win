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
 * clean way to swap mid-response. Instead a failure trips that provider's
 * breaker and the next FAILOVER_WINDOW_MS of traffic goes to the other one.
 *
 * Each provider has its own breaker. With a single shared one, a dead spare
 * (revoked Groq key, say) turned an OpenAI blip into a total outage: every
 * request was pinned to Groq for the whole window and failed there too. Now a
 * spare that also fails trips its own breaker, and once both are cooling down
 * the oldest failure is retried instead of answering nothing.
 */

// mini вместо полной gpt-5.4: бот работает по готовой базе знаний и каталогу,
// рассуждать ему почти не над чем, а счёт отличается на порядок. Если качество
// где-то просядет - модель переопределяется через OPENAI_CHAT_MODEL без релиза.
const OPENAI_MODEL = process.env.OPENAI_CHAT_MODEL ?? 'gpt-5.4-mini';
const GROQ_MODEL = process.env.GROQ_CHAT_MODEL ?? 'llama-3.3-70b-versatile';
const FAILOVER_WINDOW_MS = 3 * 60 * 1000;

const openai = process.env.OPENAI_API_KEY
  ? createOpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const groq = process.env.GROQ_API_KEY
  ? createOpenAI({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: process.env.GROQ_API_KEY
    })
  : null;

export type ProviderName = 'openai' | 'groq';

export type ChatProvider = {
  model: LanguageModelV1;
  name: ProviderName;
  modelId: string;
};

// Preference order. Everything below walks this list, so adding a third
// provider is one entry here plus a client above.
const ORDER: ProviderName[] = ['openai', 'groq'];

const clients: Record<ProviderName, ReturnType<typeof createOpenAI> | null> = {
  openai,
  groq
};
const modelIds: Record<ProviderName, string> = {
  openai: OPENAI_MODEL,
  groq: GROQ_MODEL
};
const downUntil: Record<ProviderName, number> = { openai: 0, groq: 0 };

function build(name: ProviderName): ChatProvider | null {
  const client = clients[name];
  if (!client) return null;
  return { model: client(modelIds[name]), name, modelId: modelIds[name] };
}

export function hasAnyProvider(): boolean {
  return ORDER.some((name) => clients[name]);
}

export function pickProvider(): ChatProvider | null {
  const now = Date.now();
  const configured = ORDER.filter((name) => clients[name]);

  for (const name of configured) {
    if (now >= downUntil[name]) return build(name);
  }
  // Everything is cooling down. Retry whichever tripped first — its outage is
  // the stalest guess, and answering nothing is strictly worse.
  const oldest = configured.sort((a, b) => downUntil[a] - downUntil[b])[0];
  return oldest ? build(oldest) : null;
}

export function reportProviderFailure(name: ProviderName, error: unknown) {
  downUntil[name] = Date.now() + FAILOVER_WINDOW_MS;
  const spare = ORDER.find((n) => n !== name && clients[n] && Date.now() >= downUntil[n]);
  console.error(
    `[chat] ${name} failed, ${spare ? `falling back to ${spare}` : 'no healthy spare'} for ${FAILOVER_WINDOW_MS / 1000}s:`,
    error
  );
}
