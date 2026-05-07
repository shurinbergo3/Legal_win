import type { ServiceEntry } from './types';

const tlumaczNaWizyty: ServiceEntry = {
  ru: {
    slug: 'tlumacz-na-wizyty',
    group: 'relocation',
    icon: 'scale',
    badge: 'Urząd · Bank · NFZ · Sąd · USC',
    title: 'Переводчик для визитов',
    subtitle: 'Сопровождение в urząd, банк, школу, больницу',
    lead: 'Польский urzędnik не обязан говорить с вами на английском, а в банке POZ или USC — почти никто не говорит. LegalWin предоставляет специалиста-переводчика, который не просто переводит, а понимает суть процедуры: знает, какие вопросы задаст ZUS-инспектор, какие документы потребует kierownik USC, как отвечать в сложной ситуации. Это сопровождение, а не buzzword «переводчик».',
    facts: [
      { label: 'Стоимость', value: 'от 250 PLN/час', note: 'минимум 2 часа · ru/uk/be/en' },
      { label: 'Срок бронирования', value: '24 часа', note: 'standard · срочно от 4 ч' },
      { label: 'Города', value: 'WAW · WRO · KRK · GDN · POZ', note: 'выезд в регион +50%' },
      { label: 'Языки', value: 'PL ↔ RU/UK/BE/EN', note: 'другие — присяжный переводчик' }
    ],
    grounds: {
      title: 'Где сопровождаем',
      subtitle: 'Специалист со знанием процедуры — не уличный переводчик. Это критическая разница в сложных делах.',
      items: [
        { title: 'Urząd Wojewódzki', desc: 'Подача TRC, ПМЖ, Karty Polaka, признания за гражданина. Сложная процедура — нужен специалист, не просто переводчик.' },
        { title: 'ZUS / Urząd Skarbowy', desc: 'Регистрация работодателя, A1, niezaleganie, NIP-7, регистрация VAT — со знанием налогового права.' },
        { title: 'USC — заключение брака', desc: 'Подача wniosku o ślub, подписание aktu małżeństwa в день свадьбы. Также — umiejscowienie aktu zagranicznego.' },
        { title: 'NFZ / лекарь / больница', desc: 'POZ-визит, специалист, диагностика, госпитализация, страховой медцентр Medicover / Lux Med.' },
        { title: 'Школа / детсад', desc: 'Запись ребёнка, klasa powitalna, рассмотрение orzeczeń specjalistycznych, разговор с pedagogiem szkolnym.' },
        { title: 'Bank — открытие счёта', desc: 'KYC-анкеты в Pekao, mBank, Santander, ING. Особенно для нерезидентов с karta pobytu.' },
        { title: 'Notariusz — сделки и pełnomocnictwa', desc: 'Akt notarialny по покупке жилья, доверенностям, брачным договорам — где невозможна ошибка перевода.' },
        { title: 'Sąd / police / prokuratura', desc: 'Допросы, объяснения, гражданские иски, развод. Здесь работаем с присяжным переводчиком, обязательно.' }
      ]
    },
    timeline: {
      title: 'Как проходит сопровождение',
      subtitle: 'От заявки до выхода из urzędu с готовым результатом.',
      steps: [
        { title: 'Бронирование', duration: '5 мин', desc: 'Уточняете дату, время, urząd, цель визита. Получаете подтверждение и контакт специалиста.' },
        { title: 'Подготовка', duration: '30–60 мин', desc: 'Специалист изучает вашу ситуацию: тип документа, основания, прошлые действия. Готовит список вопросов и документов.' },
        { title: 'Встреча перед визитом', duration: '15 мин', desc: 'Перед urzędem (в кафе или у входа) — finalna координация: что говорить, что показывать, какие вопросы могут задать.' },
        { title: 'Сопровождение в urzędzie', duration: '1–3 часа', desc: 'Специалист идёт с вами к окошку, переводит вопросы urzędnika, помогает заполнить формуляры, отвечает на uzupełnienia.' },
        { title: 'Документация результата', duration: '15 мин', desc: 'Получаете signed protocols / pisma / zaświadczenia. Специалист объясняет, что в них написано и какие следующие шаги.' },
        { title: 'Follow-up по почте', duration: 'auto', desc: 'Если urząd шлёт pisma после визита — переводим и объясняем, готовим ответы. Это уже включено в гонорар первого визита (до 30 дней).' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум для подготовки. Подбор индивидуально.',
      items: [
        'Паспорт и копия (PESEL если есть)',
        'Karta pobytu или другой документ пребывания',
        'Цель визита (TRC, ZUS, USC, бракосочетание, медицина)',
        'Все pisma / формуляры от urzędu по этому делу',
        'Контакты urzędnika (если у вас уже есть)',
        'Доверенность на LegalWin (для подписей в urzędzie)',
        'Список вопросов, которые хотите задать',
        'Дата, время, адрес urzędu (улицу + okienko если знаете)'
      ]
    },
    pricing: {
      title: 'Стоимость',
      subtitle: 'Гонорар почасовой. Минимум — 2 часа.',
      items: [
        { label: 'Консультация по визиту', value: 'Бесплатно', note: '15 минут · brief' },
        { label: 'Сопровождение в urząd', value: 'от 250 PLN/час', note: 'Минимум 2 часа · специалист-переводчик' },
        { label: 'Срочно (24 ч)', value: '+30%', note: 'Если бронь менее чем за 24 часа' },
        { label: 'Sąd / прокуратура', value: 'от 350 PLN/час', note: 'Присяжный переводчик при необходимости' }
      ],
      note: 'Указаны гонорары LegalWin. Транспортные расходы внутри города включены. Выезд в регион (за пределы границ города) +50%. Присяжный устный переводчик (для суда) — отдельно по тарифам MS.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Kodeks postępowania administracyjnego (art. 5 — język polski)',
        'Ustawa z dnia 25 listopada 2004 r. o zawodzie tłumacza przysięgłego',
        'Ustawa z dnia 6 lipca 1982 r. o radcach prawnych (asysta prawna)',
        'Ustawa z dnia 26 maja 1982 r. — Prawo o adwokaturze',
        'Konstytucja RP (art. 27 — język urzędowy: polski)'
      ]
    },
    faq: [
      { q: 'Чем переводчик-специалист отличается от обычного устного переводчика?', a: 'Обычный переводчик переводит слова. Специалист-переводчик понимает процедуру: знает, какой ответ ожидает urzędnik, как минимизировать риск отказа, какие документы добавить. На сложных делах (TRC, naturalizacja, sąd) разница между «получили» и «получили отказ» — это специалист, а не переводчик.' },
      { q: 'Принимает ли urząd любого переводчика?', a: 'В административной процедуре — да, любого, кого выбрал клиент. Но в sądzie, prokuraturze, policji — обязательно присяжный переводчик из реестра MS. Мы вызываем его, если процедура требует.' },
      { q: 'Можно ли отправить специалиста без меня?', a: 'Только если есть pełnomocnictwo. Подписать договор аренды, доверенность, забрать карту pobytu, открыть счёт — да, делаем по pełnomocnictwu. Личное присутствие требуется на свадьбе, биометрии TRC, экзамене на гражданство.' },
      { q: 'Сколько часов реально нужно?', a: 'Простой ZUS-визит — 1–2 часа. Подача TRC с биометрией — 2–3 часа. Свадьба в USC — 1 час сама церемония + 30 мин подача. Покупка квартиры у нотариуса — 2–4 часа. Sąd — от 4 часов. На всякий случай резервируем +1 час.' },
      { q: 'Что если визит отменили в день?', a: 'Если отмена — наша вина (специалист заболел, опаздывает) — возврат 100%. Если отмена с вашей стороны менее чем за 24 часа — оплата 50% брони. Если отмена urzędu (закрыт, нет связи) — переносим без доплаты.' },
      { q: 'Как выбираете специалиста под мой случай?', a: 'У нас специалисты с разной специализацией. Иммиграционный — для TRC/ПМЖ. Корпоративный — для KRS/USC/Notar. Семейный — для брака/развода/детей. По sądu и prokuraturze работаем с присяжными переводчиками. Подбираем после brief в течение часа.' },
      { q: 'Можно ли получить услугу удалённо?', a: 'Частично. Видеозвонки в банк, удалённые подачи через ePUAP, переписка с urzędem — да, делаем. Подача биометрии TRC, свадьба, sąd — только лично. Гонорар за удалённую работу — 50% от обычного.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Специалист на urząd за 24 часа',
    ctaSubtitle: 'Бесплатная консультация: подбор специалиста под визит, подготовка вопросов, brief по процедуре. Минимальная бронь — 2 часа.'
  },
  pl: {
    slug: 'tlumacz-na-wizyty',
    group: 'relocation',
    icon: 'scale',
    badge: 'Urząd · Bank · NFZ · Sąd · USC',
    title: 'Tłumacz na wizyty',
    subtitle: 'Asysta w urzędzie, banku, szkole, szpitalu',
    lead: 'Polski urzędnik nie musi mówić po angielsku, a w POZ czy USC niemal nikt nie mówi. LegalWin wysyła specjalistaa-tłumacza, który nie tylko tłumaczy, ale rozumie procedurę: wie, o co spyta inspektor ZUS, czego zażąda kierownik USC, jak odpowiadać w trudnej sytuacji. To asysta prawna, nie buzzword "tłumacz".',
    facts: [
      { label: 'Cena', value: 'od 250 PLN/h', note: 'min. 2 h · PL ↔ ru/uk/be/en' },
      { label: 'Termin rezerwacji', value: '24 h', note: 'standard · pilne od 4 h' },
      { label: 'Miasta', value: 'WAW · WRO · KRK · GDN · POZ', note: 'region +50%' },
      { label: 'Języki', value: 'PL ↔ RU/UK/BE/EN', note: 'inne — przysięgły' }
    ],
    grounds: {
      title: 'Gdzie asystujemy',
      subtitle: 'Specjalista znający procedurę — nie uliczny tłumacz. To krytyczne w trudnych sprawach.',
      items: [
        { title: 'Urząd Wojewódzki', desc: 'TRC, PR, Karta Polaka, uznanie za obywatela. Skomplikowane procedury wymagają specjalistaa.' },
        { title: 'ZUS / Urząd Skarbowy', desc: 'Rejestracja pracodawcy, A1, niezaleganie, NIP-7, VAT — z prawem podatkowym.' },
        { title: 'USC — ślub', desc: 'Wniosek o ślub, podpis aktu małżeństwa, umiejscowienie aktu zagranicznego.' },
        { title: 'NFZ / lekarz / szpital', desc: 'POZ, specjalista, diagnostyka, hospitalizacja, Medicover / Lux Med.' },
        { title: 'Szkoła / przedszkole', desc: 'Zapis dziecka, klasa powitalna, orzeczenia, rozmowa z pedagogiem szkolnym.' },
        { title: 'Bank — konto', desc: 'KYC w Pekao, mBank, Santander, ING. Zwłaszcza dla nierezydentów z kartą pobytu.' },
        { title: 'Notariusz', desc: 'Akt notarialny zakupu, pełnomocnictwa, intercyzy — bez błędów tłumaczenia.' },
        { title: 'Sąd / policja / prokuratura', desc: 'Przesłuchania, wyjaśnienia, pozwy cywilne, rozwód. Tu — przysięgły obowiązkowy.' }
      ]
    },
    timeline: {
      title: 'Jak przebiega asysta',
      subtitle: 'Od zlecenia do wyjścia z urzędu z gotowym wynikiem.',
      steps: [
        { title: 'Rezerwacja', duration: '5 min', desc: 'Data, godz., urząd, cel. Potwierdzenie i kontakt do specjalistaa.' },
        { title: 'Przygotowanie', duration: '30–60 min', desc: 'Specjalista analizuje sprawę i przygotowuje listę pytań i dokumentów.' },
        { title: 'Spotkanie przed wizytą', duration: '15 min', desc: 'Przed urzędem — koordynacja: co mówić, co pokazywać, jakie mogą być pytania.' },
        { title: 'Asysta w urzędzie', duration: '1–3 h', desc: 'Specjalista przy okienku, tłumaczenie urzędnika, wypełnianie, odpowiedzi na uzupełnienia.' },
        { title: 'Dokumentacja', duration: '15 min', desc: 'Pisma / zaświadczenia. Specjalista tłumaczy treść i kolejne kroki.' },
        { title: 'Follow-up pocztą', duration: 'auto', desc: 'Pisma po wizycie — tłumaczenie, odpowiedzi. W cenie pierwszej wizyty (do 30 dni).' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum do przygotowania.',
      items: [
        'Paszport i kopia (PESEL)',
        'Karta pobytu lub inny dokument',
        'Cel wizyty',
        'Pisma / formularze od urzędu',
        'Kontakty urzędnika (jeśli są)',
        'Pełnomocnictwo dla LegalWin',
        'Lista pytań',
        'Data, godzina, adres urzędu (i okienko)'
      ]
    },
    pricing: {
      title: 'Cennik',
      subtitle: 'Stawka godzinowa. Minimum 2 h.',
      items: [
        { label: 'Konsultacja przed wizytą', value: 'Gratis', note: '15 min · brief' },
        { label: 'Asysta w urzędzie', value: 'od 250 PLN/h', note: 'Min. 2 h · specjalista-tłumacz' },
        { label: 'Pilne (24 h)', value: '+30%', note: 'Rezerwacja krócej niż 24 h' },
        { label: 'Sąd / prokuratura', value: 'od 350 PLN/h', note: 'Przysięgły jeśli wymagany' }
      ],
      note: 'Powyżej honoraria LegalWin. Transport w mieście wliczony. Region +50%. Przysięgły ustny — wg taryf MS.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Kodeks postępowania administracyjnego (art. 5)',
        'Ustawa z 25 listopada 2004 r. o zawodzie tłumacza przysięgłego',
        'Ustawa z 6 lipca 1982 r. o radcach prawnych',
        'Prawo o adwokaturze z 26 maja 1982 r.',
        'Konstytucja RP (art. 27)'
      ]
    },
    faq: [
      { q: 'Tłumacz-specjalista vs zwykły?', a: 'Zwykły tłumaczy słowa. Specjalista rozumie procedurę: zna oczekiwaną odpowiedź, minimalizuje ryzyko odmowy, dokłada dokumenty. W TRC, naturalizacji, sądzie — to różnica między "uzyskałem" a "odmówiono".' },
      { q: 'Czy urząd przyjmuje każdego?', a: 'W postępowaniu administracyjnym — tak. W sądzie, prokuraturze, policji — przysięgły z rejestru MS obowiązkowy.' },
      { q: 'Czy specjalista może iść beze mnie?', a: 'Tylko z pełnomocnictwem. Najem, pełnomocnictwa, odbiór karty, konto — tak. Ślub, biometria TRC, egzamin obywatelstwa — osobiście.' },
      { q: 'Ile godzin?', a: 'ZUS — 1–2 h. TRC z biometrią — 2–3 h. Ślub — 1 h + 30 min. Notariusz — 2–4 h. Sąd — od 4 h. +1 h rezerwy.' },
      { q: 'Odwołanie wizyty?', a: 'Z naszej winy — 100% zwrotu. Z Twojej w ostatnich 24 h — 50%. Urząd zamknięty — przesunięcie bez dopłat.' },
      { q: 'Jak dobierany specjalista?', a: 'Konsultanci o różnej specjalizacji: imigracyjny (TRC/PR), korporacyjny (KRS/USC), rodzinny (ślub/rozwód). Sąd — z tłumaczem przysięgłym. Dobór po briefie w godzinę.' },
      { q: 'Zdalnie?', a: 'Częściowo. Video w banku, ePUAP, korespondencja — tak. Biometria, ślub, sąd — tylko osobiście. Zdalnie 50% stawki.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Specjalista w urzędzie w 24 h',
    ctaSubtitle: 'Bezpłatna konsultacja: dobór specjalistaa, przygotowanie pytań, brief procedury. Minimum 2 h.'
  },
  en: {
    slug: 'tlumacz-na-wizyty',
    group: 'relocation',
    icon: 'scale',
    badge: 'Urząd · Bank · NFZ · Court · USC',
    title: 'Translator for visits',
    subtitle: 'Specialist-interpreter for urząd, bank, school, hospital',
    lead: "Polish officials aren't required to speak English, and at POZ clinics or USC almost no one does. LegalWin sends a specialist-interpreter who doesn't just translate but understands the procedure: knows what a ZUS inspector will ask, what the USC head will require, how to answer in tight spots. This is legal accompaniment, not the buzzword \"interpreter\".",
    facts: [
      { label: 'Price', value: 'from 250 PLN/h', note: 'min 2 h · PL ↔ ru/uk/be/en' },
      { label: 'Booking lead', value: '24 h', note: 'standard · rush from 4 h' },
      { label: 'Cities', value: 'WAW · WRO · KRK · GDN · POZ', note: 'regional travel +50%' },
      { label: 'Languages', value: 'PL ↔ RU/UK/BE/EN', note: 'others — sworn interpreter' }
    ],
    grounds: {
      title: 'Where we accompany',
      subtitle: 'A specialist who knows the procedure — not a street interpreter. The difference matters in hard cases.',
      items: [
        { title: 'Voivodeship Office', desc: 'TRC, PR, Karta Polaka, citizenship recognition. Complex procedures need a specialist.' },
        { title: 'ZUS / tax office', desc: 'Employer registration, A1, no-arrears, NIP-7, VAT — with tax-law fluency.' },
        { title: 'USC — wedding', desc: 'Marriage application, signing the marriage certificate, recognition of foreign acts.' },
        { title: 'NFZ / doctor / hospital', desc: 'POZ visits, specialists, diagnostics, hospitalisation, private Medicover / Lux Med.' },
        { title: 'School / kindergarten', desc: "Child enrolment, welcome class, specialist orzeczenia, conversations with school pedagog." },
        { title: 'Bank — account opening', desc: 'KYC at Pekao, mBank, Santander, ING. Especially for non-residents with karta pobytu.' },
        { title: 'Notary — deals & POAs', desc: 'Property deeds, powers of attorney, prenuptial agreements — no translation errors allowed.' },
        { title: 'Court / police / prosecutor', desc: 'Interrogations, statements, civil claims, divorce. Sworn interpreter mandatory here.' }
      ]
    },
    timeline: {
      title: 'How accompaniment runs',
      subtitle: 'From booking to walking out of the urząd with the result.',
      steps: [
        { title: 'Booking', duration: '5 min', desc: 'Date, time, urząd, purpose. Confirmation and specialist contact.' },
        { title: 'Preparation', duration: '30–60 min', desc: 'Specialist reviews your case, prepares questions and document list.' },
        { title: 'Pre-visit briefing', duration: '15 min', desc: 'In a café outside the urząd — final coordination on what to say and show.' },
        { title: 'Urząd accompaniment', duration: '1–3 h', desc: 'Specialist at the desk: translates the officer, fills forms, answers uzupełnienia.' },
        { title: 'Result documentation', duration: '15 min', desc: 'Signed protocols / pisma / zaświadczenia. Specialist explains content and next steps.' },
        { title: 'Mail follow-up', duration: 'auto', desc: 'Pisma after the visit — translated and answered. Included in the first-visit fee (up to 30 days).' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimum for prep.',
      items: [
        'Passport and copy (PESEL)',
        'Residence card or other stay document',
        'Visit purpose',
        'Pisma / forms from the urząd',
        'Officer contact if any',
        'Power of attorney for LegalWin',
        'Question list',
        'Date, time, urząd address (and counter)'
      ]
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Hourly rate. Minimum 2 hours.',
      items: [
        { label: 'Pre-visit consultation', value: 'Free', note: '15 minutes · brief' },
        { label: 'Urząd accompaniment', value: 'from 250 PLN/h', note: 'Min 2 h · specialist-interpreter' },
        { label: 'Rush (24 h)', value: '+30%', note: 'Booking under 24 h' },
        { label: 'Court / prosecutor', value: 'from 350 PLN/h', note: 'Sworn interpreter when required' }
      ],
      note: 'LegalWin fees. In-city transport included. Regional travel +50%. Sworn interpreter (court) at MoJ rates.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Code of Administrative Procedure (Art. 5 — Polish language)',
        'Sworn Translator Act of 25 November 2004',
        'Legal Counsel Act of 6 July 1982',
        'Bar Profession Act of 26 May 1982',
        'Polish Constitution (Art. 27 — official language)'
      ]
    },
    faq: [
      { q: 'Specialist-interpreter vs ordinary?', a: "An ordinary interpreter translates words. A specialist-interpreter understands the procedure — knows the expected answer, minimises refusal risk, knows which extra documents to add. In TRC, naturalisation, court — that's the difference between 'received' and 'denied'." },
      { q: 'Does the urząd accept any interpreter?', a: 'In administrative procedure — yes, anyone the client picks. In court, prosecutor, police — only a sworn interpreter from the MoJ register. We arrange one if required.' },
      { q: 'Can the specialist go without me?', a: 'Only with a power of attorney. Tenancy, POAs, card collection, account opening — yes, we go solo. Wedding, TRC biometrics, citizenship exam — your presence required.' },
      { q: 'How many hours?', a: 'Simple ZUS — 1–2 h. TRC with biometrics — 2–3 h. USC wedding — 1 h ceremony + 30 min filing. Notary — 2–4 h. Court — from 4 h. +1 h buffer.' },
      { q: 'Last-minute cancellation?', a: 'Our fault — 100% refund. Yours within 24 h — 50%. Urząd closure — reschedule, no surcharge.' },
      { q: 'Specialist selection?', a: 'Specialists across specialities: immigration (TRC/PR), corporate (KRS/USC/notary), family (wedding/divorce). Court — with sworn interpreter. Picked within an hour after brief.' },
      { q: 'Remote service?', a: 'Partly. Video bank calls, ePUAP filings, urząd correspondence — yes. Biometrics, wedding, court — in person only. Remote work at 50% rate.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Specialist at urząd in 24 hours',
    ctaSubtitle: 'Free consultation: specialist selection, question prep, procedure brief. Minimum booking — 2 hours.'
  }
};

export default tlumaczNaWizyty;
