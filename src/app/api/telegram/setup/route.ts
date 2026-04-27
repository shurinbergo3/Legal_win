/**
 * One-time setup endpoint.
 * Call once after deploy to register bot commands and menu button in Telegram.
 *
 * GET /api/telegram/setup?secret=<TELEGRAM_WEBHOOK_SECRET>
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function tgApi(token: string, method: string, body: unknown) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store'
  });
  return res.json();
}

export async function GET(req: NextRequest) {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const provided = req.nextUrl.searchParams.get('secret');

  if (secret && provided !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: false, error: 'TELEGRAM_BOT_TOKEN not set' }, { status: 500 });
  }

  // Commands visible to regular users
  const userCommands = [
    { command: 'start', description: 'Приветствие и подключение' },
    { command: 'myid', description: 'Мой Telegram Chat ID' },
    { command: 'status', description: 'Статус подписки на заявки' },
    { command: 'stop', description: 'Отписаться от заявок' }
  ];

  // Commands visible to admins (registered via scope)
  const adminCommands = [
    ...userCommands,
    { command: 'admin', description: '👑 Панель администратора' },
    { command: 'listusers', description: 'Список всех подписчиков' },
    { command: 'adduser', description: 'Добавить подписчика по ID' },
    { command: 'removeuser', description: 'Удалить подписчика по ID' }
  ];

  const results: Record<string, unknown> = {};

  // Register webhook with all required update types
  const webhookUrl = `${req.nextUrl.origin}/api/telegram/webhook`;
  results.webhook = await tgApi(token, 'setWebhook', {
    url: webhookUrl,
    allowed_updates: ['message', 'callback_query'],
    ...(secret ? { secret_token: secret } : {})
  });

  // Set default commands for all users
  results.userCommands = await tgApi(token, 'setMyCommands', {
    commands: userCommands,
    scope: { type: 'default' }
  });

  // Set admin commands for each admin chat
  const adminIds = (process.env.TELEGRAM_OPERATOR_CHAT_IDS ?? '')
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n !== 0);

  results.adminCommands = [];
  for (const adminId of adminIds) {
    const r = await tgApi(token, 'setMyCommands', {
      commands: adminCommands,
      scope: { type: 'chat', chat_id: adminId }
    });
    (results.adminCommands as unknown[]).push({ adminId, result: r });
  }

  // Set menu button to open bot (optional: use web_app if you have a web app)
  results.menuButton = await tgApi(token, 'setChatMenuButton', {
    menu_button: { type: 'commands' }
  });

  return NextResponse.json({ ok: true, results });
}
