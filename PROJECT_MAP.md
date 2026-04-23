# LegalWin — карта проекта

> Юридический сайт для Польши. Next.js 16 (App Router) · React 19 · Tailwind v4 · Framer Motion · next-intl v4 · Vercel AI SDK · Telegram Bot API.

---

## 1. Быстрый старт

```bash
npm install
cp .env.example .env.local     # заполнить ключи (см. §3)
npm run dev                    # http://localhost:3000/ru  (или :3001, если 3000 занят)
npm run build && npm start     # прод-сборка
npm run typecheck              # проверка типов без билда
```

Если видишь `Port 3000 is in use by process XXX`:
```bash
lsof -iTCP:3000 -sTCP:LISTEN -n -P   # посмотреть кто держит
kill -9 <PID>                         # освободить
# или просто открыть http://localhost:3001/ru
```

Дефолтная локаль — `ru`. Заход на `/` редиректит на `/ru`. Доступные: `/ru`, `/pl`, `/en`.

---

## 2. Дерево файлов

```
Legalwin/
├── .env.example                  ← шаблон переменных окружения
├── .env.local                    ← (создать самому, в git не попадёт)
├── .gitignore
├── next.config.ts                ← обёрнут withNextIntl, remotePatterns для картинок
├── package.json
├── postcss.config.mjs            ← @tailwindcss/postcss
├── tsconfig.json
├── public/
│   └── favicon.svg
├── messages/                     ← все тексты сайта
│   ├── ru.json                   ← дефолтная локаль
│   ├── pl.json
│   └── en.json
└── src/
    ├── middleware.ts             ← i18n-роутинг: / → /ru, /pl, /en (обязательно в src/, т.к. app в src/)
    ├── i18n/
    │   ├── routing.ts            ← список локалей, дефолт, режим префиксов
    │   ├── navigation.ts         ← локализованные <Link>, useRouter, usePathname
    │   └── request.ts            ← загрузчик messages на сервере
    ├── lib/
    │   ├── cn.ts                 ← утилита clsx + tailwind-merge
    │   ├── schemas.ts            ← Zod-схема контактной формы
    │   ├── telegram.ts           ← отправка заявки в Telegram Bot API
    │   └── knowledge-base.ts     ← база знаний AI-бота (PLACEHOLDER — заменить!)
    ├── app/
    │   ├── layout.tsx            ← root pass-through (нужен Next.js)
    │   ├── globals.css           ← дизайн-токены, @theme, glass, gradients
    │   ├── robots.ts             ← /robots.txt
    │   ├── sitemap.ts            ← /sitemap.xml с hreflang
    │   ├── api/
    │   │   └── chat/route.ts     ← AI-чат (edge runtime, OpenAI)
    │   └── [locale]/
    │       ├── layout.tsx        ← шрифты, metadata, IntlProvider
    │       ├── page.tsx          ← главная (собирает секции)
    │       ├── not-found.tsx     ← 404 страница
    │       └── actions.ts        ← Server Action "submitContact" → Telegram
    └── components/
        ├── Header.tsx            ← sticky, shrink on scroll, glass
        ├── Hero.tsx              ← editorial grid, Fraunces, staggered fade-in
        ├── TrustBar.tsx          ← 4 статистики
        ├── Services.tsx          ← bento-сетка 7/5 + 5/7, 4 карточки услуг
        ├── About.tsx             ← «о фирме», чек-пункты
        ├── Process.tsx           ← 4 шага работы
        ├── Contact.tsx           ← форма (react + useActionState + Zod)
        ├── Footer.tsx
        ├── LocaleSwitcher.tsx    ← переключатель RU/PL/EN
        └── Chatbot.tsx           ← floating widget + useChat
```

---

## 3. Переменные окружения

Создать `.env.local` (не коммитить):

| Переменная | Зачем | Где взять |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | отправка заявок в Telegram | [@BotFather](https://t.me/BotFather) → `/newbot` → токен |
| `TELEGRAM_CHAT_ID` | в какой чат/канал слать | добавить бота в группу → `https://api.telegram.org/bot<TOKEN>/getUpdates` → поле `chat.id` |
| `OPENAI_API_KEY` | AI-консультант | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| `NEXT_PUBLIC_SITE_URL` | canonical / sitemap / OG | `https://legalwin.pl` (в проде), `http://localhost:3000` (локально) |

### Проверка Telegram

```bash
curl -s "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getMe"
```

Если вернулся JSON с `"ok":true` — бот живой. Ошибка `{"ok":false,"error":"unauthorized"}` = неправильный токен.

Для группового чата бот должен быть **администратором** и с выключенным Privacy Mode (BotFather → `/mybots` → Bot Settings → Group Privacy → Turn off).

---

## 4. Где что править

### Тексты и переводы
**Всегда правь все три файла** в `messages/`:
- `messages/ru.json` — дефолт
- `messages/pl.json`
- `messages/en.json`

Ключи вложены по неймспейсам: `Hero`, `Services`, `Contact`, `Chat` и т.д. Компонент берёт их через `useTranslations('Hero')`.

### Дизайн-токены (цвета, шрифты, радиусы)
`src/app/globals.css`, блок `@theme { ... }`. Все цвета автоматически становятся Tailwind-утилитами: `--color-gold-400` → `bg-gold-400`, `text-gold-400`, `border-gold-400`.

Палитра сейчас:
- `ink-50..950` — серо-синие оттенки (фон, текст)
- `gold-300..700` — золотой акцент (CTA, подчёркивания)
- `cyan-accent` — яркий голубой (резервный акцент)

Шрифты — `Fraunces` (заголовки, класс `.font-display`) + `Inter` (остальное). Подключаются через `next/font/google` в `src/app/[locale]/layout.tsx`.

### Услуги (карточки)
`src/components/Services.tsx` — массив `cards` вверху файла. Для новой карточки: добавить ключ в `cards`, продублировать иконку из `lucide-react`, прописать переводы `xxxTitle`/`xxxDesc`/`xxxTag` в трёх `messages/*.json`.

### Контактная форма
- Схема валидации: `src/lib/schemas.ts`
- Server Action: `src/app/[locale]/actions.ts` → вызывает `sendContactToTelegram`
- Формат сообщения в Telegram: `src/lib/telegram.ts` (MarkdownV2)
- Поля формы: `src/components/Contact.tsx`

Новое поле добавить в 4 местах: схема Zod → UI (`<Field>`) → `labels` в `telegram.ts` → переводы.

### AI-чатбот
- Виджет: `src/components/Chatbot.tsx`
- API: `src/app/api/chat/route.ts` (edge runtime, модель `gpt-4o-mini`)
- System prompt: константа `SYSTEM_PROMPT` в `route.ts`
- **База знаний:** `src/lib/knowledge-base.ts` — сейчас это плейсхолдер, заменить на реальные тексты с `legalwin.pl` (политика, цены, кейсы, FAQ). Для больших объёмов знаний — подключить RAG (embeddings + векторная БД).

Сменить модель / провайдера:
```ts
// route.ts
import { anthropic } from '@ai-sdk/anthropic'; // npm i @ai-sdk/anthropic
model: anthropic('claude-sonnet-4-6')
```

### Шапка и навигация
`src/components/Header.tsx`. Пункты меню — массив `sections` вверху файла, переводы — `messages/*.json` → `Nav`.

### Добавить новую локаль (напр. `ua`)
1. `src/i18n/routing.ts` → `locales: ['ru', 'pl', 'en', 'ua']`
2. Скопировать `messages/ru.json` → `messages/ua.json`, перевести
3. Всё: sitemap / LocaleSwitcher / middleware подхватят автоматически

### Добавить новую страницу (напр. `/ru/uslugi/karta-pobytu`)
1. Создать `src/app/[locale]/uslugi/karta-pobytu/page.tsx`
2. В начале страницы:
   ```tsx
   import { setRequestLocale } from 'next-intl/server';
   export default async function Page({ params }: { params: Promise<{locale:string}> }) {
     const { locale } = await params;
     setRequestLocale(locale);
     // ...
   }
   ```
3. Добавить URL в `src/app/sitemap.ts`

---

## 5. Деплой на Vercel

1. `vercel login && vercel link`
2. В настройках проекта → **Environment Variables** добавить все четыре переменных из §3
3. `vercel --prod` (или через GitHub-интеграцию)

Edge-runtime для `/api/chat` уже включён (`export const runtime = 'edge'`). Никаких дополнительных настроек не нужно.

Домен `legalwin.pl` цепляется в Project Settings → Domains.

---

## 6. Что ещё стоит сделать

- [ ] Заменить плейсхолдерную базу знаний в `src/lib/knowledge-base.ts`
- [ ] Залить реальные логотипы клиентов в `public/` и вывести их в `TrustBar`
- [ ] Сделать страницы `/privacy` и `/terms` (сейчас ссылки в футере пустые)
- [ ] Отдельные страницы под услуги (SEO-ориентированные)
- [ ] Добавить OG-картинку `public/og.png` (1200×630)
- [ ] Подключить аналитику (Vercel Analytics / Plausible)
- [ ] Сохранять лиды в БД в дополнение к Telegram (например, Vercel Postgres)

---

## 7. Траблшутинг

| Проблема | Решение |
|---|---|
| `GET / 404` | Next.js 16 не нашёл middleware. Проверь что он в `src/middleware.ts` (не в корне, поскольку есть папка `src/`). Останови dev-сервер, `rm -rf .next`, запусти снова |
| `Could not parse module middleware.ts` | Turbopack закэшировал старый путь после перемещения файла. `rm -rf .next`, перезапусти |
| `localhost:3000` показывает чужой ответ | другой процесс занял порт. `lsof -iTCP:3000 -sTCP:LISTEN` + `kill -9 PID`, либо заходи на 3001 |
| Форма молчит после отправки | проверь `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`; бот добавлен в чат админом? |
| Чат отвечает ошибкой | проверь `OPENAI_API_KEY` + биллинг в OpenAI |
| Не применяются цвета `bg-gold-400` | Tailwind v4 подхватывает токены из `@theme` в `globals.css` — убедись, что файл импортирован в `src/app/[locale]/layout.tsx` |
| `useChat is not a function` | `@ai-sdk/react` должен быть в dependencies, хук импортируется оттуда, не из `ai` |
