import type { ServiceEntry } from './types';

const notariuszAsysta: ServiceEntry = {
  ru: {
    slug: 'notariusz-asysta',
    group: 'realestate',
    icon: 'gavel',
    badge: 'Akt notarialny · pełnomocnik · 1 dzień',
    title: 'Сопровождение у нотариуса',
    subtitle: 'Сопровождение специалиста по недвижимости на акте купли-продажи',
    lead: 'Akt notarialny - финальная процедура покупки недвижимости в Польше. Нотариус подтверждает umowę, но не защищает покупателя - он нейтральный. Наш специалист по недвижимости читает akt до подписания, проверяет каждую klauzulę, договаривается об изменениях с продавцом, контролирует передачу денег и ключей. На сделке за 800 тыс. PLN наш гонорар окупается одной поправкой. Если вы не в Польше - pełnomocnictwo notarialne, и мы заменяем вас полностью.',
    facts: [
      { label: 'Длительность aktu', value: '1-2 часа', note: 'у нотариуса · читка + подписание' },
      { label: 'Подготовка', value: '5-7 дней', note: 'projekt aktu · корректировки' },
      { label: 'Без приезда', value: 'опция', note: 'через pełnomocnictwo' },
      { label: 'Госпошлина', value: '2% PCC', note: 'на rynku вторичном' }
    ],
    grounds: {
      title: 'Чем помогает наш специалист на акте',
      subtitle: 'Нотариус - нейтральный. Мы - на стороне покупателя.',
      items: [
        { title: 'Чтение projektu aktu заранее', desc: 'Нотариус показывает projekt aktu за 1-7 дней до подписания. Многие нюансы скрыты в стандартных формулировках. Анализируем каждую klauzulę и предлагаем поправки.' },
        { title: 'Negotiacje klauzul', desc: 'Стандартные точки споров: момент перехода собственности (z chwilą podpisania или z chwilą zapłaty?), кто оплачивает PCC и нотариуса, depozyt notarialny, право пользования до выезда продавца, сроки передачи ключей.' },
        { title: 'Контроль передачи денег', desc: 'Schemat безопасной оплаты: rachunek powierniczy notariusza или банковский escrow. Покупатель платит на rachunek, нотариус контролирует и переводит продавцу после wpisu в KW. Защищает obie strony.' },
        { title: 'Проверка podstawy продажи', desc: 'Перед aktem проверяем: pełnomocnictwa продавца (если он не лично), brak ograniczeń (areszt, hipoteka, służebność), zgody małżonka (если поляк-собственник в браке), zgoda spadkobierców (если унаследовано).' },
        { title: 'Pełnomocnictwo от вас', desc: 'Если вы не в Польше - оформляем pełnomocnictwo notarialne у польского консула в стране проживания (или с apostille). Мы подписываем akt от вашего имени. Вы получаете keys и право собственности удалённо.' },
        { title: 'Передача недвижимости после aktu', desc: 'Подписание aktu ≠ передача keys. После aktu организуем protokol zdawczo-odbiorczy с фото состояния, snyczyciel показателями (вода, газ, прąд), передачей keys и инструкций (alarm, отопление, окна).' },
        { title: 'Wpis do KW', desc: 'Нотариус подаёт wniosek о wpisie новой собственности в księgę wieczystą. KW обновляется за 1-4 недели. Контролируем процесс, после wpisu - confirmation klientu.' }
      ]
    },
    timeline: {
      title: 'Этапы aktu notarialnego',
      subtitle: 'Полная подготовка от выбора нотариуса до wpisu в KW - обычно 2-4 недели.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Собираем info о сделке: цена, форма оплаты, MSWiA, due diligence. Решаем - нужно ли pełnomocnictwo (если не в Польше).' },
        { title: 'Выбор нотариуса', duration: '1 день', desc: 'Подбираем нотариуса в Варшаве с репутацией и опытом сделок с иностранцами. Часто один из 5 доверенных. Договариваемся о таксе (negocjowalna).' },
        { title: 'Projekt aktu', duration: '5-7 дней', desc: 'Нотариус готовит projekt с данными покупателя, продавца, недвижимости. Мы получаем PDF, анализируем, предлагаем поправки.' },
        { title: 'Negociacje klauzul', duration: '2-5 дней', desc: 'Корректировки с продавцом и его представителем. Часто 2-4 итерации до финального текста.' },
        { title: 'Pełnomocnictwo (опция)', duration: '5-7 дней', desc: 'Если вы не в Польше - pełnomocnictwo nositarne у консула или с apostille. Мы получаем оригинал.' },
        { title: 'Akt notarialny', duration: '1-2 часа', desc: 'У нотариуса. Чтение aktu вслух, обсуждение, подписание. Передача денег через depozyt notarialny.' },
        { title: 'Wpis do KW', duration: '7-14 дней', desc: 'Нотариус подаёт wniosek в KW. Контролируем wpis, after wpisu сообщаем klientu о готовности.' },
        { title: 'Передача недвижимости', duration: 'согласно akcie', desc: 'Protokol zdawczo-odbiorczy: фото, показатели, ключи. Иногда сразу после aktu, иногда через 7-30 дней (если продавец живёт).' }
      ]
    },
    documents: {
      title: 'Что нужно для aktu',
      subtitle: 'Большая часть - у нотариуса и продавца. От вас - паспорт и pełnomocnictwo.',
      items: [
        'Паспорт покупателя + ВНЖ если есть',
        'PESEL (если у нотариуса можно с паспортом, но PESEL ускоряет KW)',
        'NIP - если покупка через Sp. z o.o.',
        'Pełnomocnictwo нотариальное (если не в Польше)',
        'Zezwolenie MSWiA (если требуется - для не-ЕС)',
        'Подтверждение источника денег (для AML - банковский perevod)',
        'Akt notarialny документы продавца - он предоставляет (KW, ewidencja, PIT)',
        'Polisa ubezpieczeniowa (если кредит - банк требует)'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Сопровождение и pełnomocnictwo - отдельно от taksy notarialnej.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · обзор сделки' },
        { label: 'Сопровождение aktu', value: 'от 2 800 PLN', note: 'Чтение + переговоры + akt' },
        { label: 'Сопровождение + DD', value: 'от 5 500 PLN', note: 'Бандл с DD' },
        { label: 'Pełne pełnomocnictwo', value: 'от 4 500 PLN', note: 'Замена покупателя на акте' }
      ],
      note: 'Taksa notarialna - отдельно (рассчитывается по cenie nieruchomości, ~1 500-6 000 PLN до 1 млн PLN ceny). PCC 2% (или VAT для нового rynku) - обязательная госпошлина. Wpis do KW - 200 PLN.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 14 lutego 1991 r. - Prawo o notariacie',
        'Ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny (rozdz. III dział II - przeniesienie własności)',
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Ustawa z dnia 9 września 2000 r. o podatku od czynności cywilnoprawnych (PCC 2%)',
        'Rozporządzenie MS ws. taksy notarialnej',
        'Ustawa o przeciwdziałaniu praniu pieniędzy z 1 marca 2018 r. (KYC при akcie)'
      ]
    },
    faq: [
      { q: 'Зачем нужен специалист, если есть нотариус?', a: 'Нотариус - нейтральная третья сторона, обязан защищать «obie strony» (обе стороны) одинаково. Когда возникает дилемма (например, формулировка о моменте перехода собственности или o terminie wykonania - о сроке исполнения) - нотариус выбирает «нейтральный» вариант, который часто выгоднее продавцу. Наш специалист по недвижимости - на стороне покупателя: видит каждый риск, торгуется за каждую klauzulę (статью).' },
      { q: 'Можно ли изменить tekst aktu?', a: 'Да, до подписания. Нотариус готовит projekt (проект) и принимает поправки от обеих сторон. Стандартно 2-4 итерации. После подписания - нет, akt становится notarialnym dokumentem (нотариальным документом). Поэтому критично, чтобы наш специалист прочитал tekst до встречи у нотариуса.' },
      { q: 'Как переводятся деньги при покупке?', a: 'Самый безопасный способ - depozyt notarialny (нотариальный депозит): вы переводите cenu (цену) на rachunek (счёт) нотариуса перед aktem. Нотариус подтверждает płatność (платёж) продавцу, akt подписывается. После wpisu (записи) в KW (księga wieczysta - поземельную книгу) нотариус переводит деньги продавцу. Если что-то пойдёт не так - деньги возвращаются. Стоит +0,3-0,5% от cены.' },
      { q: 'Pełnomocnictwo - как работает?', a: 'Pełnomocnictwo (доверенность) - вы оформляете нотариальную доверенность на нас в Польше (если приезжаете на 1 день) или у польского консула в стране проживания (без приезда), или у местного нотариуса с apostille. С pełnomocnictwem мы подписываем akt от вашего имени, вносим деньги, получаем keys. Вы становитесь собственником без приезда в Польшу.' },
      { q: 'Кто платит taksę notarialną?', a: 'Taksa notarialna (нотариальный сбор) - по стандарту обе стороны делят пополам, но это не закон - torgujem. Часто продавец оплачивает свою часть (1/2), а покупатель - свою + PCC. Иногда покупатель оплачивает всё (если рынок продавца). Может быть условием umowy przedwstępnej (предварительного договора).' },
      { q: 'Что такое PCC и кто платит?', a: 'PCC (podatek od czynności cywilnoprawnych - налог на гражданско-правовые действия) - 2% от цены nieruchomości (недвижимости) на вторичном рынке. Платит покупатель в течение 14 дней после aktu. Decyzja PCC-3 в Urzędzie Skarbowym (налоговой). На pierwszym rynku (первичном рынке от dewelopera) - VAT 8% включается в цену, PCC не платится.' },
      { q: 'Зачем нужен protokol zdawczo-odbiorczy?', a: 'Protokół zdawczo-odbiorczy (акт приёмки-передачи) защищает покупателя от «сюрпризов» в момент въезда. Документируем состояние на день передачи: фото каждой комнаты, показатели счётчиков, наличие отказывающихся работать appliances. Если через месяц обнаруживается, что продавец вынес шкаф или сломал дверь - у вас есть документация для требования исправления или компенсации.' }
    ],
    related: ['mswia-zezwolenie', 'due-diligence-nieruchomosci', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Наш специалист на акте у нотариуса',
    ctaSubtitle: 'Бесплатно обсуждаем сделку и подбираем нотариуса. От 2 800 PLN под ключ. Удалённо - через pełnomocnictwo.'
  },
  pl: {
    slug: 'notariusz-asysta',
    group: 'realestate',
    icon: 'gavel',
    badge: 'Akt notarialny · pełnomocnik · 1 dzień',
    title: 'Asysta u notariusza',
    subtitle: 'Specjalista ds. nieruchomości przy akcie notarialnym sprzedaży nieruchomości',
    lead: 'Akt notarialny to finał zakupu. Notariusz jest neutralny - nie chroni kupującego. Nasz specjalista ds. nieruchomości czyta akt przed podpisaniem, sprawdza każdą klauzulę, negocjuje zmiany ze sprzedającym, kontroluje przepływ pieniędzy i kluczy. Przy 800 tys. PLN nasz honorarium zwraca się jedną poprawką. Jeśli nie jesteś w Polsce - pełnomocnictwo, zastępujemy Cię w pełni.',
    facts: [
      { label: 'Czas aktu', value: '1-2 godz.', note: 'czytanie + podpisanie' },
      { label: 'Przygotowanie', value: '5-7 dni', note: 'projekt aktu + poprawki' },
      { label: 'Bez przyjazdu', value: 'opcja', note: 'pełnomocnictwo' },
      { label: 'PCC', value: '2%', note: 'rynek wtórny' }
    ],
    grounds: {
      title: 'Co robi nasz specjalista',
      subtitle: 'Notariusz - neutralny. My - po stronie kupującego.',
      items: [
        { title: 'Czytanie projektu aktu', desc: 'Notariusz wysyła projekt 1-7 dni przed. Analizujemy każdą klauzulę.' },
        { title: 'Negocjacje klauzul', desc: 'Kiedy własność przechodzi (przy podpisaniu czy zapłacie?), kto płaci PCC, depozyt notarialny, klucze.' },
        { title: 'Kontrola przepływu pieniędzy', desc: 'Depozyt notarialny lub escrow bankowy. Pieniądze do sprzedającego po wpisie w KW.' },
        { title: 'Sprawdzenie podstawy', desc: 'Pełnomocnictwa, brak obciążeń, zgoda małżonka, zgoda spadkobierców.' },
        { title: 'Pełnomocnictwo od Ciebie', desc: 'U konsula RP lub z apostille - podpisujemy akt za Ciebie.' },
        { title: 'Protokół zdawczo-odbiorczy', desc: 'Zdjęcia stanu, liczniki, klucze, instrukcje.' },
        { title: 'Wpis do KW', desc: 'Notariusz wnosi, my kontrolujemy.' }
      ]
    },
    timeline: {
      title: 'Etapy aktu',
      subtitle: 'Od wyboru notariusza do wpisu - 2-4 tygodnie.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Cena, forma płatności, MSWiA, DD. Pełnomocnictwo?' },
        { title: 'Wybór notariusza', duration: '1 dzień', desc: 'Doświadczenie z cudzoziemcami. Negocjacja taksy.' },
        { title: 'Projekt aktu', duration: '5-7 dni', desc: 'Analiza, propozycje poprawek.' },
        { title: 'Negocjacje', duration: '2-5 dni', desc: '2-4 iteracje.' },
        { title: 'Pełnomocnictwo (opcja)', duration: '5-7 dni', desc: 'U konsula lub z apostille.' },
        { title: 'Akt notarialny', duration: '1-2 godz.', desc: 'Czytanie, podpisanie, depozyt.' },
        { title: 'Wpis w KW', duration: '7-14 dni', desc: 'Kontrolujemy.' },
        { title: 'Przekazanie nieruchomości', duration: 'wg aktu', desc: 'Protokół z zdjęciami, licznikami, kluczami.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'Większość po stronie notariusza i sprzedającego.',
      items: [
        'Paszport + karta pobytu',
        'PESEL (przyspiesza KW)',
        'NIP (zakup przez Sp. z o.o.)',
        'Pełnomocnictwo notarialne',
        'Zezwolenie MSWiA (jeśli wymagane)',
        'Źródło środków (AML)',
        'Dokumenty sprzedającego (KW, ewidencja, PIT)',
        'Polisa ubezpieczeniowa (kredyt)'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Asysta i pełnomocnictwo osobno od taksy notarialnej.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · ocena transakcji' },
        { label: 'Asysta przy akcie', value: 'od 2 800 PLN', note: 'Czytanie + negocjacje + akt' },
        { label: 'Asysta + DD', value: 'od 5 500 PLN', note: 'Pakiet z DD' },
        { label: 'Pełne pełnomocnictwo', value: 'od 4 500 PLN', note: 'Zastępstwo na akcie' }
      ],
      note: 'Taksa notarialna ~1 500-6 000 PLN do 1 mln PLN ceny. PCC 2% (lub VAT). Wpis KW 200 PLN.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Prawo o notariacie z 14 lutego 1991 r.',
        'Kodeks cywilny - rozdz. III dział II',
        'Ustawa z 6 lipca 1982 r. o KW i hipotece',
        'Ustawa z 9 września 2000 r. o PCC',
        'Rozporządzenie MS ws. taksy notarialnej',
        'Ustawa AML z 1 marca 2018 r.'
      ]
    },
    faq: [
      { q: 'Po co specjalista, jak jest notariusz?', a: 'Notariusz neutralny - przy dylematach wybiera wariant często korzystniejszy dla sprzedającego. Nasz specjalista ds. nieruchomości broni kupującego.' },
      { q: 'Zmiana aktu?', a: 'Tak, do podpisania. 2-4 iteracje. Po podpisaniu - nie.' },
      { q: 'Przepływ pieniędzy?', a: 'Depozyt notarialny - pieniądze do sprzedającego po wpisie w KW. +0,3-0,5%.' },
      { q: 'Pełnomocnictwo?', a: 'U konsula RP lub z apostille. Zastępujemy Cię w pełni.' },
      { q: 'Kto płaci taksę?', a: 'Standardowo po połowie, ale negocjowalne.' },
      { q: 'PCC?', a: '2% od ceny na rynku wtórnym. Kupujący w 14 dni przez PCC-3.' },
      { q: 'Protokół zdawczo-odbiorczy?', a: 'Zdjęcia, liczniki - chroni przed niespodziankami przy wprowadzeniu się.' }
    ],
    related: ['mswia-zezwolenie', 'due-diligence-nieruchomosci', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Specjalista ds. nieruchomości przy akcie',
    ctaSubtitle: 'Bezpłatnie omawiamy. Od 2 800 PLN. Zdalnie - pełnomocnictwo.'
  },
  en: {
    slug: 'notariusz-asysta',
    group: 'realestate',
    icon: 'gavel',
    badge: 'Notarial deed · PoA · 1 day',
    title: 'Notary attendance',
    subtitle: 'Real-estate specialist attending the deed of sale',
    lead: 'The notarial deed (akt notarialny) is the final stage of buying property. The notary confirms the agreement but is neutral - they don\'t protect the buyer. Our real-estate specialist reads the deed before signing, checks every clause, negotiates changes with the seller, and controls the flow of money and keys. On an 800k purchase, our fee pays for itself with one amendment. If you\'re not in Poland - notarial PoA, and we replace you in full.',
    facts: [
      { label: 'Deed duration', value: '1-2 hours', note: 'reading + signing' },
      { label: 'Preparation', value: '5-7 days', note: 'draft deed + amendments' },
      { label: 'Without travel', value: 'optional', note: 'via PoA' },
      { label: 'PCC', value: '2%', note: 'secondary market' }
    ],
    grounds: {
      title: 'What our specialist does',
      subtitle: 'Notary - neutral. We - on your side.',
      items: [
        { title: 'Reviewing the draft deed', desc: 'Notary sends draft 1-7 days before. We analyze every clause and propose amendments.' },
        { title: 'Negotiating clauses', desc: 'Title transfer moment (signing or payment?), who pays PCC, notarial deposit, key handover, occupancy.' },
        { title: 'Money flow control', desc: 'Notarial deposit or bank escrow. Buyer pays into account, notary releases to seller after KW entry.' },
        { title: 'Verifying basis', desc: 'Seller PoAs, no encumbrances, spousal consent, heir consent.' },
        { title: 'PoA from you', desc: 'Notarized at Polish consulate or with apostille - we sign the deed on your behalf.' },
        { title: 'Handover protocol', desc: 'Photos, meter readings, keys, manuals.' },
        { title: 'KW entry', desc: 'Notary files, we monitor.' }
      ]
    },
    timeline: {
      title: 'Deed steps',
      subtitle: 'From notary selection to KW entry - 2-4 weeks.',
      steps: [
        { title: 'Free consultation', duration: '30 min', desc: 'Price, payment, MSWiA, DD. PoA needed?' },
        { title: 'Notary selection', duration: '1 day', desc: 'Foreigner experience. Fee negotiation.' },
        { title: 'Draft deed', duration: '5-7 days', desc: 'Analysis and amendments.' },
        { title: 'Negotiations', duration: '2-5 days', desc: '2-4 iterations.' },
        { title: 'PoA (optional)', duration: '5-7 days', desc: 'Polish consulate or apostille.' },
        { title: 'Notarial deed', duration: '1-2 hours', desc: 'Reading, signing, deposit.' },
        { title: 'KW filing', duration: '7-14 days', desc: 'We monitor.' },
        { title: 'Property handover', duration: 'per deed', desc: 'Protocol with photos, meters, keys.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Most on notary and seller side.',
      items: [
        'Passport + residence card',
        'PESEL (speeds up KW)',
        'NIP (purchase via Sp. z o.o.)',
        'Notarial PoA (if remote)',
        'MSWiA permit (if required)',
        'Source of funds (AML)',
        'Seller documents (KW, cadastre, PIT)',
        'Insurance policy (mortgage)'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Attendance and PoA separate from notary fee.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 min · transaction review' },
        { label: 'Deed attendance', value: 'from 2,800 PLN', note: 'Review + negotiation + deed' },
        { label: 'Attendance + DD', value: 'from 5,500 PLN', note: 'Bundle with DD' },
        { label: 'Full PoA', value: 'from 4,500 PLN', note: 'Replace you on deed' }
      ],
      note: 'Notary fee separate (~1,500-6,000 PLN up to 1M price). PCC 2% (or VAT for new market). KW entry 200 PLN.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Notary Law of 14 February 1991',
        'Civil Code - Book III, Title II (transfer of ownership)',
        'Land Register Act of 6 July 1982',
        'PCC Act of 9 September 2000 (2%)',
        'Justice Ministry Regulation on notarial fees',
        'AML Act of 1 March 2018 (KYC at deed)'
      ]
    },
    faq: [
      { q: "Why a specialist if there's a notary?", a: 'The notary is neutral - required to protect obie strony (both sides) equally. On dilemmas (transfer moment, deadlines) the notary picks the "neutral" wording that often favors the seller. Our real-estate specialist sees every risk and negotiates each klauzula (clause) for you.' },
      { q: 'Can the deed text be changed?', a: 'Yes, before signing. Notary takes amendments from both sides. 2-4 iterations standard. After signing - no.' },
      { q: 'Money transfer mechanics?', a: 'Safest: depozyt notarialny (notarial deposit). Buyer wires price to notary account before deed. Notary confirms payment, deed signed. After KW (land register) entry, notary releases to seller. Costs +0.3-0.5%.' },
      { q: 'How does the PoA work?', a: 'Notarized PoA in Poland (1-day visit) or at the Polish consulate abroad (no travel) or notarized locally with apostille. We sign, pay, collect keys.' },
      { q: 'Who pays the notary fee?', a: 'Customarily split, but negotiable. Often each side pays their half, buyer adds PCC.' },
      { q: 'PCC?', a: 'PCC (tax on civil-law transactions) - 2% on secondary-market price. Buyer pays within 14 days via PCC-3 declaration. New build (developer) - VAT 8% in price, no PCC.' },
      { q: 'Why a handover protocol?', a: 'Documents the property state on transfer - photos, meter readings, working appliances. Protects you if seller removes a wardrobe or breaks a door later.' }
    ],
    related: ['mswia-zezwolenie', 'due-diligence-nieruchomosci', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Real-estate specialist at the notary',
    ctaSubtitle: 'Free consultation. From 2,800 PLN. Remote via PoA available.'
  },
  tr: {
    slug: 'notariusz-asysta',
    group: 'realestate',
    icon: 'gavel',
    badge: 'Akt notarialny · vekaletname · 1 gün',
    title: 'Noter işlemlerinde eşlik',
    subtitle: 'Tapu satış aktında gayrimenkul uzmanının eşlik etmesi',
    lead: 'Akt notarialny - Polonya\'da gayrimenkul alımının son aşamasıdır. Noter umowa\'yı (sözleşmeyi) onaylar, ancak alıcıyı korumaz - tarafsızdır. Gayrimenkul uzmanımız akt\'ı imzadan önce okur, her klauzulę kontrol eder, satıcıyla değişiklikleri müzakere eder, paranın ve anahtarların geçişini denetler. 800.000 PLN\'lik bir alımda danışmanlık ücretimiz tek bir maddenin düzeltilmesiyle geri kazanılır. Polonya\'da değilseniz - pełnomocnictwo notarialne (noter onaylı vekaletname) ile sizi tamamen temsil ediyoruz.',
    facts: [
      { label: 'Akt süresi', value: '1-2 saat', note: 'noterde · okuma + imza' },
      { label: 'Hazırlık', value: '5-7 gün', note: 'projekt aktu + düzeltmeler' },
      { label: 'Polonya\'ya gelmeden', value: 'opsiyonel', note: 'pełnomocnictwo ile' },
      { label: 'Resmi harç', value: '%2 PCC', note: 'ikinci el piyasada' }
    ],
    grounds: {
      title: 'Uzmanımızın akt\'ta katkısı',
      subtitle: 'Noter tarafsızdır. Biz alıcının yanındayız.',
      items: [
        { title: 'Aktın projesinin önceden okunması', desc: 'Noter projekt aktu\'yu imzadan 1-7 gün önce gönderir. Standart ifadelerin arkasında saklı nüanslar olur. Her klauzulę analiz eder, düzeltme öneriyoruz.' },
        { title: 'Klauzul müzakeresi', desc: 'Standart tartışmalı noktalar: mülkiyetin geçiş anı (imzayla mı, ödemeyle mi?), PCC\'yi ve noter ücretini kim öder, depozyt notarialny, satıcının taşınana kadar oturma hakkı, anahtar teslim süreleri.' },
        { title: 'Para akışının kontrolü', desc: 'Güvenli ödeme şeması: noter rachunek powierniczy\'si veya banka escrow\'u. Alıcı parayı hesaba yatırır, noter denetler ve KW\'ye wpis\'ten sonra satıcıya aktarır. Her iki tarafı da korur.' },
        { title: 'Satış temelinin kontrolü', desc: 'Akt\'tan önce kontrol ediyoruz: satıcının pełnomocnictwa\'sı (şahsen değilse), takyidat olmaması (haciz, ipotek, intifa), zgoda małżonka (Polonyalı sahip evliyse), zgoda spadkobierców (miras yoluyla edinmişse).' },
        { title: 'Sizden vekaletname', desc: 'Polonya\'da değilseniz - ikamet ülkenizdeki Polonya konsolosunda (veya noterde apostille ile) pełnomocnictwo notarialne düzenliyoruz. Akt\'ı sizin adınıza imzalıyoruz. Anahtarları ve mülkiyet hakkını uzaktan ediniyorsunuz.' },
        { title: 'Akt\'tan sonra teslim', desc: 'Akt imzası ≠ anahtar teslim. Akt sonrası protokol zdawczo-odbiorczy düzenliyoruz: durum fotoğrafları, sayaç değerleri (su, gaz, elektrik), anahtar ve kullanım kılavuzları (alarm, ısıtma, pencereler) teslimi.' },
        { title: 'KW\'ye wpis (tescil)', desc: 'Noter, yeni mülkiyetin księga wieczysta\'ya wpis\'i için wniosek sunar. KW 1-4 hafta içinde güncellenir. Süreci takip ediyor, wpis sonrası müvekkili bilgilendiriyoruz.' }
      ]
    },
    timeline: {
      title: 'Akt notarialny aşamaları',
      subtitle: 'Noter seçiminden KW tescile tam hazırlık genelde 2-4 hafta.',
      steps: [
        { title: 'Ücretsiz danışmanlık', duration: '30 dk', desc: 'İşlem bilgilerini topluyoruz: fiyat, ödeme şekli, MSWiA, due diligence. Pełnomocnictwo gerekip gerekmediğini belirleriz.' },
        { title: 'Noter seçimi', duration: '1 gün', desc: 'Yabancılarla deneyimli, itibarlı bir Varşova noteri seçiyoruz. Genelde 5 güvenilir noter arasından. Taksa\'yı (negocjowalna) müzakere ediyoruz.' },
        { title: 'Projekt aktu', duration: '5-7 gün', desc: 'Noter alıcı, satıcı ve gayrimenkul bilgileriyle projeyi hazırlar. PDF\'i alır, analiz eder, düzeltme öneriyoruz.' },
        { title: 'Klauzul müzakeresi', duration: '2-5 gün', desc: 'Satıcı ve temsilcisiyle düzeltmeler. Final metne kadar genelde 2-4 iterasyon.' },
        { title: 'Pełnomocnictwo (opsiyonel)', duration: '5-7 gün', desc: 'Polonya\'da değilseniz - konsoloslukta veya apostille ile pełnomocnictwo notarialne. Orijinali alıyoruz.' },
        { title: 'Akt notarialny', duration: '1-2 saat', desc: 'Noterde. Akdin yüksek sesle okunması, görüşme, imza. Para depozyt notarialny üzerinden geçer.' },
        { title: 'KW\'ye wpis', duration: '7-14 gün', desc: 'Noter KW\'ye wniosek sunar. Wpis\'i denetliyor, hazır olunca müvekkili bilgilendiriyoruz.' },
        { title: 'Gayrimenkul teslimi', duration: 'akit gereği', desc: 'Protokol zdawczo-odbiorczy: fotoğraflar, sayaç değerleri, anahtarlar. Bazen akit hemen sonra, bazen 7-30 gün sonra (satıcı oturuyorsa).' }
      ]
    },
    documents: {
      title: 'Akt için gerekenler',
      subtitle: 'Çoğu noter ve satıcıdadır. Sizden istenen pasaport ve pełnomocnictwo.',
      items: [
        'Alıcı pasaportu + varsa karta pobytu',
        'PESEL (noterde pasaportla mümkün, ama PESEL KW tescilini hızlandırır)',
        'NIP - Sp. z o.o. üzerinden alımda',
        'Noter onaylı pełnomocnictwo (Polonya\'da değilseniz)',
        'Zezwolenie MSWiA (AB dışı vatandaşa gerekiyorsa)',
        'Para kaynağı kanıtı (AML için banka transferi)',
        'Satıcının akt notarialny belgeleri - kendisi sunar (KW, ewidencja, PIT)',
        'Sigorta poliçesi (kredi varsa banka talep eder)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Eşlik ve pełnomocnictwo, taksa notarialna\'dan ayrıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · işlemin değerlendirmesi' },
        { label: 'Akt eşliği', value: '2.800 PLN\'den', note: 'Okuma + müzakere + akt' },
        { label: 'Eşlik + DD', value: '5.500 PLN\'den', note: 'DD ile birlikte paket' },
        { label: 'Tam pełnomocnictwo', value: '4.500 PLN\'den', note: 'Akit\'te alıcının yerine geçiyoruz' }
      ],
      note: 'Taksa notarialna ayrı (gayrimenkul fiyatına göre, 1 mln PLN\'ye kadar yaklaşık 1.500-6.000 PLN). PCC %2 (yeni piyasada VAT) zorunlu harç. KW wpis\'i 200 PLN.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 14 lutego 1991 r. - Prawo o notariacie (Noterlik Kanunu)',
        'Ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny (Medeni Kanun - bölüm III kısım II, mülkiyetin devri)',
        'Ustawa z dnia 6 lipca 1982 r. o księgach wieczystych i hipotece',
        'Ustawa z dnia 9 września 2000 r. o podatku od czynności cywilnoprawnych (PCC %2)',
        'Adalet Bakanlığı taksa notarialna yönetmeliği',
        '1 Mart 2018 tarihli Aklama ile Mücadele Kanunu (akt anında KYC)'
      ]
    },
    faq: [
      { q: 'Noter varken neden uzman gerekli?', a: 'Noter tarafsız üçüncü taraftır, "obie strony" (iki tarafı) eşit korumakla yükümlüdür. Bir ikilem doğduğunda (örn. mülkiyetin geçiş anına dair ifade veya o terminie wykonania - ifa süresi konusunda) noter genelde satıcıya daha uygun "tarafsız" varyantı seçer. Gayrimenkul uzmanımız ise alıcının yanındadır: her riski görür, her klauzulę için pazarlık eder.' },
      { q: 'Akt metni değiştirilebilir mi?', a: 'Evet, imzaya kadar. Noter projeyi hazırlar ve iki taraftan da düzeltme alır. Standart 2-4 iterasyon. İmzadan sonra - hayır, akt notarialny dokumentem haline gelir. Bu nedenle uzmanımızın metni noter buluşmasından önce okuması kritiktir.' },
      { q: 'Alımda para nasıl transfer ediliyor?', a: 'En güvenli yol depozyt notarialny\'dir: bedeli akt\'tan önce noter rachunek\'ine yatırırsınız. Noter ödemeyi satıcıya teyit eder, akt imzalanır. KW\'ye wpis\'ten sonra noter parayı satıcıya aktarır. Bir aksilik olursa para iade edilir. Bedelin %0,3-0,5\'i kadar maliyeti vardır.' },
      { q: 'Pełnomocnictwo nasıl işliyor?', a: 'Pełnomocnictwo (vekaletname) - Polonya\'da bir günlüğüne geliyorsanız Varşova\'da noterde, gelmiyorsanız ikamet ülkenizdeki Polonya konsolosunda veya yerel noterde apostille ile düzenliyoruz. Pełnomocnictwo ile akt\'ı sizin adınıza imzalıyor, parayı yatırıyor, anahtarları alıyoruz. Polonya\'ya gelmeden mülk sahibi oluyorsunuz.' },
      { q: 'Taksa notarialna\'yı kim öder?', a: 'Standartta iki taraf eşit paylaşır ama bu kural değildir - pazarlık edilebilir. Genelde satıcı kendi yarısını (1/2), alıcı kendi yarısını + PCC\'yi öder. Bazen alıcı tamamını öder (satıcı pazarı varsa). Umowa przedwstępna\'nın bir koşulu olabilir.' },
      { q: 'PCC nedir, kim öder?', a: 'PCC (podatek od czynności cywilnoprawnych - medeni hukuk işlem vergisi) ikinci el piyasada gayrimenkul fiyatının %2\'sidir. Alıcı akt\'tan sonra 14 gün içinde Urząd Skarbowy\'ye PCC-3 ile öder. Birinci el piyasada (geliştiriciden) ise %8 VAT fiyata dahildir, PCC ödenmez.' },
      { q: 'Protokol zdawczo-odbiorczy neden gerekli?', a: 'Protokół zdawczo-odbiorczy (teslim-tesellüm tutanağı), giriş anında alıcıyı "sürprizlere" karşı korur. Teslim günündeki durumu belgeliyoruz: her odanın fotoğrafı, sayaç değerleri, çalışmayan ev aletleri. Bir ay sonra satıcının dolabı götürdüğü veya kapıyı kırdığı ortaya çıkarsa - elinizde düzeltme veya tazminat talep etmek için belgeniz olur.' }
    ],
    related: ['mswia-zezwolenie', 'due-diligence-nieruchomosci', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Noter aktında uzmanımız yanınızda',
    ctaSubtitle: 'İşlemi ücretsiz görüşür, noteri ücretsiz seçeriz. Anahtar teslim 2.800 PLN\'den. Uzaktan - pełnomocnictwo ile.'
  }
};

export default notariuszAsysta;
