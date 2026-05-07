import type { ServiceEntry } from './types';

const gotoweFirmy: ServiceEntry = {
  ru: {
    slug: 'gotowe-firmy',
    group: 'business',
    icon: 'landmark',
    badge: 'Shelf company · запуск за 24 часа',
    title: 'Готовые компании (shelf-companies)',
    subtitle: 'Sp. z o.o. с историей и счётом — старт операций за 24 часа',
    lead: 'Готовая компания (shelf company) — Sp. z o.o., которую мы зарегистрировали заранее, прошедшая KYC в банке, с открытым счётом и нулевыми долгами. Покупаете долю — и сразу подписываете контракты, выставляете инвойсы, проходите тендеры. Каждая фирма «чистая»: с нулевой деятельностью, без обязательств, с пройденным VAT. Идеальное решение, когда ждать 7–10 дней нельзя.',
    facts: [
      { label: 'Запуск', value: '24 часа', note: 'от подписания до операций' },
      { label: 'История фирмы', value: '1–24 мес', note: 'дата в KRS' },
      { label: 'VAT статус', value: 'активный', note: 'czynny VAT не нужно ждать' },
      { label: 'Банк счёт', value: 'открыт', note: 'mBank / ING / Santander' }
    ],
    grounds: {
      title: 'Когда нужна готовая Sp. z o.o.',
      subtitle: 'Готовая фирма стоит дороже, но даёт скорость и историю — критично для тендеров, банков и крупных клиентов.',
      items: [
        { title: 'Срочный контракт', desc: 'Клиент готов подписать в среду — а Sp. z o.o. с нуля займёт 7–10 дней. Готовая — пишете НИП в umowe в день обращения.' },
        { title: 'Тендер с цензом', desc: 'Многие zamówienia publiczne требуют opyty — фирмы возрастом 6+ или 12+ месяцев. Готовая фирма с нужной датой регистрации проходит ценз.' },
        { title: 'Открытие счёта в строгом банке', desc: 'Pekao, Citi, BNP Paribas неохотно открывают счета свежим Sp. z o.o. без оборотов. Готовая фирма уже прошла KYC — счёт работает.' },
        { title: 'Кредит или leasing', desc: 'Банки и leasing-компании не дают финансирование фирмам < 12 месяцев. Готовая Sp. z o.o. с историей — другая история.' },
        { title: 'Регистрация в маркетплейсах', desc: 'Allegro, Empik, Amazon Marketplace требуют активный VAT и историю. Готовая фирма проходит регистрацию за день.' },
        { title: 'Нет PESEL у учредителя', desc: 'Регистрация Sp. z o.o. с нуля требует PESEL у członka zarządu (для KRS-online). Готовая фирма уже зарегистрирована — можно сменить członka zarządu позже.' }
      ]
    },
    timeline: {
      title: 'Как покупаете готовую фирму',
      subtitle: 'От первого звонка до первого фактура — обычно 1–2 рабочих дня.',
      steps: [
        { title: 'Каталог', duration: '5 минут', desc: 'Показываем доступные фирмы: дата регистрации, PKD, статус VAT, банк, адрес. Подбираем под вашу нишу.' },
        { title: 'Резервирование', duration: 'на 24 часа', desc: 'Бронируем фирму — никому не предложим. KYC по покупателю: passport, источник средств, благополучатель.' },
        { title: 'Договор покупки udziałów', duration: '1 день', desc: 'Umowa zbycia udziałów у нотариуса в Варшаве. Если вы в другом городе — pełnomocnictwo через консула.' },
        { title: 'Смена członka zarządu', duration: '1 день', desc: 'Назначаем нового члена правления, прежний выходит. Wniosek в KRS.' },
        { title: 'Передача счёта', duration: '1–2 дня', desc: 'Отзыв полномочий у прежних подписантов в банке, добавление новых. Можно сохранить старый счёт или открыть свежий.' },
        { title: 'CRBR обновление', duration: '7 дней', desc: 'Регистрация нового бенефициара в Centralnym Rejestrze. Делаем за вас.' },
        { title: 'KRS обновление', duration: '7–14 дней', desc: 'KRS отражает изменения. Но НИП, VAT, банк работают сразу — выписки KRS актуализируются автоматически.' }
      ]
    },
    documents: {
      title: 'Что нужно от покупателя',
      subtitle: 'Минимум документов — KYC и подписи.',
      items: [
        'Паспорт нового wspólnika и członka zarządu',
        'PESEL члена правления (или оформляем за 7–14 дней)',
        'Адрес регистрации членов правления (для CRBR)',
        'Подтверждение источника средств для KYC (для банка)',
        'Pełnomocnictwo notarialne — если не приедете (apostille в стране проживания)',
        'Согласие на смену członka zarządu (от прежнего члена — оформляем мы)',
        'NIP и REGON — уже есть у фирмы'
      ]
    },
    pricing: {
      title: 'Стоимость готовых фирм',
      subtitle: 'Цена зависит от возраста, статуса VAT, банка, истории. Госпошлины KRS, нотариус — отдельно.',
      items: [
        { label: 'Фирма 1–3 мес', value: 'от 6 500 PLN', note: 'Базовая: KRS + NIP + банк' },
        { label: 'Фирма 6–12 мес', value: 'от 9 800 PLN', note: 'Активный VAT, история' },
        { label: 'Фирма 12+ мес', value: 'от 14 500 PLN', note: 'Для тендеров и кредитов' },
        { label: 'Премиум — банк A/A+', value: 'от 18 000 PLN', note: 'Pekao, Citi, BNP — счёт' }
      ],
      note: 'Цена включает наш гонорар и капитал фирмы (5 000 PLN). Госпошлины KRS 250 PLN, нотариус 1 200–2 500 PLN, CRBR — у нас в стоимости. Срочное оформление за 24 часа — +30%.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 15 września 2000 r. — Kodeks spółek handlowych (zbycie udziałów art. 180 KSH)',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy (KYC, CRBR)',
        'Ustawa z dnia 20 sierpnia 1997 r. o KRS (zmiana wpisów)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (przejście podmiotowości VAT)'
      ]
    },
    faq: [
      { q: 'Безопасно ли покупать готовую Sp. z o.o.?', a: 'Если фирма от надёжного провайдера — да. Все наши фирмы: ноль операций (только регистрация), ноль обязательств, чистая бухгалтерия, актуальная sprawozdanie finansowe (финансовый отчёт). Перед продажей проводим due diligence: KRS (Государственный судебный реестр), ZUS, US (налоговая), KRD, sprawozdania (отчёты) за все периоды. Документы передаём вместе с фирмой.' },
      { q: 'Что с прошлыми обязательствами?', a: 'Готовая фирма не имела никакой деятельности — нет договоров, контрагентов, кредитов, ZUS-долгов. Дополнительно даём гарантию: если всплывёт что-то «прошлое» — компенсируем убытки. В договоре прописано.' },
      { q: 'Можно ли поменять название и PKD?', a: 'Да. Через uchwałę wspólników (решение участников) меняем nazwę (название), PKD, siedzibę (юридический адрес), kapitał (капитал). Требует похода к нотариусу или подачи через KRS (судебный реестр). Делаем за 7–14 дней. Стоимость 700–1 500 PLN.' },
      { q: 'Сохраняется ли VAT-номер при смене собственника?', a: 'Да. NIP и VAT остаются у фирмы (это атрибуты юридического лица, не учредителя). Главное — после смены członka zarządu (члена правления) обновить данные в Urzędzie Skarbowym (налоговой) через VAT-Z.' },
      { q: 'Что с банковским счётом?', a: 'Зависит от банка. mBank, ING, Santander обычно сохраняют счёт после смены подписантов (новый KYC). Pekao, Citi могут потребовать новую регистрацию счёта. Проверяем перед продажей и предупреждаем.' },
      { q: 'Сколько лет фирма должна быть «активной»?', a: 'Зависит от цели. Для маркетплейсов — достаточно 1+ месяца. Для тендеров — обычно 12+. Для крупных кредитов — 24+. На сайте указано, под какие цели подходит каждая фирма.' },
      { q: 'А можно купить с пройденным оборотом и налоговыми отчётами?', a: 'Только наши фирмы — с нулевой деятельностью, потому что покупка фирмы с реальной историей — высокий риск (скрытые обязательства, налоговые споры). Если нужна реальная история, рекомендуем зарегистрировать Sp. z o.o. под себя и работать активно — это безопаснее долгосрочно.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Готовая Sp. z o.o. за 24 часа',
    ctaSubtitle: 'Каталог из 30+ фирм с разной историей и банками. Бесплатно подбираем под ваш бизнес и цели.'
  },
  pl: {
    slug: 'gotowe-firmy',
    group: 'business',
    icon: 'landmark',
    badge: 'Spółka shelf · start w 24 godziny',
    title: 'Gotowe spółki (shelf-companies)',
    subtitle: 'Sp. z o.o. z historią i kontem — start operacji w 24 h',
    lead: 'Gotowa spółka (shelf company) — Sp. z o.o. zarejestrowana wcześniej, z przeszłym KYC bankowym, otwartym kontem i zerowymi zobowiązaniami. Kupujesz udziały i tego samego dnia podpisujesz kontrakty, wystawiasz faktury, idziesz na przetargi. Każda firma czysta: zerowa działalność, brak obciążeń, aktywny VAT.',
    facts: [
      { label: 'Start', value: '24 h', note: 'od umowy do operacji' },
      { label: 'Wiek firmy', value: '1–24 mies.', note: 'data w KRS' },
      { label: 'VAT', value: 'aktywny', note: 'czynny VAT od ręki' },
      { label: 'Konto', value: 'otwarte', note: 'mBank / ING / Santander' }
    ],
    grounds: {
      title: 'Kiedy gotowa Sp. z o.o.',
      subtitle: 'Drożej, ale daje szybkość i historię — kluczowe dla przetargów, banków i klientów korporacyjnych.',
      items: [
        { title: 'Pilny kontrakt', desc: 'Klient gotowy podpisać w środę — Sp. z o.o. od zera 7–10 dni. Gotowa — NIP w umowie tego samego dnia.' },
        { title: 'Przetarg z cenzusem', desc: 'Zamówienia publiczne z wymogiem doświadczenia 6+ lub 12+ miesięcy.' },
        { title: 'Konto w wymagającym banku', desc: 'Pekao, Citi, BNP niechętnie świeżym Sp. z o.o. bez obrotów. Gotowa już po KYC.' },
        { title: 'Kredyt lub leasing', desc: 'Banki nie finansują firm < 12 miesięcy.' },
        { title: 'Marketplace', desc: 'Allegro, Empik, Amazon — wymagają aktywnego VAT i historii.' },
        { title: 'Brak PESEL u założyciela', desc: 'Rejestracja od zera wymaga PESEL u zarządu. Gotowa już zarejestrowana — zarząd zmieniamy później.' }
      ]
    },
    timeline: {
      title: 'Jak kupujesz gotową firmę',
      subtitle: 'Od kontaktu do pierwszej faktury — 1–2 dni robocze.',
      steps: [
        { title: 'Katalog', duration: '5 min', desc: 'Wybór: data, PKD, VAT, bank, adres.' },
        { title: 'Rezerwacja', duration: '24 h', desc: 'KYC kupującego: paszport, źródło środków, beneficjent.' },
        { title: 'Umowa zbycia udziałów', duration: '1 dzień', desc: 'U notariusza w Warszawie. Z miasta — pełnomocnictwo z apostille.' },
        { title: 'Zmiana zarządu', duration: '1 dzień', desc: 'Powołanie nowego, odwołanie poprzedniego. Wniosek do KRS.' },
        { title: 'Przekazanie konta', duration: '1–2 dni', desc: 'Odwołanie poprzednich pełnomocników, dodanie nowych w banku.' },
        { title: 'CRBR', duration: '7 dni', desc: 'Wpis nowego beneficjenta. Robimy my.' },
        { title: 'Aktualizacja KRS', duration: '7–14 dni', desc: 'KRS odzwierciedla zmiany. NIP, VAT, konto działają od razu.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Minimum — KYC i podpisy.',
      items: [
        'Paszport nowego wspólnika i zarządu',
        'PESEL zarządu (załatwiamy w 7–14 dni)',
        'Adresy zarządu (CRBR)',
        'Źródło środków (KYC bankowy)',
        'Pełnomocnictwo notarialne (jeśli nie przyjedziesz)',
        'NIP, REGON — już są',
        'Zgoda na zmianę zarządu — przygotowujemy'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Cena zależy od wieku, VAT, banku, historii.',
      items: [
        { label: 'Firma 1–3 mies.', value: 'od 6 500 PLN', note: 'KRS + NIP + bank' },
        { label: 'Firma 6–12 mies.', value: 'od 9 800 PLN', note: 'Aktywny VAT' },
        { label: 'Firma 12+ mies.', value: 'od 14 500 PLN', note: 'Przetargi, kredyty' },
        { label: 'Premium — bank A/A+', value: 'od 18 000 PLN', note: 'Pekao, Citi, BNP' }
      ],
      note: 'Zawiera nasz honorarium i kapitał (5 000 PLN). Opłaty KRS 250 PLN, notariusz 1 200–2 500 PLN.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Kodeks spółek handlowych (art. 180 KSH — zbycie udziałów)',
        'Ustawa z 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy (CRBR)',
        'Ustawa z 20 sierpnia 1997 r. o KRS',
        'Ustawa z 11 marca 2004 r. o VAT'
      ]
    },
    faq: [
      { q: 'Czy bezpiecznie?', a: 'Z rzetelnego źródła — tak. Nasze firmy: zero operacji, zero zobowiązań, czysta księgowość. Przed sprzedażą due diligence (KRS, ZUS, US, KRD). Gwarancja w umowie.' },
      { q: 'Co z poprzednimi zobowiązaniami?', a: 'Brak działalności = brak zobowiązań. Gwarantujemy, w razie czego — pełna rekompensata.' },
      { q: 'Czy można zmienić nazwę i PKD?', a: 'Tak. Uchwałą wspólników. 7–14 dni, 700–1 500 PLN.' },
      { q: 'NIP się zachowuje?', a: 'Tak. NIP i VAT pozostają z firmą. Po zmianie zarządu aktualizujemy w US.' },
      { q: 'Konto bankowe?', a: 'mBank, ING, Santander zwykle utrzymują po zmianie. Pekao, Citi — mogą wymagać nowej rejestracji. Sprawdzamy.' },
      { q: 'Ile lat aktywności?', a: 'Marketplace — 1+. Przetargi — 12+. Kredyty — 24+.' },
      { q: 'Z obrotami?', a: 'Tylko bez działalności (nie kupujemy historii „obrotowej" — ryzyko ukrytych zobowiązań).' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Gotowa Sp. z o.o. w 24 h',
    ctaSubtitle: 'Katalog 30+ firm. Bezpłatnie dobieramy pod biznes.'
  },
  en: {
    slug: 'gotowe-firmy',
    group: 'business',
    icon: 'landmark',
    badge: 'Shelf company · live in 24 hours',
    title: 'Ready-made companies',
    subtitle: 'Sp. z o.o. with history and bank account — operational in 24 hours',
    lead: 'A shelf company is a Sp. z o.o. we registered in advance, with bank KYC complete, an open account, and zero liabilities. You buy the shares and that day sign contracts, issue invoices, enter tenders. Every company is clean: no activity, no obligations, active VAT.',
    facts: [
      { label: 'Go-live', value: '24 hours', note: 'from signing to operations' },
      { label: 'Company age', value: '1–24 months', note: 'KRS registration date' },
      { label: 'VAT status', value: 'active', note: 'no waiting for czynny VAT' },
      { label: 'Bank account', value: 'open', note: 'mBank / ING / Santander' }
    ],
    grounds: {
      title: 'When you need a shelf company',
      subtitle: 'More expensive than fresh registration but buys speed and seniority — critical for tenders, banks, enterprise clients.',
      items: [
        { title: 'Urgent contract', desc: 'Client signs Wednesday — fresh Sp. z o.o. takes 7–10 days. Shelf company — NIP in the contract that day.' },
        { title: 'Tender with seniority requirement', desc: 'Public procurement often requires 6+ or 12+ months of trading history.' },
        { title: 'Demanding bank account', desc: 'Pekao, Citi, BNP rarely open accounts for fresh Sp. z o.o. with no revenue. Shelf company already passed KYC.' },
        { title: 'Loan or leasing', desc: "Lenders don't finance companies under 12 months old." },
        { title: 'Marketplace registration', desc: 'Allegro, Empik, Amazon Marketplace require active VAT and trading history.' },
        { title: 'No PESEL for founder', desc: 'Fresh Sp. z o.o. needs board-member PESEL for online KRS filings. Shelf company already registered — change board later.' }
      ]
    },
    timeline: {
      title: 'How the purchase runs',
      subtitle: 'From first call to first invoice — 1–2 business days.',
      steps: [
        { title: 'Catalog', duration: '5 minutes', desc: 'Pick by registration date, PKD, VAT, bank, address.' },
        { title: 'Reservation', duration: '24 hours', desc: 'KYC on buyer: passport, source of funds, beneficial owner.' },
        { title: 'Share transfer agreement', duration: '1 day', desc: 'Notarial. Or by power of attorney via Polish consul.' },
        { title: 'Board change', duration: '1 day', desc: 'New board appointed, old board removed. KRS filing.' },
        { title: 'Bank handover', duration: '1–2 days', desc: 'Old signatories revoked, new added.' },
        { title: 'CRBR update', duration: '7 days', desc: 'New beneficial owner registered.' },
        { title: 'KRS update', duration: '7–14 days', desc: 'KRS reflects changes. NIP, VAT, account work immediately.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimal — KYC and signatures.',
      items: [
        "New shareholder's and board member's passport",
        'PESEL for board member (we obtain in 7–14 days if missing)',
        "Board addresses (CRBR)",
        "Source of funds (bank KYC)",
        'Notarial PoA if not present in person',
        'Consent to board change — we prepare',
        'NIP, REGON — already on the company'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Price depends on age, VAT status, bank, history.',
      items: [
        { label: '1–3 months old', value: 'from 6,500 PLN', note: 'Basic: KRS + NIP + bank' },
        { label: '6–12 months', value: 'from 9,800 PLN', note: 'Active VAT, history' },
        { label: '12+ months', value: 'from 14,500 PLN', note: 'Tenders, loans' },
        { label: 'Premium — A/A+ bank', value: 'from 18,000 PLN', note: 'Pekao, Citi, BNP — account' }
      ],
      note: 'Includes our fee and 5,000 PLN capital. KRS 250 PLN, notary 1,200–2,500 PLN. 24-hour rush — +30%.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Commercial Companies Code — art. 180 (share transfer)',
        'AML Act of 1 March 2018 (KYC, CRBR)',
        'KRS Act of 20 August 1997',
        'VAT Act of 11 March 2004'
      ]
    },
    faq: [
      { q: 'Is it safe?', a: 'From a reputable provider — yes. Our companies: zero activity, zero obligations, clean accounting. We do due diligence pre-sale (KRS (court register), ZUS, tax, KRD). Contractual guarantee.' },
      { q: "What about prior obligations?", a: "No activity = no obligations. We guarantee compensation for hidden liabilities — written in the contract." },
      { q: 'Change name and PKD?', a: 'Yes. Shareholders\' resolution (uchwała wspólników). 7–14 days, 700–1,500 PLN.' },
      { q: 'Does the VAT number persist?', a: 'Yes. NIP and VAT belong to the company, not the owner. We update the tax office after the członek zarządu (board member) change.' },
      { q: 'What about the bank account?', a: 'mBank, ING, Santander usually keep the account after signatory change. Pekao, Citi may require new onboarding. We check beforehand.' },
      { q: 'How old should the company be?', a: 'Marketplace — 1+ month. Tenders — 12+. Big loans — 24+.' },
      { q: 'With trading history?', a: 'No — we only sell zero-activity shells. Real-history companies carry hidden liability risk.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Shelf Sp. z o.o. in 24 hours',
    ctaSubtitle: 'Catalog of 30+ companies. Free matching to your business.'
  }
};

export default gotoweFirmy;
