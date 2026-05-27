import type { ServiceEntry } from './types';

const rejestracjaSpZOo: ServiceEntry = {
  ru: {
    slug: 'rejestracja-sp-z-oo',
    group: 'business',
    icon: 'landmark',
    badge: 'Sp. z o.o. · 7-10 рабочих дней под ключ',
    title: 'Регистрация Sp. z o.o.',
    subtitle: 'Польская ООО за 7-10 рабочих дней - KRS, NIP, REGON, VAT, банковский счёт',
    lead: 'Sp. z o.o. (spółka z ograniczoną odpowiedzialnością) - польский аналог ООО. Минимальный капитал 5 000 PLN, ответственность ограничена вкладом, подходит и иностранцу без TRC. Регистрируем через S24 за 24 часа или нотариально с расширенным статутом за 5-7 дней. Включаем юридический адрес в Варшаве, открытие счёта в mBanku, ING или PKO BP, регистрацию VAT и постановку на учёт в ZUS.',
    facts: [
      { label: 'Минимальный капитал', value: '5 000 PLN', note: 'kapitał zakładowy' },
      { label: 'KRS - S24', value: '24-48 ч', note: 'онлайн через ePUAP' },
      { label: 'KRS - нотариально', value: '5-7 дней', note: 'свобода в статуте' },
      { label: 'CIT', value: '9% / 19%', note: '9% - малые до 2 млн EUR оборота' }
    ],
    grounds: {
      title: 'Когда выбирают Sp. z o.o.',
      subtitle: 'Sp. z o.o. - самая популярная форма для иностранцев. Не требует TRC, можно вести из-за границы, защищает личное имущество.',
      items: [
        { title: 'Иностранец без TRC', desc: 'JDG требует ВНЖ с правом на бизнес. Sp. z o.o. - нет. Регистрируется на любого нерезидента, даже находящегося за рубежом.' },
        { title: 'Защита личного имущества', desc: 'Ответственность ограничена вкладом в капитал. При банкротстве долги фирмы не переходят на учредителя - только обязательства члена правления при злоупотреблениях.' },
        { title: 'Работа с инвесторами', desc: 'Раздел капитала по udziałach (долях), возможность ввести соинвестора, сделать esop, создать классы udziałów с разными правами голоса и дивидендов.' },
        { title: 'Работа с EU-клиентами', desc: 'EU VAT-номер, доступ к OSS / IOSS, возможность работать с крупными корпоративными клиентами, для которых JDG неприемлем.' },
        { title: 'IP Box и Estonian CIT', desc: 'Льготная ставка 5% на доходы от ИС (программисты), отложенный CIT до выплаты дивидендов - только Sp. z o.o.' },
        { title: 'Подача на ВНЖ через бизнес', desc: 'Активная деятельность Sp. z o.o. (доход, наём 2+ сотрудников) - основание для karty pobytu по бизнесу или dla samozatrudnionych.' }
      ]
    },
    timeline: {
      title: 'Этапы регистрации Sp. z o.o.',
      subtitle: 'От первого звонка до полного запуска (KRS + банк + VAT + бухгалтер) - 7-14 рабочих дней.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Структура учредителей, налоговая форма (CIT/Estonian CIT/IP Box), вид деятельности (PKD коды). Решаем S24 или nota­rial.' },
        { title: 'Подготовка статута', duration: '1-2 дня', desc: 'Umowa spółki: PKD коды, доли, члены правления, sposób reprezentacji, дивидендная политика. S24 - шаблон, нотариально - индивидуально.' },
        { title: 'Подписание', duration: '1 день', desc: 'S24 - электронные подписи через profil zaufany / kwalifikowany. Нотариально - у нотариуса в Варшаве (можем дистанционно через pełnomocnika).' },
        { title: 'Подача в KRS', duration: '24 ч (S24) / 5-7 дней', desc: 'Электронно через Portal S24 или PRS. KRS присваивает номер, NIP, REGON автоматически. Сообщаем klient.' },
        { title: 'CRBR (UBO)', duration: '7 дней от регистрации', desc: 'Обязательная регистрация бенефициаров в Centralnym Rejestrze Beneficjentów Rzeczywistych. Штраф 1 млн PLN за пропуск.' },
        { title: 'Банковский счёт', duration: '3-7 дней', desc: 'Открываем в mBanku, ING, PKO BP, Bank Pekao или Santander. KYC процедура: документы, видеоверификация, заполнение анкеты.' },
        { title: 'VAT регистрация', duration: '7-30 дней', desc: 'Wniosek VAT-R. При обороте < 200 000 PLN - освобождение, можно отказаться. Для услуг ЕС - обязательно VAT-UE.' },
        { title: 'ZUS постановка', duration: '7 дней', desc: 'Регистрация работодателя при найме первого сотрудника / контракта B2B. ZUS-ZPA, ZUS-ZUA для каждого работника.' }
      ]
    },
    documents: {
      title: 'Что нужно для регистрации',
      subtitle: 'Большая часть готовится у нас. От учредителя - паспорта, адрес, согласия.',
      items: [
        'Скан паспорта учредителя(-ей) и членов правления',
        'PESEL - обязательно для члена правления (оформляем отдельно если нет)',
        'Адрес учредителя и членов правления (для CRBR)',
        'Название фирмы (3 варианта на случай дублей в KRS)',
        'PKD коды (виды деятельности - выбираем по плану бизнеса)',
        'Структура долей (% udziałów каждого wspólnika)',
        'Sposób reprezentacji (одиночный / совместный для членов правления)',
        'Юридический адрес - наш в Варшаве в цене или ваш',
        'Профиль zaufany / kwalifikowany подпись для S24 (помогаем оформить)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированная цена под ключ. Госпошлины и нотариус - отдельно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · структура и налоги' },
        { label: 'Sp. z o.o. через S24', value: 'от 1 800 PLN', note: 'KRS + NIP + адрес 12 мес' },
        { label: 'Sp. z o.o. нотариально', value: 'от 3 500 PLN', note: 'Индивидуальный статут' },
        { label: 'Под ключ + банк + VAT', value: 'от 4 800 PLN', note: 'KRS + банк + VAT-R + бухгалтер' }
      ],
      note: 'Госпошлины: KRS 250 PLN (S24) или 500 PLN (нотариально), Monitor Sądowy 100 PLN, нотариус ~700-1 200 PLN при 5 000 PLN капитале. Юридический адрес после первого года - 200 PLN/мес.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 15 września 2000 r. - Kodeks spółek handlowych (rozdz. III - Spółka z o.o.)',
        'Ustawa z dnia 20 sierpnia 1997 r. o Krajowym Rejestrze Sądowym',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy (CRBR)',
        'Ustawa z dnia 11 marca 2004 r. o podatku VAT',
        'Ustawa z dnia 15 lutego 1992 r. o podatku dochodowym od osób prawnych (CIT)'
      ]
    },
    faq: [
      { q: 'Можно ли зарегистрировать без приезда в Польшу?', a: 'Да. Через S24 - нужен профиль zaufany или kwalifikowany podpis (оформляется удалённо за 1-2 дня через ProfilZaufany.pl или KIR). Нотариально - через pełnomocnictwo: вы подписываете доверенность у польского консула или с apostille, мы регистрируем за вас.' },
      { q: 'Какой PESEL нужен?', a: 'Для члена правления (członek zarządu) - обязательный PESEL для подачи finansowych sprawozdań в KRS электронно. Для wspólnika (учредителя) - необязателен, можно паспортные данные. Делаем PESEL за 7-14 дней.' },
      { q: 'S24 или нотариально - что лучше?', a: 'S24 - быстрее (24 ч), дешевле (250 PLN), но статут шаблонный, без индивидуальных правил. Нотариально - медленнее (5-7 дней), дороже (700+ PLN), но позволяет: классы udziałów, asymmetric voting, esop, особые условия выхода wspólników, передачи в наследство. Для крупных проектов - нотариально.' },
      { q: 'Какой CIT платит Sp. z o.o.?', a: '9% - для małych podatników (оборот < 2 млн EUR в год) на первый год + год превышения. 19% - стандартный. Estonian CIT (CIT estoński - эстонская модель CIT) - отложенный налог до выплаты дивидендов, 0% если реинвестируете. IP Box - 5% на доходы от программистской ИС.' },
      { q: 'Можно ли иностранцу быть единственным учредителем и членом правления?', a: 'Да, если у него есть PESEL. Ограничений по гражданству нет - Sp. z o.o. может быть 100% иностранной. Но 1 учредитель = 1 wspólnik, и тогда фирма платит ZUS как самозанятый - это удорожает. Решается добавлением 2-го wspólnika с минимальной долей.' },
      { q: 'Сколько стоит содержание Sp. z o.o.?', a: 'Бухгалтерия - от 800 PLN/мес для малой фирмы (5 операций), 1 500-3 000 PLN/мес для среднего бизнеса. Юридический адрес - 200-400 PLN/мес. Sprawozdanie finansowe в KRS - 600-1 200 PLN/год. Минимум - 12 000-15 000 PLN/год без ZUS.' },
      { q: 'Что с ZUS у учредителя?', a: 'Если в Sp. z o.o. 1 wspólnik - он платит ZUS как jednoosobowy przedsiębiorca (~1 700 PLN/мес). Если 2+ wspólnika - ZUS не платят (только при найме сотрудников или B2B контракте). Это критическое решение - обсуждаем на консультации.' }
    ],
    related: ['gotowe-firmy', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Sp. z o.o. за 7 рабочих дней',
    ctaSubtitle: 'Бесплатная консультация: оптимизируем структуру под ваш бизнес. Под ключ - от 4 800 PLN, готовые компании за 24 часа - от 6 500 PLN.'
  },
  pl: {
    slug: 'rejestracja-sp-z-oo',
    group: 'business',
    icon: 'landmark',
    badge: 'Sp. z o.o. · 7-10 dni roboczych pod klucz',
    title: 'Rejestracja Sp. z o.o.',
    subtitle: 'Spółka z o.o. w 7-10 dni - KRS, NIP, REGON, VAT, konto bankowe',
    lead: 'Sp. z o.o. - najpopularniejsza forma dla cudzoziemców. Minimalny kapitał 5 000 PLN, odpowiedzialność ograniczona do wkładu, dostępna bez TRC. Rejestrujemy przez S24 w 24 godziny lub notarialnie w 5-7 dni. W cenie adres siedziby w Warszawie, otwarcie konta w mBanku/ING/PKO, rejestracja VAT i wpis ZUS.',
    facts: [
      { label: 'Kapitał minimalny', value: '5 000 PLN', note: 'kapitał zakładowy' },
      { label: 'KRS - S24', value: '24-48 h', note: 'online ePUAP' },
      { label: 'KRS - notarialnie', value: '5-7 dni', note: 'swoboda w umowie' },
      { label: 'CIT', value: '9% / 19%', note: '9% - mali (do 2 mln €)' }
    ],
    grounds: {
      title: 'Kiedy wybrać Sp. z o.o.',
      subtitle: 'Najpopularniejsza forma dla cudzoziemców. Bez TRC, można prowadzić z zagranicy, chroni majątek osobisty.',
      items: [
        { title: 'Cudzoziemiec bez TRC', desc: 'JDG wymaga karty pobytu z prawem do prowadzenia. Sp. z o.o. - nie. Może być 100% nierezydencka.' },
        { title: 'Ochrona majątku', desc: 'Odpowiedzialność do wkładu. Długi spółki nie obciążają wspólnika (poza zarządem przy zaniedbaniach).' },
        { title: 'Inwestorzy', desc: 'Podział kapitału, klasy udziałów, ESOP, różne prawa głosu i dywidendy.' },
        { title: 'Klienci UE', desc: 'EU VAT, OSS/IOSS, akceptacja przez korporacje.' },
        { title: 'IP Box i Estoński CIT', desc: '5% IP Box dla programistów, odroczony CIT do wypłaty dywidendy - tylko Sp. z o.o.' },
        { title: 'Karta pobytu przez biznes', desc: 'Aktywna spółka (przychód, 2+ pracowników) - podstawa karty pobytu dla samozatrudnionych.' }
      ]
    },
    timeline: {
      title: 'Etapy rejestracji',
      subtitle: 'Od pierwszego kontaktu do pełnego startu - 7-14 dni roboczych.',
      steps: [
        { title: 'Bezpłatna konsultacja', duration: '30 min', desc: 'Struktura, podatki (CIT/Estoński/IP Box), PKD. S24 czy notarialnie.' },
        { title: 'Umowa spółki', duration: '1-2 dni', desc: 'PKD, udziały, zarząd, sposób reprezentacji, dywidendy.' },
        { title: 'Podpisanie', duration: '1 dzień', desc: 'S24 - profil zaufany / podpis kwalifikowany. Notarialnie - w kancelarii.' },
        { title: 'Wpis do KRS', duration: '24 h (S24) / 5-7 dni', desc: 'KRS nadaje numer, NIP i REGON automatycznie.' },
        { title: 'CRBR (UBO)', duration: '7 dni', desc: 'Centralny Rejestr Beneficjentów. Kara do 1 mln PLN za zwłokę.' },
        { title: 'Konto bankowe', duration: '3-7 dni', desc: 'mBank, ING, PKO, Pekao, Santander. KYC, weryfikacja wideo.' },
        { title: 'Rejestracja VAT', duration: '7-30 dni', desc: 'VAT-R. Zwolnienie do 200 000 PLN. UE - VAT-UE obowiązkowo.' },
        { title: 'ZUS', duration: '7 dni', desc: 'Przy zatrudnieniu - ZUS-ZPA i ZUS-ZUA dla pracowników.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Większość przygotowujemy my.',
      items: [
        'Skany paszportów wspólników i zarządu',
        'PESEL członka zarządu (jeśli brak - załatwiamy)',
        'Adresy wspólników i zarządu (CRBR)',
        '3 propozycje nazwy firmy',
        'Kody PKD',
        'Struktura udziałów',
        'Sposób reprezentacji (jednoosobowa / łączna)',
        'Adres siedziby - nasz w Warszawie w cenie',
        'Profil zaufany / podpis kwalifikowany'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena pod klucz. Opłaty osobno.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · struktura' },
        { label: 'S24', value: 'od 1 800 PLN', note: 'KRS + NIP + adres 12 mies.' },
        { label: 'Notarialnie', value: 'od 3 500 PLN', note: 'Indywidualna umowa' },
        { label: 'Pod klucz + bank + VAT', value: 'od 4 800 PLN', note: 'KRS + bank + VAT-R + księgowość' }
      ],
      note: 'Opłaty: KRS 250 (S24) / 500 (notarialnie), MSiG 100 PLN, notariusz 700-1 200 PLN przy kapitale 5 000 PLN.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 15 września 2000 r. - Kodeks spółek handlowych (rozdz. III)',
        'Ustawa z 20 sierpnia 1997 r. o KRS',
        'Ustawa z 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy (CRBR)',
        'Ustawa z 11 marca 2004 r. o VAT',
        'Ustawa z 15 lutego 1992 r. o CIT'
      ]
    },
    faq: [
      { q: 'Bez przyjazdu do Polski?', a: 'Tak. S24 - profil zaufany lub podpis kwalifikowany (online 1-2 dni). Notarialnie - pełnomocnictwo z apostille u konsula.' },
      { q: 'Czy potrzebny PESEL?', a: 'Dla członka zarządu - tak (sprawozdania w KRS). Dla wspólnika - nie. Załatwiamy PESEL w 7-14 dni.' },
      { q: 'S24 czy notarialnie?', a: 'S24 - szybciej (24 h), taniej (250 PLN), szablonowa umowa. Notarialnie - wolniej, drożej, ale klasy udziałów, ESOP, asymetria głosów.' },
      { q: 'Jaki CIT?', a: '9% dla małych (< 2 mln €) - pierwszy rok + rok przekroczenia. 19% standard. Estoński - odroczony do dywidendy. IP Box - 5%.' },
      { q: 'Jednoosobowa Sp. z o.o.?', a: 'Tak, ale 1-os. wspólnik płaci ZUS jak samozatrudniony (~1 700 PLN/mies.). Rozwiązanie - 2-go wspólnika z minimalnym udziałem.' },
      { q: 'Koszt utrzymania?', a: 'Księgowość 800-3 000 PLN/mies., adres 200-400 PLN/mies., sprawozdanie 600-1 200 PLN/rok. Minimum 12 000-15 000 PLN/rok.' },
      { q: 'ZUS u wspólnika?', a: '1 wspólnik = ZUS jak samozatrudniony. 2+ wspólników - bez ZUS (oprócz pracowników i B2B).' }
    ],
    related: ['gotowe-firmy', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Sp. z o.o. w 7 dni roboczych',
    ctaSubtitle: 'Bezpłatna konsultacja, optymalizacja struktury. Pod klucz - od 4 800 PLN.'
  },
  en: {
    slug: 'rejestracja-sp-z-oo',
    group: 'business',
    icon: 'landmark',
    badge: 'Sp. z o.o. · 7-10 business days turnkey',
    title: 'Sp. z o.o. registration',
    subtitle: 'Polish LLC in 7-10 days - KRS, NIP, REGON, VAT, bank account',
    lead: 'Sp. z o.o. (limited liability company) is the most popular Polish company form for foreign founders. Minimum capital 5,000 PLN, liability capped at the contribution, available without a residence card. We register via S24 in 24 hours or via notary in 5-7 days. Includes Warsaw registered office, account opening at mBank/ING/PKO, VAT registration and ZUS setup.',
    facts: [
      { label: 'Min. capital', value: '5,000 PLN', note: 'kapitał zakładowy' },
      { label: 'KRS - S24', value: '24-48 h', note: 'online via ePUAP' },
      { label: 'KRS - notary', value: '5-7 days', note: 'tailored articles' },
      { label: 'CIT', value: '9% / 19%', note: '9% - small (under 2M EUR)' }
    ],
    grounds: {
      title: 'When to choose Sp. z o.o.',
      subtitle: 'The go-to vehicle for non-EU founders. No TRC required, manageable from abroad, ring-fences personal assets.',
      items: [
        { title: 'Foreigner without TRC', desc: 'Sole proprietorship (JDG) requires a residence card. Sp. z o.o. doesn\'t. Can be 100% foreign-owned.' },
        { title: 'Personal asset protection', desc: 'Liability limited to capital contribution. Company debts don\'t cascade to shareholders (except board liability for negligence).' },
        { title: 'Investor-ready', desc: 'Share classes, voting asymmetry, ESOP plans, special exit / inheritance terms.' },
        { title: 'EU clients', desc: 'EU VAT number, OSS/IOSS, accepted by enterprise procurement.' },
        { title: 'IP Box and Estonian CIT', desc: '5% IP Box for software IP. Estonian CIT defers tax until dividend payout - Sp. z o.o. only.' },
        { title: 'Residence permit through business', desc: 'Active Sp. z o.o. (revenue, 2+ employees) - basis for self-employed residence permit.' }
      ]
    },
    timeline: {
      title: 'Registration steps',
      subtitle: 'From first call to full operations - 7-14 business days.',
      steps: [
        { title: 'Free consultation', duration: '30 min', desc: 'Structure, taxes (CIT / Estonian / IP Box), PKD codes. S24 vs notary.' },
        { title: 'Articles of association', duration: '1-2 days', desc: 'PKD, shares, board, representation, dividend policy.' },
        { title: 'Signing', duration: '1 day', desc: 'S24 - Polish trusted profile or qualified e-signature. Notary - in person or by power of attorney.' },
        { title: 'KRS filing', duration: '24 h (S24) / 5-7 days', desc: 'KRS issues number, NIP, REGON automatically.' },
        { title: 'CRBR (UBO)', duration: '7 days', desc: 'Beneficial owner register. Up to 1M PLN fine for late filing.' },
        { title: 'Bank account', duration: '3-7 days', desc: 'mBank, ING, PKO, Pekao, Santander. KYC, video verification.' },
        { title: 'VAT registration', duration: '7-30 days', desc: 'VAT-R. Exemption up to 200k PLN. EU - VAT-UE mandatory.' },
        { title: 'ZUS setup', duration: '7 days', desc: 'When hiring - ZUS-ZPA and ZUS-ZUA per employee.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Most paperwork prepared by us.',
      items: [
        "Founders' and board passports",
        'PESEL for board member (we obtain if missing)',
        "Founders' and board addresses (CRBR)",
        '3 company name options',
        'PKD codes',
        'Share structure',
        'Representation (single / joint)',
        'Registered office - ours in Warsaw included',
        'Trusted profile / qualified e-signature'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed turnkey price. State fees billed separately.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · structure & taxes' },
        { label: 'S24', value: 'from 1,800 PLN', note: 'KRS + NIP + 12-mo office' },
        { label: 'Notary', value: 'from 3,500 PLN', note: 'Custom articles' },
        { label: 'Turnkey + bank + VAT', value: 'from 4,800 PLN', note: 'KRS + bank + VAT-R + bookkeeping' }
      ],
      note: 'State fees: KRS 250 PLN (S24) or 500 PLN (notary), MSiG 100 PLN, notary fees 700-1,200 PLN at 5,000 PLN capital.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Commercial Companies Code of 15 September 2000 - Chapter III (Sp. z o.o.)',
        'KRS Act of 20 August 1997',
        'AML Act of 1 March 2018 (CRBR beneficial owner register)',
        'VAT Act of 11 March 2004',
        'CIT Act of 15 February 1992'
      ]
    },
    faq: [
      { q: 'Without coming to Poland?', a: 'Yes. S24 - Polish trusted profile or qualified signature (issued remotely in 1-2 days). Notary - power of attorney signed before a Polish consul or notarized + apostille.' },
      { q: 'Need PESEL?', a: 'Board member - yes (electronic financial filings to KRS). Shareholder - no, passport is enough. We obtain PESEL in 7-14 days.' },
      { q: 'S24 or notary?', a: 'S24 - fast (24 h), cheap (250 PLN), boilerplate articles. Notary - slower, pricier, allows share classes, voting asymmetry, ESOP, custom exit / inheritance rules. Larger projects - notary.' },
      { q: 'CIT rate?', a: '9% for small (< 2M EUR) - first year + crossover year. 19% standard. Estonian CIT - deferred until dividend. IP Box - 5% on software IP.' },
      { q: 'Single-shareholder Sp. z o.o.?', a: 'Allowed. But the sole shareholder pays ZUS as self-employed (~1,700 PLN/month). Solution: add a second shareholder with a token share.' },
      { q: 'Running cost?', a: 'Bookkeeping 800-3,000 PLN/month, registered office 200-400 PLN/month, annual filings 600-1,200 PLN. Minimum 12,000-15,000 PLN/year.' },
      { q: 'ZUS for shareholders?', a: '1 shareholder = ZUS as self-employed. 2+ - no ZUS (except for employees or B2B contracts).' }
    ],
    related: ['gotowe-firmy', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Sp. z o.o. in 7 business days',
    ctaSubtitle: 'Free consultation. Turnkey from 4,800 PLN. Shelf companies live in 24 hours from 6,500 PLN.'
  },
  tr: {
    slug: 'rejestracja-sp-z-oo',
    group: 'business',
    icon: 'landmark',
    badge: 'Sp. z o.o. · 7-10 iş gününde anahtar teslim',
    title: 'Sp. z o.o. (Polonya limited şirketi) kuruluşu',
    subtitle: 'Polonya limited şirket 7-10 iş gününde - KRS, NIP, REGON, VAT, banka hesabı',
    lead: 'Sp. z o.o. (spółka z ograniczoną odpowiedzialnością - limited şirket), Polonya\'nın limited şirket biçimidir. Asgari sermaye 5.000 PLN, sorumluluk paya kadar sınırlı, oturum kartı (TRC) olmayan yabancılar için de uygun. S24 sistemi üzerinden 24 saatte veya genişletilmiş esas sözleşmeyle noterli olarak 5-7 günde kuruyoruz. Pakete Varşova\'da kayıtlı adres, mBank/ING/PKO BP\'de banka hesabı açılışı, VAT (KDV) kaydı ve ZUS\'ta tescil dahildir.',
    facts: [
      { label: 'Asgari sermaye', value: '5.000 PLN', note: 'kapitał zakładowy' },
      { label: 'KRS - S24', value: '24-48 sa', note: 'çevrimiçi - ePUAP üzerinden' },
      { label: 'KRS - noterli', value: '5-7 gün', note: 'esas sözleşmede serbestlik' },
      { label: 'CIT (kurumlar vergisi)', value: '%9 / %19', note: '%9 - cirosu 2 mln EUR altı küçük mükellefler' }
    ],
    grounds: {
      title: 'Sp. z o.o. ne zaman tercih edilir',
      subtitle: 'Sp. z o.o. yabancılar için en yaygın şirket biçimidir. TRC zorunluluğu yoktur, yurt dışından yönetilebilir, kişisel mal varlığını korur.',
      items: [
        { title: 'TRC olmayan yabancı', desc: 'JDG (şahıs şirketi), iş hakkı içeren bir oturum izni gerektirir. Sp. z o.o. ise gerektirmez. Yurt dışında olan herhangi bir yabancı adına kurulabilir.' },
        { title: 'Kişisel mal varlığının korunması', desc: 'Sorumluluk sermayedeki paya kadar sınırlıdır. İflas durumunda şirket borçları ortağa geçmez - yalnızca yönetim kurulu üyesinin ihmali halinde sorumluluk doğar.' },
        { title: 'Yatırımcılarla çalışma', desc: 'Sermayenin udziały (paylar) üzerinden bölünmesi, ek ortak girişi, ESOP, farklı oy hakkı ve temettü oranlarına sahip pay sınıfları oluşturulması imkanı.' },
        { title: 'AB müşterileriyle çalışma', desc: 'EU VAT (AB KDV) numarası, OSS / IOSS erişimi, JDG\'nin kabul edilmediği büyük kurumsal müşterilerle çalışabilme.' },
        { title: 'IP Box ve Estonyan CIT', desc: 'Fikri mülkiyet gelirlerinde (yazılımcılar) %5 indirimli oran, temettü dağıtımına kadar ertelenmiş CIT - yalnızca Sp. z o.o. için.' },
        { title: 'Şirket üzerinden oturum izni başvurusu', desc: 'Aktif Sp. z o.o. faaliyeti (gelir, en az 2 sigortalı çalışan) - işletme veya samozatrudniony (serbest meslek) gerekçesiyle karta pobytu için yasal temel oluşturur.' }
      ]
    },
    timeline: {
      title: 'Sp. z o.o. kuruluş aşamaları',
      subtitle: 'İlk görüşmeden tam operasyonel hale (KRS + banka + VAT + muhasebe) - 7-14 iş günü.',
      steps: [
        { title: 'Ücretsiz danışmanlık', duration: '30 dk', desc: 'Ortaklık yapısı, vergi rejimi (CIT / Estonyan CIT / IP Box), faaliyet konuları (PKD kodları). S24 ve noterli arasında karar veririz.' },
        { title: 'Esas sözleşme hazırlığı', duration: '1-2 gün', desc: 'Umowa spółki (şirket sözleşmesi): PKD kodları, paylar, yönetim kurulu üyeleri, sposób reprezentacji (temsil yetkisi), temettü politikası. S24\'te şablon, noterli kuruluşta bireysel sözleşme.' },
        { title: 'İmza', duration: '1 gün', desc: 'S24\'te profil zaufany (e-devlet kimliği) veya kwalifikowany podpis (nitelikli elektronik imza) ile elektronik imza. Noterli kuruluş Varşova\'da, vekaletnameyle uzaktan da yapılabilir.' },
        { title: 'KRS\'ye başvuru', duration: '24 sa (S24) / 5-7 gün', desc: 'Portal S24 veya PRS üzerinden elektronik. KRS, NIP ve REGON numaralarını otomatik atar. Müvekkili bilgilendiririz.' },
        { title: 'CRBR (UBO kaydı)', duration: 'kuruluştan 7 gün içinde', desc: 'Centralny Rejestr Beneficjentów Rzeczywistych (Merkezi Gerçek Faydalanıcı Sicili) zorunlu kayıt. Geç bildirim cezası 1 mln PLN\'ye kadar.' },
        { title: 'Banka hesabı', duration: '3-7 gün', desc: 'mBank, ING, PKO BP, Bank Pekao veya Santander\'de açılış. KYC süreci: belgeler, görüntülü kimlik doğrulama, başvuru formunun doldurulması.' },
        { title: 'VAT kaydı', duration: '7-30 gün', desc: 'VAT-R başvurusu. 200.000 PLN altı ciroda muafiyet vardır, talep edilirse vazgeçilebilir. AB hizmetleri için VAT-UE zorunlu.' },
        { title: 'ZUS kaydı', duration: '7 gün', desc: 'İlk çalışan veya B2B sözleşmesi durumunda işveren kaydı. Her çalışan için ZUS-ZPA, ZUS-ZUA bildirimleri.' }
      ]
    },
    documents: {
      title: 'Kuruluş için gerekenler',
      subtitle: 'Çoğunu biz hazırlıyoruz. Sizden istenen: pasaport, adres, onay yazıları.',
      items: [
        'Ortakların ve yönetim kurulu üyelerinin pasaport taraması',
        'PESEL - yönetim kurulu üyesi için zorunlu (yoksa biz çıkartıyoruz)',
        'Ortakların ve yönetim kurulu üyelerinin ev adresleri (CRBR için)',
        'Şirket adı (KRS\'de çakışma olmasın diye 3 alternatif)',
        'PKD kodları (faaliyet konuları - iş planınıza göre seçeriz)',
        'Pay yapısı (her wspólnik\'in udział - pay - yüzdesi)',
        'Sposób reprezentacji (temsil yetkisi: tek başına veya birlikte)',
        'Şirket merkez adresi - Varşova\'daki adresimiz fiyata dahil veya kendi adresiniz',
        'S24 için profil zaufany / kwalifikowany podpis (gerekirse biz çıkartıyoruz)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Anahtar teslim sabit fiyat. Resmi harçlar ve noter ayrıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · yapı ve vergi planlaması' },
        { label: 'S24 üzerinden Sp. z o.o.', value: '1.800 PLN\'den', note: 'KRS + NIP + 12 ay merkez adresi' },
        { label: 'Noterli Sp. z o.o.', value: '3.500 PLN\'den', note: 'Bireysel esas sözleşme' },
        { label: 'Anahtar teslim + banka + VAT', value: '4.800 PLN\'den', note: 'KRS + banka + VAT-R + muhasebe' }
      ],
      note: 'Resmi harçlar: KRS 250 PLN (S24) veya 500 PLN (noterli), Monitor Sądowy ilanı 100 PLN, 5.000 PLN sermayede noter ücreti yaklaşık 700-1.200 PLN. İlk yıldan sonra merkez adresi - 200 PLN/ay.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 15 września 2000 r. - Kodeks spółek handlowych (Ticari Şirketler Kanunu, bölüm III - Sp. z o.o.)',
        'Ustawa z dnia 20 sierpnia 1997 r. o Krajowym Rejestrze Sądowym (KRS Kanunu)',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy (Aklama ile Mücadele Kanunu - CRBR)',
        'Ustawa z dnia 11 marca 2004 r. o podatku VAT (KDV Kanunu)',
        'Ustawa z dnia 15 lutego 1992 r. o podatku dochodowym od osób prawnych (CIT - Kurumlar Vergisi Kanunu)'
      ]
    },
    faq: [
      { q: 'Polonya\'ya gelmeden kurabilir miyim?', a: 'Evet. S24 üzerinden - profil zaufany veya kwalifikowany podpis (1-2 günde uzaktan ProfilZaufany.pl veya KIR aracılığıyla çıkartılır). Noterli yöntemde - pełnomocnictwo (vekaletname) ile: vekaletnameyi Polonya konsolosluğunda imzalar veya apostille ile gönderirsiniz, biz kuruluşu sizin adınıza yaparız.' },
      { q: 'PESEL şart mı?', a: 'Yönetim kurulu üyesi (członek zarządu) için zorunludur - mali tabloların KRS\'ye elektronik bildirimi için. Wspólnik (ortak) için zorunlu değildir, pasaport bilgileri yeterli olur. PESEL\'i 7-14 günde çıkartıyoruz.' },
      { q: 'S24 mü, noterli kuruluş mu?', a: 'S24 - daha hızlı (24 sa), daha ucuz (250 PLN), ancak şablon bir esas sözleşme. Noterli - daha yavaş (5-7 gün), daha pahalı (700+ PLN), ama udziały sınıfları, asimetrik oy hakkı, ESOP, ortakların çıkış koşulları ve miras hükümleri gibi özelleştirmelere imkan tanır. Büyük projeler için noterli yol önerilir.' },
      { q: 'Sp. z o.o. hangi CIT oranını öder?', a: '%9 - mali podatnicy (yıllık cirosu 2 mln EUR altı küçük mükellefler) için ilk yıl + eşik aşıldığı yıl. %19 - standart oran. Estonyan CIT - temettü dağıtımına kadar erteleme, yatırıma çevrilirse %0. IP Box - yazılım fikri mülkiyetinden gelirler için %5.' },
      { q: 'Yabancı tek ortak ve tek yönetim kurulu üyesi olabilir mi?', a: 'Evet, PESEL\'i varsa. Vatandaşlık kısıtı yoktur - Sp. z o.o. %100 yabancı sermayeli olabilir. Ancak 1 ortak = 1 wspólnik durumunda şirket, ortağı serbest meslek erbabı gibi ZUS\'a tescil eder ve maliyet artar. Çözüm: ikinci bir ortağın asgari payla ilave edilmesidir.' },
      { q: 'Sp. z o.o.\'nun yıllık bakım maliyeti?', a: 'Muhasebe - küçük şirket için 800 PLN\'den (5 işlem), orta ölçekli işletme için 1.500-3.000 PLN/ay. Merkez adresi - 200-400 PLN/ay. KRS\'ye yıllık sprawozdanie finansowe (mali tablo) - 600-1.200 PLN/yıl. ZUS hariç asgari toplam: 12.000-15.000 PLN/yıl.' },
      { q: 'Ortak için ZUS nasıl işliyor?', a: 'Sp. z o.o.\'da 1 wspólnik varsa - jednoosobowy przedsiębiorca (tek kişilik girişimci) gibi ZUS öder (~1.700 PLN/ay). 2 veya daha çok wspólnik varsa - ZUS yok (yalnızca çalışan veya B2B sözleşmesi durumunda). Kritik bir karardır - danışmanlıkta detaylıca konuşuyoruz.' }
    ],
    related: ['gotowe-firmy', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Sp. z o.o. 7 iş gününde',
    ctaSubtitle: 'Ücretsiz danışmanlık: yapıyı işinize göre optimize ederiz. Anahtar teslim - 4.800 PLN\'den. 24 saatte aktif hazır şirketler - 6.500 PLN\'den.'
  },
  uk: {
    slug: 'rejestracja-sp-z-oo',
    group: 'business',
    icon: 'landmark',
    badge: 'Sp. z o.o. · 7–10 робочих днів під ключ',
    title: 'Реєстрація Sp. z o.o.',
    subtitle: 'Польська ТОВ за 7–10 робочих днів — KRS, NIP, REGON, VAT, банківський рахунок',
    lead: 'Sp. z o.o. (spółka z ograniczoną odpowiedzialnością) — польський аналог ТОВ. Мінімальний капітал 5 000 PLN, відповідальність обмежена внеском, підходить і іноземцю без карти побуту. Реєструємо через S24 за 24 години або нотаріально з розширеним статутом за 5–7 днів. Включаємо юридичну адресу у Варшаві, відкриття рахунку в mBanku, ING або PKO BP, реєстрацію VAT і постановку на облік у ZUS.',
    facts: [
      { label: 'Мінімальний капітал', value: '5 000 PLN', note: 'kapitał zakładowy' },
      { label: 'KRS — S24', value: '24–48 год', note: 'онлайн через ePUAP' },
      { label: 'KRS — нотаріально', value: '5–7 днів', note: 'свобода у статуті' },
      { label: 'CIT', value: '9% / 19%', note: '9% — малі до 2 млн EUR обороту' }
    ],
    grounds: {
      title: 'Коли обирають Sp. z o.o.',
      subtitle: 'Sp. z o.o. — найпопулярніша форма для іноземців. Не вимагає карти побуту, можна вести з-за кордону, захищає особисте майно.',
      items: [
        { title: 'Іноземець без карти побуту', desc: 'JDG потребує карти побуту з правом на бізнес. Sp. z o.o. — ні. Реєструється на будь-якого нерезидента, навіть того, хто перебуває за кордоном.' },
        { title: 'Захист особистого майна', desc: 'Відповідальність обмежена внеском у капітал. При банкрутстві борги фірми не переходять на засновника — лише зобов’язання члена правління за зловживань.' },
        { title: 'Робота з інвесторами', desc: 'Поділ капіталу за udziałach (частками), можливість ввести співінвестора, зробити esop, створити класи udziałów з різними правами голосу і дивідендів.' },
        { title: 'Робота з EU-клієнтами', desc: 'EU VAT-номер, доступ до OSS / IOSS, можливість працювати з великими корпоративними клієнтами, для яких JDG неприйнятна.' },
        { title: 'IP Box і Estoński CIT', desc: 'Пільгова ставка 5% на доходи від ІС (програмісти), відкладений CIT до виплати дивідендів — лише Sp. z o.o.' },
        { title: 'Подання на карту побуту через бізнес', desc: 'Активна діяльність Sp. z o.o. (дохід, наймання 2+ співробітників) — підстава для karty pobytu за бізнесом або dla samozatrudnionych.' }
      ]
    },
    timeline: {
      title: 'Етапи реєстрації Sp. z o.o.',
      subtitle: 'Від першого дзвінка до повного запуску (KRS + банк + VAT + бухгалтер) — 7–14 робочих днів.',
      steps: [
        { title: 'Безкоштовна консультація', duration: '30 хв', desc: 'Структура засновників, податкова форма (CIT / Estoński CIT / IP Box), вид діяльності (PKD-коди). Вирішуємо S24 чи нотаріально.' },
        { title: 'Підготовка статуту', duration: '1–2 дні', desc: 'Umowa spółki: PKD-коди, частки, члени правління, sposób reprezentacji, дивідендна політика. S24 — шаблон, нотаріально — індивідуально.' },
        { title: 'Підписання', duration: '1 день', desc: 'S24 — електронні підписи через profil zaufany / kwalifikowany. Нотаріально — у нотаріуса у Варшаві (можемо дистанційно через pełnomocnika).' },
        { title: 'Подання в KRS', duration: '24 год (S24) / 5–7 днів', desc: 'Електронно через Portal S24 або PRS. KRS присвоює номер, NIP, REGON автоматично. Повідомляємо klienta.' },
        { title: 'CRBR (UBO)', duration: '7 днів від реєстрації', desc: 'Обов’язкова реєстрація бенефіціарів у Centralnym Rejestrze Beneficjentów Rzeczywistych. Штраф 1 млн PLN за пропуск.' },
        { title: 'Банківський рахунок', duration: '3–7 днів', desc: 'Відкриваємо в mBanku, ING, PKO BP, Bank Pekao або Santander. KYC-процедура: документи, відеоверифікація, заповнення анкети.' },
        { title: 'VAT-реєстрація', duration: '7–30 днів', desc: 'Wniosek VAT-R. При обороті < 200 000 PLN — звільнення, можна відмовитися. Для послуг ЄС — обов’язково VAT-UE.' },
        { title: 'ZUS постановка', duration: '7 днів', desc: 'Реєстрація роботодавця при найманні першого співробітника / контракті B2B. ZUS-ZPA, ZUS-ZUA для кожного працівника.' }
      ]
    },
    documents: {
      title: 'Що потрібно для реєстрації',
      subtitle: 'Більшу частину готуємо ми. Від засновника — паспорти, адреса, згоди.',
      items: [
        'Скан паспорта засновника(-ів) і членів правління',
        'PESEL — обов’язково для члена правління (оформлюємо окремо, якщо немає)',
        'Адреса засновника і членів правління (для CRBR)',
        'Назва фірми (3 варіанти на випадок дублів у KRS)',
        'PKD-коди (види діяльності — обираємо за планом бізнесу)',
        'Структура часток (% udziałów кожного wspólnika)',
        'Sposób reprezentacji (одноосібний / спільний для членів правління)',
        'Юридична адреса — наша у Варшаві у ціні або ваша',
        'Profil zaufany / kwalifikowany підпис для S24 (допомагаємо оформити)'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Фіксована ціна під ключ. Держмита й нотаріус — окремо.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30 хвилин · структура і податки' },
        { label: 'Sp. z o.o. через S24', value: 'від 1 800 PLN', note: 'KRS + NIP + адреса 12 міс.' },
        { label: 'Sp. z o.o. нотаріально', value: 'від 3 500 PLN', note: 'Індивідуальний статут' },
        { label: 'Під ключ + банк + VAT', value: 'від 4 800 PLN', note: 'KRS + банк + VAT-R + бухгалтер' }
      ],
      note: 'Держмита: KRS 250 PLN (S24) або 500 PLN (нотаріально), Monitor Sądowy 100 PLN, нотаріус ~700–1 200 PLN за капіталу 5 000 PLN. Юридична адреса після першого року — 200 PLN/міс.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 15 września 2000 r. — Kodeks spółek handlowych (rozdz. III — Spółka z o.o.)',
        'Ustawa z dnia 20 sierpnia 1997 r. o Krajowym Rejestrze Sądowym',
        'Ustawa z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy (CRBR)',
        'Ustawa z dnia 11 marca 2004 r. o podatku VAT',
        'Ustawa z dnia 15 lutego 1992 r. o podatku dochodowym od osób prawnych (CIT)'
      ]
    },
    faq: [
      { q: 'Чи можна зареєструвати без приїзду в Польщу?', a: 'Так. Через S24 — потрібен profil zaufany або kwalifikowany podpis (оформлюється віддалено за 1–2 дні через ProfilZaufany.pl або KIR). Нотаріально — через pełnomocnictwo: ви підписуєте довіреність у польського консула або з apostille, ми реєструємо за вас.' },
      { q: 'Який PESEL потрібен?', a: 'Для члена правління (członek zarządu) — обов’язковий PESEL для подання finansowych sprawozdań у KRS електронно. Для wspólnika (засновника) — необов’язковий, можна паспортні дані. Робимо PESEL за 7–14 днів.' },
      { q: 'S24 чи нотаріально — що краще?', a: 'S24 — швидше (24 год), дешевше (250 PLN), але статут шаблонний, без індивідуальних правил. Нотаріально — повільніше (5–7 днів), дорожче (700+ PLN), але дозволяє: класи udziałów, asymmetric voting, esop, особливі умови виходу wspólników, передачу у спадок. Для великих проєктів — нотаріально.' },
      { q: 'Який CIT платить Sp. z o.o.?', a: '9% — для małych podatników (оборот < 2 млн EUR на рік) на перший рік + рік перевищення. 19% — стандартний. Estoński CIT (CIT estoński — естонська модель CIT) — відкладений податок до виплати дивідендів, 0%, якщо реінвестуєте. IP Box — 5% на доходи від програмістської ІС.' },
      { q: 'Чи може іноземець бути єдиним засновником і членом правління?', a: 'Так, якщо в нього є PESEL. Обмежень за громадянством немає — Sp. z o.o. може бути 100% іноземною. Але 1 засновник = 1 wspólnik, і тоді фірма платить ZUS як самозайнятий — це здорожує. Вирішується додаванням 2-го wspólnika з мінімальною часткою.' },
      { q: 'Скільки коштує утримання Sp. z o.o.?', a: 'Бухгалтерія — від 800 PLN/міс. для малої фірми (5 операцій), 1 500–3 000 PLN/міс. для середнього бізнесу. Юридична адреса — 200–400 PLN/міс. Sprawozdanie finansowe у KRS — 600–1 200 PLN/рік. Мінімум — 12 000–15 000 PLN/рік без ZUS.' },
      { q: 'Що з ZUS у засновника?', a: 'Якщо у Sp. z o.o. 1 wspólnik — він платить ZUS як jednoosobowy przedsiębiorca (~1 700 PLN/міс.). Якщо 2+ wspólników — ZUS не платять (лише при найманні працівників або B2B-контракті). Це критичне рішення — обговорюємо на консультації.' }
    ],
    related: ['gotowe-firmy', 'jdg', 'podatki-ksiegowosc'],
    ctaTitle: 'Sp. z o.o. за 7 робочих днів',
    ctaSubtitle: 'Безкоштовна консультація: оптимізуємо структуру під ваш бізнес. Під ключ — від 4 800 PLN, готові компанії за 24 години — від 6 500 PLN.'
  }
};

export default rejestracjaSpZOo;
