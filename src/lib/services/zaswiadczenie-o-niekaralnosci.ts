import type { ServiceEntry } from './types';

const zaswiadczenieONiekaralnosci: ServiceEntry = {
  ru: {
    slug: 'zaswiadczenie-o-niekaralnosci',
    group: 'documents',
    icon: 'shield',
    badge: 'KRK · e-KRK · Ministerstwo Sprawiedliwości',
    title: 'Справка о несудимости',
    subtitle: 'Zaświadczenie z Krajowego Rejestru Karnego (KRK)',
    lead: 'Справка о несудимости (zaświadczenie z KRK) - выписка из Польского национального реестра судимостей. Обязательна при оформлении гражданства Польши, лицензий MOL, Karty stałego pobytu, работе с детьми и тендерах. Получаем за 7 дней - онлайн через e-KRK или физически в Министерстве Юстиции и судах. Параллельно оформляем справки KRK из стран происхождения.',
    facts: [
      { label: 'Срок выдачи', value: '7 дней', note: 'standard · 1 день e-KRK' },
      { label: 'Госпошлина', value: '20-30 PLN', note: 'e-KRK / форма papierowa' },
      { label: 'Где', value: 'Ministerstwo Sprawiedliwości', note: 'или сечения окружных судов' },
      { label: 'Действует', value: '6 месяцев', note: 'для большинства целей' }
    ],
    grounds: {
      title: 'Когда нужна справка о несудимости',
      subtitle: 'KRK требуют десятки польских процедур. Самые востребованные у иностранцев:',
      items: [
        { title: 'Гражданство Польши', desc: 'Обязательно для wniosku do Prezydenta RP (nadanie obywatelstwa) и uznania za obywatela polskiego. Срок действия - 3 месяца на момент подачи.' },
        { title: 'Karta Stałego Pobytu', desc: 'Воевода требует справку KRK для подачи на ПМЖ - без неё wniosek не принимается. Также - KRK из страны происхождения с apostille.' },
        { title: 'Лицензии и концессии', desc: 'Лицензия MOL (перевозки), охранная (ochrona), детектив, broker ubezpieczeniowy, прокурист, biegły rewident.' },
        { title: 'Работа с детьми', desc: 'Школы, детские сады, обучение, репетиторство, тренеры. С 2024 - обязательная проверка через системы Centralnego Rejestru Sprawców.' },
        { title: 'Государственная служба', desc: 'Все позиции в administracji rządowej и samorządowej, полиция, судьи, прокуроры, ABW, военные.' },
        { title: 'Тендеры и публичные закупки', desc: 'Подача предложения в trybie zamówień publicznych - справка KRK на фирму (z KRS) и на каждого члена zarządu.' },
        { title: 'Banking и финансы', desc: 'Должности w bankach, CRK, KNF-надзор, страховых компаниях. KRK + KRK z państw, gdzie pracował.' },
        { title: 'Виза или ВНЖ за рубежом', desc: 'США (виза O, EB), Канада (PR), Великобритания (skilled worker), ОАЭ - все требуют KRK с apostille и переводом.' }
      ]
    },
    timeline: {
      title: 'Как мы получаем справку',
      subtitle: 'Стандартный цикл - 1-7 дней через e-KRK или физически в Министерстве Юстиции.',
      steps: [
        { title: 'Консультация', duration: '15 мин', desc: 'Уточняем цель, формат (электронная/бумажная), нужен ли apostille и перевод. Подбираем оптимальный способ подачи.' },
        { title: 'Доверенность', duration: '1 день', desc: 'Подписываем pełnomocnictwo (17 PLN госпошлина). Через ePUAP - без бумажной волокиты.' },
        { title: 'Подача wniosku', duration: '1 день', desc: 'e-KRK (через профиль zaufany) - 20 PLN, выдача за 1 день. Бумажный wniosek в Ministerstwie Sprawiedliwości или Sądzie Okręgowym - 30 PLN, 7 дней.' },
        { title: 'Получение справки', duration: '1-7 дней', desc: 'Электронная - на e-mail или ePUAP с электронной подписью МС. Бумажная - забираем лично или отправляем курьером.' },
        { title: 'Apostille (если нужно)', duration: '3-5 дней', desc: 'Для использования за рубежом - apostille от MSZ (60 PLN). Для стран ЕС - apostille не нужно с 2019 г.' },
        { title: 'Присяжный перевод', duration: '2-3 дня', desc: 'Перевод на язык целевой страны (английский, немецкий, испанский, арабский - у нас есть проверенные присяжные).' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум для подачи wniosku.',
      items: [
        'Паспорт (копия страницы с фото)',
        'PESEL (если есть; без PESEL подача через бумажный wniosek)',
        'Karta pobytu или иной документ легального пребывания',
        'Pełnomocnictwo dla LegalWin (17 PLN госпошлина или ePUAP бесплатно)',
        'Доступ к ePUAP / profil zaufany (для e-KRK)',
        'Девичья фамилия (если меняли) - для проверки во всех записях',
        'Все имена и фамилии, под которыми вы были зарегистрированы',
        'Цель использования - определяет форму wniosku (osoba prywatna / w celu zatrudnienia)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Гонорар за справку - от 200 PLN. Госпошлины - отдельно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '15 минут · уточнение цели' },
        { label: 'KRK под ключ', value: 'от 200 PLN', note: 'Wniosek, доверенность, выдача · 7 дней' },
        { label: 'KRK срочно (1 день)', value: 'от 350 PLN', note: 'e-KRK с приоритетной обработкой' },
        { label: 'KRK + apostille + перевод', value: 'от 480 PLN', note: 'Для использования за рубежом' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (20 PLN e-KRK, 30 PLN bumażna, 17 PLN pełnomocnictwo, 60 PLN apostille) и присяжный перевод (~80 PLN/документ) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 24 maja 2000 r. o Krajowym Rejestrze Karnym',
        'Rozporządzenie Ministra Sprawiedliwości w sprawie wzorów zaświadczeń z KRK',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (KRK do TRC i PMS)',
        'Ustawa z dnia 13 maja 2016 r. o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym',
        'Konwencja haska z 5 października 1961 r. (apostille)'
      ]
    },
    faq: [
      { q: 'Чем отличается KRK для частного лица и для работодателя?', a: 'Wniosek "osoba prywatna" (заявление от частного лица) - содержит все записи о судимости, включая снятые. Wniosek "do celów zatrudnienia" (заявление для целей трудоустройства) - только относящиеся к конкретной должности (например, для работы с детьми - только статьи против половой неприкосновенности). Для иммиграционных целей всегда - частный.' },
      { q: 'Сколько действует справка KRK?', a: 'KRK (Krajowy Rejestr Karny - Государственный реестр судимостей) - стандарт 6 месяцев от даты выдачи. Для гражданства Польши - 3 месяца. Для тендеров - обычно 3 месяца. Делайте справку максимально близко к дате подачи.' },
      { q: 'Можно ли получить KRK без визита в Польшу?', a: 'Да. Через e-KRK (электронный сервис KRK) с profil zaufany ePUAP (доверенным профилем) - полностью онлайн. Если ePUAP нет - оформляем доверенность у польского консула в стране проживания. Получим электронную справку за 1-3 дня.' },
      { q: 'Как получить справку KRK из страны происхождения?', a: 'Через консульство страны в Польше или через местного партнёра. Помогаем - у нас партнёры в Украине, Беларуси, России, Казахстане, Грузии, Молдове, Армении. Срок - 14-30 дней. Стоимость - 250-500 PLN наших + консульские сборы.' },
      { q: 'KRK с apostille - куда подаётся?', a: 'Apostille ставит MSZ Warszawa за 3-5 дней. Если нужно срочно - express tariff (1 день, +50%). Для стран ЕС - apostille не нужно (Регламент 2016/1191), достаточно справки и присяжного перевода.' },
      { q: 'Что если у меня была судимость, но снятая (zatarta)?', a: 'В справке "do celów zatrudnienia" zatarte записи не показываются. В частной справке - могут быть указаны "skazany - wyrok zatarty". Для гражданства Польши Президент рассматривает все записи, включая снятые. Помогаем оценить шансы и подготовить wyjaśnienia.' },
      { q: 'Есть ли разница между KRK и справкой о несудимости из суда?', a: 'KRK выдаёт Ministerstwo Sprawiedliwości - это центральный реестр всех записей. Справка из суда - только по делам конкретного суда. Везде, где написано «справка о несудимости», нужна KRK. Sądowe справки - для очень узких процедур.' }
    ],
    related: ['apostille', 'zaswiadczenia-zus-us', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Справка KRK за 1-7 дней',
    ctaSubtitle: 'Бесплатная консультация: уточним цель, формат, нужен ли apostille. От подписания доверенности до получения - обычно 1-7 рабочих дней.'
  },
  pl: {
    slug: 'zaswiadczenie-o-niekaralnosci',
    group: 'documents',
    icon: 'shield',
    badge: 'KRK · e-KRK · Ministerstwo Sprawiedliwości',
    title: 'Zaświadczenie o niekaralności',
    subtitle: 'Zaświadczenie z Krajowego Rejestru Karnego (KRK)',
    lead: 'Zaświadczenie z KRK to wypis z Krajowego Rejestru Karnego. Wymagane do obywatelstwa polskiego, licencji MOL, karty stałego pobytu, pracy z dziećmi i przetargów. Wydanie 1-7 dni - przez e-KRK online lub w Ministerstwie Sprawiedliwości.',
    facts: [
      { label: 'Termin', value: '7 dni', note: 'standard · 1 dzień e-KRK' },
      { label: 'Opłata', value: '20-30 PLN', note: 'e-KRK / forma papierowa' },
      { label: 'Gdzie', value: 'Ministerstwo Sprawiedliwości', note: 'lub sądy okręgowe' },
      { label: 'Ważność', value: '6 miesięcy', note: 'do większości celów' }
    ],
    grounds: {
      title: 'Kiedy potrzebne KRK',
      subtitle: 'Najczęściej u cudzoziemców:',
      items: [
        { title: 'Obywatelstwo polskie', desc: 'Konieczne do wniosku do Prezydenta RP i uznania za obywatela. 3 miesiące ważności.' },
        { title: 'Karta Stałego Pobytu', desc: 'Wojewoda wymaga KRK do PR - bez niej wniosek nie przyjęty. Plus KRK z kraju pochodzenia z apostille.' },
        { title: 'Licencje i koncesje', desc: 'MOL (przewozy), ochrona, detektyw, broker ubezpieczeniowy, prokurent, biegły rewident.' },
        { title: 'Praca z dziećmi', desc: 'Szkoły, przedszkola, korepetycje, trenerzy. Od 2024 - obowiązkowa weryfikacja w Centralnym Rejestrze Sprawców.' },
        { title: 'Służba publiczna', desc: 'Administracja rządowa i samorządowa, policja, sędziowie, prokuratorzy, ABW, wojsko.' },
        { title: 'Przetargi i zamówienia publiczne', desc: 'KRK firmy i każdego członka zarządu.' },
        { title: 'Bankowość i finanse', desc: 'Stanowiska w bankach, SKOK, nadzór KNF, ubezpieczenia.' },
        { title: 'Wizy i pobyt zagraniczny', desc: 'USA (O, EB), Kanada (PR), UK (skilled worker), ZEA - wszystkie wymagają KRK z apostille i tłumaczeniem.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: '1-7 dni przez e-KRK lub w MS / sądzie.',
      steps: [
        { title: 'Konsultacja', duration: '15 min', desc: 'Cel, format, potrzeba apostille / tłumaczenia.' },
        { title: 'Pełnomocnictwo', duration: '1 dzień', desc: '17 PLN lub ePUAP gratis.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'e-KRK (20 PLN, 1 dzień) lub papier (30 PLN, 7 dni).' },
        { title: 'Odbiór', duration: '1-7 dni', desc: 'Elektroniczna na e-mail/ePUAP z podpisem MS lub odbiór osobisty.' },
        { title: 'Apostille', duration: '3-5 dni', desc: 'MSZ - 60 PLN. UE - bez apostille (Rozp. 2016/1191).' },
        { title: 'Tłumaczenie przysięgłe', duration: '2-3 dni', desc: 'EN, DE, ES, AR i inne.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum.',
      items: [
        'Paszport (kopia ze zdjęciem)',
        'PESEL (jeśli jest)',
        'Karta pobytu',
        'Pełnomocnictwo (17 PLN lub ePUAP)',
        'Dostęp do ePUAP',
        'Nazwisko panieńskie (jeśli zmieniane)',
        'Wszystkie używane imiona i nazwiska',
        'Cel - wpływa na formę wniosku'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Honorarium od 200 PLN. Opłaty osobno.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '15 min · cel' },
        { label: 'KRK pod klucz', value: 'od 200 PLN', note: 'Wniosek, pełnomocnictwo, odbiór · 7 dni' },
        { label: 'KRK pilne (1 dzień)', value: 'od 350 PLN', note: 'e-KRK priorytet' },
        { label: 'KRK + apostille + tłumaczenie', value: 'od 480 PLN', note: 'Do użytku zagranicznego' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty (20/30 PLN, 17 PLN pełn., 60 PLN apostille) i tłumaczenia (~80 PLN) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 24 maja 2000 r. o Krajowym Rejestrze Karnym',
        'Rozporządzenie MS ws. wzorów zaświadczeń z KRK',
        'Ustawa z 12 grudnia 2013 r. o cudzoziemcach',
        'Ustawa z 13 maja 2016 r. o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym',
        'Konwencja haska z 5 października 1961 r. (apostille)'
      ]
    },
    faq: [
      { q: 'Różnica między KRK osoby prywatnej a do zatrudnienia?', a: 'Prywatna - wszystkie wpisy. Do zatrudnienia - tylko właściwe stanowisku (np. praca z dziećmi - przestępstwa seksualne). Do TRC/PR/obywatelstwa - zawsze prywatna.' },
      { q: 'Ważność KRK?', a: '6 miesięcy. Obywatelstwo - 3 mies. Przetargi - 3 mies. Składaj jak najbliżej daty wniosku.' },
      { q: 'KRK bez wizyty?', a: 'Tak - e-KRK z profilem zaufanym ePUAP. Bez ePUAP - pełnomocnictwo u konsula RP w kraju zamieszkania.' },
      { q: 'KRK z kraju pochodzenia?', a: 'Przez konsulat w Polsce lub lokalnego partnera. Mamy partnerów w UA, BY, RU, KZ, GE, MD, AM. 14-30 dni, 250-500 PLN naszych + konsulat.' },
      { q: 'KRK z apostille?', a: 'MSZ Warszawa - 3-5 dni. Express +50% (1 dzień). UE - bez apostille (Rozp. 2016/1191).' },
      { q: 'Zatarte skazania?', a: 'W "do zatrudnienia" - niewidoczne. W prywatnej - mogą być z adnotacją "wyrok zatarty". Prezydent przy obywatelstwie ocenia wszystko.' },
      { q: 'KRK vs zaświadczenie z sądu?', a: 'KRK - centralny rejestr (MS). Sąd - tylko sprawy danego sądu. Wszędzie gdzie "zaświadczenie o niekaralności" - KRK.' }
    ],
    related: ['apostille', 'zaswiadczenia-zus-us', 'tlumaczenia-przysiegle'],
    ctaTitle: 'KRK w 1-7 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: cel, format, apostille. Od pełnomocnictwa do odbioru - 1-7 dni roboczych.'
  },
  en: {
    slug: 'zaswiadczenie-o-niekaralnosci',
    group: 'documents',
    icon: 'shield',
    badge: 'KRK · Czerniakowska 100 · ePUAP',
    title: "Polish certificate of no criminal record",
    subtitle: "Zaświadczenie z Krajowego Rejestru Karnego (KRK)",
    lead: "HR asked for a \"police clearance from Poland\" and you found out it doesn't exist by that name. What you actually need is a zaświadczenie z KRK - an extract from the Krajowy Rejestr Karny held at ul. Czerniakowska 100 in Warsaw. Same-day at the counter, 30 PLN. Online via ePUAP if you have profil zaufany, 20 PLN, back in 1-3 days. We file it for you, add apostille from MSZ if it's going abroad, and arrange the sworn translation. One caveat: the KRK only covers convictions in Poland. If you're filing for a TRC or work permit, the voivode also wants a clearance from your country of origin.",
    facts: [
      { label: "Turnaround", value: "Same day", note: "at the counter · 1-3 days via ePUAP" },
      { label: "State fee", value: "20 / 30 PLN", note: "ePUAP / paper" },
      { label: "Where", value: "Czerniakowska 100", note: "central KRK office, Warsaw" },
      { label: "Validity", value: "3-6 months", note: "depends on the receiving body" }
    ],
    grounds: {
      title: "When you'll need one",
      subtitle: "The KRK extract gets asked for in more places than most foreigners expect. The common triggers:",
      items: [
        { title: "TRC and visa renewals", desc: "Voivode asks for the Polish KRK plus a home-country police certificate, apostilled and sworn-translated into Polish. Both must be under six months old at filing." },
        { title: "Job onboarding", desc: "Banks, KNF-supervised firms, public administration, schools and anything touching minors will request the certificate before contract signing. Most employers want the paper version." },
        { title: "Sp. z o.o. director appointment", desc: "When you're being entered into KRS as a board member, the registry court checks the KRK to confirm you're not barred under Article 18 of the Commercial Companies Code." },
        { title: "Polish bar exam and regulated professions", desc: "Aplikacja adwokacka, radcowska, notarialna, statutory auditor exams and real-estate broker licensing all gate on a clean KRK." },
        { title: "Gun permit and security work", desc: "Pozwolenie na broń uses a separate form - zaświadczenie o niekaralności na potrzeby ZRSO - issued from the firearms registry side of KRK. Don't request the standard one by mistake." },
        { title: "Adoption proceedings", desc: "Polish family courts request the KRK for both prospective parents, plus equivalent certificates from any country you've lived in for the past five years." },
        { title: "US visa applications (O, EB, K)", desc: "Consulates want the KRK with apostille from MSZ and a sworn translation into English. We handle all three in one engagement." },
        { title: "Public-procurement bids", desc: "Bidders submit a fresh KRK on the company (from KRS) and on every board member. Three-month validity window at tender opening." }
      ]
    },
    timeline: {
      title: "How the filing runs",
      subtitle: "Same day at the counter on Czerniakowska, or 1-3 days through ePUAP if you have profil zaufany.",
      steps: [
        { title: "Free intake call", duration: "15 min", desc: "We confirm the purpose, the right form (private vs. employment vs. ZRSO), whether you need apostille, and which language for the translation." },
        { title: "Power of attorney", duration: "1 day", desc: "Signed via ePUAP for free, or on paper with a 17 PLN stamp duty. ePUAP is faster when you have profil zaufany set up." },
        { title: "Filing the wniosek", duration: "same day", desc: "Paper wniosek at Czerniakowska 100 in Warsaw or any sąd okręgowy: 30 PLN, issued same day. Electronic via ePUAP: 20 PLN, back in 1-3 days with a qualified ministerial signature." },
        { title: "Collection", duration: "1-3 days", desc: "We pick up the paper original or download the signed PDF from ePUAP. Courier to your address if you're outside Warsaw." },
        { title: "Apostille from MSZ (if needed)", duration: "3-5 days", desc: "60 PLN, processed at the legalisation desk in MSZ Warsaw. EU destinations skip this step under Regulation 2016/1191." },
        { title: "Sworn translation", duration: "2-3 days", desc: "English, German, Spanish, Arabic, Turkish, Ukrainian - tłumacz przysięgły from the official MS list. About 80 PLN per page." }
      ]
    },
    documents: {
      title: "What we need from you",
      subtitle: "Bare minimum to file.",
      items: [
        "Passport (clear photo of the bio page is fine)",
        "PESEL if you have one (without it we file on paper using passport data)",
        "Karta pobytu or proof of legal stay",
        "Signed pełnomocnictwo (17 PLN stamp duty, or via ePUAP for free)",
        "ePUAP profil zaufany credentials if going the electronic route",
        "Maiden name and any prior surnames (the registry checks all aliases)",
        "Confirmation of which receiving body wants the certificate",
        "If going abroad: target country and language for apostille and translation"
      ]
    },
    pricing: {
      title: "Our fee",
      subtitle: "From 200 PLN. State fees and translation billed separately.",
      items: [
        { label: "Consultation", value: "Free", note: "15 minutes · we confirm the right form" },
        { label: "Turnkey KRK", value: "from 200 PLN", note: "Wniosek, PoA, pickup · 1-3 days" },
        { label: "Same-day rush", value: "from 350 PLN", note: "Filed at Czerniakowska, collected same day" },
        { label: "KRK + apostille + sworn translation", value: "from 480 PLN", note: "Ready for foreign use" }
      ],
      note: "LegalWin fees only. State fees (20 PLN ePUAP, 30 PLN paper, 17 PLN PoA, 60 PLN apostille) and sworn translation (~80 PLN per page) are billed at cost."
    },
    legalBase: {
      title: "Legal basis",
      items: [
        "National Criminal Register Act of 24 May 2000",
        "Minister of Justice Regulation on KRK certificate templates",
        "Foreigners Act of 12 December 2013 (KRK for TRC and PR)",
        "Act of 13 May 2016 on combating sexual-offence threats",
        "Hague Convention of 5 October 1961 (apostille)"
      ]
    },
    faq: [
      { q: "Does my home country's police certificate count instead?", a: "No - they're not interchangeable. The Polish KRK only records convictions handed down by Polish courts. Your home-country certificate (FBI Identity History Summary for US citizens at about USD 18, UK ACRO at around GBP 55, AFP National Police Check in Australia at roughly AUD 42, RCMP check in Canada at about CAD 25) records convictions back home. For a TRC the voivode wants both: the Polish KRK plus your origin-country certificate apostilled and sworn-translated into Polish." },
      { q: "How long does the certificate stay valid?", a: "There's no single statutory expiry - it depends on who's reading it. Voivodes accept up to six months from issue for residence cases. Public procurement and citizenship applications cap it at three months. Banks and employers usually want something issued in the last 30-90 days. Pull it close to your filing date and you'll avoid having to redo it." },
      { q: "Can I get it without coming to Poland?", a: "Yes, two ways. With profil zaufany ePUAP you file through the e-KRK portal and get the signed PDF back in 1-3 days. Without ePUAP, sign a pełnomocnictwo at any Polish consulate abroad and we handle the rest in Warsaw. Paper original courier-shipped to your address if you need a wet-signed copy." },
      { q: "What's the difference between the private form and the employment form?", a: "The private form (osoba prywatna) shows every entry, including spent convictions with a 'wyrok zatarty' annotation. The employment form (do celów zatrudnienia) filters down to convictions relevant to the specific role - so a school checking a teacher only sees sexual-offence and child-protection convictions, not unrelated matters. For TRC, PR and citizenship applications it's always the private form." },
      { q: "I'm being asked for the certificate in the US. What does the chain look like?", a: "KRK from Czerniakowska, then apostille from MSZ at ul. Krucza 38/42 in Warsaw (60 PLN, 3-5 days, express +50% for next-day), then sworn translation into English by a tłumacz przysięgły. US consulates and USCIS accept this chain. We bundle all three steps for 480 PLN plus state fees." },
      { q: "What about the gun permit version?", a: "Different form entirely. Pozwolenie na broń needs zaświadczenie o niekaralności na potrzeby ZRSO, issued through the firearms-registry side of KRK. If you file the standard private form by mistake the komendant wojewódzki policji will send you back. We check this on the intake call before anything gets filed." },
      { q: "I have a spent conviction. Will it show up?", a: "On the employment form, no - zatarte convictions are filtered out by statute. On the private form they appear with a 'wyrok zatarty' note. The Polish President sees the full file when reviewing citizenship petitions, including spent convictions, so it's worth preparing wyjaśnienia in advance. We help draft them if it's relevant to your case." }
    ],
    related: ["apostille", "zaswiadczenia-zus-us", "tlumaczenia-przysiegle"],
    ctaTitle: "Polish KRK certificate, same day",
    ctaSubtitle: "Free 15-minute consultation. We confirm the right form, file at Czerniakowska or via ePUAP, and add apostille plus sworn translation if you're sending it abroad."
  },
  tr: {
    slug: 'zaswiadczenie-o-niekaralnosci',
    group: 'documents',
    icon: 'shield',
    badge: 'KRK · e-KRK · Adalet Bakanlığı',
    title: 'Adli sicil belgesi',
    subtitle: 'Krajowy Rejestr Karny (KRK) zaświadczenie\'si',
    lead: 'Adli sicil belgesi (zaświadczenie z KRK), Polonya Ulusal Sabıka Sicili\'nden çıkartılan bir özettir. Polonya vatandaşlığı, MOL lisansları, Karta Stałego Pobytu (daimi oturum kartı), çocuklarla çalışma ve kamu ihaleleri için zorunludur. 7 günde alıyoruz - e-KRK üzerinden çevrimiçi veya Adalet Bakanlığı ile mahkemelerden bizzat. Aynı zamanda menşe ülke adli sicil belgelerini de çıkarttırıyoruz.',
    facts: [
      { label: 'Verilme süresi', value: '7 gün', note: 'standart · e-KRK için 1 gün' },
      { label: 'Resmi harç', value: '20-30 PLN', note: 'e-KRK / kağıt form' },
      { label: 'Yer', value: 'Adalet Bakanlığı (MS)', note: 'veya bölge mahkemeleri' },
      { label: 'Geçerlilik', value: '6 ay', note: 'çoğu amaç için' }
    ],
    grounds: {
      title: 'Adli sicil belgesi ne zaman gerekir',
      subtitle: 'KRK onlarca Polonya prosedüründe istenir. Yabancılarda en sık karşılaşılanlar:',
      items: [
        { title: 'Polonya vatandaşlığı', desc: 'Cumhurbaşkanı\'na yapılan vatandaşlık başvurusu (nadanie obywatelstwa) ve uznanie za obywatela polskiego (vatandaşlığa kabul) için zorunludur. Sunum anında 3 ay geçerli olmalı.' },
        { title: 'Karta Stałego Pobytu', desc: 'Daimi ikamet için wojewoda KRK ister - olmadan wniosek kabul edilmez. Ek olarak menşe ülkenizden apostille\'li KRK belgesi de gerekir.' },
        { title: 'Lisans ve imtiyazlar', desc: 'MOL lisansı (taşımacılık), güvenlik (ochrona), dedektif, sigorta brokeri, prokurist, biegły rewident (yeminli mali müşavir).' },
        { title: 'Çocuklarla çalışma', desc: 'Okullar, anaokulları, eğitim, özel ders, antrenörlük. 2024\'ten itibaren Centralny Rejestr Sprawców (Merkezi Suçlular Sicili) üzerinden zorunlu kontrol.' },
        { title: 'Kamu hizmeti', desc: 'Tüm administracja rządowa ve samorządowa (merkezi ve yerel idare) görevleri, polis, hakim, savcı, ABW, askeri görevler.' },
        { title: 'İhale ve kamu alımları', desc: 'Tryb zamówień publicznych (kamu alımları usulü) çerçevesinde teklif vermek - şirket için (KRS\'den) ve her yönetim kurulu üyesi için KRK gerekir.' },
        { title: 'Bankacılık ve finans', desc: 'Banka, SKOK (kredi-yatırım kooperatifleri), KNF denetimi, sigorta şirketlerinde görev. KRK + çalışılan ülkelerden KRK.' },
        { title: 'Yurt dışı vize veya oturum izni', desc: 'ABD (O, EB), Kanada (PR), Birleşik Krallık (skilled worker), BAE - hepsi apostille\'li ve tercüme edilmiş KRK ister.' }
      ]
    },
    timeline: {
      title: 'KRK süreci',
      subtitle: 'Standart döngü - e-KRK üzerinden veya Adalet Bakanlığı\'nda bizzat 1-7 gün.',
      steps: [
        { title: 'Danışmanlık', duration: '15 dk', desc: 'Amaç, format (elektronik / kağıt), apostille ve tercüme gereksinimini netleştiriyoruz. En uygun başvuru yöntemini seçiyoruz.' },
        { title: 'Vekaletname', duration: '1 gün', desc: 'Pełnomocnictwo imzalanır (17 PLN damga vergisi). ePUAP üzerinden kağıt olmadan ücretsiz.' },
        { title: 'Wniosku sunma', duration: '1 gün', desc: 'e-KRK (profil zaufany ile) - 20 PLN, 1 günde verilir. Kağıt wniosek Adalet Bakanlığı veya Sąd Okręgowy\'de (bölge mahkemesi) - 30 PLN, 7 gün.' },
        { title: 'Belgenin teslimi', duration: '1-7 gün', desc: 'Elektronik - e-posta veya ePUAP\'a Adalet Bakanlığı elektronik imzasıyla. Kağıt - bizzat alır veya kuryeyle gönderiyoruz.' },
        { title: 'Apostille (gerekirse)', duration: '3-5 gün', desc: 'Yurt dışı kullanım için MSZ\'den apostille (60 PLN). AB ülkeleri için 2019\'dan beri apostille gerekmiyor.' },
        { title: 'Yeminli tercüme', duration: '2-3 gün', desc: 'Hedef ülkenin diline çeviri (İngilizce, Almanca, İspanyolca, Arapça vb. - güvenilir tercümanlarımız var).' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Wniosek için asgari paket.',
      items: [
        'Pasaport (fotoğraflı sayfa fotokopisi)',
        'PESEL (varsa; yoksa kağıt wniosek üzerinden başvuru)',
        'Karta pobytu veya başka yasal ikamet belgesi',
        'LegalWin\'e pełnomocnictwo (17 PLN damga vergisi veya ePUAP üzerinden ücretsiz)',
        'ePUAP / profil zaufany erişimi (e-KRK için)',
        'Kızlık soyadı (değiştirildiyse) - tüm kayıtlarda kontrol için',
        'Kayıtlı olduğunuz tüm ad ve soyadlar',
        'Kullanım amacı - wniosku\'nun formatını belirler (osoba prywatna / w celu zatrudnienia)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Belge başına 200 PLN\'den. Resmi harçlar ayrıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '15 dakika · amaç netleştirme' },
        { label: 'Anahtar teslim KRK', value: '200 PLN\'den', note: 'Wniosek, vekaletname, teslim · 7 gün' },
        { label: 'Acil KRK (1 gün)', value: '350 PLN\'den', note: 'Öncelikli e-KRK işlem' },
        { label: 'KRK + apostille + tercüme', value: '480 PLN\'den', note: 'Yurt dışı kullanım için' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Resmi harçlar (20 PLN e-KRK, 30 PLN kağıt, 17 PLN pełnomocnictwo, 60 PLN apostille) ve yeminli tercüme (~80 PLN/belge) ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 24 maja 2000 r. o Krajowym Rejestrze Karnym (Ulusal Sabıka Sicili Kanunu)',
        'Adalet Bakanlığı KRK zaświadczenie örnek yönetmeliği',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Yabancılar Kanunu - TRC ve daimi ikamette KRK)',
        'Ustawa z dnia 13 maja 2016 r. o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym (Cinsel Suç Tehditleriyle Mücadele Kanunu)',
        '5 Ekim 1961 Lahey Sözleşmesi (apostille)'
      ]
    },
    faq: [
      { q: 'Özel kişi KRK\'sı ile işveren amaçlı KRK arasındaki fark nedir?', a: '"Osoba prywatna" wniosku (özel kişi başvurusu) - silinmiş kayıtlar dahil tüm sabıka kayıtlarını içerir. "Do celów zatrudnienia" wniosku (istihdam amaçlı başvuru) - yalnızca belirli bir göreve ilişkin kayıtları içerir (örneğin çocuklarla çalışma için yalnızca cinsel suç maddeleri). Göçmenlik amaçları için her zaman özel kişi KRK\'sı kullanılır.' },
      { q: 'KRK belgesi ne kadar geçerli?', a: 'KRK (Krajowy Rejestr Karny - Ulusal Sabıka Sicili) standart olarak verildiği tarihten itibaren 6 ay geçerlidir. Polonya vatandaşlığı için 3 ay. Kamu ihaleleri için genelde 3 ay. Belgeyi başvuru tarihinize mümkün olduğunca yakın çıkarttırın.' },
      { q: 'Polonya\'ya gelmeden KRK alabilir miyim?', a: 'Evet. ePUAP profil zaufany\'siyle e-KRK (KRK elektronik servisi) üzerinden tamamen çevrimiçi alınır. ePUAP\'ınız yoksa - ikamet ülkenizdeki Polonya konsolosunda vekaletname imzalatıyoruz. Elektronik belgeyi 1-3 günde temin ediyoruz.' },
      { q: 'Menşe ülkeden KRK belgesini nasıl alabilirim?', a: 'Polonya\'daki konsolosluk üzerinden veya yerel ortağımız aracılığıyla. Türkiye, Ukrayna, Belarus, Rusya, Kazakistan, Gürcistan, Moldova ve Ermenistan\'da ortaklarımız var. Süre 14-30 gün, ücretimiz 250-500 PLN + konsolosluk harçları.' },
      { q: 'KRK\'nın apostille\'i nereye yapılır?', a: 'Apostille\'i MSZ Varşova 3-5 günde basar. Acil ihtiyaçta - express tarife (1 gün, +%50). AB ülkeleri için apostille gerekmez (2016/1191 Tüzüğü), belge ve yeminli tercüme yeterlidir.' },
      { q: 'Sabıkam vardı ama silindi (zatarta) - ne olur?', a: '"Do celów zatrudnienia" belgesinde zatarte kayıtlar görünmez. Özel kişi belgesinde "skazany - wyrok zatarty" (mahkum - hüküm silindi) ibaresiyle yer alabilir. Polonya vatandaşlığı için Cumhurbaşkanı silinmiş dahil tüm kayıtları değerlendirir. Şansınızı değerlendirip wyjaśnienia (açıklama) hazırlamanıza yardımcı oluyoruz.' },
      { q: 'KRK ile mahkeme adli sicil belgesi farklı mı?', a: 'KRK\'yı Adalet Bakanlığı (Ministerstwo Sprawiedliwości) verir - tüm kayıtların merkezi sicilidir. Mahkeme belgesi yalnızca o mahkemenin dosyalarını kapsar. "Adli sicil belgesi" diyen her yerde KRK gerekir. Mahkeme belgeleri çok dar prosedürler için kullanılır.' }
    ],
    related: ['apostille', 'zaswiadczenia-zus-us', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Adli sicil (KRK) belgesi 1-7 günde',
    ctaSubtitle: 'Ücretsiz danışmanlık: amacı, formatı, apostille gereksinimini netleştiririz. Vekaletname imzasından teslime genelde 1-7 iş günü.'
  },
  uk: {
    slug: 'zaswiadczenie-o-niekaralnosci',
    group: 'documents',
    icon: 'shield',
    badge: 'KRK · e-KRK · Ministerstwo Sprawiedliwości',
    title: 'Довідка про несудимість',
    subtitle: 'Zaświadczenie z Krajowego Rejestru Karnego (KRK)',
    lead: 'Довідка про несудимість (zaświadczenie z KRK) — виписка з Польського національного реєстру судимостей. Обов’язкова при оформленні громадянства Польщі, ліцензій MOL, Karty stałego pobytu, роботі з дітьми та тендерах. Отримуємо за 7 днів — онлайн через e-KRK або фізично в Міністерстві Юстиції та судах. Паралельно оформлюємо довідки KRK з країн походження.',
    facts: [
      { label: 'Термін видачі', value: '7 днів', note: 'standard · 1 день e-KRK' },
      { label: 'Держмито', value: '20–30 PLN', note: 'e-KRK / форма papierowa' },
      { label: 'Де', value: 'Ministerstwo Sprawiedliwości', note: 'або відділення окружних судів' },
      { label: 'Діє', value: '6 місяців', note: 'для більшості цілей' }
    ],
    grounds: {
      title: 'Коли потрібна довідка про несудимість',
      subtitle: 'KRK вимагають десятки польських процедур. Найбільш затребувані в іноземців:',
      items: [
        { title: 'Громадянство Польщі', desc: 'Обов’язково для wniosku do Prezydenta RP (nadanie obywatelstwa) і uznania za obywatela polskiego. Термін дії — 3 місяці на момент подання.' },
        { title: 'Karta Stałego Pobytu', desc: 'Воєвода вимагає довідку KRK для подання на карту сталого побуту — без неї wniosek не приймається. Також — KRK з країни походження з apostille.' },
        { title: 'Ліцензії та концесії', desc: 'Ліцензія MOL (перевезення), охоронна (ochrona), детектив, broker ubezpieczeniowy, прокурист, biegły rewident.' },
        { title: 'Робота з дітьми', desc: 'Школи, дитячі садки, навчання, репетиторство, тренери. З 2024 — обов’язкова перевірка через системи Centralnego Rejestru Sprawców.' },
        { title: 'Державна служба', desc: 'Усі позиції в administracji rządowej та samorządowej, поліція, судді, прокурори, ABW, військові.' },
        { title: 'Тендери і публічні закупівлі', desc: 'Подання пропозиції в trybie zamówień publicznych — довідка KRK на фірму (z KRS) і на кожного члена zarządu.' },
        { title: 'Banking і фінанси', desc: 'Посади w bankach, SKOK, KNF-нагляд, страхових компаніях. KRK + KRK z państw, gdzie pracował.' },
        { title: 'Віза або ВНЖ за кордоном', desc: 'США (віза O, EB), Канада (PR), Велика Британія (skilled worker), ОАЕ — усі вимагають KRK з apostille і перекладом.' }
      ]
    },
    timeline: {
      title: 'Як ми отримуємо довідку',
      subtitle: 'Стандартний цикл — 1–7 днів через e-KRK або фізично в Міністерстві Юстиції.',
      steps: [
        { title: 'Консультація', duration: '15 хв', desc: 'Уточнюємо мету, формат (електронна/паперова), чи потрібен apostille і переклад. Підбираємо оптимальний спосіб подання.' },
        { title: 'Довіреність', duration: '1 день', desc: 'Підписуємо pełnomocnictwo (17 PLN держмито). Через ePUAP — без паперової тяганини.' },
        { title: 'Подання wniosku', duration: '1 день', desc: 'e-KRK (через профіль zaufany) — 20 PLN, видача за 1 день. Паперовий wniosek у Ministerstwie Sprawiedliwości або Sądzie Okręgowym — 30 PLN, 7 днів.' },
        { title: 'Отримання довідки', duration: '1–7 днів', desc: 'Електронна — на e-mail або ePUAP з електронним підписом МС. Паперова — забираємо особисто або відправляємо кур’єром.' },
        { title: 'Apostille (якщо потрібно)', duration: '3–5 днів', desc: 'Для використання за кордоном — apostille від MSZ (60 PLN). Для країн ЄС — apostille не потрібен з 2019 р.' },
        { title: 'Присяжний переклад', duration: '2–3 дні', desc: 'Переклад мовою цільової країни (англійська, німецька, іспанська, арабська — у нас є перевірені присяжні).' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас',
      subtitle: 'Мінімум для подання wniosku.',
      items: [
        'Паспорт (копія сторінки з фото)',
        'PESEL (якщо є; без PESEL подання через паперовий wniosek)',
        'Karta pobytu або інший документ легального перебування',
        'Pełnomocnictwo dla LegalWin (17 PLN держмито або ePUAP безкоштовно)',
        'Доступ до ePUAP / profil zaufany (для e-KRK)',
        'Дівоче прізвище (якщо змінювали) — для перевірки в усіх записах',
        'Усі імена та прізвища, під якими ви були зареєстровані',
        'Мета використання — визначає форму wniosku (osoba prywatna / w celu zatrudnienia)'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Гонорар за довідку — від 200 PLN. Держмита — окремо.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '15 хвилин · уточнення мети' },
        { label: 'KRK під ключ', value: 'від 200 PLN', note: 'Wniosek, довіреність, видача · 7 днів' },
        { label: 'KRK терміново (1 день)', value: 'від 350 PLN', note: 'e-KRK з пріоритетною обробкою' },
        { label: 'KRK + apostille + переклад', value: 'від 480 PLN', note: 'Для використання за кордоном' }
      ],
      note: 'Зазначено гонорари LegalWin. Держмита (20 PLN e-KRK, 30 PLN паперова, 17 PLN pełnomocnictwo, 60 PLN apostille) і присяжний переклад (~80 PLN/документ) — окремо.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 24 maja 2000 r. o Krajowym Rejestrze Karnym',
        'Rozporządzenie Ministra Sprawiedliwości w sprawie wzorów zaświadczeń z KRK',
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (KRK do TRC i PMS)',
        'Ustawa z dnia 13 maja 2016 r. o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym',
        'Konwencja haska z 5 października 1961 r. (apostille)'
      ]
    },
    faq: [
      { q: 'Чим відрізняється KRK для приватної особи і для роботодавця?', a: 'Wniosek "osoba prywatna" (заява від приватної особи) — містить усі записи про судимість, включно зі знятими. Wniosek "do celów zatrudnienia" (заява для цілей працевлаштування) — лише ті, що стосуються конкретної посади (наприклад, для роботи з дітьми — лише статті проти статевої недоторканності). Для імміграційних цілей завжди — приватна.' },
      { q: 'Скільки діє довідка KRK?', a: 'KRK (Krajowy Rejestr Karny — Державний реєстр судимостей) — стандарт 6 місяців від дати видачі. Для громадянства Польщі — 3 місяці. Для тендерів — зазвичай 3 місяці. Робіть довідку максимально близько до дати подання.' },
      { q: 'Чи можна отримати KRK без візиту до Польщі?', a: 'Так. Через e-KRK (електронний сервіс KRK) з profil zaufany ePUAP (довіреним профілем) — повністю онлайн. Якщо ePUAP немає — оформлюємо довіреність у польського консула в країні проживання. Отримаємо електронну довідку за 1–3 дні.' },
      { q: 'Як отримати довідку KRK з країни походження?', a: 'Через консульство країни в Польщі або через місцевого партнера. Допомагаємо — у нас партнери в Україні, Білорусі, Казахстані, Грузії, Молдові, Вірменії. Термін — 14–30 днів. Вартість — 250–500 PLN наших + консульські збори.' },
      { q: 'KRK з apostille — куди подається?', a: 'Apostille ставить MSZ Warszawa за 3–5 днів. Якщо потрібно терміново — express tariff (1 день, +50%). Для країн ЄС — apostille не потрібен (Регламент 2016/1191), достатньо довідки та присяжного перекладу.' },
      { q: 'Що якщо в мене була судимість, але знята (zatarta)?', a: 'У довідці "do celów zatrudnienia" zatarte записи не показуються. У приватній довідці — можуть бути зазначені "skazany — wyrok zatarty". Для громадянства Польщі Президент розглядає всі записи, включно зі знятими. Допомагаємо оцінити шанси і підготувати wyjaśnienia.' },
      { q: 'Чи є різниця між KRK і довідкою про несудимість із суду?', a: 'KRK видає Ministerstwo Sprawiedliwości — це центральний реєстр усіх записів. Довідка із суду — лише за справами конкретного суду. Скрізь, де написано «довідка про несудимість», потрібна KRK. Sądowe довідки — для дуже вузьких процедур.' }
    ],
    related: ['apostille', 'zaswiadczenia-zus-us', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Довідка KRK за 1–7 днів',
    ctaSubtitle: 'Безкоштовна консультація: уточнимо мету, формат, чи потрібен apostille. Від підписання довіреності до отримання — зазвичай 1–7 робочих днів.'
  }
};

export default zaswiadczenieONiekaralnosci;
