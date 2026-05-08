import type { ServiceEntry } from './types';

const likwidacjaSprzedaz: ServiceEntry = {
  ru: {
    slug: 'likwidacja-sprzedaz',
    group: 'business',
    icon: 'gavel',
    badge: 'Likwidacja · M&A · zbycie udziałów',
    title: 'Ликвидация и продажа фирмы',
    subtitle: 'Закрытие Sp. z o.o. или продажа бизнеса (M&A) под ключ',
    lead: 'Закрытие Sp. z o.o. в Польше - формальная процедура: otwarcie likwidacji, ogłoszenia в Monitor Sądowym, регулирование обязательств, sprawozdanie likwidacyjne, wykreślenie из KRS. Минимум 6 месяцев между ogłoszeniem и wykreśleniem. Альтернатива - продажа бизнеса (M&A) или передача udziałów. Сопровождаем оба пути: ликвидация при отсутствии покупателя, M&A при наличии - выгоднее по налогам и быстрее.',
    facts: [
      { label: 'Likwidacja', value: '6-9 месяцев', note: 'минимум по KSH' },
      { label: 'Sprzedaż udziałów', value: '2-4 недели', note: 'у нотариуса' },
      { label: 'M&A с активами', value: '2-4 месяца', note: 'due diligence + sprzedaż' },
      { label: 'Налог при sprzedaży', value: '19% PIT', note: 'на zysk wspólnika' }
    ],
    grounds: {
      title: 'Когда что делать',
      subtitle: 'Каждый сценарий - разные сроки, налоги и риски. Решаем на консультации.',
      items: [
        { title: 'Likwidacja - нет покупателя', desc: 'Когда фирма не нужна и нет покупателя. Самый дорогой и долгий путь (6-9 мес), но даёт чистое закрытие без обязательств в будущем.' },
        { title: 'Sprzedaż udziałów - есть покупатель', desc: 'Передача 100% udziałów покупателю. Быстро (2-4 недели), 19% PIT с zysku. Покупатель принимает все обязательства.' },
        { title: 'M&A с активами (asset deal)', desc: 'Продажа отдельных активов (контракты, сотрудники, бренд) - без передачи юрлица. Удобно когда часть бизнеса продают, часть - закрывают.' },
        { title: 'Slip-sale - слияние', desc: 'Объединение Sp. z o.o. с другой фирмой (połączenie spółek). Освобождение от налогов при выполнении условий. Сложно - только для среднего бизнеса.' },
        { title: 'Передача наследникам', desc: 'Наследование udziałów при смерти wspólnika. Готовим testament, podział majątku, regulowanie z KRS. Налог на наследство - отдельная статья.' },
        { title: 'Подготовка к продаже', desc: 'Прежде чем продавать - приводим в порядок: договоры, ZUS, налоги, sprawozdania. Удваивает price 2× по сравнению с «as is».' }
      ]
    },
    timeline: {
      title: 'Этапы likwidacji Sp. z o.o.',
      subtitle: 'Альтернатива (sprzedaż udziałów) занимает 2-4 недели. Likwidacja - обязательно 6+ месяцев.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Выбираем путь: likwidacja vs sprzedaż vs połączenie. Считаем налоговые последствия.' },
        { title: 'Uchwała wspólników', duration: '1 неделя', desc: 'Решение об открытии likwidacji. Назначение likwidatora (обычно бывший członek zarządu). Подача в KRS.' },
        { title: 'Ogłoszenie в MSiG', duration: '7-14 дней', desc: 'Объявление в Monitorze Sądowym i Gospodarczym с приглашением кредиторов сообщить о требованиях в 3 месяца. Госпошлина 100 PLN.' },
        { title: 'Регулирование обязательств', duration: '2-6 месяцев', desc: 'Ликвидатор продаёт активы, погашает долги, увольняет сотрудников. Нерегулированные требования - депонируются у нотариуса.' },
        { title: 'Bilans likwidacyjny', duration: '1 месяц', desc: 'Sporządzenie bilansu na początku и на конец likwidacji. Подача в KRS и US.' },
        { title: 'Podział majątku', duration: '6 месяцев от ogłoszenia', desc: 'Распределение оставшихся активов между wspólnikami пропорционально udziałom. После 6 месяцев со ogłoszenia - раньше нельзя.' },
        { title: 'Wykreślenie из KRS', duration: '1-3 месяца', desc: 'Wniosek о окончании likwidacji. KRS вычёркивает фирму. Сохраняем dокументы 5+ лет в архиве.' },
        { title: 'Закрытие в US, ZUS', duration: '1 месяц', desc: 'Wniosek o wykreślenie z VAT, NIP. Закрытие kont в ZUS. Сохраняем dokumenty kadrowe 50 лет.' }
      ]
    },
    documents: {
      title: 'Что нужно для likwidacji или sprzedaży',
      subtitle: 'Зависит от пути. Базовый минимум - учредительные документы и финансовые отчёты.',
      items: [
        'KRS-выписка актуальная (мы получаем)',
        'Statut Sp. z o.o. в актуальной редакции',
        'Sprawozdania finansowe за все годы существования',
        'Lista wspólników с PESEL/паспортами и долями',
        'Wszystkie umowy с контрагентами (для оценки obligaciji)',
        'Wszystkie umowy o pracę и umowy zlecenia (для уведомлений)',
        'Bilans i rachunek zysków на день likwidacji',
        'Spis środków trwałych и stanu magazynów',
        'Bankowy historia operacji за 12 месяцев'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Likwidacja - fixed price. M&A - % от сделки.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · выбор пути' },
        { label: 'Sprzedaż udziałów', value: 'от 1 800 PLN', note: 'Umowa у нотариуса + KRS' },
        { label: 'Likwidacja Sp. z o.o.', value: 'от 6 500 PLN', note: 'Полный цикл 6+ месяцев' },
        { label: 'M&A полный цикл', value: 'от 15 000 PLN', note: 'Due diligence + договор + закрытие' }
      ],
      note: 'Likwidacja: + ogłoszenia MSiG ~600 PLN, нотариус 1 200-2 500 PLN, KRS 350 PLN. M&A: + бухгалтерский due diligence 5 000-15 000 PLN. Если есть кредиты, sponsorzy, sporne роzracji - отдельная смета.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 15 września 2000 r. - Kodeks spółek handlowych (rozdz. 6 - likwidacja Sp. z o.o., art. 270-290)',
        'Ustawa z dnia 28 lutego 2003 r. - Prawo upadłościowe (jeśli niewypłacalność)',
        'Ustawa z dnia 26 lipca 1991 r. o PIT (art. 17 - sprzedaż udziałów, 19% podatek)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (art. 6 pkt 1 - przedsiębiorstwo poza VAT)',
        'Ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny (rozdz. - sprzedaż przedsiębiorstwa)'
      ]
    },
    faq: [
      { q: 'Можно ли закрыть Sp. z o.o. быстрее 6 месяцев?', a: 'Нет, если делаете likwidację (ликвидацию) - 6 месяцев минимум по KSH (Kodeks spółek handlowych - Кодекс торговых обществ) (срок dla wierzycieli - для кредиторов). Альтернативы: 1) Sprzedaż udziałów (продажа долей) покупателю - 2-4 недели; 2) Połączenie (слияние) с другой Sp. z o.o. (slip-sale) - 3-4 месяца с поглощением; 3) Upadłość (банкротство) - если фирма реально неплатёжеспособна, тоже 6+ месяцев.' },
      { q: 'Что выгоднее: likwidacja или sprzedaż udziałów?', a: 'Sprzedaż udziałów (продажа долей) - быстрее, дешевле, и часто выгоднее по налогам. 19% PIT на zysk (прибыль = sprzedaż minus koszt nabycia udziałów - продажная цена минус стоимость приобретения долей). При likwidacji (ликвидации) - налог на podział majątku (раздел имущества, 19% от остатка после долгов), плюс stoimy 6+ месяцев службы и заплатим ликвидатору и KRS-fee. Sprzedaż outearns likwidację в 80% случаев.' },
      { q: 'Можно ли продать «оболочку» - фирму без бизнеса?', a: 'Да. Это рынок shelf-companies наоборот: вы продаёте свою старую Sp. z o.o. покупателю, который ценит возраст фирмы. Цена обычно 5 000-15 000 PLN за фирму 12+ месяцев. Главное - фирма должна быть «чистой»: ноль долгов, ноль обязательств, проверена due diligence-ом. Делаем продажу через брокеров.' },
      { q: 'Что с сотрудниками при likwidacji?', a: 'Должны быть уволены до podziału majątku (раздела имущества). Likwidator (ликвидатор) извещает rzecznika pracy (инспектора труда) и каждого сотрудника за 1-3 месяца (zależnie od staż - в зависимости от стажа). Płacicie odprawy (выплачиваете выходное пособие): 1 mies. zarobku (месяц зарплаты) до 2 lat staż (стажа), 2 mies. до 8 lat, 3 mies. свыше. PUP (Powiatowy Urząd Pracy - Районная служба занятости) платит resztę если фирма bankrupt.' },
      { q: 'Налоги при sprzedaży udziałów?', a: '19% PIT на zysk wspólnika (прибыль участника, PIT-38). Zysk = cena sprzedaży minus koszt nabycia udziałów (обычно kapitał zakładowy - уставный капитал при основании). Декларируется до 30 апреля следующего года. ESC возможен через pierwsze 6 mies. po sprzedaży на покупку другой фирмы (rzadko stosowany - редко применяется).' },
      { q: 'А если есть долги ZUS / US?', a: 'При likwidacji (ликвидации) они должны быть заплачены или депонированы. Если фирма не может - переходит в upadłość (банкротство), не в likwidację. Перед началом likwidacji получаем zaświadczenia o niezaleganiu (справки об отсутствии задолженности) - это критично, без них KRS не вычеркнет.' },
      { q: 'Что с CRBR при likwidacji?', a: 'Обязательно обновить - указать дату likwidacji. После wykreślenia (исключения из реестра) из KRS - автоматически закрывается в CRBR. Не требует отдельного wniosku (заявления).' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'podatki-ksiegowosc'],
    ctaTitle: 'Закрытие или продажа фирмы',
    ctaSubtitle: 'Бесплатно подбираем путь и считаем налоги. Sprzedaż udziałów от 1 800 PLN, likwidacja под ключ от 6 500 PLN.'
  },
  pl: {
    slug: 'likwidacja-sprzedaz',
    group: 'business',
    icon: 'gavel',
    badge: 'Likwidacja · M&A · zbycie udziałów',
    title: 'Likwidacja i sprzedaż firmy',
    subtitle: 'Zamknięcie Sp. z o.o. lub sprzedaż biznesu (M&A) pod klucz',
    lead: 'Likwidacja Sp. z o.o. - formalna procedura: otwarcie, ogłoszenia w MSiG, regulowanie zobowiązań, sprawozdanie, wykreślenie z KRS. Min. 6 miesięcy. Alternatywa - sprzedaż biznesu (M&A) lub udziałów. Prowadzimy obie ścieżki: likwidacja gdy nie ma kupca, M&A gdy jest - taniej i szybciej.',
    facts: [
      { label: 'Likwidacja', value: '6-9 mies.', note: 'min. KSH' },
      { label: 'Sprzedaż udziałów', value: '2-4 tyg.', note: 'u notariusza' },
      { label: 'M&A z aktywami', value: '2-4 mies.', note: 'due diligence + sprzedaż' },
      { label: 'PIT', value: '19%', note: 'zysk wspólnika' }
    ],
    grounds: {
      title: 'Kiedy co',
      subtitle: 'Każdy scenariusz - inne terminy, podatki, ryzyka.',
      items: [
        { title: 'Likwidacja - bez kupca', desc: 'Najdłużej (6-9 mies), ale czyste zamknięcie.' },
        { title: 'Sprzedaż udziałów', desc: '100% udziałów do kupca. 2-4 tygodnie, 19% PIT.' },
        { title: 'M&A z aktywami', desc: 'Sprzedaż wybranych aktywów bez transferu firmy.' },
        { title: 'Połączenie spółek', desc: 'Połączenie z inną Sp. z o.o. - zwolnienia podatkowe.' },
        { title: 'Dziedziczenie', desc: 'Spadek udziałów. Testament, podział, KRS.' },
        { title: 'Przygotowanie do sprzedaży', desc: 'Doprowadzenie do porządku przed M&A - zwiększa cenę 2×.' }
      ]
    },
    timeline: {
      title: 'Etapy likwidacji',
      subtitle: 'Sprzedaż udziałów - 2-4 tyg. Likwidacja - 6+ miesięcy.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Likwidacja vs sprzedaż vs połączenie.' },
        { title: 'Uchwała o likwidacji', duration: '1 tydz.', desc: 'Wyznaczenie likwidatora. Wniosek do KRS.' },
        { title: 'Ogłoszenie w MSiG', duration: '7-14 dni', desc: 'Wezwanie wierzycieli, 3 miesiące na zgłoszenia.' },
        { title: 'Regulowanie zobowiązań', duration: '2-6 mies.', desc: 'Sprzedaż aktywów, spłata długów, zwalnianie pracowników.' },
        { title: 'Bilans likwidacyjny', duration: '1 mies.', desc: 'Bilans początkowy i końcowy.' },
        { title: 'Podział majątku', duration: '6 mies. od ogłoszenia', desc: 'Wcześniej niemożliwy.' },
        { title: 'Wykreślenie z KRS', duration: '1-3 mies.', desc: 'Po podziale.' },
        { title: 'Zamknięcie w US, ZUS', duration: '1 mies.', desc: 'Dokumenty kadrowe 50 lat.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Zależy od ścieżki.',
      items: [
        'Aktualny wpis KRS',
        'Statut',
        'Sprawozdania finansowe',
        'Lista wspólników z udziałami',
        'Umowy z kontrahentami',
        'Umowy o pracę i zlecenia',
        'Bilans i RZiS na dzień likwidacji',
        'Spis środków trwałych',
        'Wyciągi bankowe za 12 mies.'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Likwidacja - stała. M&A - % od transakcji.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · wybór ścieżki' },
        { label: 'Sprzedaż udziałów', value: 'od 1 800 PLN', note: 'Notariusz + KRS' },
        { label: 'Likwidacja', value: 'od 6 500 PLN', note: 'Pełen cykl 6+ mies.' },
        { label: 'M&A pełny', value: 'od 15 000 PLN', note: 'DD + umowa + zamknięcie' }
      ],
      note: 'Likwidacja: + MSiG 600 PLN, notariusz 1 200-2 500, KRS 350. M&A: + DD 5 000-15 000.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'KSH - rozdz. 6, art. 270-290 (likwidacja Sp. z o.o.)',
        'Prawo upadłościowe z 28 lutego 2003 r.',
        'PIT - art. 17 (sprzedaż udziałów 19%)',
        'VAT - art. 6 pkt 1 (przedsiębiorstwo poza VAT)',
        'Kodeks cywilny (sprzedaż przedsiębiorstwa)'
      ]
    },
    faq: [
      { q: 'Szybciej niż 6 mies.?', a: 'Nie. KSH wymaga 6 mies. dla wierzycieli. Alternatywa - sprzedaż udziałów (2-4 tyg.) lub połączenie (3-4 mies.).' },
      { q: 'Likwidacja vs sprzedaż udziałów?', a: 'Sprzedaż wygrywa w 80%: szybciej, taniej, mniejszy podatek.' },
      { q: 'Sprzedaż „muszli"?', a: 'Tak. Stara, czysta Sp. z o.o. - 5 000-15 000 PLN.' },
      { q: 'Pracownicy przy likwidacji?', a: 'Wypowiedzenie 1-3 mies., odprawy. PUP płaci jeśli upadłość.' },
      { q: 'Podatki przy sprzedaży udziałów?', a: '19% PIT (PIT-38). Zysk = cena - koszt nabycia.' },
      { q: 'Zaległości ZUS/US?', a: 'Muszą być spłacone lub depozytowane. KRS bez zaświadczeń o niezaleganiu nie wykreśli.' },
      { q: 'CRBR?', a: 'Aktualizacja przy likwidacji. Po wykreśleniu - auto.' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'podatki-ksiegowosc'],
    ctaTitle: 'Zamknięcie lub sprzedaż',
    ctaSubtitle: 'Bezpłatny dobór ścieżki. Sprzedaż od 1 800 PLN, likwidacja od 6 500 PLN.'
  },
  en: {
    slug: 'likwidacja-sprzedaz',
    group: 'business',
    icon: 'gavel',
    badge: 'Liquidation · M&A · share transfer',
    title: 'Wind-down and M&A',
    subtitle: 'Sp. z o.o. liquidation or business sale (M&A) end-to-end',
    lead: 'Closing a Sp. z o.o. is a formal process: opening liquidation, MSiG announcements, settling obligations, liquidation report, KRS deletion. Minimum 6 months between announcement and deletion. Alternative - selling the business (M&A) or transferring shares. We run both paths: liquidation when no buyer, M&A when there is - faster and tax-efficient.',
    facts: [
      { label: 'Liquidation', value: '6-9 months', note: 'KSH minimum' },
      { label: 'Share sale', value: '2-4 weeks', note: 'at notary' },
      { label: 'Asset M&A', value: '2-4 months', note: 'DD + sale' },
      { label: 'PIT on sale', value: '19%', note: "shareholder's gain" }
    ],
    grounds: {
      title: 'When to use what',
      subtitle: 'Each path has different timelines, taxes, risks.',
      items: [
        { title: 'Liquidation - no buyer', desc: 'Slowest (6-9 mo), most expensive, but clean closure.' },
        { title: 'Share sale - buyer found', desc: '100% share transfer. 2-4 weeks, 19% PIT on gain.' },
        { title: 'Asset M&A', desc: 'Sale of selected assets without entity transfer.' },
        { title: 'Merger', desc: 'Slip-sale into another Sp. z o.o. - tax exemptions.' },
        { title: 'Inheritance', desc: 'Share inheritance on death of shareholder.' },
        { title: 'Pre-sale prep', desc: 'Cleanup before M&A doubles sale price.' }
      ]
    },
    timeline: {
      title: 'Liquidation steps',
      subtitle: 'Share sale alternative is 2-4 weeks. Liquidation is 6+ months.',
      steps: [
        { title: 'Consultation', duration: '30 min', desc: 'Liquidation vs share sale vs merger. Tax modeling.' },
        { title: 'Shareholder resolution', duration: '1 week', desc: 'Open liquidation, appoint liquidator, file with KRS.' },
        { title: 'MSiG announcement', duration: '7-14 days', desc: 'Creditor invitation in Polish business register. 100 PLN fee.' },
        { title: 'Settling obligations', duration: '2-6 months', desc: 'Liquidator sells assets, pays debts, terminates employees.' },
        { title: 'Liquidation balance sheet', duration: '1 month', desc: 'Opening and closing balances filed with KRS and tax office.' },
        { title: 'Asset distribution', duration: '6 months from MSiG', desc: 'Cannot happen earlier.' },
        { title: 'KRS deletion', duration: '1-3 months', desc: 'After distribution.' },
        { title: 'Tax/ZUS closure', duration: '1 month', desc: 'VAT cancellation, NIP closure. Payroll docs kept 50 years.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Depends on path.',
      items: [
        'Current KRS extract',
        'Articles of association',
        'Annual financial statements (all years)',
        'Shareholder list with PESEL/passports',
        'Counterparty contracts',
        'Employment contracts',
        'Balance sheet and P&L on liquidation date',
        'Fixed asset inventory',
        '12 months of bank statements'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Liquidation - fixed. M&A - % of deal.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 min · path selection' },
        { label: 'Share sale', value: 'from 1,800 PLN', note: 'Notary + KRS' },
        { label: 'Liquidation', value: 'from 6,500 PLN', note: 'Full cycle 6+ months' },
        { label: 'Full M&A', value: 'from 15,000 PLN', note: 'DD + agreement + close' }
      ],
      note: 'Liquidation: + MSiG ~600 PLN, notary 1,200-2,500 PLN, KRS 350 PLN. M&A: + accounting DD 5,000-15,000 PLN.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'KSH - Chapter 6, art. 270-290 (Sp. z o.o. liquidation)',
        'Bankruptcy Law of 28 February 2003',
        'PIT - art. 17 (share sale 19%)',
        'VAT - art. 6 pt. 1 (going concern outside VAT)',
        'Civil Code (sale of enterprise)'
      ]
    },
    faq: [
      { q: 'Faster than 6 months?', a: 'Not via liquidation - KSH (Commercial Companies Code) requires 6 months for creditors. Alternatives: share sale (2-4 weeks), merger (3-4 months).' },
      { q: 'Liquidation vs share sale?', a: 'Share sale wins 80% of the time: faster, cheaper, lower tax.' },
      { q: 'Selling an empty shell?', a: 'Yes. Old, clean Sp. z o.o. - 5,000-15,000 PLN.' },
      { q: 'Employees at liquidation?', a: 'Termination 1-3 months, severance pay. PUP covers shortfall on bankruptcy.' },
      { q: 'Taxes on share sale?', a: '19% PIT (PIT-38). Gain = price - cost of acquisition.' },
      { q: 'ZUS/tax arrears?', a: 'Must be paid or deposited. KRS (court register) won\'t delete without zaświadczenie o niezaleganiu (no-arrears certificates).' },
      { q: 'CRBR?', a: 'Update on liquidation. After KRS deletion - auto-closed.' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'podatki-ksiegowosc'],
    ctaTitle: 'Wind-down or sale',
    ctaSubtitle: 'Free path selection. Share sale from 1,800 PLN, liquidation from 6,500 PLN.'
  },
  tr: {
    slug: 'likwidacja-sprzedaz',
    group: 'business',
    icon: 'gavel',
    badge: 'Likwidacja · M&A · pay devri',
    title: 'Şirket tasfiyesi ve satışı',
    subtitle: 'Sp. z o.o. kapanışı veya M&A süreciyle anahtar teslim satış',
    lead: 'Polonya\'da Sp. z o.o.\'nun kapatılması resmi bir prosedürdür: otwarcie likwidacji (tasfiye açılışı), Monitor Sądowy\'da ilan, yükümlülüklerin tasfiyesi, sprawozdanie likwidacyjne (tasfiye raporu), KRS\'den wykreślenie. İlandan kayıt silmeye en az 6 ay. Alternatif - işletme satışı (M&A) veya pay devri. Her iki yolu da yürütüyoruz: alıcı yoksa likwidacja, varsa M&A - vergi açısından daha avantajlı ve daha hızlı.',
    facts: [
      { label: 'Likwidacja', value: '6-9 ay', note: 'KSH gereği asgari süre' },
      { label: 'Pay devri', value: '2-4 hafta', note: 'noter huzurunda' },
      { label: 'Aktif M&A', value: '2-4 ay', note: 'due diligence + satış' },
      { label: 'Satışta vergi', value: '%19 PIT', note: 'wspólnik\'in zysk\'ı üzerinden' }
    ],
    grounds: {
      title: 'Hangi yol ne zaman',
      subtitle: 'Her senaryonun kendi süresi, vergi yükü ve riski vardır. Danışmanlıkta birlikte değerlendiriyoruz.',
      items: [
        { title: 'Likwidacja - alıcı yoksa', desc: 'Şirkete ihtiyacınız kalmadıysa ve alıcı yoksa. En pahalı ve uzun yol (6-9 ay), ama gelecekte yükümlülük bırakmadan temiz bir kapanış sağlar.' },
        { title: 'Pay devri - alıcı varsa', desc: 'Tüm udziałów\'un (payların) alıcıya devri. Hızlı (2-4 hafta), zysk üzerinden %19 PIT. Alıcı tüm yükümlülükleri devralır.' },
        { title: 'Aktif satışı (asset deal)', desc: 'Tüzel kişilik devredilmeden seçili varlıkların (sözleşmeler, çalışanlar, marka) satışı. İşletmenin bir kısmı satılıp diğeri kapatılırken kullanışlıdır.' },
        { title: 'Połączenie spółek (birleşme)', desc: 'Sp. z o.o.\'nun başka bir şirketle birleşmesi. Şartlar sağlanırsa vergi muafiyeti. Karmaşıktır - yalnızca orta ölçekli işletmelere uygundur.' },
        { title: 'Mirasçılara devir', desc: 'Wspólnik\'in (ortağın) ölümü halinde payların mirasçılara intikali. Testament, podział majątku ve KRS düzenlemelerini hazırlıyoruz. Veraset vergisi ayrı bir konudur.' },
        { title: 'Satışa hazırlık', desc: 'Satıştan önce her şeyi düzene koyma: sözleşmeler, ZUS, vergi, sprawozdania. "As is" satışa kıyasla fiyatı 2 kat artırır.' }
      ]
    },
    timeline: {
      title: 'Sp. z o.o. likwidacja aşamaları',
      subtitle: 'Alternatif (pay devri) 2-4 hafta sürer. Likwidacja zorunlu olarak 6+ ay alır.',
      steps: [
        { title: 'Ücretsiz danışmanlık', duration: '30 dk', desc: 'Yolu birlikte belirliyoruz: likwidacja vs sprzedaż udziałów vs połączenie. Vergi sonuçlarını hesaplıyoruz.' },
        { title: 'Uchwała wspólników', duration: '1 hafta', desc: 'Tasfiye açılışı kararı. Likwidator (genelde eski członek zarządu) atanır. KRS\'ye sunum.' },
        { title: 'MSiG\'de ilan', duration: '7-14 gün', desc: 'Monitor Sądowy i Gospodarczy\'de alacaklılara 3 ay içinde alacaklarını bildirme çağrısı. Damga vergisi 100 PLN.' },
        { title: 'Yükümlülüklerin tasfiyesi', duration: '2-6 ay', desc: 'Likwidator varlıkları satar, borçları öder, çalışanları işten çıkarır. Düzenlenmemiş alacaklar - noter nezdinde depo edilir.' },
        { title: 'Bilans likwidacyjny', duration: '1 ay', desc: 'Tasfiye başlangıç ve bitiş bilançolarının hazırlanması. KRS ve US\'ye sunum.' },
        { title: 'Podział majątku', duration: 'ilandan 6 ay sonra', desc: 'Kalan varlıkların ortaklar arasında pay oranlarına göre bölüşümü. İlan tarihinden itibaren 6 ay geçmeden mümkün değildir.' },
        { title: 'KRS\'den wykreślenie', duration: '1-3 ay', desc: 'Tasfiyenin sonlandırılması başvurusu. KRS şirketi sicilden siler. Belgeleri 5+ yıl arşivde tutuyoruz.' },
        { title: 'US, ZUS\'ta kapanış', duration: '1 ay', desc: 'VAT, NIP iptali. ZUS hesaplarının kapatılması. Personel belgeleri 50 yıl saklanır.' }
      ]
    },
    documents: {
      title: 'Likwidacja veya satış için gerekenler',
      subtitle: 'Yola bağlıdır. Asgari minimum: kuruluş belgeleri ve mali tablolar.',
      items: [
        'Güncel KRS çıktısı (biz alıyoruz)',
        'Sp. z o.o.\'nun güncel statut\'u',
        'Şirketin var olduğu tüm yıllar için sprawozdania finansowe',
        'Wspólnik\'lerin PESEL / pasaport ve pay oranlarıyla listesi',
        'Müşteri ve tedarikçi sözleşmeleri (yükümlülüklerin değerlendirilmesi için)',
        'Tüm umowy o pracę ve umowy zlecenia (bildirimler için)',
        'Tasfiye gününe ait bilanço ve gelir-gider tablosu',
        'Sabit kıymet ve depo sayım listesi',
        'Son 12 ayın banka hesap hareketleri'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Likwidacja sabit fiyat. M&A için işlemden % alıyoruz.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · yol seçimi' },
        { label: 'Pay devri', value: '1.800 PLN\'den', note: 'Noter umowa\'sı + KRS' },
        { label: 'Sp. z o.o. likwidacja', value: '6.500 PLN\'den', note: '6+ aylık tam döngü' },
        { label: 'Tam M&A süreci', value: '15.000 PLN\'den', note: 'Due diligence + sözleşme + kapanış' }
      ],
      note: 'Likwidacja için: MSiG ilanları ~600 PLN, noter 1.200-2.500 PLN, KRS 350 PLN. M&A için: ek olarak muhasebe due diligence 5.000-15.000 PLN. Kredi, sponsor veya ihtilaflı durumlar varsa - ayrı fiyatlandırma.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 15 września 2000 r. - Kodeks spółek handlowych (KSH - bölüm 6, Sp. z o.o. tasfiyesi, madde 270-290)',
        'Ustawa z dnia 28 lutego 2003 r. - Prawo upadłościowe (İflas Kanunu - ödeme aczi durumunda)',
        'Ustawa z dnia 26 lipca 1991 r. o PIT (madde 17 - pay satışı, %19 vergi)',
        'Ustawa z dnia 11 marca 2004 r. o VAT (madde 6/1 - işletme bütünü VAT dışı)',
        'Ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny (Medeni Kanun - işletme satışı)'
      ]
    },
    faq: [
      { q: 'Sp. z o.o.\'yu 6 aydan kısa sürede kapatabilir miyim?', a: 'Likwidacja yapıyorsanız hayır - KSH gereği wierzyciele için (alacaklılar için) asgari 6 ay. Alternatifler: 1) Pay devri - 2-4 hafta; 2) Połączenie (başka Sp. z o.o. ile birleşme - slip-sale) - 3-4 ay; 3) Upadłość (iflas) - şirket gerçekten ödeme aciziyse, yine 6+ ay.' },
      { q: 'Likwidacja mı yoksa pay devri mi avantajlı?', a: 'Pay devri (sprzedaż udziałów) genelde daha hızlı, daha ucuz ve vergi açısından daha avantajlıdır. Zysk\'a (kâr = satış fiyatı eksi pay edinim maliyeti) %19 PIT uygulanır. Likwidacja\'da podział majątku\'nda (kalan varlıklara) %19 vergi, plus 6+ aylık süreç ve likwidator + KRS ücretleri vardır. Pay devri vakaların %80\'inde likwidacja\'yı geride bırakır.' },
      { q: '"Boş kabuk" şirket satabilir miyim?', a: 'Evet. Bu, shelf-companies\'in tersi pazarıdır: yaşı değer kazanmış eski Sp. z o.o.\'nuzu, geçmişi olan bir şirket arayan alıcıya satarsınız. 12+ aylık fiyat genelde 5.000-15.000 PLN\'dir. Şirketin "temiz" olması şarttır: borç yok, yükümlülük yok, due diligence\'tan geçmiş. Brokerlar üzerinden satışını yapıyoruz.' },
      { q: 'Likwidacja sırasında çalışanlara ne olur?', a: 'Podział majątku\'ndan önce işten çıkarılırlar. Likwidator, rzecznik pracy\'ye (iş müfettişine) ve her çalışana 1-3 ay önceden bildirir (kıdeme bağlı). Odprawy (kıdem tazminatı) öder: 2 yıla kadar 1 aylık maaş, 8 yıla kadar 2, üzeri 3. Şirket iflasta ise PUP (Powiatowy Urząd Pracy) eksiği öder.' },
      { q: 'Pay devrinde vergi nasıl?', a: 'Wspólnik\'in zysk\'ı üzerinden %19 PIT (PIT-38 ile beyan). Zysk = satış fiyatı eksi pay edinim maliyeti (genelde kuruluş anında ödenen kapitał zakładowy). Takip eden yılın 30 Nisan\'ına kadar beyan edilir. ESC (vergi ertelemesi), satışın ilk 6 ayında başka şirket alımı için kullanılabilir (nadiren uygulanır).' },
      { q: 'ZUS / US borcu varsa ne olur?', a: 'Likwidacja\'da bu borçların ödenmesi veya depo edilmesi gerekir. Şirket bunu yapamıyorsa - upadłość\'a (iflas) gider, likwidacja\'ya değil. Likwidacja başlamadan önce zaświadczenia o niezaleganiu (borçsuzluk belgesi) alıyoruz - kritik bir adımdır, olmadan KRS sicilden silmez.' },
      { q: 'Likwidacja\'da CRBR ne olur?', a: 'Mutlaka güncellenir - tasfiye tarihi belirtilir. KRS\'den wykreślenie\'den sonra CRBR\'da otomatik kapanır. Ayrı wniosek gerekmez.' }
    ],
    related: ['rejestracja-sp-z-oo', 'gotowe-firmy', 'podatki-ksiegowosc'],
    ctaTitle: 'Şirket kapanışı veya satışı',
    ctaSubtitle: 'Yolu ve vergileri ücretsiz hesaplıyoruz. Pay devri 1.800 PLN\'den, anahtar teslim likwidacja 6.500 PLN\'den.'
  }
};

export default likwidacjaSprzedaz;
