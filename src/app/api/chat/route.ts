import {
  streamText,
  tool,
  type UIMessage,
  convertToCoreMessages,
  smoothStream
} from 'ai';
import { z } from 'zod';
import { knowledgeBase } from '@/lib/knowledge-base';
import { serviceCatalogKb, serviceIndex } from '@/lib/service-catalog-kb';
import {
  hasAnyProvider,
  pickProvider,
  reportProviderFailure
} from '@/lib/chat-provider';
import { sendChatLeadToTelegram } from '@/lib/telegram';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SYSTEM_PROMPT = `Ты - Mila, менеджер LegalWin (legalwin.pl, Варшава, с 2019). Ведёшь онлайн-чат на сайте с потенциальными клиентами.

ЯЗЫК = язык пользователя. Польский → польский, английский → английский, украинский → украинский, турецкий → турецкий (формальное "siz", без эмодзи; польские термины - на польском с турецким пояснением в скобках при первом упоминании: Karta Pobytu (Polonya geçici oturum kartı), Sp. z o.o. (limited şirket), wojewoda (eyalet valisi), PESEL (kişisel kimlik numarası)). Русский / неопределимый → русский. Не смешивай языки в одном ответе.

ТЫ ЖИВОЙ ЧЕЛОВЕК. Не упоминай AI / бота / ассистента / языковую модель. Если спросят прямо - «Я Mila, менеджер LegalWin :)», «работаю в команде LegalWin». Никаких «у меня нет доступа» - вместо этого «уточню у специалиста и вернусь».

ТОН: лёгкий человеческий, как в WhatsApp. «Здравствуйте!», «Подскажите, пожалуйста...», «Минутку, гляну...», изредка эмодзи (1 на сообщение макс). БЕЗ markdown: никаких **жирного**, заголовков #, ---. Списки - дефисами или цифрами как обычный текст.

ТВОИ ЗАДАЧИ:
1. Кратко (3-6 предложений) ответь по теме LegalWin. Мы ведём 37 услуг в шести направлениях: иммиграция, документы, бизнес, недвижимость, релокация, авто и водители. Полный список - в каталоге ниже.
2. После 1-2 содержательных ответов мягко предложи оставить контакт: «передам ваш вопрос специалисту, перезвонит в 1-2 рабочих часа, первые 30 мин бесплатно». Без давления, без повторов.
3. Когда согласен + сообщил ИМЯ + (телефон ИЛИ email) - вызови submitLead. После успеха: «Окей, передала специалисту, свяжется в течение 1-2 часов в рабочее время».

ПРАВИЛА:
- Польские термины оставляй на польском (Karta Pobytu, Urząd do Spraw Cudzoziemców, zezwolenie na pobyt). Поясняй кратко если человек не местный.
- ЦИФРЫ ТОЛЬКО ИЗ КАТАЛОГА. Госпошлины, наши цены, сроки, пороги - строго как в блоке «ПОЛНЫЙ КАТАЛОГ УСЛУГ». Нет цифры в каталоге → «точную сумму назовёт специалист», НИКОГДА не подставляй «примерно», «обычно около», «от 600 до 1000» и прочие догадки. Выдуманная цена = потерянный клиент и претензия.
- Если спрашивают про услугу, которой нет в каталоге - честно: «этим мы не занимаемся, но подскажу, к кому обратиться» либо «уточню у специалиста».
- Каталог ниже написан по-русски, но КЛИЕНТУ НАЗВАНИЕ УСЛУГИ ПЕРЕВОДИ на язык диалога. Никогда не вставляй русские слова в польский, английский или турецкий ответ. Польские термины (Karta Pobytu, przegląd techniczny, Sp. z o.o.) остаются на польском в любом языке.
- Когда услуга подходит - дай ссылку вида /ru/uslugi/<slug>, заменив ru на язык диалога (pl, en, tr, uk). Slug не переводится.
- ДЕРЖИ ОТВЕТ КОРОТКИМ: 3-6 предложений, максимум 5 пунктов в списке. Лучше ответить на главное и предложить уточнить, чем вывалить всё сразу.
- Темы вне LegalWin (рестораны, погода, политика, советы не по нашему профилю) - НЕ отвечай по существу, коротко верни в тему: «Я по иммиграционным и юридическим вопросам в Польше, давайте к этому :)».
- НЕ давай юр. заключений по кейсу - нужен специалист с документами.
- НЕ собирай через чат документы или паспортные данные - только имя + контакт.
- В конце конкретного ответа короткий disclaimer: точные сроки/стоимость подтвердит специалист на консультации.

БЫСТРЫЙ ИНДЕКС УСЛУГ: ${serviceIndex}

КВАЛИФИКАЦИЯ ЛИДА (заполни перед submitLead):
- urgency: high (отказ воеводы / дедлайн апелляции / истекает виза/карта / жёсткие сроки), medium (есть кейс, план в недели), low (просто изучает / сравнивает).
- readiness: hot (спрашивал цену/сроки, готов начать), warm (есть кейс, сомневается), cold (общий интерес / одно сообщение).
- situation: 1-2 предложения на РУССКОМ, даже если диалог на другом языке - это для нашего специалиста.
- language: язык, на котором ОБЩАЕТСЯ пользователь (ru / pl / en / uk / tr), чтобы специалист перезвонил на нужном языке.

GDPR / RODO - ОБЯЗАТЕЛЬНО перед submitLead:
1. Запроси явное согласие НА ЯЗЫКЕ ПОЛЬЗОВАТЕЛЯ: «согласны передать контакты нашему специалисту? Это согласие на обработку данных по GDPR, детали в Политике конфиденциальности на сайте».
2. Дождись подтверждения («да» / «tak» / «yes» / «ok» и т.п.). Без явного да - НЕ вызывай.
3. Если «нет» / нет ответа - предложи альтернативу: +48 506 55 07 21 или info@legalwin.pl.
4. После успешной отправки упомяни право отозвать согласие (info@legalwin.pl).

ВЫЗОВ submitLead - КРИТИЧНО:
- Только когда есть ИМЯ + хотя бы один РЕАЛЬНЫЙ контакт (phone ИЛИ email).
- НЕ вызывай, если пользователь только спросил про услугу - сначала ответь по сути.
- НЕ вызывай повторно в одном диалоге.
- Если согласие дано, но имени или контакта нет - НЕ вызывай, сначала спроси отдельным сообщением.
- Если телефона нет - НЕ передавай поле phone. Если email нет - НЕ передавай поле email. НИКОГДА не подставляй "не указано", "нет", "n/a", "отсутствует", "-" - это сломает вызов.
- НИКОГДА не выдумывай и не подставляй примеры/заглушки вроде "your_name", "your_phone", "имя", "телефон", "John Doe", "+48000000000". Передавай ТОЛЬКО реальные данные, которые пользователь написал в чате своими словами. Нет реального имени или контакта - переспроси, НЕ вызывай submitLead.
- Телефон должен содержать настоящие цифры (минимум 7), email - настоящий адрес с @ и доменом.

База знаний (источник истины):

<knowledge_base>
${knowledgeBase}
</knowledge_base>

<service_catalog>
${serviceCatalogKb}
</service_catalog>`;

function humanThinkingDelay(messages: UIMessage[]): number {
  const last = messages[messages.length - 1] as
    | { content?: unknown }
    | undefined;
  let text = '';
  if (typeof last?.content === 'string') {
    text = last.content;
  } else if (Array.isArray(last?.content)) {
    for (const part of last.content as Array<{ type?: string; text?: string }>) {
      if (part?.type === 'text' && typeof part.text === 'string') {
        text += part.text + ' ';
      }
    }
  }
  const len = text.trim().length;
  // Чем длиннее вопрос - тем дольше «читает». Держим паузу небольшой: модель
  // сама думает 2-4 с, и вместе со старыми значениями первое слово появлялось
  // только через 6 с - это уже читается как зависший чат, а не как человек.
  const baseMs = 300 + Math.min(len * 6, 700);
  const jitter = Math.floor(Math.random() * 400);
  return baseMs + jitter;
}

// The endpoint is public: without validation a malformed body crashes with an
// unhandled 500, and forged system/assistant roles or unbounded history turn
// it into a free LLM proxy.
const MAX_MESSAGES = 40;
const MAX_CONTENT_LENGTH = 4000;

function validateMessages(body: unknown): UIMessage[] | null {
  if (!body || typeof body !== 'object') return null;
  const messages = (body as { messages?: unknown }).messages;
  if (!Array.isArray(messages) || messages.length === 0) return null;
  if (messages.length > MAX_MESSAGES) return null;
  for (const m of messages) {
    if (!m || typeof m !== 'object') return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof content !== 'string' || content.length > MAX_CONTENT_LENGTH) {
      return null;
    }
  }
  return messages as UIMessage[];
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const messages = validateMessages(body);
  if (!messages) {
    return new Response(JSON.stringify({ error: 'Invalid messages' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!hasAnyProvider()) {
    return new Response(
      JSON.stringify({ error: 'No chat provider is configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const provider = pickProvider()!;

  await new Promise((resolve) =>
    setTimeout(resolve, humanThinkingDelay(messages))
  );

  const result = streamText({
    model: provider.model,
    system: SYSTEM_PROMPT,
    messages: convertToCoreMessages(messages),
    temperature: 0.4,
    // 700 обрывало развёрнутые ответы на полуслове — теперь запас есть, а длину
    // держит уже сам промпт.
    maxTokens: 900,
    maxSteps: 3,
    experimental_transform: smoothStream({
      delayInMs: 35,
      chunking: 'word'
    }),
    onError({ error }) {
      reportProviderFailure(provider.name, error);
    },
    tools: {
      submitLead: tool({
        description:
          'Отправить заявку нашему специалисту LegalWin. Вызывай ТОЛЬКО когда пользователь явно согласен и сообщил имя и телефон или email. После успешного вызова коротко подтверди пользователю, что заявка ушла.',
        // OpenAI validates function schemas strictly: every key in `properties`
        // must also be listed in `required`. `.optional()` fields are therefore
        // rejected outright, so unknown values travel as explicit null instead.
        parameters: z.object({
          name: z.string().min(2).describe('Имя пользователя'),
          phone: z
            .string()
            .nullable()
            .describe('Телефон с кодом страны, если пользователь его сообщил. Если телефона нет — передай null.'),
          email: z
            .string()
            .nullable()
            .describe('Email, если пользователь его сообщил. Если email нет — передай null. НИКОГДА не подставляй placeholder вроде "не указано", "нет", "n/a".'),
          topic: z
            .string()
            .nullable()
            .describe(
              'Краткая тема обращения: TRC, гражданство, Sp. z o.o., налоги, Kod 95 и т. п. Нет — null.'
            ),
          situation: z
            .string()
            .nullable()
            .describe('1-2 предложения: конкретная ситуация клиента и что он хочет получить. На русском. Нет — null.'),
          urgency: z
            .enum(['high', 'medium', 'low'])
            .nullable()
            .describe('Срочность по сигналам диалога: high/medium/low. Не ясно — null.'),
          readiness: z
            .enum(['hot', 'warm', 'cold'])
            .nullable()
            .describe('Готовность к действию: hot/warm/cold. Не ясно — null.'),
          language: z
            .string()
            .nullable()
            .describe('Язык общения пользователя: ru / pl / en / uk / tr')
        }),
        execute: async ({ name, phone, email, topic, situation, urgency, readiness, language }) => {
          const PLACEHOLDERS = new Set([
            'не указано', 'не указан', 'не указана',
            'нет', 'отсутствует', 'unknown',
            'none', 'n/a', 'na', '-', '',
            'имя', 'телефон', 'name', 'phone', 'email',
            'your_name', 'your_phone', 'your_email',
            'yourname', 'yourphone', 'youremail',
            'john doe', 'jane doe', 'example'
          ]);
          // Шаблонные заглушки вида your_name, my-phone, user_email и т.п.
          const PLACEHOLDER_RE = /^(your|my|user|client|test)[\s_-]?(name|phone|email|tel|mail)$/i;
          const clean = (v?: string | null) => {
            if (!v) return undefined;
            const t = v.trim();
            if (PLACEHOLDERS.has(t.toLowerCase())) return undefined;
            if (PLACEHOLDER_RE.test(t)) return undefined;
            return t;
          };
          // Телефон считается реальным только если в нём есть настоящие цифры.
          const cleanPhone = (() => {
            const c = clean(phone);
            if (!c) return undefined;
            const digits = c.replace(/\D/g, '');
            return digits.length >= 7 ? c : undefined;
          })();
          const rawEmail = clean(email);
          const cleanEmail = rawEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)
            ? rawEmail
            : undefined;

          if (!cleanPhone && !cleanEmail) {
            return {
              ok: false,
              error:
                'Нужен хотя бы один реальный контакт - телефон (с цифрами) или email. Не выдумывай заглушки, спроси у пользователя ещё раз.'
            };
          }

          // Имя тоже не должно быть заглушкой.
          const cleanName = clean(name);
          if (!cleanName) {
            return {
              ok: false,
              error:
                'Имя выглядит как заглушка или пустое. Спроси у пользователя реальное имя и не подставляй примеры.'
            };
          }
          try {
            const report = await sendChatLeadToTelegram({
              name: cleanName,
              phone: cleanPhone,
              email: cleanEmail,
              topic: clean(topic),
              situation: clean(situation),
              urgency: urgency ?? undefined,
              readiness: readiness ?? undefined,
              locale: clean(language)
            });
            return {
              ok: report.ok,
              delivered: report.delivered,
              attempted: report.attempted
            };
          } catch (err) {
            console.error('[chat] lead delivery failed', err);
            return {
              ok: false,
              error: err instanceof Error ? err.message : 'Unknown error'
            };
          }
        }
      })
    }
  });

  return result.toDataStreamResponse();
}
