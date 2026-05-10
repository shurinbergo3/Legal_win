# Telegram bot — setup & usage

The contact form on legalwin.pl sends every submission to a Telegram bot.
Recipients are:

1. **Admins** — chat IDs listed in `TELEGRAM_OPERATOR_CHAT_IDS`. Always
   receive leads, can manage subscribers from inside the bot.
2. **Subscribers** — added at runtime via `/adduser` (admin command) or
   the admin panel inline button. Stored in Vercel KV.

> ## ⚠️ After rotating the bot token
>
> When you `/revoke` the token in @BotFather (or generate a new one for any
> reason), Telegram **automatically detaches the webhook** from the new
> token. The bot will silently stop responding to `/start`, `/admin`, and
> every other inline command — incoming messages just queue up on
> Telegram's side (`pending_update_count` grows in `getWebhookInfo`).
>
> Always run these three steps after any token change:
>
> 1. Update `TELEGRAM_BOT_TOKEN` in Vercel (Settings → Environment
>    Variables). The field is **Sensitive**, so the edit dialog shows
>    empty — you must paste the full new token, no leading/trailing
>    whitespace.
> 2. **Redeploy** the project (Deployments → `···` → Redeploy on the
>    latest deployment). Without redeploy, the running functions keep
>    using the old token and Telegram API calls return `404 Not Found`.
> 3. Open `https://legalwin.pl/api/telegram/setup` (add
>    `?secret=<TELEGRAM_WEBHOOK_SECRET>` if that env var is set). This
>    re-registers the webhook and the slash-command lists in one shot.
>    Verify with `getWebhookInfo` — the `url` field must be non-empty.

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
  reads TELEGRAM_OPERATOR_CHAT_IDS    sends a message to
   + Vercel KV (legalwin:subscribers) each subscriber chat
```

If Vercel KV is not connected, the bot falls back to a local JSON file
(`data/subscribers.json`). On Vercel that filesystem is read-only, so any
`/adduser` will fail with an "ephemeral" warning until KV is wired up.

## One-time bot setup

### 1. Set env vars

Locally — `.env.local`:

```env
TELEGRAM_BOT_TOKEN=<your-bot-token-from-BotFather>
TELEGRAM_OPERATOR_CHAT_IDS=240919952026
TELEGRAM_WEBHOOK_SECRET=         # optional, see below
```

In production (Vercel) — set the same vars in the hosting provider's
dashboard.

### 1b. Connect Vercel KV (production)

Required for `/adduser`, `/removeuser`, and the admin-panel inline buttons
to work on Vercel.

1. Vercel Dashboard → your project → **Storage** → **Create Database** →
   pick **Upstash for Redis** (KV). Free tier is enough.
2. Click **Connect** to attach it to the LegalWin project.
3. Vercel auto-injects `KV_REST_API_URL`, `KV_REST_API_TOKEN`, and a few
   companions into your env vars.
4. Redeploy. The bot detects KV at runtime and starts persisting
   subscribers there.

To run locally against the same KV (optional), pull the env vars:
`vercel env pull .env.local`.

### 2. Set the webhook URL

Telegram needs to know where to POST updates. Run **once** after deploy:

```bash
TOKEN="<your-bot-token-from-BotFather>"
URL="https://legalwin.pl/api/telegram/webhook"
SECRET=""   # optional — must match TELEGRAM_WEBHOOK_SECRET if set

curl -sS -X POST "https://api.telegram.org/bot$TOKEN/setWebhook" \
     -d "url=$URL" \
     -d "secret_token=$SECRET" \
     -d "allowed_updates=[\"message\",\"callback_query\"]"
```

Or hit `GET /api/telegram/setup?secret=<TELEGRAM_WEBHOOK_SECRET>` once after
each deploy — it registers the webhook and the command list in one go.

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

## How a lawyer is added

1. Lawyer opens Telegram, finds the bot, hits **Start** and sends `/myid`.
2. Lawyer sends their Chat ID to the admin.
3. Admin opens `/admin` → **➕ Добавить по ID** → sends `/adduser <id>`.
   The new subscriber is persisted to Vercel KV; no redeploy needed.

Alternative: append the Chat ID to `TELEGRAM_OPERATOR_CHAT_IDS` on Vercel
to grant **admin** rights (full panel access). Permanent operators in that
env var are always merged in regardless of what's in KV.

### Bot commands

| Command | Effect |
|---------|--------|
| `/start`   | Welcome — shows the user's Chat ID |
| `/myid`    | Show own Chat ID |
| `/status`  | Shows whether you're subscribed |
| `/stop`    | Unsubscribe yourself |
| `/admin`   | Admin panel (admins only) |
| `/listusers` | List all subscribers (admins only) |
| `/adduser <id>` | Add subscriber by ID (admins only) |
| `/removeuser <id>` | Remove subscriber by ID (admins only) |

## Storage notes

Subscribers are stored in **Vercel KV** under the key `legalwin:subscribers`
when KV is connected (the production setup). Without KV, the code falls
back to `data/subscribers.json` — fine for local dev, broken on serverless.

Permanent operators in `TELEGRAM_OPERATOR_CHAT_IDS` are always merged in on
top of whatever is in KV — even if KV is wiped, those IDs keep receiving
leads.

## Security

- The bot token is a **secret** — anyone with it can post as the bot.
  If it leaks, regenerate via [@BotFather](https://t.me/BotFather) →
  `/revoke`.
- Set `TELEGRAM_WEBHOOK_SECRET` to a random string and pass it to
  `setWebhook?secret_token=...` — Telegram will then sign every request
  and the route rejects anything else.

## Troubleshooting

| Problem | Check |
|---------|-------|
| Bot doesn't respond to `/start` | `getWebhookInfo` — webhook URL set? `last_error_message` non-empty? |
| Bot silent, `getWebhookInfo` returns `url: ""` and `pending_update_count > 0` | Token was rotated but webhook never re-registered. See "After rotating the bot token" above. |
| `/api/telegram/setup` returns `404 Not Found` for every Telegram call | Token in Vercel doesn't match a real bot. Either paste mistake, or env var was updated without a redeploy (running functions still see the old value). |
| `getWebhookInfo` shows errors | URL must be HTTPS, must respond 200 to POST, must accept JSON |
| Form says "success" but nothing arrives | `TELEGRAM_OPERATOR_CHAT_IDS` is empty AND no subscribers in KV |
| `/adduser` says "хостинг не сохраняет подписки" | Vercel KV is not connected — see step 1b above |
| Need to remove an operator | Delete the ID from `TELEGRAM_OPERATOR_CHAT_IDS` (admin) or run `/removeuser <id>` (subscriber) |
