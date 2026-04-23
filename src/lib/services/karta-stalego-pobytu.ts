import type { ServiceEntry } from './types';

const kartaStalegoPobytu: ServiceEntry = {
  ru: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'ПМЖ',
    title: 'Karta Stałego Pobytu',
    subtitle: 'Постоянный вид на жительство в Польше',
    lead: 'ПМЖ в Польше (pobyt stały) даётся бессрочно, сама карта — на 10 лет с продлением. Открывает доступ к почти всем правам граждан, кроме выборов и госслужбы.',
    facts: [
      { label: 'Статус', value: 'бессрочно', note: 'карта перевыпускается каждые 10 лет' },
      { label: 'Госпошлина', value: '640 + 100 PLN', note: 'заявление + карта' },
      { label: 'Решение', value: '3–6 мес', note: 'по закону до 180 дней' },
      { label: 'Результат', value: 'права как у граждан', note: 'кроме голосования' }
    ],
    grounds: {
      title: 'Кто может получить ПМЖ',
      items: [
        { title: 'Супруги граждан Польши', desc: 'После 3 лет в браке и 2 лет непрерывного пребывания в Польше на ВНЖ.' },
        { title: 'Лица польского происхождения', desc: 'С доказательством польских корней (родители / прародители) и намерением постоянного проживания.' },
        { title: 'Обладатели Karty Polaka', desc: 'По Karcie Polaka можно подать на ПМЖ сразу, без предварительного ВНЖ.' },
        { title: 'Беженцы и лица с гуманитарным статусом', desc: 'После 5 лет пребывания в статусе беженца или лица с защитой.' },
        { title: 'Дети, рождённые в Польше', desc: 'Несовершеннолетние дети обладателей ПМЖ, родившиеся в Польше.' },
        { title: 'Жертвы торговли людьми', desc: 'С гуманитарным пребыванием или дополнительной защитой на особых условиях.' }
      ]
    },
    timeline: {
      title: 'Процесс получения',
      steps: [
        { title: 'Оценка основания', duration: '30 мин', desc: 'Разбираем, подходит ли ваш случай под какое-то из оснований ПМЖ.' },
        { title: 'Сбор документов', duration: '2–4 недели', desc: 'Свидетельства, переводы, доказательства польских корней (при необходимости).' },
        { title: 'Подача в MOS v2.0', duration: '1 день', desc: 'Загружаем заявление, оплачиваем opłatę skarbową 640 PLN.' },
        { title: 'Биометрия', duration: '1 визит', desc: 'Сдача отпечатков и фото у воеводы.' },
        { title: 'Рассмотрение', duration: '3–6 мес', desc: 'Отвечаем на запросы через eDoręczenia.' },
        { title: 'Выдача карты', duration: '7 дней', desc: '+100 PLN за бланк. После этого — можно подавать на гражданство через 3 года.' }
      ]
    },
    documents: {
      title: 'Документы для ПМЖ',
      items: [
        'Wniosek o udzielenie zezwolenia na pobyt stały (заполняем мы)',
        'Загранпаспорт + все внутренние документы',
        '4 биометрических фото 35×45 мм',
        'Документ, подтверждающий основание (свидетельство о браке, Karta Polaka, решение о беженстве и т.д.)',
        'Доказательства польских корней — для соответствующего основания (архивные выписки, akty urodzenia предков)',
        'Источники дохода за последние 2 года (PIT, выписки)',
        'Umowa najmu или zameldowanie',
        'Медицинская страховка',
        'Подтверждение уплаты 640 PLN'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: 'Оценка основания' },
        { label: 'Сопровождение ПМЖ', value: 'от 3 500 PLN', note: 'Под ключ' },
        { label: 'Подтверждение польских корней', value: 'от 2 000 PLN', note: 'Архивная работа отдельно' }
      ],
      note: 'Госпошлины 640 + 100 PLN оплачиваются отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa o cudzoziemcach — Dział IV (pobyt stały)',
        'Ustawa o Karcie Polaka z 7 września 2007 r.',
        'Konwencja Genewska z 1951 r. o statusie uchodźców'
      ]
    },
    faq: [
      { q: 'Нужен ли мне польский B1 для ПМЖ?', a: 'Только для отдельных оснований (натурализация) — для базового ПМЖ по браку или Karcie Polaka экзамен не требуется.' },
      { q: 'Могу ли я сразу подать на ПМЖ, минуя ВНЖ?', a: 'Да, если у вас Karta Polaka, вы супруг(а) гражданина Польши после 3 лет брака и 2 лет пребывания, или беженец после 5 лет статуса.' },
      { q: 'Что будет, если истекает карта, а статус бессрочный?', a: 'Статус остаётся. Нужно только перевыпустить карту — госпошлина 100 PLN, заявление подаётся за месяц до истечения срока.' },
      { q: 'Когда можно подавать на гражданство после ПМЖ?', a: 'Через 3 года непрерывного пребывания на ПМЖ + польский B1 + стабильный доход + жильё. В особых случаях (супруги) быстрее.' },
      { q: 'Теряю ли я первое гражданство?', a: 'Польша допускает двойное гражданство. Но ваша страна может требовать отказа — это надо уточнять отдельно.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'Готовы перейти с ВНЖ на ПМЖ?',
    ctaSubtitle: 'Бесплатная консультация — оценим основания и сроки под ваш случай.'
  },
  pl: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'PR',
    title: 'Karta Stałego Pobytu',
    subtitle: 'Zezwolenie na pobyt stały w Polsce',
    lead: 'Pobyt stały w Polsce wydawany jest bezterminowo, a sama karta — na 10 lat z możliwością wymiany. Daje prawa niemal jak obywatelom, z wyjątkiem wyborów i służby cywilnej.',
    facts: [
      { label: 'Status', value: 'bezterminowo', note: 'karta wymieniana co 10 lat' },
      { label: 'Opłata', value: '640 + 100 PLN', note: 'wniosek + karta' },
      { label: 'Decyzja', value: '3–6 mies', note: 'ustawowo do 180 dni' },
      { label: 'Rezultat', value: 'prawa jak obywateli', note: 'bez prawa głosu' }
    ],
    grounds: {
      title: 'Kto może otrzymać pobyt stały',
      items: [
        { title: 'Małżonkowie obywateli Polski', desc: 'Po 3 latach małżeństwa i 2 latach nieprzerwanego pobytu na TRC.' },
        { title: 'Osoby polskiego pochodzenia', desc: 'Z dowodem polskich korzeni (rodzice / dziadkowie) i zamiarem stałego osiedlenia.' },
        { title: 'Posiadacze Karty Polaka', desc: 'Z Kartą Polaka można złożyć wniosek od razu, bez wcześniejszego TRC.' },
        { title: 'Uchodźcy i osoby z ochroną humanitarną', desc: 'Po 5 latach pobytu ze statusem uchodźcy lub ochroną.' },
        { title: 'Dzieci urodzone w Polsce', desc: 'Małoletnie dzieci posiadaczy PR urodzone w Polsce.' },
        { title: 'Ofiary handlu ludźmi', desc: 'Z pobytem humanitarnym lub ochroną uzupełniającą na szczególnych warunkach.' }
      ]
    },
    timeline: {
      title: 'Jak przebiega sprawa',
      steps: [
        { title: 'Ocena podstawy', duration: '30 min', desc: 'Sprawdzamy, czy Twój przypadek kwalifikuje się na PR.' },
        { title: 'Zbiór dokumentów', duration: '2–4 tyg', desc: 'Akty, tłumaczenia, dowody polskich korzeni.' },
        { title: 'Złożenie w MOS v2.0', duration: '1 dzień', desc: 'Wniosek + 640 PLN opłaty.' },
        { title: 'Odciski palców', duration: '1 wizyta', desc: 'Biometria u wojewody.' },
        { title: 'Rozpatrzenie', duration: '3–6 mies', desc: 'Odpowiadamy na wezwania przez eDoręczenia.' },
        { title: 'Wydanie karty', duration: '7 dni', desc: '+100 PLN. Po PR — wniosek o obywatelstwo za 3 lata.' }
      ]
    },
    documents: {
      title: 'Dokumenty do pobytu stałego',
      items: [
        'Wniosek o udzielenie zezwolenia na pobyt stały',
        'Paszport + dokumenty krajowe',
        '4 zdjęcia biometryczne 35×45 mm',
        'Dokument potwierdzający podstawę (akt ślubu, Karta Polaka, decyzja o uchodźstwie)',
        'Dowody polskich korzeni — dla odpowiedniej podstawy (akty archiwalne, akty urodzenia przodków)',
        'Źródła dochodu za ostatnie 2 lata (PIT, wyciągi)',
        'Umowa najmu lub zameldowanie',
        'Ubezpieczenie zdrowotne',
        'Potwierdzenie opłaty 640 PLN'
      ]
    },
    pricing: {
      title: 'Nasze honorarium',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: 'Ocena podstawy' },
        { label: 'Prowadzenie PR', value: 'od 3 500 PLN', note: 'Pod klucz' },
        { label: 'Potwierdzenie pochodzenia', value: 'od 2 000 PLN', note: 'Praca archiwalna osobno' }
      ],
      note: 'Opłaty urzędowe 640 + 100 PLN — osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa o cudzoziemcach — Dział IV (pobyt stały)',
        'Ustawa o Karcie Polaka z 7 września 2007 r.',
        'Konwencja Genewska z 1951 r. o statusie uchodźców'
      ]
    },
    faq: [
      { q: 'Czy potrzebuję polskiego B1?', a: 'Tylko przy naturalizacji — do PR po małżeństwie lub Karcie Polaka egzamin nie jest wymagany.' },
      { q: 'Czy mogę od razu PR, z pominięciem TRC?', a: 'Tak, jeśli masz Kartę Polaka, jesteś małżonkiem obywatela po 3 latach małżeństwa i 2 latach pobytu, lub uchodźcą po 5 latach statusu.' },
      { q: 'Co się stanie, gdy karta wygaśnie, a status jest bezterminowy?', a: 'Status pozostaje. Trzeba tylko wymienić kartę — opłata 100 PLN, wniosek na miesiąc przed końcem ważności.' },
      { q: 'Kiedy można się ubiegać o obywatelstwo po PR?', a: 'Po 3 latach nieprzerwanego pobytu na PR + polski B1 + stabilny dochód + mieszkanie. W przypadkach szczególnych szybciej.' },
      { q: 'Czy stracę pierwsze obywatelstwo?', a: 'Polska dopuszcza podwójne obywatelstwo. Ale Twój kraj może wymagać zrzeczenia — trzeba to sprawdzić osobno.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'Gotów przejść z TRC na PR?',
    ctaSubtitle: 'Bezpłatna konsultacja — ocenimy podstawy i terminy pod Twoją sprawę.'
  },
  en: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'PR',
    title: 'Permanent Residence',
    subtitle: 'Karta Stałego Pobytu — Polish PR',
    lead: 'Polish permanent residence is granted indefinitely; the physical card is valid for 10 years and then renewed. It unlocks nearly the same rights as citizens enjoy, except voting and civil service.',
    facts: [
      { label: 'Status', value: 'indefinite', note: 'card reissued every 10 years' },
      { label: 'Official fees', value: '640 + 100 PLN', note: 'application + card' },
      { label: 'Decision', value: '3–6 months', note: 'statutory up to 180 days' },
      { label: 'Outcome', value: 'near-citizen rights', note: 'excluding voting' }
    ],
    grounds: {
      title: 'Who qualifies for PR',
      items: [
        { title: 'Spouses of Polish citizens', desc: 'After 3 years of marriage and 2 years of continuous TRC residence.' },
        { title: 'Persons of Polish origin', desc: 'With evidence of Polish roots (parents / grandparents) and intent to settle.' },
        { title: 'Karta Polaka holders', desc: 'Can apply straight for PR, no prior TRC needed.' },
        { title: 'Refugees & humanitarian status holders', desc: 'After 5 years of refugee status or protection.' },
        { title: 'Children born in Poland', desc: 'Minor children of PR holders born in Poland.' },
        { title: 'Trafficking victims', desc: 'With humanitarian stay or subsidiary protection on special terms.' }
      ]
    },
    timeline: {
      title: 'How the case runs',
      steps: [
        { title: 'Ground assessment', duration: '30 min', desc: 'We check if your case fits any PR ground.' },
        { title: 'Documents', duration: '2–4 weeks', desc: 'Certificates, translations, proof of Polish roots if applicable.' },
        { title: 'Filing via MOS v2.0', duration: '1 day', desc: 'Application + 640 PLN fee.' },
        { title: 'Biometrics', duration: '1 visit', desc: 'Fingerprints at the voivode.' },
        { title: 'Review', duration: '3–6 months', desc: 'We respond to requests via eDoręczenia.' },
        { title: 'Card collection', duration: '7 days', desc: '+100 PLN. After PR — citizenship application in 3 years.' }
      ]
    },
    documents: {
      title: 'Document pack for PR',
      items: [
        'Wniosek o udzielenie zezwolenia na pobyt stały — prepared by us',
        'Passport + domestic documents',
        '4 biometric photos 35×45 mm',
        'Ground-specific proof (marriage certificate, Karta Polaka, refugee decision)',
        'Polish-roots evidence — for the origin ground (archival records, ancestors\' birth certificates)',
        'Income sources for the last 2 years (PIT, bank statements)',
        'Lease agreement or zameldowanie',
        'Health insurance',
        'Proof of 640 PLN fee'
      ]
    },
    pricing: {
      title: 'Our fee',
      items: [
        { label: 'Consultation', value: 'Free', note: 'Ground assessment' },
        { label: 'End-to-end PR handling', value: 'from 3,500 PLN', note: 'Turnkey' },
        { label: 'Polish-origin confirmation', value: 'from 2,000 PLN', note: 'Archival research billed separately' }
      ],
      note: 'Official fees 640 + 100 PLN billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Law on Foreigners — Section IV (permanent residence)',
        'Karta Polaka Act of 7 September 2007',
        '1951 Geneva Convention on refugee status'
      ]
    },
    faq: [
      { q: 'Do I need Polish B1 for PR?', a: 'Only for specific grounds. For marriage-based or Karta Polaka routes no language exam is required.' },
      { q: 'Can I skip TRC and apply directly for PR?', a: 'Yes — with Karta Polaka, as spouse of a Polish citizen after 3 years of marriage + 2 years of residence, or as a refugee after 5 years of status.' },
      { q: 'What happens when the card expires but status is indefinite?', a: 'Your status stays. You simply reissue the card — 100 PLN fee, apply a month before expiry.' },
      { q: 'When can I apply for citizenship after PR?', a: 'After 3 years of uninterrupted PR + Polish B1 + stable income + housing. Some paths are faster (spouses).' },
      { q: 'Do I lose my first citizenship?', a: 'Poland allows dual citizenship. But your home country may require renunciation — check separately.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'Ready to move from TRC to PR?',
    ctaSubtitle: 'Free consultation — we\'ll map the grounds and timelines to your specific case.'
  }
};

export default kartaStalegoPobytu;
