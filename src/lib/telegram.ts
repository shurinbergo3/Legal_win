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

  const text = [
    '🔔 <b>Новая заявка — LegalWin</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(data.name)}`,
    `<b>Email:</b> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>`,
    `<b>Телефон:</b> <a href="tel:${escapeHtml(data.phone.replace(/\s/g, ''))}">${escapeHtml(data.phone)}</a>`,
    `<b>Направление:</b> ${escapeHtml(labels[data.service])}`,
    data.locale ? `<b>Язык сайта:</b> ${data.locale.toUpperCase()}` : null,
    '',
    '<b>Сообщение:</b>',
    escapeHtml(data.message)
  ]
    .filter(Boolean)
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
