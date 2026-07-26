/**
 * Which language the bot must answer in.
 *
 * The system prompt, the knowledge base and every tool result are written in
 * Russian, and a cheap model reads that as «говорим по-русски» no matter how the
 * instruction is phrased — a Polish question would come back answered in
 * Russian. So the language is decided here, in code, and handed to the model as
 * a single explicit line instead of being left to its judgement.
 */

export type ChatLanguage = 'ru' | 'uk' | 'pl' | 'en' | 'tr';

export const LANGUAGE_LABEL: Record<ChatLanguage, string> = {
  ru: 'РУССКИЙ',
  uk: 'УКРАЇНСЬКА (украинский)',
  pl: 'POLSKI (польский)',
  en: 'ENGLISH (английский)',
  tr: 'TÜRKÇE (турецкий)'
};

// Short function words are the only reliable signal for text without diacritics
// («Ile kosztuje rejestracja sp. z o.o.» has none).
const PL_WORDS = new Set([
  'ile', 'kosztuje', 'koszt', 'jak', 'jakie', 'czy', 'gdzie', 'kiedy', 'dlaczego',
  'jest', 'sa', 'mam', 'mamy', 'chce', 'chcialbym', 'potrzebuje', 'moze', 'mozna',
  'dzien', 'dobry', 'dziekuje', 'prosze', 'witam', 'dla', 'nie', 'tak', 'wiec',
  'pobyt', 'pobytu', 'praca', 'pracy', 'firma', 'firme', 'firmy', 'dokumenty',
  'wniosek', 'trwa', 'zalatwic', 'zrobic', 'pomoc', 'pomocy', 'cena', 'ceny'
]);

const TR_WORDS = new Set([
  'icin', 'ne', 'nasil', 'kadar', 'var', 'yok', 'bir', 'ile', 'mi', 'mu', 'musunuz',
  'merhaba', 'gunaydin', 'tesekkur', 'tesekkurler', 'lutfen', 'istiyorum', 'gerekli',
  'oturum', 'karti', 'basvuru', 'belge', 'belgeler', 'ucret', 'fiyat', 'sirket',
  'calisma', 'izni', 'sure', 'nerede', 'kim', 'hangi', 'olur', 'olabilir'
]);

const EN_WORDS = new Set([
  'the', 'and', 'how', 'what', 'much', 'does', 'do', 'is', 'are', 'can', 'could',
  'need', 'want', 'please', 'hello', 'hi', 'thanks', 'cost', 'price', 'residence',
  'permit', 'company', 'documents', 'apply', 'application', 'work', 'visa', 'my',
  'for', 'with', 'about', 'you', 'your', 'we', 'have', 'help', 'long', 'take'
]);

// Украинский без диакритик встречается редко, но «шо/як/чи» - обычное дело.
const UK_WORDS = new Set([
  'як', 'чи', 'де', 'коли', 'скільки', 'скилько', 'потрібно', 'треба', 'можна',
  'вартість', 'ціна', 'документи', 'робота', 'фірма', 'дякую', 'будь', 'ласка',
  'привіт', 'доброго', 'хочу', 'маю', 'що', 'цей', 'для', 'мене', 'мені'
]);

const strip = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[łŁ]/g, 'l')
    .replace(/[ıİ]/g, 'i');

function score(text: string): Record<ChatLanguage, number> {
  const result: Record<ChatLanguage, number> = { ru: 0, uk: 0, pl: 0, en: 0, tr: 0 };
  const raw = text.toLowerCase();

  // Диакритики - самый сильный сигнал, весом в несколько слов.
  if (/[іїєґ]/.test(raw)) result.uk += 4;
  if (/[ąćęłńóśźż]/.test(raw)) result.pl += 4;
  if (/[ğışİĞŞ]/.test(raw)) result.tr += 4;
  // ö/ü/ç есть и в турецком, и в польском ó - слабее.
  if (/[öüç]/.test(raw)) result.tr += 1;

  const cyrillic = (raw.match(/[а-яёіїєґ]/g) ?? []).length;
  const latin = (raw.match(/[a-zà-ÿ]/g) ?? []).length;

  for (const word of strip(raw).split(/[^a-zа-яё]+/)) {
    if (!word) continue;
    if (PL_WORDS.has(word)) result.pl += 1;
    if (TR_WORDS.has(word)) result.tr += 1;
    if (EN_WORDS.has(word)) result.en += 1;
  }
  for (const word of raw.split(/[^а-яёіїєґ']+/)) {
    if (word && UK_WORDS.has(word)) result.uk += 1;
  }

  if (cyrillic > latin) {
    // Кириллица: спор идёт только между русским и украинским.
    result.pl = 0;
    result.tr = 0;
    result.en = 0;
    result.ru += 1;
  } else if (latin > 0) {
    result.ru = 0;
    result.uk = 0;
    // Латиница без других зацепок читается как английский.
    result.en += 0.5;
  }

  return result;
}

/**
 * @param texts user messages, oldest first
 * @param fallback locale of the page the widget is open on
 */
export function detectLanguage(texts: string[], fallback: ChatLanguage = 'ru'): ChatLanguage {
  // Последние сообщения важнее: человек мог начать по-русски и перейти на польский.
  const recent = texts.slice(-3);
  const totals: Record<ChatLanguage, number> = { ru: 0, uk: 0, pl: 0, en: 0, tr: 0 };

  recent.forEach((text, i) => {
    const weight = i === recent.length - 1 ? 2 : 1;
    const s = score(text);
    for (const key of Object.keys(totals) as ChatLanguage[]) {
      totals[key] += s[key] * weight;
    }
  });

  const best = (Object.keys(totals) as ChatLanguage[]).reduce((a, b) =>
    totals[b] > totals[a] ? b : a
  );
  // «ok», смайлик, номер телефона - сигнала нет, доверяем языку страницы.
  // Порог именно 1: голая латиница без единого знакомого слова его не берёт.
  return totals[best] > 1 ? best : fallback;
}

export function toChatLanguage(value: unknown): ChatLanguage | null {
  return typeof value === 'string' && value in LANGUAGE_LABEL
    ? (value as ChatLanguage)
    : null;
}
