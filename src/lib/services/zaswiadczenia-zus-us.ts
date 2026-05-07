import type { ServiceEntry } from './types';

const zaswiadczeniaZusUs: ServiceEntry = {
  ru: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'Справки ZUS / US',
    subtitle: 'Zaświadczenia z ZUS i Urzędu Skarbowego',
    lead: 'Zaświadczenia из ZUS (Zakład Ubezpieczeń Społecznych) и Urzędu Skarbowego — ключевые документы для подачи на TRC, ПМЖ, ипотеку, кредит, визу за рубеж, тендеры в публичных закупках. Получаем справки о доходах (PIT-11, ZUS RMUA), о неимении задолженности (zaświadczenie o niezaleganiu), о страховых периодах (zaświadczenie ZUS S-1) и десятки других — через PUE ZUS, e-Urząd Skarbowy или физически в офисе.',
    facts: [
      { label: 'Срок выдачи', value: '1–7 дней', note: 'standard ZUS · до 14 дней при сложных случаях' },
      { label: 'Госпошлина', value: '0–21 PLN', note: 'базовые — бесплатно' },
      { label: 'Где', value: 'PUE ZUS + EUS', note: 'онлайн или офис' },
      { label: 'Действует', value: '1–6 мес', note: 'в зависимости от типа справки' }
    ],
    grounds: {
      title: 'Какие справки получаем',
      subtitle: 'Полный список — на сайте biznes.gov.pl. Самые востребованные у иностранцев — ниже.',
      items: [
        { title: 'Zaświadczenie o niezaleganiu w ZUS', desc: 'Подтверждение отсутствия задолженности по соцвзносам. Обязательно для TRC по бизнесу, тендеров, кредитов. Срок — 7 дней, бесплатно.' },
        { title: 'Zaświadczenie o niezaleganiu w US', desc: 'Аналог из Urzędu Skarbowego — нет долгов по налогам. 7 дней, 21 PLN. Для тендеров, ипотеки, лицензий.' },
        { title: 'PIT-11 за прошлые годы', desc: 'Дубликат расчёта налога от работодателя — для TRC, ПМЖ, ипотеки. Если работодатель не отвечает — берём через US.' },
        { title: 'ZUS RMUA — отчёт о страховых взносах', desc: 'Список сделанных взносов и периодов работы — для подтверждения стажа в Польше. Бесплатно через PUE ZUS.' },
        { title: 'Zaświadczenie A1 (детачмент)', desc: 'Для работников, командированных за рубеж — подтверждает уплату ZUS только в Польше. Обязательно для перевозчиков и IT-фрилансеров.' },
        { title: 'Zaświadczenie ZUS S-1 / U2', desc: 'Подтверждение страховых периодов для пенсии или пособий в стране ЕС.' },
        { title: 'Историческая выписка z konta podatnika', desc: 'Все платежи, переплаты, недоплаты налогов за выбранный период — для аудита, контроля или отчётности.' },
        { title: 'Zaświadczenie o dochodach (US)', desc: 'Подтверждение годового дохода — для ипотеки, школьных стипендий, MOPS-пособий, посольств.' }
      ]
    },
    timeline: {
      title: 'Как мы получаем справку',
      subtitle: 'Стандартный срок — 1–7 рабочих дней через электронные платформы или физически.',
      steps: [
        { title: 'Консультация', duration: '15 мин', desc: 'Уточняем тип справки, цель использования, формат (электронная или бумажная), срок действия.' },
        { title: 'Доверенность', duration: '1 день', desc: 'Подписываем pełnomocnictwo (UPL-1 для US, ZUS-PEL для ZUS) — 17 PLN госпошлина за each. Через ePUAP — бесплатно.' },
        { title: 'Подача wniosku', duration: '1 день', desc: 'Заполняем и подаём через PUE ZUS, e-Urząd Skarbowy или физически — в зависимости от справки.' },
        { title: 'Оплата (если нужна)', duration: '1 день', desc: '21 PLN за zaświadczenie z US, бесплатно — большинство ZUS-справок.' },
        { title: 'Выдача справки', duration: '1–7 дней', desc: 'Электронная версия — на профиль PUE/EUS. Бумажная — забираем лично или принимаем по почте/курьером.' },
        { title: 'Apostille или перевод', duration: '3–7 дней', desc: 'Если справка для использования за рубежом — оформляем apostille (60 PLN MSZ) и присяжный перевод.' }
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
        'Доступ к ePUAP / profil zaufany (если есть — ускоряет процесс)',
        'Указание целевого учреждения (банк, urząd, посольство — формат может отличаться)',
        'Период, за который нужна справка (например, доходы 2023–2024)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Гонорар за справку — от 150 PLN. Госпошлины — отдельно.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '15 минут · уточнение цели' },
        { label: 'Одна справка под ключ', value: 'от 150 PLN', note: 'Wniosek, доверенность, выдача' },
        { label: 'Пакет 3+ справок', value: 'от 350 PLN', note: 'Скидка при одновременной подаче' },
        { label: 'Справка + apostille + перевод', value: 'от 480 PLN', note: 'Для использования за рубежом' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (0–21 PLN на справку, 17 PLN pełnomocnictwo, 60 PLN apostille) и присяжный перевод (~80 PLN/документ) — отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 13 października 1998 r. o systemie ubezpieczeń społecznych',
        'Ustawa z dnia 29 sierpnia 1997 r. — Ordynacja podatkowa (art. 306a — zaświadczenia)',
        'Rozporządzenie MF w sprawie wzorów wniosków o wydanie zaświadczeń',
        'Ustawa z 16 listopada 2006 r. o opłacie skarbowej',
        'Rozporządzenie (WE) 883/2004 (koordynacja systemów zabezpieczenia społecznego)'
      ]
    },
    faq: [
      { q: 'Можно ли получить справку без личного визита?', a: 'Да. Большинство справок ZUS — через PUE ZUS (Платформа электронных услуг ZUS, нужен profil zaufany ePUAP — доверенный профиль). Большинство справок US (Urząd Skarbowy — налоговая) — через e-Urząd Skarbowy (электронная налоговая). Бумажная версия — по почте или курьером. Личный визит нужен только для apostille.' },
      { q: 'Как долго действует zaświadczenie o niezaleganiu?', a: 'Zaświadczenie o niezaleganiu (справка об отсутствии задолженности) — ZUS — 1 месяц, US — 3 месяца от даты выдачи. Для банков и тендеров обычно требуют свежие справки (≤ 30 дней). Делаем на старте процесса, чтобы успеть с подачей.' },
      { q: 'Что делать, если есть задолженность?', a: 'Нельзя получить «niezaleganie» (справку об отсутствии задолженности), пока не погасили долг. Помогаем составить wniosek o rozłożenie na raty (заявление о рассрочке) или umorzenie (списание) — в исключительных случаях. После погашения — справка выдаётся в день обращения.' },
      { q: 'Чем отличается ZUS RMUA от PIT-11?', a: 'PIT-11 — расчёт налога от работодателя за календарный год. RMUA — выписка взносов ZUS, которые работодатель сделал за вас. PIT-11 нужен для TRC и налоговой декларации. RMUA — для подтверждения стажа.' },
      { q: 'Что такое A1 и когда нужен?', a: 'Zaświadczenie A1 (свидетельство A1) — это документ ЕС, подтверждающий, что вы платите соцвзносы только в Польше при работе в другой стране ЕС. Обязательно для дальнобойщиков, IT-фрилансеров с клиентами в ЕС, командировок свыше 24 месяцев. Без A1 принимающая страна может потребовать платить соцвзносы у себя.' },
      { q: 'Как получить справку для иностранного банка / посольства?', a: 'Готовим справку, ставим apostille (если страна вне ЕС) и делаем присяжный перевод на нужный язык. Полный цикл — 7–14 дней. Распространённые цели: ипотека в Германии, виза США (DS-160), резидентство в ОАЭ.' },
      { q: 'Сколько по факту стоит получение всех справок для TRC?', a: 'Базовый пакет для TRC по работе: PIT-11 (бесплатно), ZUS RMUA (бесплатно), zaświadczenie o niezaleganiu (21 PLN US + 0 ZUS). Наш гонорар — 350 PLN. Итого 371 PLN за пакет. С apostille и переводом — 700–800 PLN.' }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Справки ZUS / US за 1–7 дней',
    ctaSubtitle: 'Бесплатная консультация: уточним тип справки, цель использования, срок. От подписания доверенности до получения — обычно 1–7 рабочих дней.'
  },
  pl: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'Zaświadczenia ZUS / US',
    subtitle: 'Zaświadczenia z ZUS i Urzędu Skarbowego',
    lead: 'Zaświadczenia z ZUS i US to kluczowe dokumenty do TRC, PR, kredytu hipotecznego, wizy zagranicznej, zamówień publicznych. Załatwiamy zaświadczenia o dochodach (PIT-11, ZUS RMUA), o niezaleganiu, A1, S-1 i inne — przez PUE ZUS, e-Urząd Skarbowy lub osobiście.',
    facts: [
      { label: 'Termin', value: '1–7 dni', note: 'ZUS standard · do 14 w trudnych sprawach' },
      { label: 'Opłata', value: '0–21 PLN', note: 'bazowe — bezpłatnie' },
      { label: 'Gdzie', value: 'PUE ZUS + EUS', note: 'online lub osobiście' },
      { label: 'Ważność', value: '1–6 mies.', note: 'zależnie od typu' }
    ],
    grounds: {
      title: 'Jakie zaświadczenia załatwiamy',
      subtitle: 'Pełna lista na biznes.gov.pl. Najczęściej dla cudzoziemców:',
      items: [
        { title: 'Niezaleganie w ZUS', desc: 'Brak zaległości w składkach. Wymagane do TRC po biznesie, przetargów. 7 dni, gratis.' },
        { title: 'Niezaleganie w US', desc: 'Brak zaległości podatkowych. 7 dni, 21 PLN. Przetargi, kredyty.' },
        { title: 'PIT-11 z poprzednich lat', desc: 'Duplikat rozliczenia od pracodawcy — TRC, PR, kredyty. Z US, jeśli pracodawca nie odpowiada.' },
        { title: 'ZUS RMUA', desc: 'Wykaz składek i okresów pracy — potwierdzenie stażu w Polsce. Gratis przez PUE.' },
        { title: 'Zaświadczenie A1', desc: 'Delegacja w UE — składki tylko w Polsce. Konieczne dla kierowców i IT freelancerów.' },
        { title: 'ZUS S-1 / U2', desc: 'Okresy ubezpieczeniowe do emerytury / świadczeń w UE.' },
        { title: 'Historia konta podatnika', desc: 'Wszystkie wpłaty, nadpłaty, niedopłaty za okres — audyt, kontrola.' },
        { title: 'Zaświadczenie o dochodach (US)', desc: 'Roczny dochód — kredyt, stypendia, MOPS, ambasady.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standard 1–7 dni roboczych przez platformy elektroniczne lub osobiście.',
      steps: [
        { title: 'Konsultacja', duration: '15 min', desc: 'Typ, cel, format, ważność.' },
        { title: 'Pełnomocnictwo', duration: '1 dzień', desc: 'UPL-1 (US) / ZUS-PEL — 17 PLN każde. Przez ePUAP — gratis.' },
        { title: 'Wniosek', duration: '1 dzień', desc: 'Składamy w PUE ZUS, e-Urząd Skarbowy lub osobiście.' },
        { title: 'Opłata', duration: '1 dzień', desc: '21 PLN US, większość ZUS — gratis.' },
        { title: 'Odbiór', duration: '1–7 dni', desc: 'Wersja elektroniczna na profilu PUE/EUS lub odbiór osobisty.' },
        { title: 'Apostille / tłumaczenie', duration: '3–7 dni', desc: 'Apostille (60 PLN MSZ) + tłumaczenie przysięgłe.' }
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
        'Cel — konkretny urząd / bank',
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
      note: 'Powyżej honoraria LegalWin. Opłaty (0–21 PLN/zaśw., 17 PLN pełn., 60 PLN apostille) i tłumaczenia (~80 PLN) — osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 13 października 1998 r. o systemie ubezpieczeń społecznych',
        'Ordynacja podatkowa (art. 306a — zaświadczenia)',
        'Rozporządzenie MF ws. wzorów wniosków o zaświadczenia',
        'Ustawa o opłacie skarbowej z 16 listopada 2006 r.',
        'Rozporządzenie (WE) 883/2004 (koordynacja zabezpieczenia społecznego)'
      ]
    },
    faq: [
      { q: 'Czy można bez wizyty?', a: 'Tak — większość ZUS przez PUE, US przez EUS. Wizyta tylko do apostille.' },
      { q: 'Ważność niezalegania?', a: 'ZUS — 1 mies., US — 3 mies. Banki i przetargi: ≤ 30 dni.' },
      { q: 'Co przy zaległości?', a: 'Najpierw spłata lub wniosek o raty/umorzenie. Po — wydanie od ręki.' },
      { q: 'RMUA vs PIT-11?', a: 'PIT-11 — roczne rozliczenie od pracodawcy. RMUA — wykaz składek ZUS. Oba potrzebne do TRC.' },
      { q: 'Czym jest A1?', a: 'Dokument UE — składki tylko w PL przy pracy w innym państwie. Konieczne dla kierowców i IT freelancerów.' },
      { q: 'Zaświadczenie do banku zagranicznego?', a: 'Zaświadczenie + apostille (jeśli spoza UE) + tłumaczenie. 7–14 dni.' },
      { q: 'Realny koszt pakietu do TRC?', a: 'PIT-11 (gratis) + RMUA (gratis) + niezaleganie US (21 PLN). Honorarium 350 PLN. Łącznie 371 PLN. Z apostille — 700–800.' }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'Zaświadczenia ZUS / US w 1–7 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: typ, cel, termin. Od pełnomocnictwa do odbioru — zwykle 1–7 dni roboczych.'
  },
  en: {
    slug: 'zaswiadczenia-zus-us',
    group: 'documents',
    icon: 'landmark',
    badge: 'PUE ZUS · e-Urząd Skarbowy',
    title: 'ZUS / US certificates',
    subtitle: 'Polish social-security and tax-office certificates',
    lead: 'ZUS (social-security) and Urząd Skarbowy (tax-office) zaświadczenia are critical for TRC, PR, mortgage, foreign visas, public-procurement bids. We obtain income certificates (PIT-11, ZUS RMUA), no-arrears certificates, A1 (posted-worker), S-1 contribution histories and dozens of others — via PUE ZUS, e-Urząd Skarbowy or in person.',
    facts: [
      { label: 'Turnaround', value: '1–7 days', note: 'standard · up to 14 in complex cases' },
      { label: 'State fee', value: '0–21 PLN', note: 'most are free' },
      { label: 'Where', value: 'PUE ZUS + EUS', note: 'online or in person' },
      { label: 'Validity', value: '1–6 months', note: 'depends on type' }
    ],
    grounds: {
      title: 'Which certificates we obtain',
      subtitle: 'Full list at biznes.gov.pl. The most-requested by foreigners:',
      items: [
        { title: 'No-arrears with ZUS', desc: 'No outstanding social-security debts. Required for TRC by business, public bids. 7 days, free.' },
        { title: 'No-arrears with US', desc: 'No outstanding tax debts. 7 days, 21 PLN. For bids, mortgages, licences.' },
        { title: 'Past-year PIT-11', desc: 'Duplicate annual employer settlement — TRC, PR, mortgages. From US if the employer is unresponsive.' },
        { title: 'ZUS RMUA', desc: 'List of contributions and work periods — proves Polish service. Free via PUE.' },
        { title: 'A1 certificate', desc: 'Posted-worker — confirms ZUS payment in Poland during foreign work. Mandatory for HGV drivers and IT freelancers.' },
        { title: 'ZUS S-1 / U2', desc: 'Contribution periods for pension or benefits in EU states.' },
        { title: 'Tax-account history', desc: 'All payments, overpayments, underpayments — for audits or reporting.' },
        { title: 'Income certificate (US)', desc: 'Annual income — mortgages, scholarships, MOPS benefits, embassies.' }
      ]
    },
    timeline: {
      title: 'How we run it',
      subtitle: 'Standard 1–7 working days via e-platforms or in person.',
      steps: [
        { title: 'Consultation', duration: '15 min', desc: 'Type, purpose, format, validity.' },
        { title: 'Power of attorney', duration: '1 day', desc: 'UPL-1 (US) / ZUS-PEL — 17 PLN each. Via ePUAP — free.' },
        { title: 'Application', duration: '1 day', desc: 'Filed via PUE ZUS, e-Urząd Skarbowy or in person.' },
        { title: 'Payment', duration: '1 day', desc: '21 PLN for US, free for most ZUS.' },
        { title: 'Pickup', duration: '1–7 days', desc: 'Electronic on PUE/EUS or in-person collection.' },
        { title: 'Apostille / translation', duration: '3–7 days', desc: 'Apostille (60 PLN MSZ) + sworn translation.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Minimum for most certificates.',
      items: [
        'Passport (photo-page copy)',
        'PESEL or NIP',
        'Residence card',
        'Power of attorney (UPL-1 / ZUS-PEL)',
        'Company KRS (for Sp. z o.o.)',
        'ePUAP access if available',
        'Target institution (bank, urząd, embassy)',
        'Period covered'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'From 150 PLN per certificate.',
      items: [
        { label: 'Consultation', value: 'Free', note: '15 minutes · purpose review' },
        { label: 'Single turnkey certificate', value: 'from 150 PLN', note: 'Application, PoA, pickup' },
        { label: 'Bundle of 3+', value: 'from 350 PLN', note: 'Discount for joint filing' },
        { label: 'Certificate + apostille + translation', value: 'from 480 PLN', note: 'For foreign use' }
      ],
      note: 'LegalWin fees. State fees (0–21 PLN/cert, 17 PLN PoA, 60 PLN apostille) and sworn translations (~80 PLN/doc) billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Social-Security System Act of 13 October 1998',
        'Tax Ordinance Act of 29 August 1997 (Art. 306a — certificates)',
        'MF Regulation on certificate-application templates',
        'Stamp Duty Act of 16 November 2006',
        'Regulation (EC) 883/2004 (coordination of social-security systems)'
      ]
    },
    faq: [
      { q: 'Can I get a certificate without a visit?', a: 'Yes — most ZUS via PUE, most US via EUS. In-person visits only for apostille.' },
      { q: 'How long are no-arrears valid?', a: 'ZUS — 1 month, US — 3 months. Banks and bids usually want ≤ 30 days. We file at the start of the process.' },
      { q: 'What about outstanding debts?', a: "You can't get a 'no-arrears' until paid. We file instalment or write-off applications. Once cleared — same-day issuance." },
      { q: 'RMUA vs PIT-11?', a: 'PIT-11 — annual employer settlement. RMUA — list of ZUS contributions. Both required for TRC.' },
      { q: 'What is A1?', a: 'EU document confirming ZUS-only payment in Poland during foreign work. Mandatory for HGV drivers and IT freelancers with EU clients.' },
      { q: 'Certificate for a foreign bank/embassy?', a: 'Certificate + apostille (if non-EU) + sworn translation. 7–14 days.' },
      { q: 'Real cost for a TRC pack?', a: 'PIT-11 (free) + RMUA (free) + US no-arrears (21 PLN). Our fee — 350 PLN. Total 371 PLN. With apostille — 700–800.' }
    ],
    related: ['zaswiadczenie-o-niekaralnosci', 'apostille', 'tlumaczenia-przysiegle'],
    ctaTitle: 'ZUS / US certificates in 1–7 days',
    ctaSubtitle: 'Free consultation: certificate type, purpose, deadline. From PoA signing to pickup — typically 1–7 working days.'
  }
};

export default zaswiadczeniaZusUs;
