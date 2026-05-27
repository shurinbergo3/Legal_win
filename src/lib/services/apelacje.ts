import type { ServiceEntry } from './types';

const apelacje: ServiceEntry = {
  ru: {
    slug: 'apelacje',
    group: 'immigration',
    icon: 'gavel',
    badge: '14 + 30 + 30 дней',
    title: 'Апелляции и суды',
    subtitle: 'Обжалование решений Urzędu do Spraw Cudzoziemców',
    lead: 'Отказ - не конец. У вас есть три инстанции: odwołanie к начальнику UdSC, skarga в Wojewódzki Sąd Administracyjny, и skarga kasacyjna в Naczelny Sąd Administracyjny. Пропуск срока - смерть дела.',
    facts: [
      { label: 'Odwołanie', value: '14 дней', note: 'от получения решения' },
      { label: 'Skarga в WSA', value: '30 дней', note: 'от решения II инстанции' },
      { label: 'Skarga kasacyjna', value: '30 дней', note: 'в Naczelny Sąd Administracyjny' },
      { label: 'Госпошлина', value: 'от 200 PLN', note: 'WSA (можно просить zwolnienie)' }
    ],
    grounds: {
      title: 'Какие решения обжалуем',
      items: [
        { title: 'Отказ в ВНЖ / ПМЖ', desc: 'Самая частая категория. Отказы за «несоответствие цели», «недостаточный доход», «неполный пакет», «нарушения».' },
        { title: 'Отказ в гражданстве', desc: 'Решения воеводы (uznanie) или Президента (nadanie - не оспаривается, но можно повторно).' },
        { title: 'Отказ в международной защите', desc: 'Odwołanie к Radzie do Spraw Uchodźców, далее WSA, NSA.' },
        { title: 'Аннулирование карты', desc: 'Urząd вправе отменить ВНЖ/ПМЖ за нарушения. Срочно обжалуем.' },
        { title: 'Решение о депортации', desc: 'Zobowiązanie do powrotu. Ogranicza wjazd в ЕС на годы - обжалование критично.' },
        { title: 'Запрет въезда (SIS)', desc: 'Внесение в Schengen Information System. Обжалование - сложная процедура, но возможная.' }
      ]
    },
    timeline: {
      title: 'Порядок обжалования',
      steps: [
        { title: 'Получение решения', duration: 'день 0', desc: 'Решение приходит через eDoręczenia. Срок отсчёта - с момента доставки. Не проглядите!' },
        { title: 'Экспресс-анализ', duration: '1-3 дня', desc: 'Разбираем обоснование отказа, ищем ошибки права и фактов, собираем новые доказательства.' },
        { title: 'Odwołanie', duration: 'день 3-14', desc: 'Подаём жалобу через тот же орган, что выдал решение. Он перенаправит в II инстанцию.' },
        { title: 'Рассмотрение в II инстанции', duration: '1-3 мес', desc: 'Szef UdSC (или Rada ds. Uchodźców) выносит новое решение или оставляет в силе.' },
        { title: 'Skarga в WSA', duration: 'день +30', desc: 'Если II инстанция отказала - 30 дней на суд. Рассмотрение - 6-18 мес.' },
        { title: 'Kasacja в NSA', duration: '30 дней от WSA', desc: 'Последняя инстанция. Рассматривает нарушения материального или процессуального права.' }
      ]
    },
    documents: {
      title: 'Что нужно для апелляции',
      items: [
        'Оригинал оспариваемого решения',
        'Все документы первичного дела (копии заявления, приложений, запросов)',
        'Доказательства ошибок в решении (новые документы, экспертные мнения)',
        'Переписка с органом (в том числе через eDoręczenia)',
        'Подтверждение уплаты opłaty за skargę (200 PLN для WSA) - или wniosek o zwolnienie',
        'Доверенность на представителя (если ведёт наш специалист)'
      ]
    },
    pricing: {
      title: 'Стоимость',
      items: [
        { label: 'Экспресс-анализ решения', value: '500 PLN', note: 'Оцениваем шансы за 48 часов. Зачитывается в стоимость, если возьмётесь за ведение.' },
        { label: 'Odwołanie (II инстанция)', value: 'от 1 800 PLN', note: 'Подготовка + подача' },
        { label: 'Skarga в WSA', value: 'от 3 500 PLN', note: 'Полное представительство в суде' },
        { label: 'Skarga kasacyjna в NSA', value: 'от 4 500 PLN', note: 'Только для сложных случаев' }
      ],
      note: 'При выигрыше в WSA сторона ответчика обязана возместить часть судебных расходов (zwrot kosztów postępowania).'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 14 czerwca 1960 r. - Kodeks postępowania administracyjnego',
        'Ustawa z dnia 30 sierpnia 2002 r. - Prawo o postępowaniu przed sądami administracyjnymi',
        'Ustawa o cudzoziemcach - art. 156 (odwołania)',
        'Dyrektywa 2013/32/UE - art. 46 (право на эффективное средство защиты)'
      ]
    },
    faq: [
      { q: 'Что будет, если пропустить срок на odwołanie?', a: '14 дней от получения decyzji (решения) - жёсткий срок. Пропуск = решение вступает в силу, дело закрыто. Восстановление срока возможно только в исключительных случаях (болезнь, форс-мажор с доказательствами) через wniosek o przywrócenie terminu (заявление о восстановлении срока).' },
      { q: 'Могу ли я находиться в Польше во время apelacji?', a: 'Да. На срок рассмотрения odwołania (апелляции) ваше пребывание легализуется - решение не вступает в силу. Но если второе решение негативное, а вы подаёте skargę (жалобу) в WSA (Воеводский административный суд), пребывание уже не легализуется автоматически - нужно добиваться wstrzymania wykonania decyzji (приостановки исполнения решения).' },
      { q: 'Шансы на успех?', a: 'В делах ВНЖ/ПМЖ - около 30-40% при odwołaniu (апелляции), 15-25% в WSA (Воеводский административный суд). Гораздо выше, когда отказ содержит конкретные ошибки (нарушение процедуры, неверная интерпретация нормы, игнорирование доказательств). Мы берём только те дела, где шансы реальны.' },
      { q: 'Сколько длится весь путь до NSA?', a: 'В сумме 1,5-3 года. Odwołanie (апелляция) - до 3 мес, WSA (Воеводский админсуд) - 6-18 мес, NSA (Высший админсуд) - 12-24 мес. В 80% случаев дело решается в одной из первых двух инстанций.' },
      { q: 'Можно ли подать повторное заявление вместо обжалования?', a: 'Да, но это другая процедура. Если отказ содержит фактические ошибки (вы их выявили) - apelacja (апелляция) эффективнее. Если изменились обстоятельства (новая работа, брак) - проще подать заново.' },
      { q: 'Помогает ли apelacja при решении о депортации?', a: 'Критично важна. В течение срока обжалования депортация приостанавливается. Мы специализируемся на срочных делах - можем подать за 24 часа.' }
    ],
    related: ['karta-pobytu', 'ochrona-miedzynarodowa', 'obywatelstwo'],
    ctaTitle: 'Получили отказ - звоните сегодня',
    ctaSubtitle: 'Каждый день близит дедлайн. За 48 часов оценим решение и дадим реалистичный прогноз по шансам в инстанциях.'
  },
  pl: {
    slug: 'apelacje',
    group: 'immigration',
    icon: 'gavel',
    badge: '14 + 30 + 30 dni',
    title: 'Apelacje i sądy',
    subtitle: 'Zaskarżanie decyzji Urzędu do Spraw Cudzoziemców',
    lead: 'Odmowa to nie koniec. Są trzy instancje: odwołanie do Szefa UdSC, skarga do WSA i skarga kasacyjna do NSA. Przekroczenie terminu kończy sprawę.',
    facts: [
      { label: 'Odwołanie', value: '14 dni', note: 'od doręczenia decyzji' },
      { label: 'Skarga do WSA', value: '30 dni', note: 'od decyzji II instancji' },
      { label: 'Skarga kasacyjna', value: '30 dni', note: 'do NSA' },
      { label: 'Opłata sądowa', value: 'od 200 PLN', note: 'WSA (możliwe zwolnienie)' }
    ],
    grounds: {
      title: 'Jakie decyzje zaskarżamy',
      items: [
        { title: 'Odmowa TRC / PR', desc: 'Najczęstsza kategoria. „Niezgodność z celem", „niewystarczający dochód", „niepełny pakiet", „naruszenia".' },
        { title: 'Odmowa obywatelstwa', desc: 'Decyzje wojewody (uznanie) lub Prezydenta (nadanie - nie podlega zaskarżeniu, ale można wnioskować ponownie).' },
        { title: 'Odmowa ochrony międzynarodowej', desc: 'Odwołanie do Rady ds. Uchodźców, dalej WSA, NSA.' },
        { title: 'Unieważnienie karty', desc: 'UdSC może uchylić TRC/PR za naruszenia. Pilne odwołanie.' },
        { title: 'Zobowiązanie do powrotu', desc: 'Ogranicza wjazd do UE na lata. Zaskarżenie krytyczne.' },
        { title: 'Zakaz wjazdu (SIS)', desc: 'Wpis do Schengen Information System. Złożona, ale możliwa procedura.' }
      ]
    },
    timeline: {
      title: 'Ścieżka zaskarżenia',
      steps: [
        { title: 'Doręczenie decyzji', duration: 'dzień 0', desc: 'Przez eDoręczenia. Termin biegnie od doręczenia. Nie przegap!' },
        { title: 'Ekspres-analiza', duration: '1-3 dni', desc: 'Analizujemy uzasadnienie, szukamy błędów prawa i faktów, zbieramy nowe dowody.' },
        { title: 'Odwołanie', duration: 'dzień 3-14', desc: 'Składamy przez ten sam organ. Przekaże do II instancji.' },
        { title: 'II instancja', duration: '1-3 mies', desc: 'Szef UdSC (lub Rada) wydaje nową decyzję.' },
        { title: 'Skarga do WSA', duration: 'dzień +30', desc: 'Przy odmowie - 30 dni na sąd. Rozpatrzenie 6-18 mies.' },
        { title: 'Kasacja do NSA', duration: '30 dni', desc: 'Ostatnia instancja. Naruszenia prawa materialnego lub procesowego.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      items: [
        'Oryginał zaskarżanej decyzji',
        'Dokumenty sprawy pierwotnej (wniosek, załączniki, wezwania)',
        'Dowody błędów w decyzji (nowe dokumenty, opinie biegłych)',
        'Korespondencja z organem (eDoręczenia)',
        'Potwierdzenie opłaty sądowej (200 PLN w WSA) lub wniosek o zwolnienie',
        'Pełnomocnictwo dla pełnomocnika'
      ]
    },
    pricing: {
      title: 'Koszt',
      items: [
        { label: 'Ekspres-analiza decyzji', value: '500 PLN', note: '48 godzin. Zalicza się, jeśli zlecisz prowadzenie.' },
        { label: 'Odwołanie (II instancja)', value: 'od 1 800 PLN', note: 'Przygotowanie + złożenie' },
        { label: 'Skarga do WSA', value: 'od 3 500 PLN', note: 'Pełna reprezentacja w sądzie' },
        { label: 'Skarga kasacyjna do NSA', value: 'od 4 500 PLN', note: 'Sprawy złożone' }
      ],
      note: 'Przy wygranej w WSA strona przeciwna zwraca część kosztów postępowania.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'KPA - Ustawa z 14 czerwca 1960 r.',
        'Prawo o postępowaniu przed sądami administracyjnymi - 30 sierpnia 2002 r.',
        'Ustawa o cudzoziemcach - art. 156',
        'Dyrektywa 2013/32/UE - art. 46'
      ]
    },
    faq: [
      { q: 'Co, jeśli minie termin odwołania?', a: '14 dni od doręczenia - termin sztywny. Przekroczenie = decyzja ostateczna. Przywrócenie możliwe tylko wyjątkowo (choroba, siła wyższa z dowodami).' },
      { q: 'Czy mogę być w Polsce w trakcie apelacji?', a: 'Tak - odwołanie wstrzymuje wykonanie. Po II instancji i skardze do WSA - już nie automatycznie, trzeba wnosić o wstrzymanie wykonania.' },
      { q: 'Szanse powodzenia?', a: 'TRC/PR - 30-40% przy odwołaniu, 15-25% w WSA. Wyższe, gdy decyzja ma konkretne błędy. Bierzemy tylko realne sprawy.' },
      { q: 'Jak długo cała droga do NSA?', a: 'Łącznie 1,5-3 lat. 80% rozstrzyga się w I lub II instancji.' },
      { q: 'Ponowny wniosek zamiast apelacji?', a: 'Tak, ale to inna procedura. Przy błędach faktycznych - apelacja skuteczniejsza. Przy zmianie okoliczności - łatwiej złożyć od nowa.' },
      { q: 'Pomaga apelacja przy decyzji o powrocie?', a: 'Krytycznie ważna. W okresie odwołania deportacja jest zawieszona. Specjalizujemy się w pilnych sprawach - 24 godziny.' }
    ],
    related: ['karta-pobytu', 'ochrona-miedzynarodowa', 'obywatelstwo'],
    ctaTitle: 'Otrzymałeś odmowę - dzwoń dziś',
    ctaSubtitle: 'Każdy dzień zbliża termin. W 48 godzin ocenimy decyzję i damy realną prognozę.'
  },
  en: {
    slug: 'apelacje',
    group: 'immigration',
    icon: 'gavel',
    badge: '14 + 30 + 30 days',
    title: 'Appeals & courts',
    subtitle: 'Challenging decisions of the Office for Foreigners',
    lead: 'A denial is not the end. Three levels exist: appeal to the Head of UdSC, complaint to the Voivodeship Administrative Court (WSA) and cassation to the Supreme Administrative Court (NSA). Missing a deadline kills the case.',
    facts: [
      { label: 'Appeal', value: '14 days', note: 'from service of decision' },
      { label: 'WSA complaint', value: '30 days', note: 'from 2nd-instance decision' },
      { label: 'Cassation', value: '30 days', note: 'to the NSA' },
      { label: 'Court fee', value: 'from 200 PLN', note: 'WSA (waiver possible)' }
    ],
    grounds: {
      title: 'Which decisions we challenge',
      items: [
        { title: 'TRC / PR denial', desc: 'Most common. "Purpose mismatch", "insufficient income", "incomplete file", "violations".' },
        { title: 'Citizenship denial', desc: 'Voivode (recognition) or President (naturalisation - not appealable but can be refiled).' },
        { title: 'International-protection denial', desc: 'Appeal to the Refugee Board, then WSA, then NSA.' },
        { title: 'Card revocation', desc: 'UdSC may revoke TRC/PR for violations. Urgent appeal.' },
        { title: 'Return decision', desc: 'Blocks EU entry for years. Appeal is critical.' },
        { title: 'SIS entry ban', desc: 'Schengen Information System entry. Complex but possible appeal.' }
      ]
    },
    timeline: {
      title: 'Appeals path',
      steps: [
        { title: 'Decision served', duration: 'day 0', desc: 'Via eDoręczenia. Deadline starts at service. Don\'t miss it!' },
        { title: 'Express analysis', duration: '1-3 days', desc: 'We analyse the reasoning, find legal/factual errors, gather new evidence.' },
        { title: 'Appeal filed', duration: 'day 3-14', desc: 'Filed through the issuing body. It forwards to 2nd instance.' },
        { title: '2nd instance review', duration: '1-3 months', desc: 'UdSC Head (or Refugee Board) issues a new decision.' },
        { title: 'Complaint to WSA', duration: 'day +30', desc: 'On 2nd-instance denial - 30 days to court. Review 6-18 months.' },
        { title: 'Cassation to NSA', duration: '30 days', desc: 'Final instance. Material or procedural violations.' }
      ]
    },
    documents: {
      title: 'What we need',
      items: [
        'Original of the challenged decision',
        'Original case documents (application, attachments, requests)',
        'Evidence of errors (new documents, expert opinions)',
        'Correspondence with the authority (eDoręczenia)',
        'Proof of court fee (200 PLN for WSA) or waiver request',
        'Power of attorney for the lawyer'
      ]
    },
    pricing: {
      title: 'Fee',
      items: [
        { label: 'Express decision analysis', value: '500 PLN', note: '48h. Credited if you retain us.' },
        { label: 'Appeal (2nd instance)', value: 'from 1,800 PLN', note: 'Preparation + filing' },
        { label: 'WSA complaint', value: 'from 3,500 PLN', note: 'Full court representation' },
        { label: 'NSA cassation', value: 'from 4,500 PLN', note: 'Complex cases' }
      ],
      note: 'On a WSA win, the opposing party reimburses part of the costs.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'KPA - Act of 14 June 1960',
        'Law on Proceedings Before Administrative Courts - 30 August 2002',
        'Law on Foreigners - art. 156',
        'Directive 2013/32/EU - art. 46'
      ]
    },
    faq: [
      { q: 'What if the 14-day deadline passes?', a: 'Hard deadline. Missing it = decision becomes final. Restoration only for extraordinary reasons (illness, force majeure with evidence).' },
      { q: 'Can I stay in Poland during the appeal?', a: 'Yes - the appeal suspends enforcement. After 2nd instance and WSA complaint - not automatically; you must request suspension of enforcement.' },
      { q: 'Success rate?', a: 'TRC/PR - 30-40% at appeal, 15-25% at WSA. Higher when the decision has concrete errors. We only take cases with realistic odds.' },
      { q: 'How long to NSA?', a: 'Total 1.5-3 years. 80% resolved at 1st or 2nd instance.' },
      { q: 'Refile instead of appeal?', a: 'Different procedure. For factual errors - appeal is stronger. For changed circumstances - refiling is cleaner.' },
      { q: 'Does an appeal help against deportation?', a: 'Critically. The appeal period suspends deportation. We specialise in urgent filings - 24 hours.' }
    ],
    related: ['karta-pobytu', 'ochrona-miedzynarodowa', 'obywatelstwo'],
    ctaTitle: 'Got a denial - call today',
    ctaSubtitle: 'Every day brings the deadline closer. In 48 hours we\'ll review the decision and give a realistic prognosis.'
  },
  tr: {
    slug: 'apelacje',
    group: 'immigration',
    icon: 'gavel',
    badge: '14 + 30 + 30 gün',
    title: 'İtiraz ve idare mahkemesi',
    subtitle: 'Urząd do Spraw Cudzoziemców (Yabancılar İdaresi) kararlarına itiraz',
    lead: 'Ret kararı son söz değildir. Üç aşamalı bir mekanizma vardır: UdSC Başkanı\'na (Szef UdSC) yapılan odwołanie (idari itiraz), Wojewódzki Sąd Administracyjny\'ye (WSA - Eyalet İdare Mahkemesi) skarga (dava), ve Naczelny Sąd Administracyjny\'ye (NSA - Yüksek İdare Mahkemesi) skarga kasacyjna (temyiz). Sürelerin kaçırılması dosyanın ölümü demektir.',
    facts: [
      { label: 'Odwołanie (idari itiraz)', value: '14 gün', note: 'kararın tebliğ tarihinden itibaren' },
      { label: 'WSA\'ya skarga (dava)', value: '30 gün', note: 'II. derece kararından itibaren' },
      { label: 'Skarga kasacyjna (temyiz)', value: '30 gün', note: 'Naczelny Sąd Administracyjny\'ye' },
      { label: 'Mahkeme harcı', value: '200 PLN\'den', note: 'WSA · zwolnienie (muafiyet) talep edilebilir' }
    ],
    grounds: {
      title: 'Hangi kararlara itiraz ediyoruz',
      items: [
        { title: 'TRC / daimi ikamet reddi', desc: 'En sık görülen kategori. Tipik gerekçeler: "amaç uyumsuzluğu", "yetersiz gelir", "eksik dosya", "yükümlülük ihlali".' },
        { title: 'Vatandaşlık reddi', desc: 'Wojewoda kararı (uznanie) veya Cumhurbaşkanı kararı (nadanie - itiraz edilemez ama yeniden başvurulabilir).' },
        { title: 'Uluslararası koruma reddi', desc: 'Rada do Spraw Uchodźców\'a (Mülteciler Kurulu) odwołanie, ardından WSA ve NSA.' },
        { title: 'Kartın iptali', desc: 'Urząd, ihlal nedeniyle TRC/daimi ikameti iptal edebilir. Acil itiraz gerekir.' },
        { title: 'Sınır dışı (geri dönüş) kararı', desc: 'Zobowiązanie do powrotu. AB\'ye girişi yıllarca kısıtlar - itiraz hayati öneme sahiptir.' },
        { title: 'Giriş yasağı (SIS)', desc: 'Schengen Information System\'a kayıt. İtiraz prosedürü karmaşıktır ancak mümkündür.' }
      ]
    },
    timeline: {
      title: 'İtiraz aşamaları',
      steps: [
        { title: 'Kararın tebliği', duration: '0. gün', desc: 'Karar eDoręczenia üzerinden gelir. Süre tebliğden itibaren işlemeye başlar. Gözden kaçırmayın!' },
        { title: 'Hızlı analiz', duration: '1-3 gün', desc: 'Ret gerekçesini inceler, hukuki ve maddi hataları tespit eder, yeni kanıtları toplarız.' },
        { title: 'Odwołanie (idari itiraz)', duration: '3.-14. gün', desc: 'İtirazı kararı veren makamın kendisine sunarız. Makam dosyayı II. dereceye iletir.' },
        { title: 'II. derece incelemesi', duration: '1-3 ay', desc: 'UdSC Başkanı (veya Mülteciler Kurulu) yeni karar verir veya kararı onaylar.' },
        { title: 'WSA\'ya skarga (dava)', duration: '+30 gün', desc: 'II. derece red verirse - mahkemeye 30 gün. İnceleme 6-18 ay.' },
        { title: 'NSA\'ya kasacja (temyiz)', duration: 'WSA\'dan 30 gün', desc: 'Son derece. Maddi veya usul hukuku ihlallerini inceler.' }
      ]
    },
    documents: {
      title: 'İtiraz için gerekenler',
      items: [
        'İtiraza konu kararın orijinali',
        'İlk başvuru dosyasının tüm belgeleri (başvuru kopyası, ekler, ek talep yazışmaları)',
        'Kararın hatalı olduğunu kanıtlayan belgeler (yeni belgeler, uzman görüşleri)',
        'Makamla yapılan yazışmalar (eDoręczenia dahil)',
        'Skarga (dava) harcının ödendiğine dair belge (WSA için 200 PLN) veya wniosek o zwolnienie (muafiyet talebi)',
        'Avukat / temsilci için pełnomocnictwo (vekaletname)'
      ]
    },
    pricing: {
      title: 'Bedel',
      items: [
        { label: 'Karar hızlı analizi', value: '500 PLN', note: 'Şansları 48 saatte değerlendiririz. Süreci yürütmemiz halinde bu tutar ana ücretten düşülür.' },
        { label: 'Odwołanie (II. derece itiraz)', value: '1.800 PLN\'den', note: 'Hazırlık + sunma' },
        { label: 'WSA\'ya skarga', value: '3.500 PLN\'den', note: 'Tam mahkeme temsili' },
        { label: 'NSA\'ya skarga kasacyjna', value: '4.500 PLN\'den', note: 'Yalnızca karmaşık dosyalar' }
      ],
      note: 'WSA\'da kazanılırsa karşı taraf yargılama giderlerinin bir kısmını öder (zwrot kosztów postępowania).'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 14 czerwca 1960 r. - Kodeks postępowania administracyjnego (KPA - İdari Yargılama Usul Kanunu)',
        'Ustawa z dnia 30 sierpnia 2002 r. - Prawo o postępowaniu przed sądami administracyjnymi (İdare Mahkemeleri Önündeki Yargılama Kanunu)',
        'Ustawa o cudzoziemcach - madde 156 (itirazlar)',
        '2013/32/AB Direktifi - madde 46 (etkili başvuru hakkı)'
      ]
    },
    faq: [
      { q: 'Odwołanie süresi kaçırılırsa ne olur?', a: 'Decyzja\'nın (kararın) tebliğinden itibaren 14 gün katı bir süredir. Süre kaçırılırsa karar kesinleşir, dosya kapanır. Süre, yalnızca istisnai durumlarda (hastalık, kanıtlı mücbir sebep) wniosek o przywrócenie terminu (sürenin yeniden açılması talebi) ile yeniden açılabilir.' },
      { q: 'Apelacja sürecinde Polonya\'da kalabilir miyim?', a: 'Evet. Odwołanie (idari itiraz) süresi boyunca ikametiniz yasallaşır - karar kesinleşmez. Ancak ikinci karar da olumsuzsa ve WSA\'ya (Eyalet İdare Mahkemesi) skarga (dava) açıldıysa ikamet otomatik yasallaşmaz; wstrzymanie wykonania decyzji (kararın icrasının durdurulması) talep edilmesi gerekir.' },
      { q: 'Başarı şansı ne kadar?', a: 'TRC / daimi ikamet dosyalarında - odwołanie aşamasında %30-40, WSA aşamasında %15-25. Ret kararı somut hatalar (usul ihlali, normun yanlış yorumlanması, kanıtların göz ardı edilmesi) içerdiğinde şans çok daha yüksektir. Yalnızca gerçek şansı olan dosyaları alıyoruz.' },
      { q: 'NSA\'ya kadar tüm süreç ne kadar sürer?', a: 'Toplam 1,5-3 yıl. Odwołanie - 3 aya kadar, WSA - 6-18 ay, NSA - 12-24 ay. Vakaların %80\'i ilk iki derecede çözülür.' },
      { q: 'İtiraz yerine yeniden başvuru yapabilir miyim?', a: 'Evet, ancak farklı bir prosedürdür. Ret kararı maddi hatalar içeriyorsa (siz tespit ettiyseniz) - apelacja daha etkilidir. Koşullarınız değiştiyse (yeni iş, evlilik) - yeniden başvurmak daha pratik olabilir.' },
      { q: 'Sınır dışı kararına karşı apelacja işe yarar mı?', a: 'Hayati önem taşır. İtiraz süresi boyunca sınır dışı kararı askıya alınır. Acil dosyalarda uzmanız - 24 saat içinde itiraz hazırlayabiliyoruz.' }
    ],
    related: ['karta-pobytu', 'ochrona-miedzynarodowa', 'obywatelstwo'],
    ctaTitle: 'Ret kararı aldıysanız - bugün arayın',
    ctaSubtitle: 'Her gün son tarihi yaklaştırıyor. 48 saat içinde kararınızı analiz eder, derecelerdeki şansınız hakkında gerçekçi bir tahmin veririz.'
  },
  uk: {
    slug: 'apelacje',
    group: 'immigration',
    icon: 'gavel',
    badge: '14 + 30 + 30 днів',
    title: 'Апеляції та суди',
    subtitle: 'Оскарження рішень Urzędu do Spraw Cudzoziemców',
    lead: 'Відмова — не кінець. У вас є три інстанції: odwołanie до Голови UdSC, skarga до Wojewódzki Sąd Administracyjny та skarga kasacyjna до Naczelny Sąd Administracyjny. Пропуск строку — смерть справи.',
    facts: [
      { label: 'Odwołanie', value: '14 днів', note: 'від отримання рішення' },
      { label: 'Skarga до WSA', value: '30 днів', note: 'від рішення ІІ інстанції' },
      { label: 'Skarga kasacyjna', value: '30 днів', note: 'до Naczelny Sąd Administracyjny' },
      { label: 'Держмито', value: 'від 200 PLN', note: 'WSA (можна просити zwolnienie)' }
    ],
    grounds: {
      title: 'Які рішення оскаржуємо',
      items: [
        { title: 'Відмова в карті побуту / карті сталого побуту', desc: 'Найчастіша категорія. Відмови за «невідповідність меті», «недостатній дохід», «неповний пакет», «порушення».' },
        { title: 'Відмова в громадянстві', desc: 'Рішення воєводи (uznanie) або Президента (nadanie — не оскаржується, але можна повторно).' },
        { title: 'Відмова в міжнародному захисті', desc: 'Odwołanie до Rady do Spraw Uchodźców, далі WSA, NSA.' },
        { title: 'Анулювання карти', desc: 'Urząd має право скасувати карту побуту/сталого побуту за порушення. Терміново оскаржуємо.' },
        { title: 'Рішення про депортацію', desc: 'Zobowiązanie do powrotu. Обмежує в’їзд до ЄС на роки — оскарження критичне.' },
        { title: 'Заборона в’їзду (SIS)', desc: 'Внесення до Schengen Information System. Оскарження — складна процедура, але можлива.' }
      ]
    },
    timeline: {
      title: 'Порядок оскарження',
      steps: [
        { title: 'Отримання рішення', duration: 'день 0', desc: 'Рішення приходить через eDoręczenia. Відлік строку — з моменту доставки. Не пропустіть!' },
        { title: 'Експрес-аналіз', duration: '1–3 дні', desc: 'Розбираємо обґрунтування відмови, шукаємо помилки права та фактів, збираємо нові докази.' },
        { title: 'Odwołanie', duration: 'день 3–14', desc: 'Подаємо скаргу через той самий орган, що видав рішення. Він перенаправить до ІІ інстанції.' },
        { title: 'Розгляд у ІІ інстанції', duration: '1–3 міс', desc: 'Szef UdSC (або Rada ds. Uchodźców) виносить нове рішення або залишає в силі.' },
        { title: 'Skarga до WSA', duration: 'день +30', desc: 'Якщо ІІ інстанція відмовила — 30 днів на суд. Розгляд — 6–18 міс.' },
        { title: 'Kasacja до NSA', duration: '30 днів від WSA', desc: 'Остання інстанція. Розглядає порушення матеріального або процесуального права.' }
      ]
    },
    documents: {
      title: 'Що потрібно для апеляції',
      items: [
        'Оригінал оскаржуваного рішення',
        'Усі документи первинної справи (копії заяви, додатків, запитів)',
        'Докази помилок у рішенні (нові документи, експертні висновки)',
        'Листування з органом (зокрема через eDoręczenia)',
        'Підтвердження сплати opłaty за skargę (200 PLN для WSA) — або wniosek o zwolnienie',
        'Довіреність на представника (якщо веде наш фахівець)'
      ]
    },
    pricing: {
      title: 'Вартість',
      items: [
        { label: 'Експрес-аналіз рішення', value: '500 PLN', note: 'Оцінюємо шанси за 48 годин. Зараховується у вартість, якщо візьметесь за ведення.' },
        { label: 'Odwołanie (ІІ інстанція)', value: 'від 1 800 PLN', note: 'Підготовка + подання' },
        { label: 'Skarga до WSA', value: 'від 3 500 PLN', note: 'Повне представництво в суді' },
        { label: 'Skarga kasacyjna до NSA', value: 'від 4 500 PLN', note: 'Лише для складних випадків' }
      ],
      note: 'При виграші у WSA сторона відповідача зобов’язана відшкодувати частину судових витрат (zwrot kosztów postępowania).'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 14 czerwca 1960 r. - Kodeks postępowania administracyjnego',
        'Ustawa z dnia 30 sierpnia 2002 r. - Prawo o postępowaniu przed sądami administracyjnymi',
        'Ustawa o cudzoziemcach - art. 156 (odwołania)',
        'Dyrektywa 2013/32/UE - art. 46 (право на ефективний засіб захисту)'
      ]
    },
    faq: [
      { q: 'Що буде, якщо пропустити строк на odwołanie?', a: '14 днів від отримання decyzji (рішення) — жорсткий строк. Пропуск = рішення набуває чинності, справа закрита. Поновлення строку можливе лише у виняткових випадках (хвороба, форс-мажор із доказами) через wniosek o przywrócenie terminu (заяву про поновлення строку).' },
      { q: 'Чи можу я перебувати в Польщі під час апеляції?', a: 'Так. На період розгляду odwołania (апеляції) ваше перебування легалізується — рішення не набуває чинності. Але якщо друге рішення негативне, а ви подаєте skargę (скаргу) до WSA (Воєводського адміністративного суду), перебування вже не легалізується автоматично — потрібно домагатися wstrzymania wykonania decyzji (зупинення виконання рішення).' },
      { q: 'Які шанси на успіх?', a: 'У справах карти побуту/карти сталого побуту — близько 30–40 % при odwołaniu (апеляції), 15–25 % у WSA (Воєводський адміністративний суд). Значно вище, коли відмова містить конкретні помилки (порушення процедури, неправильне тлумачення норми, ігнорування доказів). Беремо лише ті справи, де шанси реальні.' },
      { q: 'Скільки триває весь шлях до NSA?', a: 'У сумі 1,5–3 роки. Odwołanie (апеляція) — до 3 міс, WSA (Воєводський адмінсуд) — 6–18 міс, NSA (Вищий адмінсуд) — 12–24 міс. У 80 % випадків справа вирішується в одній із перших двох інстанцій.' },
      { q: 'Чи можна подати повторну заяву замість оскарження?', a: 'Так, але це інша процедура. Якщо відмова містить фактичні помилки (ви їх виявили) — apelacja (апеляція) ефективніша. Якщо змінились обставини (нова робота, шлюб) — простіше подати заново.' },
      { q: 'Чи допомагає apelacja при рішенні про депортацію?', a: 'Критично важлива. Протягом строку оскарження депортація призупиняється. Ми спеціалізуємось на термінових справах — можемо подати за 24 години.' }
    ],
    related: ['karta-pobytu', 'ochrona-miedzynarodowa', 'obywatelstwo'],
    ctaTitle: 'Отримали відмову — телефонуйте сьогодні',
    ctaSubtitle: 'Кожен день наближає дедлайн. За 48 годин оцінимо рішення та дамо реалістичний прогноз щодо шансів в інстанціях.'
  }
};

export default apelacje;
