import type { ServiceEntry } from './types';

const najemKomercyjny: ServiceEntry = {
  ru: {
    slug: 'najem-komercyjny',
    group: 'realestate',
    icon: 'home',
    badge: 'Office · Retail · Warehouse',
    title: 'Аренда коммерческой недвижимости',
    subtitle: 'Договоры аренды офиса, магазина и склада для бизнеса в Польше',
    lead: 'Стандартный template arendodawcy в Польше - 30+ страниц, 80% которых защищают arendodawcę и стоят арендатору при wyjściu от 50 тыс. PLN. Анализируем umowę, торгуемся за каждую klauzulę: indeksacja czynszu, fit-out coszt, klauzula konkurencji, kary za zerwanie, gwarancja bankowa. Работаем с офисами от 50 м² до 5000 м², магазинами в galeriach handlowych и складами na peryferiach Warszawy.',
    facts: [
      { label: 'Стандартный термин', value: '3-10 лет', note: 'office · 5 лет typowy' },
      { label: 'Наши экономии', value: '15-30%', note: 'от total cost over 5 лет' },
      { label: 'Negocjowanе пункты', value: '20-30', note: 'из стандартного template' },
      { label: 'Срок review', value: '5-10 дней', note: 'от draft до подписания' }
    ],
    grounds: {
      title: 'Что договариваемся',
      subtitle: 'В стандартном шаблоне wynajemcy скрыт каждый риск-рычаг. Мы знаем, где искать.',
      items: [
        { title: 'Czynsz и indeksacja', desc: 'Базовый czynsz + indeksacja (CPI Polska, EUR Eurostat, fixed). Negotiуем cap на indeksację (max 4-5%/год), pierwszy bezpłatny rok (rent-free period 1-3 мес обычно), discounty при долгом сроке.' },
        { title: 'Fit-out и contribution', desc: 'Wynajemca часто покрывает 50-250 EUR/м² costsa подготовки (ремонт, перегородки, мебель). Negotiу­емum для нового арендатора. Бывает базовый stan, бывает «turn-key» - ключевая разница до 200к за офис 200 м².' },
        { title: 'Klauzula wcześniejszego rozwiązania', desc: 'Стандартно - нет права досрочного расторжения, kary 100% pozostałych czynszów. Negotiу­емum: prawo do rozwiązania po 3 латах с karą 6 мес czynszu, или сублизация без согласия wynajemcy.' },
        { title: 'Service charge', desc: 'Плата за общие расходы (сon­серж, охрана, отопление в коридорах, уборка). Часто скрытые расходы - изначально показывают «typically 8 EUR/m²», а в отчётах год - 15. Negotiу­ем cap (max 12 EUR/m²/год) и обязательное rocznictwo.' },
        { title: 'Klauzula konkurencji', desc: 'Wynajemca запрещает arendaторам похожие услуги. Например, в galerie handlowej - нельзя брать арендатора, продающего ту же категорию товаров в radiusu 50 m. Это защищает ваш бизнес. Negotiу­ем экспlicитно.' },
        { title: 'Gwarancja bankowa или depozyt', desc: 'Стандарт - 3-6 мес czynszu в виде gwarancji bankowej от польского банка или kasу depozyta. Дорого для startupа. Negotiу­ем: меньшая gwarancja (3 мес), parents company guarantee вместо bankowej, или нет gwarancji при долгом сроке.' },
        { title: 'Ремонт и dewастация', desc: 'При выезде - обязательство вернуть в «исходное состояние» или «пригодное для следующего арендатора». Размытое определение = десятки тысяч ремонта. Negotiу­емum: фотодокументация при wjeździe, конкретный список изменений до сдачи.' },
        { title: 'Klauzula pandemiczna', desc: 'После Covid стандартно negotiу­ется: что если будут lockdownы, force majeure, ограничения работы - czynsz уменьшается или приостанавливается. Wynajemcy неохотно соглашаются, но мы получаем 30-70% rabatu в стандартных kontraktach.' }
      ]
    },
    timeline: {
      title: 'Этапы переговоров',
      subtitle: 'От первичного анализа до подписания обычно 2-4 недели. Сложные контракты (от 1000 м² или сетевые) - до 2 месяцев.',
      steps: [
        { title: 'Бесплатная оценка', duration: '30 мин', desc: 'Описание планов: тип бизнеса, площадь, regiony интереса, бюджет. Подбираем pakiet (review / negotiacje / pełne сопровождение).' },
        { title: 'Получение draftу', duration: '1 неделя', desc: 'Wynajemca присылает свой template umowy. Часто 30-50 страниц. Загружаем в нашу analizę.' },
        { title: 'Анализ', duration: '3-5 дней', desc: 'Каждая klauzula проверяется на риск. Готовим mark-up - версия umowy с poprawkami по pozyciom.' },
        { title: 'Negotiacje', duration: '5-10 дней', desc: 'Email или встречи с правовым отделом wynajemcy. 3-5 итераций. Часто wynajemca «упирается» в 5-7 ключевых пунктах - там основная борьба.' },
        { title: 'Финальное review', duration: '1 день', desc: 'Финальная версия umowy с включёнными poprawками. Проверяем, что ничего «не вернулось» к шаблону.' },
        { title: 'Подписание', duration: '1 день', desc: 'Электронно (через ePodpis) или физически. Если корпоративная сделка - sometimes notarialne подписание.' },
        { title: 'Обязанности post-sign', duration: 'продолжительно', desc: 'Помогаем с регистрацией fit-out coscot­ов, vouchen czynszu, gwarancją, страхованием. Сопровождение первых 3 месяцев включено.' }
      ]
    },
    documents: {
      title: 'Что нужно',
      subtitle: 'От вас - план бизнеса. От wynajemcy - draft umowy.',
      items: [
        'Бизнес-план: какой бизнес, почему этот объект, длительность',
        'KRS arendaторa (Sp. z o.o.) или CEIDG (JDG)',
        'Sprawozdania finansowe za 12 мес (для wynajemcy ocena rentowności)',
        'Lista wymagań do nieruchomości (площадь, расположение, инфраструктура)',
        'Draft umowy от wynajemcy',
        'Plan zagospodarowania nieruchomości (для офиса - open-space или cabinet?)',
        'Proponowana fit-out (если нестандартная)',
        'Информация о parent company (если просят корпоративную gwarancję)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Зависит от объёма площади и сложности kontraktу.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · обзор плана' },
        { label: 'Review + advice', value: 'от 1 800 PLN', note: 'Анализ + перечень рисков + рекомендации' },
        { label: 'Negotiacje под ключ', value: 'от 4 500 PLN', note: 'Mark-up + переговоры с wynajemcą' },
        { label: 'Сложный kontrakt', value: 'от 8 500 PLN', note: '> 1000 м² · сетевые umowy · multi-site' }
      ],
      note: 'При полном сопровождении - гарантируем экономию 15%+ от total cost umowy за 5 лет (если такой не получилось - возвращаем гонорар). Для startupów - discount 30% при первой umowie.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny (rozdz. - najem, dział - najem lokalu mieszkalnego i użytkowego)',
        'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów (najem mieszkaniowy - частично применима)',
        'Ustawa z dnia 17 maja 1989 r. - Prawo budowlane (zgodność lokalu z funkcją)',
        'Ustawa z dnia 9 września 2000 r. o PCC (PCC 0,5-2% przy umowach najmu wieloletnich)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (VAT 23% на czynsz komercyjny)',
        'Ustawa z dnia 23 marca 2017 r. o kredycie hipotecznym (для commercial mortgage кредитов)'
      ]
    },
    faq: [
      { q: 'Зачем специалист, если просто арендую офис?', a: 'Стандартный template wynajemcy (арендодателя) в Польше - 30-50 страниц, 80% защищают wynajemcę. Например: «klauzula wcześniejszego rozwiązania» (статья досрочного расторжения) позволяет разорвать umowę (договор) за 3 мес если есть «незаметные» нарушения (часто фабрикованные); «service charge» (плата за обслуживание) может вырасти на 50% в год; «klauzula konkurencji» (статья о неконкуренции) может ограничить ваше развитие. Наш специалист по аренде отрабатывает 2 000 PLN на каждой 100 тыс. PLN umowi.' },
      { q: 'Сколько стоит ofis в Варшаве?', a: '2024 год: класс A в центре - 18-25 EUR/м²/мес (Mokotów, Wola, Centrum). Класс B на peryferiach (окраинах) - 11-16 EUR. Coworking - 800-1 500 PLN/мес za miejsce (за рабочее место). Service charge (плата за обслуживание) добавляет 4-8 EUR/м²/мес. Итого офис 100 м² класса B на peryferiach - обычно 7 000-12 000 PLN/мес.' },
      { q: 'Что такое rent-free period?', a: 'Бесплатный период в начале umowy (договора) - 1-3 месяца обычно. Используется на ремонт и переезд. Negotiу­ем 2-3 месяца для офиса 200+ м² или 1 месяц для меньших площадей. На rynku арендатора (когда vacancy высокий - как в 2023-24) можно получить 3-6 месяцев.' },
      { q: 'Можно ли расторгнуть досрочно?', a: 'Без специальной klauzuli (статьи) - нет, вы платите все pozostałe czynsze (оставшиеся арендные платежи). Договариваемся об «outerly window» - например, после 3 года можно разорвать с karą (штрафом) 6 мес czynszu (аренды). Это стандарт для офисов. Для magazynów (складов) и галерей - сложнее, обычно 5+ лет blocked.' },
      { q: 'Что делать с lockdownами?', a: 'После Covid в каждой umowie прописываем «klauzulę pandemiczną» (пандемическую статью): при ограничении usage помещения (lockdown, restrykcje sanitarne - санитарные ограничения) - czynsz (аренда) обнуляется или уменьшается на 50%. Wynajemcy (арендодатели) сопротивляются, но 70% соглашаются после переговоров.' },
      { q: 'Гарантия bankowa или depozyt?', a: 'Gwarancja bankowa (банковская гарантия) - wynajemcy (арендодатели) предпочитают, потому что банк гарантирует выплату. Стоит арендатору 1-2% suma rocznie (от суммы в год - provision bankowi - банковская комиссия). Depozyt (депозит) - фактически 3-6 мес czynszu лежат на rachunku wynajemcy (счету арендодателя) 5 лет - потеря процентов. Если cashflow важен - bankowa, если есть деньги - depozyt.' },
      { q: 'PCC при umowie najmu?', a: 'PCC 0,5% wartości umowy (стоимости договора) для umów na czas określony powyżej 1 roku (договоров на определённый срок свыше 1 года, sumują wszystkie czynsze za okres - суммируются все арендные платежи). Płaci arendатор (платит арендатор). Для umów krótszych или nieokreślonych (более коротких или бессрочных) - bez PCC.' }
    ],
    related: ['mswia-zezwolenie', 'rejestracja-sp-z-oo', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Аренда коммерции под ключ',
    ctaSubtitle: 'Бесплатно анализируем умову за 30 минут. Гарантируем экономию 15%+ от total cost.'
  },
  pl: {
    slug: 'najem-komercyjny',
    group: 'realestate',
    icon: 'home',
    badge: 'Office · Retail · Warehouse',
    title: 'Najem komercyjny',
    subtitle: 'Umowy najmu biura, lokalu i magazynu dla biznesu',
    lead: 'Standardowy szablon wynajmującego - 30+ stron, 80% chroni wynajmującego i kosztuje najemcę 50 tys.+ PLN przy wyjściu. Analizujemy umowę, negocjujemy każdą klauzulę: indeksacja, fit-out, klauzula konkurencji, kary, gwarancja. Biura 50-5 000 m², lokale w galeriach, magazyny.',
    facts: [
      { label: 'Standardowy okres', value: '3-10 lat', note: 'biuro 5 lat typowo' },
      { label: 'Oszczędności', value: '15-30%', note: 'od TCO 5 lat' },
      { label: 'Negocjowane punkty', value: '20-30', note: 'ze standardu' },
      { label: 'Review', value: '5-10 dni', note: 'od draftu do podpisania' }
    ],
    grounds: {
      title: 'Co negocjujemy',
      subtitle: 'W każdym szablonie ukryta dźwignia ryzyka.',
      items: [
        { title: 'Czynsz i indeksacja', desc: 'Cap na indeksację, rent-free 1-3 mies., zniżki za długi okres.' },
        { title: 'Fit-out', desc: '50-250 EUR/m² często wynajmujący pokrywa.' },
        { title: 'Wcześniejsze rozwiązanie', desc: 'Po 3 latach z karą 6 mies. lub sublease.' },
        { title: 'Service charge', desc: 'Cap 12 EUR/m²/rok, audyt roczny.' },
        { title: 'Klauzula konkurencji', desc: 'Ochrona Twojej branży w obiekcie.' },
        { title: 'Gwarancja bankowa', desc: 'Negocjacja na 3 mies. lub korporacyjna od matki.' },
        { title: 'Stan przy wyjściu', desc: 'Zdjęcia przy wjeździe, konkretna lista zmian.' },
        { title: 'Klauzula pandemiczna', desc: '50% zniżka przy lockdownie.' }
      ]
    },
    timeline: {
      title: 'Etapy',
      subtitle: '2-4 tygodnie standard.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Plan, obszar, budżet.' },
        { title: 'Draft od wynajmującego', duration: '1 tydz.', desc: '30-50 stron.' },
        { title: 'Analiza', duration: '3-5 dni', desc: 'Mark-up z poprawkami.' },
        { title: 'Negocjacje', duration: '5-10 dni', desc: '3-5 iteracji.' },
        { title: 'Finalne review', duration: '1 dzień', desc: 'Sprawdzenie ostatecznej wersji.' },
        { title: 'Podpisanie', duration: '1 dzień', desc: 'ePodpis lub fizycznie.' },
        { title: 'Post-sign', duration: 'ciągle', desc: 'Fit-out, vouchery, gwarancja, ubezpieczenie.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Od Ciebie plan, od wynajmującego draft.',
      items: [
        'Plan biznesu',
        'KRS lub CEIDG',
        'Sprawozdania 12 mies.',
        'Wymagania nieruchomości',
        'Draft umowy',
        'Plan zagospodarowania',
        'Fit-out (jeśli nietypowy)',
        'Informacja o spółce matce'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Zależy od metrażu i złożoności.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · plan' },
        { label: 'Review + porady', value: 'od 1 800 PLN', note: 'Analiza + ryzyka' },
        { label: 'Negocjacje', value: 'od 4 500 PLN', note: 'Mark-up + rozmowy' },
        { label: 'Złożona umowa', value: 'od 8 500 PLN', note: '> 1 000 m² · multi-site' }
      ],
      note: 'Pełne - gwarantujemy 15%+ oszczędności (lub zwrot honorarium). Startupy - 30% zniżki.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Kodeks cywilny - rozdz. najem, najem lokalu użytkowego',
        'Ustawa z 21 czerwca 2001 r. o ochronie praw lokatorów',
        'Prawo budowlane z 17 maja 1989 r.',
        'Ustawa z 9 września 2000 r. o PCC (0,5-2%)',
        'Ustawa z 11 marca 2004 r. o VAT (23% na czynsz)',
        'Ustawa z 23 marca 2017 r. o kredycie hipotecznym'
      ]
    },
    faq: [
      { q: 'Po co specjalista przy najmie?', a: '30-50 stron szablonu, 80% chroni wynajmującego. Klauzule rozwiązania, service charge, konkurencji - kosztują dziesiątki tysięcy.' },
      { q: 'Cena biura w Warszawie?', a: 'Klasa A w centrum 18-25 EUR/m²/mies. Klasa B 11-16. Coworking 800-1 500 PLN/miejsce. Service +4-8 EUR. Biuro 100 m² B - 7 000-12 000 PLN/mies.' },
      { q: 'Rent-free?', a: '1-3 mies. typowo. Negocjujemy 2-3 mies. dla 200+ m².' },
      { q: 'Wcześniejsze rozwiązanie?', a: 'Window po 3 latach z karą 6 mies. - standard dla biur.' },
      { q: 'Lockdowny?', a: 'Klauzula pandemiczna - 50% zniżka. 70% wynajmujących zgadza się.' },
      { q: 'Gwarancja bankowa?', a: 'Wynajmujący preferują. Koszt 1-2%/rok najemcy.' },
      { q: 'PCC?', a: '0,5% sumy czynszów dla umów > 1 roku. Płaci najemca.' }
    ],
    related: ['mswia-zezwolenie', 'rejestracja-sp-z-oo', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Najem komercyjny',
    ctaSubtitle: 'Bezpłatna analiza umowy. Gwarantujemy 15%+ oszczędności.'
  },
  en: {
    slug: 'najem-komercyjny',
    group: 'realestate',
    icon: 'home',
    badge: 'Office · Retail · Warehouse',
    title: 'Commercial leases',
    subtitle: 'Office, retail and warehouse leases for businesses in Poland',
    lead: 'A typical Polish landlord template runs 30+ pages, 80% of which protects the landlord and costs the tenant 50,000+ PLN at exit. We analyze the contract, negotiate every clause: rent indexation, fit-out budgets, non-compete, exit penalties, bank guarantees. We work on offices from 50 to 5,000 m², shopping-centre retail units, and warehouses around Warsaw.',
    facts: [
      { label: 'Standard term', value: '3-10 years', note: 'office · 5 yrs typical' },
      { label: 'Our savings', value: '15-30%', note: 'of 5-year TCO' },
      { label: 'Negotiated points', value: '20-30', note: 'from standard template' },
      { label: 'Review time', value: '5-10 days', note: 'draft to signing' }
    ],
    grounds: {
      title: 'What we negotiate',
      subtitle: 'Each landlord template hides risk levers. We know where to find them.',
      items: [
        { title: 'Rent and indexation', desc: 'Cap on indexation (max 4-5%/yr), rent-free period 1-3 months, long-term discounts.' },
        { title: 'Fit-out and contribution', desc: 'Landlord often covers 50-250 EUR/m². Negotiable for new tenants.' },
        { title: 'Early termination', desc: 'Standard - none, 100% of remaining rent. We negotiate exit window after 3 years with 6 months penalty, or sublease right.' },
        { title: 'Service charge', desc: 'Often grows from 8 EUR/m² estimate to 15. We cap it (max 12 EUR/m²/yr) and require annual audit.' },
        { title: 'Non-compete', desc: 'Landlord prevents similar businesses on premises - protects your category in shopping centers.' },
        { title: 'Bank guarantee or deposit', desc: 'Standard 3-6 months rent. Negotiate down to 3 months, parent company guarantee, or none for long terms.' },
        { title: 'Repair on exit', desc: 'Vague "restore to original" can mean tens of thousands. Photo documentation at move-in, specific change list.' },
        { title: 'Pandemic clause', desc: 'Post-Covid standard: 30-70% rent discount during lockdowns or restrictions.' }
      ]
    },
    timeline: {
      title: 'Negotiation steps',
      subtitle: '2-4 weeks standard. Complex contracts (1000+ m² or chain leases) up to 2 months.',
      steps: [
        { title: 'Free assessment', duration: '30 min', desc: 'Business plan, area, budget. Pick package.' },
        { title: 'Draft from landlord', duration: '1 week', desc: '30-50 pages typically.' },
        { title: 'Analysis', duration: '3-5 days', desc: 'Risk markup with proposed amendments.' },
        { title: 'Negotiations', duration: '5-10 days', desc: '3-5 iterations. Landlord usually digs in on 5-7 key points.' },
        { title: 'Final review', duration: '1 day', desc: 'Confirm nothing reverted to template.' },
        { title: 'Signing', duration: '1 day', desc: 'E-sign or in person. Sometimes notarial for big deals.' },
        { title: 'Post-sign support', duration: 'ongoing', desc: 'Fit-out registration, rent vouchers, guarantees, insurance. First 3 months included.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'You - business plan. Landlord - draft contract.',
      items: [
        'Business plan',
        'KRS or CEIDG',
        '12 months of financials',
        'Property requirements',
        'Landlord draft',
        'Floor plan needs',
        'Custom fit-out plan',
        'Parent company info (if requested for guarantee)'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'By area and complexity.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 min · plan review' },
        { label: 'Review + advice', value: 'from 1,800 PLN', note: 'Analysis + risks list' },
        { label: 'Full negotiation', value: 'from 4,500 PLN', note: 'Markup + rounds with landlord' },
        { label: 'Complex contract', value: 'from 8,500 PLN', note: '> 1,000 m² · multi-site' }
      ],
      note: 'Full negotiation - we guarantee 15%+ TCO savings over 5 years (or refund our fee). Startups - 30% discount on first lease.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Civil Code - Lease section, commercial lease subsection',
        'Tenant Protection Act of 21 June 2001 (partially applicable)',
        'Building Law of 17 May 1989 (intended use compatibility)',
        'PCC Act of 9 September 2000 (0.5-2% on multi-year leases)',
        'VAT Act of 11 March 2004 (23% on commercial rent)',
        'Mortgage Credit Act of 23 March 2017 (commercial mortgages)'
      ]
    },
    faq: [
      { q: 'Why a specialist for an office lease?', a: 'Standard template - 30-50 pages, 80% protects landlord. Termination clauses, service charge, non-compete cost tens of thousands. Our lease specialist earns 2,000 PLN per 100k of contract value.' },
      { q: 'Office prices in Warsaw?', a: '2024: class A center 18-25 EUR/m²/mo. Class B periphery 11-16. Coworking 800-1,500 PLN per seat. Service charge +4-8 EUR. 100 m² class B - typically 7,000-12,000 PLN/mo.' },
      { q: 'Rent-free period?', a: '1-3 months standard. We negotiate 2-3 for 200+ m². Tenant\'s market - 3-6 months.' },
      { q: 'Early exit?', a: 'Without a clause - pay remaining rent. We add an exit window after 3 years with 6 months penalty.' },
      { q: 'Lockdowns?', a: 'Pandemic clause - 50% discount on usage restrictions. 70% of landlords accept.' },
      { q: 'Bank guarantee or deposit?', a: 'Landlords prefer bank guarantee (1-2%/year provision). Deposit ties up 3-6 months of rent for 5 years.' },
      { q: 'PCC on lease?', a: '0.5% of total rents for fixed-term leases over 1 year. Tenant pays. Indefinite or short-term - no PCC.' }
    ],
    related: ['mswia-zezwolenie', 'rejestracja-sp-z-oo', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Commercial lease turnkey',
    ctaSubtitle: 'Free 30-minute lease analysis. We guarantee 15%+ TCO savings.'
  }
};

export default najemKomercyjny;
