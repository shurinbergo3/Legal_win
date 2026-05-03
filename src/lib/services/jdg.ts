import type { ServiceEntry } from './types';

const jdg: ServiceEntry = {
  ru: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 день',
    title: 'Jednoosobowa działalność gospodarcza (JDG)',
    subtitle: 'Индивидуальное предпринимательство в Польше для держателей TRC',
    lead: 'JDG — польский ИП. Открытие через CEIDG занимает 1 день, налоги — 12% / 19% / podatek liniowy / Estonian — выбираете под доход. Иностранец может открыть JDG только при наличии karty pobytu с правом на прowadzenie działalności (стандартная TRC даёт это право, кроме студенческой). Ведём от выбора формы налогообложения до первой деклаrации VAT-7.',
    facts: [
      { label: 'CEIDG регистрация', value: '1 день', note: 'онлайн через mObywatel' },
      { label: 'Стартовый ZUS', value: '0 PLN', note: 'pierwsze 6 mies. — Ulga na start' },
      { label: 'Mały ZUS Plus', value: '~ 460 PLN/мес', note: 'после Ulgi · доход < 120 000 PLN' },
      { label: 'Pełny ZUS', value: '~ 1 700 PLN/мес', note: 'после 24+ месяцев' }
    ],
    grounds: {
      title: 'Кому подходит JDG',
      subtitle: 'JDG проще и дешевле в обслуживании, чем Sp. z o.o., но требует TRC и не защищает личное имущество.',
      items: [
        { title: 'IT-фрилансер с одним клиентом', desc: 'Программист по B2B контракту с польской или зарубежной фирмой. JDG + IP Box (5%) часто оптимальнее Sp. z o.o.' },
        { title: 'Самозанятый специалист', desc: 'Дизайнер, маркетолог, переводчик, репетитор, бизнес-консультант — JDG идеален: минимум бюрократии, выбор формы налога.' },
        { title: 'Малый магазин или сервис', desc: 'Местная парикмахерская, кофейня, авторемонт. До 5–10 сотрудников — управляется как JDG с upoważnieniem.' },
        { title: 'Тестируем нишу', desc: 'Запуск без обязательств. Закрытие JDG — 1 день в CEIDG, в отличие от Sp. z o.o. (4–6 месяцев и 4 000+ PLN).' },
        { title: 'IT с правом на IP Box', desc: 'JDG на 19% liniowy + IP Box (5% на доход от программистской ИС) — оптимизирует налоги до 5–6% effective.' },
        { title: 'Подача на ВНЖ через samozatrudnienie', desc: 'Активная JDG (6 mies+) с регулярным доходом — основание для karty pobytu для samozatrudnionych. Альтернатива работе по umowie o pracę.' }
      ]
    },
    timeline: {
      title: 'Как открываем JDG',
      subtitle: 'От проверки прав до первой umowy — обычно 3–5 рабочих дней.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Проверяем основу TRC (нужно право на działalność), выбираем форму налога: skala (12/32%), liniowy 19%, ryczałt, IP Box, Estonian CIT (только для Sp. z o.o. — не подходит).' },
        { title: 'PKD коды и план', duration: '1 день', desc: 'Подбираем PKD под ваши услуги/товары. Можно несколько кодов одновременно. Главный — определяет ставку ZUS.' },
        { title: 'Регистрация в CEIDG', duration: '1 день', desc: 'Wniosek через ePUAP, mObywatel или offline в Urzędzie Gminy. Получаем NIP, REGON, активацию VAT-R.' },
        { title: 'ZUS и Ulga na start', duration: '7 дней', desc: 'Регистрация в ZUS-ZUA. Активируем Ulgę na start: 6 месяцев без składek społecznych (только zdrowotna ~314 PLN).' },
        { title: 'Bankowy konto firmowe', duration: '1–3 дня', desc: 'Открываем konto firmowe в mBanku, ING, PKO BP. Обычно бесплатно для JDG с минимальным оборотом.' },
        { title: 'JPK_V7 и pierwsza deklaracja', duration: 'каждый месяц', desc: 'JPK_V7 (подкомбинированный VAT + книга wydatków) до 25 числа следующего месяца. Бухгалтер делает за вас.' },
        { title: 'Скидка ZUS', duration: 'через 6 mies.', desc: 'После Ulgi — Mały ZUS Plus (если доход < 120 000 PLN/год): ~460 PLN/мес 24 месяца. Затем pełny ZUS ~1 700 PLN/мес.' }
      ]
    },
    documents: {
      title: 'Что нужно для открытия',
      subtitle: 'Регистрация быстрая — главное, чтобы было основание (TRC с правом).',
      items: [
        'Паспорт + Karta Pobytu с правом на działalność gospodarczą',
        'PESEL (обязателен для CEIDG)',
        'Адрес проживания в Польше (для CEIDG и Urzędu Skarbowego)',
        'Адрес ведения бизнеса (можно совпадать с домашним)',
        'PKD коды — выбираем на консультации',
        'Профиль zaufany / kwalifikowany podpis (помогаем оформить)',
        'Konto bankowe — личное или сразу firmowe',
        'Если не самостоятельно — pełnomocnictwo notarialne'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Открытие JDG бесплатное в государстве. Платите только за наше время и бухгалтерию.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · форма налога и PKD' },
        { label: 'Открытие JDG', value: 'от 600 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'Бухгалтерия JDG', value: 'от 250 PLN/мес', note: 'KPiR / ryczałt + JPK_V7' },
        { label: 'JDG + ВНЖ через бизнес', value: 'от 4 800 PLN', note: 'JDG + karta pobytu для samozatrudnionych' }
      ],
      note: 'Госпошлин нет — CEIDG и ZUS бесплатны. ZUS-składki ~314 PLN/мес (Ulga), ~460 PLN (Mały ZUS+), ~1 700 PLN (pełny). Налог — отдельно по результатам.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 marca 2018 r. — Prawo przedsiębiorców',
        'Ustawa z dnia 26 lipca 1991 r. o podatku PIT (skala, liniowy, ryczałt)',
        'Ustawa z dnia 13 października 1998 r. o ZUS (Ulga na start, Mały ZUS Plus)',
        'Ustawa z dnia 6 marca 2018 r. o CEIDG i Punkcie Informacji dla Przedsiębiorców',
        'Ustawa z dnia 11 marca 2004 r. o VAT (zwolnienie do 200 000 PLN)'
      ]
    },
    faq: [
      { q: 'Может ли иностранец открыть JDG?', a: 'Только при наличии karty pobytu с правом на działalność gospodarczą. Это право даёт стандартная TRC по работе/бизнесу/семье, ПМЖ, Karta Polaka, статус резидента ЕС. Не даёт: студенческая TRC, виза D, безвизовый въезд. Гражданин ЕС/ЕЭП открывает JDG без TRC.' },
      { q: 'Какая форма налога выгоднее?', a: 'Зависит от типа бизнеса и дохода. Skala (12% до 120к, 32% выше) — для семей с детьми (ulga). Liniowy 19% — для дохода 120–500к. Ryczałt — для услуг с малыми расходами (3-17% от оборота). IP Box — для программистов (5% на доходы от ИС). Считаем на консультации.' },
      { q: 'Как работает Ulga na start?', a: 'Первые 6 месяцев — только składka zdrowotna (~314 PLN/мес). Без składek społecznych (emerytalnych, rentowych, chorobowych). Включается автоматически при первой регистрации. Если у вас уже была JDG за последние 60 mies — нет права на Ulgę.' },
      { q: 'Что после 6 месяцев?', a: 'Mały ZUS Plus — 24 месяца ~460 PLN/мес (если доход < 120 000 PLN/год за прошлый год). Затем pełny ZUS ~1 700 PLN/мес. На второй стадии многие переходят на Sp. z o.o. (нет ZUS у учредителя при 2+ wspólnikach).' },
      { q: 'Можно ли иметь JDG и umowę o pracę?', a: 'Да. Не противоречит. JDG — независимая działalność, umowa o pracę — работа на работодателя. ZUS оплачивается из umowy o pracę (если zarobek > minimum krajowe), JDG освобождается от ZUS-składek społecznych.' },
      { q: 'Когда переходить на Sp. z o.o.?', a: 'При доходе > 300 000 PLN/год, при привлечении инвесторов, при работе с EU-корпорациями (часто требуют Sp. z o.o.), при риске ответственности (личное имущество защищается только в Sp. z o.o.). На консультации делаем расчёт.' },
      { q: 'Что с IP Box на JDG?', a: 'JDG на liniowy 19% + IP Box даёт 5% на доход от программистской ИС (kwalifikowanego prawa do oprogramowania). Условия: ведёте раздельный учёт доходов от IP, имеете umowę przeniesienia praw, готовите interpretację indywidualną. Effective налог 5-6%.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG за 1 день',
    ctaSubtitle: 'Бесплатная консультация: проверяем TRC, считаем форму налога, открываем за 3–5 дней под ключ.'
  },
  pl: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 dzień',
    title: 'Jednoosobowa działalność gospodarcza',
    subtitle: 'JDG dla cudzoziemców z kartą pobytu',
    lead: 'JDG — polskie samozatrudnienie. CEIDG — 1 dzień, podatki 12/19/liniowy/Estoński/IP Box. Cudzoziemiec — przy karcie pobytu z prawem do prowadzenia działalności (standardowa TRC pracowniczo-biznesowa to umożliwia, oprócz studenckiej). Prowadzimy od formy podatku do pierwszej JPK_V7.',
    facts: [
      { label: 'CEIDG', value: '1 dzień', note: 'mObywatel · ePUAP' },
      { label: 'Ulga na start', value: '0 PLN ZUS', note: 'pierwsze 6 mies.' },
      { label: 'Mały ZUS+', value: '~ 460 PLN/mies.', note: 'do 120 000 PLN przychodu' },
      { label: 'Pełny ZUS', value: '~ 1 700 PLN/mies.', note: 'po 24 mies.' }
    ],
    grounds: {
      title: 'Dla kogo JDG',
      subtitle: 'Prościej i taniej niż Sp. z o.o., ale wymaga TRC i nie chroni majątku osobistego.',
      items: [
        { title: 'Programista B2B', desc: 'Kontrakt z polską lub zagraniczną firmą. JDG + IP Box często lepsze niż Sp. z o.o.' },
        { title: 'Freelancer', desc: 'Designer, marketingowiec, tłumacz, korepetytor, konsultant.' },
        { title: 'Mały sklep / usługi', desc: 'Salon fryzjerski, kawiarnia, warsztat. Do 5–10 pracowników z upoważnieniem.' },
        { title: 'Test niszy', desc: 'Start bez zobowiązań. Zamknięcie JDG — 1 dzień w CEIDG.' },
        { title: 'IP Box dla IT', desc: 'JDG liniowy 19% + IP Box (5%) — efektywnie 5–6%.' },
        { title: 'Karta pobytu przez biznes', desc: 'Aktywna JDG (6+ mies., regularny przychód) — podstawa karty dla samozatrudnionych.' }
      ]
    },
    timeline: {
      title: 'Jak otwieramy JDG',
      subtitle: 'Od weryfikacji TRC do pierwszej umowy — 3–5 dni roboczych.',
      steps: [
        { title: 'Bezpłatna konsultacja', duration: '30 min', desc: 'Sprawdzamy TRC, dobieramy formę: skala / liniowy / ryczałt / IP Box.' },
        { title: 'PKD i plan', duration: '1 dzień', desc: 'Dobór PKD pod usługi/towary. Główny PKD = stawka ZUS.' },
        { title: 'CEIDG', duration: '1 dzień', desc: 'Wniosek przez ePUAP / mObywatel. NIP, REGON, VAT-R.' },
        { title: 'ZUS — Ulga na start', duration: '7 dni', desc: 'ZUS-ZUA. 6 mies. tylko zdrowotna (~314 PLN).' },
        { title: 'Konto firmowe', duration: '1–3 dni', desc: 'mBank, ING, PKO. Zwykle bezpłatne dla JDG.' },
        { title: 'JPK_V7', duration: 'co miesiąc', desc: 'Do 25-go następnego miesiąca. Księgowy robi za Ciebie.' },
        { title: 'Po Uldze', duration: 'po 6 mies.', desc: 'Mały ZUS+ (~460 PLN, 24 mies.), potem pełny ZUS (~1 700 PLN).' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Szybko — kluczowa karta pobytu z prawem.',
      items: [
        'Paszport + karta pobytu z prawem do działalności',
        'PESEL (obowiązkowy)',
        'Adres zamieszkania w Polsce',
        'Adres prowadzenia działalności',
        'Kody PKD',
        'Profil zaufany / podpis kwalifikowany',
        'Konto bankowe',
        'Pełnomocnictwo (jeśli przez nas)'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'CEIDG i ZUS bezpłatne. Płacisz za naszą pracę.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · forma + PKD' },
        { label: 'Otwarcie JDG', value: 'od 600 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'Księgowość JDG', value: 'od 250 PLN/mies.', note: 'KPiR / ryczałt + JPK_V7' },
        { label: 'JDG + karta pobytu', value: 'od 4 800 PLN', note: 'JDG + samozatrudniony' }
      ],
      note: 'Bez opłat skarbowych. ZUS ~314 (Ulga), ~460 (Mały+), ~1 700 (pełny). Podatek osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 6 marca 2018 r. — Prawo przedsiębiorców',
        'Ustawa z 26 lipca 1991 r. o PIT',
        'Ustawa z 13 października 1998 r. o ZUS',
        'Ustawa z 6 marca 2018 r. o CEIDG',
        'Ustawa z 11 marca 2004 r. o VAT'
      ]
    },
    faq: [
      { q: 'Cudzoziemiec może JDG?', a: 'Z kartą pobytu z prawem do działalności. TRC pracowniczo-biznesowa, PR, Karta Polaka, rezydent UE. Nie daje: TRC studencka, wiza D. UE — bez TRC.' },
      { q: 'Jaka forma podatku?', a: 'Skala (12/32%) — z dziećmi. Liniowy 19% — dochód 120–500k. Ryczałt — usługi z niskimi kosztami. IP Box — programiści (5%).' },
      { q: 'Jak Ulga na start?', a: '6 mies. tylko zdrowotna. Brak składek społecznych. Automatycznie przy pierwszej rejestracji. Brak prawa, jeśli JDG w ostatnich 60 mies.' },
      { q: 'Po 6 mies.?', a: 'Mały ZUS+ 24 mies. (~460 PLN, jeśli przychód < 120k). Potem pełny ZUS (~1 700 PLN).' },
      { q: 'JDG + umowa o pracę?', a: 'Tak. Nie kolidują. ZUS z umowy o pracę zwalnia z ZUS w JDG (oprócz zdrowotnej).' },
      { q: 'Kiedy Sp. z o.o.?', a: 'Przychód > 300k, inwestorzy, klienci korporacyjni, ryzyko odpowiedzialności.' },
      { q: 'IP Box na JDG?', a: 'Liniowy 19% + IP Box = 5% na dochód z IP. Wymaga: rozdziel księgowość, umowa przeniesienia praw, interpretacja indywidualna.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG w 1 dzień',
    ctaSubtitle: 'Bezpłatna konsultacja, weryfikacja TRC, wybór formy. Pod klucz w 3–5 dni.'
  },
  en: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 day',
    title: 'Sole proprietorship (JDG)',
    subtitle: 'Polish sole proprietorship for residence-card holders',
    lead: 'JDG (jednoosobowa działalność gospodarcza) is the Polish sole proprietorship. CEIDG registration takes 1 day. Tax options: 12/19/flat 19/IP Box (5%). Foreigners need a residence card with the right to conduct business — most TRCs allow it (except student TRCs). We run it end-to-end from form choice to your first JPK_V7 return.',
    facts: [
      { label: 'CEIDG registration', value: '1 day', note: 'online via mObywatel' },
      { label: 'Start ZUS', value: '0 PLN', note: 'first 6 months — Ulga na start' },
      { label: 'Mały ZUS Plus', value: '~ 460 PLN/mo', note: 'after Ulga · revenue < 120k PLN' },
      { label: 'Full ZUS', value: '~ 1,700 PLN/mo', note: 'after 24+ months' }
    ],
    grounds: {
      title: 'Who JDG fits',
      subtitle: 'Simpler and cheaper than Sp. z o.o., but requires a residence card and exposes personal assets.',
      items: [
        { title: 'IT freelancer with one client', desc: 'Developer on B2B contract with a Polish or foreign company. JDG + IP Box (5%) often beats Sp. z o.o.' },
        { title: 'Self-employed specialist', desc: 'Designer, marketer, translator, tutor, consultant. JDG is ideal — minimal bureaucracy.' },
        { title: 'Small shop or service', desc: 'Local hairdresser, café, repair shop. Up to 5–10 employees on a JDG with upoważnienie.' },
        { title: 'Niche testing', desc: 'Launch without commitments. Closing JDG — 1 day in CEIDG.' },
        { title: 'IT with IP Box', desc: 'JDG flat 19% + IP Box (5% on software-IP income) yields ~5–6% effective tax.' },
        { title: 'Residence permit through self-employment', desc: 'Active JDG (6+ months, regular revenue) qualifies for the self-employed residence card.' }
      ]
    },
    timeline: {
      title: 'How we open it',
      subtitle: 'From rights check to first contract — 3–5 business days.',
      steps: [
        { title: 'Free consultation', duration: '30 min', desc: 'Verify TRC rights, pick tax form (progressive / flat 19% / lump sum / IP Box).' },
        { title: 'PKD codes and plan', duration: '1 day', desc: 'Match codes to your services/products. Main code drives ZUS rate.' },
        { title: 'CEIDG registration', duration: '1 day', desc: 'Filed via ePUAP, mObywatel, or in person. NIP, REGON, VAT-R activation.' },
        { title: 'ZUS — Ulga na start', duration: '7 days', desc: 'ZUS-ZUA filed. 6 months pay only health (~314 PLN).' },
        { title: 'Business bank account', duration: '1–3 days', desc: 'mBank, ING, PKO BP. Usually free for JDG.' },
        { title: 'JPK_V7 monthly', duration: 'each month', desc: 'Combined VAT + expense ledger by 25th of next month. Bookkeeper handles it.' },
        { title: 'After Ulga', duration: '6+ months', desc: 'Mały ZUS Plus 24 months (~460 PLN if revenue < 120k). Then full ZUS (~1,700 PLN).' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Quick — the key is a TRC with the right.',
      items: [
        'Passport + residence card with business right',
        'PESEL (mandatory for CEIDG)',
        'Polish residential address',
        'Business address (can match home)',
        'PKD codes',
        'Trusted profile / qualified e-signature',
        'Bank account',
        'PoA if filed through us'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'CEIDG and ZUS are free. You pay for our time and bookkeeping.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 min · form & PKD' },
        { label: 'JDG opening', value: 'from 600 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'JDG bookkeeping', value: 'from 250 PLN/mo', note: 'KPiR / lump sum + JPK_V7' },
        { label: 'JDG + self-employed TRC', value: 'from 4,800 PLN', note: 'JDG + residence permit' }
      ],
      note: 'No state fees. ZUS ~314 (Ulga), ~460 (Mały+), ~1,700 (full). Tax billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Entrepreneurs Act of 6 March 2018',
        'PIT Act of 26 July 1991 (progressive, flat, lump sum)',
        'ZUS Act of 13 October 1998 (Ulga, Mały ZUS Plus)',
        'CEIDG Act of 6 March 2018',
        'VAT Act of 11 March 2004 (200,000 PLN exemption)'
      ]
    },
    faq: [
      { q: 'Can a foreigner open JDG?', a: 'Only with a residence card carrying the right to conduct business. Most work/business/family TRCs grant it; student TRCs and D-visas don\'t. EU citizens — no card needed.' },
      { q: 'Which tax form?', a: 'Progressive (12/32%) — for parents using ulga. Flat 19% — income 120–500k. Lump sum — services with few expenses. IP Box — software developers (5%).' },
      { q: 'How does Ulga na start work?', a: 'First 6 months — only health insurance (~314 PLN). No social contributions. Auto-applied on first registration. Not available if you ran a JDG in the last 60 months.' },
      { q: 'After 6 months?', a: 'Mały ZUS Plus for 24 months (~460 PLN if last year\'s revenue < 120k). Then full ZUS (~1,700 PLN). Many migrate to Sp. z o.o. at this stage.' },
      { q: 'JDG + employment contract?', a: 'Yes. They don\'t conflict. Social ZUS paid from employment exempts JDG from social contributions.' },
      { q: 'When to switch to Sp. z o.o.?', a: 'Revenue > 300k, investors, EU enterprise clients (often require Sp. z o.o.), liability exposure.' },
      { q: 'IP Box on JDG?', a: 'Flat 19% + IP Box = 5% on qualified software-IP income. Need separate revenue tracking, IP transfer agreement, individual tax interpretation.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG in 1 day',
    ctaSubtitle: 'Free consultation, TRC verification, tax form choice. Turnkey in 3–5 days.'
  }
};

export default jdg;
