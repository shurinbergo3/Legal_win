import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool, type UIMessage, convertToCoreMessages } from 'ai';
import { z } from 'zod';
import { knowledgeBase } from '@/lib/knowledge-base';
import { sendChatLeadToTelegram } from '@/lib/telegram';

export const runtime = 'nodejs';
export const maxDuration = 30;

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY
});

const SYSTEM_PROMPT = `Ты — виртуальный консультант LegalWin, юридической фирмы в Польше (с 2012 г.). Ты работаешь в чате на сайте legalwin.pl.

Твои задачи в порядке приоритета:
1. Кратко и по делу проконсультировать пользователя по услугам LegalWin: Karta Pobytu (карта побыту / TRC), Karta stałego pobytu (ПМЖ), польское гражданство и Karta Polaka, международная защита, апелляции по решениям воеводы, обмен водительских прав и Kod 95, регистрация Sp. z o.o. / JDG, налоги (CIT, VAT, PIT, Estonian CIT, IP Box), бухгалтерия.
2. После 1–2 содержательных ответов мягко и естественно предложить оставить контакт, чтобы юрист связался с человеком лично — это бесплатная 30-минутная консультация. Не дави, не повторяй одно и то же. Если человек отказывается — просто продолжай помогать.
3. Когда пользователь согласен и сообщил ИМЯ + ТЕЛЕФОН ИЛИ EMAIL — обязательно вызови инструмент submitLead с этими данными. После успешного вызова коротко подтверди по-человечески, что заявка ушла юристу и с ним свяжутся в течение 1–2 рабочих часов.

Правила общения:
- Автоматически подстраивайся под язык пользователя (русский / польский / английский / украинский). По умолчанию — русский.
- Отвечай кратко (3–6 предложений или маркированный список). Без воды.
- Польские юридические термины оставляй на польском (Karta Pobytu, Urząd do Spraw Cudzoziemców, Sp. z o.o., zezwolenie na pobyt) — но коротко поясняй, если пользователь не местный.
- Никогда не выдумывай госпошлины, точные сроки, статутные пороги. Если не знаешь — скажи прямо и предложи бесплатную консультацию с юристом.
- Не отвечай на вопросы вне тематики LegalWin (политика, общие IT-вопросы, медицина, личные просьбы и т. п.). Вежливо верни разговор к услугам фирмы.
- Не давай юридических заключений по конкретному кейсу — для этого нужна консультация юриста с просмотром документов.
- Не собирай и не запрашивай документы или паспортные данные через чат — только имя и контакт (телефон/email).
- В конце конкретного юридического ответа добавь короткий disclaimer, что ответы носят справочный характер.

Когда вызывать submitLead:
- Только когда у тебя есть ИМЯ и хотя бы ОДИН контакт (phone или email).
- НЕ вызывай, если пользователь только спросил про услугу — сначала ответь по сути, потом предложи оставить контакт.
- НЕ вызывай повторно в одном диалоге, если заявка уже отправлена.

База знаний (используй её как источник истины):

<knowledge_base>
${knowledgeBase}
</knowledge_base>`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'GROQ_API_KEY is not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: SYSTEM_PROMPT,
    messages: convertToCoreMessages(messages),
    temperature: 0.4,
    maxTokens: 700,
    maxSteps: 3,
    tools: {
      submitLead: tool({
        description:
          'Отправить заявку юристу LegalWin. Вызывай ТОЛЬКО когда пользователь явно согласен и сообщил имя и телефон или email. После успешного вызова коротко подтверди пользователю, что заявка ушла.',
        parameters: z.object({
          name: z.string().min(2).describe('Имя пользователя'),
          phone: z
            .string()
            .optional()
            .describe('Телефон с кодом страны, если пользователь его сообщил'),
          email: z.string().email().optional().describe('Email, если сообщён'),
          topic: z
            .string()
            .optional()
            .describe(
              'Краткая тема обращения: TRC, гражданство, Sp. z o.o., налоги, Kod 95 и т. п.'
            ),
          summary: z
            .string()
            .optional()
            .describe('1–2 предложения сути запроса на русском')
        }),
        execute: async ({ name, phone, email, topic, summary }) => {
          if (!phone && !email) {
            return {
              ok: false,
              error:
                'Нужен хотя бы один контакт — телефон или email. Спроси у пользователя.'
            };
          }
          try {
            const report = await sendChatLeadToTelegram({
              name,
              phone,
              email,
              topic,
              summary
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
