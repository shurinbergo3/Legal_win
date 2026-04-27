<div align="center">

# LegalWin

**Marketing site for a Polish law firm — immigration, citizenship, business & tax in Poland.**

Trilingual (RU · PL · EN) · AI legal consultant with lead qualification · Telegram intake.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![next-intl](https://img.shields.io/badge/next--intl-v4-7C3AED)](https://next-intl.dev)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel%20AI%20SDK-v4-000000?logo=vercel&logoColor=white)](https://sdk.vercel.ai)
[![Groq](https://img.shields.io/badge/Groq-llama--3.3--70b-F55036?logo=groq&logoColor=white)](https://groq.com)
[![License](https://img.shields.io/badge/License-Proprietary-7A5B14)](#license)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [AI Consultant](#ai-consultant)
- [Telegram Bot](#telegram-bot)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Localization](#localization)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

LegalWin is the marketing site for a Warsaw-based law firm serving CIS, EU and local Polish clients. The site combines an editorial visual design (deep navy + gold, Fraunces display) with a streaming AI consultant grounded in the firm's own knowledge base, and routes every contact request directly into Telegram with automatic lead qualification.

**Practice areas covered:**

| Area | Focus |
|---|---|
| **Karta Pobytu (TRC)** | Temporary & permanent residence permits |
| **Polish Citizenship** | Naturalization, repatriation, Karta Polaka |
| **Business Setup** | Sp. z o.o., JDG registration |
| **Tax & Accounting** | CIT · VAT · PIT · Estonian CIT · IP Box, ongoing accounting |
| **Appeals** | Voivode decisions, international protection |
| **Driver's licence** | Licence exchange, Kod 95 |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Server Actions, Node.js runtime) |
| UI | **React 19** · **Tailwind CSS v4** (inline `@theme`, no config file) |
| Motion | **Framer Motion v12** |
| i18n | **next-intl v4** — middleware-based routing, JSON message catalogs |
| Forms | **react-hook-form** + **Zod** validation |
| AI | **Vercel AI SDK v4** + **Groq** (`llama-3.3-70b-versatile`) — streaming chat with tool use |
| Messaging | **Telegram Bot API** — contact intake + subscriber management bot |
| Icons | **lucide-react** |

---

## Features

- **Editorial landing** — deep navy (`#05091a`) on gold (`#e9c269`), oversized Fraunces headlines with Inter body, glassmorphism helpers.
- **Service detail pages** — dedicated pages for each practice area under `/uslugi/[slug]`.
- **Blog** — multilingual editorial blog under `/blog/[slug]`.
- **Trilingual content** — RU (default) · PL · EN, served from `/ru`, `/pl`, `/en` with locale-scoped Server Actions.
- **Contact form → Telegram** — Server Action validates with Zod, delivers to all subscribed Telegram operators.
- **AI consultant with lead scoring** — floating chat widget; every captured lead is qualified before delivery (see below).
- **SEO** — `robots.ts` + `sitemap.ts` with `hreflang` and canonical URLs across all locales.
- **Cookie consent** — GDPR-compliant banner.

---

## AI Consultant

A floating chat in the bottom-right corner acts as **Mila**, a LegalWin manager persona. The bot:

- Answers questions on Polish migration, corporate, and tax law, grounded in the firm's internal knowledge base.
- **Automatically matches the user's language** — RU · PL · EN · UA. The language is detected from the first message and held for the entire session.
- Collects name + contact (phone or email), gets explicit GDPR consent, then fires the `submitLead` tool.
- **Qualifies every lead** before delivery to Telegram: urgency (🔴 high / 🟡 medium / 🟢 low) and readiness (🔥 hot / 👍 warm / ❄️ cold) are inferred from conversation signals.

### Lead qualification signals

| Field | High / Hot | Medium / Warm | Low / Cold |
|---|---|---|---|
| **Urgency** | Voivode refusal, appeal deadline, expiring visa | Concrete situation, no deadline | General inquiry, "someday" |
| **Readiness** | Asked about price/docs, wants to book | Specific case, still comparing | One message, no clear need |

### What arrives in Telegram

```
💬 🔴 СРОЧНО | TRC → Апелляция
Готовность: 🔥 Горячий

Имя: Анна
Телефон: +48 666 123 456
Язык: RU

Ситуация: Получила отказ воеводы 2 недели назад,
дедлайн на апелляцию через 10 дней.
Спрашивала про документы и стоимость.
```

### Architecture

| Layer | Location | Purpose |
|---|---|---|
| UI widget | [src/components/Chatbot.tsx](src/components/Chatbot.tsx) | Floating button + chat window, streams via `useChat` |
| API | [src/app/api/chat/route.ts](src/app/api/chat/route.ts) | `streamText` with `submitLead` tool — collects, qualifies, delivers lead |
| Knowledge base | [src/lib/knowledge-base.ts](src/lib/knowledge-base.ts) | Firm facts, procedures, constraints — injected into system prompt |
| Lead delivery | [src/lib/telegram.ts](src/lib/telegram.ts) | Formats and sends qualified lead to all Telegram subscribers |

---

## Telegram Bot

A separate webhook bot (`/api/telegram/webhook`) manages operator subscriptions and delivers leads.

### Commands

| Command | Who | Action |
|---|---|---|
| `/start` | Anyone | Welcome + password-gated subscription |
| `/myid` | Anyone | Show own Telegram Chat ID |
| `/status` | Anyone | Check subscription status |
| `/stop` | Anyone | Unsubscribe |
| `/admin` | Admins | Inline admin panel |
| `/adduser <id>` | Admins | Add a subscriber by Chat ID |
| `/removeuser <id>` | Admins | Remove a subscriber |
| `/listusers` | Admins | List all active subscribers |

Admins are identified by `TELEGRAM_OPERATOR_CHAT_IDS`. New operators subscribe via password (`TELEGRAM_PASSWORD`). See [TELEGRAM.md](./TELEGRAM.md) for full setup.

---

## Quick Start

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env.local      # fill in the keys

# 3. Run
npm run dev                     # http://localhost:3000/ru
```

---

## Environment Variables

| Variable | Required | Purpose |
|---|:---:|---|
| `GROQ_API_KEY` | ✅ | AI chatbot via Groq (`llama-3.3-70b-versatile`) |
| `TELEGRAM_BOT_TOKEN` | ✅ | Telegram Bot API token |
| `TELEGRAM_OPERATOR_CHAT_IDS` | ✅ | Comma-separated admin Chat IDs — always receive leads, grant admin rights |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Canonical URL for sitemap and OG tags (`https://legalwin.pl` in prod) |
| `TELEGRAM_PASSWORD` | — | Password for operators to self-subscribe via `/start` |
| `TELEGRAM_WEBHOOK_SECRET` | — | Secret token to validate Telegram webhook requests |

Bot setup and webhook registration are documented in [TELEGRAM.md](./TELEGRAM.md).

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run typecheck` | `tsc --noEmit` — strict TypeScript check |
| `npm run lint` | `next lint` |

---

## Project Structure

```
src/
├── middleware.ts                   ← i18n routing (next-intl)
├── i18n/                           ← locale + navigation config
├── app/
│   ├── [locale]/
│   │   ├── page.tsx                ← landing page
│   │   ├── blog/[slug]/            ← blog articles
│   │   ├── uslugi/[slug]/          ← service detail pages
│   │   └── actions.ts              ← contact form Server Action
│   ├── api/
│   │   ├── chat/route.ts           ← AI endpoint (Groq, lead qualification)
│   │   └── telegram/
│   │       ├── webhook/route.ts    ← Telegram bot (commands, subscriptions)
│   │       └── setup/route.ts      ← register bot commands with Telegram
│   ├── globals.css                 ← design tokens (@theme), glass helpers
│   ├── robots.ts
│   └── sitemap.ts
├── components/                     ← Hero, Services, Contact, Chatbot, Header, …
└── lib/
    ├── knowledge-base.ts           ← AI knowledge corpus
    ├── telegram.ts                 ← Telegram delivery + lead formatting
    ├── subscribers.ts              ← subscriber list management
    ├── schemas.ts                  ← Zod form schemas
    ├── services/                   ← practice-area content modules
    └── cn.ts
messages/                           ← ru.json · pl.json · en.json
```

---

## Localization

| Locale | Path | Status |
|---|---|---|
| 🇷🇺 Russian | `/ru` | **Default** |
| 🇵🇱 Polish | `/pl` | Full |
| 🇬🇧 English | `/en` | Full |

Routing is handled by `next-intl` middleware; copy lives in `messages/{locale}.json`. **Any new user-facing string must land in all three files** to keep parity. The AI chatbot additionally supports Ukrainian (UA) — detected from the user's message, no static translation needed.

---

## Deployment

The project deploys to **Vercel**:

1. Connect the repository.
2. Add the environment variables from the table above.
3. Bind the production domain (`legalwin.pl`).
4. Register the Telegram webhook: `GET /api/telegram/setup` after deploy.

---

## License

Proprietary — internal commercial project. All rights reserved by LegalWin.
