import type { ServiceEntry } from './types';

const kartaStalegoPobytu: ServiceEntry = {
  ru: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'ПМЖ',
    title: 'Karta Stałego Pobytu',
    subtitle: 'Постоянный вид на жительство в Польше для граждан СНГ',
    lead: "Если вы из Украины, Беларуси, Казахстана или России и уже прожили в Польше 5 лет на временных картах - пора переходить на pobyt stały. Статус бессрочный, пластик меняется раз в 10 лет, а с Кartą Polaka можно зайти напрямую, минуя пятилетку.",
    facts: [
      { label: 'Срок ожидания', value: '3-6 мес', note: 'Mazowiecki Urząd Wojewódzki - до 8 мес в пиковые периоды' },
      { label: 'Сборы', value: '640 + 100 PLN', note: 'wniosek + бланк карты' },
      { label: 'Статус', value: 'бессрочно', note: 'карта - каждые 10 лет' },
      { label: 'Что даёт', value: 'почти как у поляков', note: 'кроме выборов и службы в полиции' }
    ],
    grounds: {
      title: 'На каком основании можно подавать',
      items: [
        { title: 'Karta Polaka - самый быстрый путь', desc: 'Если у вас на руках Карта поляка, ВНЖ вообще не нужен - идёте прямо на pobyt stały. Львовяне, гродненцы, жители Бреста и Винницы пользуются этим основанием чаще всего.' },
        { title: 'Польские корни (pochodzenie polskie)', desc: 'Прадед родился во Львове до 1939-го? Бабушка из Гродно? Архивные wypisy из львовских, виленских и брестских ЗАГСов дают право подавать сразу - без 5 лет ожидания.' },
        { title: 'Супруг(а) гражданина Польши', desc: '3 года официального брака + 2 года непрерывного pobyt czasowy. Развод до решения - основание сгорает.' },
        { title: '5 лет на ВНЖ в Польше', desc: 'Для украинцев на UKR и beneficjentów ochrony czasowej - срок UKR в стаж не идёт. Считаем только karta pobytu czasowego.' },
        { title: 'Статус беженца / ochrona uzupełniająca', desc: 'После 5 лет с момента подачи на международную защиту, не с момента получения статуса.' },
        { title: 'Ребёнок родился в Польше у родителя с ПМЖ', desc: 'Если на момент рождения хотя бы один родитель уже держал pobyt stały - подаём отдельный wniosek на ребёнка.' }
      ]
    },
    timeline: {
      title: 'Как идёт дело по шагам',
      steps: [
        { title: 'Разбор основания', duration: '30 мин', desc: 'На бесплатной встрече смотрим, по какому из шести оснований вы реально проходите. Часто работодатель в Варшаве уже дал 5-летнюю карту - значит основание созрело.' },
        { title: 'Сбор бумаг', duration: '2-4 недели', desc: 'Заказ wypisów из украинских и белорусских архивов идёт через консульство - закладывайте время.' },
        { title: 'Запись на pl. Bankowy 3/5', duration: '1 день', desc: 'Подача через MOS v2.0 + оплата 640 PLN на счёт Mazowieckiego Urzędu Wojewódzkiego.' },
        { title: 'Отпечатки и подпись', duration: '1 визит', desc: 'Биометрия проходит на Wojska Polskiego 17 - корпус Wydziału Spraw Cudzoziemców. По записи, без живой очереди.' },
        { title: 'Stempel в паспорт', duration: 'в день подачи', desc: 'Печать о подаче (stempel) даёт легальное право работать и выезжать в Шенген до решения.' },
        { title: 'Карта на руки', duration: '7-14 дней после решения', desc: '+100 PLN за пластик. Через 3 года pobytu stałego открывается путь на obywatelstwo polskie.' }
      ]
    },
    documents: {
      title: 'Что собирать на pobyt stały',
      items: [
        'Загранпаспорт + копии всех страниц с печатями',
        'Wniosek o udzielenie zezwolenia na pobyt stały - заполняем мы на польском',
        '4 фото 35×45 мм со светлым фоном, не старше 6 мес',
        'Документ под основание - akt małżeństwa с апостилем, Karta Polaka, decyzja uchodźcza',
        'Архивные wypisy на польских предков - чаще всего из ЗАГСов Львова, Гродно, Бреста, Винницы',
        'Tytuł prawny do mieszkania - umowa najmu okazjonalnego или zameldowanie czasowe',
        'PIT-37 или PIT-11 за последние 2 года + умова о працы',
        'Ubezpieczenie zdrowotne - ZUS RMUA либо приватная страховка',
        'Dowód wpłaty 640 PLN на счёт воеводства'
      ]
    },
    pricing: {
      title: 'Сколько стоит вести дело',
      items: [
        { label: 'Первая встреча', value: 'Бесплатно', note: 'Разбираем основание и сроки' },
        { label: 'Полное ведение pobytu stałego', value: 'от 3 500 PLN', note: 'От wniosku до получения карты' },
        { label: 'Подтверждение польских корней', value: 'от 2 000 PLN', note: 'Работа с архивами Львова, Гродно, Вильнюса' }
      ],
      note: 'Госпошлины 640 + 100 PLN платите напрямую воеводству.'
    },
    legalBase: {
      title: 'На что мы опираемся',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach - Dział IV',
        'Ustawa z dnia 7 września 2007 r. o Karcie Polaka',
        'Konwencja Genewska 1951 r. - dla uchodźców'
      ]
    },
    faq: [
      { q: 'У меня карта Polaka - реально не нужно жить 5 лет до подачи?', a: 'Реально. Karta Polaka - это самостоятельное основание по Art. 195 ust. 1 pkt 9 ustawy o cudzoziemcach. Хоть на следующий день после переезда из Минска или Львова - можно подавать на pobyt stały напрямую.' },
      { q: 'Время по UKR засчитывается в 5 лет для ПМЖ?', a: 'Нет. Пребывание по защите UKR в стаж pobytu stałego не идёт. Срок начинает идти только с первой karty pobytu czasowego - это важно для украинцев, которые приехали после февраля 2022-го.' },
      { q: 'Нужен ли мне польский B1?', a: 'Для самой pobyt stały - нет, языкового экзамена нет ни на одном основании. B1 потребуется позже, через 3 года, когда подаёте на гражданство.' },
      { q: 'Что если карта закончилась, а решения о pobyt stały ещё нет?', a: 'Если подали wniosek до окончания предыдущей карты - получаете stempel в паспорт, и он легализует пребывание до момента решения. Главное - подать заранее, минимум за 45 дней.' },
      { q: 'Сохраню ли украинское / белорусское гражданство?', a: 'С точки зрения Польши - да, она допускает множественное гражданство. По линии вашей страны: Украина формально требует отказа при принятии нового гражданства, Беларусь - аналогично. На этапе ПМЖ это пока не критично - вопрос встаёт только при obywatelstwie polskim.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'Пять лет уже в Польше? Пора на ПМЖ',
    ctaSubtitle: 'На бесплатной встрече разберём ваше основание, проверим стаж и скажем, по какому пути идти быстрее.'
  },
  pl: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'Pobyt stały',
    title: 'Karta Stałego Pobytu',
    subtitle: 'Zezwolenie na pobyt stały oraz status rezydenta długoterminowego UE',
    lead: "Zezwolenie na pobyt stały, udzielane na podstawie art. 195 ustawy o cudzoziemcach, ma charakter bezterminowy. Karta pobytu - jako dokument materialny - jest wymieniana co 10 lat. Status zbliża się charakterem do statusu rezydenta długoterminowego UE w rozumieniu Dyrektywy 2003/109/WE i otwiera ścieżkę do obywatelstwa polskiego po trzech latach.",
    facts: [
      { label: 'Podstawa prawna', value: 'art. 195 u.o.c.', note: 'ustawa z 12.12.2013 r. o cudzoziemcach' },
      { label: 'Charakter', value: 'bezterminowy', note: 'karta wymieniana w cyklu 10-letnim' },
      { label: 'Opłaty urzędowe', value: '640 + 100 PLN', note: 'opłata skarbowa za wniosek + opłata za kartę' },
      { label: 'Termin ustawowy', value: 'do 180 dni', note: 'art. 35 k.p.a. - faktycznie 3-6 miesięcy' }
    ],
    grounds: {
      title: 'Przesłanki udzielenia zezwolenia (art. 195 u.o.c.)',
      items: [
        { title: 'Małżonek obywatela RP - art. 195 ust. 1 pkt 4', desc: 'Wymagane: pozostawanie w związku małżeńskim z obywatelem polskim przez co najmniej 3 lata przed złożeniem wniosku oraz bezpośrednio przed nim co najmniej 2 lata nieprzerwanego pobytu na podstawie zezwolenia na pobyt czasowy.' },
        { title: 'Osoba polskiego pochodzenia - art. 195 ust. 1 pkt 3', desc: 'Konieczne wykazanie polskiej narodowości co najmniej jednego z rodziców, dziadków lub dwojga pradziadków, łącznie z zamiarem osiedlenia się na stałe na terytorium Rzeczypospolitej.' },
        { title: 'Posiadacz Karty Polaka - art. 195 ust. 1 pkt 9', desc: 'Cudzoziemiec posiadający ważną Kartę Polaka może wnioskować o pobyt stały z zamiarem osiedlenia się w Polsce, bez konieczności uprzedniego zezwolenia na pobyt czasowy.' },
        { title: 'Status uchodźcy lub ochrona uzupełniająca - art. 195 ust. 1 pkt 6-7', desc: 'Cudzoziemiec, któremu udzielono ochrony, po 5 latach nieprzerwanego pobytu w Polsce, liczonym od dnia złożenia wniosku o ochronę międzynarodową.' },
        { title: 'Małoletnie dziecko posiadacza pobytu stałego', desc: 'Dziecko cudzoziemca posiadającego zezwolenie na pobyt stały, urodzone już po uzyskaniu przez rodzica tego zezwolenia - wniosek składa przedstawiciel ustawowy.' },
        { title: 'Ofiara handlu ludźmi - art. 195 ust. 1 pkt 5', desc: 'Cudzoziemiec spełniający przesłanki przewidziane w przepisach o pobycie humanitarnym lub ochronie uzupełniającej, w warunkach szczególnych przewidzianych ustawą.' }
      ]
    },
    timeline: {
      title: 'Etapy postępowania administracyjnego',
      steps: [
        { title: 'Analiza przesłanek', duration: '30 min', desc: 'Bezpłatna konsultacja - weryfikujemy, którą z przesłanek art. 195 u.o.c. Państwo spełniają oraz czy spełniony jest wymóg integracji ze społeczeństwem polskim.' },
        { title: 'Kompletowanie dokumentacji', duration: '2-4 tygodnie', desc: 'Tłumaczenia przysięgłe, apostille na aktach zagranicznych, kwerendy archiwalne przy przesłance pochodzenia.' },
        { title: 'Złożenie wniosku w MOS v2.0', duration: '1 dzień', desc: 'Wniosek składa się do wojewody właściwego ze względu na miejsce pobytu. Uiszczamy 640 PLN opłaty skarbowej na rachunek właściwego urzędu wojewódzkiego.' },
        { title: 'Czynności biometryczne', duration: '1 wizyta', desc: 'Pobranie odcisków linii papilarnych i podpisu cudzoziemca - obowiązek z art. 9 u.o.c.' },
        { title: 'Postępowanie wyjaśniające', duration: '3-6 miesięcy', desc: 'Korespondencja przez system eDoręczeń, odpowiedzi na wezwania wojewody, ewentualne przesłuchanie cudzoziemca.' },
        { title: 'Decyzja i wydanie karty', duration: '7-14 dni od decyzji', desc: 'Po uzyskaniu decyzji pozytywnej - opłata 100 PLN za wydanie karty pobytu. Otwiera to drogę do wniosku o obywatelstwo polskie po 3 latach (art. 30 ustawy o obywatelstwie polskim).' }
      ]
    },
    documents: {
      title: 'Wymagane dokumenty - załączniki do wniosku',
      items: [
        'Wniosek o udzielenie zezwolenia na pobyt stały (3 egzemplarze), wypełniony w języku polskim',
        'Cztery aktualne fotografie spełniające wymogi rozporządzenia (35×45 mm)',
        'Kserokopia ważnego dokumentu podróży wraz z okazaniem oryginału',
        'Dokumenty potwierdzające przesłankę (akt małżeństwa z apostille, Karta Polaka, decyzja o nadaniu statusu uchodźcy)',
        'Akty stanu cywilnego potwierdzające polskie pochodzenie - dla przesłanki z art. 195 ust. 1 pkt 3',
        'Dokumenty potwierdzające źródła dochodu (PIT-37, PIT-11 za ostatnie 2 lata, zaświadczenie o zatrudnieniu)',
        'Tytuł prawny do zajmowania lokalu mieszkalnego (umowa najmu, akt notarialny, zameldowanie)',
        'Dokument potwierdzający posiadanie ubezpieczenia zdrowotnego (NFZ lub prywatne)',
        'Dowód uiszczenia opłaty skarbowej w wysokości 640 PLN'
      ]
    },
    pricing: {
      title: 'Wynagrodzenie kancelarii',
      items: [
        { label: 'Kompleksowe prowadzenie sprawy', value: 'od 3 500 PLN', note: 'Od analizy do odbioru karty - obsługa korespondencji urzędowej' },
        { label: 'Postępowanie w sprawie polskiego pochodzenia', value: 'od 2 000 PLN', note: 'Kwerendy archiwalne rozliczane odrębnie' },
        { label: 'Konsultacja wstępna', value: 'Bezpłatnie', note: 'Ocena przesłanek z art. 195 u.o.c.' }
      ],
      note: 'Opłaty publicznoprawne 640 + 100 PLN uiszcza Klient bezpośrednio na rachunek urzędu wojewódzkiego.'
    },
    legalBase: {
      title: 'Akty prawne mające zastosowanie',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Dz.U. 2013 poz. 1650 ze zm.) - Dział IV',
        'Dyrektywa Rady 2003/109/WE w sprawie statusu obywateli państw trzecich będących rezydentami długoterminowymi',
        'Ustawa z dnia 7 września 2007 r. o Karcie Polaka (Dz.U. 2007 nr 180 poz. 1280)'
      ]
    },
    faq: [
      { q: 'Czym różni się zezwolenie na pobyt stały od statusu rezydenta długoterminowego UE?', a: 'Oba zezwolenia są bezterminowe i wynikają z różnych przesłanek. Pobyt stały (art. 195 u.o.c.) opiera się głównie na więzach z Polską - małżeństwo, pochodzenie, Karta Polaka. Status rezydenta długoterminowego UE (art. 211 u.o.c., implementacja Dyrektywy 2003/109/WE) wymaga 5 lat nieprzerwanego pobytu, znajomości języka polskiego na poziomie co najmniej B1 oraz stabilnego dochodu. Daje natomiast prawo przeniesienia pobytu do innego państwa członkowskiego UE.' },
      { q: 'Czy wymagana jest znajomość języka polskiego na poziomie B1?', a: 'W przypadku pobytu stałego (art. 195 u.o.c.) ustawa nie wymaga zdania egzaminu certyfikatowego - znajomość języka oceniana jest w kontekście wymogu integracji. Egzamin B1 (certyfikat państwowy) jest natomiast obligatoryjny przy ubieganiu się o obywatelstwo polskie oraz przy statusie rezydenta długoterminowego UE.' },
      { q: 'W jaki sposób spełnić wymóg integracji ze społeczeństwem polskim?', a: 'Wymóg integracji oceniany jest łącznie - na podstawie znajomości języka, stabilności zatrudnienia, posiadania miejsca zamieszkania, więzi rodzinnych oraz długości i charakteru pobytu. W postępowaniu pomocne są: świadectwo pracy, umowy o pracę, zaświadczenia o nauce dzieci w polskich szkołach, certyfikaty językowe.' },
      { q: 'Co się dzieje, gdy karta wygasa, a status pozostaje bezterminowy?', a: 'Zgodnie z art. 244 u.o.c. status zezwolenia na pobyt stały nie wygasa wraz z dokumentem materialnym. Konieczne jest złożenie wniosku o wymianę karty pobytu nie później niż na 30 dni przed upływem terminu ważności - opłata wynosi 100 PLN, bez ponownego badania przesłanek.' },
      { q: 'Po jakim czasie można ubiegać się o obywatelstwo polskie?', a: 'Po 3 latach nieprzerwanego pobytu na podstawie zezwolenia na pobyt stały, łącznie ze spełnieniem wymogów art. 30 ust. 1 ustawy o obywatelstwie polskim - certyfikat języka polskiego na poziomie B1, ustabilizowane i regularne źródło dochodu oraz tytuł prawny do lokalu mieszkalnego.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'Zezwolenie na pobyt stały - poprowadzimy Państwa sprawę',
    ctaSubtitle: 'Bezpłatna analiza przesłanek z art. 195 ustawy o cudzoziemcach i ocena perspektyw uzyskania decyzji pozytywnej.'
  },
  en: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'PR',
    title: 'Permanent Residence',
    subtitle: 'Karta Stałego Pobytu - Polish PR',
    lead: 'Polish permanent residence is granted indefinitely; the physical card is valid for 10 years and then renewed. It unlocks nearly the same rights as citizens enjoy, except voting and civil service.',
    facts: [
      { label: 'Status', value: 'indefinite', note: 'card reissued every 10 years' },
      { label: 'Official fees', value: '640 + 100 PLN', note: 'application + card' },
      { label: 'Decision', value: '3-6 months', note: 'statutory up to 180 days' },
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
        { title: 'Documents', duration: '2-4 weeks', desc: 'Certificates, translations, proof of Polish roots if applicable.' },
        { title: 'Filing via MOS v2.0', duration: '1 day', desc: 'Application + 640 PLN fee.' },
        { title: 'Biometrics', duration: '1 visit', desc: 'Fingerprints at the voivode.' },
        { title: 'Review', duration: '3-6 months', desc: 'We respond to requests via eDoręczenia.' },
        { title: 'Card collection', duration: '7 days', desc: '+100 PLN. After PR - citizenship application in 3 years.' }
      ]
    },
    documents: {
      title: 'Document pack for PR',
      items: [
        'Wniosek o udzielenie zezwolenia na pobyt stały - prepared by us',
        'Passport + domestic documents',
        '4 biometric photos 35×45 mm',
        'Ground-specific proof (marriage certificate, Karta Polaka, refugee decision)',
        'Polish-roots evidence - for the origin ground (archival records, ancestors\' birth certificates)',
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
        'Law on Foreigners - Section IV (permanent residence)',
        'Karta Polaka Act of 7 September 2007',
        '1951 Geneva Convention on refugee status'
      ]
    },
    faq: [
      { q: 'Do I need Polish B1 for PR?', a: 'Only for specific grounds. For marriage-based or Karta Polaka routes no language exam is required.' },
      { q: 'Can I skip TRC and apply directly for PR?', a: 'Yes - with Karta Polaka, as spouse of a Polish citizen after 3 years of marriage + 2 years of residence, or as a refugee after 5 years of status.' },
      { q: 'What happens when the card expires but status is indefinite?', a: 'Your status stays. You simply reissue the card - 100 PLN fee, apply a month before expiry.' },
      { q: 'When can I apply for citizenship after PR?', a: 'After 3 years of uninterrupted PR + Polish B1 + stable income + housing. Some paths are faster (spouses).' },
      { q: 'Do I lose my first citizenship?', a: 'Poland allows dual citizenship. But your home country may require renunciation - check separately.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'Ready to move from TRC to PR?',
    ctaSubtitle: 'Free consultation - we\'ll map the grounds and timelines to your specific case.'
  },
  tr: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'Daimi ikamet',
    title: 'Karta Stałego Pobytu',
    subtitle: 'Polonya daimi oturum kartı',
    lead: 'Polonya daimi oturum hakkı (pobyt stały) süresiz olarak verilir, fiziksel kart 10 yıl geçerlidir ve sonrasında yenilenir. Oy kullanma ve kamu görevleri dışında neredeyse tüm vatandaşlık haklarını sağlar.',
    facts: [
      { label: 'Statü', value: 'süresiz', note: 'kart 10 yılda bir yenilenir' },
      { label: 'Resmi harçlar', value: '640 + 100 PLN', note: 'başvuru + kart' },
      { label: 'Karar süresi', value: '3-6 ay', note: 'yasal süre 180 güne kadar' },
      { label: 'Sonuç', value: 'vatandaşa yakın haklar', note: 'oy kullanma hariç' }
    ],
    grounds: {
      title: 'Daimi ikamet hakkını kim alabilir',
      items: [
        { title: 'Polonya vatandaşlarının eşleri', desc: '3 yıllık evlilik ve 2 yıl kesintisiz TRC (geçici oturum) ikametinden sonra.' },
        { title: 'Polonya kökenli kişiler', desc: 'Polonya köken kanıtıyla (anne-baba / büyükanne-büyükbaba) ve kalıcı yerleşim niyetiyle.' },
        { title: 'Karta Polaka (Polonyalı Kartı) sahipleri', desc: 'Karta Polaka ile, önceden TRC olmadan doğrudan daimi ikamet başvurusu yapılabilir.' },
        { title: 'Mülteciler ve insani statü sahipleri', desc: '5 yıllık mülteci statüsü veya koruma sonrasında.' },
        { title: 'Polonya\'da doğan çocuklar', desc: 'Polonya\'da doğan, daimi ikamet sahibi ebeveynlerin reşit olmayan çocukları.' },
        { title: 'İnsan ticareti mağdurları', desc: 'Özel koşullarda insani ikamet veya tamamlayıcı koruma kapsamında.' }
      ]
    },
    timeline: {
      title: 'Süreç nasıl işliyor',
      steps: [
        { title: 'Gerekçe değerlendirmesi', duration: '30 dk', desc: 'Dosyanızın daimi ikamet gerekçelerinden hangisine uygun olduğunu değerlendiririz.' },
        { title: 'Belgelerin derlenmesi', duration: '2-4 hafta', desc: 'Nüfus kayıtları, tercümeler, gerekiyorsa Polonya köken kanıtı.' },
        { title: 'MOS v2.0\'a yükleme', duration: '1 gün', desc: 'Başvuruyu yükleriz, 640 PLN opłata skarbowa (damga vergisi) öderiz.' },
        { title: 'Biyometri', duration: '1 ziyaret', desc: 'Voivoda nezdinde parmak izi ve fotoğraf.' },
        { title: 'İnceleme', duration: '3-6 ay', desc: 'eDoręczenia üzerinden gelen taleplere yanıt veririz.' },
        { title: 'Kartın teslimi', duration: '7 gün', desc: 'Kart blanketi için +100 PLN. Daimi ikametten sonra 3 yıl içinde vatandaşlık başvurusu yapılabilir.' }
      ]
    },
    documents: {
      title: 'Daimi ikamet için belgeler',
      items: [
        'Wniosek o udzielenie zezwolenia na pobyt stały (daimi ikamet izni başvurusu) - biz hazırlıyoruz',
        'Pasaport + tüm yerel kimlik belgeleri',
        '4 adet biyometrik fotoğraf 35×45 mm',
        'Gerekçeyi kanıtlayan belge (evlilik cüzdanı, Karta Polaka, mülteci kararı vb.)',
        'Polonya köken kanıtı - ilgili gerekçe için (arşiv kayıtları, atalara ait akty urodzenia / doğum belgeleri)',
        'Son 2 yılın gelir kaynakları (PIT, banka ekstresi)',
        'Umowa najmu (kira sözleşmesi) veya zameldowanie (ikamet beyanı)',
        'Sağlık sigortası',
        '640 PLN ödeme dekontu'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: 'Gerekçe değerlendirmesi' },
        { label: 'Anahtar teslim daimi ikamet takibi', value: '3.500 PLN\'den', note: 'Tam paket' },
        { label: 'Polonya kökenin tespiti', value: '2.000 PLN\'den', note: 'Arşiv araştırması ayrı fatura' }
      ],
      note: 'Resmi harçlar 640 + 100 PLN ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa o cudzoziemcach (Yabancılar Kanunu) - Bölüm IV (daimi ikamet)',
        'Ustawa o Karcie Polaka z 7 września 2007 r. (7 Eylül 2007 tarihli Karta Polaka Kanunu)',
        '1951 tarihli Cenevre Mülteci Sözleşmesi'
      ]
    },
    faq: [
      { q: 'Daimi ikamet için B1 seviyesinde Lehçe gerekli mi?', a: 'Hayır - yalnızca natüralizasyon (vatandaşlık) için zorunludur. Evlilik veya Karta Polaka üzerinden daimi ikamette dil sınavı şartı yoktur.' },
      { q: 'TRC almadan doğrudan daimi ikamet başvurusu yapabilir miyim?', a: 'Evet - Karta Polaka sahibiyseniz, Polonya vatandaşıyla 3 yıl evli ve 2 yıl ikamet etmişseniz veya 5 yıllık mülteci statünüz varsa.' },
      { q: 'Kartın süresi dolarsa ama statü süresizse ne olur?', a: 'Statünüz devam eder. Yalnızca kartı yenilemeniz gerekir - 100 PLN harç, başvuru sürenin dolmasından bir ay önce yapılır.' },
      { q: 'Daimi ikametten sonra ne zaman vatandaşlık başvurusu yapabilirim?', a: '3 yıl kesintisiz daimi ikamet + B1 seviyesinde Lehçe + istikrarlı gelir + konut. Özel durumlarda (örneğin eş statüsü) süre kısalır.' },
      { q: 'Önceki vatandaşlığımı kaybeder miyim?', a: 'Polonya çifte vatandaşlığa izin verir. Türkiye-Polonya çifte vatandaşlığı tanınır. Türk vatandaşları Polonya vatandaşlığı aldıktan sonra Türk vatandaşlığını koruyabilir; bunun için Türkiye\'nin "Çıkma izniyle vatandaşlığı muhafaza" düzenlemelerini incelemenizi öneririz.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'TRC\'den daimi ikamete geçmeye hazır mısınız?',
    ctaSubtitle: 'Ücretsiz danışmanlıkta gerekçenizi ve sürelerinizi sizin durumunuza göre netleştiririz.'
  },
  uk: {
    slug: 'karta-stalego-pobytu',
    group: 'immigration',
    icon: 'home',
    badge: 'Сталий побут',
    title: 'Karta Stałego Pobytu',
    subtitle: 'Карта сталого побуту в Польщі для українців',
    lead: 'Якщо ви з України, Білорусі чи Казахстану і вже прожили в Польщі 5 років на тимчасових картах — час переходити на pobyt stały. Статус безстроковий, пластик змінюється раз на 10 років, а з Kartą Polaka можна зайти напряму, оминаючи п’ятирічку.',
    facts: [
      { label: 'Термін очікування', value: '3–6 міс.', note: 'Mazowiecki Urząd Wojewódzki — до 8 міс. у пікові періоди' },
      { label: 'Збори', value: '640 + 100 PLN', note: 'wniosek + бланк карти' },
      { label: 'Статус', value: 'безстроково', note: 'карта — кожні 10 років' },
      { label: 'Що дає', value: 'майже як у поляків', note: 'крім виборів і служби в поліції' }
    ],
    grounds: {
      title: 'На якій підставі можна подавати',
      items: [
        { title: 'Karta Polaka — найшвидший шлях', desc: 'Якщо у вас на руках Karta Polaka, карта побуту взагалі не потрібна — йдете прямо на pobyt stały. Львів’яни, гродненці, мешканці Бреста й Вінниці користуються цією підставою найчастіше.' },
        { title: 'Польське походження (pochodzenie polskie)', desc: 'Прадід народився у Львові до 1939-го? Бабуся з Гродна? Архівні wypisy зі львівських, віленських і брестських РАЦСів дають право подавати одразу — без 5 років очікування.' },
        { title: 'Чоловік / дружина громадянина Польщі', desc: '3 роки офіційного шлюбу + 2 роки безперервного pobyt czasowy. Розлучення до рішення — підстава згорає.' },
        { title: '5 років на карті побуту в Польщі', desc: 'Для українців на UKR і beneficjentów ochrony czasowej (отримувачів тимчасового захисту) — термін UKR у стаж не зараховується. Рахуємо лише karta pobytu czasowego.' },
        { title: 'Статус біженця / ochrona uzupełniająca', desc: 'Після 5 років від моменту подання заяви на міжнародний захист, а не від моменту отримання статусу.' },
        { title: 'Дитина народилася в Польщі в батька / матері зі сталим побутом', desc: 'Якщо на момент народження хоч один із батьків уже мав pobyt stały — подаємо окремий wniosek на дитину.' }
      ]
    },
    timeline: {
      title: 'Як іде справа по кроках',
      steps: [
        { title: 'Розбір підстави', duration: '30 хв', desc: 'На безкоштовній зустрічі дивимося, за якою з шести підстав ви реально проходите. Часто роботодавець у Варшаві вже видав 5-річну карту — отже, підстава дозріла.' },
        { title: 'Збір паперів', duration: '2–4 тижні', desc: 'Замовлення wypisów з українських і білоруських архівів іде через консульство — закладайте час.' },
        { title: 'Запис на pl. Bankowy 3/5', duration: '1 день', desc: 'Подання через MOS v2.0 + сплата 640 PLN на рахунок Mazowieckiego Urzędu Wojewódzkiego.' },
        { title: 'Відбитки та підпис', duration: '1 візит', desc: 'Біометрію проходять на Wojska Polskiego 17 — корпус Wydziału Spraw Cudzoziemców. За записом, без живої черги.' },
        { title: 'Stempel у паспорт', duration: 'у день подання', desc: 'Печатка про подання (stempel) дає легальне право працювати та виїжджати в Шенген до рішення.' },
        { title: 'Карта на руки', duration: '7–14 днів після рішення', desc: '+100 PLN за пластик. Через 3 роки pobytu stałego відкривається шлях до obywatelstwa polskiego.' }
      ]
    },
    documents: {
      title: 'Що збирати на pobyt stały',
      items: [
        'Закордонний паспорт + копії всіх сторінок із печатками',
        'Wniosek o udzielenie zezwolenia na pobyt stały — заповнюємо ми польською',
        '4 фото 35×45 мм зі світлим тлом, не старше 6 міс.',
        'Документ під підставу — akt małżeństwa з апостилем, Karta Polaka, decyzja uchodźcza',
        'Архівні wypisy на польських предків — найчастіше з РАЦСів Львова, Гродна, Бреста, Вінниці',
        'Tytuł prawny do mieszkania — umowa najmu okazjonalnego або zameldowanie czasowe',
        'PIT-37 або PIT-11 за останні 2 роки + umowa o pracę',
        'Ubezpieczenie zdrowotne — ZUS RMUA або приватне страхування',
        'Dowód wpłaty 640 PLN на рахунок воєводства'
      ]
    },
    pricing: {
      title: 'Скільки коштує вести справу',
      items: [
        { label: 'Перша зустріч', value: 'Безкоштовно', note: 'Розбираємо підставу та терміни' },
        { label: 'Повне ведення pobytu stałego', value: 'від 3 500 PLN', note: 'Від wniosku до отримання карти' },
        { label: 'Підтвердження польського коріння', value: 'від 2 000 PLN', note: 'Робота з архівами Львова, Гродна, Вільнюса' }
      ],
      note: 'Держмита 640 + 100 PLN сплачуєте напряму воєводству.'
    },
    legalBase: {
      title: 'На що ми спираємось',
      items: [
        'Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach — Dział IV',
        'Ustawa z dnia 7 września 2007 r. o Karcie Polaka',
        'Konwencja Genewska 1951 r. — dla uchodźców'
      ]
    },
    faq: [
      { q: 'У мене Karta Polaka — реально не треба жити 5 років до подання?', a: 'Реально. Karta Polaka — це самостійна підстава за art. 195 ust. 1 pkt 9 ustawy o cudzoziemcach. Хоч наступного дня після переїзду зі Львова чи Мінська — можна подавати на pobyt stały напряму.' },
      { q: 'Чи зараховується час по UKR у 5 років для карти сталого побуту?', a: 'Ні. Перебування за тимчасовим захистом UKR у стаж pobytu stałego не йде. Термін починає рахуватися лише з першої karty pobytu czasowego — це важливо для українців, які приїхали після лютого 2022-го.' },
      { q: 'Чи потрібна мені польська B1?', a: 'Для самої pobyt stały — ні, мовного іспиту немає на жодній підставі. B1 знадобиться пізніше, через 3 роки, коли подаватимете на громадянство.' },
      { q: 'Що якщо карта закінчилася, а рішення про pobyt stały ще немає?', a: 'Якщо подали wniosek до закінчення попередньої карти — отримуєте stempel у паспорт, і він легалізує перебування до моменту рішення. Головне — подати завчасно, щонайменше за 45 днів.' },
      { q: 'Чи збережу я українське / білоруське громадянство?', a: 'З погляду Польщі — так, вона допускає множинне громадянство. З боку вашої країни: Україна формально вимагає виходу при прийнятті нового громадянства, Білорусь — аналогічно. На етапі карти сталого побуту це поки не критично — питання постає лише при obywatelstwie polskim.' }
    ],
    related: ['karta-pobytu', 'obywatelstwo', 'karta-polaka'],
    ctaTitle: 'П’ять років уже в Польщі? Час на сталий побут',
    ctaSubtitle: 'На безкоштовній зустрічі розберемо вашу підставу, перевіримо стаж і скажемо, яким шляхом іти швидше.'
  }
};

export default kartaStalegoPobytu;
