# LegalWin

Сайт польской юридической фирмы LegalWin — иммиграция, гражданство, бизнес и налоги в Польше. Трёхъязычный (RU / PL / EN), с встроенным AI-консультантом на базе RAG и интеграцией с Telegram для приёма заявок.

> Стек: **Next.js 16** (App Router) · **React 19** · **Tailwind v4** · **next-intl v4** · **Framer Motion** · **Vercel AI SDK** · **OpenAI** · **Telegram Bot API**

---

## Что внутри

- **Лендинг** в редакторском стиле: тёмно-синий + золото, сетка 12 колонок, типопара Fraunces / Inter, мягкий glassmorphism.
- **Четыре практики:** Карта побыту (TRC), польское гражданство, регистрация бизнеса (Sp. z o.o., JDG), налоговое сопровождение (CIT / VAT / PIT).
- **Локализация:** RU (по умолчанию), PL, EN — `/ru`, `/pl`, `/en`. Маршрутизация через `next-intl` middleware, отдельные `messages/*.json`.
- **Контактная форма:** Server Action + Zod-валидация, заявки уходят в Telegram (через Bot API, MarkdownV2). Подписчики (по паролю) дополнительно получают копии — см. [TELEGRAM.md](./TELEGRAM.md).
- **AI-консультант с RAG-системой** (см. ниже).
- **SEO:** `robots.ts` + `sitemap.ts` с `hreflang`, canonical-URL’ы.

Подробная карта файлов, переменных и точек редактирования — в [PROJECT_MAP.md](./PROJECT_MAP.md).

---

## AI-консультант (RAG)

В правом нижнем углу сайта живёт floating-чат — виртуальный юрист LegalWin. Бот:

- отвечает на вопросы по польскому миграционному, корпоративному и налоговому праву;
- автоматически зеркалит язык собеседника (RU / PL / EN / UA);
- использует **RAG (Retrieval-Augmented Generation)** — ответы генерируются не «из головы» модели, а заземлены на внутреннюю базу знаний фирмы (профиль, процессы, сроки, лимиты консультанта);
- при сложных кейсах перенаправляет к контактной форме и не собирает персональные данные в чате.

### Архитектура

| Слой | Где | Назначение |
|---|---|---|
| UI-виджет | [src/components/Chatbot.tsx](src/components/Chatbot.tsx) | Floating-кнопка + окно чата, стрим ответов через `useChat` (`@ai-sdk/react`). |
| API | [src/app/api/chat/route.ts](src/app/api/chat/route.ts) | Edge-runtime endpoint, `streamText` из Vercel AI SDK, модель `gpt-4o-mini`. |
| База знаний | [src/lib/knowledge-base.ts](src/lib/knowledge-base.ts) | Источник правды для RAG: фирменные факты, процедуры, ограничения. |
| System prompt | константа `SYSTEM_PROMPT` в `route.ts` | Роль, стиль, защитные правила (не выдумывать сроки/тарифы, не выходить за тематику). |

### Как сейчас работает RAG

База знаний инжектится в system prompt при каждом запросе — это «лёгкий» RAG без векторного индекса. Подходит, пока корпус знаний помещается в контекст. Для масштабирования (парсинг сайта `legalwin.pl`, FAQ, кейсы, прайс) предусмотрен апгрейд до полноценного RAG: эмбеддинги + векторная БД (например, pgvector / Pinecone / Vercel Postgres + `embed`-helper из AI SDK) — точка расширения помечена в [PROJECT_MAP.md](./PROJECT_MAP.md) §6.

### Сменить модель / провайдера

```ts
// src/app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic'; // npm i @ai-sdk/anthropic
model: anthropic('claude-sonnet-4-6')
```

---

## Быстрый старт

```bash
npm install
cp .env.example .env.local     # заполнить ключи
npm run dev                    # http://localhost:3000/ru
```

### Переменные окружения

| Переменная | Зачем |
|---|---|
| `OPENAI_API_KEY` | AI-консультант с RAG |
| `TELEGRAM_BOT_TOKEN` | Отправка заявок в Telegram |
| `TELEGRAM_CHAT_ID` | Основной чат/канал получения заявок |
| `NEXT_PUBLIC_SITE_URL` | Canonical, sitemap, OG (`https://legalwin.pl` в проде) |

Подробнее, включая получение `chat.id` и настройку прав бота, — в [PROJECT_MAP.md](./PROJECT_MAP.md) §3 и [TELEGRAM.md](./TELEGRAM.md).

### Скрипты

```bash
npm run dev         # дев-сервер
npm run build       # прод-сборка
npm start           # запустить прод
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

---

## Структура

```
src/
├── middleware.ts          ← i18n-роутинг
├── i18n/                  ← конфиг локалей и навигации
├── app/
│   ├── [locale]/          ← локализованные страницы + Server Actions
│   ├── api/chat/route.ts  ← AI endpoint (RAG)
│   ├── globals.css        ← дизайн-токены (@theme), glass, градиенты
│   ├── robots.ts
│   └── sitemap.ts
├── components/            ← Hero, Services, Contact, Chatbot, Header, ...
└── lib/
    ├── knowledge-base.ts  ← корпус знаний для RAG
    ├── telegram.ts        ← отправка заявок
    ├── subscribers.ts     ← подписчики Telegram-копий
    ├── schemas.ts         ← Zod-схемы форм
    ├── services/          ← контентные модули по практикам
    └── cn.ts
messages/                  ← ru.json / pl.json / en.json
```

---

## Деплой

Vercel: подключить репо, добавить переменные окружения из таблицы выше, привязать домен `legalwin.pl`. `/api/chat` уже на Edge runtime — отдельных настроек не требует.

---

## Лицензия

Внутренний коммерческий проект. Все права принадлежат LegalWin.
