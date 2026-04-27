/**
 * Telegram bot subscribers — chat IDs that receive contact-form requests.
 *
 * Storage: a JSON file at <repo>/data/subscribers.json (gitignored).
 *   - Works in any long-lived runtime (local dev, self-hosted Node, VPS).
 *   - Will NOT persist across deploys on serverless platforms (Vercel).
 *     For production, add IDs to TELEGRAM_OPERATOR_CHAT_IDS env var.
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const FILE = path.join(process.cwd(), 'data', 'subscribers.json');

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

async function read(): Promise<Store> {
  try {
    const text = await fs.readFile(FILE, 'utf8');
    const parsed = JSON.parse(text) as Partial<Store>;
    const chatIds = Array.isArray(parsed.chatIds) ? parsed.chatIds : [];
    const meta = Array.isArray(parsed.meta) ? parsed.meta : [];
    return { chatIds, meta, updatedAt: parsed.updatedAt ?? new Date().toISOString() };
  } catch {
    return { chatIds: [], meta: [], updatedAt: new Date().toISOString() };
  }
}

async function write(data: Store): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.warn(
      '[subscribers] cannot persist to disk (likely serverless read-only FS):',
      e instanceof Error ? e.message : e
    );
    return false;
  }
}

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

export async function addSubscriber(
  chatId: number,
  info?: { name?: string; username?: string }
): Promise<'added' | 'duplicate' | 'ephemeral'> {
  if (permanentOperators().includes(chatId)) return 'duplicate';
  const data = await read();
  if (data.chatIds.includes(chatId)) {
    // Update meta if better info available
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
}

export async function removeSubscriber(chatId: number): Promise<boolean> {
  const data = await read();
  const before = data.chatIds.length;
  data.chatIds = data.chatIds.filter((id) => id !== chatId);
  data.meta = data.meta.filter((m) => m.chatId !== chatId);
  if (data.chatIds.length === before) return false;
  data.updatedAt = new Date().toISOString();
  await write(data);
  return true;
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
      result.push({ chatId: id, name: `ID ${id}`, addedAt: '—' });
    }
  }

  // Ensure dynamic IDs without meta are included
  for (const id of data.chatIds) {
    if (!result.find((m) => m.chatId === id)) {
      result.push({ chatId: id, name: `ID ${id}`, addedAt: '—' });
    }
  }

  return result;
}
