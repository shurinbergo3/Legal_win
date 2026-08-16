import type { ServiceEntry } from './types';

const podatkiKsiegowosc: ServiceEntry = {
  ru: {
    slug: 'podatki-ksiegowosc',
    group: 'business',
    icon: 'scale',
    badge: 'CIT · VAT · PIT · Estonian CIT · IP Box',
    title: 'Налоги и бухгалтерия',
    subtitle: 'Польская налоговая оптимизация: CIT 9%, Estonian CIT, IP Box 5%, VAT-UE',
    lead: 'Польская система налогообложения - одна из самых сложных в ЕС: CIT 9/19%, Estonian CIT (отложенный), IP Box 5%, VAT 23/8/5/0%, JPK_V7 ежемесячно, KSeF с 2026, polski ład с тысячами поправок. Мы подбираем форму под ваш бизнес, ведём бухгалтерию (партнёрская сеть księgowych), готовим декларации и сопровождаем налоговые проверки. Работаем с Sp. z o.o., JDG, oddziałami, fundacjami rodzinnymi.',
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
        { title: 'Подбор формы налогообложения', desc: 'Skala (12/32%) vs liniowy 19% vs ryczałt vs Estoński CIT vs IP Box. Считаем под ваши доходы и расходы за 1-2 года вперёд. Меняем при необходимости.' },
        { title: 'Месячная бухгалтерия', desc: 'Учёт операций (księga handlowa или KPiR), заработная плата, ZUS, JPK_V7, JPK_KR, амортизация, налоги. Документы - через klienta панель.' },
        { title: 'VAT и JPK', desc: 'Месячная или квартальная JPK_V7 (комбинированная декларация VAT + ewidencja). VAT-UE для ЕС-операций. KSeF (Krajowy System e-Faktur) с 2026 - переход за вас.' },
        { title: 'Декларации годовые', desc: 'CIT-8 для Sp. z o.o., PIT-36/36L/28 для JDG, sprawozdanie finansowe в KRS. Подача через ePUAP. Сроки: 31 марта (CIT), 30 апреля (PIT).' },
        { title: 'Estonian CIT', desc: 'Переход на отложенный CIT - налог 0% пока прибыль реинвестируется, 20% при выплате дивидендов. Условия: 2+ wspólnika, не более 50% доходов с пасивных источников. Полный сопровождение.' },
        { title: 'IP Box', desc: 'Льготная ставка 5% на доходы от kwalifikowanego prawa do ИС (программистская). Готовим: ewidencja IP, interpretacja indywidualna в Krajowej Informacji Skarbowej, годовая декларация PIT/CIT с aneksem.' },
        { title: 'Налоговые проверки', desc: 'Сопровождение kontroli celno-skarbowej. Подготовка ответов, представительство в US, апелляции в WSA / NSA при otrzymaniu nieprawidłowej decyzji.' },
        { title: 'Транзит-цены', desc: 'Документация cen transferowych для Sp. z o.o. с зарубежными podmiotami powiązanymi. Метод porównywalnej ceny niekontrolowanej, marży transakcyjnej netto.' }
      ]
    },
    timeline: {
      title: 'Как стартует обслуживание',
      subtitle: 'Подключение нового клиента - обычно 1-2 недели.',
      steps: [
        { title: 'Бесплатная консультация', duration: '60 мин', desc: 'Аудит текущей бухгалтерии (если есть), оценка налоговой формы, расчёт сэкономленных сумм при переходе на оптимальную форму.' },
        { title: 'Договор и pełnomocnictwo', duration: '1 день', desc: 'Umowa o usługi księgowe и UPL-1 (полномочие представлять перед US). Сразу можем подавать декларации от вашего имени.' },
        { title: 'Передача bazy', duration: '3-5 дней', desc: 'Импорт текущей księgi (если переходите от другого buchaltera), реестры VAT, ewidencja środków trwałych. Используем Streamsoft, Comarch, Symfonia.' },
        { title: 'Audit pierwszego miesiąca', duration: '1 неделя', desc: 'Проверяем последние 3 mies. ваших declaracji на ошибки. Часто находим переплаты VAT - подаём korektę и возвращаем.' },
        { title: 'Месячный режим', duration: 'постоянно', desc: 'Документы загружаете через portal или присылаете на email. Бухгалтер обрабатывает, готовит JPK_V7 к 25 числу. Klient panel показывает статус.' },
        { title: 'Квартальные обзоры', duration: '4 раза в год', desc: 'Встреча с księgowym: разбор показателей, оптимизация налогов на следующий квартал, planowanie. Всегда есть пространство для оптимизации.' },
        { title: 'Годовое закрытие', duration: 'январь-апрель', desc: 'Sprawozdanie finansowe, CIT-8/PIT-36, sprawozdanie do KRS, badanie biegłego rewidenta (если требуется). Один раз в год.' }
      ]
    },
    documents: {
      title: 'Что вы передаёте каждый месяц',
      subtitle: 'Минимум документов - максимум автоматизации. Сканы или фото - достаточно.',
      items: [
        'Faktury sprzedaży (счета на ваших клиентов)',
        'Faktury zakupu (счета от поставщиков, аренда, услуги)',
        'Wyciągi bankowe (выписки со всех счетов)',
        'Listy płac (для сотрудников и umów-zleceń)',
        'Umowy najmu, leasing, кредитные umowy',
        'Документы об импорте/экспорте (faktury celne, CMR)',
        'Inwentaryzacja (раз в год для księgi handlowej)',
        'Списки umów za granicą (для Sp. z o.o. с зарубежными podmiotami)',
        'Stan środków trwałych (приобретение/выбытие)'
      ]
    },
    pricing: {
      title: 'Стоимость обслуживания',
      subtitle: 'Тарифы по объёму операций. Разовые задачи (декларации, оптимизация) - отдельно.',
      items: [
        { label: 'JDG · ryczałt', value: 'от 700 PLN/мес', note: 'до 30 операций · JPK_V7' },
        { label: 'JDG · KPiR + VAT', value: 'от 900 PLN/мес', note: 'до 50 операций' },
        { label: 'Sp. z o.o. · księga handlowa', value: 'от 1 200 PLN/мес', note: 'до 50 операций · sprawozdanie' },
        { label: 'Sp. z o.o. · комплекс', value: 'от 1 800 PLN/мес', note: 'IP Box / Estoński CIT / TP' },
        { label: 'Нулевые декларации и отчёты', value: 'от 800 PLN', note: 'Разово · JPK_V7 / CIT-8 / sprawozdanie' }
      ],
      note: 'Тарифы для małej skali. Для среднего бизнеса (100+ операций/мес) - индивидуальный расчёт. Sprawozdanie roczne - отдельно (600-1 800 PLN). Налоговый аудит и переход на новую форму - 1 500-4 000 PLN.'
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
      { q: 'Estonian CIT - кому подходит?', a: 'Sp. z o.o. с 2+ wspólnikami (участниками - физлицами), доход с пассивных источников < 50%, минимум 3 сотрудника на umowę o pracę (трудовом договоре) (или wspólnicy сами). Реинвестируемая прибыль - 0% налог. Дивиденды - 20% CIT + 19% PIT (effective ~25%). Идеально для растущих фирм, которые реинвестируют прибыль.' },
      { q: 'IP Box - для каких программистов?', a: 'JDG или Sp. z o.o., создающие kwalifikowane prawa do programów komputerowych (квалифицированные права на компьютерные программы - своё ПО, не передающие чужое ПО). Условия: ведёте раздельный учёт, имеете umowę przeniesienia praw (договор передачи прав), готовите interpretację indywidualną (индивидуальную налоговую интерпретацию) в KIS (Krajowa Informacja Skarbowa - Национальная налоговая информация). Effective налог 5% на доход от ИС. Окупаемость setupa за 1-2 месяца.' },
      { q: 'Что такое KSeF и когда переход?', a: 'KSeF - Krajowy System e-Faktur (Национальная система электронных фактур). Принимать e-фактуры обязаны все с 1 февраля 2026, выставлять - с 1 апреля 2026 (крупные, с оборотом свыше 200 млн zł, - уже с 1 февраля). Микрофирмы до 10 000 zł в месяц могут по-старому до конца 2026. Все faktury (счета-фактуры) выставляются через KSeF онлайн, каждая с уникальным KSeF ID. Подготавливаем интеграцию вашего софта (Comarch, iFirma, Subiekt, Symfonia) с KSeF, обучаем сотрудников.' },
      { q: 'JDG → Sp. z o.o. - как переходить?', a: 'Не «преобразование», а две операции: закрытие JDG (CEIDG - реестр индивидуальных предпринимателей) + регистрация Sp. z o.o. + transfer активов. Транзит активов - apport (вклад в капитал, освобождение от VAT при apporcie przedsiębiorstwa - внесении предприятия как вклада) или sprzedaż (продажа, обычный VAT и PIT). Под ключ за 4-6 недель, 4 500-7 500 PLN.' },
      { q: 'Налоговая проверка - что делать?', a: 'Не общайтесь с inspektorem (инспектором) без налогового консультанта. Получив zawiadomienie o kontroli (уведомление о проверке), у вас есть 7 дней на подготовку. Делаем экспресс-аудит того, что проверяют, готовим документы, представляем интересы. При risiku negatywnej decyzji (риске негативного решения) - заранее идём на porozumienie i wyjaśnienia (соглашение и пояснения). После: апелляция в Dyrektora Izby Administracji Skarbowej (Директору налоговой палаты) и WSA (Воеводский админсуд).' },
      { q: 'Сколько реально стоит бухгалтерия для Sp. z o.o.?', a: 'JDG ryczałt - 700 PLN/мес, JDG KPiR (книга доходов и расходов) - 900, Sp. z o.o. księga (полная книга учёта) - 1 200, Sp. z o.o. с IP Box - 1 800. Это для малого бизнеса (до 50 операций/мес). Sprawozdanie roczne (годовой отчёт) - отдельно 600-1 800 PLN. Реальная стоимость для активной Sp. z o.o. - 12-25 тыс. PLN/год вкл. sprawozdanie.' },
      { q: 'Сроки подачи деклараций?', a: 'JPK_V7 (электронная декларация НДС + регистр) - до 25 числа следующего месяца. CIT-8 - 31 марта (за прошлый год). PIT-36/36L - 30 апреля. Sprawozdanie finansowe (финансовый отчёт) - 6 месяцев после końca roku obrotowego (конца финансового года, для Sp. z o.o. - 30 czerwca). За опоздание - kary do 720 stawek dziennych (штрафы до 720 дневных ставок, ~50 000 PLN).' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Налоги и бухгалтерия под ключ',
    ctaSubtitle: 'Бесплатный аудит текущей формы и расчёт экономии при переходе на оптимальную. От 700 PLN/мес.'
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
        { title: 'Forma podatkowa', desc: 'Skala (12/32%) vs liniowy vs ryczałt vs Estoński CIT vs IP Box. Liczymy 1-2 lata naprzód.' },
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
      subtitle: '1-2 tygodnie do pełnego onboarding.',
      steps: [
        { title: 'Konsultacja', duration: '60 min', desc: 'Audyt aktualnej księgowości, ocena formy, kalkulacja oszczędności.' },
        { title: 'Umowa + UPL-1', duration: '1 dzień', desc: 'Pełnomocnictwo przed US.' },
        { title: 'Przekazanie bazy', duration: '3-5 dni', desc: 'Import księgi, rejestrów VAT. Streamsoft, Comarch, Symfonia.' },
        { title: 'Audyt pierwszego miesiąca', duration: '1 tydz.', desc: 'Sprawdzenie ostatnich 3 mies. - często znajdujemy przepłaty VAT.' },
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
        { label: 'JDG ryczałt', value: 'od 700 PLN/mies.', note: 'do 30 operacji' },
        { label: 'JDG KPiR + VAT', value: 'od 900 PLN/mies.', note: 'do 50 operacji' },
        { label: 'Sp. z o.o. księga handlowa', value: 'od 1 200 PLN/mies.', note: 'do 50 operacji' },
        { label: 'Sp. z o.o. kompleks', value: 'od 1 800 PLN/mies.', note: 'IP Box / Estoński / TP' },
        { label: 'Deklaracje i raporty zerowe', value: 'od 800 PLN', note: 'Jednorazowo · JPK_V7 / CIT-8 / sprawozdanie' }
      ],
      note: 'Mała skala. Sprawozdanie roczne osobno (600-1 800 PLN). Średni biznes - kalkulacja indywidualna.'
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
      { q: 'Estoński CIT - dla kogo?', a: 'Sp. z o.o. z 2+ wspólnikami (osobami fiz.), pasywne dochody < 50%, min. 3 pracowników. Reinwestowanie - 0%. Dywidenda - 20% CIT + 19% PIT.' },
      { q: 'IP Box dla programistów?', a: 'JDG/Sp. z o.o. tworzące kwalifikowane prawa do programów. Rozdzielona księgowość, umowa przeniesienia praw, interpretacja KIS. Efektywnie 5%.' },
      { q: 'KSeF kiedy?', a: 'Odbiór e-faktur - wszyscy od 1 lutego 2026. Wystawianie - od 1 kwietnia 2026, a przy obrocie powyżej 200 mln zł od 1 lutego. Mikrofirmy do 10 000 zł miesięcznie mają czas do końca 2026. Robimy integrację.' },
      { q: 'JDG → Sp. z o.o.?', a: 'Zamknięcie JDG + rejestracja Sp. z o.o. + transfer (apport zwolniony z VAT). 4-6 tygodni, 4 500-7 500 PLN.' },
      { q: 'Kontrola podatkowa?', a: 'Zawiadomienie - 7 dni na przygotowanie. Audyt, dokumenty, reprezentacja. Apelacja w IAS i WSA.' },
      { q: 'Koszt księgowości Sp. z o.o.?', a: 'Mała Sp. z o.o. - 12-25 tys. PLN/rok wraz ze sprawozdaniem.' },
      { q: 'Terminy?', a: 'JPK_V7 do 25-go. CIT-8 do 31 marca. PIT do 30 kwietnia. Sprawozdanie do 30 czerwca.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Podatki pod klucz',
    ctaSubtitle: 'Bezpłatny audyt formy. Od 700 PLN/mies.'
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
        { title: 'Tax form selection', desc: 'Progressive (12/32%) vs flat 19% vs lump sum vs Estonian CIT vs IP Box. Modeled 1-2 years ahead.' },
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
      subtitle: 'New client setup typically 1-2 weeks.',
      steps: [
        { title: 'Free consultation', duration: '60 min', desc: 'Current bookkeeping audit, form review, savings calc.' },
        { title: 'Engagement + UPL-1', duration: '1 day', desc: 'Service contract and tax-office representation power.' },
        { title: 'Data handover', duration: '3-5 days', desc: 'Import existing books, VAT registers. Streamsoft, Comarch, Symfonia.' },
        { title: 'First-month audit', duration: '1 week', desc: 'Last 3 months reviewed for errors - often find VAT overpayments and refile.' },
        { title: 'Monthly mode', duration: 'ongoing', desc: 'Documents via portal. JPK_V7 by 25th of next month.' },
        { title: 'Quarterly reviews', duration: '4×/year', desc: 'Bookkeeper meeting, optimization, planning.' },
        { title: 'Year-end close', duration: 'Jan-Apr', desc: 'Financial statements, CIT-8/PIT-36, KRS filing, audit if required.' }
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
        { label: 'JDG · lump sum', value: 'from 700 PLN/mo', note: 'up to 30 ops · JPK_V7' },
        { label: 'JDG · KPiR + VAT', value: 'from 900 PLN/mo', note: 'up to 50 ops' },
        { label: 'Sp. z o.o. · full ledger', value: 'from 1,200 PLN/mo', note: 'up to 50 ops · statements' },
        { label: 'Sp. z o.o. · complex', value: 'from 1,800 PLN/mo', note: 'IP Box / Estonian / TP' },
        { label: 'Nil returns and reports', value: 'from 800 PLN', note: 'One-off · JPK_V7 / CIT-8 / statements' }
      ],
      note: 'Small-scale tariffs. Annual statements separate (600-1,800 PLN). Mid-size businesses (100+ ops/month) - custom quote.'
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
      { q: 'Estonian CIT - who fits?', a: 'Sp. z o.o. with 2+ individual shareholders, passive income < 50%, minimum 3 employees. 0% on retained profits, 20% CIT + 19% PIT on dividends (~25% effective). Ideal for growth-stage reinvesting companies.' },
      { q: 'IP Box for which devs?', a: 'JDG or Sp. z o.o. creating qualified IP rights to software. Need separated IP accounting, IP transfer agreement, individual ruling from KIS (Krajowa Informacja Skarbowa - National Tax Information). ~5% effective on IP income.' },
      { q: 'KSeF - when?', a: 'KSeF (Krajowy System e-Faktur - National e-Invoicing System) - mandatory from 1 February 2026 for all VAT taxpayers. Every faktura (invoice) goes through KSeF with a unique ID. We integrate your accounting software (Comarch, iFirma, Subiekt, Symfonia).' },
      { q: 'JDG → Sp. z o.o. migration?', a: "Not a true conversion - close JDG + register Sp. z o.o. + transfer assets (apport - contribution in kind, VAT-exempt for going-concern). Turnkey 4-6 weeks, 4,500-7,500 PLN." },
      { q: 'Tax audit?', a: "Don't speak to the inspector without counsel. After zawiadomienie o kontroli (audit notice) you have 7 days to prepare. We audit what they're checking, prepare documents, represent. Appeal route: IAS (Izba Administracji Skarbowej - Tax Administration Chamber) Director, then WSA." },
      { q: 'Real cost for Sp. z o.o. bookkeeping?', a: 'Small Sp. z o.o. - 12-25k PLN/year including annual statements. JDG lump sum - under 4,000 PLN/year.' },
      { q: 'Filing deadlines?', a: 'JPK_V7 by 25th of next month. CIT-8 by March 31. PIT by April 30. Financial statements 6 months after fiscal year end (Sp. z o.o. - June 30). Late filing - fines up to ~50,000 PLN.' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Tax and accounting turnkey',
    ctaSubtitle: 'Free form audit and savings calc. From 700 PLN/month.'
  },
  tr: {
    slug: 'podatki-ksiegowosc',
    group: 'business',
    icon: 'scale',
    badge: 'CIT · VAT · PIT · Estonyan CIT · IP Box',
    title: 'Vergi ve muhasebe',
    subtitle: 'Polonya vergi optimizasyonu: %9 CIT, Estonyan CIT, %5 IP Box, VAT-UE',
    lead: 'Polonya vergi sistemi AB\'nin en karmaşıklarından biridir: CIT %9/%19, ertelenmiş Estonyan CIT, %5 IP Box, %23/%8/%5/%0 VAT (KDV), aylık JPK_V7, 2026\'dan itibaren KSeF, binlerce Polski Ład değişikliği. İşinize uygun rejimi seçer, muhasebenizi (anlaşmalı muhasebe ağıyla) yürütür, beyannameleri hazırlar ve vergi denetimlerinde yanınızda oluruz. Sp. z o.o., JDG, oddziały ve fundacja rodzinna ile çalışıyoruz.',
    facts: [
      { label: 'Küçük mükellef CIT', value: '%9', note: 'yıllık ciro < 2 mln EUR' },
      { label: 'Estonyan CIT', value: '%0 / %20', note: 'temettü dağıtımına kadar' },
      { label: 'IP Box', value: '%5', note: 'fikri mülkiyet gelirinde' },
      { label: 'VAT (KDV)', value: '%23 / %8 / %5 / %0', note: 'genel ve indirimli oranlar' }
    ],
    grounds: {
      title: 'Hizmet kapsamı',
      subtitle: 'Tescilden yıllık beyannameye tam döngü. Modüler de alınabilir.',
      items: [
        { title: 'Vergi rejiminin seçimi', desc: 'Skala (%12/%32) vs liniowy %19 vs ryczałt vs Estonyan CIT vs IP Box. 1-2 yıllık gelir-giderinizi modelliyor, gerekirse rejimi değiştiriyoruz.' },
        { title: 'Aylık muhasebe', desc: 'İşlem kayıtları (księga handlowa veya KPiR), bordro, ZUS, JPK_V7, JPK_KR, amortisman, vergiler. Belgeler müvekkil panelinden iletilir.' },
        { title: 'VAT ve JPK', desc: 'Aylık veya üç aylık JPK_V7 (VAT + ewidencja birleşik beyanı). AB işlemleri için VAT-UE. 2026\'dan itibaren KSeF (Krajowy System e-Faktur) - geçişi sizin için yapıyoruz.' },
        { title: 'Yıllık beyannameler', desc: 'Sp. z o.o. için CIT-8, JDG için PIT-36/36L/28, KRS\'ye sprawozdanie finansowe. ePUAP üzerinden sunma. Süreler: 31 Mart (CIT), 30 Nisan (PIT).' },
        { title: 'Estonyan CIT', desc: 'Ertelenmiş CIT\'e geçiş - kâr yatırıma dönerken vergi %0, temettü dağıtılınca %20. Şartlar: 2+ wspólnik, pasif gelirler %50\'yi aşmaz, en az 3 çalışan. Tam yürütme.' },
        { title: 'IP Box', desc: 'Yazılım fikri mülkiyetinden gelirde indirimli %5 oranı. Hazırlığı yapıyoruz: ewidencja IP, Krajowa Informacja Skarbowa\'ya (KIS) interpretacja indywidualna talebi, eklemli yıllık PIT/CIT beyannamesi.' },
        { title: 'Vergi denetimleri', desc: 'Kontrola celno-skarbowa süreçlerinde yanınızdayız. Yanıtların hazırlanması, US\'de temsil, hatalı karar halinde WSA / NSA itirazları.' },
        { title: 'Transfer fiyatlandırması', desc: 'Yurt dışındaki podmioty powiązane (ilişkili taraflar) ile çalışan Sp. z o.o.\'lar için ceny transferowe dokümantasyonu. Karşılaştırılabilir kontrolsüz fiyat veya net işlem marjı yöntemi.' }
      ]
    },
    timeline: {
      title: 'Hizmete başlama',
      subtitle: 'Yeni müvekkilin sisteme alınması genelde 1-2 hafta.',
      steps: [
        { title: 'Ücretsiz danışmanlık', duration: '60 dk', desc: 'Mevcut muhasebenizin denetimi (varsa), vergi rejiminizin değerlendirilmesi, optimal rejime geçişte tasarruf hesabı.' },
        { title: 'Sözleşme ve pełnomocnictwo', duration: '1 gün', desc: 'Umowa o usługi księgowe ve UPL-1 (US önünde temsil yetkisi). Beyannameleri hemen sizin adınıza sunmaya başlıyoruz.' },
        { title: 'Veri devri', duration: '3-5 gün', desc: 'Mevcut księgi (başka muhasebeciden geliyorsanız) içe aktarımı, VAT sicilleri, ewidencja środków trwałych. Streamsoft, Comarch, Symfonia ile çalışıyoruz.' },
        { title: 'İlk ay denetimi', duration: '1 hafta', desc: 'Son 3 ayın beyannamelerini hata için kontrol ediyoruz. Sıkça VAT fazla ödemesi buluyor, korektę sunarak iade alıyoruz.' },
        { title: 'Aylık rejim', duration: 'sürekli', desc: 'Belgeleri portala yüklüyor veya e-postayla gönderiyorsunuz. Muhasebeci işler, 25\'ine kadar JPK_V7\'yi hazırlar. Klient panel durumunu gösterir.' },
        { title: 'Üç aylık değerlendirmeler', duration: 'yılda 4 kez', desc: 'Księgowy ile görüşme: göstergeler, sonraki çeyreğin vergi optimizasyonu, planlama. Optimizasyon için her zaman alan vardır.' },
        { title: 'Yıl sonu kapanışı', duration: 'Ocak-Nisan', desc: 'Sprawozdanie finansowe, CIT-8 / PIT-36, KRS\'ye sprawozdanie, badanie biegłego rewidenta (gerekirse). Yılda bir kez.' }
      ]
    },
    documents: {
      title: 'Aylık olarak ileteceğiniz belgeler',
      subtitle: 'Asgari belge - maksimum otomasyon. Tarama veya fotoğraf yeterlidir.',
      items: [
        'Faktury sprzedaży (müşterilerinize kestiğiniz faturalar)',
        'Faktury zakupu (tedarikçi, kira, hizmet faturaları)',
        'Wyciągi bankowe (tüm hesapların ekstreleri)',
        'Listy płac (çalışanlar ve umowa zlecenie için bordro)',
        'Kira, leasing ve kredi sözleşmeleri',
        'İhracat / ithalat belgeleri (faktury celne, CMR)',
        'Inwentaryzacja (księga handlowa için yılda bir)',
        'Yurt dışı ilişkili taraflarla yapılan sözleşmeler',
        'Sabit kıymet hareketleri (alım / çıkış)'
      ]
    },
    pricing: {
      title: 'Hizmet ücretimiz',
      subtitle: 'İşlem hacmine göre tarifeler. Tek seferlik işler (beyanname, optimizasyon) ayrıdır.',
      items: [
        { label: 'JDG · ryczałt', value: '700 PLN/aydan', note: '30 işleme kadar · JPK_V7' },
        { label: 'JDG · KPiR + VAT', value: '900 PLN/aydan', note: '50 işleme kadar' },
        { label: 'Sp. z o.o. · księga handlowa', value: '1.200 PLN/aydan', note: '50 işleme kadar · sprawozdanie' },
        { label: 'Sp. z o.o. · kompleks', value: '1.800 PLN/aydan', note: 'IP Box / Estonyan CIT / TP' },
        { label: 'Sıfır beyan ve raporlar', value: '800 PLN\'den', note: 'Tek seferlik · JPK_V7 / CIT-8 / sprawozdanie' }
      ],
      note: 'Belirtilen tarifeler küçük ölçek içindir. Orta ölçekli işletme (aylık 100+ işlem) için bireysel hesap. Sprawozdanie roczne ayrıca 600-1.800 PLN. Vergi denetimi ve yeni rejime geçiş 1.500-4.000 PLN.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 15 lutego 1992 r. o CIT (Polski Ład 2.0 ve 3.0 değişiklikleriyle)',
        'Ustawa z dnia 26 lipca 1991 r. o PIT (skala, liniowy, ryczałt)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (2026\'dan itibaren KSeF)',
        'Ustawa z dnia 29 września 1994 r. o rachunkowości (Muhasebe Kanunu - księgi handlowe)',
        'Ordynacja podatkowa z dnia 29 sierpnia 1997 r. (Vergi Usul Kanunu)',
        'JPK_V7, JPK_KR, JPK_FA hakkında Maliye Bakanlığı yönetmelikleri',
        'Ustawa z dnia 26 maja 2023 r. o KSeF (Ulusal e-Fatura Sistemi Kanunu)'
      ]
    },
    faq: [
      { q: 'Estonyan CIT kime uygun?', a: '2+ wspólnik\'i (gerçek kişi ortağı) olan Sp. z o.o., pasif kaynak gelirleri %50\'nin altında, en az 3 çalışan umowa o pracę ile (veya wspólnicy bizzat). Yatırıma çevrilen kâr - %0 vergi. Temettü dağıtımı - %20 CIT + %19 PIT (efektif ~%25). Kârını yatırıma çeviren büyüme aşamasındaki şirketler için idealdir.' },
      { q: 'IP Box hangi yazılımcılara uygun?', a: 'Kwalifikowane prawa do programów komputerowych (kendi yazılımı; başkasının yazılımını devreden değil) yaratan JDG veya Sp. z o.o. Şartlar: ayrı muhasebe, umowa przeniesienia praw (hak devir sözleşmesi), KIS\'ten interpretacja indywidualna. IP gelirinde efektif vergi %5. Setup maliyeti 1-2 ay içinde geri kazanılır.' },
      { q: 'KSeF nedir, geçiş ne zaman?', a: 'KSeF - Krajowy System e-Faktur (Ulusal Elektronik Fatura Sistemi). 1 Şubat 2026\'dan itibaren tüm VAT mükellefleri için zorunludur. Tüm faktury KSeF üzerinden çevrimiçi düzenlenir, her birinin benzersiz KSeF ID\'si olur. Yazılımınızın (Comarch, iFirma, Subiekt, Symfonia) KSeF ile entegrasyonunu yapıyor, çalışanlarınızı eğitiyoruz.' },
      { q: 'JDG\'den Sp. z o.o.\'ya nasıl geçilir?', a: 'Doğrudan "dönüşüm" değildir, iki ayrı işlemdir: JDG\'nin CEIDG\'den kapatılması + Sp. z o.o.\'nun tescili + varlık devri. Varlık geçişi - apport (sermayeye katkı, işletmenin tamamı sermaye olarak konursa VAT muafiyeti) veya sprzedaż (satış, normal VAT ve PIT). Anahtar teslim 4-6 hafta, 4.500-7.500 PLN.' },
      { q: 'Vergi denetiminde ne yapmalı?', a: 'Vergi danışmanı olmadan müfettişle iletişime geçmeyin. Zawiadomienie o kontroli (denetim bildirimi) aldıktan sonra hazırlık için 7 gününüz vardır. Ne denetlendiğini hızlı analiz eder, belgeleri hazırlar, çıkarlarınızı temsil ederiz. Olumsuz karar riski varsa - önceden porozumienie i wyjaśnienia (uzlaşma ve açıklama) yoluna gidiyoruz. Sonrasında: Dyrektor Izby Administracji Skarbowej\'a (Vergi İdaresi Odası Müdürü) ve WSA\'ya itiraz.' },
      { q: 'Sp. z o.o. muhasebesi gerçekte ne tutar?', a: 'JDG ryczałt 700 PLN/ay, JDG KPiR (gelir-gider defteri) 900 PLN/ay, Sp. z o.o. tam księga 1.200 PLN/ay, IP Box\'lı Sp. z o.o. 1.800 PLN/ay. Bu küçük işletmeler içindir (ayda 50 işleme kadar). Sprawozdanie roczne ayrıca 600-1.800 PLN. Aktif Sp. z o.o. için gerçek yıllık maliyet 12-25 bin PLN (yıllık rapor dahil).' },
      { q: 'Beyanname süreleri nedir?', a: 'JPK_V7 (elektronik VAT beyannamesi + sicil) - takip eden ayın 25\'ine kadar. CIT-8 - 31 Mart (önceki yıl için). PIT-36/36L - 30 Nisan. Sprawozdanie finansowe - mali yıl bitiminden sonra 6 ay içinde (Sp. z o.o. için 30 Haziran). Geç sunma - 720 dziennej stawki (günlük asgari ücret) cezasına kadar (~50.000 PLN).' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Vergi ve muhasebe anahtar teslim',
    ctaSubtitle: 'Mevcut rejiminizi ücretsiz analiz eder, optimal forma geçişte tasarrufu hesaplarız. 700 PLN/aydan başlar.'
  },
  uk: {
    slug: 'podatki-ksiegowosc',
    group: 'business',
    icon: 'scale',
    badge: 'CIT · VAT · PIT · Estoński CIT · IP Box',
    title: 'Податки і бухгалтерія',
    subtitle: 'Польська податкова оптимізація: CIT 9%, Estoński CIT, IP Box 5%, VAT-UE',
    lead: 'Польська система оподаткування — одна з найскладніших у ЄС: CIT 9/19%, Estoński CIT (відкладений), IP Box 5%, VAT 23/8/5/0%, JPK_V7 щомісяця, KSeF з 2026, polski ład з тисячами поправок. Ми підбираємо форму під ваш бізнес, ведемо бухгалтерію (партнерська мережа księgowych), готуємо декларації і супроводжуємо податкові перевірки. Працюємо зі Sp. z o.o., JDG, oddziałami, fundacjami rodzinnymi.',
    facts: [
      { label: 'CIT малих', value: '9%', note: 'оборот < 2 млн EUR/рік' },
      { label: 'Estoński CIT', value: '0% / 20%', note: 'до виплати дивідендів' },
      { label: 'IP Box', value: '5%', note: 'на доходи від ІС' },
      { label: 'VAT', value: '23 / 8 / 5 / 0%', note: 'основна та знижені' }
    ],
    grounds: {
      title: 'Що включає обслуговування',
      subtitle: 'Повний цикл від реєстрації до річної декларації. Можна брати модулями.',
      items: [
        { title: 'Підбір форми оподаткування', desc: 'Skala (12/32%) vs liniowy 19% vs ryczałt vs Estoński CIT vs IP Box. Рахуємо під ваші доходи і витрати на 1–2 роки вперед. Змінюємо за необхідності.' },
        { title: 'Місячна бухгалтерія', desc: 'Облік операцій (księga handlowa або KPiR), заробітна плата, ZUS, JPK_V7, JPK_KR, амортизація, податки. Документи — через klienta панель.' },
        { title: 'VAT і JPK', desc: 'Місячна або квартальна JPK_V7 (комбінована декларація VAT + ewidencja). VAT-UE для ЄС-операцій. KSeF (Krajowy System e-Faktur) з 2026 — перехід за вас.' },
        { title: 'Декларації річні', desc: 'CIT-8 для Sp. z o.o., PIT-36/36L/28 для JDG, sprawozdanie finansowe в KRS. Подання через ePUAP. Строки: 31 березня (CIT), 30 квітня (PIT).' },
        { title: 'Estoński CIT', desc: 'Перехід на відкладений CIT — податок 0%, поки прибуток реінвестується, 20% при виплаті дивідендів. Умови: 2+ wspólnika, не більше 50% доходів з пасивних джерел. Повний супровід.' },
        { title: 'IP Box', desc: 'Пільгова ставка 5% на доходи від kwalifikowanego prawa do ІС (програмістського). Готуємо: ewidencja IP, interpretacja indywidualna в Krajowej Informacji Skarbowej, річна декларація PIT/CIT з aneksem.' },
        { title: 'Податкові перевірки', desc: 'Супровід kontroli celno-skarbowej. Підготовка відповідей, представництво в US, апеляції в WSA / NSA при otrzymaniu nieprawidłowej decyzji.' },
        { title: 'Трансфертні ціни', desc: 'Документація cen transferowych для Sp. z o.o. з закордонними podmiotami powiązanymi. Метод porównywalnej ceny niekontrolowanej, marży transakcyjnej netto.' }
      ]
    },
    timeline: {
      title: 'Як стартує обслуговування',
      subtitle: 'Підключення нового клієнта — зазвичай 1–2 тижні.',
      steps: [
        { title: 'Безкоштовна консультація', duration: '60 хв', desc: 'Аудит поточної бухгалтерії (якщо є), оцінка податкової форми, розрахунок зекономлених сум при переході на оптимальну форму.' },
        { title: 'Договір і pełnomocnictwo', duration: '1 день', desc: 'Umowa o usługi księgowe і UPL-1 (повноваження представляти перед US). Одразу можемо подавати декларації від вашого імені.' },
        { title: 'Передача bazy', duration: '3–5 днів', desc: 'Імпорт поточної księgi (якщо переходите від іншого buchaltera), реєстри VAT, ewidencja środków trwałych. Використовуємо Streamsoft, Comarch, Symfonia.' },
        { title: 'Audyt pierwszego miesiąca', duration: '1 тиждень', desc: 'Перевіряємо останні 3 міс. ваших declaracji на помилки. Часто знаходимо переплати VAT — подаємо korektę і повертаємо.' },
        { title: 'Місячний режим', duration: 'постійно', desc: 'Документи завантажуєте через portal або надсилаєте на email. Бухгалтер обробляє, готує JPK_V7 до 25 числа. Klient panel показує статус.' },
        { title: 'Квартальні огляди', duration: '4 рази на рік', desc: 'Зустріч з księgowym: розбір показників, оптимізація податків на наступний квартал, planowanie. Завжди є простір для оптимізації.' },
        { title: 'Річне закриття', duration: 'січень–квітень', desc: 'Sprawozdanie finansowe, CIT-8 / PIT-36, sprawozdanie do KRS, badanie biegłego rewidenta (якщо потрібно). Один раз на рік.' }
      ]
    },
    documents: {
      title: 'Що ви передаєте щомісяця',
      subtitle: 'Мінімум документів — максимум автоматизації. Скани або фото — достатньо.',
      items: [
        'Faktury sprzedaży (рахунки на ваших клієнтів)',
        'Faktury zakupu (рахунки від постачальників, оренда, послуги)',
        'Wyciągi bankowe (виписки з усіх рахунків)',
        'Listy płac (для співробітників і umów-zleceń)',
        'Umowy najmu, leasing, кредитні umowy',
        'Документи про імпорт / експорт (faktury celne, CMR)',
        'Inwentaryzacja (раз на рік для księgi handlowej)',
        'Списки umów za granicą (для Sp. z o.o. з закордонними podmiotami)',
        'Stan środków trwałych (придбання / вибуття)'
      ]
    },
    pricing: {
      title: 'Вартість обслуговування',
      subtitle: 'Тарифи за обсягом операцій. Разові задачі (декларації, оптимізація) — окремо.',
      items: [
        { label: 'JDG · ryczałt', value: 'від 700 PLN/міс.', note: 'до 30 операцій · JPK_V7' },
        { label: 'JDG · KPiR + VAT', value: 'від 900 PLN/міс.', note: 'до 50 операцій' },
        { label: 'Sp. z o.o. · księga handlowa', value: 'від 1 200 PLN/міс.', note: 'до 50 операцій · sprawozdanie' },
        { label: 'Sp. z o.o. · комплекс', value: 'від 1 800 PLN/міс.', note: 'IP Box / Estoński CIT / TP' },
        { label: 'Нульові декларації та звіти', value: 'від 800 PLN', note: 'Разово · JPK_V7 / CIT-8 / sprawozdanie' }
      ],
      note: 'Тарифи для małej skali. Для середнього бізнесу (100+ операцій/міс.) — індивідуальний розрахунок. Sprawozdanie roczne — окремо (600–1 800 PLN). Податковий аудит і перехід на нову форму — 1 500–4 000 PLN.'
    },
    legalBase: {
      title: 'Нормативна база',
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
      { q: 'Estoński CIT — кому підходить?', a: 'Sp. z o.o. з 2+ wspólnikami (учасниками — фізособами), дохід з пасивних джерел < 50%, мінімум 3 співробітники на umowę o pracę (трудовому договорі) (або wspólnicy самі). Реінвестований прибуток — 0% податок. Дивіденди — 20% CIT + 19% PIT (ефективно ~25%). Ідеально для зростаючих фірм, які реінвестують прибуток.' },
      { q: 'IP Box — для яких програмістів?', a: 'JDG або Sp. z o.o., що створюють kwalifikowane prawa do programów komputerowych (кваліфіковані права на комп’ютерні програми — своє ПЗ, а не передання чужого ПЗ). Умови: ведете окремий облік, маєте umowę przeniesienia praw (договір передачі прав), готуєте interpretację indywidualną (індивідуальну податкову інтерпретацію) в KIS (Krajowa Informacja Skarbowa — Національна податкова інформація). Ефективний податок — 5% на дохід від ІС. Окупність setupa за 1–2 місяці.' },
      { q: 'Що таке KSeF і коли перехід?', a: 'KSeF — Krajowy System e-Faktur (Національна система електронних фактур). З 1 лютого 2026 — обов’язкова для всіх VAT podatników (платників ПДВ). Усі faktury (рахунки-фактури) виставляються через KSeF онлайн, кожна з унікальним KSeF ID. Підготовуємо інтеграцію вашого софту (Comarch, iFirma, Subiekt, Symfonia) з KSeF, навчаємо співробітників.' },
      { q: 'JDG → Sp. z o.o. — як переходити?', a: 'Не «перетворення», а дві операції: закриття JDG (CEIDG — реєстр індивідуальних підприємців) + реєстрація Sp. z o.o. + transfer активів. Транзит активів — apport (вклад у капітал, звільнення від VAT при apporcie przedsiębiorstwa — внесенні підприємства як вкладу) або sprzedaż (продаж, звичайний VAT і PIT). Під ключ за 4–6 тижнів, 4 500–7 500 PLN.' },
      { q: 'Податкова перевірка — що робити?', a: 'Не спілкуйтеся з inspektorem (інспектором) без податкового консультанта. Отримавши zawiadomienie o kontroli (повідомлення про перевірку), у вас є 7 днів на підготовку. Робимо експрес-аудит того, що перевіряють, готуємо документи, представляємо інтереси. При risiku negatywnej decyzji (ризику негативного рішення) — заздалегідь ідемо на porozumienie i wyjaśnienia (угоду і пояснення). Після: апеляція до Dyrektora Izby Administracji Skarbowej (Директора податкової палати) і WSA (Воєводський адмінсуд).' },
      { q: 'Скільки коштує бухгалтерія для Sp. z o.o.?', a: 'JDG ryczałt — 700 PLN/міс., JDG KPiR (книга доходів і витрат) — 900, Sp. z o.o. księga (повна книга обліку) — 1 200, Sp. z o.o. з IP Box — 1 800. Це для малого бізнесу (до 50 операцій/міс.). Sprawozdanie roczne (річний звіт) — окремо 600–1 800 PLN. Реальна вартість для активної Sp. z o.o. — 12–25 тис. PLN/рік разом зі sprawozdaniem.' },
      { q: 'Строки подання декларацій?', a: 'JPK_V7 (електронна декларація ПДВ + реєстр) — до 25 числа наступного місяця. CIT-8 — 31 березня (за попередній рік). PIT-36/36L — 30 квітня. Sprawozdanie finansowe (фінансовий звіт) — 6 місяців після końca roku obrotowego (кінця фінансового року, для Sp. z o.o. — 30 czerwca). За запізнення — kary do 720 stawek dziennych (штрафи до 720 денних ставок, ~50 000 PLN).' }
    ],
    related: ['rejestracja-sp-z-oo', 'jdg', 'zaswiadczenia-zus-us'],
    ctaTitle: 'Податки і бухгалтерія під ключ',
    ctaSubtitle: 'Безкоштовний аудит поточної форми і розрахунок економії при переході на оптимальну. Від 700 PLN/міс.'
  }
};

export default podatkiKsiegowosc;
