import type { ServiceEntry } from './types';

const podatkiKsiegowosc: ServiceEntry = {
  ru: {
    slug: 'podatki-ksiegowosc',
    group: 'business',
    icon: 'scale',
    badge: 'CIT · VAT · PIT · Estonian CIT · IP Box',
    title: 'Налоги и бухгалтерия',
    subtitle: 'Польская налоговая оптимизация: CIT 9%, Estonian CIT, IP Box 5%, VAT-UE',
    lead: 'Польская система налогообложения — одна из самых сложных в ЕС: CIT 9/19%, Estonian CIT (отложенный), IP Box 5%, VAT 23/8/5/0%, JPK_V7 ежемесячно, KSeF с 2026, polski ład с тысячами поправок. Мы подбираем форму под ваш бизнес, ведём бухгалтерию (партнёрская сеть księgowych), готовим декларации и сопровождаем налоговые проверки. Работаем с Sp. z o.o., JDG, oddziałami, fundacjami rodzinnymi.',
    facts: [
      { label: 'CIT малых', value: '9%', note: 'оборот < 2 млн EUR/год' },
      { label: 'Estonian CIT', value: '0% / 20%', note: 'до выплаты дивидендов' },
      { label: 'IP Box', value: '5%', note: 'на доходы от ИС' },
      { label: 'VAT', value: '23 / 8 / 5 / 0%', note: 'основная и пониженные' }
    ],
    grounds: {
      title: 'Что включает обслуживание',
      subtitle: 'Полный цикл от регистрации до годовой декларации. Можно брать модулями.',
      items: [
        { title: 'Подбор формы налогообложения', desc: 'Skala (12/32%) vs liniowy 19% vs ryczałt vs Estoński CIT vs IP Box. Считаем под ваши доходы и расходы за 1–2 года вперёд. Меняем при необходимости.' },
        { title: 'Месячная бухгалтерия', desc: 'Учёт операций (księga handlowa или KPiR), заrаботная плата, ZUS, JPK_V7, JPK_KR, амортизация, налоги. Документы — через klienta панель.' },
        { title: 'VAT и JPK', desc: 'Месячная или квартальная JPK_V7 (комбинированная декларация VAT + ewidencja). VAT-UE для ЕС-операций. KSeF (Krajowy System e-Faktur) с 2026 — переход за вас.' },
        { title: 'Декларации годовые', desc: 'CIT-8 для Sp. z o.o., PIT-36/36L/28 для JDG, sprawozdanie finansowe в KRS. Подача через ePUAP. Сроки: 31 марта (CIT), 30 апреля (PIT).' },
        { title: 'Estonian CIT', desc: 'Переход на отложенный CIT — налог 0% пока прибыль реинвестируется, 20% при выплате дивидендов. Условия: 2+ wspólnika, не более 50% доходов с пасивных источников. Полный сопровождение.' },
        { title: 'IP Box', desc: 'Льготная ставка 5% на доходы от kwalifikowanego prawa do ИС (программистская). Готовим: ewidencja IP, interpretacja indywidualna в Krajowej Informacji Skarbowej, годовая декларация PIT/CIT с aneksem.' },
        { title: 'Налоговые проверки', desc: 'Сопровождение kontroli celno-skarbowej. Подготовка ответов, представительство в US, апелляции в WSA / NSA при otrzymaniu nieprawidłowej decyzji.' },
        { title: 'Транзит-цены', desc: 'Документация cen transferowych для Sp. z o.o. с зарубежными podmiotami powiązanymi. Метод porównywalnej ceny niekontrolowanej, marży transakcyjnej netto.' }
      ]
    },
    timeline: {
      title: 'Как стартует обслуживание',
      subtitle: 'Подключение нового клиента — обычно 1–2 недели.',
      steps: [
        { title: 'Бесплатная консультация', duration: '60 мин', desc: 'Аудит текущей бухгалтерии (если есть), оценка налоговой формы, расчёт сэкономленных сумм при переходе на оптимальную форму.' },
        { title: 'Договор и pełnomocnictwo', duration: '1 день', desc: 'Umowa o usługi księgowe и UPL-1 (полномочие представлять перед US). Сразу можем подавать декларации от вашего имени.' },
        { title: 'Передача bazy', duration: '3–5 дней', desc: 'Импорт текущей księgi (если переходите от другого buchaltera), реестры VAT, ewidencja środków trwałych. Используем Streamsoft, Comarch, Symfonia.' },
        { title: 'Audit pierwszego miesiąca', duration: '1 неделя', desc: 'Проверяем последние 3 mies. ваших declaracji на ошибки. Часто находим переплаты VAT — подаём korektę и возвращаем.' },
        { title: 'Месячный режим', duration: 'постоянно', desc: 'Документы загружаете через portal или присылаете на email. Бухгалтер обрабатывает, готовит JPK_V7 к 25 числу. Klient panel показывает статус.' },
        { title: 'Квартальные обзоры', duration: '4 раза в год', desc: 'Встреча с księgowym: разбор показателей, оптимизация налогов на следующий квартал, planowanie. Всегда есть пространство для оптимизации.' },
        { title: 'Годовое закрытие', duration: 'январь-апрель', desc: 'Sprawozdanie finansowe, CIT-8/PIT-36, sprawozdanie do KRS, badanie biegłego rewidenta (если требуется). Один раз в год.' }
      ]
    },
    documents: {
      title: 'Что вы передаёте каждый месяц',
      subtitle: 'Минимум документов — максимум автоматизации. Сканы или фото — достаточно.',
      items: [
        'Faktury sprzedaży (счета на ваших клиентов)',
        'Faktury zakupu (счета от поставщиков, аренда, услуги)',
        'Wyciągi bankowe (выписки со всех счетов)',
        'Listy płac (для сотрудников и umów-zleceń)',
        'Umowy najmu, leasing, кредитные umowy',
        'Документы об импорте/экспорте (faktury celne, CMR)',
        'Inwentaryzacja (раз в год для księgi handlowej)',
        'Списки умenia za granicą (для Sp. z o.o. с зарубежными podmiotami)',
        'Stan środków trwałych (приобретение/выбытие)'
      ]
    },
    pricing: {
      title: 'Стоимость обслуживания',
      subtitle: 'Тарифы по объёму операций. Разовые задачи (декларации, оптимизация) — отдельно.',
      items: [
        { label: 'JDG · ryczałt', value: 'от 250 PLN/мес', note: 'до 30 операций · JPK_V7' },
        { label: 'JDG · KPiR + VAT', value: 'от 450 PLN/мес', note: 'до 50 операций' },
        { label: 'Sp. z o.o. · księga handlowa', value: 'от 950 PLN/мес', note: 'до 50 операций · sprawozdanie' },
        { label: 'Sp. z o.o. · комплекс', value: 'от 1 800 PLN/мес', note: 'IP Box / Estoński CIT / TP' }
      ],
      note: 'Тарифы для małej skali. Для среднего бизнеса (100+ операций/мес) — индивидуальный расчёт. Sprawozdanie roczne — отдельно (600–1 800 PLN). Налоговый аудит и переход на новую форму — 1 500–4 000 PLN.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 15 lutego 1992 r. o CIT (z poprawkami Polski Ład 2.0 i 3.0)',
        'Ustawa z dnia 26 lipca 1991 r. o PIT (skala, liniowy, ryczałt)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (KSeF od 2026)',
        'Ustawa z dnia 29 września 1994 r. o rachunkowości (księgi handlowe)',
        'Ordynacja podatkowa z dnia 29 sierpnia 1997 r.',
        'Rozporządzenie MF ws. JPK_V7, JPK_KR, JPK_FA',
        'Ustawa z dnia 26 maja 2023 r. o KSeF (Krajowy System e-Faktur)'
      ]
    },
    faq: [
      { q: 'Estonian CIT — кому подходит?', a: 'Sp. z o.o. с 2+ wspólnikami (физлица), доход с пассивных источников < 50%, минимум 3 сотрудника на umowę o pracę (или wspólnicy сами). Реинвестируемая прибыль — 0% налог. Дивиденды — 20% CIT + 19% PIT (effective ~25%). Идеально для растущих фирм, которые реинвестируют прибыль.' },
      { q: 'IP Box — для каких программистов?', a: 'JDG или Sp. z o.o., создающие kwalifikowane prawa do programów komputerowych (своё ПО, не передающие чужое ПО). Условия: ведёте раздельный учёт, имеете umowę przeniesienia praw, готовите interpretację indywidualną в KIS. Effective налог 5% на доход от ИС. Окупаемость setupa за 1–2 месяца.' },
      { q: 'Что такое KSeF и когда переход?', a: 'KSeF — Krajowy System e-Faktur. С 1 февраля 2026 — обязательный для всех VAT podatników. Все faktury выставляются через KSeF онлайн, каждая с уникальным KSeF ID. Подготавливаем интеграцию вашего софта (Comarch, iFirma, Subiekt, Symfonia) с KSeF, обучаем сотрудников.' },
      { q: 'JDG → Sp. z o.o. — как переходить?', a: 'Не «преобразование», а две операции: закрытие JDG (CEIDG) + регистрация Sp. z o.o. + transfer аktуш. Транзит активов — apport (вклад в капитал, освобождение от VAT при apporcie przedsiębiorstwa) или sprzedaż (обычный VAT и PIT). Под ключ за 4–6 недель, 4 500–7 500 PLN.' },
      { q: 'Налоговая проверка — что делать?', a: 'Не общайтесь с inspektorem без налогового консультанта. Получив zawiadomienie o kontroli, у вас есть 7 дней на подготовку. Делаем экспресс-аудит того, что проверяют, готовим документы, представляем интересы. При risiku negatywnej decyzji — заранее идём на porozumienie i wyjaśnienia. После: апелляция в Dyrektora Izby Administracji Skarbowej и WSA.' },
      { q: 'Сколько стоит content бухгалтерия для Sp. z o.o.?', a: 'JDG ryczałt — 250 PLN/мес, JDG KPiR — 450, Sp. z o.o. księga — 950, Sp. z o.o. с IP Box — 1 800. Это для малого бизнеса (до 50 операций/мес). Sprawozdanie roczne — отдельно 600–1 800 PLN. Реальная стоимость для активной Sp. z o.o. — 12–25 тыс. PLN/год вкл. sprawozdanie.' },
      { q: 'Сроки подачи деклараций?', a: 'JPK_V7 — до 25 числа следующего месяца. CIT-8 — 31 марта (за прошлый год). PIT-36/36L — 30 апреля. Sprawozdanie finansowe — 6 месяцев после końca roku obrotowego (для Sp. z o.o. — 30 czerwca). За опоздание — kary do 720 stawek dziennych (~50 000 PLN).' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Налоги и бухгалтерия под ключ',
    ctaSubtitle: 'Бесплатный аудит текущей формы и расчёт экономии при переходе на оптимальную. От 250 PLN/мес.'
  },
  pl: {
    slug: 'podatki-ksiegowosc',
    group: 'business',
    icon: 'scale',
    badge: 'CIT · VAT · PIT · Estoński CIT · IP Box',
    title: 'Podatki i księgowość',
    subtitle: 'Optymalizacja podatkowa: CIT 9%, Estoński CIT, IP Box 5%, VAT-UE',
    lead: 'Polski system podatkowy to jeden z najbardziej skomplikowanych w UE: CIT 9/19%, Estoński CIT, IP Box 5%, VAT 23/8/5/0%, JPK_V7 miesięcznie, KSeF od 2026. Dobieramy formę pod biznes, prowadzimy księgowość (sieć partnerska księgowych), przygotowujemy deklaracje, prowadzimy kontrole. Sp. z o.o., JDG, oddziały, fundacje rodzinne.',
    facts: [
      { label: 'Mały CIT', value: '9%', note: '< 2 mln € rocznie' },
      { label: 'Estoński CIT', value: '0% / 20%', note: 'do dywidendy' },
      { label: 'IP Box', value: '5%', note: 'dochód z IP' },
      { label: 'VAT', value: '23 / 8 / 5 / 0%', note: 'stawki' }
    ],
    grounds: {
      title: 'Co zawiera obsługa',
      subtitle: 'Pełen cykl od rejestracji do rocznej deklaracji. Modułowo.',
      items: [
        { title: 'Forma podatkowa', desc: 'Skala (12/32%) vs liniowy vs ryczałt vs Estoński CIT vs IP Box. Liczymy 1–2 lata naprzód.' },
        { title: 'Księgowość miesięczna', desc: 'Księga handlowa lub KPiR, płace, ZUS, JPK_V7, JPK_KR, amortyzacja.' },
        { title: 'VAT i JPK', desc: 'JPK_V7 (VAT + ewidencja). VAT-UE. KSeF od 2026.' },
        { title: 'Deklaracje roczne', desc: 'CIT-8, PIT-36/36L/28, sprawozdanie do KRS.' },
        { title: 'Estoński CIT', desc: 'Przejście, prowadzenie, weryfikacja warunków.' },
        { title: 'IP Box', desc: 'Ewidencja IP, interpretacja indywidualna, deklaracja.' },
        { title: 'Kontrole skarbowe', desc: 'Asysta przy kontroli celno-skarbowej, odwołania.' },
        { title: 'Ceny transferowe', desc: 'Dokumentacja TP dla Sp. z o.o. z podmiotami powiązanymi.' }
      ]
    },
    timeline: {
      title: 'Start obsługi',
      subtitle: '1–2 tygodnie do pełnego onboarding.',
      steps: [
        { title: 'Konsultacja', duration: '60 min', desc: 'Audyt aktualnej księgowości, ocena formy, kalkulacja oszczędności.' },
        { title: 'Umowa + UPL-1', duration: '1 dzień', desc: 'Pełnomocnictwo przed US.' },
        { title: 'Przekazanie bazy', duration: '3–5 dni', desc: 'Import księgi, rejestrów VAT. Streamsoft, Comarch, Symfonia.' },
        { title: 'Audyt pierwszego miesiąca', duration: '1 tydz.', desc: 'Sprawdzenie ostatnich 3 mies. — często znajdujemy przepłaty VAT.' },
        { title: 'Tryb miesięczny', duration: 'stale', desc: 'Dokumenty przez portal. JPK_V7 do 25-go.' },
        { title: 'Przeglądy kwartalne', duration: '4×/rok', desc: 'Spotkanie z księgowym, optymalizacja.' },
        { title: 'Zamknięcie roczne', duration: 'sty-kwi', desc: 'Sprawozdanie finansowe, CIT/PIT, KRS, badanie biegłego.' }
      ]
    },
    documents: {
      title: 'Co przekazujesz miesięcznie',
      subtitle: 'Minimum dokumentów. Skany lub zdjęcia.',
      items: [
        'Faktury sprzedaży',
        'Faktury zakupu',
        'Wyciągi bankowe',
        'Listy płac',
        'Umowy najmu, leasing, kredyt',
        'Dokumenty importu/eksportu',
        'Inwentaryzacja (1×/rok)',
        'Umowy z podmiotami powiązanymi',
        'Stan środków trwałych'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Tarify wg liczby operacji.',
      items: [
        { label: 'JDG ryczałt', value: 'od 250 PLN/mies.', note: 'do 30 operacji' },
        { label: 'JDG KPiR + VAT', value: 'od 450 PLN/mies.', note: 'do 50 operacji' },
        { label: 'Sp. z o.o. księga handlowa', value: 'od 950 PLN/mies.', note: 'do 50 operacji' },
        { label: 'Sp. z o.o. kompleks', value: 'od 1 800 PLN/mies.', note: 'IP Box / Estoński / TP' }
      ],
      note: 'Mała skala. Sprawozdanie roczne osobno (600–1 800 PLN). Średni biznes — kalkulacja indywidualna.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 15 lutego 1992 r. o CIT (Polski Ład 2.0/3.0)',
        'Ustawa z 26 lipca 1991 r. o PIT',
        'Ustawa z 11 marca 2004 r. o VAT (KSeF od 2026)',
        'Ustawa z 29 września 1994 r. o rachunkowości',
        'Ordynacja podatkowa z 29 sierpnia 1997 r.',
        'Rozporządzenia MF ws. JPK',
        'Ustawa z 26 maja 2023 r. o KSeF'
      ]
    },
    faq: [
      { q: 'Estoński CIT — dla kogo?', a: 'Sp. z o.o. z 2+ wspólnikami (osobami fiz.), pasywne dochody < 50%, min. 3 pracowników. Reinwestowanie — 0%. Dywidenda — 20% CIT + 19% PIT.' },
      { q: 'IP Box dla programistów?', a: 'JDG/Sp. z o.o. tworzące kwalifikowane prawa do programów. Rozdzielona księgowość, umowa przeniesienia praw, interpretacja KIS. Efektywnie 5%.' },
      { q: 'KSeF kiedy?', a: 'Od 1 lutego 2026 obowiązkowy. Każda faktura przez KSeF z unikalnym ID. Robimy integrację.' },
      { q: 'JDG → Sp. z o.o.?', a: 'Zamknięcie JDG + rejestracja Sp. z o.o. + transfer (apport zwolniony z VAT). 4–6 tygodni, 4 500–7 500 PLN.' },
      { q: 'Kontrola podatkowa?', a: 'Zawiadomienie — 7 dni na przygotowanie. Audyt, dokumenty, reprezentacja. Apelacja w IAS i WSA.' },
      { q: 'Koszt księgowości Sp. z o.o.?', a: 'Mała Sp. z o.o. — 12–25 tys. PLN/rok wraz ze sprawozdaniem.' },
      { q: 'Terminy?', a: 'JPK_V7 do 25-go. CIT-8 do 31 marca. PIT do 30 kwietnia. Sprawozdanie do 30 czerwca.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Podatki pod klucz',
    ctaSubtitle: 'Bezpłatny audyt formy. Od 250 PLN/mies.'
  },
  en: {
    slug: 'podatki-ksiegowosc',
    group: 'business',
    icon: 'scale',
    badge: 'CIT · VAT · PIT · Estonian CIT · IP Box',
    title: 'Tax and accounting',
    subtitle: 'Polish tax optimization: CIT 9%, Estonian CIT, IP Box 5%, VAT-UE',
    lead: 'Poland\'s tax system is one of the most complex in the EU: CIT 9/19%, Estonian CIT (deferred), IP Box 5%, VAT 23/8/5/0%, monthly JPK_V7, KSeF mandatory from 2026. We pick the form for your business, run the bookkeeping (partner network of accountants), prepare returns, and represent you in audits. Sp. z o.o., JDG, branches, family foundations.',
    facts: [
      { label: 'Small CIT', value: '9%', note: 'revenue < 2M EUR/year' },
      { label: 'Estonian CIT', value: '0% / 20%', note: 'until dividends paid' },
      { label: 'IP Box', value: '5%', note: 'on IP income' },
      { label: 'VAT', value: '23 / 8 / 5 / 0%', note: 'standard and reduced' }
    ],
    grounds: {
      title: 'What we cover',
      subtitle: 'Full cycle from registration to annual returns. Modular.',
      items: [
        { title: 'Tax form selection', desc: 'Progressive (12/32%) vs flat 19% vs lump sum vs Estonian CIT vs IP Box. Modeled 1–2 years ahead.' },
        { title: 'Monthly bookkeeping', desc: 'Full ledger or simplified KPiR, payroll, ZUS, JPK_V7, JPK_KR, depreciation.' },
        { title: 'VAT and JPK', desc: 'Combined VAT + ledger via JPK_V7. VAT-UE. KSeF from 2026.' },
        { title: 'Annual returns', desc: 'CIT-8 for Sp. z o.o., PIT-36/36L/28 for JDG, financial statements to KRS.' },
        { title: 'Estonian CIT', desc: 'Migration, ongoing compliance, condition checks.' },
        { title: 'IP Box', desc: 'IP register, individual ruling at KIS, annual return with addendum.' },
        { title: 'Tax audits', desc: 'Customs and tax inspections. Document prep, representation, appeals to WSA / NSA.' },
        { title: 'Transfer pricing', desc: 'TP documentation for Sp. z o.o. with related parties abroad.' }
      ]
    },
    timeline: {
      title: 'Onboarding',
      subtitle: 'New client setup typically 1–2 weeks.',
      steps: [
        { title: 'Free consultation', duration: '60 min', desc: 'Current bookkeeping audit, form review, savings calc.' },
        { title: 'Engagement + UPL-1', duration: '1 day', desc: 'Service contract and tax-office representation power.' },
        { title: 'Data handover', duration: '3–5 days', desc: 'Import existing books, VAT registers. Streamsoft, Comarch, Symfonia.' },
        { title: 'First-month audit', duration: '1 week', desc: 'Last 3 months reviewed for errors — often find VAT overpayments and refile.' },
        { title: 'Monthly mode', duration: 'ongoing', desc: 'Documents via portal. JPK_V7 by 25th of next month.' },
        { title: 'Quarterly reviews', duration: '4×/year', desc: 'Bookkeeper meeting, optimization, planning.' },
        { title: 'Year-end close', duration: 'Jan–Apr', desc: 'Financial statements, CIT-8/PIT-36, KRS filing, audit if required.' }
      ]
    },
    documents: {
      title: 'What you send each month',
      subtitle: 'Scans or photos suffice.',
      items: [
        'Sales invoices',
        'Purchase invoices',
        'Bank statements',
        'Payroll records',
        'Lease, leasing, loan agreements',
        'Import/export documents',
        'Inventory (annual)',
        'Related-party transactions',
        'Fixed assets (acquisitions/disposals)'
      ]
    },
    pricing: {
      title: 'Service fee',
      subtitle: 'By transaction volume.',
      items: [
        { label: 'JDG · lump sum', value: 'from 250 PLN/mo', note: 'up to 30 ops · JPK_V7' },
        { label: 'JDG · KPiR + VAT', value: 'from 450 PLN/mo', note: 'up to 50 ops' },
        { label: 'Sp. z o.o. · full ledger', value: 'from 950 PLN/mo', note: 'up to 50 ops · statements' },
        { label: 'Sp. z o.o. · complex', value: 'from 1,800 PLN/mo', note: 'IP Box / Estonian / TP' }
      ],
      note: 'Small-scale tariffs. Annual statements separate (600–1,800 PLN). Mid-size businesses (100+ ops/month) — custom quote.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'CIT Act of 15 February 1992 (with Polski Ład 2.0/3.0 amendments)',
        'PIT Act of 26 July 1991 (progressive, flat, lump sum)',
        'VAT Act of 11 March 2004 (KSeF from 2026)',
        'Accounting Act of 29 September 1994',
        'Tax Ordinance of 29 August 1997',
        'MF Regulations on JPK_V7, JPK_KR, JPK_FA',
        'KSeF Act of 26 May 2023'
      ]
    },
    faq: [
      { q: 'Estonian CIT — who fits?', a: 'Sp. z o.o. with 2+ individual shareholders, passive income < 50%, minimum 3 employees. 0% on retained profits, 20% CIT + 19% PIT on dividends (~25% effective). Ideal for growth-stage reinvesting companies.' },
      { q: 'IP Box for which devs?', a: 'JDG or Sp. z o.o. creating qualified IP rights to software. Need separated IP accounting, IP transfer agreement, individual KIS ruling. ~5% effective on IP income.' },
      { q: 'KSeF — when?', a: 'Mandatory from 1 February 2026 for all VAT taxpayers. Every invoice goes through KSeF with a unique ID. We integrate your accounting software (Comarch, iFirma, Subiekt, Symfonia).' },
      { q: 'JDG → Sp. z o.o. migration?', a: "Not a true conversion — close JDG + register Sp. z o.o. + transfer assets (apport, VAT-exempt for going-concern). Turnkey 4–6 weeks, 4,500–7,500 PLN." },
      { q: 'Tax audit?', a: "Don't speak to the inspector without counsel. After audit notice you have 7 days to prepare. We audit what they're checking, prepare documents, represent. Appeal route: IAS Director, then WSA." },
      { q: 'Real cost for Sp. z o.o. bookkeeping?', a: 'Small Sp. z o.o. — 12–25k PLN/year including annual statements. JDG lump sum — under 4,000 PLN/year.' },
      { q: 'Filing deadlines?', a: 'JPK_V7 by 25th of next month. CIT-8 by March 31. PIT by April 30. Financial statements 6 months after fiscal year end (Sp. z o.o. — June 30). Late filing — fines up to ~50,000 PLN.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Tax and accounting turnkey',
    ctaSubtitle: 'Free form audit and savings calc. From 250 PLN/month.'
  }
};

export default podatkiKsiegowosc;
