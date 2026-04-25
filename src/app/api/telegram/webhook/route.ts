/**
 * Telegram bot webhook.
 *
 * Conversation flow:
 *   /start       → welcome + ask for password
 *   <password>   → add chat to subscribers, confirm
 *   /status      → tell whether they're subscribed
 *   /stop        → remove from subscribers
 *
 * Setup (one-time, see TELEGRAM.md):
 *   curl -X POST "https://api.telegram.org/bot<TOKEN>/setWebhook" \
 *        -d "url=https://<your-domain>/api/telegram/webhook" \
 *        -d "secret_token=<TELEGRAM_WEBHOOK_SECRET>"
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  addSubscriber,
  isSubscribed,
  removeSubscriber
} from '@/lib/subscribers';

export const runtime = 'nodejs';
// We mutate disk in addSubscriber/removeSubscriber, so don't cache.
export const dynamic = 'force-dynamic';

type TgUpdate = {
  message?: {
    chat: { id: number; first_name?: string; username?: string };
    text?: string;
  };
};

async function tgSend(chatId: number, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    })
  }).catch(() => {});
}

export async function POST(req: NextRequest) {
  // Optional shared-secret check
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (expected) {
    const got = req.headers.get('x-telegram-bot-api-secret-token');
    if (got !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
  }

  let update: TgUpdate;
  try {
    update = (await req.json()) as TgUpdate;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const message = update.message;
  if (!message?.text) return NextResponse.json({ ok: true });

  const chatId = message.chat.id;
  const text = message.text.trim();
  const password = process.env.TELEGRAM_PASSWORD ?? '';
  const greeting = message.chat.first_name ?? message.chat.username ?? 'друг';

  if (text === '/start' || text.startsWith('/start ')) {
    const already = await isSubscribed(chatId);
    if (already) {
      await tgSend(
        chatId,
        `Здравствуйте, ${greeting}!\n\nВы уже подписаны и получаете заявки с сайта <b>LegalWin</b>.\n\n/status — проверить подписку\n/stop — отписаться`
      );
    } else {
      await tgSend(
        chatId,
        `Здравствуйте, ${greeting}!\n\nЭто бот <b>LegalWin</b> для приёма заявок с сайта.\n\nЧтобы начать получать новые заявки, отправьте <b>пароль доступа</b> одним сообщением.`
      );
    }
    return NextResponse.json({ ok: true });
  }

  if (text === '/status') {
    const subbed = await isSubscribed(chatId);
    await tgSend(
      chatId,
      subbed
        ? '✅ Вы подписаны и получаете заявки.'
        : '❌ Вы не подписаны. Отправьте пароль чтобы подписаться, или /start для инструкции.'
    );
    return NextResponse.json({ ok: true });
  }

  if (text === '/stop' || text === '/unsubscribe') {
    const removed = await removeSubscriber(chatId);
    await tgSend(
      chatId,
      removed
        ? '✅ Вы отписаны от заявок. /start — подписаться снова.'
        : 'Вы и так не были подписаны.'
    );
    return NextResponse.json({ ok: true });
  }

  // Treat anything else as a password attempt
  if (password && text === password) {
    const added = await addSubscriber(chatId);
    await tgSend(
      chatId,
      added
        ? '✅ <b>Доступ открыт.</b> Вы будете получать новые заявки с сайта LegalWin в этот чат.\n\nКоманды:\n/status — проверить подписку\n/stop — отписаться'
        : '✅ Вы уже подписаны.'
    );
    return NextResponse.json({ ok: true });
  }

  await tgSend(
    chatId,
    '❌ Неверный пароль.\n\nПопробуйте ещё раз или /start для инструкции.'
  );
  return NextResponse.json({ ok: true });
}

// Helpful GET for sanity-checking the deployment URL in the browser
export async function GET() {
  return NextResponse.json({
    ok: true,
    name: 'legalwin-telegram-webhook',
    docs: 'POST endpoint — only Telegram should call this. See TELEGRAM.md.'
  });
}
