import type { ServiceEntry } from './types';

const tlumaczNaWizyty: ServiceEntry = {
  ru: {
    slug: 'tlumacz-na-wizyty',
    group: 'relocation',
    icon: 'scale',
    badge: 'Urząd · Bank · NFZ · Sąd · USC',
    title: 'Переводчик для визитов',
    subtitle: 'Сопровождение в urząd, банк, школу, больницу',
    lead: 'Польский urzędnik не обязан говорить с вами на английском, а в банке POZ или USC - почти никто не говорит. LegalWin предоставляет специалиста-переводчика, который не просто переводит, а понимает суть процедуры: знает, какие вопросы задаст ZUS-инспектор, какие документы потребует kierownik USC, как отвечать в сложной ситуации. Это сопровождение, а не buzzword «переводчик».',
    facts: [
      { label: 'Стоимость', value: 'от 250 PLN/час', note: 'минимум 2 часа · ru/uk/be/en' },
      { label: 'Срок бронирования', value: '24 часа', note: 'standard · срочно от 4 ч' },
      { label: 'Города', value: 'WAW · WRO · KRK · GDN · POZ', note: 'выезд в регион +50%' },
      { label: 'Языки', value: 'PL ↔ RU/UK/BE/EN', note: 'другие - присяжный переводчик' }
    ],
    grounds: {
      title: 'Где сопровождаем',
      subtitle: 'Специалист со знанием процедуры - не уличный переводчик. Это критическая разница в сложных делах.',
      items: [
        { title: 'Urząd Wojewódzki', desc: 'Подача TRC, ПМЖ, Karty Polaka, признания за гражданина. Сложная процедура - нужен специалист, не просто переводчик.' },
        { title: 'ZUS / Urząd Skarbowy', desc: 'Регистрация работодателя, A1, niezaleganie, NIP-7, регистрация VAT - со знанием налогового права.' },
        { title: 'USC - заключение брака', desc: 'Подача wniosku o ślub, подписание aktu małżeństwa в день свадьбы. Также - umiejscowienie aktu zagranicznego.' },
        { title: 'NFZ / лекарь / больница', desc: 'POZ-визит, специалист, диагностика, госпитализация, страховой медцентр Medicover / Lux Med.' },
        { title: 'Школа / детсад', desc: 'Запись ребёнка, klasa powitalna, рассмотрение orzeczeń specjalistycznych, разговор с pedagogiem szkolnym.' },
        { title: 'Bank - открытие счёта', desc: 'KYC-анкеты в Pekao, mBank, Santander, ING. Особенно для нерезидентов с karta pobytu.' },
        { title: 'Notariusz - сделки и pełnomocnictwa', desc: 'Akt notarialny по покупке жилья, доверенностям, брачным договорам - где невозможна ошибка перевода.' },
        { title: 'Sąd / police / prokuratura', desc: 'Допросы, объяснения, гражданские иски, развод. Здесь работаем с присяжным переводчиком, обязательно.' }
      ]
    },
    timeline: {
      title: 'Как проходит сопровождение',
      subtitle: 'От заявки до выхода из urzędu с готовым результатом.',
      steps: [
        { title: 'Бронирование', duration: '5 мин', desc: 'Уточняете дату, время, urząd, цель визита. Получаете подтверждение и контакт специалиста.' },
        { title: 'Подготовка', duration: '30-60 мин', desc: 'Специалист изучает вашу ситуацию: тип документа, основания, прошлые действия. Готовит список вопросов и документов.' },
        { title: 'Встреча перед визитом', duration: '15 мин', desc: 'Перед urzędem (в кафе или у входа) - finalna координация: что говорить, что показывать, какие вопросы могут задать.' },
        { title: 'Сопровождение в urzędzie', duration: '1-3 часа', desc: 'Специалист идёт с вами к окошку, переводит вопросы urzędnika, помогает заполнить формуляры, отвечает на uzupełnienia.' },
        { title: 'Документация результата', duration: '15 мин', desc: 'Получаете signed protocols / pisma / zaświadczenia. Специалист объясняет, что в них написано и какие следующие шаги.' },
        { title: 'Follow-up по почте', duration: 'auto', desc: 'Если urząd шлёт pisma после визита - переводим и объясняем, готовим ответы. Это уже включено в гонорар первого визита (до 30 дней).' }
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
      subtitle: 'Гонорар почасовой. Минимум - 2 часа.',
      items: [
        { label: 'Консультация по визиту', value: 'Бесплатно', note: '15 минут · brief' },
        { label: 'Сопровождение в urząd', value: 'от 250 PLN/час', note: 'Минимум 2 часа · специалист-переводчик' },
        { label: 'Срочно (24 ч)', value: '+30%', note: 'Если бронь менее чем за 24 часа' },
        { label: 'Sąd / прокуратура', value: 'от 350 PLN/час', note: 'Присяжный переводчик при необходимости' }
      ],
      note: 'Указаны гонорары LegalWin. Транспортные расходы внутри города включены. Выезд в регион (за пределы границ города) +50%. Присяжный устный переводчик (для суда) - отдельно по тарифам MS.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Kodeks postępowania administracyjnego (art. 5 - język polski)',
        'Ustawa z dnia 25 listopada 2004 r. o zawodzie tłumacza przysięgłego',
        'Ustawa z dnia 6 lipca 1982 r. o radcach prawnych (asysta prawna)',
        'Ustawa z dnia 26 maja 1982 r. - Prawo o adwokaturze',
        'Konstytucja RP (art. 27 - język urzędowy: polski)'
      ]
    },
    faq: [
      { q: 'Чем переводчик-специалист отличается от обычного устного переводчика?', a: 'Обычный переводчик переводит слова. Специалист-переводчик понимает процедуру: знает, какой ответ ожидает urzędnik, как минимизировать риск отказа, какие документы добавить. На сложных делах (TRC, naturalizacja, sąd) разница между «получили» и «получили отказ» - это специалист, а не переводчик.' },
      { q: 'Принимает ли urząd любого переводчика?', a: 'В административной процедуре - да, любого, кого выбрал клиент. Но в sądzie, prokuraturze, policji - обязательно присяжный переводчик из реестра MS. Мы вызываем его, если процедура требует.' },
      { q: 'Можно ли отправить специалиста без меня?', a: 'Только если есть pełnomocnictwo. Подписать договор аренды, доверенность, забрать карту pobytu, открыть счёт - да, делаем по pełnomocnictwu. Личное присутствие требуется на свадьбе, биометрии TRC, экзамене на гражданство.' },
      { q: 'Сколько часов реально нужно?', a: 'Простой ZUS-визит - 1-2 часа. Подача TRC с биометрией - 2-3 часа. Свадьба в USC - 1 час сама церемония + 30 мин подача. Покупка квартиры у нотариуса - 2-4 часа. Sąd - от 4 часов. На всякий случай резервируем +1 час.' },
      { q: 'Что если визит отменили в день?', a: 'Если отмена - наша вина (специалист заболел, опаздывает) - возврат 100%. Если отмена с вашей стороны менее чем за 24 часа - оплата 50% брони. Если отмена urzędu (закрыт, нет связи) - переносим без доплаты.' },
      { q: 'Как выбираете специалиста под мой случай?', a: 'У нас специалисты с разной специализацией. Иммиграционный - для TRC/ПМЖ. Корпоративный - для KRS/USC/Notar. Семейный - для брака/развода/детей. По sądu и prokuraturze работаем с присяжными переводчиками. Подбираем после brief в течение часа.' },
      { q: 'Можно ли получить услугу удалённо?', a: 'Частично. Видеозвонки в банк, удалённые подачи через ePUAP, переписка с urzędem - да, делаем. Подача биометрии TRC, свадьба, sąd - только лично. Гонорар за удалённую работу - 50% от обычного.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Специалист на urząd за 24 часа',
    ctaSubtitle: 'Бесплатная консультация: подбор специалиста под визит, подготовка вопросов, brief по процедуре. Минимальная бронь - 2 часа.'
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
      { label: 'Języki', value: 'PL ↔ RU/UK/BE/EN', note: 'inne - przysięgły' }
    ],
    grounds: {
      title: 'Gdzie asystujemy',
      subtitle: 'Specjalista znający procedurę - nie uliczny tłumacz. To krytyczne w trudnych sprawach.',
      items: [
        { title: 'Urząd Wojewódzki', desc: 'TRC, PR, Karta Polaka, uznanie za obywatela. Skomplikowane procedury wymagają specjalistaa.' },
        { title: 'ZUS / Urząd Skarbowy', desc: 'Rejestracja pracodawcy, A1, niezaleganie, NIP-7, VAT - z prawem podatkowym.' },
        { title: 'USC - ślub', desc: 'Wniosek o ślub, podpis aktu małżeństwa, umiejscowienie aktu zagranicznego.' },
        { title: 'NFZ / lekarz / szpital', desc: 'POZ, specjalista, diagnostyka, hospitalizacja, Medicover / Lux Med.' },
        { title: 'Szkoła / przedszkole', desc: 'Zapis dziecka, klasa powitalna, orzeczenia, rozmowa z pedagogiem szkolnym.' },
        { title: 'Bank - konto', desc: 'KYC w Pekao, mBank, Santander, ING. Zwłaszcza dla nierezydentów z kartą pobytu.' },
        { title: 'Notariusz', desc: 'Akt notarialny zakupu, pełnomocnictwa, intercyzy - bez błędów tłumaczenia.' },
        { title: 'Sąd / policja / prokuratura', desc: 'Przesłuchania, wyjaśnienia, pozwy cywilne, rozwód. Tu - przysięgły obowiązkowy.' }
      ]
    },
    timeline: {
      title: 'Jak przebiega asysta',
      subtitle: 'Od zlecenia do wyjścia z urzędu z gotowym wynikiem.',
      steps: [
        { title: 'Rezerwacja', duration: '5 min', desc: 'Data, godz., urząd, cel. Potwierdzenie i kontakt do specjalistaa.' },
        { title: 'Przygotowanie', duration: '30-60 min', desc: 'Specjalista analizuje sprawę i przygotowuje listę pytań i dokumentów.' },
        { title: 'Spotkanie przed wizytą', duration: '15 min', desc: 'Przed urzędem - koordynacja: co mówić, co pokazywać, jakie mogą być pytania.' },
        { title: 'Asysta w urzędzie', duration: '1-3 h', desc: 'Specjalista przy okienku, tłumaczenie urzędnika, wypełnianie, odpowiedzi na uzupełnienia.' },
        { title: 'Dokumentacja', duration: '15 min', desc: 'Pisma / zaświadczenia. Specjalista tłumaczy treść i kolejne kroki.' },
        { title: 'Follow-up pocztą', duration: 'auto', desc: 'Pisma po wizycie - tłumaczenie, odpowiedzi. W cenie pierwszej wizyty (do 30 dni).' }
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
      note: 'Powyżej honoraria LegalWin. Transport w mieście wliczony. Region +50%. Przysięgły ustny - wg taryf MS.'
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
      { q: 'Tłumacz-specjalista vs zwykły?', a: 'Zwykły tłumaczy słowa. Specjalista rozumie procedurę: zna oczekiwaną odpowiedź, minimalizuje ryzyko odmowy, dokłada dokumenty. W TRC, naturalizacji, sądzie - to różnica między "uzyskałem" a "odmówiono".' },
      { q: 'Czy urząd przyjmuje każdego?', a: 'W postępowaniu administracyjnym - tak. W sądzie, prokuraturze, policji - przysięgły z rejestru MS obowiązkowy.' },
      { q: 'Czy specjalista może iść beze mnie?', a: 'Tylko z pełnomocnictwem. Najem, pełnomocnictwa, odbiór karty, konto - tak. Ślub, biometria TRC, egzamin obywatelstwa - osobiście.' },
      { q: 'Ile godzin?', a: 'ZUS - 1-2 h. TRC z biometrią - 2-3 h. Ślub - 1 h + 30 min. Notariusz - 2-4 h. Sąd - od 4 h. +1 h rezerwy.' },
      { q: 'Odwołanie wizyty?', a: 'Z naszej winy - 100% zwrotu. Z Twojej w ostatnich 24 h - 50%. Urząd zamknięty - przesunięcie bez dopłat.' },
      { q: 'Jak dobierany specjalista?', a: 'Konsultanci o różnej specjalizacji: imigracyjny (TRC/PR), korporacyjny (KRS/USC), rodzinny (ślub/rozwód). Sąd - z tłumaczem przysięgłym. Dobór po briefie w godzinę.' },
      { q: 'Zdalnie?', a: 'Częściowo. Video w banku, ePUAP, korespondencja - tak. Biometria, ślub, sąd - tylko osobiście. Zdalnie 50% stawki.' }
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
      { label: 'Languages', value: 'PL ↔ RU/UK/BE/EN', note: 'others - sworn interpreter' }
    ],
    grounds: {
      title: 'Where we accompany',
      subtitle: 'A specialist who knows the procedure - not a street interpreter. The difference matters in hard cases.',
      items: [
        { title: 'Voivodeship Office', desc: 'TRC, PR, Karta Polaka, citizenship recognition. Complex procedures need a specialist.' },
        { title: 'ZUS / tax office', desc: 'Employer registration, A1, no-arrears, NIP-7, VAT - with tax-law fluency.' },
        { title: 'USC - wedding', desc: 'Marriage application, signing the marriage certificate, recognition of foreign acts.' },
        { title: 'NFZ / doctor / hospital', desc: 'POZ visits, specialists, diagnostics, hospitalisation, private Medicover / Lux Med.' },
        { title: 'School / kindergarten', desc: "Child enrolment, welcome class, specialist orzeczenia, conversations with school pedagog." },
        { title: 'Bank - account opening', desc: 'KYC at Pekao, mBank, Santander, ING. Especially for non-residents with karta pobytu.' },
        { title: 'Notary - deals & POAs', desc: 'Property deeds, powers of attorney, prenuptial agreements - no translation errors allowed.' },
        { title: 'Court / police / prosecutor', desc: 'Interrogations, statements, civil claims, divorce. Sworn interpreter mandatory here.' }
      ]
    },
    timeline: {
      title: 'How accompaniment runs',
      subtitle: 'From booking to walking out of the urząd with the result.',
      steps: [
        { title: 'Booking', duration: '5 min', desc: 'Date, time, urząd, purpose. Confirmation and specialist contact.' },
        { title: 'Preparation', duration: '30-60 min', desc: 'Specialist reviews your case, prepares questions and document list.' },
        { title: 'Pre-visit briefing', duration: '15 min', desc: 'In a café outside the urząd - final coordination on what to say and show.' },
        { title: 'Urząd accompaniment', duration: '1-3 h', desc: 'Specialist at the desk: translates the officer, fills forms, answers uzupełnienia.' },
        { title: 'Result documentation', duration: '15 min', desc: 'Signed protocols / pisma / zaświadczenia. Specialist explains content and next steps.' },
        { title: 'Mail follow-up', duration: 'auto', desc: 'Pisma after the visit - translated and answered. Included in the first-visit fee (up to 30 days).' }
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
        'Code of Administrative Procedure (Art. 5 - Polish language)',
        'Sworn Translator Act of 25 November 2004',
        'Legal Counsel Act of 6 July 1982',
        'Bar Profession Act of 26 May 1982',
        'Polish Constitution (Art. 27 - official language)'
      ]
    },
    faq: [
      { q: 'Specialist-interpreter vs ordinary?', a: "An ordinary interpreter translates words. A specialist-interpreter understands the procedure - knows the expected answer, minimises refusal risk, knows which extra documents to add. In TRC, naturalisation, court - that's the difference between 'received' and 'denied'." },
      { q: 'Does the urząd accept any interpreter?', a: 'In administrative procedure - yes, anyone the client picks. In court, prosecutor, police - only a sworn interpreter from the MoJ register. We arrange one if required.' },
      { q: 'Can the specialist go without me?', a: 'Only with a power of attorney. Tenancy, POAs, card collection, account opening - yes, we go solo. Wedding, TRC biometrics, citizenship exam - your presence required.' },
      { q: 'How many hours?', a: 'Simple ZUS - 1-2 h. TRC with biometrics - 2-3 h. USC wedding - 1 h ceremony + 30 min filing. Notary - 2-4 h. Court - from 4 h. +1 h buffer.' },
      { q: 'Last-minute cancellation?', a: 'Our fault - 100% refund. Yours within 24 h - 50%. Urząd closure - reschedule, no surcharge.' },
      { q: 'Specialist selection?', a: 'Specialists across specialities: immigration (TRC/PR), corporate (KRS/USC/notary), family (wedding/divorce). Court - with sworn interpreter. Picked within an hour after brief.' },
      { q: 'Remote service?', a: 'Partly. Video bank calls, ePUAP filings, urząd correspondence - yes. Biometrics, wedding, court - in person only. Remote work at 50% rate.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Specialist at urząd in 24 hours',
    ctaSubtitle: 'Free consultation: specialist selection, question prep, procedure brief. Minimum booking - 2 hours.'
  },
  tr: {
    slug: 'tlumacz-na-wizyty',
    group: 'relocation',
    icon: 'scale',
    badge: 'Urząd · Banka · NFZ · Mahkeme · USC',
    title: 'Ofis ziyaretlerinde tercüman',
    subtitle: 'Urząd, banka, okul ve hastane randevularında eşlik',
    lead: 'Polonyalı urzędnik İngilizce konuşmak zorunda değildir; POZ veya USC\'de neredeyse hiç kimse konuşmaz. LegalWin, sadece çeviri yapmayan, prosedürü de anlayan uzman tercümanlar gönderir: ZUS müfettişinin hangi soruları soracağını, kierownik USC\'nin hangi belgeleri isteyeceğini, zor durumda nasıl yanıt verileceğini bilir. Bu, "tercüman" buzzword\'ü değil, uzman eşliktir.',
    facts: [
      { label: 'Ücret', value: '250 PLN/saatten', note: 'asgari 2 saat · ru/uk/be/en' },
      { label: 'Rezervasyon süresi', value: '24 saat', note: 'standart · acil 4 saatten' },
      { label: 'Şehirler', value: 'WAW · WRO · KRK · GDN · POZ', note: 'bölgeye gidiş +%50' },
      { label: 'Diller', value: 'PL ↔ TR/RU/UK/BE/EN', note: 'diğerleri için yeminli tercüman' }
    ],
    grounds: {
      title: 'Nerelerde eşlik ediyoruz',
      subtitle: 'Prosedürü bilen uzman - sokaktan tercüman değil. Karmaşık dosyalarda kritik fark.',
      items: [
        { title: 'Urząd Wojewódzki', desc: 'TRC, daimi ikamet, Karta Polaka, vatandaşlığa kabul başvurusu. Karmaşık prosedür - sıradan tercüman değil, uzman gerekir.' },
        { title: 'ZUS / Urząd Skarbowy', desc: 'İşveren tescili, A1, niezaleganie, NIP-7, VAT kaydı - vergi hukuku bilgisiyle.' },
        { title: 'USC - evlilik akdi', desc: 'Wniosek o ślub, evlilik aktının imzası. Ayrıca - umiejscowienie aktu zagranicznego.' },
        { title: 'NFZ / doktor / hastane', desc: 'POZ ziyareti, uzman, tanı, yatış, Medicover / Lux Med özel sağlık merkezleri.' },
        { title: 'Okul / anaokulu', desc: 'Çocuk kaydı, klasa powitalna (uyum sınıfı), orzeczeń specjalistycznych\'in (uzman raporları) değerlendirilmesi, pedagogiem szkolnym (okul psikoloğu) ile görüşme.' },
        { title: 'Banka - hesap açılışı', desc: 'Pekao, mBank, Santander, ING\'de KYC formları. Özellikle karta pobytu sahibi gayrimukimler için.' },
        { title: 'Notariusz - işlemler ve vekaletname', desc: 'Konut alımına dair akt notarialny, vekaletnameler, evlilik sözleşmeleri - tercüme hatasına yer olmayan yerler.' },
        { title: 'Sąd / polis / savcılık', desc: 'Sorgular, beyanlar, hukuk davaları, boşanma. Burada zorunlu olarak yeminli tercümanla çalışıyoruz.' }
      ]
    },
    timeline: {
      title: 'Eşlik süreci',
      subtitle: 'Talepten urząd\'tan sonuçla çıkana kadar.',
      steps: [
        { title: 'Rezervasyon', duration: '5 dk', desc: 'Tarih, saat, urząd, ziyaret amacı. Onay ve uzman iletişim bilgisini alıyorsunuz.' },
        { title: 'Hazırlık', duration: '30-60 dk', desc: 'Uzman durumunuzu inceler: belge türü, gerekçe, geçmiş işlemler. Soru ve belge listesi hazırlar.' },
        { title: 'Ziyaret öncesi buluşma', duration: '15 dk', desc: 'Urząd öncesi (kafede veya girişte) - son koordinasyon: ne söyleneceği, ne gösterileceği, hangi soruların gelebileceği.' },
        { title: 'Urząd\'da eşlik', duration: '1-3 saat', desc: 'Uzman gişeye sizinle gelir, urzędnika\'nın sorularını çevirir, formuları doldurmanıza yardım eder, uzupełnienia\'lara yanıt verir.' },
        { title: 'Sonuç belgelerinin teslimi', duration: '15 dk', desc: 'İmzalı protokoły / pisma / zaświadczenia\'yı alıyorsunuz. Uzman içeriği ve sonraki adımları açıklar.' },
        { title: 'Posta sonrası takip', duration: 'otomatik', desc: 'Urząd ziyaret sonrası pisma gönderirse - çevirir ve açıklarız, yanıtları hazırlarız. İlk ziyaret ücretine dahildir (30 güne kadar).' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Hazırlık için asgari paket. Bireysel olarak belirlenir.',
      items: [
        'Pasaport ve kopyası (varsa PESEL)',
        'Karta pobytu veya başka ikamet belgesi',
        'Ziyaret amacı (TRC, ZUS, USC, evlilik, sağlık)',
        'Bu dosyaya ilişkin urząd\'tan gelen tüm pisma / formuları',
        'Urzędnika iletişim bilgisi (varsa)',
        'LegalWin\'e vekaletname (urząd\'da imzalar için)',
        'Sormak istediğiniz sorular listesi',
        'Tarih, saat, urząd adresi (sokak + biliyorsanız okienko)'
      ]
    },
    pricing: {
      title: 'Ücret',
      subtitle: 'Saatlik ücret. Asgari 2 saat.',
      items: [
        { label: 'Ziyarete hazırlık görüşmesi', value: 'Ücretsiz', note: '15 dakika · brif' },
        { label: 'Urząd\'da eşlik', value: '250 PLN/saatten', note: 'Asgari 2 saat · uzman tercüman' },
        { label: 'Acil (24 saat)', value: '+%30', note: 'Rezervasyon 24 saatten kısa süre öncesinde yapıldıysa' },
        { label: 'Sąd / savcılık', value: '350 PLN/saatten', note: 'Gerekirse yeminli tercüman' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Şehir içi ulaşım dahildir. Şehir dışı +%50. Mahkeme için yeminli sözlü tercüman MS tarifelerine göre ayrıdır.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Kodeks postępowania administracyjnego - madde 5 (Lehçe dil zorunluluğu)',
        'Ustawa z dnia 25 listopada 2004 r. o zawodzie tłumacza przysięgłego (Yeminli Tercüman Mesleği Kanunu)',
        'Ustawa z dnia 6 lipca 1982 r. o radcach prawnych (Hukuk Müşaviri Kanunu - hukuki eşlik)',
        'Ustawa z dnia 26 maja 1982 r. - Prawo o adwokaturze (Avukatlık Kanunu)',
        'Polonya Cumhuriyeti Anayasası - madde 27 (resmi dil: Lehçe)'
      ]
    },
    faq: [
      { q: 'Uzman-tercüman ile sıradan sözlü tercümanın farkı nedir?', a: 'Sıradan tercüman kelime çevirir. Uzman-tercüman prosedürü anlar: urzędnika\'nın hangi cevabı beklediğini bilir, ret riskini en aza indirmenin yolunu bulur, hangi belgenin eklenmesi gerektiğini söyler. Karmaşık dosyalarda (TRC, naturalizacja, sąd) "alındı" ile "reddedildi" arasındaki fark, tercüman değil uzmandır.' },
      { q: 'Urząd her tercümanı kabul eder mi?', a: 'İdari prosedürlerde - evet, müvekkilin seçtiği herkes uygundur. Ama sąd, prokuratura ve polis süreçlerinde - MS sicilinden yeminli tercüman zorunludur. Prosedür gerektirirse onu çağırıyoruz.' },
      { q: 'Uzmanı bensiz gönderebilir misiniz?', a: 'Yalnızca pełnomocnictwo varsa. Kira sözleşmesi imzası, vekaletnameler, karta pobytu teslimi, hesap açılışı - evet, pełnomocnictwo ile yapıyoruz. Ama evlilik akdi, TRC biyometri ve vatandaşlık sınavı için kişisel huzur şarttır.' },
      { q: 'Gerçekte kaç saat gerekir?', a: 'Basit ZUS ziyareti - 1-2 saat. Biyometrili TRC sunma - 2-3 saat. USC\'de evlilik töreni - 1 saat tören + 30 dakika başvuru. Noterde daire alımı - 2-4 saat. Sąd\'da - 4 saatten. Her ihtimale karşı +1 saat rezerve ediyoruz.' },
      { q: 'Ziyaret aynı gün iptal olursa?', a: 'İptal bizim hatamızsa (uzman hastalandı, gecikti) - %100 iade. İptal sizden 24 saatten kısa sürede gelirse - rezervasyonun %50\'si. Urząd kapalıysa veya sistem çöktüyse - ek ücret olmadan erteliyoruz.' },
      { q: 'Uzmanı dosyama göre nasıl seçiyorsunuz?', a: 'Farklı uzmanlık alanlarımız var. Göçmenlik uzmanı - TRC/daimi ikamet için. Kurumsal - KRS/USC/Notar için. Aile - evlilik/boşanma/çocuk için. Sąd ve prokuratura için yeminli tercümanla çalışıyoruz. Brif sonrası bir saat içinde uzmanı belirliyoruz.' },
      { q: 'Hizmeti uzaktan alabilir miyim?', a: 'Kısmen. Bankaya görüntülü görüşme, ePUAP üzerinden uzaktan başvuru, urząd ile yazışma - evet, yapıyoruz. TRC biyometri, evlilik töreni, sąd - yalnızca yüz yüze. Uzaktan çalışmanın ücreti normal tarifenin %50\'sidir.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Urząd\'a uzman 24 saatte',
    ctaSubtitle: 'Ücretsiz danışmanlık: ziyarete uygun uzmanın seçimi, sorular hazırlığı, prosedür brifi. Asgari rezervasyon 2 saattir.'
  },
  uk: {
    slug: 'tlumacz-na-wizyty',
    group: 'relocation',
    icon: 'scale',
    badge: 'Urząd · Bank · NFZ · Sąd · USC',
    title: 'Перекладач для візитів',
    subtitle: 'Супровід в urząd, банк, школу, лікарню',
    lead: 'Польський urzędnik не зобов’язаний говорити з вами англійською, а в банку, POZ чи USC — майже ніхто не говорить. LegalWin надає спеціаліста-перекладача, який не просто перекладає, а розуміє суть процедури: знає, які запитання поставить ZUS-інспектор, які документи вимагатиме kierownik USC, як відповідати у складній ситуації. Це супровід, а не buzzword «перекладач».',
    facts: [
      { label: 'Вартість', value: 'від 250 PLN/год', note: 'мінімум 2 години · ru/uk/be/en' },
      { label: 'Термін бронювання', value: '24 години', note: 'standard · терміново від 4 год' },
      { label: 'Міста', value: 'WAW · WRO · KRK · GDN · POZ', note: 'виїзд у регіон +50%' },
      { label: 'Мови', value: 'PL ↔ UK/RU/BE/EN', note: 'інші — присяжний перекладач' }
    ],
    grounds: {
      title: 'Де супроводжуємо',
      subtitle: 'Спеціаліст зі знанням процедури — не вуличний перекладач. Це критична різниця у складних справах.',
      items: [
        { title: 'Urząd Wojewódzki', desc: 'Подання на карту побуту, ПМЖ, Karty Polaka, визнання за громадянина. Складна процедура — потрібен спеціаліст, а не просто перекладач.' },
        { title: 'ZUS / Urząd Skarbowy', desc: 'Реєстрація роботодавця, A1, niezaleganie, NIP-7, реєстрація VAT — зі знанням податкового права.' },
        { title: 'USC — укладення шлюбу', desc: 'Подання wniosku o ślub, підписання aktu małżeństwa в день весілля. Також — umiejscowienie aktu zagranicznego.' },
        { title: 'NFZ / лікар / лікарня', desc: 'POZ-візит, спеціаліст, діагностика, госпіталізація, страховий медцентр Medicover / Lux Med.' },
        { title: 'Школа / дитсадок', desc: 'Запис дитини, klasa powitalna, розгляд orzeczeń specjalistycznych, розмова з pedagogiem szkolnym.' },
        { title: 'Bank — відкриття рахунку', desc: 'KYC-анкети у Pekao, mBank, Santander, ING. Особливо для нерезидентів із karta pobytu.' },
        { title: 'Notariusz — угоди та pełnomocnictwa', desc: 'Akt notarialny щодо купівлі житла, довіреності, шлюбні договори — там, де неможлива помилка перекладу.' },
        { title: 'Sąd / поліція / prokuratura', desc: 'Допити, пояснення, цивільні позови, розлучення. Тут працюємо з присяжним перекладачем, обов’язково.' }
      ]
    },
    timeline: {
      title: 'Як проходить супровід',
      subtitle: 'Від заявки до виходу з urzędu з готовим результатом.',
      steps: [
        { title: 'Бронювання', duration: '5 хв', desc: 'Уточнюєте дату, час, urząd, мету візиту. Отримуєте підтвердження і контакт спеціаліста.' },
        { title: 'Підготовка', duration: '30–60 хв', desc: 'Спеціаліст вивчає вашу ситуацію: тип документа, підстави, минулі дії. Готує список запитань і документів.' },
        { title: 'Зустріч перед візитом', duration: '15 хв', desc: 'Перед urzędem (у кафе або біля входу) — finalna координація: що говорити, що показувати, які запитання можуть поставити.' },
        { title: 'Супровід в urzędzie', duration: '1–3 години', desc: 'Спеціаліст іде з вами до віконця, перекладає запитання urzędnika, допомагає заповнити формуляри, відповідає на uzupełnienia.' },
        { title: 'Документація результату', duration: '15 хв', desc: 'Отримуєте signed protocols / pisma / zaświadczenia. Спеціаліст пояснює, що в них написано та які наступні кроки.' },
        { title: 'Follow-up поштою', duration: 'auto', desc: 'Якщо urząd надсилає pisma після візиту — перекладаємо й пояснюємо, готуємо відповіді. Це вже включено в гонорар першого візиту (до 30 днів).' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Мінімум для підготовки. Добір індивідуальний.',
      items: [
        'Паспорт і копія (PESEL, якщо є)',
        'Karta pobytu або інший документ перебування',
        'Мета візиту (карта побуту, ZUS, USC, шлюб, медицина)',
        'Усі pisma / формуляри від urzędu щодо цієї справи',
        'Контакти urzędnika (якщо вже є)',
        'Довіреність на LegalWin (для підписів в urzędzie)',
        'Список запитань, які хочете поставити',
        'Дата, час, адреса urzędu (вулиця + okienko, якщо знаєте)'
      ]
    },
    pricing: {
      title: 'Вартість',
      subtitle: 'Гонорар погодинний. Мінімум — 2 години.',
      items: [
        { label: 'Консультація щодо візиту', value: 'Безкоштовно', note: '15 хвилин · brief' },
        { label: 'Супровід в urząd', value: 'від 250 PLN/год', note: 'Мінімум 2 години · спеціаліст-перекладач' },
        { label: 'Терміново (24 год)', value: '+30%', note: 'Якщо бронь менш ніж за 24 години' },
        { label: 'Sąd / прокуратура', value: 'від 350 PLN/год', note: 'Присяжний перекладач за потреби' }
      ],
      note: 'Зазначено гонорари LegalWin. Транспортні витрати всередині міста включені. Виїзд у регіон (за межі міста) +50%. Присяжний усний перекладач (для суду) — окремо за тарифами MS.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Kodeks postępowania administracyjnego (art. 5 — język polski)',
        'Ustawa z dnia 25 listopada 2004 r. o zawodzie tłumacza przysięgłego',
        'Ustawa z dnia 6 lipca 1982 r. o radcach prawnych (asysta prawna)',
        'Ustawa z dnia 26 maja 1982 r. — Prawo o adwokaturze',
        'Konstytucja RP (art. 27 — język urzędowy: polski)'
      ]
    },
    faq: [
      { q: 'Чим перекладач-спеціаліст відрізняється від звичайного усного перекладача?', a: 'Звичайний перекладач перекладає слова. Спеціаліст-перекладач розуміє процедуру: знає, якої відповіді чекає urzędnik, як мінімізувати ризик відмови, які документи додати. У складних справах (карта побуту, naturalizacja, sąd) різниця між «отримали» і «отримали відмову» — це спеціаліст, а не перекладач.' },
      { q: 'Чи приймає urząd будь-якого перекладача?', a: 'В адміністративній процедурі — так, будь-кого, кого обрав клієнт. Але в sądzie, prokuraturze, policji — обов’язково присяжний перекладач із реєстру MS. Викликаємо його, якщо процедура вимагає.' },
      { q: 'Чи можна відправити спеціаліста без мене?', a: 'Лише якщо є pełnomocnictwo. Підписати договір оренди, довіреність, забрати картку pobytu, відкрити рахунок — так, робимо за pełnomocnictwem. Особиста присутність потрібна на весіллі, біометрії карти побуту, іспиті на громадянство.' },
      { q: 'Скільки годин реально потрібно?', a: 'Простий ZUS-візит — 1–2 години. Подання на карту побуту з біометрією — 2–3 години. Весілля в USC — 1 година сама церемонія + 30 хв подання. Купівля квартири в нотаріуса — 2–4 години. Sąd — від 4 годин. Про всяк випадок резервуємо +1 годину.' },
      { q: 'Що, якщо візит скасували в день?', a: 'Якщо скасування — наша провина (спеціаліст захворів, спізнюється) — повернення 100%. Якщо скасування з вашого боку менш ніж за 24 години — оплата 50% броні. Якщо скасування urzędu (зачинено, немає зв’язку) — переносимо без доплати.' },
      { q: 'Як обираєте спеціаліста під мій випадок?', a: 'У нас спеціалісти з різною спеціалізацією. Імміграційний — для карти побуту/ПМЖ. Корпоративний — для KRS/USC/Notar. Сімейний — для шлюбу/розлучення/дітей. У справах sądu та prokuratury працюємо з присяжними перекладачами. Підбираємо після brief протягом години.' },
      { q: 'Чи можна отримати послугу дистанційно?', a: 'Частково. Відеодзвінки в банк, дистанційні подання через ePUAP, листування з urzędem — так, робимо. Подання біометрії карти побуту, весілля, sąd — лише особисто. Гонорар за дистанційну роботу — 50% від звичайного.' }
    ],
    related: ['pomoc-w-zatrudnieniu', 'zapis-dzieci-do-szkoly', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Спеціаліст в urząd за 24 години',
    ctaSubtitle: 'Безкоштовна консультація: добір спеціаліста під візит, підготовка запитань, brief процедури. Мінімальна бронь — 2 години.'
  }
};

export default tlumaczNaWizyty;
