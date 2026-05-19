import type { ServiceEntry } from './types';

const aktyStanuCywilnego: ServiceEntry = {
  ru: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Umiejscowienie',
    title: 'Акты гражданского состояния',
    subtitle: 'Свидетельства о рождении, браке и смерти в Польше',
    lead: 'Акты гражданского состояния (akty stanu cywilnego) - свидетельства о рождении, браке и смерти, выдаваемые польским USC. Иностранцу они нужны для оформления PESEL, заключения брака с гражданином ЕС, признания иностранного акта в Польше (umiejscowienie), регистрации ребёнка, рождённого в Польше, и при подаче на TRC, ПМЖ или гражданство. Работаем с USC и BUSC напрямую - забираем odpis, ставим apostille, делаем присяжный перевод.',
    facts: [
      { label: 'Срок выдачи', value: '7 дней', note: 'standardowo · до 30 дней' },
      { label: 'Госпошлина', value: '22-39 PLN', note: 'odpis skrócony / zupełny' },
      { label: 'Umiejscowienie', value: '50 PLN', note: 'вписание иностранного акта' },
      { label: 'Где', value: 'USC + BUSC', note: 'локально или централизованно' }
    ],
    grounds: {
      title: 'Какие акты оформляем',
      subtitle: 'USC ведёт три типа реестров - мы работаем со всеми.',
      items: [
        { title: 'Akt urodzenia (рождение)', desc: 'Регистрация ребёнка, рождённого в Польше; получение odpisu для иностранного гражданина; umiejscowienie зарубежного свидетельства о рождении.' },
        { title: 'Akt małżeństwa (брак)', desc: 'Заключение брака с польским гражданином или другим иностранцем в USC; umiejscowienie зарубежного свидетельства о браке.' },
        { title: 'Akt zgonu (смерть)', desc: 'Регистрация смерти в Польше; umiejscowienie зарубежного свидетельства о смерти; получение odpisu для наследства.' },
        { title: 'Umiejscowienie aktu zagranicznego', desc: 'Вписание иностранного свидетельства в польский реестр USC. Обязательно для разводов, наследства, второго брака, смены фамилии.' },
        { title: 'Sprostowanie i uzupełnienie', desc: 'Исправление ошибок в актах: даты, фамилии, места рождения. Через postanowienie USC или sąd cywilny.' },
        { title: 'Zmiana nazwiska / imienia', desc: 'Смена имени/фамилии иностранца - через USC по уважительной причине, занимает 30-60 дней.' },
        { title: 'Apostille на польские акты', desc: 'Wojewoda ставит apostille на польские свидетельства USC для использования за рубежом.' },
        { title: 'Odtworzenie aktu', desc: 'Восстановление утерянного акта (например, потерянного USC во время войны) - через постановление sądu cywilnego.' }
      ]
    },
    timeline: {
      title: 'Как мы оформляем акт',
      subtitle: 'Стандартный цикл umiejscowienia + odpis с apostille - 2-3 недели.',
      steps: [
        { title: 'Консультация', duration: '30 мин', desc: 'Уточняем тип акта, цель использования, страну выдачи иностранного документа.' },
        { title: 'Сбор документов', duration: '3-7 дней', desc: 'Получаем оригиналы из страны выдачи, делаем apostille (если требуется), организуем присяжный перевод на польский.' },
        { title: 'Wniosek o umiejscowienie', duration: '1 день', desc: 'Подаём wniosek в USC по выбранной локализации (часто Warszawa-Śródmieście как наиболее быстрый).' },
        { title: 'Postępowanie USC', duration: '7-30 дней', desc: 'Kierownik USC проверяет документы, вписывает акт в польский реестр, выдаёт polski odpis.' },
        { title: 'Получение odpisu', duration: '1 день', desc: 'Skrócony (22 PLN) для большинства целей или zupełny (33 PLN) для нотариальных сделок.' },
        { title: 'Apostille / перевод', duration: '3-5 дней', desc: 'При необходимости - apostille от wojewody на польский odpis и присяжный перевод на язык страны использования.' }
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
        'Документ о разводе / смерти супруга - для umiejscowienia брака',
        'Согласие супруга - при изменении фамилии после брака',
        'Заполненный wniosek - готовим мы'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Фиксированный гонорар. Госпошлины USC - отдельно по факту.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · оценка ситуации' },
        { label: 'Получение odpisu', value: 'от 250 PLN', note: 'Wniosek, USC, отправка курьером' },
        { label: 'Umiejscowienie aktu', value: 'от 700 PLN', note: 'Полный цикл вписания иностранного акта' },
        { label: 'Apostille + перевод odpisu', value: 'от 350 PLN', note: 'Wojewoda + присяжный переводчик' }
      ],
      note: 'Указаны гонорары LegalWin. Госпошлины (22 PLN odpis skrócony, 33 PLN zupełny, 50 PLN umiejscowienie, 60 PLN apostille) и присяжный перевод (~80 PLN/документ) - отдельно.'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 28 listopada 2014 r. - Prawo o aktach stanu cywilnego',
        'Rozporządzenie MSWiA w sprawie wzorów odpisów aktów stanu cywilnego',
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej',
        'Rozporządzenie (UE) 2016/1191 (eliminacja legalizacji w UE)'
      ]
    },
    faq: [
      { q: 'Что такое umiejscowienie aktu?', a: 'Это вписание (umiejscowienie) иностранного свидетельства о рождении/браке/смерти в польский реестр USC (управление актов гражданского состояния). После umiejscowienia вы получаете polski odpis (польскую выписку), которую принимают все польские учреждения без перевода. Обязательно для повторного брака, наследства, смены фамилии.' },
      { q: 'Сколько по времени занимает umiejscowienie?', a: 'От 7 дней (Warszawa-Śródmieście, документы из ЕС) до 30 дней (другие воеводства, документы из не-ЕС стран). Если документ старый или из страны вне Гаагской конвенции (Konwencja Haska) - может быть до 60 дней с дополнительными запросами.' },
      { q: 'Нужно ли umiejscowienie для подачи на TRC?', a: 'Нет, для TRC достаточно оригинала иностранного свидетельства с apostille (апостиль) и присяжным переводом. Umiejscowienie (вписание акта) обязательно для повторного брака в Польше, оформления гражданства, наследственных дел.' },
      { q: 'Что такое apostille и когда нужен?', a: 'Apostille (апостиль) - упрощённая легализация документов между странами Гаагской конвенции 1961 г. Польша требует apostille на все иностранные публичные документы из стран Конвенции (СНГ, США, Великобритания и др.). В странах ЕС - apostille не нужно с 2019 года (Регламент 2016/1191).' },
      { q: 'Где быстрее сделать umiejscowienie - в Варшаве или регионе?', a: 'USC (управление актов гражданского состояния) Warszawa-Śródmieście работает быстрее всех - 7-14 дней. Региональные USC - 14-30 дней. Подаём через Warszawa, даже если живёте в другом городе - закон позволяет.' },
      { q: 'Можно ли получить odpis aktu онлайн?', a: 'Да, через ePUAP (электронная платформа госуслуг) или mObywatel (мобильное приложение «Гражданин») - для лиц с польским PESEL и profil zaufany (доверенный профиль). Срок - 7 дней, цена та же. Делаем для клиентов через нашу e-platform.' },
      { q: 'Что делать с разводом из страны вне ЕС?', a: 'Для umiejscowienia (внесения в польский реестр) брака в Польше нужно: иностранное свидетельство о разводе с apostille (апостиль) + присяжный перевод. Если брак был в Польше - wpis o rozwiązaniu (запись о расторжении) добавляется по wniosku (заявлению) или automatycznie через sąd (суд). Для сложных случаев - отдельная процедура uznania zagranicznego wyroku rozwodowego (признание иностранного решения о разводе).' }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'Свидетельства USC под ключ',
    ctaSubtitle: 'Бесплатная консультация: уточним тип акта, страну выдачи, цель использования. От подачи в USC до polski odpis с apostille - обычно 2-3 недели.'
  },
  pl: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Umiejscowienie',
    title: 'Akty stanu cywilnego',
    subtitle: 'Akty urodzenia, małżeństwa i zgonu',
    lead: 'Akty stanu cywilnego - odpisy USC: aktów urodzenia, małżeństwa i zgonu. Cudzoziemcowi potrzebne są do PESEL, ślubu z obywatelem UE, umiejscowienia aktu zagranicznego, rejestracji dziecka urodzonego w Polsce oraz wniosków o TRC, PR i obywatelstwo. Pracujemy bezpośrednio z USC i BUSC - odbieramy odpisy, robimy apostille i tłumaczenia przysięgłe.',
    facts: [
      { label: 'Termin', value: '7 dni', note: 'standardowo · do 30 dni' },
      { label: 'Opłata', value: '22-39 PLN', note: 'odpis skrócony / zupełny' },
      { label: 'Umiejscowienie', value: '50 PLN', note: 'wpis aktu zagranicznego' },
      { label: 'Gdzie', value: 'USC + BUSC', note: 'lokalnie lub centralnie' }
    ],
    grounds: {
      title: 'Jakie akty załatwiamy',
      subtitle: 'USC prowadzi trzy rodzaje rejestrów - pracujemy ze wszystkimi.',
      items: [
        { title: 'Akt urodzenia', desc: 'Rejestracja dziecka urodzonego w Polsce; odpis dla cudzoziemca; umiejscowienie aktu zagranicznego.' },
        { title: 'Akt małżeństwa', desc: 'Ślub z obywatelem RP lub innym cudzoziemcem; umiejscowienie zagranicznego.' },
        { title: 'Akt zgonu', desc: 'Rejestracja zgonu w Polsce; umiejscowienie zagranicznego; odpis dla spadku.' },
        { title: 'Umiejscowienie aktu zagranicznego', desc: 'Wpis aktu zagranicznego do polskiego rejestru USC. Konieczne do rozwodu, spadku, drugiego ślubu, zmiany nazwiska.' },
        { title: 'Sprostowanie i uzupełnienie', desc: 'Korekta błędów: data, nazwisko, miejsce. Przez postanowienie USC lub sąd cywilny.' },
        { title: 'Zmiana nazwiska / imienia', desc: 'Zmiana danych cudzoziemca - przez USC z uzasadnieniem, 30-60 dni.' },
        { title: 'Apostille na akty polskie', desc: 'Wojewoda nadaje apostille na polskie odpisy USC do użytku za granicą.' },
        { title: 'Odtworzenie aktu', desc: 'Odtworzenie aktu zaginionego - przez sąd cywilny.' }
      ]
    },
    timeline: {
      title: 'Przebieg sprawy',
      subtitle: 'Standardowy cykl umiejscowienie + odpis z apostille - 2-3 tygodnie.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Ustalamy rodzaj aktu, cel, kraj wydania zagranicznego dokumentu.' },
        { title: 'Zbiór dokumentów', duration: '3-7 dni', desc: 'Pobieramy oryginały z kraju wydania, organizujemy apostille i tłumaczenie przysięgłe.' },
        { title: 'Wniosek o umiejscowienie', duration: '1 dzień', desc: 'Składamy do USC (często Warszawa-Śródmieście - najszybsze).' },
        { title: 'Postępowanie USC', duration: '7-30 dni', desc: 'Kierownik USC weryfikuje, wpisuje akt do polskiego rejestru, wydaje polski odpis.' },
        { title: 'Odbiór odpisu', duration: '1 dzień', desc: 'Skrócony (22 PLN) lub zupełny (33 PLN).' },
        { title: 'Apostille / tłumaczenie', duration: '3-5 dni', desc: 'Apostille u wojewody i tłumaczenie przysięgłe na język docelowy.' }
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
        'Tłumaczenie przysięgłe - robimy my',
        'Akt rozwodu / zgonu małżonka - do umiejscowienia ślubu',
        'Zgoda małżonka - przy zmianie nazwiska po ślubie',
        'Wypełniony wniosek - przygotowujemy my'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Stała cena. Opłaty USC - osobno wg taryf.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · ocena' },
        { label: 'Odpis aktu', value: 'od 250 PLN', note: 'Wniosek, USC, kurier' },
        { label: 'Umiejscowienie', value: 'od 700 PLN', note: 'Pełny cykl wpisu aktu zagranicznego' },
        { label: 'Apostille + tłumaczenie', value: 'od 350 PLN', note: 'Wojewoda + tłumacz przysięgły' }
      ],
      note: 'Powyżej honoraria LegalWin. Opłaty USC (22/33/50 PLN) i tłumaczenia (~80 PLN/dok.) - osobno.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 28 listopada 2014 r. - Prawo o aktach stanu cywilnego',
        'Rozporządzenie MSWiA ws. wzorów odpisów aktów stanu cywilnego',
        'Konwencja haska z 5 października 1961 r. (apostille)',
        'Ustawa z 16 listopada 2006 r. o opłacie skarbowej',
        'Rozporządzenie (UE) 2016/1191 (eliminacja legalizacji w UE)'
      ]
    },
    faq: [
      { q: 'Czym jest umiejscowienie aktu?', a: 'Wpis zagranicznego aktu do polskiego rejestru USC. Po umiejscowieniu otrzymujesz polski odpis akceptowany przez wszystkie urzędy bez tłumaczenia. Wymagane do drugiego ślubu, spadku, zmiany nazwiska.' },
      { q: 'Ile trwa umiejscowienie?', a: 'Od 7 dni (Warszawa-Śródmieście, dokumenty UE) do 30 dni (inne województwa, kraje spoza UE). Stare lub spoza konwencji haskiej - do 60 dni.' },
      { q: 'Czy umiejscowienie jest potrzebne do TRC?', a: 'Nie - do TRC wystarczy oryginał z apostille i tłumaczeniem. Umiejscowienie jest konieczne do drugiego ślubu, obywatelstwa, spraw spadkowych.' },
      { q: 'Czym jest apostille?', a: 'Uproszczona legalizacja między państwami konwencji haskiej 1961. Polska wymaga apostille na zagraniczne akty z państw konwencji (CIS, USA, UK). W UE apostille zniesione od 2019 (Rozp. 2016/1191).' },
      { q: 'Gdzie szybciej - Warszawa czy region?', a: 'USC Warszawa-Śródmieście - 7-14 dni. Regionalne - 14-30 dni. Składamy w Warszawie nawet dla osób z innych miast.' },
      { q: 'Czy odpis online?', a: 'Tak - przez ePUAP lub mObywatel dla osób z PESEL i profilem zaufanym. 7 dni, ta sama cena.' },
      { q: 'Rozwód z państwa spoza UE?', a: 'Do umiejscowienia ślubu w PL: zagraniczny akt rozwodu z apostille + tłumaczenie. Jeśli ślub był w Polsce - wpis o rozwiązaniu z wniosku lub przez sąd. Trudne sprawy - uznanie zagranicznego wyroku rozwodowego.' }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'Akty USC pod klucz',
    ctaSubtitle: 'Bezpłatna konsultacja: rodzaj aktu, kraj wydania, cel. Od wniosku do polskiego odpisu z apostille - zwykle 2-3 tygodnie.'
  },
  en: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Umiejscowienie',
    title: 'Civil registry records (USC)',
    subtitle: 'Polish birth, marriage and death certificates for foreigners',
    lead: "If you were born in Boston, married in Vegas, or your father died in Manchester, none of those papers carry weight in Poland until USC enters them into the Polish register. That entry is called umiejscowienie. Without it you can't remarry here, claim an inheritance, or change your surname. We pull the originals from your home country, get the apostille, hire a sworn translator, and file at USC Warszawa-Śródmieście (the fastest desk in the country). Most cases close in 2 to 3 weeks.",
    facts: [
      { label: 'USC turnaround', value: '7 days', note: 'standard, up to 30 days in some boroughs' },
      { label: 'State fee', value: '22 or 33 PLN', note: 'odpis skrócony / zupełny' },
      { label: 'Umiejscowienie', value: '50 PLN', note: "filing fee for entering a foreign act" },
      { label: 'Office hours', value: '08:00-16:00', note: 'a few districts open Saturday morning' }
    ],
    grounds: {
      title: 'What we actually do at USC',
      subtitle: 'USC keeps three registers (births, marriages, deaths). Each one comes with its own quirks for foreigners.',
      items: [
        { title: 'Birth certificates from abroad', desc: 'US states issue short-form and long-form certificates. USC only accepts the long-form (full parentage). We get it pulled from vital records, apostilled by the Secretary of State, and sworn-translated into Polish.' },
        { title: 'Polish marriage at USC', desc: "Marrying a Pole or another foreigner at USC. Civil ceremony only. Church marriages need a separate concordat filing if you want them on the Polish register." },
        { title: 'Recognising foreign marriages', desc: "Las Vegas, Cyprus, Dominican Republic, Denmark - Poland recognises civil marriages that were valid where they happened. But you need the original certificate with apostille and a sworn translation before USC enters it. No entry, no second marriage here." },
        { title: 'Death certificates and inheritance', desc: 'Registering a death that happened in Poland; entering a foreign death certificate so heirs can run probate at a Polish notary. Banks won\'t release funds without the Polish odpis.' },
        { title: 'Umiejscowienie of foreign acts', desc: "Entering a foreign birth, marriage or death certificate into the Polish USC register. The trigger for second marriage, citizenship, inheritance, or any surname change. Skip it and you'll be stuck." },
        { title: 'Fixing typos in your Polish records', desc: 'Wrong date, transliteration mismatch on your surname (Smith vs. Smyth), missing father\'s name. Corrected via USC postanowienie for clerical mistakes or civil court for anything substantive.' },
        { title: 'Name and surname changes', desc: 'Polish USC will change a foreigner\'s name with a written justification. Common reasons: matching your spouse, restoring a family name, dropping a patronymic. Decision in 30 to 60 days.' },
        { title: 'Multi-lingual EU certificates', desc: "Article 7 of Regulation (EU) 2016/1191 lets USC issue a multi-lingual standard form alongside the Polish odpis. Costs the same 22 PLN. Accepted across the EU without translation." }
      ]
    },
    timeline: {
      title: 'How a typical case runs',
      subtitle: 'Two to three weeks from first call to apostilled Polish odpis in your hand.',
      steps: [
        { title: 'Intake call', duration: '30 min', desc: 'You tell us the act type, where it was issued, and what you need the Polish version for (marriage, citizenship, inheritance, PESEL).' },
        { title: 'Getting the original', duration: '3-7 days', desc: 'We order a certified copy from the foreign vital-records office. US, UK and Australia ship it apostilled if we ask the right way. A sworn translator turns it into Polish.' },
        { title: 'Filing at USC', duration: '1 day', desc: 'We file the wniosek at USC Warszawa-Śródmieście. You can use any USC nationally, but Śródmieście clears cases in roughly half the time of regional offices.' },
        { title: 'USC review', duration: '7-30 days', desc: 'The Kierownik USC checks the foreign document against Polish formal requirements and writes the entry into the central rejestr stanu cywilnego.' },
        { title: 'Same-day urgent issue', duration: '1 day', desc: "Need it tomorrow? Pay 22 PLN for an odpis skrócony or 33 PLN for an odpis zupełny and we pick it up the same afternoon, often before 16:00 close." },
        { title: 'Apostille for use abroad', duration: '3-5 days', desc: 'If you need to use the Polish odpis outside Poland (US green card, UK home office, Turkish nüfus), the Voivode in Warsaw stamps an apostille for 60 PLN.' }
      ]
    },
    documents: {
      title: "What you'll need to send us",
      subtitle: 'Specifics shift case by case, but this covers 90% of files.',
      items: [
        'Your passport (scan first, original at filing)',
        'PESEL number if you already have one',
        'The foreign certificate, long-form version, original on official paper',
        'Apostille on the foreign certificate (Secretary of State in the US; FCDO in the UK; DFAT in Australia)',
        'Sworn Polish translation (we arrange it through a court-listed tłumacz przysięgły)',
        'Divorce decree or late spouse\'s death certificate if you\'re remarrying',
        "Notarised spouse consent if you want to change surname on the basis of the marriage",
        'Signed wniosek - we draft it after the intake call'
      ]
    },
    pricing: {
      title: 'What we charge',
      subtitle: 'Flat legal fee. USC charges and translation costs pass through at the real rate.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 minutes, no obligation' },
        { label: 'Odpis collection', value: 'from 250 PLN', note: 'Wniosek, USC visit, courier to you' },
        { label: 'Full umiejscowienie', value: 'from 700 PLN', note: 'Foreign-act recognition from start to Polish odpis' },
        { label: 'Apostille plus sworn translation', value: 'from 350 PLN', note: 'Voivode stamp and a court-listed translator' }
      ],
      note: 'Numbers above are LegalWin fees. Pass-throughs: 22 PLN for odpis skrócony, 33 PLN for odpis zupełny, 22 PLN for the multi-lingual form, 50 PLN for umiejscowienie, 60 PLN for the apostille, around 80 PLN per page for the sworn translation.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Act of 28 November 2014 - Civil Status Records Law (Prawo o aktach stanu cywilnego)',
        'MSWiA Regulation on the templates of USC odpisy',
        'Hague Apostille Convention of 5 October 1961',
        'Stamp Duty Act of 16 November 2006',
        'Regulation (EU) 2016/1191 (multi-lingual forms, no apostille within the EU)'
      ]
    },
    faq: [
      { q: 'My US birth certificate is short-form. Will USC accept it?', a: "No. USC only takes the long-form, the one that lists both parents. The short-form (sometimes called a wallet card or certification of birth) skips parentage and gets rejected on the first review. We can request the long-form directly from the vital records office in your state, usually 5 to 10 business days plus the apostille from the Secretary of State." },
      { q: "I got married in Las Vegas. Does Poland recognise it?", a: "Yes, as long as the marriage was civilly valid in Nevada (both parties of age, no existing marriages, properly licensed officiant). You'll need the certified Clark County certificate with an apostille from the Nevada Secretary of State, plus a sworn Polish translation. Once umiejscowienie goes through, you're married in the Polish register and can file taxes jointly, change your surname, or sponsor a spouse visa." },
      { q: "We just live together in Poland - do we count as married like in the UK?", a: "No. Polish law has nothing equivalent to common-law marriage or civil partnership. If you haven't gone through USC, you're legally single. That blocks joint tax filing, automatic inheritance, and family reunification visas. There's no fix except an actual marriage at USC or recognition of a foreign one." },
      { q: 'How much does an odpis cost and how fast can I get one?', a: 'Three flavours. Odpis skrócony (short extract) is 22 PLN, fine for most uses. Odpis zupełny (full extract) is 33 PLN, needed at notaries for property and inheritance. The multi-lingual EU form is also 22 PLN and skips translation across the EU. Same-day issue is possible if you arrive at USC before about 14:00.' },
      { q: 'Do I actually need umiejscowienie for my TRC application?', a: "Not for TRC itself. The voivodeship office accepts your foreign certificate with apostille and sworn translation. You only need umiejscowienie when you want to do something in Poland that requires being on the register: remarry, claim an inheritance, change your surname, or apply for citizenship." },
      { q: 'Where is fastest to file?', a: 'USC Warszawa-Śródmieście, by a margin. They clear straightforward cases in 7 to 14 days. Regional USCs in Kraków, Wrocław or smaller towns run 14 to 30 days, sometimes longer in summer. The law lets you file at any USC in Poland regardless of where you live, so we route everything through Warsaw.' },
      { q: 'Office hours - when can I actually go?', a: "Standard USC hours are 08:00 to 16:00 Monday through Friday. Warszawa-Śródmieście opens until 18:00 on Tuesdays. A handful of district offices run a Saturday morning shift (08:00 to 13:00) for marriages but not for umiejscowienie. We can also file your wniosek through ePUAP with a profil zaufany if you'd rather skip the queue." }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'USC sorted, certificate in hand',
    ctaSubtitle: 'Free 30-minute consultation. We map the document chain, pull the foreign original, file at USC Warszawa-Śródmieście, and hand you the Polish odpis. Typical close is 2 to 3 weeks.'
  },
  tr: {
    slug: 'akty-stanu-cywilnego',
    group: 'documents',
    icon: 'landmark',
    badge: 'USC · BUSC · Umiejscowienie',
    title: 'Nüfus kayıt işlemleri',
    subtitle: 'Polonya\'da doğum, evlilik ve ölüm belgeleri',
    lead: 'Akty stanu cywilnego (nüfus kayıt akitleri), Polonya USC tarafından düzenlenen doğum, evlilik ve ölüm belgeleridir. Yabancılar bunlara PESEL almak, AB vatandaşıyla evlenmek, yabancı belgeyi Polonya\'da tanıtmak (umiejscowienie), Polonya\'da doğan çocuğu kaydetmek ve TRC, daimi ikamet veya vatandaşlık başvurusu için ihtiyaç duyar. USC ve BUSC ile doğrudan çalışıyoruz - odpis (kayıt çıktısı) çıkartıyor, apostille düzenletiyor ve yeminli tercüme yaptırıyoruz.',
    facts: [
      { label: 'Verilme süresi', value: '7 gün', note: 'standart · 30 güne kadar' },
      { label: 'Resmi harç', value: '22-39 PLN', note: 'odpis skrócony / zupełny' },
      { label: 'Umiejscowienie', value: '50 PLN', note: 'yabancı akdin tescili' },
      { label: 'Yer', value: 'USC + BUSC', note: 'yerel veya merkezi' }
    ],
    grounds: {
      title: 'Hangi akitleri düzenliyoruz',
      subtitle: 'USC üç tür sicil tutar - hepsiyle çalışıyoruz.',
      items: [
        { title: 'Akt urodzenia (doğum)', desc: 'Polonya\'da doğan çocuğun kaydı; yabancı vatandaş için odpis; yurt dışı doğum belgesinin umiejscowienie\'si (Polonya siciline tescili).' },
        { title: 'Akt małżeństwa (evlilik)', desc: 'Polonyalı veya başka yabancı ile USC\'de evlenme; yurt dışı evlilik belgesinin umiejscowienie\'si.' },
        { title: 'Akt zgonu (ölüm)', desc: 'Polonya\'da ölümün kaydı; yurt dışı ölüm belgesinin umiejscowienie\'si; miras için odpis.' },
        { title: 'Yabancı akdin umiejscowienie\'si', desc: 'Yabancı belgenin Polonya USC siciline tescili. Boşanma, miras, ikinci evlilik, soyad değişikliği için zorunludur.' },
        { title: 'Sprostowanie ve uzupełnienie', desc: 'Akitlerdeki hataların düzeltilmesi: tarih, soyad, doğum yeri. USC postanowienie\'si veya sąd cywilny (medeni mahkeme) yoluyla.' },
        { title: 'Ad / soyad değişikliği', desc: 'Yabancının ad / soyad değişikliği - haklı gerekçeyle USC üzerinden, 30-60 gün sürer.' },
        { title: 'Polonya akitlerine apostille', desc: 'Wojewoda, Polonya USC belgelerine yurt dışı kullanımı için apostille düzenler.' },
        { title: 'Akdin yeniden oluşturulması (odtworzenie)', desc: 'Kayıp akdin (ör. savaşta kaybolan USC) yeniden oluşturulması - sąd cywilny kararıyla.' }
      ]
    },
    timeline: {
      title: 'Akit süreci',
      subtitle: 'Umiejscowienie + apostille\'li odpis için standart döngü 2-3 hafta.',
      steps: [
        { title: 'Danışmanlık', duration: '30 dk', desc: 'Akit türünü, kullanım amacını ve yabancı belgenin verildiği ülkeyi netleştiriyoruz.' },
        { title: 'Belge derlemesi', duration: '3-7 gün', desc: 'Verildiği ülkeden orijinalleri alıyor, gerekirse apostille bastırıyor, Lehçeye yeminli tercüme yaptırıyoruz.' },
        { title: 'Wniosek o umiejscowienie', duration: '1 gün', desc: 'Seçilen USC\'ye (genelde en hızlı işleyen Warszawa-Śródmieście) wniosek sunuyoruz.' },
        { title: 'USC süreci', duration: '7-30 gün', desc: 'Kierownik USC (USC müdürü) belgeleri inceler, akdi Polonya siciline tescil eder ve polski odpis düzenler.' },
        { title: 'Odpis\'in alınması', duration: '1 gün', desc: 'Skrócony (22 PLN) - çoğu amaç için yeterlidir; zupełny (33 PLN) - noter işlemleri için.' },
        { title: 'Apostille / tercüme', duration: '3-5 gün', desc: 'Gerekirse - Polonya odpis\'ine wojewoda apostille\'i ve hedef ülke diline yeminli tercüme.' }
      ]
    },
    documents: {
      title: 'Sizden gerekenler',
      subtitle: 'Net liste akit türüne ve verildiği ülkeye göredir.',
      items: [
        'Pasaport (orijinal + fotokopiler)',
        'PESEL (varsa)',
        'Yabancı doğum / evlilik / ölüm belgesi (orijinal)',
        'Yabancı belgede apostille veya legalizasyon',
        'Yabancı akdin Lehçeye yeminli tercümesi (biz hazırlıyoruz)',
        'Boşanma / eşin ölüm belgesi - evliliğin umiejscowienie\'si için',
        'Eşin onayı - evlilikten sonra soyad değişikliği için',
        'Doldurulmuş wniosek - biz hazırlıyoruz'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'Sabit ücret. USC harçları fiilen ayrıdır.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · durum değerlendirmesi' },
        { label: 'Odpis alımı', value: '250 PLN\'den', note: 'Wniosek, USC, kurye gönderimi' },
        { label: 'Akdin umiejscowienie\'si', value: '700 PLN\'den', note: 'Yabancı akdin tescil için tam döngü' },
        { label: 'Apostille + odpis tercümesi', value: '350 PLN\'den', note: 'Wojewoda + yeminli tercüman' }
      ],
      note: 'Belirtilen ücretler LegalWin danışmanlık bedelidir. Resmi harçlar (22 PLN odpis skrócony, 33 PLN zupełny, 50 PLN umiejscowienie, 60 PLN apostille) ve yeminli tercüme (~80 PLN/belge) ayrıca ödenir.'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 28 listopada 2014 r. - Prawo o aktach stanu cywilnego (Nüfus Kayıt Kanunu)',
        'İçişleri Bakanlığı (MSWiA) USC odpis örneği yönetmeliği',
        '5 Ekim 1961 Lahey Sözleşmesi (apostille)',
        'Ustawa z dnia 16 listopada 2006 r. o opłacie skarbowej (Damga Vergisi Kanunu)',
        '(AB) 2016/1191 Tüzüğü (AB içi legalizasyonun kaldırılması)'
      ]
    },
    faq: [
      { q: 'Umiejscowienie aktu nedir?', a: 'Yabancı doğum / evlilik / ölüm belgesinin Polonya USC (Urząd Stanu Cywilnego - nüfus müdürlüğü) siciline tescili (umiejscowienie). Tescilden sonra elinize tüm Polonya kurumlarının tercümesiz kabul ettiği polski odpis geçer. İkinci evlilik, miras, soyad değişikliği için zorunludur.' },
      { q: 'Umiejscowienie ne kadar sürer?', a: '7 günden (Warszawa-Śródmieście, AB belgeleri) 30 güne kadar (diğer eyaletler, AB dışı ülke belgeleri). Belge eski veya Lahey Sözleşmesi dışı bir ülkeden geliyorsa - ek talepler nedeniyle 60 güne kadar uzayabilir.' },
      { q: 'TRC başvurusu için umiejscowienie zorunlu mu?', a: 'Hayır - TRC için yabancı belgenin orijinali apostille ve yeminli tercümeyle yeterlidir. Umiejscowienie, Polonya\'da ikinci evlilik, vatandaşlık ve miras davaları için zorunludur.' },
      { q: 'Apostille nedir, ne zaman gerekir?', a: 'Apostille - 1961 Lahey Sözleşmesi ülkeleri arasında belgelerin basitleştirilmiş onaylanmasıdır. Polonya, Sözleşme ülkelerinden (Türkiye, BDT, ABD, Birleşik Krallık vb.) gelen tüm yabancı kamusal belgelere apostille ister. AB içinde 2019\'dan beri 2016/1191 Tüzüğü gereği apostille gerekmez.' },
      { q: 'Umiejscowienie nerede daha hızlı - Varşova mı bölgeler mi?', a: 'USC Warszawa-Śródmieście en hızlı işliyor - 7-14 gün. Bölgesel USC\'ler 14-30 gün. Başka şehirde yaşıyor olsanız da Varşova üzerinden başvuruyoruz - kanun izin veriyor.' },
      { q: 'Akit odpis\'ini çevrimiçi alabilir miyim?', a: 'Evet, ePUAP (e-devlet platformu) veya mObywatel (mobil "Vatandaş" uygulaması) üzerinden - PESEL ve profil zaufany sahipleri için. Süresi 7 gün, fiyat aynıdır. Müvekkillerimiz için kendi e-platformumuzla yapıyoruz.' },
      { q: 'AB dışı bir ülkede gerçekleşen boşanma ne yapılmalı?', a: 'Evliliğin Polonya\'da umiejscowienie\'si için: yabancı boşanma belgesi apostille ve yeminli tercümeyle. Evlilik Polonya\'da yapılmışsa - wpis o rozwiązaniu (boşanma kaydı) wniosek üzerine veya mahkeme kararıyla otomatik eklenir. Karmaşık dosyalar için ayrıca yabancı boşanma kararının uznanie zagranicznego wyroku rozwodowego (yabancı boşanma kararının tanınması) prosedürü işletilir.' }
    ],
    related: ['apostille', 'tlumaczenia-przysiegle', 'pesel'],
    ctaTitle: 'USC belgeleri anahtar teslim',
    ctaSubtitle: 'Ücretsiz danışmanlık: akit türü, verildiği ülke ve kullanım amacını netleştiririz. USC başvurusundan apostille\'li polski odpis\'e genelde 2-3 hafta.'
  }
};

export default aktyStanuCywilnego;
