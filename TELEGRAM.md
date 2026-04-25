# Telegram bot — setup & usage

The contact form on legalwin.pl sends every submission to a Telegram bot.
Whoever DMs the bot with the access password becomes a subscriber and
starts receiving requests in their personal chat. No accounts, no panel.

## How it works

```
[user fills the form on the site]
            │
            ▼
   submitContact() server action
            │
            ▼
   sendContactToTelegram()  ─►  Telegram Bot API
            │                         │
            ▼                         ▼
  reads data/subscribers.json    sends a message to
  + TELEGRAM_OPERATOR_CHAT_IDS   each subscriber chat
```

Subscribers are added via the bot itself (`/start` → password) — the site
operator never has to touch a config file to add a new lawyer.

## One-time bot setup

### 1. Set env vars

Locally — `.env.local`:

```env
TELEGRAM_BOT_TOKEN=7688457397:AAGsEOzTsuLPHY6ZuqHdCgexomWOBaxIfHI
TELEGRAM_PASSWORD=240919952026
TELEGRAM_WEBHOOK_SECRET=         # optional, see below
TELEGRAM_OPERATOR_CHAT_IDS=      # optional comma-separated list
```

In production (Vercel / Netlify / wherever) — set the same vars in the
hosting provider's dashboard.

### 2. Set the webhook URL

Telegram needs to know where to POST updates. Run **once** after deploy:

```bash
TOKEN="7688457397:AAGsEOzTsuLPHY6ZuqHdCgexomWOBaxIfHI"
URL="https://legalwin.pl/api/telegram/webhook"
SECRET=""   # optional — must match TELEGRAM_WEBHOOK_SECRET if set

curl -sS -X POST "https://api.telegram.org/bot$TOKEN/setWebhook" \
     -d "url=$URL" \
     -d "secret_token=$SECRET" \
     -d "allowed_updates=[\"message\"]"
```

Verify:

```bash
curl -sS "https://api.telegram.org/bot$TOKEN/getWebhookInfo"
```

You should see `"url": "https://legalwin.pl/api/telegram/webhook"` and
`"pending_update_count": 0`.

### Local dev: tunnel with ngrok

Telegram needs a public HTTPS URL — `localhost:3000` won't work.
Easiest: [`ngrok`](https://ngrok.com).

```bash
ngrok http 3000
# use the https URL it prints, e.g. https://abc123.ngrok-free.app
curl -X POST "https://api.telegram.org/bot$TOKEN/setWebhook" \
     -d "url=https://abc123.ngrok-free.app/api/telegram/webhook"
```

Re-run the setWebhook each time ngrok hands you a new URL.

## How a lawyer subscribes

1. Open Telegram, find the bot (search by its `@username`).
2. Press **Start** (or send `/start`). Bot greets and asks for the password.
3. Send the password (one message, just the digits).
4. Bot replies "✅ Доступ открыт" — done. Future form submissions arrive
   as messages in this chat.

### Bot commands

| Command | Effect |
|---------|--------|
| `/start`   | Welcome + password prompt |
| `/status`  | Shows whether you're subscribed |
| `/stop`    | Removes you from the subscriber list |

## Storage notes

Subscribers are stored in `data/subscribers.json` (gitignored).

- **Long-lived runtime (VPS, dedicated host, Docker)**: works as-is —
  the file persists between requests.
- **Serverless (Vercel, Cloudflare Workers, Netlify functions)**: the
  filesystem is reset every cold start. The file approach won't survive
  a redeploy. Either:
  - Hard-code permanent operators via `TELEGRAM_OPERATOR_CHAT_IDS=
    111,222,333` (comma-separated chat IDs), or
  - Swap `src/lib/subscribers.ts` to use a real KV store (Vercel KV,
    Upstash Redis, Postgres, etc.). The interface (`addSubscriber`,
    `removeSubscriber`, `listSubscribers`, `isSubscribed`) is small.

## Security

- The bot token is a **secret** — anyone with it can post as the bot.
  If it leaks, regenerate via [@BotFather](https://t.me/BotFather) →
  `/revoke`. (The token in this repo's `.env.local` was shared in plain
  chat; if that conversation could be read by anyone outside the team,
  rotate the token before going live.)
- The password gates *who can subscribe*. Pick something long and random.
  Don't commit it.
- Set `TELEGRAM_WEBHOOK_SECRET` to a random string and pass it to
  `setWebhook?secret_token=...` — Telegram will then sign every request
  and the route rejects anything else.

## Troubleshooting

| Problem | Check |
|---------|-------|
| Bot doesn't respond to `/start` | `getWebhookInfo` — webhook URL set? `last_error_message` non-empty? |
| `getWebhookInfo` shows errors | URL must be HTTPS, must respond 200 to POST, must accept JSON |
| Form says "success" but nothing arrives | `data/subscribers.json` is empty — subscribe at least one chat first |
| `data/subscribers.json` not created | Make sure the Node process has write access to the project root |
| Need to wipe all subscribers | Delete `data/subscribers.json` (or just the `chatIds` array) |
