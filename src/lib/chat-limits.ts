/**
 * Rate limiting for the public chat endpoint.
 *
 * In-memory on purpose: the site runs as a single Next.js container on Dokploy,
 * so a shared store would be extra infrastructure for no gain. If the app is
 * ever scaled to several replicas these counters become per-replica and the
 * effective limits multiply — move them to Redis at that point.
 */

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

const num = (value: string | undefined, fallback: number) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

// Сообщений с одного IP в час. Живому клиенту хватает с запасом: обычный
// диалог до заявки укладывается в 8-12 сообщений.
const PER_IP_PER_HOUR = num(process.env.CHAT_LIMIT_IP_HOUR, 20);
// Сообщений пользователя в рамках одного диалога.
export const PER_CONVERSATION = num(process.env.CHAT_LIMIT_CONVERSATION, 30);
// Общий предохранитель на весь сайт: скачок трафика или бот, обходящий IP-лимит
// через прокси, не должен выливаться в неограниченный счёт.
const GLOBAL_PER_DAY = num(process.env.CHAT_LIMIT_GLOBAL_DAY, 1500);

type Bucket = { count: number; resetAt: number };

const ipBuckets = new Map<string, Bucket>();
let global: Bucket = { count: 0, resetAt: 0 };
let lastSweep = 0;

function sweep(now: number) {
  if (now - lastSweep < HOUR_MS && ipBuckets.size < 10_000) return;
  lastSweep = now;
  for (const [ip, bucket] of ipBuckets) {
    if (bucket.resetAt <= now) ipBuckets.delete(ip);
  }
}

export function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export type LimitVerdict =
  | { ok: true }
  | { ok: false; reason: 'ip' | 'global'; retryAfter: number };

/**
 * Counts one request against the IP and global budgets. Call it once per
 * request, after validation and before touching the model.
 */
export function consumeRequest(ip: string, now = Date.now()): LimitVerdict {
  sweep(now);

  if (global.resetAt <= now) global = { count: 0, resetAt: now + DAY_MS };
  if (global.count >= GLOBAL_PER_DAY) {
    return { ok: false, reason: 'global', retryAfter: Math.ceil((global.resetAt - now) / 1000) };
  }

  let bucket = ipBuckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + HOUR_MS };
    ipBuckets.set(ip, bucket);
  }
  if (bucket.count >= PER_IP_PER_HOUR) {
    return { ok: false, reason: 'ip', retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  global.count += 1;
  return { ok: true };
}
