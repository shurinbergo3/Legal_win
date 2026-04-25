/**
 * Telegram bot subscribers — chat IDs that receive contact-form requests.
 *
 * Storage: a JSON file at <repo>/data/subscribers.json (gitignored).
 *   - Works in any long-lived runtime (local dev, self-hosted Node, VPS).
 *   - Will NOT persist across deploys on serverless platforms (Vercel,
 *     Cloudflare). For production on serverless, swap the read/write
 *     calls below with Vercel KV / Upstash / Postgres / etc.
 *
 * On top of file storage, anyone listed in TELEGRAM_OPERATOR_CHAT_IDS
 * (comma-separated env var) is treated as a permanent subscriber — useful
 * to guarantee at least one operator gets every request even if the file
 * is wiped.
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const FILE = path.join(process.cwd(), 'data', 'subscribers.json');

type Store = {
  chatIds: number[];
  updatedAt: string;
};

async function read(): Promise<Store> {
  try {
    const text = await fs.readFile(FILE, 'utf8');
    const parsed = JSON.parse(text) as Store;
    return {
      chatIds: Array.isArray(parsed.chatIds) ? parsed.chatIds : [],
      updatedAt: parsed.updatedAt ?? new Date().toISOString()
    };
  } catch {
    return { chatIds: [], updatedAt: new Date().toISOString() };
  }
}

/** Returns true if the write succeeded; false on read-only filesystems
 * (e.g. Vercel / Cloudflare Workers serverless runtimes) — caller should
 * fall back to env-based operators. */
async function write(data: Store): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.warn(
      '[subscribers] cannot persist to disk (likely serverless read-only FS) — ' +
        'use TELEGRAM_OPERATOR_CHAT_IDS env var to add permanent subscribers:',
      e instanceof Error ? e.message : e
    );
    return false;
  }
}

/** True when running in a runtime where we know disk writes won't survive
 * (Vercel sets VERCEL=1 / VERCEL_ENV; Netlify sets NETLIFY=true). */
export function isEphemeralRuntime(): boolean {
  return Boolean(
    process.env.VERCEL ||
      process.env.VERCEL_ENV ||
      process.env.NETLIFY ||
      process.env.AWS_LAMBDA_FUNCTION_NAME
  );
}

function permanentOperators(): number[] {
  const raw = process.env.TELEGRAM_OPERATOR_CHAT_IDS ?? '';
  return raw
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n !== 0);
}

/** Add a chat as a subscriber. Returns:
 *   - 'added'      → newly persisted to disk
 *   - 'duplicate'  → already in the file (or env operator list)
 *   - 'ephemeral'  → write failed (read-only FS) — admin must use env var */
export async function addSubscriber(
  chatId: number
): Promise<'added' | 'duplicate' | 'ephemeral'> {
  if (permanentOperators().includes(chatId)) return 'duplicate';
  const data = await read();
  if (data.chatIds.includes(chatId)) return 'duplicate';
  data.chatIds.push(chatId);
  data.updatedAt = new Date().toISOString();
  const ok = await write(data);
  return ok ? 'added' : 'ephemeral';
}

export async function removeSubscriber(chatId: number): Promise<boolean> {
  const data = await read();
  const before = data.chatIds.length;
  data.chatIds = data.chatIds.filter((id) => id !== chatId);
  if (data.chatIds.length === before) return false;
  data.updatedAt = new Date().toISOString();
  await write(data);
  return true;
}

export async function isSubscribed(chatId: number): Promise<boolean> {
  const stored = (await read()).chatIds;
  return stored.includes(chatId) || permanentOperators().includes(chatId);
}

/** Union of dynamically-added subscribers and permanent operators. */
export async function listSubscribers(): Promise<number[]> {
  const stored = (await read()).chatIds;
  const ops = permanentOperators();
  return Array.from(new Set([...stored, ...ops]));
}
