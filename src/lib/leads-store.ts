/**
 * Lead history store for the Telegram admin panel.
 *
 * Storage mirrors `subscribers.ts`:
 *   - Vercel KV when KV_REST_API_URL + KV_REST_API_TOKEN are set.
 *   - Local JSON file at <repo>/data/leads.json otherwise.
 *
 * Unbounded - all leads are kept indefinitely (newest first).
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { kv } from '@vercel/kv';
import type { ContactInput } from './schemas';

const FILE = path.join(process.cwd(), 'data', 'leads.json');
const KV_KEY = 'legalwin:leads';

const hasKV = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

export type LeadRecord = {
  id: string;
  createdAt: string; // ISO
  name?: string;
  phone: string;
  email?: string;
  service?: ContactInput['service'];
  message?: string;
  locale?: string;
};

type Store = { items: LeadRecord[] };

async function read(): Promise<Store> {
  if (hasKV) {
    const data = await kv.get<Store>(KV_KEY);
    if (!data || !Array.isArray(data.items)) return { items: [] };
    return { items: data.items };
  }
  try {
    const text = await fs.readFile(FILE, 'utf8');
    const parsed = JSON.parse(text) as Partial<Store>;
    return { items: Array.isArray(parsed.items) ? parsed.items : [] };
  } catch {
    return { items: [] };
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
      '[leads-store] cannot persist and KV is not configured:',
      e instanceof Error ? e.message : e
    );
    return false;
  }
}

function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function storeLead(data: ContactInput): Promise<LeadRecord> {
  const record: LeadRecord = {
    id: newId(),
    createdAt: new Date().toISOString(),
    name: data.name,
    phone: data.phone,
    email: data.email,
    service: data.service,
    message: data.message,
    locale: data.locale
  };
  const store = await read();
  store.items = [record, ...store.items];
  await write(store);
  return record;
}

export async function listLeads(opts?: {
  offset?: number;
  limit?: number;
}): Promise<{ items: LeadRecord[]; total: number }> {
  const offset = Math.max(0, opts?.offset ?? 0);
  const limit = Math.max(1, Math.min(50, opts?.limit ?? 10));
  const store = await read();
  return {
    items: store.items.slice(offset, offset + limit),
    total: store.items.length
  };
}

export async function getLead(id: string): Promise<LeadRecord | null> {
  const store = await read();
  return store.items.find((l) => l.id === id) ?? null;
}

export async function leadStats(): Promise<{
  total: number;
  today: number;
  last7d: number;
  last30d: number;
}> {
  const store = await read();
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const startOfTodayUTC = new Date();
  startOfTodayUTC.setUTCHours(0, 0, 0, 0);
  const startOfToday = startOfTodayUTC.getTime();

  let today = 0;
  let last7d = 0;
  let last30d = 0;
  for (const r of store.items) {
    const t = Date.parse(r.createdAt);
    if (!Number.isFinite(t)) continue;
    if (t >= startOfToday) today += 1;
    if (now - t <= 7 * dayMs) last7d += 1;
    if (now - t <= 30 * dayMs) last30d += 1;
  }
  return { total: store.items.length, today, last7d, last30d };
}
