import type { ServiceEntry } from './types';

const wyszukiwanieMieszkania: ServiceEntry = {
  ru: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Najem · Zakup · Krajowy Rejestr Zadłużonych',
    title: 'Поиск жилья',
    subtitle: 'Долгосрочная аренда и покупка — от квартиры до дома',
    lead: 'Поиск жилья в Польше для иностранца — минное поле: аренда без meldunkу, серые контракты, риск okupasji («захвата» собственника), скрытые czynsz administracyjny по 800 PLN/мес, отказы за кредитную историю. LegalWin подбирает жильё под ваш бюджет и потребности, проверяет księgę wieczystą и обременения, ведёт переговоры на польском, сопровождает у нотариуса при покупке. Работаем в Warszawa, Wrocław, Krakow, Gdansk, Poznań — городах, где живут наши клиенты.',
    facts: [
      { label: 'Срок подбора', value: '7–21 день', note: 'аренда · standard · покупка до 90 дней' },
      { label: 'Гонорар (аренда)', value: 'от 1 200 PLN', note: 'или 0,5 czynszu' },
      { label: 'Гонорар (покупка)', value: '1,5–2,5%', note: 'от стоимости сделки' },
      { label: 'Города', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 крупнейших городов Польши' }
    ],
    grounds: {
      title: 'Какое жильё подбираем',
      subtitle: 'От студии для одного айтишника до дома 250 м² для семьи с детьми.',
      items: [
        { title: 'Долгосрочная аренда (12+ мес.)', desc: 'Студии в центре Warszawa (от 2 800 PLN), 2-комнатные на Mokotów (от 4 200 PLN), семейные 3-к в Wilanów / Bemowo (от 5 500 PLN). С meldunkiem.' },
        { title: 'Краткосрочная — от 1 до 6 мес.', desc: 'Apartmenty с уборкой, бельём, готовой кухней — для первых 1–3 месяцев пока ищете долгосрочное. От 4 500 PLN/мес. в Warszawa.' },
        { title: 'Покупка квартиры', desc: 'Подбор по księgе wieczystej, due diligence, переговоры с продавцом, нотариус, KW. Гонорар 1,5–2,5% от сделки.' },
        { title: 'Покупка дома или участка', desc: 'Под ключ: подбор, geodeта, проверка plan miejscowy, MSWiA-разрешение для не-ЕС, сделка. От 2,0% от стоимости.' },
        { title: 'Покупка для иностранца не-ЕС', desc: 'С zezwolenie MSWiA — обязательно для не-ЕС покупателей не-городской недвижимости. Полный цикл с разрешением — от 2 800 PLN дополнительно.' },
        { title: 'Коммерческая недвижимость', desc: 'Офис, магазин, склад, ресторан — для Sp. z o.o. С учётом VAT, plan zagospodarowania, договоров с najemcami.' },
        { title: 'Студенческое общежитие', desc: 'Akademik / prywatne dormitorium для студентов аккредитованных ВУЗов — 800–1 800 PLN/мес. Записывают за 2–3 мес. до начала года.' },
        { title: 'Жильё с adresем dla biznesu', desc: 'Юридический адрес для KRS / CEIDG — от 250 PLN/мес. Без проживания. Для Sp. z o.o., JDG, представительства.' }
      ]
    },
    timeline: {
      title: 'Как мы подбираем аренду',
      subtitle: 'Стандартный цикл — 7–21 день. Для покупки — 30–90 дней.',
      steps: [
        { title: 'Бриф', duration: '30 мин', desc: 'Бюджет, локация, размер, особенности (балкон, парковка, mieszkanie z meblami или bez), meldunek, домашние животные.' },
        { title: 'Подбор объектов', duration: '3–7 дней', desc: 'Проверяем Otodom, Domiporta, Olx, прямые контакты собственников — отсеиваем 90% неподходящего, отбираем 5–8 топ-вариантов.' },
        { title: 'Просмотры', duration: '1–3 дня', desc: 'Сопровождаем на 5–8 просмотрах за 1–3 дня. Наш агент проверяет состояние квартиры, лифты, шумоизоляцию, отопление.' },
        { title: 'Переговоры с собственником', duration: '1–3 дня', desc: 'Аргументируем снижение цены (плохие фото, давно висит, рынок остыл). Снижаем 5–15% от цены объявления в среднем.' },
        { title: 'Проверка KW и собственности', duration: '1 день', desc: 'księga wieczysta онлайн — собственник, обременения, hipoteka, аренда от konkurencji. Делаем zaświadczenie z BIK от собственника.' },
        { title: 'Договор аренды', duration: '1–2 дня', desc: 'Адаптируем typowy договор: meldunek в пунктах, условия повышения czynszu (CPI), zwrot kaucji, возможность субаренды для команды.' },
        { title: 'Подписание и заселение', duration: '1 день', desc: 'У нотариуса (для премиум) или просто с witnessem. Передача ключей, фото-протокол, замеры счётчиков. Через 30 дней — meldunek.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас (аренда)',
      subtitle: 'Минимум для большинства собственников. Премиум-объекты — ZUS RMUA дополнительно.',
      items: [
        'Паспорт + копия (PESEL, если есть)',
        'Документ легального пребывания (виза, karta pobytu)',
        'Подтверждение работы — umowa o pracę или KRS своей фирмы',
        'Доход за 3 месяца — выписки счёта или PIT-37',
        'Контакты предыдущих арендодателей (для referencji)',
        'Сумма кауции (1–2 czynszu) и предоплата за 1 мес.',
        'Список членов семьи / соседей для wniosku o zameldowanie',
        'Доверенность для LegalWin на ведение переговоров'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Аренда — фиксированная цена. Покупка — % от сделки.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · бриф' },
        { label: 'Подбор аренды', value: 'от 1 200 PLN', note: '7–21 день · 5–8 объектов · договор' },
        { label: 'Покупка квартиры', value: '1,5–2,5%', note: 'От стоимости · полный цикл' },
        { label: 'MSWiA для не-ЕС покупателей', value: 'от 2 800 PLN', note: 'Дополнительно к покупке' }
      ],
      note: 'Аренда: гонорар фиксированный, не зависит от размера czynszu. Покупка: процент от транзакции, минимум 6 000 PLN. PCC-2% и нотариус (1–1,5%) — отдельно по тарифам, не наши.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Kodeks cywilny (art. 659–692 — najem; art. 535–581 — sprzedaż)',
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów',
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Rozporządzenie MSWiA w sprawie zezwoleń na nabywanie nieruchomości (cudzoziemcy)'
      ]
    },
    faq: [
      { q: 'Сколько реально стоит аренда в Варшаве в 2026?', a: 'Студия в центре (Śródmieście, Wola) — 2 800–4 200 PLN/мес. + opłaty 400–800 PLN. 2-комнатная в Mokotów / Ursynów — 4 500–6 500 PLN + opłaty. Семейная 3-к в Wilanów / Bemowo — 6 000–9 000 PLN + opłaty. Это без mediach (электричество ~150–300 PLN, газ ~80–200, интернет ~70).' },
      { q: 'Что такое opłata administracyjna и почему её отдельно?', a: 'Это плата кооперативу или wspólnocie за лестницы, лифт, дворника, мусор. Обычно 8–15 PLN/м². В 60-метровой квартире — 500–900 PLN/мес. поверх czynszu. Многие договоры пишут «czynsz 4 500 PLN», скрывая, что opłata — extra. Мы это всегда выясняем заранее.' },
      { q: 'Можно ли арендовать без работы в Польше?', a: 'Сложно. 70% собственников требуют umowę o pracę или выписки счёта на 6+ czynszów вперёд. Альтернативы: прямая оплата 6–12 мес. вперёд, поручитель из Польши, повышенная kaucja (3 czynszu), или работа с агентами, специализирующимися на экспатах. Делаем все три варианта.' },
      { q: 'Что делать с meldunkiem — собственники не любят его?', a: 'По польскому праву meldunek — обязанность арендатора, и собственник не может отказывать без законных оснований. Включаем пункт «z prawem do zameldowania» в договор от старта — это решает 90% споров. Если собственник упорствует — ищем другой объект.' },
      { q: 'Как избежать «аферы» с фейковыми объявлениями?', a: 'Никогда не платим без личного просмотра. Проверяем księgę wieczystą — это публичный реестр, видим реального собственника за 14 PLN. Если в KW другая фамилия, или объект помечен как arrest, или есть ipoteka на 80% стоимости — отказываемся.' },
      { q: 'Сколько по факту стоит купить квартиру 60 м² в Варшаве?', a: '2026 год: 60 м² в Mokotów — 850 000–1 200 000 PLN, центр — 1 100 000–1 500 000 PLN. К цене + 2% PCC + 1–1,5% нотариус + 0,5% wpisу w KW + 1,5–2,5% наш гонорар = 5–7% к цене объекта на покупательскую сторону. Плюс ремонт 2 000–4 000 PLN/м².' },
      { q: 'Нужно ли разрешение MSWiA для не-ЕС покупателя?', a: 'Для квартиры в городе — нет. Для дома, дачи, участка свыше 0,4 га — да. Также для коммерческой недвижимости вне города. Срок выдачи zezwolenia — 60–90 дней, гонорар MSWiA — 1 570 PLN. Делаем под ключ за 2 800 PLN наших + госпошлина.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Найдём жильё за 7–21 день',
    ctaSubtitle: 'Бесплатная консультация: бриф ваши потребности и бюджет, дадим список 3–5 топ-вариантов в течение 48 часов. Подбор и переговоры — 7–21 день.'
  },
  pl: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Najem · Zakup · KRZ · KW',
    title: 'Wyszukiwanie mieszkania',
    subtitle: 'Najem długoterminowy i zakup — od kawalerki po dom',
    lead: 'Szukanie mieszkania w Polsce dla cudzoziemca to pole minowe: najem bez meldunku, szare umowy, ryzyko okupacji, ukryte czynsze administracyjne 800 PLN/mies., odmowy za historię kredytową. LegalWin dobiera nieruchomość pod budżet, weryfikuje KW, prowadzi negocjacje, asystuje u notariusza przy zakupie. Działamy w Warszawie, Wrocławiu, Krakowie, Gdańsku, Poznaniu.',
    facts: [
      { label: 'Termin najmu', value: '7–21 dni', note: 'standard · zakup do 90 dni' },
      { label: 'Honorarium najem', value: 'od 1 200 PLN', note: 'lub 0,5 czynszu' },
      { label: 'Honorarium zakup', value: '1,5–2,5%', note: 'wartości transakcji' },
      { label: 'Miasta', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 największych' }
    ],
    grounds: {
      title: 'Co dobieramy',
      subtitle: 'Od kawalerki dla informatyka po dom 250 m² dla rodziny.',
      items: [
        { title: 'Najem długoterminowy 12+', desc: 'Kawalerki centrum WAW (od 2 800 PLN), 2-pokojowe Mokotów (od 4 200), rodzinne 3-pok Wilanów (od 5 500). Z meldunkiem.' },
        { title: 'Krótkoterminowy 1–6 mies.', desc: 'Apartamenty z sprzątaniem, pościelą, kuchnią — pierwsze 1–3 mies. Od 4 500 PLN/mies. w WAW.' },
        { title: 'Zakup mieszkania', desc: 'Dobór wg KW, due diligence, negocjacje, notariusz, wpis. Honorarium 1,5–2,5%.' },
        { title: 'Zakup domu lub działki', desc: 'Pod klucz: dobór, geodeta, plan miejscowy, MSWiA dla spoza UE, transakcja. Od 2,0%.' },
        { title: 'Zakup dla obywatela spoza UE', desc: 'Z zezwoleniem MSWiA — obowiązkowe dla nieruchomości pozamiejskich. Pełen cykl od 2 800 PLN dodatkowo.' },
        { title: 'Komercyjne', desc: 'Biuro, sklep, magazyn, lokal — dla Sp. z o.o. VAT, plan zagospodarowania, najemcy.' },
        { title: 'Akademiki', desc: 'Akademiki / prywatne dormy dla studentów akredytowanych uczelni — 800–1 800 PLN/mies. Zapisy 2–3 mies. wcześniej.' },
        { title: 'Adres firmowy', desc: 'Adres prawny dla KRS / CEIDG — od 250 PLN/mies. Bez zamieszkania.' }
      ]
    },
    timeline: {
      title: 'Przebieg najmu',
      subtitle: 'Standard 7–21 dni. Zakup — 30–90 dni.',
      steps: [
        { title: 'Brief', duration: '30 min', desc: 'Budżet, lokalizacja, wielkość, wymagania, meldunek, zwierzęta.' },
        { title: 'Dobór', duration: '3–7 dni', desc: 'Otodom, Domiporta, Olx, kontakty właścicieli — 5–8 top opcji z 90% odsianych.' },
        { title: 'Oględziny', duration: '1–3 dni', desc: '5–8 wizyt w 1–3 dni. Stan, windy, akustyka, ogrzewanie.' },
        { title: 'Negocjacje', duration: '1–3 dni', desc: 'Argumenty na obniżkę: zdjęcia, czas wisi, rynek. Zwykle -5–15%.' },
        { title: 'KW i własność', duration: '1 dzień', desc: 'Księga wieczysta online — właściciel, obciążenia, hipoteka. BIK właściciela.' },
        { title: 'Umowa najmu', duration: '1–2 dni', desc: 'Adaptujemy szablon: meldunek, CPI, kaucja, podnajem dla zespołu.' },
        { title: 'Podpis i odbiór', duration: '1 dzień', desc: 'U notariusza lub ze świadkiem. Klucze, foto-protokół, liczniki. Po 30 dniach — meldunek.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy (najem)',
      subtitle: 'Minimum. Premium — ZUS RMUA dodatkowo.',
      items: [
        'Paszport + kopia (PESEL jeśli jest)',
        'Dokument legalnego pobytu',
        'Umowa o pracę lub KRS firmy',
        'Wyciągi z konta lub PIT-37 — 3 mies.',
        'Kontakty poprzednich właścicieli (referencje)',
        'Kaucja (1–2 czynsze) i przedpłata 1 mies.',
        'Lista członków rodziny do meldunku',
        'Pełnomocnictwo dla LegalWin'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Najem — stała cena. Zakup — % od transakcji.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · brief' },
        { label: 'Dobór najmu', value: 'od 1 200 PLN', note: '7–21 dni · 5–8 obiektów · umowa' },
        { label: 'Zakup mieszkania', value: '1,5–2,5%', note: 'Wartości · pełen cykl' },
        { label: 'MSWiA dla spoza UE', value: 'od 2 800 PLN', note: 'Dodatkowo' }
      ],
      note: 'Najem: honorarium stałe. Zakup: % od transakcji, min. 6 000 PLN. PCC-2% i notariusz (1–1,5%) — osobno wg taryf.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Kodeks cywilny (art. 659–692 najem; art. 535–581 sprzedaż)',
        'Ustawa z 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Ustawa z 21 czerwca 2001 r. o ochronie praw lokatorów',
        'Ustawa z 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Rozporządzenie MSWiA ws. zezwoleń na nabywanie nieruchomości'
      ]
    },
    faq: [
      { q: 'Realny czynsz w Warszawie 2026?', a: 'Kawalerka centrum (Śródmieście, Wola) — 2 800–4 200 PLN/mies. + opłaty 400–800. 2-pok Mokotów/Ursynów — 4 500–6 500 + opłaty. 3-pok Wilanów/Bemowo — 6 000–9 000 + opłaty. Bez mediów (~150–300 prąd, 80–200 gaz, 70 internet).' },
      { q: 'Czym jest opłata administracyjna?', a: 'Opłata wspólnocie/spółdzielni za schody, windę, sprzątanie, śmieci. 8–15 PLN/m². 60 m² — 500–900 PLN/mies. ponad czynsz. Wyjaśniamy z góry.' },
      { q: 'Najem bez pracy w Polsce?', a: 'Trudno. 70% właścicieli wymaga umowy o pracę lub 6+ czynszów. Alternatywy: 6–12 mies. z góry, poręczyciel, podwyższona kaucja (3×), agenci dla expatów.' },
      { q: 'Meldunek — jak negocjować?', a: 'Z mocy prawa meldunek to obowiązek najemcy. Wpisujemy klauzulę "z prawem do zameldowania" — rozwiązuje 90% sporów. Upór właściciela = inny obiekt.' },
      { q: 'Jak unikać oszustw?', a: 'Nigdy nie płacimy bez oględzin. KW online za 14 PLN — widzimy właściciela. Inne nazwisko / zajęcie / hipoteka 80% — odpadamy.' },
      { q: 'Realny koszt zakupu 60 m² w WAW?', a: '2026: Mokotów — 850 000–1 200 000 PLN, centrum — 1 100 000–1 500 000. + 2% PCC + 1–1,5% notariusz + 0,5% wpis KW + 1,5–2,5% nasze = 5–7% na stronę kupującego. Remont 2 000–4 000 PLN/m².' },
      { q: 'MSWiA dla spoza UE?', a: 'Mieszkanie w mieście — nie. Dom/działka >0,4 ha — tak. Komercja pozamiejska — tak. Termin 60–90 dni, opłata 1 570 PLN. Pod klucz 2 800 PLN naszych.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Mieszkanie w 7–21 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: brief, lista 3–5 topów w 48 h. Dobór i negocjacje — 7–21 dni.'
  },
  en: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Tenancy · Purchase · KW · KRZ',
    title: 'Housing search',
    subtitle: 'Long-term tenancy and property purchase',
    lead: 'House-hunting in Poland as a foreigner is a minefield: tenancy without meldunek, grey contracts, owner-squatting risks, hidden 800 PLN/month admin fees, refusals for credit history. LegalWin sources housing on your budget, vets KW (land register), negotiates in Polish, attends the notary on purchase. We work in Warsaw, Wrocław, Krakow, Gdansk, Poznań.',
    facts: [
      { label: 'Tenancy lead time', value: '7–21 days', note: 'standard · purchase up to 90 days' },
      { label: 'Tenancy fee', value: 'from 1,200 PLN', note: 'or 0.5 monthly rent' },
      { label: 'Purchase fee', value: '1.5–2.5%', note: 'of transaction value' },
      { label: 'Cities', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 largest cities' }
    ],
    grounds: {
      title: 'What we source',
      subtitle: 'From a studio for a single dev to a 250 m² family house.',
      items: [
        { title: 'Long-term tenancy 12+ months', desc: 'Studios in Warsaw centre (from 2,800 PLN), 2-rooms in Mokotów (from 4,200), family 3-rooms in Wilanów (from 5,500). With meldunek.' },
        { title: 'Short-term 1–6 months', desc: 'Apartments with cleaning, linen, kitchen — bridge first 1–3 months. From 4,500 PLN/month in Warsaw.' },
        { title: 'Apartment purchase', desc: 'KW-based selection, due diligence, negotiation, notary, registry. 1.5–2.5% fee.' },
        { title: 'House or land purchase', desc: 'Turnkey: search, surveyor, zoning plan, MSWiA permit for non-EU, deal. From 2.0%.' },
        { title: 'Non-EU buyer purchase', desc: 'MSWiA permit required for non-urban property. Full cycle from 2,800 PLN extra.' },
        { title: 'Commercial property', desc: 'Office, shop, warehouse, restaurant — for Sp. z o.o. VAT, zoning, tenants.' },
        { title: 'Student dorms', desc: 'Akademik / private dorm for accredited-university students — 800–1,800 PLN/month. Book 2–3 months ahead.' },
        { title: 'Business address', desc: 'Legal address for KRS / CEIDG — from 250 PLN/month. No residency.' }
      ]
    },
    timeline: {
      title: 'How tenancy search runs',
      subtitle: 'Standard 7–21 days. Purchase — 30–90 days.',
      steps: [
        { title: 'Brief', duration: '30 min', desc: 'Budget, location, size, requirements, meldunek, pets.' },
        { title: 'Sourcing', duration: '3–7 days', desc: 'Otodom, Domiporta, Olx, owner contacts — 5–8 top options after filtering 90%.' },
        { title: 'Viewings', duration: '1–3 days', desc: '5–8 viewings in 1–3 days. State, lifts, acoustics, heating.' },
        { title: 'Negotiation', duration: '1–3 days', desc: 'Pricing arguments: photos, time on market. Typically -5–15%.' },
        { title: 'KW & ownership check', duration: '1 day', desc: 'Online KW for 14 PLN — owner, encumbrances, mortgage. BIK on owner.' },
        { title: 'Tenancy contract', duration: '1–2 days', desc: 'Adapt template: meldunek, CPI, deposit, sublet for teams.' },
        { title: 'Signing & move-in', duration: '1 day', desc: 'Notary or witnessed. Keys, photo protocol, meter readings. Meldunek within 30 days.' }
      ]
    },
    documents: {
      title: 'What we need (tenancy)',
      subtitle: 'Minimum. Premium — ZUS RMUA additionally.',
      items: [
        'Passport + copy (PESEL if any)',
        'Legal-stay document',
        'Work contract or own KRS',
        '3-month bank statements or PIT-37',
        'Previous-landlord references',
        'Deposit (1–2 rents) + 1-month prepay',
        'Family/roommate list for meldunek',
        'Power of attorney for LegalWin negotiations'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Tenancy — fixed price. Purchase — % of transaction.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · brief' },
        { label: 'Tenancy search', value: 'from 1,200 PLN', note: '7–21 days · 5–8 properties · contract' },
        { label: 'Apartment purchase', value: '1.5–2.5%', note: 'Of transaction · full cycle' },
        { label: 'Non-EU MSWiA permit', value: 'from 2,800 PLN', note: 'In addition to purchase' }
      ],
      note: 'Tenancy fee fixed regardless of rent. Purchase: % of transaction, min 6,000 PLN. PCC 2% and notary (1–1.5%) at official rates.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Civil Code (Art. 659–692 — tenancy; 535–581 — sale)',
        'Act of 24 March 1920 on the acquisition of real estate by foreigners',
        'Tenant Protection Act of 21 June 2001',
        'Land Register and Mortgage Act of 6 July 1982',
        'MSWiA Regulation on permits for foreigners'
      ]
    },
    faq: [
      { q: 'Real Warsaw rent in 2026?', a: 'Studio in Śródmieście/Wola — 2,800–4,200 PLN + 400–800 fees. 2-room Mokotów/Ursynów — 4,500–6,500 + fees. 3-room Wilanów/Bemowo — 6,000–9,000 + fees. Plus utilities (~150–300 PLN electricity, 80–200 gas, 70 internet).' },
      { q: 'What is the admin fee?', a: 'Cooperative/HOA fee for stairs, lift, cleaning, waste — 8–15 PLN/m². A 60 m² flat — 500–900 PLN/month on top of rent. We always disclose upfront.' },
      { q: 'Tenancy without a Polish job?', a: 'Hard. 70% of owners want a work contract or 6+ months of rent prepay. Alternatives: 6–12 months upfront, Polish guarantor, higher deposit (3 rents), expat-friendly agents.' },
      { q: 'Meldunek negotiation?', a: 'By Polish law, meldunek is the tenant\'s obligation. We add a "with right to register" clause — solves 90% of disputes. If the owner refuses — different property.' },
      { q: 'Avoiding scams?', a: 'Never pay before viewing. KW online for 14 PLN reveals real owner. Different name / arrest / 80% mortgage — we walk away.' },
      { q: 'Real cost to buy 60 m² in Warsaw?', a: '2026: Mokotów — 850,000–1,200,000 PLN, centre — 1,100,000–1,500,000. + 2% PCC + 1–1.5% notary + 0.5% KW entry + 1.5–2.5% our fee = 5–7% buyer-side. Renovation 2,000–4,000 PLN/m².' },
      { q: 'MSWiA for non-EU buyers?', a: 'Urban apartment — no. House or land >0.4 ha — yes. Non-urban commercial — yes. 60–90 days, 1,570 PLN MSWiA fee. Turnkey for 2,800 PLN of our fee.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Housing in 7–21 days',
    ctaSubtitle: 'Free consultation: brief and a 3–5 top-options list within 48h. Full sourcing and negotiation — 7–21 days.'
  }
};

export default wyszukiwanieMieszkania;
