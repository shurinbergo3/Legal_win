import type { ServiceEntry } from './types';

const zaswiadczeniaZusUs: ServiceEntry = {
  ru: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'Справки ZUS / US',
    subtitle: 'Zaświadczenia z ZUS i Urzędu Skarbowego',
    lead: 'Zaświadczenia из ZUS (Zakład Ubezpieczeń Społecznych) и Urzędu Skarbowego - ключевые документы для подачи на TRC, ПМЖ, ипотеку, кредит, визу за рубеж, тендеры в публичных закупках. Получаем справки о доходах (PIT-11, ZUS RMUA), о неимении задолженности (zaświadczenie o niezaleganiu), о страховых периодах (zaświadczenie ZUS S-1) и десятки других - через PUE ZUS, e-Urząd Skarbowy или физически в офисе.',
    facts: [
      { label: 'Срок выдачи', value: '1-7 дней', note: 'standard ZUS · до 14 дней при сложных случаях' },
      { label: 'Госпошлина', value: '0-21 PLN', note: 'базовые - бесплатно' },
      { label: 'Где', value: 'PUE ZUS + EUS', note: 'онлайн или офис' },
      { label: 'Действует', value: '1-6 мес', note: 'в зависимости от типа справки' }
    ],
    grounds: {
      title: 'Какие справки получаем',
      subtitle: 'Полный список - на сайте biznes.gov.pl. Самые востребованные у иностранцев - ниже.',
      items: [
        { title: 'Zaświadczenie o niezaleganiu w ZUS', desc: 'Подтверждение отсутствия задолженности по соцвзносам. Обязательно для TRC по бизнесу, тендеров, кредитов. Срок - 7 дней, бесплатно.' },
        { title: 'Zaświadczenie o niezaleganiu w US', desc: 'Аналог из Urzędu Skarbowego - нет долгов по налогам. 7 дней, 21 PLN. Для тендеров, ипотеки, лицензий.' },
        { title: 'PIT-11 за прошлые годы', desc: 'Дубликат расчёта налога от работодателя - для TRC, ПМЖ, ипотеки. Если работодатель не отвечает - берём через US.' },
        { title: 'ZUS RMUA - отчёт о страховых взносах', desc: 'Список сделанных взносов и периодов работы - для подтверждения стажа в Польше. Бесплатно через PUE ZUS.' },
        { title: 'Zaświadczenie A1 (детачмент)', desc: 'Для работников, командированных за рубеж - подтверждает уплату ZUS только в Польше. Обязательно для перевозчиков и IT-фрилансеров.' },
        { title: 'Zaświadczenie ZUS S-1 / U2', desc: 'Подтверждение страховых периодов для пенсии или пособий в стране ЕС.' },
        { title: 'Историческая выписка z konta podatnika', desc: 'Все платежи, переплаты, недоплаты налогов за выбранный период - для аудита, контроля или отчётности.' },
        { title: 'Zaświadczenie o dochodach (US)', desc: 'Подтверждение годового дохода - для ипотеки, школьных стипендий, MOPS-пособий, посольств.' }
      ]
    },
    timeline: {
      title: 'Как мы получаем справку',
      subtitle: 'Стандартный срок - 1-7 рабочих дней через электронные платформы или физически.',
      steps: [
        { title: 'Консультация', duration: '15 мин', desc: 'Уточняем тип справки, цель использования, формат (электронная или бумажная), срок действия.' },
        { title: 'Доверенность', duration: '1 день', desc: 'Подписываем pełnomocnictwo (UPL-1 для US, ZUS-PEL для ZUS) - 17 PLN госпошлина за each. Через ePUAP - бесплатно.' },
        { title: 'Подача wniosku', duration: '1 день', desc: 'Заполняем и подаём через PUE ZUS, e-Urząd Skarbowy или физически - в зависимости от справки.' },
        { title: 'Оплата (если нужна)', duration: '1 день', desc: '21 PLN за zaświadczenie z US, бесплатно - большинство ZUS-справок.' },
        { title: 'Выдача справки', duration: '1-7 дней', desc: 'Электронная версия - на профиль PUE/EUS. Бумажная - забираем лично или принимаем по почте/курьером.' },
        { title: 'Apostille или перевод', duration: '3-7 дней', desc: 'Если справка для использования за рубежом - оформляем apostille (60 PLN MSZ) и присяжный перевод.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Минимум для большинства справок.',
      items: [
        'Паспорт (копия страницы с фото)',
        'PESEL или NIP (для бизнеса)',
        'Karta pobytu или другой документ легального пребывания',
        'Pełnomocnictwo для LegalWin (UPL-1 для US, ZUS-PEL для ZUS)',
        'KRS-номер фирмы (если справка для Sp. z o.o.)',
        'Доступ к ePUAP / profil zaufany (если есть - ускоряет процесс)',
        'Указание целевого учреждения (банк, urząd, посольство - формат может отличаться)',
        'Период, за который нужна справка (например, доходы 2023-2024)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Гонорар за справку - от 150 PLN. Госпошлины - отдельно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '15 минут · уточнение цели' },
        { label: 'Одна справка под ключ', value: 'от 150 PLN', note: 'Wniosek, доверенность, выдача' },
        { label: 'Пакет 3+ справок', value: 'от 350 PLN', note: 'Скидка при одновременной подаче' },
        { label: 'Справка + apostille + перевод', value: 'от 480 PLN', note: 'Для использования за рубежом' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (0-21 PLN на справку, 17 PLN pełnomocnictwo, 60 PLN apostille) и присяжный перевод (~80 PLN/документ) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 13 października 1998 r. o systemie ubezpieczeń społecznych',
        'Ustawa z dnia 29 sierpnia 1997 r. - Ordynacja podatkowa (art. 306a - zaświadczenia)',
        'Rozporządzenie MF w sprawie wzorów wniosków o wydanie zaświadczeń',
        'Ustawa z 16 listopada 2006 r. o opłacie skarbowej',
        'Rozporządzenie (WE) 883/2004 (koordynacja systemów zabezpieczenia społecznego)'
      ]
    },
    faq: [
      { q: 'Можно ли получить справку без личного визита?', a: 'Да. Большинство справок ZUS - через PUE ZUS (Платформа электронных услуг ZUS, нужен profil zaufany ePUAP - доверенный профиль). Большинство справок US (Urząd Skarbowy - налоговая) - через e-Urząd Skarbowy (электронная налоговая). Бумажная версия - по почте или курьером. Личный визит нужен только для apostille.' },
      { q: 'Как долго действует zaświadczenie o niezaleganiu?', a: 'Zaświadczenie o niezaleganiu (справка об отсутствии задолженности) - ZUS - 1 месяц, US - 3 месяца от даты выдачи. Для банков и тендеров обычно требуют свежие справки (≤ 30 дней). Делаем на старте процесса, чтобы успеть с подачей.' },
      { q: 'Что делать, если есть задолженность?', a: 'Нельзя получить «niezaleganie» (справку об отсутствии задолженности), пока не погасили долг. Помогаем составить wniosek o rozłożenie na raty (заявление о рассрочке) или umorzenie (списание) - в исключительных случаях. После погашения - справка выдаётся в день обращения.' },
      { q: 'Чем отличается ZUS RMUA от PIT-11?', a: 'PIT-11 - расчёт налога от работодателя за календарный год. RMUA - выписка взносов ZUS, которые работодатель сделал за вас. PIT-11 нужен для TRC и налоговой декларации. RMUA - для подтверждения стажа.' },
      { q: 'Что такое A1 и когда нужен?', a: 'Zaświadczenie A1 (свидетельство A1) - это документ ЕС, подтверждающий, что вы платите соцвзносы только в Польше при работе в другой стране ЕС. Обязательно для дальнобойщиков, IT-фрилансеров с клиентами в ЕС, командировок свыше 24 месяцев. Без A1 принимающая страна может потребовать платить соцвзносы у себя.' },
      { q: 'Как получить справку для иностранного банка / посольства?', a: 'Готовим справку, ставим apostille (если страна вне ЕС) и делаем присяжный перевод на нужный язык. Полный цикл - 7-14 дней. Распространённые цели: ипотека в Германии, виза США (DS-160), резидентство в ОАЭ.' },
      { q: 'Сколько по факту стоит получение всех справок для TRC?', a: 'Базовый пакет для TRC по работе: PIT-11 (бесплатно), ZUS RMUA (бесплатно), zaświadczenie o niezaleganiu (21 PLN US + 0 ZUS). Наш гонорар - 350 PLN. Итого 371 PLN за пакет. С apostille и переводом - 700-800 PLN.' }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Справки ZUS / US за 1-7 дней',
    ctaSubtitle: 'Бесплатная консультация: уточним тип справки, цель использования, срок. От подписания доверенности до получения - обычно 1-7 рабочих дней.'
  },
  pl: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'Zaświadczenia ZUS / US',
    subtitle: 'Zaświadczenia z ZUS i Urzędu Skarbowego',
    lead: 'Zaświadczenia z ZUS i US to kluczowe dokumenty do TRC, PR, kredytu hipotecznego, wizy zagranicznej, zamówień publicznych. Załatwiamy zaświadczenia o dochodach (PIT-11, ZUS RMUA), o niezaleganiu, A1, S-1 i inne - przez PUE ZUS, e-Urząd Skarbowy lub osobiście.',
    facts: [
      { label: 'Termin', value: '1-7 dni', note: 'ZUS standard · do 14 w trudnych sprawach' },
      { label: 'Opłata', value: '0-21 PLN', note: 'bazowe - bezpłatnie' },
      { label: 'Gdzie', value: 'PUE ZUS + EUS', note: 'online lub osobiście' },
      { label: 'Ważność', value: '1-6 mies.', note: 'zależnie od typu' }
    ],
    grounds: {
      title: 'Jakie zaświadczenia załatwiamy',
      subtitle: 'Pełna lista na biznes.gov.pl. Najczęściej dla cudzoziemców:',
      items: [
        { title: 'Niezaleganie w ZUS', desc: 'Brak zaległości w składkach. Wymagane do TRC po biznesie, przetargów. 7 dni, gratis.' },
        { title: 'Niezaleganie w US', desc: 'Brak zaległości podatkowych. 7 dni, 21 PLN. Przetargi, kredyty.' },
        { title: 'PIT-11 z poprzednich lat', desc: 'Duplikat rozliczenia od pracodawcy - TRC, PR, kredyty. Z US, jeśli pracodawca nie odpowiada.' },
        { title: 'ZUS RMUA', desc: 'Wykaz składek i okresów pracy - potwierdzenie stażu w Polsce. Gratis przez PUE.' },
        { title: 'Zaświadczenie A1', desc: 'Delegacja w UE - składki tylko w Polsce. Konieczne dla kierowców i IT freelancerów.' },
        { title: 'ZUS S-1 / U2', desc: 'Okresy ubezpieczeniowe do emerytury / świadczeń w UE.' },
        { title: 'Historia konta podatnika', desc: 'Wszystkie wpłaty, nadpłaty, niedopłaty za okres - audyt, kontrola.' },
        { title: 'Zaświadczenie o dochodach (US)', desc: 'Roczny dochód - kredyt, stypendia, MOPS, ambasady.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standard 1-7 dni roboczych przez platformy elektroniczne lub osobiście.',
      steps: [
        { title: 'Konsultacja', duration: '15 min', desc: 'Typ, cel, format, ważność.' },
        { title: 'Pełnomocnictwo', duration: '1 dzień', desc: 'UPL-1 (US) / ZUS-PEL - 17 PLN każde. Przez ePUAP - gratis.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'Składamy w PUE ZUS, e-Urząd Skarbowy lub osobiście.' },
        { title: 'Opłata', duration: '1 dzień', desc: '21 PLN US, większość ZUS - gratis.' },
        { title: 'Odbiór', duration: '1-7 dni', desc: 'Wersja elektroniczna na profilu PUE/EUS lub odbiór osobisty.' },
        { title: 'Apostille / tłumaczenie', duration: '3-7 dni', desc: 'Apostille (60 PLN MSZ) + tłumaczenie przysięgłe.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Minimum dla większości zaświadczeń.',
      items: [
        'Paszport (kopia strony ze zdjęciem)',
        'PESEL lub NIP',
        'Karta pobytu',
        'Pełnomocnictwo dla LegalWin (UPL-1 / ZUS-PEL)',
        'KRS firmy (dla Sp. z o.o.)',
        'Dostęp do ePUAP (jeśli jest)',
        'Cel - konkretny urząd / bank',
        'Okres, za który zaświadczenie'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Honorarium od 150 PLN za zaświadczenie.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '15 min · cel' },
        { label: 'Jedno zaświadczenie pod klucz', value: 'od 150 PLN', note: 'Wniosek, pełnomocnictwo, odbiór' },
        { label: 'Pakiet 3+', value: 'od 350 PLN', note: 'Rabat za pakiet' },
        { label: 'Zaświadczenie + apostille + tłumaczenie', value: 'od 480 PLN', note: 'Do użytku zagranicznego' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty (0-21 PLN/zaśw., 17 PLN pełn., 60 PLN apostille) i tłumaczenia (~80 PLN) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 13 października 1998 r. o systemie ubezpieczeń społecznych',
        'Ordynacja podatkowa (art. 306a - zaświadczenia)',
        'Rozporządzenie MF ws. wzorów wniosków o zaświadczenia',
        'Ustawa o opłacie skarbowej z 16 listopada 2006 r.',
        'Rozporządzenie (WE) 883/2004 (koordynacja zabezpieczenia społecznego)'
      ]
    },
    faq: [
      { q: 'Czy można bez wizyty?', a: 'Tak - większość ZUS przez PUE, US przez EUS. Wizyta tylko do apostille.' },
      { q: 'Ważność niezalegania?', a: 'ZUS - 1 mies., US - 3 mies. Banki i przetargi: ≤ 30 dni.' },
      { q: 'Co przy zaległości?', a: 'Najpierw spłata lub wniosek o raty/umorzenie. Po - wydanie od ręki.' },
      { q: 'RMUA vs PIT-11?', a: 'PIT-11 - roczne rozliczenie od pracodawcy. RMUA - wykaz składek ZUS. Oba potrzebne do TRC.' },
      { q: 'Czym jest A1?', a: 'Dokument UE - składki tylko w PL przy pracy w innym państwie. Konieczne dla kierowców i IT freelancerów.' },
      { q: 'Zaświadczenie do banku zagranicznego?', a: 'Zaświadczenie + apostille (jeśli spoza UE) + tłumaczenie. 7-14 dni.' },
      { q: 'Realny koszt pakietu do TRC?', a: 'PIT-11 (gratis) + RMUA (gratis) + niezaleganie US (21 PLN). Honorarium 350 PLN. Łącznie 371 PLN. Z apostille - 700-800.' }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Zaświadczenia ZUS / US w 1-7 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: typ, cel, termin. Od pełnomocnictwa do odbioru - zwykle 1-7 dni roboczych.'
  },
  en: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'ZUS / US certificates',
    subtitle: 'Certificates from Polish social security (ZUS) and the tax office (US)',
    lead: "ZUS is the Polish equivalent of UK NI or US Social Security. Urząd Skarbowy is the tax office. Sooner or later you need paper from one or both: a no-arrears letter for a KRS filing or a public tender, an A1 form because you live in Warsaw but your employer is still in London, a tax-residency certificate so the IRS honours the Poland-US treaty and stops withholding 30% on your dividends. In 2026 ZUS is fully digital through PUE ZUS and most US filings run through e-Urząd Skarbowy, but the forms are Polish-only and the validation rules trip up non-natives. We file on your behalf, pick up the paper, get it apostilled and translated if it's going abroad.",
    facts: [
      { label: 'Turnaround', value: 'same day to 7 days', note: 'PUE same day · post 5 days · urząd same visit' },
      { label: 'State fee', value: '0-21 PLN', note: 'most ZUS free · US no-arrears 21 PLN · CFR-1 17 PLN' },
      { label: 'Channel', value: 'PUE ZUS · e-US · in person', note: 'profil zaufany speeds everything up' },
      { label: 'Validity', value: '1-6 months', note: 'ZUS no-arrears 1 month · US 3 months' }
    ],
    grounds: {
      title: 'Which certificates we pull',
      subtitle: 'The full list lives on biznes.gov.pl. These are the ones English-speaking clients actually ask for.',
      items: [
        { title: "Zaświadczenie o niezaleganiu (ZUS)", desc: "Proves you owe ZUS nothing. KRS filings, public-procurement bids, court cases and bank loans all demand it. 7 days standard, free. Banks usually want one no older than 30 days." },
        { title: "Zaświadczenie o braku zaległości (US)", desc: "The tax-office twin. 7 days, 21 PLN. Needed for tenders, mortgages, licences, and any KRS change that touches share capital." },
        { title: "A1 form for cross-border work", desc: "If you're British or Irish living in Warsaw but still employed by a UK or Dublin entity post-Brexit, A1 keeps your social contributions in Poland and stops HMRC from double-taxing. Mandatory for HGV drivers, IT contractors with EU clients, and anyone on a posting longer than 24 months." },
        { title: "Certyfikat rezydencji podatkowej (CFR-1)", desc: "Polish tax-residency certificate. Costs 17 PLN. You'll need it the moment a US broker (Schwab, IBKR, Fidelity) asks for a W-8BEN treaty claim or the IRS questions your residency under the substantial-presence test." },
        { title: "PIT-11 reissue", desc: "Lost the annual settlement your Polish employer sent? We pull a duplicate. Five days through US if the employer has gone quiet." },
        { title: "ZUS RMUA contribution history", desc: "Itemised list of every złoty your employer paid into ZUS for you. Free on PUE. Proof of Polish work periods for permanent residence or a UK pension aggregation." },
        { title: "ZUS S-1 / U2", desc: "Contribution-period certificates for moving your record to a pension in another EU state, or claiming unemployment benefits across the border under Regulation 883/2004." },
        { title: "Income certificate (US)", desc: "Confirms your annual income to a Polish bank, a foreign embassy, a school scholarship board, or MOPS. Usually paired with a sworn translation if it's heading to London or New York." }
      ]
    },
    timeline: {
      title: "How we run it",
      subtitle: "Same day if you've got profil zaufany. A week if we're doing it on paper.",
      steps: [
        { title: "Free 15-minute call", duration: "15 min", desc: "We pin down the certificate, the recipient (Polish bank, IRS, HMRC, court, KRS), the format (PDF vs paper with stamp), and the deadline. Different recipients want different stamps." },
        { title: "Power of attorney", duration: "1 day", desc: "UPL-1 for US, ZUS-PEL for ZUS. 17 PLN stamp duty each on paper, or free if you sign through ePUAP with profil zaufany." },
        { title: "Filing the wniosek", duration: "1 day", desc: "PUE ZUS for social security, e-Urząd Skarbowy for tax. Same-day filing once we have your PoA. Paper backup if the system flags an identity-validation error, which it does for about one in five foreigners." },
        { title: "State fees paid", duration: "same day", desc: "21 PLN for a US no-arrears, 17 PLN for CFR-1 tax-residency, free for almost everything ZUS issues. We pay and bill it through." },
        { title: "Pickup", duration: "same day to 5 days", desc: "PUE delivers electronic certificates instantly to your profile. Paper goes to Senatorska 38, Skierniewicka 6 or Mińska 25 in Warsaw depending on jurisdiction. We collect or have it couriered." },
        { title: "Apostille and sworn translation", duration: "3-7 days", desc: "If the certificate is going to the IRS, HMRC, a German bank or the UAE, we add the MSZ apostille (60 PLN) and a sworn English translation. The IRS in particular rejects anything without an apostille." }
      ]
    },
    documents: {
      title: "What we need from you",
      subtitle: "Minimum set. We'll ask for more only if the certificate needs it.",
      items: [
        "Passport (photo-page scan; we verify on file)",
        "PESEL, or NIP if you're filing for a company",
        "Karta pobytu or another proof of legal stay",
        "Signed power of attorney (UPL-1 for US, ZUS-PEL for ZUS)",
        "Company KRS number, when the certificate is for a Sp. z o.o.",
        "ePUAP / profil zaufany login if you've got one (cuts a day off)",
        "Name of the recipient: bank, urząd, IRS, HMRC, embassy",
        "The period the certificate should cover, e.g. 2023 income or current arrears status"
      ]
    },
    pricing: {
      title: "Our fee",
      subtitle: "From 150 PLN per certificate. State fees and translations on top.",
      items: [
        { label: "Consultation", value: "Free", note: "15 minutes · we confirm which certificate you actually need" },
        { label: "Single turnkey certificate", value: "from 150 PLN", note: "Wniosek, PoA, filing, pickup" },
        { label: "Bundle of 3 or more", value: "from 350 PLN", note: "TRC packs and bank packs ship together" },
        { label: "Certificate + apostille + sworn translation", value: "from 480 PLN", note: "For the IRS, HMRC, foreign banks, UAE residency" }
      ],
      note: "LegalWin fees only. State fees (0-21 PLN per certificate, 17 PLN per PoA on paper, 60 PLN apostille) and sworn translations (about 80 PLN per page) are passed through."
    },
    legalBase: {
      title: "Legal basis",
      items: [
        "Social Security System Act of 13 October 1998",
        "Tax Ordinance Act of 29 August 1997, Article 306a on certificates",
        "Ministry of Finance regulation on certificate-application templates",
        "Stamp Duty Act of 16 November 2006",
        "Regulation (EC) 883/2004 on coordination of social-security systems"
      ]
    },
    faq: [
      { q: "Can I get all of this without setting foot in an urząd?", a: "Almost. If you have profil zaufany, ZUS issues most certificates same day through PUE and US through e-Urząd Skarbowy. No profil zaufany? Then we go in person on your behalf. The only thing that genuinely needs a counter visit is apostille at MSZ on Tęczowa." },
      { q: "I'm British, working in Warsaw for a UK employer. Do I need A1?", a: "Yes, and post-Brexit this is the form HMRC and ZUS argue about most. A1 keeps your NI contributions flowing back to the UK and stops ZUS from claiming you. The UK-EU social-security protocol still recognises A1 issued by ZUS for periods of work in Poland up to 24 months. We file the ZUS-A1 with the right detachment grounds so HMRC doesn't reject it." },
      { q: "What's the difference between Polish tax residency and US substantial presence?", a: "Poland uses a 183-day rule plus a centre-of-vital-interests test under Article 3 of the PIT Act. The IRS uses the substantial-presence formula in IRC §7701(b): days in the US this year plus a third of last year plus a sixth of the year before. You can technically be a tax resident of both at once. The Poland-US treaty tiebreaker decides. The CFR-1 we pull is what your US broker needs to honour the treaty rate." },
      { q: "How fast can I actually get a no-arrears letter?", a: "Same day at the urząd counter if you're there in person. Same day on PUE if you've got profil zaufany. About 5 working days if it has to come by post. We default to PUE because it's fastest and the PDF is legally equivalent to the paper version." },
      { q: "Which ZUS office in Warsaw handles my case?", a: "Depends on where you're registered. The main Warsaw branches are Senatorska 38 (central), Skierniewicka 6 (Wola), and Mińska 25 (Praga-Południe). For the tax office it's by registration address too. We check the jurisdiction before filing so the form lands at the right desk." },
      { q: "I owe ZUS or US money. Can I still get a no-arrears certificate?", a: "Not until the debt is cleared. We can file a wniosek o rozłożenie na raty (instalment plan) or, in genuine hardship cases, umorzenie (write-off). Once the schedule is approved or the debt is paid, ZUS and US issue the certificate the same day." },
      { q: "What does a full TRC pack actually cost?", a: "PIT-11 (free) plus ZUS RMUA (free) plus US no-arrears (21 PLN) plus ZUS no-arrears (free). Our fee for the bundle is 350 PLN. So 371 PLN end to end. Add apostille and sworn translation and you're at 700-800 PLN for an internationally usable pack." }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: "ZUS and US certificates, sorted in 1-7 days",
    ctaSubtitle: "Free 15-minute consultation. We confirm which certificate the recipient actually wants, file through PUE or e-US, and hand you the paper (or PDF) ready for the IRS, HMRC, a Polish bank, or a court."
  },
  tr: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'ZUS / US belgeleri',
    subtitle: 'ZUS (Sosyal Güvenlik) ve Urząd Skarbowy (vergi dairesi) belgeleri',
    lead: 'ZUS (Zakład Ubezpieczeń Społecznych - Sosyal Güvenlik Kurumu) ve Urząd Skarbowy (vergi dairesi) zaświadczenia\'ları, TRC, daimi ikamet, ipotek, kredi, yurt dışı vize başvurusu ve kamu ihalelerinde kritik belgelerdir. Gelir belgeleri (PIT-11, ZUS RMUA), borcu olmama (zaświadczenie o niezaleganiu), sigorta dönem belgesi (ZUS S-1) ve onlarca diğerini PUE ZUS, e-Urząd Skarbowy üzerinden veya bizzat ofiste hazırlatıyoruz.',
    facts: [
      { label: 'Verilme süresi', value: '1-7 gün', note: 'standart ZUS · karmaşık dosyalarda 14 güne kadar' },
      { label: 'Resmi harç', value: '0-21 PLN', note: 'temel olanlar ücretsiz' },
      { label: 'Yer', value: 'PUE ZUS + EUS', note: 'çevrimiçi veya ofis' },
      { label: 'Geçerlilik', value: '1-6 ay', note: 'belge türüne göre' }
    ],
    grounds: {
      title: 'Hangi belgeleri alıyoruz',
      subtitle: 'Tam liste biznes.gov.pl\'de. Yabancılarda en sık talep edilenler:',
      items: [
        { title: 'Zaświadczenie o niezaleganiu w ZUS', desc: 'Sosyal güvenlik primlerinde borcu olmadığını gösterir. İşletme üzerinden TRC, ihale ve kredi için zorunludur. 7 gün, ücretsiz.' },
        { title: 'Zaświadczenie o niezaleganiu w US', desc: 'Vergi dairesi muadili - vergi borcu olmama belgesi. 7 gün, 21 PLN. İhale, ipotek, lisans için.' },
        { title: 'Geçmiş yıllar PIT-11', desc: 'İşveren tarafından düzenlenen yıllık vergi mahsubunun duplikatı - TRC, daimi ikamet, ipotek için. İşveren yanıt vermiyorsa US üzerinden alıyoruz.' },
        { title: 'ZUS RMUA - prim raporu', desc: 'Yapılan primlerin ve çalışma dönemlerinin listesi - Polonya\'daki çalışma süresinin kanıtı. PUE ZUS üzerinden ücretsiz.' },
        { title: 'Zaświadczenie A1 (görev belgesi)', desc: 'AB içinde geçici görevle çalışan işçiler için - ZUS\'un yalnızca Polonya\'da ödendiğini teyit eder. Tır şoförleri ve BT serbest çalışanları için zorunludur.' },
        { title: 'Zaświadczenie ZUS S-1 / U2', desc: 'AB ülkesindeki emeklilik veya yardım için sigorta dönemlerinin teyidi.' },
        { title: 'Tarihsel mükellef hesap dökümü', desc: 'Seçilen dönem için tüm ödemeler, fazla ve eksik ödemeler - denetim, kontrol veya raporlama için.' },
        { title: 'Zaświadczenie o dochodach (US)', desc: 'Yıllık gelir belgesi - ipotek, okul bursları, MOPS yardımları, büyükelçilikler için.' }
      ]
    },
    timeline: {
      title: 'Belge süreci',
      subtitle: 'Elektronik platformlar veya bizzat ofiste 1-7 iş günü standart.',
      steps: [
        { title: 'Danışmanlık', duration: '15 dk', desc: 'Belge türü, kullanım amacı, format (elektronik veya kağıt), geçerlilik süresi.' },
        { title: 'Vekaletname', duration: '1 gün', desc: 'Pełnomocnictwo (US için UPL-1, ZUS için ZUS-PEL) imzalıyoruz - her biri 17 PLN damga vergisi. ePUAP üzerinden ücretsiz.' },
        { title: 'Wniosku sunma', duration: '1 gün', desc: 'Belge türüne göre PUE ZUS, e-Urząd Skarbowy veya bizzat dolduruyoruz.' },
        { title: 'Ödeme (gerekirse)', duration: '1 gün', desc: 'US zaświadczenie için 21 PLN, çoğu ZUS belgesi ücretsiz.' },
        { title: 'Belgenin teslimi', duration: '1-7 gün', desc: 'Elektronik versiyon PUE / EUS profilinize gelir. Kağıt - bizzat alır veya posta / kurye ile teslim ederiz.' },
        { title: 'Apostille veya tercüme', duration: '3-7 gün', desc: 'Belge yurt dışında kullanılacaksa - apostille (MSZ 60 PLN) ve yeminli tercüme yaptırıyoruz.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Çoğu belge için asgari paket.',
      items: [
        'Pasaport (fotoğraflı sayfa fotokopisi)',
        'PESEL veya NIP (işletme için)',
        'Karta pobytu veya başka yasal ikamet belgesi',
        'LegalWin\'e pełnomocnictwo (US için UPL-1, ZUS için ZUS-PEL)',
        'Şirket KRS numarası (Sp. z o.o. için belge gerekiyorsa)',
        'ePUAP / profil zaufany erişimi (varsa süreci hızlandırır)',
        'Hedef kurum (banka, urząd, büyükelçilik - format değişebilir)',
        'Belge talep edilen dönem (örn. 2023-2024 gelirleri)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Belge başına 150 PLN\'den. Resmi harçlar ayrıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '15 dakika · amaç netleştirme' },
        { label: 'Anahtar teslim tek belge', value: '150 PLN\'den', note: 'Wniosek, vekaletname, teslim' },
        { label: '3+ belge paketi', value: '350 PLN\'den', note: 'Aynı anda başvuruda indirim' },
        { label: 'Belge + apostille + tercüme', value: '480 PLN\'den', note: 'Yurt dışı kullanım için' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Resmi harçlar (belge başına 0-21 PLN, 17 PLN pełnomocnictwo, 60 PLN apostille) ve yeminli tercüme (~80 PLN/belge) ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 13 października 1998 r. o systemie ubezpieczeń społecznych (Sosyal Güvenlik Sistemi Kanunu)',
        'Ustawa z dnia 29 sierpnia 1997 r. - Ordynacja podatkowa (Vergi Usul Kanunu - madde 306a, zaświadczenia)',
        'Maliye Bakanlığı zaświadczenie başvuru formu örneği yönetmeliği',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej',
        '(AT) 883/2004 Tüzüğü (sosyal güvenlik sistemlerinin koordinasyonu)'
      ]
    },
    faq: [
      { q: 'Belge bizzat gitmeden alınabilir mi?', a: 'Evet. Çoğu ZUS belgesi PUE ZUS üzerinden (Platforma Usług Elektronicznych ZUS - elektronik hizmet platformu, profil zaufany ePUAP gerekir). Çoğu US belgesi e-Urząd Skarbowy (elektronik vergi dairesi) üzerinden. Kağıt versiyon posta veya kuryeyle. Bizzat ziyaret yalnızca apostille için gerekir.' },
      { q: 'Zaświadczenie o niezaleganiu ne kadar geçerli?', a: 'ZUS - 1 ay, US - 3 ay. Bankalar ve ihaleler genelde ≤ 30 gün taze belge ister. Süreci başlatırken hemen alıyoruz, başvuruyu kaçırmamak için.' },
      { q: 'Borcum varsa ne yapmalıyım?', a: 'Borç ödenmeden niezaleganie alınamaz. Wniosek o rozłożenie na raty (taksit talebi) veya istisnai durumlarda umorzenie (silme) hazırlamada yardımcı oluyoruz. Borç ödendikten sonra belge aynı gün verilir.' },
      { q: 'ZUS RMUA ile PIT-11 farkı nedir?', a: 'PIT-11 - işverenin yıllık vergi mahsubudur. RMUA - işverenin sizin için yatırdığı ZUS primlerinin dökümüdür. PIT-11 TRC ve vergi beyannamesi için, RMUA ise çalışma süresinin kanıtı için gerekir.' },
      { q: 'A1 nedir, ne zaman gerekli?', a: 'Zaświadczenie A1 - başka bir AB ülkesinde çalışırken sosyal primleri yalnızca Polonya\'da ödediğinizi teyit eden AB belgesidir. Tır şoförleri, AB\'de müşterisi olan BT serbest çalışanları, 24 ayı aşan görevlendirmeler için zorunludur. A1 olmadan kabul eden ülke kendi prim tahakkukunu yapabilir.' },
      { q: 'Yurt dışı banka / büyükelçilik için belge nasıl alınır?', a: 'Belgeyi alır, AB dışı ülkeyse apostille düzenletir, gerekli dile yeminli tercüme yaptırırız. Tam döngü 7-14 gün. Sık karşılaşılan amaçlar: Almanya\'da ipotek, ABD vizesi (DS-160), BAE\'de mukim olma.' },
      { q: 'TRC için tüm belgelerin maliyeti gerçekte ne kadar?', a: 'İş gerekçesiyle TRC için temel paket: PIT-11 (ücretsiz), ZUS RMUA (ücretsiz), zaświadczenie o niezaleganiu (US 21 PLN + ZUS 0 PLN). Bizim danışmanlık 350 PLN. Toplam paket 371 PLN. Apostille ve tercümeyle 700-800 PLN.' }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'ZUS / US belgeleri 1-7 günde',
    ctaSubtitle: 'Ücretsiz danışmanlık: belge türü, kullanım amacı ve süreyi netleştiririz. Vekaletname imzasından teslime genelde 1-7 iş günü.'
  }
};

export default zaswiadczeniaZusUs;
