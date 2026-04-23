import type { ServiceEntry } from './types';

const obywatelstwo: ServiceEntry = {
  ru: {
    slug: 'obywatelstwo',
    group: 'immigration',
    icon: 'landmark',
    badge: 'Полное право ЕС',
    title: 'Гражданство Польши',
    subtitle: 'Obywatelstwo Polskie — паспорт ЕС',
    lead: 'Есть три пути к польскому паспорту: подтверждение происхождения (если были польские корни), признание (uznanie) — через 10 лет проживания, и натурализация (nadanie) — решением Президента РП.',
    facts: [
      { label: 'Сроков ожидания нет', value: 'до 24 мес', note: 'зависит от пути' },
      { label: 'Двойное гражданство', value: 'разрешено', note: 'с точки зрения Польши' },
      { label: 'Паспорт', value: 'ЕС', note: 'свобода передвижения в Шенгене' },
      { label: 'Политические права', value: 'полные', note: 'включая голосование' }
    ],
    grounds: {
      title: 'Три пути к гражданству',
      items: [
        { title: 'Подтверждение (potwierdzenie)', desc: 'Если вы или ваш предок гражданин Польши по рождению и гражданство не было утрачено. Решение выносит воевода.' },
        { title: 'Признание (uznanie)', desc: 'После 10 лет непрерывного пребывания в Польше + ПМЖ + стабильный доход + польский B1.' },
        { title: 'Натурализация (nadanie)', desc: 'По решению Президента РП. Основания: 3 года ПМЖ + интеграция. Без обязательного срока рассмотрения.' },
        { title: 'Упрощённая натурализация', desc: 'Для беженцев (после 2 лет ПМЖ), апатридов, супругов граждан Польши (после 3 лет брака и 2 лет ПМЖ).' }
      ]
    },
    timeline: {
      title: 'Этапы признания (uznanie)',
      steps: [
        { title: 'Оценка пути', duration: '1 час', desc: 'Определяем наилучшее основание: потверждение, признание или натурализация.' },
        { title: 'Подтверждение B1', duration: '0–6 мес', desc: 'Сдаём государственный экзамен по польскому языку. Либо подтверждаем освобождение.' },
        { title: 'Сбор документов', duration: '4–8 недель', desc: 'Архивные справки, подтверждение дохода, жилья, социальной интеграции.' },
        { title: 'Подача воеводе', duration: '1 день', desc: 'Заявление через воеводу с opłatą skarbową 219 PLN (признание) или 20 EUR (натурализация).' },
        { title: 'Рассмотрение', duration: '6–18 мес', desc: 'Воевода — для признания. Для натурализации — канцелярия Президента после воеводы.' },
        { title: 'Присяга и паспорт', duration: '1 мес', desc: 'Приказ о присвоении → присяга (ślubowanie) → оформление ID и заграна.' }
      ]
    },
    documents: {
      title: 'Документы',
      items: [
        'Wniosek o uznanie za obywatela polskiego или o nadanie obywatelstwa',
        'Autobiografia в письменной форме на польском',
        'Сертификат знания польского (B1 минимум — egzamin certyfikatowy)',
        'Документы ПМЖ (decyzja о стальном побыте)',
        'Справки о доходах за последние 3 года (PIT, zaświadczenie ZUS)',
        'Подтверждение жилья (акт собственности, umowa najmu, zameldowanie)',
        'Справка о несудимости в Польше и в стране происхождения',
        'Акты рождения, браков и документы предков — для подтверждения происхождения'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      items: [
        { label: 'Оценка пути', value: 'Бесплатно', note: 'Первичная консультация' },
        { label: 'Признание (uznanie)', value: 'от 4 500 PLN', note: 'Под ключ' },
        { label: 'Натурализация (nadanie)', value: 'от 6 000 PLN', note: 'Канцелярия Президента отдельно' },
        { label: 'Подтверждение происхождения', value: 'от 3 500 PLN', note: '+ архивная работа' }
      ],
      note: 'Opłata skarbowa 219 PLN (uznanie) или 20 EUR (nadanie) оплачивается клиентом.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 2 kwietnia 2009 r. o obywatelstwie polskim',
        'Konstytucja RP — art. 34 (nabycie obywatelstwa)',
        'Rozporządzenia MSWiA i Prezesa Rady Ministrów'
      ]
    },
    faq: [
      { q: 'Сколько уровня языка нужно?', a: 'B1 — подтверждается государственным сертификатом (egzamin certyfikatowy z języka polskiego jako obcego), аттестатом польской школы, дипломом польского вуза или иным документом, подтверждающим уровень.' },
      { q: 'Что если мой предок эмигрировал до 1918 года?', a: 'Польша как государство была восстановлена в 1918 году — предки до этой даты не были гражданами Польши, и подтверждение не работает. Остаётся путь uznanie или nadanie.' },
      { q: 'Могу ли я сохранить первое гражданство?', a: 'Да. Польша признаёт двойное гражданство. Но ваша страна происхождения может требовать отказа — это регулируется её законами, не польскими.' },
      { q: 'Есть ли квоты на гражданство?', a: 'Нет квот. Но натурализация (решение Президента) — дискреционное решение, может быть отказ без объяснения причин.' },
      { q: 'Что с детьми?', a: 'Дети до 18 лет могут получить гражданство вместе с родителем (nabycie pochodne). С 16 лет — с согласием самого ребёнка.' }
    ],
    related: ['karta-stalego-pobytu', 'karta-polaka', 'apelacje'],
    ctaTitle: 'Какой путь к паспорту подходит именно вам?',
    ctaSubtitle: 'За 30 минут разберём ваши корни, стаж и документы — и покажем, что реально.'
  },
  pl: {
    slug: 'obywatelstwo',
    group: 'immigration',
    icon: 'landmark',
    badge: 'Pełnia praw UE',
    title: 'Obywatelstwo Polskie',
    subtitle: 'Paszport Unii Europejskiej',
    lead: 'Są trzy drogi do polskiego paszportu: potwierdzenie obywatelstwa (przy polskich korzeniach), uznanie za obywatela (po 10 latach pobytu) oraz nadanie przez Prezydenta RP.',
    facts: [
      { label: 'Czas', value: 'do 24 mies', note: 'w zależności od drogi' },
      { label: 'Podwójne obywatelstwo', value: 'dozwolone', note: 'z perspektywy RP' },
      { label: 'Paszport', value: 'UE', note: 'pełna swoboda w Schengen' },
      { label: 'Prawa polityczne', value: 'pełne', note: 'łącznie z wyborami' }
    ],
    grounds: {
      title: 'Trzy drogi do obywatelstwa',
      items: [
        { title: 'Potwierdzenie', desc: 'Jeżeli ty lub twój przodek byliście obywatelami Polski i obywatelstwa nie utracono. Decyduje wojewoda.' },
        { title: 'Uznanie za obywatela', desc: 'Po 10 latach nieprzerwanego pobytu + PR + stabilny dochód + polski B1.' },
        { title: 'Nadanie', desc: 'Decyzja Prezydenta RP. Przesłanki: 3 lata PR + integracja. Bez obowiązkowego terminu rozpatrzenia.' },
        { title: 'Uproszczone nadanie', desc: 'Dla uchodźców (po 2 latach PR), apatrydów, małżonków obywateli (po 3 latach małżeństwa i 2 latach PR).' }
      ]
    },
    timeline: {
      title: 'Etapy uznania',
      steps: [
        { title: 'Ocena drogi', duration: '1 godz', desc: 'Dobieramy najlepszą ścieżkę: potwierdzenie, uznanie lub nadanie.' },
        { title: 'Potwierdzenie B1', duration: '0–6 mies', desc: 'Egzamin certyfikatowy z polskiego albo dokument zwalniający.' },
        { title: 'Dokumenty', duration: '4–8 tyg', desc: 'Akty archiwalne, dowody dochodu, mieszkania, integracji społecznej.' },
        { title: 'Złożenie u wojewody', duration: '1 dzień', desc: 'Opłata 219 PLN (uznanie) lub 20 EUR (nadanie).' },
        { title: 'Rozpatrzenie', duration: '6–18 mies', desc: 'Wojewoda (uznanie). Dla nadania — Kancelaria Prezydenta po wojewodzie.' },
        { title: 'Ślubowanie i paszport', duration: '1 mies', desc: 'Postanowienie → ślubowanie → nowy dowód i paszport.' }
      ]
    },
    documents: {
      title: 'Dokumenty',
      items: [
        'Wniosek o uznanie za obywatela polskiego lub o nadanie obywatelstwa',
        'Autobiografia po polsku',
        'Certyfikat znajomości polskiego (min. B1)',
        'Decyzja o pobycie stałym',
        'Zaświadczenia o dochodzie za ostatnie 3 lata (PIT, ZUS)',
        'Potwierdzenie mieszkania (akt własności, umowa najmu, zameldowanie)',
        'Zaświadczenie o niekaralności w Polsce i kraju pochodzenia',
        'Akty urodzenia, małżeństw i dokumenty przodków — do potwierdzenia pochodzenia'
      ]
    },
    pricing: {
      title: 'Nasze honorarium',
      items: [
        { label: 'Ocena drogi', value: 'Gratis', note: 'Pierwsza konsultacja' },
        { label: 'Uznanie za obywatela', value: 'od 4 500 PLN', note: 'Pod klucz' },
        { label: 'Nadanie (Prezydent)', value: 'od 6 000 PLN', note: 'Kancelaria osobno' },
        { label: 'Potwierdzenie pochodzenia', value: 'od 3 500 PLN', note: '+ praca archiwalna' }
      ],
      note: 'Opłata skarbowa 219 PLN (uznanie) lub 20 EUR (nadanie) — po stronie klienta.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z dnia 2 kwietnia 2009 r. o obywatelstwie polskim',
        'Konstytucja RP — art. 34',
        'Rozporządzenia MSWiA i Prezesa Rady Ministrów'
      ]
    },
    faq: [
      { q: 'Jaki poziom języka?', a: 'B1 — państwowy certyfikat egzaminacyjny, świadectwo szkoły polskiej, dyplom polskiej uczelni lub inny równoważny dokument.' },
      { q: 'A jeśli mój przodek wyemigrował przed 1918?', a: 'Polska jako państwo została odtworzona w 1918 r. — przodkowie sprzed tej daty nie byli obywatelami Polski. Pozostaje uznanie lub nadanie.' },
      { q: 'Czy mogę zachować pierwsze obywatelstwo?', a: 'Tak. Polska uznaje podwójne obywatelstwo. Ale kraj pochodzenia może wymagać zrzeczenia — to jego prawo, nie polskie.' },
      { q: 'Czy są kwoty?', a: 'Nie ma kwot. Ale nadanie (Prezydent) jest decyzją uznaniową, odmowa bez uzasadnienia jest możliwa.' },
      { q: 'Co z dziećmi?', a: 'Dzieci do 18 lat otrzymują obywatelstwo razem z rodzicem. Od 16 r.ż. — za zgodą dziecka.' }
    ],
    related: ['karta-stalego-pobytu', 'karta-polaka', 'apelacje'],
    ctaTitle: 'Która droga do paszportu pasuje właśnie Tobie?',
    ctaSubtitle: 'W 30 minut przeanalizujemy korzenie, staż i dokumenty — i pokażemy realny scenariusz.'
  },
  en: {
    slug: 'obywatelstwo',
    group: 'immigration',
    icon: 'landmark',
    badge: 'Full EU rights',
    title: 'Polish Citizenship',
    subtitle: 'Obywatelstwo Polskie — EU passport',
    lead: 'Three roads to a Polish passport: confirmation of citizenship (for those with Polish ancestry), recognition (uznanie) — after 10 years of residence, and naturalisation (nadanie) — by decision of the President of Poland.',
    facts: [
      { label: 'Timeline', value: 'up to 24 months', note: 'depends on route' },
      { label: 'Dual citizenship', value: 'allowed', note: 'from Poland\'s side' },
      { label: 'Passport', value: 'EU', note: 'Schengen freedom of movement' },
      { label: 'Political rights', value: 'full', note: 'including voting' }
    ],
    grounds: {
      title: 'Three routes to citizenship',
      items: [
        { title: 'Confirmation', desc: 'If you or an ancestor were a Polish citizen and citizenship was never lost. Decided by the voivode.' },
        { title: 'Recognition (uznanie)', desc: 'After 10 years of continuous residence + PR + stable income + Polish B1.' },
        { title: 'Naturalisation (nadanie)', desc: 'By decision of the President of Poland. Grounds: 3 years PR + integration. No statutory deadline.' },
        { title: 'Fast-track naturalisation', desc: 'For refugees (after 2 years PR), stateless persons, spouses of Polish citizens (after 3 years of marriage + 2 years PR).' }
      ]
    },
    timeline: {
      title: 'Recognition route',
      steps: [
        { title: 'Route assessment', duration: '1 hour', desc: 'We pick the best path: confirmation, recognition or naturalisation.' },
        { title: 'B1 certification', duration: '0–6 months', desc: 'State certification exam in Polish, or proof of exemption.' },
        { title: 'Documents', duration: '4–8 weeks', desc: 'Archival records, income, housing, social integration.' },
        { title: 'Filing with voivode', duration: '1 day', desc: 'Fee: 219 PLN (recognition) or €20 (naturalisation).' },
        { title: 'Review', duration: '6–18 months', desc: 'Voivode for recognition. President\'s Office after voivode for naturalisation.' },
        { title: 'Oath & passport', duration: '1 month', desc: 'Decision → ślubowanie → new ID and passport.' }
      ]
    },
    documents: {
      title: 'Documents',
      items: [
        'Application for recognition or naturalisation',
        'Written autobiography in Polish',
        'Polish language certificate (B1 minimum)',
        'PR decision',
        'Income certificates for the last 3 years (PIT, ZUS)',
        'Housing proof (title deed, lease, zameldowanie)',
        'Criminal record clearance — Poland + country of origin',
        'Birth/marriage certificates and ancestor records — for origin-based routes'
      ]
    },
    pricing: {
      title: 'Our fee',
      items: [
        { label: 'Route assessment', value: 'Free', note: 'Initial consultation' },
        { label: 'Recognition (uznanie)', value: 'from 4,500 PLN', note: 'Turnkey' },
        { label: 'Naturalisation', value: 'from 6,000 PLN', note: 'President\'s Office billed separately' },
        { label: 'Origin confirmation', value: 'from 3,500 PLN', note: '+ archival research' }
      ],
      note: 'State fee 219 PLN (recognition) or €20 (naturalisation) — paid by client.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Act of 2 April 2009 on Polish Citizenship',
        'Constitution of Poland — Article 34',
        'MSWiA and Prime Minister regulations'
      ]
    },
    faq: [
      { q: 'What language level is required?', a: 'B1 — proven by state certification exam, a Polish school certificate, a Polish university diploma or equivalent.' },
      { q: 'What if my ancestor emigrated before 1918?', a: 'Poland as a state was restored in 1918 — pre-1918 ancestors weren\'t Polish citizens. Only recognition or naturalisation apply.' },
      { q: 'Can I keep my first citizenship?', a: 'Yes. Poland allows dual citizenship. But your home country may require renunciation — that\'s its law, not Poland\'s.' },
      { q: 'Are there quotas?', a: 'No quotas. But naturalisation (President\'s decision) is discretionary — denial without reasoning is possible.' },
      { q: 'What about children?', a: 'Children under 18 get citizenship with the parent. Over 16 — with the child\'s consent.' }
    ],
    related: ['karta-stalego-pobytu', 'karta-polaka', 'apelacje'],
    ctaTitle: 'Which route is right for you?',
    ctaSubtitle: 'In 30 minutes we\'ll review your roots, residence history and documents — and map out what\'s realistic.'
  }
};

export default obywatelstwo;
