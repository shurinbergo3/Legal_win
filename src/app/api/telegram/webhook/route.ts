/**
 * Telegram bot webhook.
 *
 * Commands (registered via /api/telegram/setup):
 *   /start       → welcome + subscribe flow
 *   /admin       → admin panel with inline keyboard (admins only)
 *   /myid        → show own Telegram chat ID
 *   /status      → subscription status
 *   /stop        → unsubscribe
 *   /adduser     → admin: add subscriber by chat ID
 *   /removeuser  → admin: remove subscriber by chat ID
 *   /listusers   → admin: list all subscribers
 *
 * Admins are identified by TELEGRAM_OPERATOR_CHAT_IDS env var.
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  addSubscriber,
  isSubscribed,
  listSubscribersWithMeta,
  removeSubscriber
} from '@/lib/subscribers';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ─── Types ────────────────────────────────────────────────────────────────────

type TgChat = { id: number; first_name?: string; last_name?: string; username?: string };
type TgMessage = { message_id: number; chat: TgChat; text?: string };
type TgCallbackQuery = {
  id: string;
  from: TgChat;
  message?: TgMessage;
  data?: string;
};

type TgUpdate = {
  message?: TgMessage;
  callback_query?: TgCallbackQuery;
};

type InlineButton = { text: string; callback_data: string };
type InlineKeyboard = { inline_keyboard: InlineButton[][] };
type ReplyKeyboard = {
  keyboard: { text: string }[][];
  resize_keyboard: boolean;
  persistent?: boolean;
};

// ─── Telegram API helpers ─────────────────────────────────────────────────────

async function tgApi(method: string, body: Record<string, unknown>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;
  await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store'
  }).catch(() => {});
}

async function tgSend(
  chatId: number,
  text: string,
  extra?: { reply_markup?: InlineKeyboard | ReplyKeyboard }
) {
  await tgApi('sendMessage', {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    ...extra
  });
}

async function tgEdit(chatId: number, messageId: number, text: string, keyboard?: InlineKeyboard) {
  await tgApi('editMessageText', {
    chat_id: chatId,
    message_id: messageId,
    text,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    ...(keyboard ? { reply_markup: keyboard } : {})
  });
}

async function tgAnswer(callbackId: string, text?: string) {
  await tgApi('answerCallbackQuery', {
    callback_query_id: callbackId,
    ...(text ? { text, show_alert: false } : {})
  });
}

// ─── Keyboards ────────────────────────────────────────────────────────────────

function adminInlineMenu(): InlineKeyboard {
  return {
    inline_keyboard: [
      [{ text: '👥 Список подписчиков', callback_data: 'admin:list' }],
      [
        { text: '➕ Добавить по ID', callback_data: 'admin:add_help' },
        { text: '➖ Удалить по ID', callback_data: 'admin:remove_help' }
      ],
      [{ text: '📋 Все команды', callback_data: 'admin:commands' }]
    ]
  };
}

function adminReplyKeyboard(): ReplyKeyboard {
  return {
    keyboard: [
      [{ text: '👑 Панель администратора' }],
      [{ text: '📊 Статус' }, { text: '🆔 Мой ID' }]
    ],
    resize_keyboard: true,
    persistent: true
  };
}

function subscriberReplyKeyboard(): ReplyKeyboard {
  return {
    keyboard: [
      [{ text: '📊 Статус подписки' }, { text: '🆔 Мой ID' }],
      [{ text: '❌ Отписаться' }]
    ],
    resize_keyboard: true,
    persistent: true
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isAdmin(id: number): boolean {
  const raw = process.env.TELEGRAM_OPERATOR_CHAT_IDS ?? '';
  return raw
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n !== 0)
    .includes(id);
}

function displayName(chat: TgChat): string {
  const parts = [chat.first_name, chat.last_name].filter(Boolean).join(' ');
  return parts || chat.username || 'друг';
}

async function buildSubscriberList(): Promise<string> {
  const list = await listSubscribersWithMeta();
  if (list.length === 0) return '📋 Нет активных подписчиков.';

  const ops = (process.env.TELEGRAM_OPERATOR_CHAT_IDS ?? '')
    .split(',')
    .map((s) => Number(s.trim()))
    .filter(Boolean);

  const lines = list.map((s) => {
    const tag = ops.includes(s.chatId) ? ' 👑' : '';
    const uname = s.username ? ` (@${s.username})` : '';
    return `• <b>${s.name}</b>${uname}${tag}\n  ID: <code>${s.chatId}</code>`;
  });

  return `👥 <b>Подписчики (${list.length}):</b>\n\n${lines.join('\n\n')}`;
}

// ─── Webhook handler ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (expected) {
    const got = req.headers.get('x-telegram-bot-api-secret-token');
    if (got !== expected) return NextResponse.json({ ok: false }, { status: 401 });
  }

  let update: TgUpdate;
  try {
    update = (await req.json()) as TgUpdate;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // ── Callback query (inline button press) ────────────────────────────────────
  if (update.callback_query) {
    const cq = update.callback_query;
    const chatId = cq.from.id;
    const msgId = cq.message?.message_id;
    const data = cq.data ?? '';

    await tgAnswer(cq.id);

    if (!isAdmin(chatId)) {
      await tgAnswer(cq.id, '❌ Нет доступа');
      return NextResponse.json({ ok: true });
    }

    if (data === 'admin:list') {
      const text = await buildSubscriberList();
      const backBtn: InlineKeyboard = {
        inline_keyboard: [[{ text: '← Назад', callback_data: 'admin:menu' }]]
      };
      if (msgId) await tgEdit(chatId, msgId, text, backBtn);
      else await tgSend(chatId, text, { reply_markup: backBtn });
      return NextResponse.json({ ok: true });
    }

    if (data === 'admin:add_help') {
      const text =
        '➕ <b>Добавить подписчика:</b>\n\n' +
        'Попросите нового пользователя написать боту /myid - он получит свой Chat ID.\n\n' +
        'Затем отправьте мне:\n<code>/adduser 123456789</code>';
      const backBtn: InlineKeyboard = {
        inline_keyboard: [[{ text: '← Назад', callback_data: 'admin:menu' }]]
      };
      if (msgId) await tgEdit(chatId, msgId, text, backBtn);
      else await tgSend(chatId, text, { reply_markup: backBtn });
      return NextResponse.json({ ok: true });
    }

    if (data === 'admin:remove_help') {
      const text =
        '➖ <b>Удалить подписчика:</b>\n\n' +
        'Сначала посмотрите список подписчиков и скопируйте нужный ID.\n\n' +
        'Затем отправьте:\n<code>/removeuser 123456789</code>';
      const backBtn: InlineKeyboard = {
        inline_keyboard: [[{ text: '← Назад', callback_data: 'admin:menu' }]]
      };
      if (msgId) await tgEdit(chatId, msgId, text, backBtn);
      else await tgSend(chatId, text, { reply_markup: backBtn });
      return NextResponse.json({ ok: true });
    }

    if (data === 'admin:commands') {
      const text =
        '📋 <b>Все команды бота:</b>\n\n' +
        '<b>Для всех:</b>\n' +
        '/start - приветствие и подписка\n' +
        '/myid - ваш Telegram Chat ID\n' +
        '/status - статус подписки\n' +
        '/stop - отписаться\n\n' +
        '<b>Только для администраторов:</b>\n' +
        '/admin - панель управления\n' +
        '/listusers - список подписчиков\n' +
        '/adduser &lt;id&gt; - добавить подписчика\n' +
        '/removeuser &lt;id&gt; - удалить подписчика';
      const backBtn: InlineKeyboard = {
        inline_keyboard: [[{ text: '← Назад', callback_data: 'admin:menu' }]]
      };
      if (msgId) await tgEdit(chatId, msgId, text, backBtn);
      else await tgSend(chatId, text, { reply_markup: backBtn });
      return NextResponse.json({ ok: true });
    }

    if (data === 'admin:menu') {
      const text = '👑 <b>Панель администратора LegalWin</b>\n\nВыберите действие:';
      if (msgId) await tgEdit(chatId, msgId, text, adminInlineMenu());
      else await tgSend(chatId, text, { reply_markup: adminInlineMenu() });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  }

  // ── Regular message ─────────────────────────────────────────────────────────
  const message = update.message;
  if (!message?.text) return NextResponse.json({ ok: true });

  const chatId = message.chat.id;
  const text = message.text.trim();
  const greeting = displayName(message.chat);
  const admin = isAdmin(chatId);

  // /myid
  if (text === '/myid') {
    await tgSend(
      chatId,
      `🆔 <b>Ваш Telegram Chat ID:</b>\n<code>${chatId}</code>\n\nПередайте этот номер администратору чтобы он добавил вас в подписчики.`
    );
    return NextResponse.json({ ok: true });
  }

  // /admin
  if (text === '/admin' || text === '👑 Панель администратора') {
    if (!admin) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    await tgSend(
      chatId,
      '👑 <b>Панель администратора LegalWin</b>\n\nВыберите действие:',
      { reply_markup: adminInlineMenu() }
    );
    return NextResponse.json({ ok: true });
  }

  // /adduser <id>
  if (text.startsWith('/adduser')) {
    if (!admin) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const targetId = Number(text.split(/\s+/)[1]);
    if (!targetId || !Number.isFinite(targetId)) {
      await tgSend(chatId, '⚠️ Укажите ID:\n<code>/adduser 123456789</code>');
      return NextResponse.json({ ok: true });
    }
    const result = await addSubscriber(targetId);
    const msgs: Record<typeof result, string> = {
      added: `✅ Пользователь <code>${targetId}</code> добавлен в подписчики.`,
      duplicate: `ℹ️ Пользователь <code>${targetId}</code> уже подписан.`,
      ephemeral: `⚠️ Хостинг не сохраняет подписки между деплоями.\n\nДобавьте <code>${targetId}</code> в переменную <b>TELEGRAM_OPERATOR_CHAT_IDS</b> на Vercel (через запятую).`
    };
    await tgSend(chatId, msgs[result]);
    return NextResponse.json({ ok: true });
  }

  // /removeuser <id>
  if (text.startsWith('/removeuser')) {
    if (!admin) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const targetId = Number(text.split(/\s+/)[1]);
    if (!targetId || !Number.isFinite(targetId)) {
      await tgSend(chatId, '⚠️ Укажите ID:\n<code>/removeuser 123456789</code>');
      return NextResponse.json({ ok: true });
    }
    const removed = await removeSubscriber(targetId);
    await tgSend(
      chatId,
      removed
        ? `✅ Пользователь <code>${targetId}</code> удалён из подписчиков.`
        : `ℹ️ Пользователь <code>${targetId}</code> не найден.`
    );
    return NextResponse.json({ ok: true });
  }

  // /listusers
  if (text === '/listusers') {
    if (!admin) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const listText = await buildSubscriberList();
    await tgSend(chatId, listText);
    return NextResponse.json({ ok: true });
  }

  // /status or keyboard button
  if (text === '/status' || text === '📊 Статус' || text === '📊 Статус подписки') {
    const subbed = await isSubscribed(chatId);
    await tgSend(
      chatId,
      subbed
        ? '✅ Вы подписаны и получаете заявки с сайта LegalWin.'
        : `❌ Вы не подписаны.\n\nПередайте администратору ваш Chat ID: <code>${chatId}</code>`
    );
    return NextResponse.json({ ok: true });
  }

  // /stop or keyboard button
  if (text === '/stop' || text === '/unsubscribe' || text === '❌ Отписаться') {
    const removed = await removeSubscriber(chatId);
    await tgSend(
      chatId,
      removed
        ? '✅ Вы отписаны от заявок.\n\nОтправьте /start чтобы подписаться снова.'
        : 'Вы и так не были подписаны.'
    );
    return NextResponse.json({ ok: true });
  }

  // 🆔 Мой ID - keyboard button
  if (text === '🆔 Мой ID') {
    await tgSend(
      chatId,
      `🆔 <b>Ваш Telegram Chat ID:</b>\n<code>${chatId}</code>`
    );
    return NextResponse.json({ ok: true });
  }

  // /start
  if (text === '/start' || text.startsWith('/start ')) {
    const already = await isSubscribed(chatId);
    if (already) {
      await addSubscriber(chatId, { name: greeting, username: message.chat.username });
      if (admin) {
        await tgSend(
          chatId,
          `👋 Здравствуйте, ${greeting}!\n\nВы подписаны и получаете заявки с сайта <b>LegalWin</b>.\n\n👑 Вы - администратор.`,
          { reply_markup: adminReplyKeyboard() }
        );
      } else {
        await tgSend(
          chatId,
          `👋 Здравствуйте, ${greeting}!\n\nВы уже подписаны и получаете заявки с сайта <b>LegalWin</b>.`,
          { reply_markup: subscriberReplyKeyboard() }
        );
      }
    } else {
      await tgSend(
        chatId,
        `👋 Здравствуйте, ${greeting}!\n\nЭто бот <b>LegalWin</b> для получения заявок с сайта.\n\nЧтобы получать заявки, передайте администратору ваш Chat ID:\n<code>${chatId}</code>\n\n/myid - показать ID ещё раз`
      );
    }
    return NextResponse.json({ ok: true });
  }

  // Unknown message
  await tgSend(
    chatId,
    '❓ Не понял команду.\n\nОтправьте /start для инструкции.'
  );
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    name: 'legalwin-telegram-webhook',
    setup: 'GET /api/telegram/setup to register bot commands'
  });
}
