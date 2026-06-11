/**
 * Telegram bot subscribers - chat IDs that receive contact-form requests.
 *
 * Storage strategy:
 *   1. Vercel KV (Upstash Redis) when KV_REST_API_URL + KV_REST_API_TOKEN are set.
 *      This is the production path - survives deploys, works on serverless.
 *   2. Local JSON file at <repo>/data/subscribers.json otherwise.
 *      Fine for `npm run dev` without a KV connection.
 *
 * Permanent operators in TELEGRAM_OPERATOR_CHAT_IDS are always merged in on read.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { kv } from '@vercel/kv';

const FILE = path.join(process.cwd(), 'data', 'subscribers.json');
const KV_KEY = 'legalwin:subscribers';

const hasKV = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

export type SubscriberMeta = {
  chatId: number;
  name: string;
  username?: string;
  addedAt: string;
};

type Store = {
  chatIds: number[];
  meta: SubscriberMeta[];
  updatedAt: string;
};

const empty = (): Store => ({ chatIds: [], meta: [], updatedAt: new Date().toISOString() });

async function read(): Promise<Store> {
  if (hasKV) {
    const data = await kv.get<Store>(KV_KEY);
    if (!data) return empty();
    return {
      chatIds: Array.isArray(data.chatIds) ? data.chatIds : [],
      meta: Array.isArray(data.meta) ? data.meta : [],
      updatedAt: data.updatedAt ?? new Date().toISOString()
    };
  }
  try {
    const text = await fs.readFile(FILE, 'utf8');
    const parsed = JSON.parse(text) as Partial<Store>;
    return {
      chatIds: Array.isArray(parsed.chatIds) ? parsed.chatIds : [],
      meta: Array.isArray(parsed.meta) ? parsed.meta : [],
      updatedAt: parsed.updatedAt ?? new Date().toISOString()
    };
  } catch {
    return empty();
  }
}

async function write(data: Store): Promise<boolean> {
  if (hasKV) {
    await kv.set(KV_KEY, data);
    return true;
  }
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.warn(
      '[subscribers] cannot persist to disk and KV is not configured:',
      e instanceof Error ? e.message : e
    );
    return false;
  }
}

function permanentOperators(): number[] {
  const raw = process.env.TELEGRAM_OPERATOR_CHAT_IDS ?? '';
  return raw
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n !== 0);
}

// Serializes read-modify-write cycles so concurrent webhook updates can't
// overwrite each other's changes (lost-update race).
let lock: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = lock.then(fn, fn);
  lock = run.catch(() => {});
  return run;
}

export async function addSubscriber(
  chatId: number,
  info?: { name?: string; username?: string }
): Promise<'added' | 'duplicate' | 'ephemeral'> {
  if (permanentOperators().includes(chatId)) return 'duplicate';
  return withLock(async () => {
    const data = await read();
    if (data.chatIds.includes(chatId)) {
      if (info?.name) {
        const idx = data.meta.findIndex((m) => m.chatId === chatId);
        if (idx >= 0) {
          data.meta[idx].name = info.name;
          if (info.username) data.meta[idx].username = info.username;
        } else {
          data.meta.push({ chatId, name: info.name, username: info.username, addedAt: new Date().toISOString() });
        }
        await write(data);
      }
      return 'duplicate';
    }
    data.chatIds.push(chatId);
    data.meta.push({
      chatId,
      name: info?.name ?? String(chatId),
      username: info?.username,
      addedAt: new Date().toISOString()
    });
    data.updatedAt = new Date().toISOString();
    const ok = await write(data);
    return ok ? 'added' : 'ephemeral';
  });
}

export async function removeSubscriber(chatId: number): Promise<boolean> {
  return withLock(async () => {
    const data = await read();
    const before = data.chatIds.length;
    data.chatIds = data.chatIds.filter((id) => id !== chatId);
    data.meta = data.meta.filter((m) => m.chatId !== chatId);
    if (data.chatIds.length === before) return false;
    data.updatedAt = new Date().toISOString();
    await write(data);
    return true;
  });
}

export async function isSubscribed(chatId: number): Promise<boolean> {
  const stored = (await read()).chatIds;
  return stored.includes(chatId) || permanentOperators().includes(chatId);
}

export async function listSubscribers(): Promise<number[]> {
  const stored = (await read()).chatIds;
  const ops = permanentOperators();
  return Array.from(new Set([...stored, ...ops]));
}

export async function listSubscribersWithMeta(): Promise<SubscriberMeta[]> {
  const data = await read();
  const ops = permanentOperators();

  const result: SubscriberMeta[] = [...data.meta];

  for (const id of ops) {
    if (!result.find((m) => m.chatId === id)) {
      result.push({ chatId: id, name: `ID ${id}`, addedAt: '-' });
    }
  }

  for (const id of data.chatIds) {
    if (!result.find((m) => m.chatId === id)) {
      result.push({ chatId: id, name: `ID ${id}`, addedAt: '-' });
    }
  }

  return result;
}
