/**
 * Telegram bot webhook.
 *
 * Conversation flow:
 *   /start               → welcome + ask for password
 *   <password>           → add chat to subscribers, confirm
 *   /myid                → show own Telegram chat ID (available to everyone)
 *   /status              → tell whether they're subscribed
 *   /stop                → remove from subscribers
 *   /adduser <id>        → admin: add subscriber by chat ID
 *   /removeuser <id>     → admin: remove subscriber by chat ID
 *   /listusers           → admin: list all active subscribers
 *
 * Admins are identified by TELEGRAM_OPERATOR_CHAT_IDS env var.
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
  listSubscribers,
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

  function isAdmin(id: number): boolean {
    const raw = process.env.TELEGRAM_OPERATOR_CHAT_IDS ?? '';
    return raw
      .split(',')
      .map((s) => Number(s.trim()))
      .filter((n) => Number.isFinite(n) && n !== 0)
      .includes(id);
  }

  // /myid — available to everyone
  if (text === '/myid') {
    await tgSend(
      chatId,
      `🆔 Ваш Telegram Chat ID:\n<code>${chatId}</code>\n\nСкопируйте и передайте администратору, чтобы он добавил вас вручную.`
    );
    return NextResponse.json({ ok: true });
  }

  // /adduser <chatId> — admin only
  if (text.startsWith('/adduser')) {
    if (!isAdmin(chatId)) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const targetId = Number(text.split(/\s+/)[1]);
    if (!targetId || !Number.isFinite(targetId)) {
      await tgSend(chatId, '⚠️ Укажите ID: /adduser 123456789');
      return NextResponse.json({ ok: true });
    }
    const result = await addSubscriber(targetId);
    const msgs = {
      added: `✅ Пользователь <code>${targetId}</code> добавлен в подписчики.`,
      duplicate: `ℹ️ Пользователь <code>${targetId}</code> уже подписан.`,
      ephemeral: `⚠️ Хостинг не сохраняет подписки. Добавьте <code>${targetId}</code> в переменную <b>TELEGRAM_OPERATOR_CHAT_IDS</b> на Vercel.`
    } as const;
    await tgSend(chatId, msgs[result]);
    return NextResponse.json({ ok: true });
  }

  // /removeuser <chatId> — admin only
  if (text.startsWith('/removeuser')) {
    if (!isAdmin(chatId)) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const targetId = Number(text.split(/\s+/)[1]);
    if (!targetId || !Number.isFinite(targetId)) {
      await tgSend(chatId, '⚠️ Укажите ID: /removeuser 123456789');
      return NextResponse.json({ ok: true });
    }
    const removed = await removeSubscriber(targetId);
    await tgSend(
      chatId,
      removed
        ? `✅ Пользователь <code>${targetId}</code> удалён из подписчиков.`
        : `ℹ️ Пользователь <code>${targetId}</code> не найден в подписчиках.`
    );
    return NextResponse.json({ ok: true });
  }

  // /listusers — admin only
  if (text === '/listusers') {
    if (!isAdmin(chatId)) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const subscribers = await listSubscribers();
    if (subscribers.length === 0) {
      await tgSend(chatId, '📋 Нет активных подписчиков.');
    } else {
      const list = subscribers.map((id) => `• <code>${id}</code>`).join('\n');
      await tgSend(chatId, `📋 <b>Подписчики (${subscribers.length}):</b>\n\n${list}`);
    }
    return NextResponse.json({ ok: true });
  }

  if (text === '/start' || text.startsWith('/start ')) {
    const already = await isSubscribed(chatId);
    if (already) {
      const body = isAdmin(chatId)
        ? `Здравствуйте, ${greeting}!\n\nВы подписаны и получаете заявки с сайта <b>LegalWin</b>.\n\n<b>Все команды:</b>\n/myid — ваш Telegram ID\n/status — проверить подписку\n/stop — отписаться\n\n👑 <b>Администратор:</b>\n/adduser &lt;id&gt; — добавить подписчика\n/removeuser &lt;id&gt; — удалить подписчика\n/listusers — список всех подписчиков`
        : `Здравствуйте, ${greeting}!\n\nВы уже подписаны и получаете заявки с сайта <b>LegalWin</b>.\n\n/myid — ваш Telegram ID\n/status — проверить подписку\n/stop — отписаться`;
      await tgSend(chatId, body);
    } else {
      await tgSend(
        chatId,
        `Здравствуйте, ${greeting}!\n\nЭто бот <b>LegalWin</b> для приёма заявок с сайта.\n\nЧтобы начать получать новые заявки, отправьте <b>пароль доступа</b> одним сообщением.\n\n/myid — узнать свой Telegram ID`
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
    const result = await addSubscriber(chatId);
    const messages = {
      added:
        '✅ <b>Доступ открыт.</b> Вы будете получать новые заявки с сайта LegalWin в этот чат.\n\nКоманды:\n/status — проверить подписку\n/stop — отписаться',
      duplicate: '✅ Вы уже подписаны.',
      ephemeral:
        `⚠️ <b>Пароль верный, но хостинг не сохраняет подписки.</b>\n\nВаш chat ID: <code>${chatId}</code>\n\nПередайте этот номер администратору — он добавит его в переменную <code>TELEGRAM_OPERATOR_CHAT_IDS</code> на Vercel (через запятую с другими). После этого заявки начнут приходить.`
    } as const;
    await tgSend(chatId, messages[result]);
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
