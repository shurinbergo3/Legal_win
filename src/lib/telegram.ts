import type { ContactInput } from './schemas';
import { listSubscribers } from './subscribers';

const labels: Record<NonNullable<ContactInput['service']>, string> = {
  trc: 'Карта побыту (ВНЖ / ПМЖ)',
  driver: 'Обмен прав / Kod 95',
  citizenship: 'Гражданство / Karta Polaka',
  business: 'Бизнес (Sp. z o.o.)',
  tax: 'Налоги и бухгалтерия',
  other: 'Другое'
};

function escapeHtml(v: string) {
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export type DeliveryReport = {
  ok: boolean;
  attempted: number;
  delivered: number;
  errors: string[];
};

export async function sendContactToTelegram(data: ContactInput): Promise<DeliveryReport> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN is not configured');
  }

  const subscribers = await listSubscribers();
  if (subscribers.length === 0) {
    // Don't fail the form — the user successfully submitted. Log and return
    // so an operator can investigate why no one is subscribed yet.
    console.warn(
      '[telegram] form submission received but no subscribers — request not delivered to anyone'
    );
    return { ok: true, attempted: 0, delivered: 0, errors: ['no subscribers'] };
  }

  const hasName = Boolean(data.name && data.name.trim());
  const hasEmail = Boolean(data.email && data.email.trim());
  const hasService = Boolean(data.service);
  const hasMessage = Boolean(data.message && data.message.trim());

  const text = [
    '🔔 <b>Новая заявка — LegalWin</b>',
    '',
    hasName ? `<b>Имя:</b> ${escapeHtml(data.name!)}` : null,
    `<b>Телефон:</b> <a href="tel:${escapeHtml(data.phone.replace(/\s/g, ''))}">${escapeHtml(data.phone)}</a>`,
    hasEmail
      ? `<b>Email:</b> <a href="mailto:${escapeHtml(data.email!)}">${escapeHtml(data.email!)}</a>`
      : null,
    hasService ? `<b>Направление:</b> ${escapeHtml(labels[data.service!])}` : null,
    data.locale ? `<b>Язык сайта:</b> ${data.locale.toUpperCase()}` : null,
    `<b>RODO:</b> согласие получено ✓ (${new Date().toISOString()})`,
    hasMessage ? '' : null,
    hasMessage ? '<b>Сообщение:</b>' : null,
    hasMessage ? escapeHtml(data.message!) : null
  ]
    .filter((line) => line !== null)
    .join('\n');

  const results = await Promise.allSettled(
    subscribers.map((chatId) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        cache: 'no-store'
      }).then(async (r) => {
        if (!r.ok) {
          const body = await r.text().catch(() => '');
          throw new Error(`chat ${chatId}: HTTP ${r.status} ${body}`);
        }
        return r.json() as Promise<{ ok: boolean }>;
      })
    )
  );

  const delivered = results.filter(
    (r) => r.status === 'fulfilled' && r.value.ok
  ).length;
  const errors = results
    .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
    .map((r) => String(r.reason));

  if (errors.length) {
    console.error('[telegram] delivery errors:', errors);
  }

  return {
    ok: delivered > 0,
    attempted: subscribers.length,
    delivered,
    errors
  };
}

export type ChatLead = {
  name: string;
  phone?: string;
  email?: string;
  topic?: string;
  situation?: string;
  urgency?: 'high' | 'medium' | 'low';
  readiness?: 'hot' | 'warm' | 'cold';
  locale?: string;
};

const urgencyLabel: Record<NonNullable<ChatLead['urgency']>, string> = {
  high: '🔴 СРОЧНО',
  medium: '🟡 ОБЫЧНЫЙ',
  low: '🟢 ХОЛОДНЫЙ'
};

const readinessLabel: Record<NonNullable<ChatLead['readiness']>, string> = {
  hot: '🔥 Горячий',
  warm: '👍 Тёплый',
  cold: '❄️ Холодный'
};

export async function sendChatLeadToTelegram(lead: ChatLead): Promise<DeliveryReport> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN is not configured');
  }

  const subscribers = await listSubscribers();
  if (subscribers.length === 0) {
    console.warn('[telegram] chat lead received but no subscribers — request not delivered');
    return { ok: true, attempted: 0, delivered: 0, errors: ['no subscribers'] };
  }

  const urgency = lead.urgency ? urgencyLabel[lead.urgency] : '⚪️ Без оценки';
  const readiness = lead.readiness ? readinessLabel[lead.readiness] : null;

  const header = lead.topic
    ? `💬 <b>${urgency} | ${escapeHtml(lead.topic)}</b>`
    : `💬 <b>${urgency} | Лид из чата — LegalWin</b>`;

  const lines = [
    header,
    readiness ? `<b>Готовность:</b> ${readiness}` : null,
    '',
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    lead.phone
      ? `<b>Телефон:</b> <a href="tel:${escapeHtml(lead.phone.replace(/\s/g, ''))}">${escapeHtml(lead.phone)}</a>`
      : null,
    lead.email
      ? `<b>Email:</b> <a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a>`
      : null,
    lead.locale ? `<b>Язык:</b> ${lead.locale.toUpperCase()}` : null,
    lead.situation ? '' : null,
    lead.situation ? `<b>Ситуация:</b> ${escapeHtml(lead.situation)}` : null
  ].filter(Boolean);

  const text = lines.join('\n');

  const results = await Promise.allSettled(
    subscribers.map((chatId) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        cache: 'no-store'
      }).then(async (r) => {
        if (!r.ok) {
          const body = await r.text().catch(() => '');
          throw new Error(`chat ${chatId}: HTTP ${r.status} ${body}`);
        }
        return r.json() as Promise<{ ok: boolean }>;
      })
    )
  );

  const delivered = results.filter(
    (r) => r.status === 'fulfilled' && r.value.ok
  ).length;
  const errors = results
    .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
    .map((r) => String(r.reason));

  if (errors.length) {
    console.error('[telegram] chat-lead delivery errors:', errors);
  }

  return {
    ok: delivered > 0,
    attempted: subscribers.length,
    delivered,
    errors
  };
}
