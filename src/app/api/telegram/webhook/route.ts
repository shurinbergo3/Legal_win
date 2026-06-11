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
import { getLead, leadStats, listLeads, type LeadRecord } from '@/lib/leads-store';

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
      [
        { text: '📥 Последние заявки', callback_data: 'admin:leads:0' },
        { text: '📊 Статистика', callback_data: 'admin:stats' }
      ],
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

const LEADS_PAGE_SIZE = 5;

const serviceLabels: Record<string, string> = {
  trc: 'Карта побыту',
  driver: 'Обмен прав / Kod 95',
  citizenship: 'Гражданство / Karta Polaka',
  business: 'Бизнес (Sp. z o.o.)',
  tax: 'Налоги и бухгалтерия',
  other: 'Другое'
};

function escapeHtml(v: string) {
  // `"` matters too — escaped values end up inside href="..." attributes.
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  return `${day}.${month} ${hh}:${mm} UTC`;
}

function leadSummary(l: LeadRecord, index: number): string {
  const who = l.name ? escapeHtml(l.name) : '<i>без имени</i>';
  const svc = l.service ? ` · ${escapeHtml(serviceLabels[l.service] ?? l.service)}` : '';
  return `<b>${index}.</b> ${who}${svc}\n   <code>${escapeHtml(l.phone)}</code> · ${fmtDate(l.createdAt)}`;
}

function leadCard(l: LeadRecord): string {
  const lines = [
    '📥 <b>Заявка</b>',
    `<i>${fmtDate(l.createdAt)}</i>`,
    '',
    l.name ? `<b>Имя:</b> ${escapeHtml(l.name)}` : null,
    `<b>Телефон:</b> <a href="tel:${escapeHtml(l.phone.replace(/\s/g, ''))}">${escapeHtml(l.phone)}</a>`,
    l.email ? `<b>Email:</b> <a href="mailto:${escapeHtml(l.email)}">${escapeHtml(l.email)}</a>` : null,
    l.service ? `<b>Направление:</b> ${escapeHtml(serviceLabels[l.service] ?? l.service)}` : null,
    l.locale ? `<b>Язык:</b> ${escapeHtml(l.locale.toUpperCase())}` : null,
    l.message ? '' : null,
    l.message ? '<b>Сообщение:</b>' : null,
    l.message ? escapeHtml(l.message) : null
  ].filter((s) => s !== null);
  return lines.join('\n');
}

async function buildLeadsPage(offset: number): Promise<{ text: string; keyboard: InlineKeyboard }> {
  const { items, total } = await listLeads({ offset, limit: LEADS_PAGE_SIZE });
  if (total === 0) {
    return {
      text: '📭 <b>Пока нет заявок.</b>\n\nКогда кто-то отправит форму с сайта - она появится здесь.',
      keyboard: { inline_keyboard: [[{ text: '← Назад', callback_data: 'admin:menu' }]] }
    };
  }

  const start = offset + 1;
  const end = offset + items.length;
  const header = `📥 <b>Заявки ${start}-${end} из ${total}</b>\n\n`;
  const body = items
    .map((l, i) => leadSummary(l, offset + i + 1))
    .join('\n\n');

  // Numbered "open" buttons - tg inline keyboard width ~ 3-4 short labels per row
  const openRow: InlineButton[] = items.map((l, i) => ({
    text: String(offset + i + 1),
    callback_data: `admin:lead:${l.id}:${offset}`
  }));

  const nav: InlineButton[] = [];
  if (offset > 0) {
    nav.push({
      text: '← Предыдущие',
      callback_data: `admin:leads:${Math.max(0, offset - LEADS_PAGE_SIZE)}`
    });
  }
  if (offset + LEADS_PAGE_SIZE < total) {
    nav.push({
      text: 'Следующие →',
      callback_data: `admin:leads:${offset + LEADS_PAGE_SIZE}`
    });
  }

  const rows: InlineButton[][] = [openRow];
  if (nav.length) rows.push(nav);
  rows.push([{ text: '← В меню', callback_data: 'admin:menu' }]);

  return { text: header + body, keyboard: { inline_keyboard: rows } };
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
    // Telegram display names regularly contain & < > — unescaped they make
    // sendMessage fail with "can't parse entities" and the reply is lost.
    const uname = s.username ? ` (@${escapeHtml(s.username)})` : '';
    return `• <b>${escapeHtml(s.name)}</b>${uname}${tag}\n  ID: <code>${s.chatId}</code>`;
  });

  return `👥 <b>Подписчики (${list.length}):</b>\n\n${lines.join('\n\n')}`;
}

// ─── Webhook handler ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Fail closed: without a configured secret anyone could POST forged updates
  // (e.g. /adduser their own chat ID) and start receiving lead PII.
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!expected) {
    console.error('[telegram] TELEGRAM_WEBHOOK_SECRET is not configured - rejecting webhook');
    return NextResponse.json({ ok: false }, { status: 503 });
  }
  const got = req.headers.get('x-telegram-bot-api-secret-token');
  if (got !== expected) return NextResponse.json({ ok: false }, { status: 401 });

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

    // A callback query can only be answered once — answer with the error for
    // non-admins, otherwise acknowledge silently before doing the work.
    if (!isAdmin(chatId)) {
      await tgAnswer(cq.id, '❌ Нет доступа');
      return NextResponse.json({ ok: true });
    }
    await tgAnswer(cq.id);

    if (data.startsWith('admin:leads:')) {
      const offset = Number(data.slice('admin:leads:'.length)) || 0;
      const { text, keyboard } = await buildLeadsPage(offset);
      if (msgId) await tgEdit(chatId, msgId, text, keyboard);
      else await tgSend(chatId, text, { reply_markup: keyboard });
      return NextResponse.json({ ok: true });
    }

    if (data.startsWith('admin:lead:')) {
      // admin:lead:<id>:<returnOffset>
      const rest = data.slice('admin:lead:'.length);
      const colon = rest.lastIndexOf(':');
      const id = colon === -1 ? rest : rest.slice(0, colon);
      const returnOffset = colon === -1 ? 0 : Number(rest.slice(colon + 1)) || 0;
      const lead = await getLead(id);
      const text = lead ? leadCard(lead) : '⚠️ Заявка не найдена.';
      const keyboard: InlineKeyboard = {
        inline_keyboard: [
          [{ text: '← К списку', callback_data: `admin:leads:${returnOffset}` }],
          [{ text: '← В меню', callback_data: 'admin:menu' }]
        ]
      };
      if (msgId) await tgEdit(chatId, msgId, text, keyboard);
      else await tgSend(chatId, text, { reply_markup: keyboard });
      return NextResponse.json({ ok: true });
    }

    if (data === 'admin:stats') {
      const s = await leadStats();
      const text =
        '📊 <b>Статистика заявок</b>\n\n' +
        `Сегодня (UTC): <b>${s.today}</b>\n` +
        `За 7 дней: <b>${s.last7d}</b>\n` +
        `За 30 дней: <b>${s.last30d}</b>\n` +
        `Всего в базе: <b>${s.total}</b>`;
      const keyboard: InlineKeyboard = {
        inline_keyboard: [[{ text: '← В меню', callback_data: 'admin:menu' }]]
      };
      if (msgId) await tgEdit(chatId, msgId, text, keyboard);
      else await tgSend(chatId, text, { reply_markup: keyboard });
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
        '/leads - последние заявки\n' +
        '/stats - статистика заявок\n' +
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
  // Raw name goes to the subscriber store; the HTML-escaped variant is for
  // parse_mode:'HTML' replies (names with & < > would break sendMessage).
  const safeGreeting = escapeHtml(greeting);
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

  // /leads
  if (text === '/leads' || text === '📥 Заявки') {
    if (!admin) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const { text: pageText, keyboard } = await buildLeadsPage(0);
    await tgSend(chatId, pageText, { reply_markup: keyboard });
    return NextResponse.json({ ok: true });
  }

  // /stats
  if (text === '/stats') {
    if (!admin) {
      await tgSend(chatId, '❌ У вас нет прав администратора.');
      return NextResponse.json({ ok: true });
    }
    const s = await leadStats();
    await tgSend(
      chatId,
      '📊 <b>Статистика заявок</b>\n\n' +
        `Сегодня (UTC): <b>${s.today}</b>\n` +
        `За 7 дней: <b>${s.last7d}</b>\n` +
        `За 30 дней: <b>${s.last30d}</b>\n` +
        `Всего в базе: <b>${s.total}</b>`
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
          `👋 Здравствуйте, ${safeGreeting}!\n\nВы подписаны и получаете заявки с сайта <b>LegalWin</b>.\n\n👑 Вы - администратор.`,
          { reply_markup: adminReplyKeyboard() }
        );
      } else {
        await tgSend(
          chatId,
          `👋 Здравствуйте, ${safeGreeting}!\n\nВы уже подписаны и получаете заявки с сайта <b>LegalWin</b>.`,
          { reply_markup: subscriberReplyKeyboard() }
        );
      }
    } else {
      await tgSend(
        chatId,
        `👋 Здравствуйте, ${safeGreeting}!\n\nЭто бот <b>LegalWin</b> для получения заявок с сайта.\n\nЧтобы получать заявки, передайте администратору ваш Chat ID:\n<code>${chatId}</code>\n\n/myid - показать ID ещё раз`
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
