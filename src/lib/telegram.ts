import type { ContactInput } from './schemas';

const labels: Record<NonNullable<ContactInput['service']>, string> = {
  trc: 'TRC / residence permit',
  citizenship: 'Citizenship',
  business: 'Business setup',
  tax: 'Tax & compliance',
  other: 'Other'
};

function escapeMarkdown(v: string) {
  return v.replace(/([_*`\[\]()~>#+\-=|{}.!])/g, '\\$1');
}

export async function sendContactToTelegram(data: ContactInput) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Telegram credentials not configured');
  }

  const lines = [
    '*New enquiry — LegalWin*',
    '',
    `*Name:* ${escapeMarkdown(data.name)}`,
    `*Email:* ${escapeMarkdown(data.email)}`,
    `*Phone:* ${escapeMarkdown(data.phone)}`,
    `*Area:* ${escapeMarkdown(labels[data.service])}`,
    data.locale ? `*Locale:* ${data.locale}` : null,
    '',
    '*Message:*',
    escapeMarkdown(data.message)
  ]
    .filter(Boolean)
    .join('\n');

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines,
      parse_mode: 'MarkdownV2',
      disable_web_page_preview: true
    }),
    cache: 'no-store'
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Telegram error ${res.status}: ${body}`);
  }

  return (await res.json()) as { ok: boolean };
}
