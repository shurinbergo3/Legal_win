import type { ServiceEntry } from './types';

const wyszukiwanieMieszkania: ServiceEntry = {
  ru: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Najem · Zakup · Krajowy Rejestr Zadłużonych',
    title: 'Поиск жилья',
    subtitle: 'Долгосрочная аренда и покупка - от квартиры до дома',
    lead: 'Поиск жилья в Польше для иностранца - минное поле: аренда без meldunku, серые контракты, риск okupasji («захвата» собственника), скрытые czynsz administracyjny по 800 PLN/мес, отказы за кредитную историю. LegalWin подбирает жильё под ваш бюджет и потребности, проверяет księgę wieczystą и обременения, ведёт переговоры на польском, сопровождает у нотариуса при покупке. Работаем в Warszawa, Wrocław, Krakow, Gdansk, Poznań - городах, где живут наши клиенты.',
    facts: [
      { label: 'Срок подбора', value: '7-21 день', note: 'аренда · standard · покупка до 90 дней' },
      { label: 'Гонорар (аренда)', value: 'от 1 200 PLN', note: 'или 0,5 czynszu' },
      { label: 'Гонорар (покупка)', value: '1,5-2,5%', note: 'от стоимости сделки' },
      { label: 'Города', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 крупнейших городов Польши' }
    ],
    grounds: {
      title: 'Какое жильё подбираем',
      subtitle: 'От студии для одного айтишника до дома 250 м² для семьи с детьми.',
      items: [
        { title: 'Долгосрочная аренда (12+ мес.)', desc: 'Студии в центре Warszawa (от 2 800 PLN), 2-комнатные на Mokotów (от 4 200 PLN), семейные 3-к в Wilanów / Bemowo (от 5 500 PLN). С meldunkiem.' },
        { title: 'Краткосрочная - от 1 до 6 мес.', desc: 'Apartmenty с уборкой, бельём, готовой кухней - для первых 1-3 месяцев пока ищете долгосрочное. От 4 500 PLN/мес. в Warszawa.' },
        { title: 'Покупка квартиры', desc: 'Подбор по księdze wieczystej, due diligence, переговоры с продавцом, нотариус, KW. Гонорар 1,5-2,5% от сделки.' },
        { title: 'Покупка дома или участка', desc: 'Под ключ: подбор, geodeta, проверка plan miejscowy, MSWiA-разрешение для не-ЕС, сделка. От 2,0% от стоимости.' },
        { title: 'Покупка для иностранца не-ЕС', desc: 'С zezwolenie MSWiA - обязательно для не-ЕС покупателей не-городской недвижимости. Полный цикл с разрешением - от 2 800 PLN дополнительно.' },
        { title: 'Коммерческая недвижимость', desc: 'Офис, магазин, склад, ресторан - для Sp. z o.o. С учётом VAT, plan zagospodarowania, договоров с najemcami.' },
        { title: 'Студенческое общежитие', desc: 'Akademik / prywatne dormitorium для студентов аккредитованных ВУЗов - 800-1 800 PLN/мес. Записывают за 2-3 мес. до начала года.' },
        { title: 'Жильё с адресом dla biznesu', desc: 'Юридический адрес для KRS / CEIDG - от 250 PLN/мес. Без проживания. Для Sp. z o.o., JDG, представительства.' }
      ]
    },
    timeline: {
      title: 'Как мы подбираем аренду',
      subtitle: 'Стандартный цикл - 7-21 день. Для покупки - 30-90 дней.',
      steps: [
        { title: 'Бриф', duration: '30 мин', desc: 'Бюджет, локация, размер, особенности (балкон, парковка, mieszkanie z meblami или bez), meldunek, домашние животные.' },
        { title: 'Подбор объектов', duration: '3-7 дней', desc: 'Проверяем Otodom, Domiporta, Olx, прямые контакты собственников - отсеиваем 90% неподходящего, отбираем 5-8 топ-вариантов.' },
        { title: 'Просмотры', duration: '1-3 дня', desc: 'Сопровождаем на 5-8 просмотрах за 1-3 дня. Наш агент проверяет состояние квартиры, лифты, шумоизоляцию, отопление.' },
        { title: 'Переговоры с собственником', duration: '1-3 дня', desc: 'Аргументируем снижение цены (плохие фото, давно висит, рынок остыл). Снижаем 5-15% от цены объявления в среднем.' },
        { title: 'Проверка KW и собственности', duration: '1 день', desc: 'księga wieczysta онлайн - собственник, обременения, hipoteka, аренда от konkurencji. Делаем zaświadczenie z BIK от собственника.' },
        { title: 'Договор аренды', duration: '1-2 дня', desc: 'Адаптируем typowy договор: meldunek в пунктах, условия повышения czynszu (CPI), zwrot kaucji, возможность субаренды для команды.' },
        { title: 'Подписание и заселение', duration: '1 день', desc: 'У нотариуса (для премиум) или просто с witnessem. Передача ключей, фото-протокол, замеры счётчиков. Через 30 дней - meldunek.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас (аренда)',
      subtitle: 'Минимум для большинства собственников. Премиум-объекты - ZUS RMUA дополнительно.',
      items: [
        'Паспорт + копия (PESEL, если есть)',
        'Документ легального пребывания (виза, karta pobytu)',
        'Подтверждение работы - umowa o pracę или KRS своей фирмы',
        'Доход за 3 месяца - выписки счёта или PIT-37',
        'Контакты предыдущих арендодателей (для referencji)',
        'Сумма кауции (1-2 czynszu) и предоплата за 1 мес.',
        'Список членов семьи / соседей для wniosku o zameldowanie',
        'Доверенность для LegalWin на ведение переговоров'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Аренда - фиксированная цена. Покупка - % от сделки.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · бриф' },
        { label: 'Подбор аренды', value: 'от 1 200 PLN', note: '7-21 день · 5-8 объектов · договор' },
        { label: 'Покупка квартиры', value: '1,5-2,5%', note: 'От стоимости · полный цикл' },
        { label: 'MSWiA для не-ЕС покупателей', value: 'от 2 800 PLN', note: 'Дополнительно к покупке' }
      ],
      note: 'Аренда: гонорар фиксированный, не зависит от размера czynszu. Покупка: процент от транзакции, минимум 6 000 PLN. PCC-2% и нотариус (1-1,5%) - отдельно по тарифам, не наши.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Kodeks cywilny (art. 659-692 - najem; art. 535-581 - sprzedaż)',
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów',
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Rozporządzenie MSWiA w sprawie zezwoleń na nabywanie nieruchomości (cudzoziemcy)'
      ]
    },
    faq: [
      { q: 'Сколько реально стоит аренда в Варшаве в 2026?', a: 'Студия в центре (Śródmieście, Wola) - 2 800-4 200 PLN/мес. + opłaty 400-800 PLN. 2-комнатная в Mokotów / Ursynów - 4 500-6 500 PLN + opłaty. Семейная 3-к в Wilanów / Bemowo - 6 000-9 000 PLN + opłaty. Это без mediach (электричество ~150-300 PLN, газ ~80-200, интернет ~70).' },
      { q: 'Что такое opłata administracyjna и почему её отдельно?', a: 'Opłata administracyjna (административный сбор) - плата кооперативу или wspólnocie (товариществу собственников) за лестницы, лифт, дворника, мусор. Обычно 8-15 PLN/м². В 60-метровой квартире - 500-900 PLN/мес. поверх czynszu (арендной платы). Многие договоры пишут «czynsz 4 500 PLN», скрывая, что opłata - extra. Мы это всегда выясняем заранее.' },
      { q: 'Можно ли арендовать без работы в Польше?', a: 'Сложно. 70% собственников требуют umowę o pracę (трудовой договор) или выписки счёта на 6+ czynszów (арендных платежей) вперёд. Альтернативы: прямая оплата 6-12 мес. вперёд, поручитель из Польши, повышенная kaucja (залог, 3 czynszu), или работа с агентами, специализирующимися на экспатах. Делаем все три варианта.' },
      { q: 'Что делать с meldunkiem - собственники не любят его?', a: 'По польскому праву meldunek (регистрация) - обязанность арендатора, и собственник не может отказывать без законных оснований. Включаем пункт «z prawem do zameldowania» (с правом на регистрацию) в договор от старта - это решает 90% споров. Если собственник упорствует - ищем другой объект.' },
      { q: 'Как избежать «аферы» с фейковыми объявлениями?', a: 'Никогда не платим без личного просмотра. Проверяем księgę wieczystą (поземельную книгу) - это публичный реестр, видим реального собственника за 14 PLN. Если в KW другая фамилия, или объект помечен как arrest (арест), или есть hipoteka (ипотека) на 80% стоимости - отказываемся.' },
      { q: 'Сколько по факту стоит купить квартиру 60 м² в Варшаве?', a: '2026 год: 60 м² в Mokotów - 850 000-1 200 000 PLN, центр - 1 100 000-1 500 000 PLN. К цене + 2% PCC + 1-1,5% нотариус + 0,5% wpisu w KW + 1,5-2,5% наш гонорар = 5-7% к цене объекта на покупательскую сторону. Плюс ремонт 2 000-4 000 PLN/м².' },
      { q: 'Нужно ли разрешение MSWiA для не-ЕС покупателя?', a: 'Для квартиры в городе - нет. Для дома, дачи, участка свыше 0,4 га - да. Также для коммерческой недвижимости вне города. Срок выдачи zezwolenia - 60-90 дней, гонорар MSWiA - 1 570 PLN. Делаем под ключ за 2 800 PLN наших + госпошлина.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Найдём жильё за 7-21 день',
    ctaSubtitle: 'Бесплатная консультация: бриф ваши потребности и бюджет, дадим список 3-5 топ-вариантов в течение 48 часов. Подбор и переговоры - 7-21 день.'
  },
  pl: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Najem · Zakup · KRZ · KW',
    title: 'Wyszukiwanie mieszkania',
    subtitle: 'Najem długoterminowy i zakup - od kawalerki po dom',
    lead: 'Szukanie mieszkania w Polsce dla cudzoziemca to pole minowe: najem bez meldunku, szare umowy, ryzyko okupacji, ukryte czynsze administracyjne 800 PLN/mies., odmowy za historię kredytową. LegalWin dobiera nieruchomość pod budżet, weryfikuje KW, prowadzi negocjacje, asystuje u notariusza przy zakupie. Działamy w Warszawie, Wrocławiu, Krakowie, Gdańsku, Poznaniu.',
    facts: [
      { label: 'Termin najmu', value: '7-21 dni', note: 'standard · zakup do 90 dni' },
      { label: 'Honorarium najem', value: 'od 1 200 PLN', note: 'lub 0,5 czynszu' },
      { label: 'Honorarium zakup', value: '1,5-2,5%', note: 'wartości transakcji' },
      { label: 'Miasta', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 największych' }
    ],
    grounds: {
      title: 'Co dobieramy',
      subtitle: 'Od kawalerki dla informatyka po dom 250 m² dla rodziny.',
      items: [
        { title: 'Najem długoterminowy 12+', desc: 'Kawalerki centrum WAW (od 2 800 PLN), 2-pokojowe Mokotów (od 4 200), rodzinne 3-pok Wilanów (od 5 500). Z meldunkiem.' },
        { title: 'Krótkoterminowy 1-6 mies.', desc: 'Apartamenty z sprzątaniem, pościelą, kuchnią - pierwsze 1-3 mies. Od 4 500 PLN/mies. w WAW.' },
        { title: 'Zakup mieszkania', desc: 'Dobór wg KW, due diligence, negocjacje, notariusz, wpis. Honorarium 1,5-2,5%.' },
        { title: 'Zakup domu lub działki', desc: 'Pod klucz: dobór, geodeta, plan miejscowy, MSWiA dla spoza UE, transakcja. Od 2,0%.' },
        { title: 'Zakup dla obywatela spoza UE', desc: 'Z zezwoleniem MSWiA - obowiązkowe dla nieruchomości pozamiejskich. Pełen cykl od 2 800 PLN dodatkowo.' },
        { title: 'Komercyjne', desc: 'Biuro, sklep, magazyn, lokal - dla Sp. z o.o. VAT, plan zagospodarowania, najemcy.' },
        { title: 'Akademiki', desc: 'Akademiki / prywatne dormy dla studentów akredytowanych uczelni - 800-1 800 PLN/mies. Zapisy 2-3 mies. wcześniej.' },
        { title: 'Adres firmowy', desc: 'Adres prawny dla KRS / CEIDG - od 250 PLN/mies. Bez zamieszkania.' }
      ]
    },
    timeline: {
      title: 'Przebieg najmu',
      subtitle: 'Standard 7-21 dni. Zakup - 30-90 dni.',
      steps: [
        { title: 'Brief', duration: '30 min', desc: 'Budżet, lokalizacja, wielkość, wymagania, meldunek, zwierzęta.' },
        { title: 'Dobór', duration: '3-7 dni', desc: 'Otodom, Domiporta, Olx, kontakty właścicieli - 5-8 top opcji z 90% odsianych.' },
        { title: 'Oględziny', duration: '1-3 dni', desc: '5-8 wizyt w 1-3 dni. Stan, windy, akustyka, ogrzewanie.' },
        { title: 'Negocjacje', duration: '1-3 dni', desc: 'Argumenty na obniżkę: zdjęcia, czas wisi, rynek. Zwykle -5-15%.' },
        { title: 'KW i własność', duration: '1 dzień', desc: 'Księga wieczysta online - właściciel, obciążenia, hipoteka. BIK właściciela.' },
        { title: 'Umowa najmu', duration: '1-2 dni', desc: 'Adaptujemy szablon: meldunek, CPI, kaucja, podnajem dla zespołu.' },
        { title: 'Podpis i odbiór', duration: '1 dzień', desc: 'U notariusza lub ze świadkiem. Klucze, foto-protokół, liczniki. Po 30 dniach - meldunek.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy (najem)',
      subtitle: 'Minimum. Premium - ZUS RMUA dodatkowo.',
      items: [
        'Paszport + kopia (PESEL jeśli jest)',
        'Dokument legalnego pobytu',
        'Umowa o pracę lub KRS firmy',
        'Wyciągi z konta lub PIT-37 - 3 mies.',
        'Kontakty poprzednich właścicieli (referencje)',
        'Kaucja (1-2 czynsze) i przedpłata 1 mies.',
        'Lista członków rodziny do meldunku',
        'Pełnomocnictwo dla LegalWin'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Najem - stała cena. Zakup - % od transakcji.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · brief' },
        { label: 'Dobór najmu', value: 'od 1 200 PLN', note: '7-21 dni · 5-8 obiektów · umowa' },
        { label: 'Zakup mieszkania', value: '1,5-2,5%', note: 'Wartości · pełen cykl' },
        { label: 'MSWiA dla spoza UE', value: 'od 2 800 PLN', note: 'Dodatkowo' }
      ],
      note: 'Najem: honorarium stałe. Zakup: % od transakcji, min. 6 000 PLN. PCC-2% i notariusz (1-1,5%) - osobno wg taryf.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Kodeks cywilny (art. 659-692 najem; art. 535-581 sprzedaż)',
        'Ustawa z 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Ustawa z 21 czerwca 2001 r. o ochronie praw lokatorów',
        'Ustawa z 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Rozporządzenie MSWiA ws. zezwoleń na nabywanie nieruchomości'
      ]
    },
    faq: [
      { q: 'Realny czynsz w Warszawie 2026?', a: 'Kawalerka centrum (Śródmieście, Wola) - 2 800-4 200 PLN/mies. + opłaty 400-800. 2-pok Mokotów/Ursynów - 4 500-6 500 + opłaty. 3-pok Wilanów/Bemowo - 6 000-9 000 + opłaty. Bez mediów (~150-300 prąd, 80-200 gaz, 70 internet).' },
      { q: 'Czym jest opłata administracyjna?', a: 'Opłata wspólnocie/spółdzielni za schody, windę, sprzątanie, śmieci. 8-15 PLN/m². 60 m² - 500-900 PLN/mies. ponad czynsz. Wyjaśniamy z góry.' },
      { q: 'Najem bez pracy w Polsce?', a: 'Trudno. 70% właścicieli wymaga umowy o pracę lub 6+ czynszów. Alternatywy: 6-12 mies. z góry, poręczyciel, podwyższona kaucja (3×), agenci dla expatów.' },
      { q: 'Meldunek - jak negocjować?', a: 'Z mocy prawa meldunek to obowiązek najemcy. Wpisujemy klauzulę "z prawem do zameldowania" - rozwiązuje 90% sporów. Upór właściciela = inny obiekt.' },
      { q: 'Jak unikać oszustw?', a: 'Nigdy nie płacimy bez oględzin. KW online za 14 PLN - widzimy właściciela. Inne nazwisko / zajęcie / hipoteka 80% - odpadamy.' },
      { q: 'Realny koszt zakupu 60 m² w WAW?', a: '2026: Mokotów - 850 000-1 200 000 PLN, centrum - 1 100 000-1 500 000. + 2% PCC + 1-1,5% notariusz + 0,5% wpis KW + 1,5-2,5% nasze = 5-7% na stronę kupującego. Remont 2 000-4 000 PLN/m².' },
      { q: 'MSWiA dla spoza UE?', a: 'Mieszkanie w mieście - nie. Dom/działka >0,4 ha - tak. Komercja pozamiejska - tak. Termin 60-90 dni, opłata 1 570 PLN. Pod klucz 2 800 PLN naszych.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Mieszkanie w 7-21 dni',
    ctaSubtitle: 'Bezpłatna konsultacja: brief, lista 3-5 topów w 48 h. Dobór i negocjacje - 7-21 dni.'
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
      { label: 'Tenancy lead time', value: '7-21 days', note: 'standard · purchase up to 90 days' },
      { label: 'Tenancy fee', value: 'from 1,200 PLN', note: 'or 0.5 monthly rent' },
      { label: 'Purchase fee', value: '1.5-2.5%', note: 'of transaction value' },
      { label: 'Cities', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 largest cities' }
    ],
    grounds: {
      title: 'What we source',
      subtitle: 'From a studio for a single dev to a 250 m² family house.',
      items: [
        { title: 'Long-term tenancy 12+ months', desc: 'Studios in Warsaw centre (from 2,800 PLN), 2-rooms in Mokotów (from 4,200), family 3-rooms in Wilanów (from 5,500). With meldunek.' },
        { title: 'Short-term 1-6 months', desc: 'Apartments with cleaning, linen, kitchen - bridge first 1-3 months. From 4,500 PLN/month in Warsaw.' },
        { title: 'Apartment purchase', desc: 'KW-based selection, due diligence, negotiation, notary, registry. 1.5-2.5% fee.' },
        { title: 'House or land purchase', desc: 'Turnkey: search, surveyor, zoning plan, MSWiA permit for non-EU, deal. From 2.0%.' },
        { title: 'Non-EU buyer purchase', desc: 'MSWiA permit required for non-urban property. Full cycle from 2,800 PLN extra.' },
        { title: 'Commercial property', desc: 'Office, shop, warehouse, restaurant - for Sp. z o.o. VAT, zoning, tenants.' },
        { title: 'Student dorms', desc: 'Akademik / private dorm for accredited-university students - 800-1,800 PLN/month. Book 2-3 months ahead.' },
        { title: 'Business address', desc: 'Legal address for KRS / CEIDG - from 250 PLN/month. No residency.' }
      ]
    },
    timeline: {
      title: 'How tenancy search runs',
      subtitle: 'Standard 7-21 days. Purchase - 30-90 days.',
      steps: [
        { title: 'Brief', duration: '30 min', desc: 'Budget, location, size, requirements, meldunek, pets.' },
        { title: 'Sourcing', duration: '3-7 days', desc: 'Otodom, Domiporta, Olx, owner contacts - 5-8 top options after filtering 90%.' },
        { title: 'Viewings', duration: '1-3 days', desc: '5-8 viewings in 1-3 days. State, lifts, acoustics, heating.' },
        { title: 'Negotiation', duration: '1-3 days', desc: 'Pricing arguments: photos, time on market. Typically -5-15%.' },
        { title: 'KW & ownership check', duration: '1 day', desc: 'Online KW for 14 PLN - owner, encumbrances, mortgage. BIK on owner.' },
        { title: 'Tenancy contract', duration: '1-2 days', desc: 'Adapt template: meldunek, CPI, deposit, sublet for teams.' },
        { title: 'Signing & move-in', duration: '1 day', desc: 'Notary or witnessed. Keys, photo protocol, meter readings. Meldunek within 30 days.' }
      ]
    },
    documents: {
      title: 'What we need (tenancy)',
      subtitle: 'Minimum. Premium - ZUS RMUA additionally.',
      items: [
        'Passport + copy (PESEL if any)',
        'Legal-stay document',
        'Work contract or own KRS',
        '3-month bank statements or PIT-37',
        'Previous-landlord references',
        'Deposit (1-2 rents) + 1-month prepay',
        'Family/roommate list for meldunek',
        'Power of attorney for LegalWin negotiations'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Tenancy - fixed price. Purchase - % of transaction.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · brief' },
        { label: 'Tenancy search', value: 'from 1,200 PLN', note: '7-21 days · 5-8 properties · contract' },
        { label: 'Apartment purchase', value: '1.5-2.5%', note: 'Of transaction · full cycle' },
        { label: 'Non-EU MSWiA permit', value: 'from 2,800 PLN', note: 'In addition to purchase' }
      ],
      note: 'Tenancy fee fixed regardless of rent. Purchase: % of transaction, min 6,000 PLN. PCC 2% and notary (1-1.5%) at official rates.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Civil Code (Art. 659-692 - tenancy; 535-581 - sale)',
        'Act of 24 March 1920 on the acquisition of real estate by foreigners',
        'Tenant Protection Act of 21 June 2001',
        'Land Register and Mortgage Act of 6 July 1982',
        'MSWiA Regulation on permits for foreigners'
      ]
    },
    faq: [
      { q: 'Real Warsaw rent in 2026?', a: 'Studio in Śródmieście/Wola - 2,800-4,200 PLN + 400-800 fees. 2-room Mokotów/Ursynów - 4,500-6,500 + fees. 3-room Wilanów/Bemowo - 6,000-9,000 + fees. Plus utilities (~150-300 PLN electricity, 80-200 gas, 70 internet).' },
      { q: 'What is the admin fee?', a: 'Cooperative/HOA fee for stairs, lift, cleaning, waste - 8-15 PLN/m². A 60 m² flat - 500-900 PLN/month on top of rent. We always disclose upfront.' },
      { q: 'Tenancy without a Polish job?', a: 'Hard. 70% of owners want a work contract or 6+ months of rent prepay. Alternatives: 6-12 months upfront, Polish guarantor, higher deposit (3 rents), expat-friendly agents.' },
      { q: 'Meldunek negotiation?', a: 'By Polish law, meldunek is the tenant\'s obligation. We add a "with right to register" clause - solves 90% of disputes. If the owner refuses - different property.' },
      { q: 'Avoiding scams?', a: 'Never pay before viewing. KW online for 14 PLN reveals real owner. Different name / arrest / 80% mortgage - we walk away.' },
      { q: 'Real cost to buy 60 m² in Warsaw?', a: '2026: Mokotów - 850,000-1,200,000 PLN, centre - 1,100,000-1,500,000. + 2% PCC + 1-1.5% notary + 0.5% KW entry + 1.5-2.5% our fee = 5-7% buyer-side. Renovation 2,000-4,000 PLN/m².' },
      { q: 'MSWiA for non-EU buyers?', a: 'Urban apartment - no. House or land >0.4 ha - yes. Non-urban commercial - yes. 60-90 days, 1,570 PLN MSWiA fee. Turnkey for 2,800 PLN of our fee.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Housing in 7-21 days',
    ctaSubtitle: 'Free consultation: brief and a 3-5 top-options list within 48h. Full sourcing and negotiation - 7-21 days.'
  },
  tr: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Najem · Zakup · Krajowy Rejestr Zadłużonych',
    title: 'Konut arama',
    subtitle: 'Uzun süreli kira ve satın alma - daireden müstakil eve',
    lead: 'Polonya\'da yabancı için konut araması mayın tarlasıdır: meldunek\'siz kira, gri sözleşmeler, mülk sahibinin daireyi geri alamama (okupacja) riski, gizli 800 PLN/ay\'lık czynsz administracyjny, kredi geçmişine dayalı redler. LegalWin bütçenize ve ihtiyacınıza uygun konutu seçer, księga wieczysta\'yı ve takyidatı kontrol eder, Lehçe görüşmeleri yürütür, alımda noter sürecine eşlik eder. Müvekkillerimizin yaşadığı 5 büyük şehirde - Varşova, Wrocław, Krakov, Gdansk, Poznań - çalışıyoruz.',
    facts: [
      { label: 'Seçim süresi', value: '7-21 gün', note: 'kira · standart · alım 90 güne kadar' },
      { label: 'Kira hizmet bedeli', value: '1.200 PLN\'den', note: 'veya 0,5 czynszu' },
      { label: 'Alım hizmet bedeli', value: '%1,5-2,5', note: 'işlem değerinden' },
      { label: 'Şehirler', value: 'WAW · WRO · KRK · GDN · POZ', note: 'Polonya\'nın en büyük 5 şehri' }
    ],
    grounds: {
      title: 'Hangi konutu seçiyoruz',
      subtitle: 'Tek kişilik BT uzmanı stüdyosundan çocuklu aile için 250 m² eve.',
      items: [
        { title: 'Uzun süreli kira (12+ ay)', desc: 'Varşova merkezde stüdyolar (2.800 PLN\'den), Mokotów\'da 2 odalı (4.200 PLN\'den), Wilanów / Bemowo\'da 3 odalı aile dairesi (5.500 PLN\'den). Meldunek hakkıyla.' },
        { title: 'Kısa süreli - 1 ila 6 ay', desc: 'Apartmenty: temizlik, çamaşır servisi, hazır mutfaklı - uzun süreli daire ararken ilk 1-3 ay için. Varşova\'da 4.500 PLN/aydan.' },
        { title: 'Daire alımı', desc: 'Księga wieczysta\'ya göre seçim, due diligence, satıcıyla müzakere, noter, KW. Bedel %1,5-2,5.' },
        { title: 'Müstakil ev veya arsa alımı', desc: 'Anahtar teslim: seçim, geodeta, plan miejscowy kontrolü, AB dışı vatandaşlar için MSWiA izni, akit. %2,0\'den.' },
        { title: 'AB dışı yabancılar için alım', desc: 'AB dışı alıcıların şehir dışı gayrimenkul alımı için zezwolenie MSWiA zorunludur. İzinle birlikte tam döngü 2.800 PLN\'den ek.' },
        { title: 'Ticari gayrimenkul', desc: 'Sp. z o.o. için ofis, mağaza, depo, restoran. VAT, plan zagospodarowania ve mevcut kiracı sözleşmeleri dikkate alınır.' },
        { title: 'Öğrenci yurdu', desc: 'Akademik / özel dormitorium - akredite üniversite öğrencileri için aylık 800-1.800 PLN. Akademik yıl başlangıcından 2-3 ay önce kayıt.' },
        { title: 'İş yeri için adres', desc: 'KRS / CEIDG için yasal adres - aylık 250 PLN\'den. İkamet olmadan. Sp. z o.o., JDG ve temsilcilikler için.' }
      ]
    },
    timeline: {
      title: 'Kira süreci',
      subtitle: 'Standart döngü 7-21 gün. Alım için 30-90 gün.',
      steps: [
        { title: 'Brif', duration: '30 dk', desc: 'Bütçe, lokasyon, alan, özellikler (balkon, otopark, mobilyalı / boş mu), meldunek, evcil hayvan.' },
        { title: 'Obje seçimi', duration: '3-7 gün', desc: 'Otodom, Domiporta, Olx ve doğrudan mülk sahipleriyle iletişim. Uygunsuzun %90\'ını eler, en iyi 5-8 seçeneği listeleriz.' },
        { title: 'Görüntülemeler', duration: '1-3 gün', desc: '1-3 günde 5-8 görüntüleme yapıyoruz. Acentemiz dairenin durumunu, asansör, ses yalıtımı ve ısıtmayı kontrol eder.' },
        { title: 'Mülk sahibiyle müzakere', duration: '1-3 gün', desc: 'Fiyat indirimi için gerekçe sunuyoruz (kötü fotoğraflar, uzun ilanda kalma, soğuyan piyasa). Ortalama %5-15 indirim sağlıyoruz.' },
        { title: 'KW ve mülkiyet kontrolü', duration: '1 gün', desc: 'Çevrimiçi księga wieczysta - mülk sahibi, takyidat, ipotek, rakip kira sözleşmeleri. Mülk sahibinden BIK zaświadczenie.' },
        { title: 'Kira sözleşmesi', duration: '1-2 gün', desc: 'Standart sözleşmeyi uyarlıyoruz: meldunek hakkı maddesi, czynsz artış koşulları (CPI), kauzja iadesi, ekip için subleasing imkanı.' },
        { title: 'İmza ve yerleşim', duration: '1 gün', desc: 'Premium opsiyonda noter, normalde tanık huzurunda. Anahtar teslim, foto-protokol, sayaç ölçümleri. 30 gün içinde meldunek yapılır.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler (kira)',
      subtitle: 'Çoğu mülk sahibi için asgari paket. Premium objeler ZUS RMUA\'yı ek olarak ister.',
      items: [
        'Pasaport + kopyası (varsa PESEL)',
        'Yasal ikamet belgesi (vize, karta pobytu)',
        'İş kanıtı - umowa o pracę veya kendi şirketinizin KRS\'i',
        '3 aylık gelir - banka ekstresi veya PIT-37',
        'Önceki kiraya verenlerin iletişim bilgileri (referans için)',
        'Kauzja tutarı (1-2 czynsz) ve 1 aylık ön ödeme',
        'Wniosek o zameldowanie için aile / oda arkadaşı listesi',
        'Müzakere için LegalWin\'e vekaletname'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Kirada sabit ücret. Alımda işlemden % alıyoruz.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · brif' },
        { label: 'Kira seçimi', value: '1.200 PLN\'den', note: '7-21 gün · 5-8 obje · sözleşme' },
        { label: 'Daire alımı', value: '%1,5-2,5', note: 'Değerinden · tam döngü' },
        { label: 'AB dışı için MSWiA', value: '2.800 PLN\'den', note: 'Alıma ek' }
      ],
      note: 'Kira: bedel sabittir, czynsz tutarına bağlı değildir. Alım: işlemden yüzde, asgari 6.000 PLN. PCC %2 ve noter (%1-1,5) tarifeye göre ayrı, biz almıyoruz.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Kodeks cywilny (madde 659-692 najem; madde 535-581 sprzedaż)',
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów (Kiracı Hakları Kanunu)',
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Yabancı gayrimenkul izinleri hakkında MSWiA yönetmeliği'
      ]
    },
    faq: [
      { q: '2026\'da Varşova\'da kira gerçekten ne kadar?', a: 'Merkezde (Śródmieście, Wola) stüdyo - 2.800-4.200 PLN/ay + opłaty (yan giderler) 400-800 PLN. Mokotów / Ursynów\'da 2 odalı - 4.500-6.500 PLN + opłaty. Wilanów / Bemowo\'da 3 odalı aile dairesi - 6.000-9.000 PLN + opłaty. Bu rakamlar mediach (medya - elektrik ~150-300 PLN, gaz ~80-200 PLN, internet ~70 PLN) hariçtir.' },
      { q: 'Opłata administracyjna nedir, neden ayrı?', a: 'Opłata administracyjna - kooperatif veya wspólnota mieszkaniowa\'ya (kat malikleri kuruluşuna) merdiven, asansör, kapıcı, çöp toplama hizmetleri için ödenen bedeldir. Genelde m² başına 8-15 PLN. 60 m²\'lik dairede czynsz\'in üstüne aylık 500-900 PLN\'dir. Birçok ilan "czynsz 4.500 PLN" yazıp opłata\'yı gizler. Önceden açıklığa kavuşturuyoruz.' },
      { q: 'Polonya\'da işim olmadan kira tutabilir miyim?', a: 'Zordur. Mülk sahiplerinin %70\'i umowa o pracę veya 6+ aylık kira tutarında banka ekstresi ister. Alternatifler: 6-12 ay peşin ödeme, Polonyalı kefil, yüksek depozit (3 czynsz) veya yabancılara odaklı acentelerle çalışmak. Üç yöntem de yapılır.' },
      { q: 'Meldunek konusunda mülk sahipleri itiraz ediyor, ne yapmalı?', a: 'Polonya hukuku gereği meldunek kiracının yükümlülüğüdür ve mülk sahibi yasal gerekçe olmadan reddedemez. Sözleşmeye baştan "z prawem do zameldowania" (meldunek hakkıyla) maddesi koyuyoruz - %90 anlaşmazlığı çözer. Mülk sahibi diretirse - başka obje arıyoruz.' },
      { q: 'Sahte ilan dolandırıcılığından nasıl korunulur?', a: 'Şahsen görüntülemeden hiçbir ödeme yapmayız. Księga wieczysta\'yı kontrol ediyoruz - kamuya açık sicil, gerçek mülk sahibi 14 PLN\'ye görülebilir. KW\'de farklı soyad varsa, obje haciz altındaysa veya hipoteka değerin %80\'iyse - vazgeçiyoruz.' },
      { q: 'Varşova\'da 60 m² daire almak gerçekten ne tutar?', a: '2026: Mokotów\'da 60 m² - 850.000-1.200.000 PLN, merkezde - 1.100.000-1.500.000 PLN. Fiyata + %2 PCC + %1-1,5 noter + %0,5 KW wpis + %1,5-2,5 danışmanlık ücretimiz = alıcı tarafında %5-7. Plus tadilat m² başına 2.000-4.000 PLN.' },
      { q: 'AB dışı alıcı için MSWiA izni gerekli mi?', a: 'Şehirde daire için - hayır. Müstakil ev, yazlık, 0,4 ha üzeri arsa için - evet. Şehir dışı ticari gayrimenkulde de - evet. Zezwolenie verilme süresi 60-90 gün, MSWiA harcı 1.570 PLN. Anahtar teslim 2.800 PLN danışmanlık + resmi harç.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Konutu 7-21 günde buluyoruz',
    ctaSubtitle: 'Ücretsiz danışmanlık: ihtiyaç ve bütçenizi dinler, 48 saat içinde 3-5 en iyi seçeneği listeleriz. Seçim ve müzakere 7-21 gün.'
  },
  uk: {
    slug: 'wyszukiwanie-mieszkania',
    group: 'relocation',
    icon: 'home',
    badge: 'Najem · Zakup · Krajowy Rejestr Zadłużonych',
    title: 'Пошук житла',
    subtitle: 'Довгострокова оренда та купівля — від квартири до будинку',
    lead: 'Пошук житла в Польщі для іноземця — мінне поле: оренда без meldunku, сірі контракти, ризик okupacji («захоплення» власника), приховані czynsz administracyjny по 800 PLN/міс, відмови за кредитну історію. LegalWin підбирає житло під ваш бюджет і потреби, перевіряє księgę wieczystą та обтяження, веде переговори польською, супроводжує в нотаріуса при купівлі. Працюємо у Warszawa, Wrocław, Krakow, Gdansk, Poznań — містах, де живуть наші клієнти.',
    facts: [
      { label: 'Термін добору', value: '7–21 день', note: 'оренда · standard · купівля до 90 днів' },
      { label: 'Гонорар (оренда)', value: 'від 1 200 PLN', note: 'або 0,5 czynszu' },
      { label: 'Гонорар (купівля)', value: '1,5–2,5%', note: 'від вартості угоди' },
      { label: 'Міста', value: 'WAW · WRO · KRK · GDN · POZ', note: '5 найбільших міст Польщі' }
    ],
    grounds: {
      title: 'Яке житло підбираємо',
      subtitle: 'Від студії для одного айтівця до будинку 250 м² для сім’ї з дітьми.',
      items: [
        { title: 'Довгострокова оренда (12+ міс.)', desc: 'Студії в центрі Warszawa (від 2 800 PLN), 2-кімнатні на Mokotów (від 4 200 PLN), сімейні 3-к у Wilanów / Bemowo (від 5 500 PLN). З meldunkiem.' },
        { title: 'Короткострокова — від 1 до 6 міс.', desc: 'Apartamenty з прибиранням, білизною, готовою кухнею — для перших 1–3 місяців, поки шукаєте довгострокове. Від 4 500 PLN/міс. у Warszawa.' },
        { title: 'Купівля квартири', desc: 'Підбір за księgą wieczystą, due diligence, переговори з продавцем, нотаріус, KW. Гонорар 1,5–2,5% від угоди.' },
        { title: 'Купівля будинку або ділянки', desc: 'Під ключ: добір, geodeta, перевірка plan miejscowy, MSWiA-дозвіл для не-ЄС, угода. Від 2,0% від вартості.' },
        { title: 'Купівля для іноземця не-ЄС', desc: 'Із zezwolenie MSWiA — обов’язково для не-ЄС покупців неміської нерухомості. Повний цикл із дозволом — від 2 800 PLN додатково.' },
        { title: 'Комерційна нерухомість', desc: 'Офіс, магазин, склад, ресторан — для Sp. z o.o. З урахуванням VAT, plan zagospodarowania, договорів з najemcami.' },
        { title: 'Студентський гуртожиток', desc: 'Akademik / prywatne dormitorium для студентів акредитованих вишів — 800–1 800 PLN/міс. Записують за 2–3 міс. до початку року.' },
        { title: 'Житло з адресою dla biznesu', desc: 'Юридична адреса для KRS / CEIDG — від 250 PLN/міс. Без проживання. Для Sp. z o.o., JDG, представництва.' }
      ]
    },
    timeline: {
      title: 'Як ми підбираємо оренду',
      subtitle: 'Стандартний цикл — 7–21 день. Для купівлі — 30–90 днів.',
      steps: [
        { title: 'Бриф', duration: '30 хв', desc: 'Бюджет, локація, розмір, особливості (балкон, парковка, mieszkanie z meblami або bez), meldunek, домашні тварини.' },
        { title: 'Добір об’єктів', duration: '3–7 днів', desc: 'Перевіряємо Otodom, Domiporta, Olx, прямі контакти власників — відсіюємо 90% невідповідного, відбираємо 5–8 топ-варіантів.' },
        { title: 'Перегляди', duration: '1–3 дні', desc: 'Супроводжуємо на 5–8 переглядах за 1–3 дні. Наш агент перевіряє стан квартири, ліфти, шумоізоляцію, опалення.' },
        { title: 'Переговори з власником', duration: '1–3 дні', desc: 'Аргументуємо зниження ціни (погані фото, давно висить, ринок охолов). Знижуємо 5–15% від ціни оголошення в середньому.' },
        { title: 'Перевірка KW і власності', duration: '1 день', desc: 'księga wieczysta онлайн — власник, обтяження, hipoteka, оренда від konkurencji. Робимо zaświadczenie z BIK від власника.' },
        { title: 'Договір оренди', duration: '1–2 дні', desc: 'Адаптуємо typowy договір: meldunek у пунктах, умови підвищення czynszu (CPI), zwrot kaucji, можливість суборенди для команди.' },
        { title: 'Підписання та заселення', duration: '1 день', desc: 'У нотаріуса (для преміум) або просто зі свідком. Передача ключів, фотопротокол, заміри лічильників. Через 30 днів — meldunek.' }
      ]
    },
    documents: {
      title: 'Що потрібно від вас (оренда)',
      subtitle: 'Мінімум для більшості власників. Преміум-об’єкти — ZUS RMUA додатково.',
      items: [
        'Паспорт + копія (PESEL, якщо є)',
        'Документ легального перебування (віза, karta pobytu)',
        'Підтвердження роботи — umowa o pracę або KRS своєї фірми',
        'Дохід за 3 місяці — виписки рахунку або PIT-37',
        'Контакти попередніх орендодавців (для referencji)',
        'Сума kaucji (1–2 czynszu) та передоплата за 1 міс.',
        'Список членів сім’ї / сусідів для wniosku o zameldowanie',
        'Довіреність на LegalWin для ведення переговорів'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Оренда — фіксована ціна. Купівля — % від угоди.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30 хвилин · бриф' },
        { label: 'Добір оренди', value: 'від 1 200 PLN', note: '7–21 день · 5–8 об’єктів · договір' },
        { label: 'Купівля квартири', value: '1,5–2,5%', note: 'Від вартості · повний цикл' },
        { label: 'MSWiA для не-ЄС покупців', value: 'від 2 800 PLN', note: 'Додатково до купівлі' }
      ],
      note: 'Оренда: гонорар фіксований, не залежить від розміру czynszu. Купівля: відсоток від транзакції, мінімум 6 000 PLN. PCC-2% та нотаріус (1–1,5%) — окремо за тарифами, не наші.'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Kodeks cywilny (art. 659–692 — najem; art. 535–581 — sprzedaż)',
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Ustawa z dnia 21 czerwca 2001 r. o ochronie praw lokatorów',
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Rozporządzenie MSWiA w sprawie zezwoleń na nabywanie nieruchomości (cudzoziemcy)'
      ]
    },
    faq: [
      { q: 'Скільки реально коштує оренда у Варшаві у 2026?', a: 'Студія в центрі (Śródmieście, Wola) — 2 800–4 200 PLN/міс. + opłaty 400–800 PLN. 2-кімнатна на Mokotów / Ursynów — 4 500–6 500 PLN + opłaty. Сімейна 3-к у Wilanów / Bemowo — 6 000–9 000 PLN + opłaty. Це без mediach (електрика ~150–300 PLN, газ ~80–200, інтернет ~70).' },
      { q: 'Що таке opłata administracyjna і чому її окремо?', a: 'Opłata administracyjna (адміністративний збір) — плата кооперативу або wspólnocie (товариству власників) за сходи, ліфт, прибиральника, сміття. Зазвичай 8–15 PLN/м². У 60-метровій квартирі — 500–900 PLN/міс. поверх czynszu (орендної плати). Багато договорів пишуть «czynsz 4 500 PLN», приховуючи, що opłata — extra. Ми це завжди з’ясовуємо заздалегідь.' },
      { q: 'Чи можна орендувати без роботи в Польщі?', a: 'Складно. 70% власників вимагають umowę o pracę (трудовий договір) або виписки рахунку на 6+ czynszów (орендних платежів) вперед. Альтернативи: пряма оплата 6–12 міс. вперед, поручитель із Польщі, підвищена kaucja (застава, 3 czynszu), або робота з агентами, що спеціалізуються на експатах. Робимо всі три варіанти.' },
      { q: 'Що робити з meldunkiem — власники його не люблять?', a: 'За польським правом meldunek (реєстрація) — обов’язок орендаря, і власник не може відмовляти без законних підстав. Включаємо пункт «z prawem do zameldowania» (із правом на реєстрацію) у договір від старту — це вирішує 90% спорів. Якщо власник упирається — шукаємо інший об’єкт.' },
      { q: 'Як уникнути «афери» з фейковими оголошеннями?', a: 'Ніколи не платимо без особистого перегляду. Перевіряємо księgę wieczystą (поземельну книгу) — це публічний реєстр, бачимо реального власника за 14 PLN. Якщо в KW інше прізвище, або об’єкт позначено як arrest (арешт), або є hipoteka (іпотека) на 80% вартості — відмовляємося.' },
      { q: 'Скільки фактично коштує купити квартиру 60 м² у Варшаві?', a: '2026 рік: 60 м² на Mokotów — 850 000–1 200 000 PLN, центр — 1 100 000–1 500 000 PLN. До ціни + 2% PCC + 1–1,5% нотаріус + 0,5% wpisu w KW + 1,5–2,5% наш гонорар = 5–7% до ціни об’єкта на сторону покупця. Плюс ремонт 2 000–4 000 PLN/м².' },
      { q: 'Чи потрібен дозвіл MSWiA для не-ЄС покупця?', a: 'Для квартири в місті — ні. Для будинку, дачі, ділянки понад 0,4 га — так. Також для комерційної нерухомості поза містом. Термін видачі zezwolenia — 60–90 днів, гонорар MSWiA — 1 570 PLN. Робимо під ключ за 2 800 PLN наших + держмито.' }
    ],
    related: ['odbior-z-lotniska', 'meldunek', 'pesel'],
    ctaTitle: 'Знайдемо житло за 7–21 день',
    ctaSubtitle: 'Безкоштовна консультація: брифуємо ваші потреби та бюджет, дамо список 3–5 топ-варіантів протягом 48 годин. Добір і переговори — 7–21 день.'
  }
};

export default wyszukiwanieMieszkania;
