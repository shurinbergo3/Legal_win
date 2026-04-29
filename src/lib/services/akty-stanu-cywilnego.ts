import type { ServiceEntry } from './types';

const aktyStanuCywilnego: ServiceEntry = {
  ru: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Umiejscowienie',
    title: 'Акты гражданского состояния',
    subtitle: 'Свидетельства о рождении, браке и смерти в Польше',
    lead: 'Акты гражданского состояния (akty stanu cywilnego) — свидетельства о рождении, браке и смерти, выдаваемые польским USC. Иностранцу они нужны для оформления PESEL, заключения брака с гражданином ЕС, признания иностранного акта в Польше (umiejscowienie), регистрации ребёнка, рождённого в Польше, и при подаче на TRC, ПМЖ или гражданство. Работаем с USC и BUSC напрямую — забираем odpis, ставим apostille, делаем присяжный перевод.',
    facts: [
      { label: 'Срок выдачи', value: '7 дней', note: 'standardowo · до 30 дней' },
      { label: 'Госпошлина', value: '22–39 PLN', note: 'odpis skrócony / zupełny' },
      { label: 'Umiejscowienie', value: '50 PLN', note: 'вписание иностранного акта' },
      { label: 'Где', value: 'USC + BUSC', note: 'локально или централизованно' }
    ],
    grounds: {
      title: 'Какие акты оформляем',
      subtitle: 'USC ведёт три типа реестров — мы работаем со всеми.',
      items: [
        { title: 'Akt urodzenia (рождение)', desc: 'Регистрация ребёнка, рождённого в Польше; получение odpisu для иностранного гражданина; umiejscowienie зарубежного свидетельства о рождении.' },
        { title: 'Akt małżeństwa (брак)', desc: 'Заключение брака с польским гражданином или другим иностранцем в USC; umiejscowienie зарубежного свидетельства о браке.' },
        { title: 'Akt zgonu (смерть)', desc: 'Регистрация смерти в Польше; umiejscowienie зарубежного свидетельства о смерти; получение odpisu для наследства.' },
        { title: 'Umiejscowienie aktu zagranicznego', desc: 'Вписание иностранного свидетельства в польский реестр USC. Обязательно для разводов, наследства, второго брака, смены фамилии.' },
        { title: 'Sprostowanie i uzupełnienie', desc: 'Исправление ошибок в актах: даты, фамилии, места рождения. Через postanowienie USC или sąd cywilny.' },
        { title: 'Zmiana nazwiska / imienia', desc: 'Смена имени/фамилии иностранца — через USC по уважительной причине, занимает 30–60 дней.' },
        { title: 'Apostille на польские акты', desc: 'Wojewoda ставит apostille на польские свидетельства USC для использования за рубежом.' },
        { title: 'Odtworzenie aktu', desc: 'Восстановление утерянного акта (например, потерянного USC во время войны) — через постановление sądu cywilnego.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем акт',
      subtitle: 'Стандартный цикл umiejscowienia + odpis с apostille — 2–3 недели.',
      steps: [
        { title: 'Консультация', duration: '30 мин', desc: 'Уточняем тип акта, цель использования, страну выдачи иностранного документа.' },
        { title: 'Сбор документов', duration: '3–7 дней', desc: 'Получаем оригиналы из страны выдачи, делаем apostille (если требуется), организуем присяжный перевод на польский.' },
        { title: 'Wniosek o umiejscowienie', duration: '1 день', desc: 'Подаём wniosek в USC по выбранной локализации (часто Warszawa-Śródmieście как наиболее быстрый).' },
        { title: 'Postępowanie USC', duration: '7–30 дней', desc: 'Kierownik USC проверяет документы, вписывает акт в польский реестр, выдаёт polski odpis.' },
        { title: 'Получение odpisu', duration: '1 день', desc: 'Skrócony (22 PLN) для большинства целей или zupełny (33 PLN) для нотариальных сделок.' },
        { title: 'Apostille / перевод', duration: '3–5 дней', desc: 'При необходимости — apostille от wojewody на польский odpis и присяжный перевод на язык страны использования.' }
      ]
    },
    documents: {
      title: 'Что нужно от вас',
      subtitle: 'Точный список зависит от типа акта и страны выдачи.',
      items: [
        'Паспорт (оригинал + копии)',
        'PESEL (если есть)',
        'Иностранное свидетельство о рождении/браке/смерти (оригинал)',
        'Apostille или легализация на иностранный документ',
        'Присяжный перевод иностранного акта на польский (делаем мы)',
        'Документ о разводе / смерти супруга — для umiejscowienia брака',
        'Согласие супруга — при изменении фамилии после брака',
        'Заполненный wniosek — готовим мы'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированный гонорар. Госпошлины USC — отдельно по факту.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · оценка ситуации' },
        { label: 'Получение odpisu', value: 'от 250 PLN', note: 'Wniosek, USC, отправка курьером' },
        { label: 'Umiejscowienie aktu', value: 'от 700 PLN', note: 'Полный цикл вписания иностранного акта' },
        { label: 'Apostille + перевод odpisu', value: 'от 350 PLN', note: 'Wojewoda + присяжный переводчик' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (22 PLN odpis skrócony, 33 PLN zupełny, 50 PLN umiejscowienie, 60 PLN apostille) и присяжный перевод (~80 PLN/документ) — отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 28 listopada 2014 r. — Prawo o aktach stanu cywilnego',
        'Rozporządzenie MSWiA w sprawie wzorów odpisów aktów stanu cywilnego',
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej',
        'Rozporządzenie (UE) 2016/1191 (eliminacja legalizacji w UE)'
      ]
    },
    faq: [
      { q: 'Что такое umiejscowienie aktu?', a: 'Это вписание иностранного свидетельства о рождении/браке/смерти в польский реестр USC. После umiejscowienia вы получаете polski odpis, который принимают все польские учреждения без перевода. Обязательно для повторного брака, наследства, смены фамилии.' },
      { q: 'Сколько по времени занимает umiejscowienie?', a: 'От 7 дней (Warszawa-Śródmieście, документы из ЕС) до 30 дней (другие воеводства, документы из не-ЕС стран). Если документ старый или из страны вне Гаагской конвенции — может быть до 60 дней с дополнительными запросами.' },
      { q: 'Нужно ли umiejscowienie для подачи на TRC?', a: 'Нет, для TRC достаточно оригинала иностранного свидетельства с apostille и присяжным переводом. Umiejscowienie обязательно для повторного брака в Польше, оформления гражданства, наследственных дел.' },
      { q: 'Что такое apostille и когда нужен?', a: 'Apostille — упрощённая легализация документов между странами Гаагской конвенции 1961 г. Польша требует apostille на все иностранные публичные документы из стран Конвенции (СНГ, США, Великобритания и др.). В странах ЕС — apostille не нужно с 2019 года (Регламент 2016/1191).' },
      { q: 'Где быстрее сделать umiejscowienie — в Варшаве или регионе?', a: 'USC Warszawa-Śródmieście работает быстрее всех — 7–14 дней. Региональные USC — 14–30 дней. Подаём через Warszawa, даже если живёте в другом городе — закон позволяет.' },
      { q: 'Можно ли получить odpis aktu онлайн?', a: 'Да, через ePUAP или mObywatel — для лиц с польским PESEL и profil zaufany. Срок — 7 дней, цена та же. Делаем для клиентов через нашу e-platform.' },
      { q: 'Что делать с разводом из страны вне ЕС?', a: 'Для умieнsования брака в Польше нужно: иностранное свидетельство о разводе с apostille + присяжный перевод. Если брак был в Польше — wpis o rozwiązaniu добавляется по wniosku или automatycznie через sąd. Для сложных случаев — отдельная процедура uznania zagranicznego wyroku rozwodowego.' }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'Свидетельства USC под ключ',
    ctaSubtitle: 'Бесплатная консультация: уточним тип акта, страну выдачи, цель использования. От подачи в USC до polski odpis с apostille — обычно 2–3 недели.'
  },
  pl: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Umiejscowienie',
    title: 'Akty stanu cywilnego',
    subtitle: 'Akty urodzenia, małżeństwa i zgonu',
    lead: 'Akty stanu cywilnego — odpisy USC: aktów urodzenia, małżeństwa i zgonu. Cudzoziemcowi potrzebne są do PESEL, ślubu z obywatelem UE, umiejscowienia aktu zagranicznego, rejestracji dziecka urodzonego w Polsce oraz wniosków o TRC, PR i obywatelstwo. Pracujemy bezpośrednio z USC i BUSC — odbieramy odpisy, robimy apostille i tłumaczenia przysięgłe.',
    facts: [
      { label: 'Termin', value: '7 dni', note: 'standardowo · do 30 dni' },
      { label: 'Opłata', value: '22–39 PLN', note: 'odpis skrócony / zupełny' },
      { label: 'Umiejscowienie', value: '50 PLN', note: 'wpis aktu zagranicznego' },
      { label: 'Gdzie', value: 'USC + BUSC', note: 'lokalnie lub centralnie' }
    ],
    grounds: {
      title: 'Jakie akty załatwiamy',
      subtitle: 'USC prowadzi trzy rodzaje rejestrów — pracujemy ze wszystkimi.',
      items: [
        { title: 'Akt urodzenia', desc: 'Rejestracja dziecka urodzonego w Polsce; odpis dla cudzoziemca; umiejscowienie aktu zagranicznego.' },
        { title: 'Akt małżeństwa', desc: 'Ślub z obywatelem RP lub innym cudzoziemcem; umiejscowienie zagranicznego.' },
        { title: 'Akt zgonu', desc: 'Rejestracja zgonu w Polsce; umiejscowienie zagranicznego; odpis dla spadku.' },
        { title: 'Umiejscowienie aktu zagranicznego', desc: 'Wpis aktu zagranicznego do polskiego rejestru USC. Konieczne do rozwodu, spadku, drugiego ślubu, zmiany nazwiska.' },
        { title: 'Sprostowanie i uzupełnienie', desc: 'Korekta błędów: data, nazwisko, miejsce. Przez postanowienie USC lub sąd cywilny.' },
        { title: 'Zmiana nazwiska / imienia', desc: 'Zmiana danych cudzoziemca — przez USC z uzasadnieniem, 30–60 dni.' },
        { title: 'Apostille na akty polskie', desc: 'Wojewoda nadaje apostille na polskie odpisy USC do użytku za granicą.' },
        { title: 'Odtworzenie aktu', desc: 'Odtworzenie aktu zaginionego — przez sąd cywilny.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standardowy cykl umiejscowienie + odpis z apostille — 2–3 tygodnie.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Ustalamy rodzaj aktu, cel, kraj wydania zagranicznego dokumentu.' },
        { title: 'Zbiór dokumentów', duration: '3–7 dni', desc: 'Pobieramy oryginały z kraju wydania, organizujemy apostille i tłumaczenie przysięgłe.' },
        { title: 'Wniosek o umiejscowienie', duration: '1 dzień', desc: 'Składamy do USC (często Warszawa-Śródmieście — najszybsze).' },
        { title: 'Postępowanie USC', duration: '7–30 dni', desc: 'Kierownik USC weryfikuje, wpisuje akt do polskiego rejestru, wydaje polski odpis.' },
        { title: 'Odbiór odpisu', duration: '1 dzień', desc: 'Skrócony (22 PLN) lub zupełny (33 PLN).' },
        { title: 'Apostille / tłumaczenie', duration: '3–5 dni', desc: 'Apostille u wojewody i tłumaczenie przysięgłe na język docelowy.' }
      ]
    },
    documents: {
      title: 'Co od Ciebie potrzebujemy',
      subtitle: 'Lista zależy od rodzaju aktu i kraju wydania.',
      items: [
        'Paszport (oryginał + kopie)',
        'PESEL (jeśli jest)',
        'Zagraniczny akt urodzenia/małżeństwa/zgonu (oryginał)',
        'Apostille lub legalizacja na zagranicznym dokumencie',
        'Tłumaczenie przysięgłe — robimy my',
        'Akt rozwodu / zgonu małżonka — do umiejscowienia ślubu',
        'Zgoda małżonka — przy zmianie nazwiska po ślubie',
        'Wypełniony wniosek — przygotowujemy my'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena. Opłaty USC — osobno wg taryf.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · ocena' },
        { label: 'Odpis aktu', value: 'od 250 PLN', note: 'Wniosek, USC, kurier' },
        { label: 'Umiejscowienie', value: 'od 700 PLN', note: 'Pełny cykl wpisu aktu zagranicznego' },
        { label: 'Apostille + tłumaczenie', value: 'od 350 PLN', note: 'Wojewoda + tłumacz przysięgły' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty USC (22/33/50 PLN) i tłumaczenia (~80 PLN/dok.) — osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 28 listopada 2014 r. — Prawo o aktach stanu cywilnego',
        'Rozporządzenie MSWiA ws. wzorów odpisów aktów stanu cywilnego',
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z 16 listopada 2006 r. o opłacie skarbowej',
        'Rozporządzenie (UE) 2016/1191 (eliminacja legalizacji w UE)'
      ]
    },
    faq: [
      { q: 'Czym jest umiejscowienie aktu?', a: 'Wpis zagranicznego aktu do polskiego rejestru USC. Po umiejscowieniu otrzymujesz polski odpis akceptowany przez wszystkie urzędy bez tłumaczenia. Wymagane do drugiego ślubu, spadku, zmiany nazwiska.' },
      { q: 'Ile trwa umiejscowienie?', a: 'Od 7 dni (Warszawa-Śródmieście, dokumenty UE) do 30 dni (inne województwa, kraje spoza UE). Stare lub spoza konwencji haskiej — do 60 dni.' },
      { q: 'Czy umiejscowienie jest potrzebne do TRC?', a: 'Nie — do TRC wystarczy oryginał z apostille i tłumaczeniem. Umiejscowienie jest konieczne do drugiego ślubu, obywatelstwa, spraw spadkowych.' },
      { q: 'Czym jest apostille?', a: 'Uproszczona legalizacja między państwami konwencji haskiej 1961. Polska wymaga apostille na zagraniczne akty z państw konwencji (CIS, USA, UK). W UE apostille zniesione od 2019 (Rozp. 2016/1191).' },
      { q: 'Gdzie szybciej — Warszawa czy region?', a: 'USC Warszawa-Śródmieście — 7–14 dni. Regionalne — 14–30 dni. Składamy w Warszawie nawet dla osób z innych miast.' },
      { q: 'Czy odpis online?', a: 'Tak — przez ePUAP lub mObywatel dla osób z PESEL i profilem zaufanym. 7 dni, ta sama cena.' },
      { q: 'Rozwód z państwa spoza UE?', a: 'Do umiejscowienia ślubu w PL: zagraniczny akt rozwodu z apostille + tłumaczenie. Jeśli ślub był w Polsce — wpis o rozwiązaniu z wniosku lub przez sąd. Trudne sprawy — uznanie zagranicznego wyroku rozwodowego.' }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'Akty USC pod klucz',
    ctaSubtitle: 'Bezpłatna konsultacja: rodzaj aktu, kraj wydania, cel. Od wniosku do polskiego odpisu z apostille — zwykle 2–3 tygodnie.'
  },
  en: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Recognition',
    title: 'Civil status acts (USC)',
    subtitle: 'Polish birth, marriage and death certificates',
    lead: 'Akty stanu cywilnego — Polish civil-status records issued by USC: birth, marriage and death certificates. Foreigners need them for PESEL, marrying an EU citizen, recognising a foreign certificate in Poland (umiejscowienie), registering a child born in Poland, and TRC, PR and citizenship applications. We work directly with USC and BUSC — collect odpisy, secure apostilles, arrange sworn translations.',
    facts: [
      { label: 'Issuance', value: '7 days', note: 'standard · up to 30 days' },
      { label: 'State fee', value: '22–39 PLN', note: 'short / full extract' },
      { label: 'Recognition', value: '50 PLN', note: 'foreign-act recognition' },
      { label: 'Where', value: 'USC + BUSC', note: 'local or centralised' }
    ],
    grounds: {
      title: 'What we handle',
      subtitle: 'USC keeps three types of registers — we work across all of them.',
      items: [
        { title: 'Birth certificate', desc: 'Registering a child born in Poland; odpis for a foreign national; recognition of a foreign birth certificate.' },
        { title: 'Marriage certificate', desc: 'Marriage to a Polish citizen or another foreigner at USC; recognition of foreign marriage.' },
        { title: 'Death certificate', desc: 'Registering a death in Poland; recognition of a foreign death certificate; odpis for inheritance.' },
        { title: 'Foreign-act recognition (umiejscowienie)', desc: 'Entering a foreign certificate into the Polish USC register. Required for divorce, inheritance, second marriage, name change.' },
        { title: 'Correction & supplementation', desc: 'Fixing errors: dates, names, places. Through USC or civil-court order.' },
        { title: 'Name change', desc: 'Foreigner name/surname change via USC with justification — 30–60 days.' },
        { title: 'Apostille on Polish acts', desc: 'Voivode issues apostille on Polish USC odpisy for foreign use.' },
        { title: 'Act reconstruction', desc: 'Reconstruction of a lost act through civil-court ruling.' }
      ]
    },
    timeline: {
      title: 'Timeline',
      subtitle: 'Standard recognition + apostilled odpis cycle — 2–3 weeks.',
      steps: [
        { title: 'Consultation', duration: '30 min', desc: 'Identify act type, purpose, issuing country.' },
        { title: 'Document gathering', duration: '3–7 days', desc: 'Collect originals from the issuing country, secure apostille, arrange sworn translation.' },
        { title: 'Recognition application', duration: '1 day', desc: 'File with USC (often Warszawa-Śródmieście — fastest).' },
        { title: 'USC review', duration: '7–30 days', desc: 'USC head verifies, enters the act into the Polish register, issues a Polish odpis.' },
        { title: 'Odpis pickup', duration: '1 day', desc: 'Short (22 PLN) or full (33 PLN) extract.' },
        { title: 'Apostille / translation', duration: '3–5 days', desc: 'Voivode apostille and sworn translation if needed.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'Exact list depends on act type and issuing country.',
      items: [
        'Passport (original + copies)',
        'PESEL (if any)',
        'Foreign birth/marriage/death certificate (original)',
        'Apostille or legalisation on the foreign document',
        'Sworn translation into Polish — we handle it',
        'Divorce/spouse death certificate — for marriage recognition',
        'Spouse consent — for surname change after marriage',
        'Completed application — we prepare it'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Fixed price. USC fees billed separately at actual rates.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes · case review' },
        { label: 'Odpis collection', value: 'from 250 PLN', note: 'Application, USC, courier' },
        { label: 'Foreign-act recognition', value: 'from 700 PLN', note: 'Full umiejscowienie cycle' },
        { label: 'Apostille + translation', value: 'from 350 PLN', note: 'Voivode + sworn translator' }
      ],
      note: 'LegalWin fees. USC fees (22/33/50 PLN) and sworn translations (~80 PLN/doc) billed separately.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Civil Status Records Act of 28 November 2014',
        'MSWiA Regulation on USC odpis templates',
        'Hague Convention of 5 October 1961 (apostille)',
        'Stamp Duty Act of 16 November 2006',
        'Regulation (EU) 2016/1191 (intra-EU legalisation removal)'
      ]
    },
    faq: [
      { q: 'What is umiejscowienie?', a: 'It\'s entering a foreign certificate into the Polish USC register. After umiejscowienie you receive a Polish odpis accepted by every Polish institution without translation. Required for second marriage, inheritance, name change, citizenship.' },
      { q: 'How long does it take?', a: '7 days (Warszawa-Śródmieście, EU documents) to 30 days (other voivodeships, non-EU countries). Old acts or non-Hague countries can stretch to 60 days with extra inquiries.' },
      { q: 'Do I need umiejscowienie for TRC?', a: 'No — TRC accepts the foreign original with apostille and sworn translation. Umiejscowienie is required for second marriage in Poland, citizenship, inheritance.' },
      { q: 'What is apostille?', a: 'A simplified legalisation between Hague Convention 1961 states. Poland requires apostille on foreign public documents from convention states (CIS, US, UK). Within the EU — apostille no longer needed since 2019 (Regulation 2016/1191).' },
      { q: 'Faster — Warsaw or regional?', a: 'USC Warszawa-Śródmieście — 7–14 days. Regional USC — 14–30 days. We file via Warsaw even for clients in other cities — the law allows it.' },
      { q: 'Can I get an odpis online?', a: 'Yes — via ePUAP or mObywatel for people with PESEL and profil zaufany. 7 days, same price.' },
      { q: 'Divorce from a non-EU country?', a: 'For Polish marriage recognition: foreign divorce certificate with apostille + sworn translation. If the marriage was in Poland — divorce note added by application or court. Complex cases — recognition of foreign divorce judgement.' }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'USC certificates handled end-to-end',
    ctaSubtitle: 'Free consultation: identify act type, issuing country, purpose. From USC filing to apostilled Polish odpis — typically 2–3 weeks.'
  }
};

export default aktyStanuCywilnego;
