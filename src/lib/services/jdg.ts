import type { ServiceEntry } from './types';

const jdg: ServiceEntry = {
  ru: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 день',
    title: 'Jednoosobowa działalność gospodarcza (JDG)',
    subtitle: 'Индивидуальное предпринимательство в Польше для держателей TRC',
    lead: 'JDG - польский ИП. Открытие через CEIDG занимает 1 день, налоги - 12% / 19% / podatek liniowy / Estonian - выбираете под доход. Иностранец может открыть JDG только при наличии karty pobytu с правом на prowadzenie działalności (стандартная TRC даёт это право, кроме студенческой). Ведём от выбора формы налогообложения до первой декларации VAT-7.',
    facts: [
      { label: 'CEIDG регистрация', value: '1 день', note: 'онлайн через mObywatel' },
      { label: 'Стартовый ZUS', value: '0 PLN', note: 'pierwsze 6 mies. - Ulga na start' },
      { label: 'Mały ZUS Plus', value: '~ 460 PLN/мес', note: 'после Ulgi · доход < 120 000 PLN' },
      { label: 'Pełny ZUS', value: '~ 1 700 PLN/мес', note: 'после 24+ месяцев' }
    ],
    grounds: {
      title: 'Кому подходит JDG',
      subtitle: 'JDG проще и дешевле в обслуживании, чем Sp. z o.o., но требует TRC и не защищает личное имущество.',
      items: [
        { title: 'IT-фрилансер с одним клиентом', desc: 'Программист по B2B контракту с польской или зарубежной фирмой. JDG + IP Box (5%) часто оптимальнее Sp. z o.o.' },
        { title: 'Самозанятый специалист', desc: 'Дизайнер, маркетолог, переводчик, репетитор, бизнес-консультант - JDG идеален: минимум бюрократии, выбор формы налога.' },
        { title: 'Малый магазин или сервис', desc: 'Местная парикмахерская, кофейня, авторемонт. До 5-10 сотрудников - управляется как JDG с upoważnieniem.' },
        { title: 'Тестируем нишу', desc: 'Запуск без обязательств. Закрытие JDG - 1 день в CEIDG, в отличие от Sp. z o.o. (4-6 месяцев и 4 000+ PLN).' },
        { title: 'IT с правом на IP Box', desc: 'JDG на 19% liniowy + IP Box (5% на доход от программистской ИС) - оптимизирует налоги до 5-6% effective.' },
        { title: 'Подача на ВНЖ через samozatrudnienie', desc: 'Активная JDG (6 mies+) с регулярным доходом - основание для karty pobytu для samozatrudnionych. Альтернатива работе по umowie o pracę.' }
      ]
    },
    timeline: {
      title: 'Как открываем JDG',
      subtitle: 'От проверки прав до первой umowy - обычно 3-5 рабочих дней.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Проверяем основу TRC (нужно право на działalność), выбираем форму налога: skala (12/32%), liniowy 19%, ryczałt, IP Box, Estonian CIT (только для Sp. z o.o. - не подходит).' },
        { title: 'PKD коды и план', duration: '1 день', desc: 'Подбираем PKD под ваши услуги/товары. Можно несколько кодов одновременно. Главный - определяет ставку ZUS.' },
        { title: 'Регистрация в CEIDG', duration: '1 день', desc: 'Wniosek через ePUAP, mObywatel или offline в Urzędzie Gminy. Получаем NIP, REGON, активацию VAT-R.' },
        { title: 'ZUS и Ulga na start', duration: '7 дней', desc: 'Регистрация в ZUS-ZUA. Активируем Ulgę na start: 6 месяцев без składek społecznych (только zdrowotna ~314 PLN).' },
        { title: 'Bankowy konto firmowe', duration: '1-3 дня', desc: 'Открываем konto firmowe в mBanku, ING, PKO BP. Обычно бесплатно для JDG с минимальным оборотом.' },
        { title: 'JPK_V7 и pierwsza deklaracja', duration: 'каждый месяц', desc: 'JPK_V7 (подкомбинированный VAT + книга wydatków) до 25 числа следующего месяца. Бухгалтер делает за вас.' },
        { title: 'Скидка ZUS', duration: 'через 6 mies.', desc: 'После Ulgi - Mały ZUS Plus (если доход < 120 000 PLN/год): ~460 PLN/мес 24 месяца. Затем pełny ZUS ~1 700 PLN/мес.' }
      ]
    },
    documents: {
      title: 'Что нужно для открытия',
      subtitle: 'Регистрация быстрая - главное, чтобы было основание (TRC с правом).',
      items: [
        'Паспорт + Karta Pobytu с правом на działalność gospodarczą',
        'PESEL (обязателен для CEIDG)',
        'Адрес проживания в Польше (для CEIDG и Urzędu Skarbowego)',
        'Адрес ведения бизнеса (можно совпадать с домашним)',
        'PKD коды - выбираем на консультации',
        'Профиль zaufany / kwalifikowany podpis (помогаем оформить)',
        'Konto bankowe - личное или сразу firmowe',
        'Если не самостоятельно - pełnomocnictwo notarialne'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Открытие JDG бесплатное в государстве. Платите только за наше время и бухгалтерию.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · форма налога и PKD' },
        { label: 'Открытие JDG', value: 'от 3 000 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'Бухгалтерия JDG', value: 'от 700 PLN/мес', note: 'KPiR / ryczałt + JPK_V7' },
        { label: 'JDG + ВНЖ через бизнес', value: 'от 4 800 PLN', note: 'JDG + karta pobytu для samozatrudnionych' }
      ],
      note: 'Госпошлин нет - CEIDG и ZUS бесплатны. ZUS-składki ~314 PLN/мес (Ulga), ~460 PLN (Mały ZUS+), ~1 700 PLN (pełny). Налог - отдельно по результатам.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 6 marca 2018 r. - Prawo przedsiębiorców',
        'Ustawa z dnia 26 lipca 1991 r. o podatku PIT (skala, liniowy, ryczałt)',
        'Ustawa z dnia 13 października 1998 r. o ZUS (Ulga na start, Mały ZUS Plus)',
        'Ustawa z dnia 6 marca 2018 r. o CEIDG i Punkcie Informacji dla Przedsiębiorców',
        'Ustawa z dnia 11 marca 2004 r. o VAT (zwolnienie do 200 000 PLN)'
      ]
    },
    faq: [
      { q: 'Может ли иностранец открыть JDG?', a: 'Только при наличии karty pobytu (карты пребывания) с правом на działalność gospodarczą (предпринимательскую деятельность). Это право даёт стандартная TRC по работе/бизнесу/семье, ПМЖ, Karta Polaka, статус резидента ЕС. Не даёт: студенческая TRC, виза D, безвизовый въезд. Гражданин ЕС/ЕЭП открывает JDG без TRC.' },
      { q: 'Какая форма налога выгоднее?', a: 'Зависит от типа бизнеса и дохода. Skala (шкала, 12% до 120к, 32% выше) - для семей с детьми (ulga - налоговый вычет). Liniowy (линейный) 19% - для дохода 120-500к. Ryczałt (фиксированный налог с оборота) - для услуг с малыми расходами (3-17% от оборота). IP Box - для программистов (5% на доходы от ИС). Считаем на консультации.' },
      { q: 'Как работает Ulga na start?', a: 'Ulga na start (льгота на старте) - первые 6 месяцев - только składka zdrowotna (взнос на медстраховку, ~314 PLN/мес). Без składek społecznych (соцвзносов: emerytalnych - пенсионных, rentowych - на пособия, chorobowych - больничных). Включается автоматически при первой регистрации. Если у вас уже была JDG за последние 60 mies - нет права на Ulgę.' },
      { q: 'Что после 6 месяцев?', a: 'Mały ZUS Plus (малый ZUS-плюс) - 24 месяца ~460 PLN/мес (если доход < 120 000 PLN/год за прошлый год). Затем pełny ZUS (полный ZUS) ~1 700 PLN/мес. На второй стадии многие переходят на Sp. z o.o. (нет ZUS у учредителя при 2+ wspólnikach - участниках).' },
      { q: 'Можно ли иметь JDG и umowę o pracę?', a: 'Да. Не противоречит. JDG - независимая działalność (деятельность), umowa o pracę (трудовой договор) - работа на работодателя. ZUS оплачивается из umowy o pracę (если zarobek - заработок > minimum krajowe - минимальной зарплаты), JDG освобождается от ZUS-składek społecznych (соцвзносов).' },
      { q: 'Когда переходить на Sp. z o.o.?', a: 'При доходе > 300 000 PLN/год, при привлечении инвесторов, при работе с EU-корпорациями (часто требуют Sp. z o.o.), при риске ответственности (личное имущество защищается только в Sp. z o.o.). На консультации делаем расчёт.' },
      { q: 'Что с IP Box на JDG?', a: 'JDG на liniowy (линейном) 19% + IP Box даёт 5% на доход от программистской ИС (kwalifikowanego prawa do oprogramowania - квалифицированного права на ПО). Условия: ведёте раздельный учёт доходов от IP, имеете umowę przeniesienia praw (договор передачи прав), готовите interpretację indywidualną (индивидуальную налоговую интерпретацию). Effective налог 5-6%.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG за 1 день',
    ctaSubtitle: 'Бесплатная консультация: проверяем TRC, считаем форму налога, открываем за 3-5 дней под ключ.'
  },
  pl: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 dzień',
    title: 'Jednoosobowa działalność gospodarcza',
    subtitle: 'JDG dla cudzoziemców z kartą pobytu',
    lead: 'JDG - polskie samozatrudnienie. CEIDG - 1 dzień, podatki 12/19/liniowy/Estoński/IP Box. Cudzoziemiec - przy karcie pobytu z prawem do prowadzenia działalności (standardowa TRC pracowniczo-biznesowa to umożliwia, oprócz studenckiej). Prowadzimy od formy podatku do pierwszej JPK_V7.',
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
        { title: 'Mały sklep / usługi', desc: 'Salon fryzjerski, kawiarnia, warsztat. Do 5-10 pracowników z upoważnieniem.' },
        { title: 'Test niszy', desc: 'Start bez zobowiązań. Zamknięcie JDG - 1 dzień w CEIDG.' },
        { title: 'IP Box dla IT', desc: 'JDG liniowy 19% + IP Box (5%) - efektywnie 5-6%.' },
        { title: 'Karta pobytu przez biznes', desc: 'Aktywna JDG (6+ mies., regularny przychód) - podstawa karty dla samozatrudnionych.' }
      ]
    },
    timeline: {
      title: 'Jak otwieramy JDG',
      subtitle: 'Od weryfikacji TRC do pierwszej umowy - 3-5 dni roboczych.',
      steps: [
        { title: 'Bezpłatna konsultacja', duration: '30 min', desc: 'Sprawdzamy TRC, dobieramy formę: skala / liniowy / ryczałt / IP Box.' },
        { title: 'PKD i plan', duration: '1 dzień', desc: 'Dobór PKD pod usługi/towary. Główny PKD = stawka ZUS.' },
        { title: 'CEIDG', duration: '1 dzień', desc: 'Wniosek przez ePUAP / mObywatel. NIP, REGON, VAT-R.' },
        { title: 'ZUS - Ulga na start', duration: '7 dni', desc: 'ZUS-ZUA. 6 mies. tylko zdrowotna (~314 PLN).' },
        { title: 'Konto firmowe', duration: '1-3 dni', desc: 'mBank, ING, PKO. Zwykle bezpłatne dla JDG.' },
        { title: 'JPK_V7', duration: 'co miesiąc', desc: 'Do 25-go następnego miesiąca. Księgowy robi za Ciebie.' },
        { title: 'Po Uldze', duration: 'po 6 mies.', desc: 'Mały ZUS+ (~460 PLN, 24 mies.), potem pełny ZUS (~1 700 PLN).' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Szybko - kluczowa karta pobytu z prawem.',
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
        { label: 'Otwarcie JDG', value: 'od 3 000 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'Księgowość JDG', value: 'od 700 PLN/mies.', note: 'KPiR / ryczałt + JPK_V7' },
        { label: 'JDG + karta pobytu', value: 'od 4 800 PLN', note: 'JDG + samozatrudniony' }
      ],
      note: 'Bez opłat skarbowych. ZUS ~314 (Ulga), ~460 (Mały+), ~1 700 (pełny). Podatek osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 6 marca 2018 r. - Prawo przedsiębiorców',
        'Ustawa z 26 lipca 1991 r. o PIT',
        'Ustawa z 13 października 1998 r. o ZUS',
        'Ustawa z 6 marca 2018 r. o CEIDG',
        'Ustawa z 11 marca 2004 r. o VAT'
      ]
    },
    faq: [
      { q: 'Cudzoziemiec może JDG?', a: 'Z kartą pobytu z prawem do działalności. TRC pracowniczo-biznesowa, PR, Karta Polaka, rezydent UE. Nie daje: TRC studencka, wiza D. UE - bez TRC.' },
      { q: 'Jaka forma podatku?', a: 'Skala (12/32%) - z dziećmi. Liniowy 19% - dochód 120-500k. Ryczałt - usługi z niskimi kosztami. IP Box - programiści (5%).' },
      { q: 'Jak Ulga na start?', a: '6 mies. tylko zdrowotna. Brak składek społecznych. Automatycznie przy pierwszej rejestracji. Brak prawa, jeśli JDG w ostatnich 60 mies.' },
      { q: 'Po 6 mies.?', a: 'Mały ZUS+ 24 mies. (~460 PLN, jeśli przychód < 120k). Potem pełny ZUS (~1 700 PLN).' },
      { q: 'JDG + umowa o pracę?', a: 'Tak. Nie kolidują. ZUS z umowy o pracę zwalnia z ZUS w JDG (oprócz zdrowotnej).' },
      { q: 'Kiedy Sp. z o.o.?', a: 'Przychód > 300k, inwestorzy, klienci korporacyjni, ryzyko odpowiedzialności.' },
      { q: 'IP Box na JDG?', a: 'Liniowy 19% + IP Box = 5% na dochód z IP. Wymaga: rozdziel księgowość, umowa przeniesienia praw, interpretacja indywidualna.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG w 1 dzień',
    ctaSubtitle: 'Bezpłatna konsultacja, weryfikacja TRC, wybór formy. Pod klucz w 3-5 dni.'
  },
  en: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 day',
    title: 'Sole proprietorship (JDG)',
    subtitle: 'Polish sole proprietorship for residence-card holders',
    lead: 'JDG (jednoosobowa działalność gospodarcza) is the Polish sole proprietorship. CEIDG registration takes 1 day. Tax options: 12/19/flat 19/IP Box (5%). Foreigners need a residence card with the right to conduct business - most TRCs allow it (except student TRCs). We run it end-to-end from form choice to your first JPK_V7 return.',
    facts: [
      { label: 'CEIDG registration', value: '1 day', note: 'online via mObywatel' },
      { label: 'Start ZUS', value: '0 PLN', note: 'first 6 months - Ulga na start' },
      { label: 'Mały ZUS Plus', value: '~ 460 PLN/mo', note: 'after Ulga · revenue < 120k PLN' },
      { label: 'Full ZUS', value: '~ 1,700 PLN/mo', note: 'after 24+ months' }
    ],
    grounds: {
      title: 'Who JDG fits',
      subtitle: 'Simpler and cheaper than Sp. z o.o., but requires a residence card and exposes personal assets.',
      items: [
        { title: 'IT freelancer with one client', desc: 'Developer on B2B contract with a Polish or foreign company. JDG + IP Box (5%) often beats Sp. z o.o.' },
        { title: 'Self-employed specialist', desc: 'Designer, marketer, translator, tutor, consultant. JDG is ideal - minimal bureaucracy.' },
        { title: 'Small shop or service', desc: 'Local hairdresser, café, repair shop. Up to 5-10 employees on a JDG with upoważnienie.' },
        { title: 'Niche testing', desc: 'Launch without commitments. Closing JDG - 1 day in CEIDG.' },
        { title: 'IT with IP Box', desc: 'JDG flat 19% + IP Box (5% on software-IP income) yields ~5-6% effective tax.' },
        { title: 'Residence permit through self-employment', desc: 'Active JDG (6+ months, regular revenue) qualifies for the self-employed residence card.' }
      ]
    },
    timeline: {
      title: 'How we open it',
      subtitle: 'From rights check to first contract - 3-5 business days.',
      steps: [
        { title: 'Free consultation', duration: '30 min', desc: 'Verify TRC rights, pick tax form (progressive / flat 19% / lump sum / IP Box).' },
        { title: 'PKD codes and plan', duration: '1 day', desc: 'Match codes to your services/products. Main code drives ZUS rate.' },
        { title: 'CEIDG registration', duration: '1 day', desc: 'Filed via ePUAP, mObywatel, or in person. NIP, REGON, VAT-R activation.' },
        { title: 'ZUS - Ulga na start', duration: '7 days', desc: 'ZUS-ZUA filed. 6 months pay only health (~314 PLN).' },
        { title: 'Business bank account', duration: '1-3 days', desc: 'mBank, ING, PKO BP. Usually free for JDG.' },
        { title: 'JPK_V7 monthly', duration: 'each month', desc: 'Combined VAT + expense ledger by 25th of next month. Bookkeeper handles it.' },
        { title: 'After Ulga', duration: '6+ months', desc: 'Mały ZUS Plus 24 months (~460 PLN if revenue < 120k). Then full ZUS (~1,700 PLN).' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Quick - the key is a TRC with the right.',
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
        { label: 'JDG opening', value: 'from 3,000 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'JDG bookkeeping', value: 'from 700 PLN/mo', note: 'KPiR / lump sum + JPK_V7' },
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
      { q: 'Can a foreigner open JDG?', a: 'Only with a residence card carrying the right to conduct business. Most work/business/family TRCs grant it; student TRCs and D-visas don\'t. EU citizens - no card needed.' },
      { q: 'Which tax form?', a: 'Progressive (12/32%) - for parents using ulga. Flat 19% - income 120-500k. Lump sum - services with few expenses. IP Box - software developers (5%).' },
      { q: 'How does Ulga na start work?', a: 'Ulga na start (start relief) - first 6 months you pay only health insurance (~314 PLN). No social contributions. Auto-applied on first registration. Not available if you ran a JDG in the last 60 months.' },
      { q: 'After 6 months?', a: 'Mały ZUS Plus (small ZUS Plus) for 24 months (~460 PLN if last year\'s revenue < 120k). Then full ZUS (~1,700 PLN). Many migrate to Sp. z o.o. at this stage.' },
      { q: 'JDG + employment contract?', a: 'Yes. They don\'t conflict. Social ZUS paid from employment exempts JDG from social contributions.' },
      { q: 'When to switch to Sp. z o.o.?', a: 'Revenue > 300k, investors, EU enterprise clients (often require Sp. z o.o.), liability exposure.' },
      { q: 'IP Box on JDG?', a: 'Flat 19% + IP Box = 5% on qualified software-IP income. Need separate revenue tracking, IP transfer agreement, individual tax interpretation.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG in 1 day',
    ctaSubtitle: 'Free consultation, TRC verification, tax form choice. Turnkey in 3-5 days.'
  },
  tr: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 gün',
    title: 'Jednoosobowa działalność gospodarcza (JDG)',
    subtitle: 'Karta pobytu sahipleri için Polonya şahıs şirketi',
    lead: 'JDG (jednoosobowa działalność gospodarcza - şahıs şirketi), Polonya\'nın bireysel girişim biçimidir. CEIDG\'ye kayıt 1 günde tamamlanır, vergi rejimi gelirinize göre seçilir: %12 / %19 progresif, %19 podatek liniowy (lineer vergi), ryczałt (götürü), IP Box (%5). Yabancılar JDG\'yi yalnızca działalność hakkı veren bir karta pobytu ile açabilir (öğrenci TRC\'si dışındaki standart TRC\'ler bu hakkı verir). Vergi rejimi seçiminden ilk VAT-7 beyannamesine kadar süreci uçtan uca yürütüyoruz.',
    facts: [
      { label: 'CEIDG kaydı', value: '1 gün', note: 'mObywatel üzerinden çevrimiçi' },
      { label: 'Başlangıç ZUS', value: '0 PLN', note: 'ilk 6 ay - Ulga na start (başlangıç indirimi)' },
      { label: 'Mały ZUS Plus', value: '~ 460 PLN/ay', note: 'Ulga sonrası · gelir < 120.000 PLN' },
      { label: 'Tam ZUS', value: '~ 1.700 PLN/ay', note: '24+ ay sonra' }
    ],
    grounds: {
      title: 'JDG kime uygun',
      subtitle: 'JDG, Sp. z o.o.\'dan daha basit ve daha ucuz işletilir; ancak TRC zorunluluğu vardır ve kişisel mal varlığını korumaz.',
      items: [
        { title: 'Tek müşterili BT serbest çalışanı', desc: 'Polonyalı veya yurt dışı bir şirketle B2B sözleşmeli yazılımcı. JDG + IP Box (%5) çoğu durumda Sp. z o.o.\'dan daha avantajlı olur.' },
        { title: 'Serbest meslek mensubu', desc: 'Tasarımcı, pazarlamacı, tercüman, özel ders veren, iş danışmanı - JDG idealdir: minimum bürokrasi, vergi rejimi seçim özgürlüğü.' },
        { title: 'Küçük dükkan veya hizmet işletmesi', desc: 'Mahalle kuaförü, kafe, oto tamir. 5-10 çalışana kadar - yetki belgesiyle JDG olarak yönetilebilir.' },
        { title: 'Niş test etme', desc: 'Yükümlülüksüz başlangıç. JDG kapanışı CEIDG\'de 1 gündür - Sp. z o.o. ile karşılaştırıldığında (4-6 ay ve 4.000+ PLN) çok hızlıdır.' },
        { title: 'IP Box hakkı olan BT', desc: 'JDG liniowy %19 + IP Box (yazılım fikri mülkiyetinden gelirde %5) - efektif vergiyi %5-6\'ya kadar optimize eder.' },
        { title: 'Samozatrudnienie üzerinden oturum izni', desc: 'Aktif JDG (6+ ay) ve düzenli gelir - samozatrudniony (serbest meslek) gerekçesiyle karta pobytu için temel oluşturur. Umowa o pracę alternatifidir.' }
      ]
    },
    timeline: {
      title: 'JDG\'yi nasıl açıyoruz',
      subtitle: 'Hak kontrolünden ilk umowa\'ya kadar - genelde 3-5 iş günü.',
      steps: [
        { title: 'Ücretsiz danışmanlık', duration: '30 dk', desc: 'TRC temelinizi (działalność hakkı şart) kontrol ederiz, vergi rejimini seçeriz: skala (progresif %12/32), liniowy (lineer) %19, ryczałt (götürü), IP Box. Estonyan CIT yalnızca Sp. z o.o. içindir.' },
        { title: 'PKD kodları ve plan', duration: '1 gün', desc: 'Hizmet ve ürünlerinize uygun PKD kodlarını seçeriz. Aynı anda birden fazla kod olabilir. Ana kod ZUS oranını belirler.' },
        { title: 'CEIDG\'ye kayıt', duration: '1 gün', desc: 'Wniosek (başvuru) - ePUAP, mObywatel veya yerel Urząd Gminy (belediye dairesi) üzerinden. NIP, REGON ve VAT-R aktivasyonu.' },
        { title: 'ZUS ve Ulga na start', duration: '7 gün', desc: 'ZUS-ZUA tescili. Ulga na start aktive edilir: 6 ay sosyal primler ödenmez (yalnızca składka zdrowotna - sağlık primi ~314 PLN).' },
        { title: 'İşyeri banka hesabı', duration: '1-3 gün', desc: 'mBank, ING, PKO BP\'de konto firmowe açılışı. Asgari ciroyla JDG için genelde ücretsizdir.' },
        { title: 'JPK_V7 ve ilk beyanname', duration: 'her ay', desc: 'JPK_V7 (birleştirilmiş VAT + gider defteri) takip eden ayın 25\'ine kadar verilir. Muhasebeci sizin yerinize hazırlar.' },
        { title: 'ZUS indirimi', duration: '6 ay sonra', desc: 'Ulga sonrası - Mały ZUS Plus (yıllık gelir < 120.000 PLN ise): 24 ay boyunca ~460 PLN/ay. Sonrasında tam ZUS ~1.700 PLN/ay.' }
      ]
    },
    documents: {
      title: 'Açılış için gerekenler',
      subtitle: 'Kayıt hızlıdır - kritik nokta hak veren TRC\'nin olması.',
      items: [
        'Pasaport + działalność gospodarcza (ticari faaliyet) hakkı veren Karta Pobytu',
        'PESEL (CEIDG için zorunlu)',
        'Polonya\'da ikamet adresi (CEIDG ve Urząd Skarbowy - vergi dairesi için)',
        'Faaliyet adresi (ev adresiyle aynı olabilir)',
        'PKD kodları - danışmanlıkta seçeriz',
        'Profil zaufany / kwalifikowany podpis (gerekirse biz çıkartıyoruz)',
        'Banka hesabı - kişisel veya doğrudan firmowe',
        'Sizin yerinize biz açıyorsak - pełnomocnictwo notarialne (noter onaylı vekaletname)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'JDG açılışı devlette ücretsizdir. Yalnızca emek ve muhasebe için ödersiniz.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · vergi rejimi ve PKD' },
        { label: 'JDG açılışı', value: '3.000 PLN\'den', note: 'CEIDG + ZUS + banka + VAT-R' },
        { label: 'JDG muhasebesi', value: '700 PLN/aydan', note: 'KPiR / ryczałt + JPK_V7' },
        { label: 'JDG + işletme üzerinden oturum izni', value: '4.800 PLN\'den', note: 'JDG + samozatrudniony karta pobytu' }
      ],
      note: 'Devlet harcı yoktur - CEIDG ve ZUS ücretsizdir. ZUS-składki ~314 PLN/ay (Ulga), ~460 PLN (Mały+), ~1.700 PLN (tam). Vergi sonuçlara göre ayrıdır.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 6 marca 2018 r. - Prawo przedsiębiorców (Girişimciler Kanunu)',
        'Ustawa z dnia 26 lipca 1991 r. o podatku PIT (PIT - gelir vergisi: skala, liniowy, ryczałt)',
        'Ustawa z dnia 13 października 1998 r. o ZUS (Ulga na start, Mały ZUS Plus)',
        'Ustawa z dnia 6 marca 2018 r. o CEIDG (Merkezi Ticari Faaliyet Kayıt Sistemi)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (200.000 PLN altında muafiyet)'
      ]
    },
    faq: [
      { q: 'Yabancı JDG açabilir mi?', a: 'Yalnızca działalność gospodarcza (ticari faaliyet) hakkı veren bir Karta Pobytu varsa. Bu hakkı standart TRC (iş, işletme, aile birleşimi gerekçeli), daimi ikamet, Karta Polaka ve AB uzun dönem mukim statüsü verir. Şu durumlar açma hakkı vermez: öğrenci TRC\'si, D vizesi, vizesiz giriş. AB / EFTA vatandaşları TRC olmadan JDG açabilir.' },
      { q: 'Hangi vergi rejimi avantajlı?', a: 'İş türünüze ve gelirinize bağlıdır. Skala (%12 - 120k\'a kadar, %32 - üzeri) - çocuklu aileler için (ulga - vergi indirimi). Liniowy (lineer) %19 - 120-500k gelir için. Ryczałt (cirodan götürü) - giderleri düşük hizmetler için (cironun %3-17\'si). IP Box - yazılımcılar için (%5). Hesabı danışmanlıkta birlikte yapıyoruz.' },
      { q: 'Ulga na start nasıl işliyor?', a: 'Ulga na start (başlangıç indirimi) - ilk 6 ay yalnızca składka zdrowotna (sağlık primi, ~314 PLN/ay) ödenir. Sosyal primler (emekli, malullük, hastalık primleri) yoktur. İlk kayıtta otomatik uygulanır. Son 60 ayda JDG\'niz olduysa Ulga hakkınız kalmaz.' },
      { q: '6 aydan sonra ne oluyor?', a: 'Mały ZUS Plus (küçük ZUS+) - geçen yıl geliriniz 120.000 PLN altıysa 24 ay boyunca ~460 PLN/ay. Sonrasında tam ZUS ~1.700 PLN/ay. Bu aşamada birçok girişimci Sp. z o.o.\'ya geçer (2+ wspólnik durumunda Sp. z o.o.\'da ortağa ZUS yoktur).' },
      { q: 'JDG ve umowa o pracę bir arada olabilir mi?', a: 'Evet. Çelişmiyorlar. JDG bağımsız działalność, umowa o pracę işverene bağlı çalışmadır. ZUS umowa o pracę\'den ödenir (zarobek - kazanç asgari ücret üzeriyse), JDG sosyal primlerden muaf olur (yalnızca sağlık primi kalır).' },
      { q: 'Sp. z o.o.\'ya ne zaman geçilmeli?', a: 'Yıllık geliriniz 300.000 PLN üzeriyken, yatırımcı dahil ediyorsanız, AB kurumsal müşterilerle çalışıyorsanız (sıklıkla Sp. z o.o. talep ederler), kişisel sorumluluk riskiniz varsa (kişisel mal varlığı yalnızca Sp. z o.o.\'da korunur). Hesabı danışmanlıkta yapıyoruz.' },
      { q: 'JDG\'de IP Box ne durumda?', a: 'JDG liniowy (lineer) %19 + IP Box, yazılım fikri mülkiyeti gelirinde (kwalifikowane prawo do oprogramowania - korumalı yazılım hakkı) %5 oran sağlar. Şartlar: IP gelirleri için ayrı muhasebe, umowa przeniesienia praw (hak devir sözleşmesi), interpretacja indywidualna (bireysel vergi yorumu). Efektif vergi %5-6\'dır.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG 1 günde',
    ctaSubtitle: 'Ücretsiz danışmanlık: TRC kontrolü yaparız, vergi rejimini hesaplarız, 3-5 günde anahtar teslim açarız.'
  },
  uk: {
    slug: 'jdg',
    group: 'business',
    icon: 'landmark',
    badge: 'JDG · CEIDG · 1 день',
    title: 'Jednoosobowa działalność gospodarcza (JDG)',
    subtitle: 'Індивідуальне підприємництво в Польщі для власників карти побуту',
    lead: 'JDG — польський ФОП. Відкриття через CEIDG займає 1 день, податки — 12% / 19% / podatek liniowy / Estoński / IP Box — обираєте під дохід. Іноземець може відкрити JDG лише за наявності karty pobytu з правом на prowadzenie działalności (стандартна TRC дає це право, окрім студентської). Ведемо від вибору форми оподаткування до першої декларації JPK_V7.',
    facts: [
      { label: 'Реєстрація CEIDG', value: '1 день', note: 'онлайн через mObywatel' },
      { label: 'Стартовий ZUS', value: '0 PLN', note: 'перші 6 міс. — Ulga na start' },
      { label: 'Mały ZUS Plus', value: '~ 460 PLN/міс.', note: 'після Ulgi · дохід < 120 000 PLN' },
      { label: 'Pełny ZUS', value: '~ 1 700 PLN/міс.', note: 'після 24+ місяців' }
    ],
    grounds: {
      title: 'Кому підходить JDG',
      subtitle: 'JDG простіша й дешевша в обслуговуванні, ніж Sp. z o.o., але потребує карти побуту й не захищає особисте майно.',
      items: [
        { title: 'IT-фрілансер з одним клієнтом', desc: 'Програміст за B2B-контрактом із польською чи закордонною фірмою. JDG + IP Box (5%) часто оптимальніший за Sp. z o.o.' },
        { title: 'Самозайнятий фахівець', desc: 'Дизайнер, маркетолог, перекладач, репетитор, бізнес-консультант — JDG ідеальна: мінімум бюрократії, вибір форми податку.' },
        { title: 'Малий магазин або сервіс', desc: 'Місцева перукарня, кав’ярня, авторемонт. До 5–10 співробітників — керується як JDG з upoważnieniem.' },
        { title: 'Тестуємо нішу', desc: 'Запуск без зобов’язань. Закриття JDG — 1 день у CEIDG, на відміну від Sp. z o.o. (4–6 місяців і 4 000+ PLN).' },
        { title: 'IT із правом на IP Box', desc: 'JDG на 19% liniowy + IP Box (5% на дохід від програмістської інтелектуальної власності) — оптимізує податки до 5–6% ефективної ставки.' },
        { title: 'Подання на карту побуту через samozatrudnienie', desc: 'Активна JDG (6 міс.+) з регулярним доходом — підстава для karty pobytu для samozatrudnionych. Альтернатива роботі за umową o pracę.' }
      ]
    },
    timeline: {
      title: 'Як відкриваємо JDG',
      subtitle: 'Від перевірки прав до першої umowy — зазвичай 3–5 робочих днів.',
      steps: [
        { title: 'Безкоштовна консультація', duration: '30 хв', desc: 'Перевіряємо основу TRC (потрібне право на działalność), обираємо форму податку: skala (12/32%), liniowy 19%, ryczałt, IP Box, Estoński CIT (лише для Sp. z o.o. — не підходить).' },
        { title: 'PKD-коди і план', duration: '1 день', desc: 'Підбираємо PKD під ваші послуги/товари. Можна кілька кодів одночасно. Головний — визначає ставку ZUS.' },
        { title: 'Реєстрація в CEIDG', duration: '1 день', desc: 'Wniosek через ePUAP, mObywatel або офлайн в Urzędzie Gminy. Отримуємо NIP, REGON, активацію VAT-R.' },
        { title: 'ZUS і Ulga na start', duration: '7 днів', desc: 'Реєстрація в ZUS-ZUA. Активуємо Ulgę na start: 6 місяців без składek społecznych (лише zdrowotna ~314 PLN).' },
        { title: 'Konto firmowe в банку', duration: '1–3 дні', desc: 'Відкриваємо konto firmowe в mBanku, ING, PKO BP. Зазвичай безкоштовно для JDG з мінімальним обігом.' },
        { title: 'JPK_V7 і перша декларація', duration: 'щомісяця', desc: 'JPK_V7 (комбінований VAT + книга wydatków) до 25 числа наступного місяця. Бухгалтер робить за вас.' },
        { title: 'Знижка ZUS', duration: 'через 6 міс.', desc: 'Після Ulgi — Mały ZUS Plus (якщо дохід < 120 000 PLN/рік): ~460 PLN/міс., 24 місяці. Потім pełny ZUS ~1 700 PLN/міс.' }
      ]
    },
    documents: {
      title: 'Що потрібно для відкриття',
      subtitle: 'Реєстрація швидка — головне, щоб була підстава (TRC з правом).',
      items: [
        'Паспорт + Karta Pobytu з правом на działalność gospodarczą',
        'PESEL (обов’язковий для CEIDG)',
        'Адреса проживання в Польщі (для CEIDG і Urzędu Skarbowego)',
        'Адреса ведення бізнесу (може збігатися з домашньою)',
        'PKD-коди — обираємо на консультації',
        'Profil zaufany / kwalifikowany podpis (допомагаємо оформити)',
        'Konto bankowe — особистий або одразу firmowe',
        'Якщо не самостійно — pełnomocnictwo notarialne'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Відкриття JDG в державі безкоштовне. Платите лише за наш час і бухгалтерію.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30 хвилин · форма податку і PKD' },
        { label: 'Відкриття JDG', value: 'від 3 000 PLN', note: 'CEIDG + ZUS + bank + VAT-R' },
        { label: 'Бухгалтерія JDG', value: 'від 700 PLN/міс.', note: 'KPiR / ryczałt + JPK_V7' },
        { label: 'JDG + карта побуту через бізнес', value: 'від 4 800 PLN', note: 'JDG + karta pobytu для samozatrudnionych' }
      ],
      note: 'Держмита немає — CEIDG і ZUS безкоштовні. ZUS-składki ~314 PLN/міс. (Ulga), ~460 PLN (Mały ZUS+), ~1 700 PLN (pełny). Податок — окремо за результатами.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 6 marca 2018 r. — Prawo przedsiębiorców',
        'Ustawa z dnia 26 lipca 1991 r. o podatku PIT (skala, liniowy, ryczałt)',
        'Ustawa z dnia 13 października 1998 r. o ZUS (Ulga na start, Mały ZUS Plus)',
        'Ustawa z dnia 6 marca 2018 r. o CEIDG i Punkcie Informacji dla Przedsiębiorców',
        'Ustawa z dnia 11 marca 2004 r. o VAT (zwolnienie do 200 000 PLN)'
      ]
    },
    faq: [
      { q: 'Чи може іноземець відкрити JDG?', a: 'Лише за наявності karty pobytu (карти перебування) з правом на działalność gospodarczą (підприємницьку діяльність). Це право дає стандартна TRC за роботою / бізнесом / сім’єю, карта сталого побуту, Karta Polaka, статус резидента ЄС. Не дає: студентська TRC, віза D, безвізовий в’їзд. Громадянин ЄС/ЄЕЗ відкриває JDG без TRC.' },
      { q: 'Яка форма податку вигідніша?', a: 'Залежить від типу бізнесу та доходу. Skala (шкала, 12% до 120к, 32% вище) — для сімей з дітьми (ulga — податковий вирахунок). Liniowy (лінійний) 19% — для доходу 120–500к. Ryczałt (фіксований податок з обороту) — для послуг із малими витратами (3–17% від обороту). IP Box — для програмістів (5% на доходи від ІС). Рахуємо на консультації.' },
      { q: 'Як працює Ulga na start?', a: 'Ulga na start (пільга на старті) — перші 6 місяців — лише składka zdrowotna (внесок на медстраховку, ~314 PLN/міс.). Без składek społecznych (соцвнесків: emerytalnych — пенсійних, rentowych — на допомоги, chorobowych — лікарняних). Вмикається автоматично при першій реєстрації. Якщо у вас уже була JDG за останні 60 міс. — права на Ulgę немає.' },
      { q: 'Що після 6 місяців?', a: 'Mały ZUS Plus (малий ZUS-плюс) — 24 місяці ~460 PLN/міс. (якщо торішній дохід < 120 000 PLN/рік). Потім pełny ZUS (повний ZUS) ~1 700 PLN/міс. На цій стадії багато переходять на Sp. z o.o. (немає ZUS у засновника при 2+ wspólnikach — учасниках).' },
      { q: 'Чи можна мати JDG і umowę o pracę одночасно?', a: 'Так. Не суперечать. JDG — незалежна działalność (діяльність), umowa o pracę (трудовий договір) — робота на роботодавця. ZUS сплачується з umowy o pracę (якщо zarobek — заробіток > minimum krajowe — мінімальної зарплати), JDG звільняється від ZUS-składek społecznych (соцвнесків).' },
      { q: 'Коли переходити на Sp. z o.o.?', a: 'При доході > 300 000 PLN/рік, при залученні інвесторів, при роботі з ЄС-корпораціями (часто вимагають Sp. z o.o.), при ризику відповідальності (особисте майно захищається лише у Sp. z o.o.). На консультації робимо розрахунок.' },
      { q: 'Що з IP Box на JDG?', a: 'JDG на liniowy (лінійному) 19% + IP Box дає 5% на дохід від програмістської ІС (kwalifikowanego prawa do oprogramowania — кваліфікованого права на ПЗ). Умови: ведете окремий облік доходів від IP, маєте umowę przeniesienia praw (договір передачі прав), готуєте interpretację indywidualną (індивідуальну податкову інтерпретацію). Ефективний податок — 5–6%.' }
    ],
    related: ['rejestracja-sp-z-oo', 'podatki-ksiegowosc', 'karta-pobytu'],
    ctaTitle: 'JDG за 1 день',
    ctaSubtitle: 'Безкоштовна консультація: перевіряємо TRC, рахуємо форму податку, відкриваємо за 3–5 днів під ключ.'
  }
};

export default jdg;
