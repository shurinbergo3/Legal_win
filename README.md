<div align="center">

# LegalWin

**Editorial marketing site for a Polish law firm — immigration, citizenship, business & tax in Poland.**

Trilingual (RU · PL · EN) · AI legal consultant with RAG · Telegram intake.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![next-intl](https://img.shields.io/badge/next--intl-v4-7C3AED)](https://next-intl.dev)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel%20AI%20SDK-v4-000000?logo=vercel&logoColor=white)](https://sdk.vercel.ai)
[![OpenAI](https://img.shields.io/badge/OpenAI-gpt--4o--mini-412991?logo=openai&logoColor=white)](https://platform.openai.com)
[![License](https://img.shields.io/badge/License-Proprietary-7A5B14)](#license)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [AI Consultant (RAG)](#ai-consultant-rag)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Localization](#localization)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [License](#license)

---

## Overview

LegalWin is the marketing site for a Warsaw-based law firm serving CIS, EU and US clients relocating to Poland. The site combines an editorial visual language (deep navy + gold, Fraunces display, 12-column grid) with a streaming AI consultant grounded in the firm's own knowledge base, and routes every contact request straight into Telegram.

**Practice areas covered:**

| Area | Focus |
|---|---|
| **Karta Pobytu (TRC)** | Temporary & permanent residence permits |
| **Polish Citizenship** | Naturalization, repatriation, descent |
| **Business Setup** | Sp. z o.o., JDG, foundations, branches |
| **Tax Compliance** | CIT · VAT · PIT, ongoing accounting |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Server Actions, Edge runtime) |
| UI | **React 19** · **Tailwind CSS v4** (inline `@theme`, no config file) |
| Motion | **Framer Motion v12** |
| i18n | **next-intl v4** — middleware-based routing, JSON message catalogs |
| Forms | **react-hook-form** + **Zod** validation |
| AI | **Vercel AI SDK v4** + **@ai-sdk/openai** (`gpt-4o-mini`) |
| Messaging | **Telegram Bot API** (MarkdownV2) |
| Icons | **lucide-react** |

---

## Features

- **Editorial landing** — deep navy (`ink-950` `#05091a`) on gold (`gold-400` `#e9c269`), oversized Fraunces headlines paired with Inter body, soft glassmorphism via `.glass` / `.glass-strong` helpers.
- **Four practice modules** — dedicated content sections for residence, citizenship, business, and tax.
- **Trilingual content** — RU (default) · PL · EN, served from `/ru`, `/pl`, `/en` with locale-scoped Server Actions.
- **Contact intake → Telegram** — Server Action validates with Zod, then posts MarkdownV2 to your Telegram chat. Subscribers (password-gated) receive a copy of every submission. See [TELEGRAM.md](./TELEGRAM.md).
- **Streaming AI consultant** — floating chat widget grounded in the firm's knowledge base via RAG (see below).
- **SEO** — `robots.ts` + `sitemap.ts` with `hreflang` and canonical URLs across locales.

---

## AI Consultant (RAG)

A floating chat in the bottom-right corner serves as a virtual LegalWin lawyer. The bot:

- Answers questions on Polish migration, corporate, and tax law.
- Mirrors the user's language automatically (RU · PL · EN · UA).
- Uses **Retrieval-Augmented Generation** — responses are grounded in the firm's internal knowledge base (profile, processes, timelines, consultation limits) rather than the model's general priors.
- Hands complex cases off to the contact form and never collects personal data in chat.

### Architecture

| Layer | Location | Purpose |
|---|---|---|
| UI widget | [src/components/Chatbot.tsx](src/components/Chatbot.tsx) | Floating button + chat window; streams via `useChat` (`@ai-sdk/react`) |
| API | [src/app/api/chat/route.ts](src/app/api/chat/route.ts) | Edge-runtime endpoint, `streamText` from Vercel AI SDK, model `gpt-4o-mini` |
| Knowledge base | [src/lib/knowledge-base.ts](src/lib/knowledge-base.ts) | Source of truth for RAG: firm facts, procedures, constraints |
| System prompt | `SYSTEM_PROMPT` constant in `route.ts` | Role, tone, guardrails (no fabricated timelines or pricing, scope limits) |

### How RAG works today

The knowledge base is **injected into the system prompt on every request** — a lightweight RAG without a vector index. This works as long as the corpus fits in context. For scaling (parsing `legalwin.pl`, FAQs, case studies, pricing), the project is ready to upgrade to full RAG with embeddings + a vector store (e.g. pgvector / Pinecone / Vercel Postgres + the AI SDK `embed` helper). The extension point is marked in [PROJECT_MAP.md](./PROJECT_MAP.md) §6.

### Swapping the model / provider

```ts
// src/app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic'; // npm i @ai-sdk/anthropic

model: anthropic('claude-sonnet-4-6')
```

---

## Quick Start

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env.local      # then fill in the keys

# 3. Run
npm run dev                     # http://localhost:3000/ru
```

---

## Environment Variables

| Variable | Required | Purpose |
|---|:---:|---|
| `OPENAI_API_KEY` | ✅ | Powers the RAG-backed AI consultant |
| `TELEGRAM_BOT_TOKEN` | ✅ | Sends contact-form submissions to Telegram |
| `TELEGRAM_CHAT_ID` | ✅ | Primary chat / channel that receives submissions |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Canonical URL, sitemap, OG tags (`https://legalwin.pl` in production) |

Bot setup, retrieving `chat.id`, and configuring subscriber copies are documented in [PROJECT_MAP.md](./PROJECT_MAP.md) §3 and [TELEGRAM.md](./TELEGRAM.md).

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

```text
src/
├── middleware.ts              ← i18n routing (next-intl)
├── i18n/                      ← locale + navigation config
├── app/
│   ├── [locale]/              ← localized pages + Server Actions
│   ├── api/chat/route.ts      ← AI endpoint (RAG, edge runtime)
│   ├── globals.css            ← design tokens (@theme), glass, gradients
│   ├── robots.ts
│   └── sitemap.ts
├── components/                ← Hero, Services, Contact, Chatbot, Header, …
└── lib/
    ├── knowledge-base.ts      ← RAG corpus
    ├── telegram.ts            ← Telegram Bot API client
    ├── subscribers.ts         ← Telegram subscriber copies
    ├── schemas.ts             ← Zod form schemas
    ├── services/              ← practice-area content modules
    └── cn.ts
messages/                      ← ru.json · pl.json · en.json
```

A full file map with extension points lives in [PROJECT_MAP.md](./PROJECT_MAP.md).

---

## Localization

| Locale | Path | Status |
|---|---|---|
| 🇷🇺 Russian | `/ru` | **Default** |
| 🇵🇱 Polish | `/pl` | Full |
| 🇬🇧 English | `/en` | Full |

Routing is handled by `next-intl` middleware; copy lives in `messages/{locale}.json`. **Any new user-facing string must land in all three files** to keep parity.

---

## Deployment

The project is built for **Vercel**:

1. Connect the repository.
2. Add the environment variables from the table above.
3. Bind the production domain (e.g. `legalwin.pl`).

`/api/chat` already targets the Edge runtime — no extra configuration required.

---

## Documentation

| Doc | Contents |
|---|---|
| [PROJECT_MAP.md](./PROJECT_MAP.md) | File map, extension points, environment configuration, RAG upgrade path |
| [TELEGRAM.md](./TELEGRAM.md) | Bot setup, MarkdownV2 formatting, subscriber list management |

---

## License

Proprietary — internal commercial project. All rights reserved by LegalWin.
