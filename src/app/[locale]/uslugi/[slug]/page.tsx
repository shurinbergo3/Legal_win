import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { ServiceDetail } from '@/components/ServiceDetail';
import { JsonLd } from '@/components/JsonLd';
import { getService, services, serviceSlugs } from '@/lib/services';
import { INDEX_LOCALES, routing } from '@/i18n/routing';
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  ORG_LEGAL_NAME,
  SITE_URL,
  breadcrumbLd,
  faqPageLd,
  serviceLd,
  type SeoLocale
} from '@/lib/seo';

const KEYWORDS_BY_SLUG: Record<string, Partial<Record<SeoLocale, string[]>>> = {
  'karta-pobytu': {
    ru: [
      'карта побыту',
      'карта побыту в Польше',
      'оформить ВНЖ в Польше',
      'Karta Czasowego Pobytu',
      'временный вид на жительство Польша',
      'иммиграционный консультант по карте побыту Варшава',
      'TRC Польша',
      'MOS v2.0'
    ],
    pl: [
      'karta pobytu',
      'karta czasowego pobytu',
      'TRC Polska',
      'zezwolenie na pobyt czasowy',
      'wniosek o kartę pobytu Warszawa',
      'konsultant imigracyjny Warszawa',
      'MOS v2.0',
      'eDoręczenia'
    ],
    en: [
      'temporary residence card Poland',
      'Karta Pobytu',
      'Polish residence permit',
      'TRC Poland',
      'immigration consultant Warsaw',
      'MOS v2.0',
      'EU Blue Card Poland'
    ]
  },
  'karta-stalego-pobytu': {
    ru: [
      'карта сталего побыту',
      'ПМЖ Польша',
      'постоянное место жительства Польша',
      'Karta Stałego Pobytu',
      'постоянный вид на жительство в Польше',
      'иммиграционный консультант ПМЖ Варшава',
      'долгосрочный резидент ЕС'
    ],
    pl: [
      'karta stałego pobytu',
      'pobyt stały w Polsce',
      'PR Polska',
      'rezydent długoterminowy UE',
      'konsultant pobyt stały Warszawa'
    ],
    en: [
      'permanent residence Poland',
      'Karta Stałego Pobytu',
      'Polish PR',
      'EU long-term resident',
      'Polish permanent residency consultant'
    ]
  },
  obywatelstwo: {
    ru: [
      'гражданство Польши',
      'польское гражданство',
      'натурализация Польша',
      'признание гражданина Польши',
      'польский паспорт',
      'обязательно польский язык B1',
      'иммиграционный консультант гражданство Варшава'
    ],
    pl: [
      'obywatelstwo polskie',
      'nadanie obywatelstwa polskiego',
      'uznanie za obywatela polskiego',
      'naturalizacja',
      'wniosek do Prezydenta RP',
      'konsultant obywatelstwo Warszawa'
    ],
    en: [
      'Polish citizenship',
      'naturalisation Poland',
      'Polish passport',
      'citizenship by descent Poland',
      'Polish citizenship consultant'
    ]
  },
  'karta-polaka': {
    ru: [
      'Karta Polaka',
      'карта поляка',
      'польское происхождение',
      'польские корни',
      'Karta Polaka собеседование',
      'польский язык A2 B1',
      'Karta Polaka документы',
      'польская национальность'
    ],
    pl: [
      'Karta Polaka',
      'wniosek o Kartę Polaka',
      'polskie pochodzenie',
      'narodowość polska',
      'rozmowa z konsulem Karta Polaka',
      'archiwa kresowe',
      'Karta Polaka a obywatelstwo',
      'konsultant Karta Polaka Warszawa'
    ],
    en: [
      'Karta Polaka',
      'Polish ancestry card',
      'Polish heritage card',
      'Polish nation card',
      'Karta Polaka application',
      'Polish citizenship through Karta Polaka',
      'Karta Polaka interview prep',
      'Polish ancestry research'
    ]
  },
  'ochrona-miedzynarodowa': {
    ru: [
      'международная защита Польша',
      'статус беженца Польша',
      'ochrona międzynarodowa',
      'гуманитарные основания Польша',
      'толерантное пребывание',
      'консультант по убежищу Варшава'
    ],
    pl: [
      'ochrona międzynarodowa',
      'status uchodźcy',
      'azyl w Polsce',
      'pobyt humanitarny',
      'pobyt tolerowany',
      'konsultant uchodźca Warszawa'
    ],
    en: [
      'international protection Poland',
      'refugee status Poland',
      'asylum Poland',
      'humanitarian residence Poland',
      'asylum consultant Warsaw'
    ]
  },
  apelacje: {
    ru: [
      'апелляция отказ в карте побыту',
      'оспаривание отказа в ВНЖ Польша',
      'odwołanie do Szefa UdSC',
      'skarga WSA Польша',
      'консультант по апелляции отказа Польша'
    ],
    pl: [
      'odwołanie od decyzji wojewody',
      'odwołanie do Szefa UdSC',
      'skarga do WSA',
      'apelacja karta pobytu',
      'odmowa karty pobytu'
    ],
    en: [
      'residence permit appeal Poland',
      'Polish immigration appeal',
      'WSA complaint',
      'denial appeal Polish residence card',
      'immigration appeals consultant Warsaw'
    ]
  },
  'kod-95': {
    ru: [
      'Kod 95',
      'код 95 Польша',
      'квалификация водителя Польша',
      'kwalifikacja wstępna',
      'szkolenie okresowe 35 godzin',
      'обмен прав СНГ на польские',
      'обмен украинских прав в Польше',
      'категория C CE D Польша'
    ],
    pl: [
      'Kod 95',
      'kwalifikacja wstępna',
      'szkolenie okresowe',
      'kwalifikacja zawodowa kierowcy',
      'wymiana prawa jazdy w Polsce',
      'kategoria C CE D'
    ],
    en: [
      'Code 95 Poland',
      'driver CPC Poland',
      'periodic training 35 hours',
      'driving licence exchange Poland',
      'professional driver qualification Poland'
    ]
  },
  'pesel': {
    ru: [
      'оформление PESEL',
      'PESEL для иностранца',
      'PESEL Польша',
      'PESEL для трудоустройства',
      'PESEL UKR',
      'ePUAP profil zaufany',
      'mObywatel Польша',
      'PESEL онлайн Варшава'
    ],
    pl: [
      'PESEL dla cudzoziemca',
      'nadanie numeru PESEL',
      'wniosek o PESEL',
      'PESEL UKR',
      'PESEL w celu zatrudnienia',
      'profil zaufany ePUAP',
      'mObywatel',
      'kancelaria PESEL Warszawa'
    ],
    en: [
      'PESEL Poland',
      'PESEL for foreigners',
      'Polish national ID number',
      'PESEL UKR',
      'ePUAP profil zaufany',
      'mObywatel app',
      'PESEL application Warsaw'
    ]
  },
  'meldunek': {
    ru: [
      'meldunek в Польше',
      'прописка иностранца Польша',
      'zameldowanie na pobyt czasowy',
      'регистрация места жительства Польша',
      'meldunek для TRC',
      'прописка Варшава иностранец',
      'юридический адрес для бизнеса Варшава'
    ],
    pl: [
      'meldunek cudzoziemca',
      'zameldowanie na pobyt czasowy',
      'zameldowanie na pobyt stały',
      'zaświadczenie o zameldowaniu',
      'meldunek do TRC MOS v2.0',
      'kancelaria meldunek Warszawa',
      'adres firmowy Warszawa'
    ],
    en: [
      'meldunek Poland',
      'residence registration Poland',
      'zameldowanie for foreigners',
      'temporary residence registration Warsaw',
      'business address Poland',
      'meldunek certificate'
    ]
  },
  'akty-stanu-cywilnego': {
    ru: [
      'свидетельство о рождении Польша',
      'свидетельство о браке Польша',
      'umiejscowienie aktu',
      'USC Варшава',
      'akty stanu cywilnego',
      'odpis aktu urodzenia',
      'признание иностранного свидетельства Польша',
      'BUSC Варшава'
    ],
    pl: [
      'akty stanu cywilnego',
      'umiejscowienie aktu zagranicznego',
      'odpis aktu urodzenia',
      'odpis aktu małżeństwa',
      'kierownik USC Warszawa',
      'BUSC Warszawa',
      'kancelaria USC Warszawa'
    ],
    en: [
      'Polish civil status records',
      'birth certificate Poland',
      'marriage certificate Poland',
      'foreign act recognition Poland',
      'umiejscowienie',
      'USC Warsaw'
    ]
  },
  'apostille': {
    ru: [
      'apostille Польша',
      'апостиль на польские документы',
      'легализация документов Польша',
      'MSZ apostille Варшава',
      'apostille на свидетельство USC',
      'apostille на KRS',
      'apostille на диплом',
      'Конвенция Гаага 1961'
    ],
    pl: [
      'apostille MSZ',
      'legalizacja dokumentów Polska',
      'apostille na akty USC',
      'apostille na wypis KRS',
      'apostille na dyplomy MEiN',
      'Konwencja Haska 1961',
      'kancelaria apostille Warszawa'
    ],
    en: [
      'apostille Poland',
      'document legalisation Poland',
      'apostille MSZ',
      'Hague Convention 1961',
      'apostille KRS extract',
      'apostille USC certificate',
      'apostille diploma Poland'
    ]
  },
  'wymiana-prawa-jazdy': {
    ru: [
      'обмен водительских прав в Польше',
      'обмен украинских прав на польские',
      'обмен белорусских прав Польша',
      'обмен российских прав Польша',
      'wymiana prawa jazdy',
      'присяжный перевод водительских прав',
      'WORD egzamin teoretyczny',
      'badania lekarskie kierowcy'
    ],
    pl: [
      'wymiana prawa jazdy',
      'wymiana zagranicznego prawa jazdy',
      'wymiana ukraińskiego prawa jazdy',
      'wymiana białoruskiego prawa jazdy',
      'starostwo wymiana prawa jazdy',
      'badania lekarskie kierowcy',
      'kancelaria prawo jazdy Warszawa'
    ],
    en: [
      'driving licence exchange Poland',
      'Ukrainian licence exchange Poland',
      'Belarusian licence exchange Poland',
      'foreign driving licence Poland',
      'CIS driving licence Poland',
      'starostwo licence exchange'
    ]
  },
  'zaswiadczenia-zus-us': {
    ru: [
      'справка ZUS',
      'справка US Польша',
      'zaświadczenie o niezaleganiu',
      'PIT-11 дубликат',
      'ZUS RMUA',
      'A1 ZUS',
      'PUE ZUS',
      'e-Urząd Skarbowy справка'
    ],
    pl: [
      'zaświadczenie ZUS',
      'zaświadczenie US',
      'zaświadczenie o niezaleganiu',
      'PIT-11 duplikat',
      'ZUS RMUA',
      'A1 zaświadczenie',
      'PUE ZUS',
      'e-Urząd Skarbowy'
    ],
    en: [
      'ZUS certificate Poland',
      'tax certificate Poland',
      'no-arrears certificate',
      'PIT-11 duplicate',
      'A1 posted worker',
      'PUE ZUS',
      'e-Urząd Skarbowy'
    ]
  },
  'zaswiadczenie-o-niekaralnosci': {
    ru: [
      'справка о несудимости Польша',
      'KRK справка',
      'zaświadczenie z KRK',
      'e-KRK онлайн',
      'справка для гражданства Польши',
      'apostille KRK',
      'помощь с KRK Варшава'
    ],
    pl: [
      'zaświadczenie o niekaralności',
      'KRK',
      'e-KRK',
      'zaświadczenie z Krajowego Rejestru Karnego',
      'KRK do obywatelstwa',
      'KRK do karty stałego pobytu',
      'kancelaria KRK Warszawa'
    ],
    en: [
      'criminal record certificate Poland',
      'KRK certificate',
      'e-KRK online',
      'Polish criminal record',
      'KRK for citizenship',
      'KRK apostille'
    ]
  },
  'tlumaczenia-przysiegle': {
    ru: [
      'присяжный перевод Польша',
      'tłumacz przysięgły',
      'присяжный переводчик украинский',
      'присяжный переводчик русский',
      'присяжный перевод Варшава',
      'TEPIS переводчик',
      'tłumaczenie przysięgłe online',
      'переводы для urząd Польша'
    ],
    pl: [
      'tłumacz przysięgły',
      'tłumaczenia przysięgłe',
      'tłumacz przysięgły ukraiński',
      'tłumacz przysięgły rosyjski',
      'tłumacz przysięgły angielski',
      'TEPIS Warszawa',
      'tłumaczenie z apostille'
    ],
    en: [
      'sworn translator Poland',
      'sworn translation Polish',
      'Ukrainian sworn translator Warsaw',
      'Russian sworn translator Warsaw',
      'TEPIS Warsaw',
      'certified translation Poland'
    ]
  },
  'zaproszenia': {
    ru: [
      'zaproszenie в Польшу',
      'приглашение в Польшу',
      'виза D Польша приглашение',
      'Schengen виза приглашение',
      'wniosek o zaproszenie',
      'zaproszenie wojewoda',
      'приглашение Варшава для визы',
      'электронное приглашение Польша'
    ],
    pl: [
      'zaproszenie dla cudzoziemca',
      'wniosek o zaproszenie',
      'zaproszenie do wizy Schengen',
      'zaproszenie do wizy D',
      'zaproszenie wojewoda Warszawa',
      'zaproszenie biznesowe Polska',
      'kancelaria zaproszenia Warszawa'
    ],
    en: [
      'invitation letter Poland',
      'zaproszenie Poland',
      'Polish D-visa invitation',
      'Schengen invitation letter Poland',
      'business invitation Poland',
      'family invitation Polish visa'
    ]
  },
  'odbior-z-lotniska': {
    ru: [
      'встреча в аэропорту Варшава',
      'трансфер из Chopin',
      'трансфер Modlin Варшава',
      'аэропорт Варшава встреча',
      'EES правила Польша',
      'встреча в аэропорту Варшава',
      'трансфер Krakow Balice',
      'встреча с табличкой Варшава'
    ],
    pl: [
      'odbiór z lotniska Warszawa',
      'transfer z Chopin',
      'transfer Modlin Warszawa',
      'odbiór z lotniska Kraków',
      'EES Polska',
      'odbiór z lotniska Warszawa',
      'transfer biznesowy Warszawa',
      'powitanie na lotnisku Warszawa'
    ],
    en: [
      'airport pickup Warsaw',
      'Chopin airport transfer',
      'Modlin transfer to Warsaw',
      'Krakow Balice airport pickup',
      'EES Poland 2025',
      'expat airport meet Warsaw',
      'business airport transfer Poland'
    ]
  },
  'wyszukiwanie-mieszkania': {
    ru: [
      'поиск жилья в Варшаве для иностранца',
      'аренда квартиры Варшава',
      'покупка квартиры в Польше иностранцем',
      'MSWiA разрешение покупка недвижимости',
      'аренда без meldunku',
      'риелтор для иностранцев Варшава',
      'квартира в Польше для экспата',
      'księga wieczysta проверка'
    ],
    pl: [
      'wyszukiwanie mieszkania dla cudzoziemca',
      'najem mieszkania Warszawa',
      'zakup mieszkania w Polsce',
      'MSWiA zezwolenie nieruchomości',
      'najem z meldunkiem',
      'pośrednik dla cudzoziemców',
      'mieszkanie dla expat Warszawa',
      'księga wieczysta sprawdzenie'
    ],
    en: [
      'apartment search Poland for foreigners',
      'Warsaw rental for expats',
      'apartment purchase Poland foreign buyer',
      'MSWiA real estate permit',
      'rental with meldunek',
      'expat real-estate agent Warsaw',
      'KW land register Poland',
      'real estate specialist Warsaw'
    ]
  },
  'tlumacz-na-wizyty': {
    ru: [
      'переводчик для urząd Варшава',
      'переводчик в urząd Варшава',
      'переводчик в банке Польша',
      'переводчик на свадьбу USC',
      'переводчик в больнице Польша',
      'устный переводчик ZUS',
      'асистент в urzędzie',
      'присяжный устный переводчик Варшава'
    ],
    pl: [
      'tłumacz na wizyty urzędowe',
      'tłumacz na wizyty Warszawa',
      'tłumacz do banku Warszawa',
      'tłumacz w USC do ślubu',
      'tłumacz w szpitalu Warszawa',
      'tłumacz ZUS ustny',
      'asysta urzędowa Warszawa',
      'tłumacz przysięgły ustny'
    ],
    en: [
      'interpreter for Polish urząd',
      'interpreter for office visits Warsaw',
      'bank interpreter Poland',
      'USC wedding interpreter Poland',
      'hospital interpreter Warsaw',
      'ZUS interpreter Polish',
      'urząd accompaniment Warsaw',
      'sworn interpreter Warsaw'
    ]
  },
  'pomoc-w-zatrudnieniu': {
    ru: [
      'помощь с трудоустройством Польша',
      'CV для Польши',
      'zezwolenie na pracę',
      'Blue Card Польша IT',
      'oświadczenie o powierzeniu pracy',
      'работа в Польше для иностранца 2026',
      'IP Box Польша',
      'B2B контракт Польша'
    ],
    pl: [
      'pomoc w zatrudnieniu cudzoziemców',
      'CV pod polski rynek',
      'zezwolenie na pracę typ A',
      'Niebieska Karta UE Polska',
      'oświadczenie o powierzeniu pracy',
      'praca w Polsce dla cudzoziemca 2026',
      'IP Box programista',
      'B2B kontrakt Polska'
    ],
    en: [
      'employment help Poland',
      'Polish CV writing',
      'work permit Poland type A',
      'EU Blue Card Poland IT',
      'oświadczenie work declaration Poland',
      'job search Poland expats',
      'IP Box developer Poland',
      'B2B contract Poland'
    ]
  },
  'zapis-dzieci-do-szkoly': {
    ru: [
      'запись ребёнка в школу Польша',
      'klasa powitalna Варшава',
      'школа для иностранцев Польша',
      'международная школа Варшава',
      'obowiązek szkolny Польша',
      'детсад в Польше для иностранца',
      'школа international Warsaw',
      'польская школа для украинских детей'
    ],
    pl: [
      'zapis dziecka cudzoziemca do szkoły',
      'klasa powitalna Warszawa',
      'szkoła dla cudzoziemców Polska',
      'szkoła międzynarodowa Warszawa',
      'obowiązek szkolny dla cudzoziemców',
      'przedszkole dla cudzoziemca',
      'szkoła Akademeia BISC ISW',
      'szkoła dla dzieci ukraińskich'
    ],
    en: [
      'school enrolment Poland for expat children',
      'welcome class Warsaw',
      'foreign children Polish school',
      'international school Warsaw Akademeia BISC ISW',
      'compulsory schooling Poland',
      'kindergarten Warsaw expats',
      'Polish school for Ukrainian kids',
      'expat children Polish education'
    ]
  },
  'rejestracja-sp-z-oo': {
    ru: [
      'регистрация Sp. z o.o.',
      'открыть фирму в Польше',
      'польская ООО',
      'KRS S24',
      'учредить Sp. z o.o.',
      'CIT 9% Польша',
      'Estonian CIT Польша',
      'Sp. z o.o. для иностранца'
    ],
    pl: [
      'rejestracja Sp. z o.o.',
      'założenie spółki z o.o.',
      'spółka z o.o. S24',
      'KRS rejestracja',
      'CIT estoński',
      'IP Box programista',
      'kancelaria spółki Warszawa',
      'Sp. z o.o. dla cudzoziemców'
    ],
    en: [
      'Sp. z o.o. registration Poland',
      'Polish LLC formation',
      'open company in Poland',
      'KRS registration',
      'Estonian CIT Poland',
      'IP Box Poland',
      'Poland company for foreigners',
      'Polish LLC registration Warsaw'
    ]
  },
  'gotowe-firmy': {
    ru: [
      'готовая компания Польша',
      'shelf company Польша',
      'купить Sp. z o.o.',
      'готовая Sp. z o.o.',
      'готовая фирма с историей',
      'Sp. z o.o. с банковским счётом',
      'shelf-company Варшава',
      'фирма с активным VAT'
    ],
    pl: [
      'gotowa spółka',
      'spółka z historią',
      'shelf company',
      'kupno gotowej Sp. z o.o.',
      'spółka z kontem bankowym',
      'aktywny VAT spółka',
      'gotowa firma Warszawa',
      'sprzedaż udziałów'
    ],
    en: [
      'shelf company Poland',
      'ready-made Sp. z o.o.',
      'buy Polish company',
      'aged company Poland',
      'company with bank account Poland',
      'active VAT shelf company',
      'shelf company Warsaw',
      'instant company Poland'
    ]
  },
  'jdg': {
    ru: [
      'JDG Польша',
      'индивидуальное предпринимательство Польша',
      'CEIDG регистрация',
      'samozatrudnienie',
      'Ulga na start ZUS',
      'IP Box JDG',
      'JDG для иностранца',
      'mały ZUS Plus'
    ],
    pl: [
      'JDG',
      'jednoosobowa działalność',
      'CEIDG rejestracja',
      'samozatrudnienie',
      'Ulga na start',
      'Mały ZUS Plus',
      'IP Box JDG',
      'JDG dla cudzoziemca'
    ],
    en: [
      'sole proprietorship Poland',
      'JDG registration',
      'CEIDG Poland',
      'self-employment Poland',
      'Ulga na start ZUS',
      'IP Box sole trader',
      'Poland self-employed for foreigners',
      'Mały ZUS Plus'
    ]
  },
  'przedstawicielstwa': {
    ru: [
      'представительство в Польше',
      'oddział иностранной фирмы Польша',
      'przedstawicielstwo zagranicznej firmy',
      'филиал в Польше',
      'регистрация oddziału',
      'KRS oddział',
      'международная экспансия в Польшу',
      'регистрация oddział Варшава'
    ],
    pl: [
      'oddział zagranicznej firmy',
      'przedstawicielstwo zagraniczne',
      'rejestracja oddziału w Polsce',
      'rejestr przedstawicielstw MRiT',
      'KRS oddział',
      'kierownik oddziału',
      'firma zagraniczna w Polsce',
      'kancelaria oddział Warszawa'
    ],
    en: [
      'foreign company branch Poland',
      'representative office Poland',
      'oddział registration',
      'przedstawicielstwo MRiT',
      'KRS branch',
      'foreign branch manager',
      'foreign company in Poland',
      'branch office registration Warsaw'
    ]
  },
  'podatki-ksiegowosc': {
    ru: [
      'бухгалтерия в Польше',
      'налоги в Польше',
      'CIT 9% Польша',
      'Estonian CIT',
      'IP Box 5%',
      'JPK_V7',
      'KSeF Польша',
      'księgowość dla Sp. z o.o.'
    ],
    pl: [
      'księgowość Warszawa',
      'biuro rachunkowe',
      'CIT estoński',
      'IP Box',
      'JPK_V7',
      'KSeF 2026',
      'kontrola podatkowa',
      'ceny transferowe'
    ],
    en: [
      'Polish accounting services',
      'tax compliance Poland',
      'Estonian CIT Poland',
      'IP Box 5%',
      'JPK_V7 Poland',
      'KSeF 2026',
      'tax audit Poland',
      'transfer pricing Poland'
    ]
  },
  'likwidacja-sprzedaz': {
    ru: [
      'ликвидация Sp. z o.o.',
      'закрытие фирмы Польша',
      'продажа фирмы Польша',
      'sprzedaż udziałów',
      'M&A Польша',
      'wykreślenie z KRS',
      'банкротство',
      'likwidator Sp. z o.o.'
    ],
    pl: [
      'likwidacja Sp. z o.o.',
      'zamknięcie firmy',
      'sprzedaż spółki',
      'zbycie udziałów',
      'M&A polska',
      'wykreślenie z KRS',
      'upadłość',
      'kancelaria likwidacja'
    ],
    en: [
      'Sp. z o.o. liquidation',
      'wind-down company Poland',
      'sell Polish company',
      'share transfer Poland',
      'M&A Poland',
      'KRS deregistration',
      'Polish bankruptcy',
      'company closure Warsaw'
    ]
  },
  'mswia-zezwolenie': {
    ru: [
      'разрешение MSWiA',
      'согласие МВД на покупку недвижимости',
      'MSWiA для иностранцев',
      'покупка недвижимости в Польше иностранцем',
      'zezwolenie MSWiA',
      'więź z Polską',
      'strefa nadgraniczna',
      'Karta Polaka недвижимость'
    ],
    pl: [
      'zezwolenie MSWiA',
      'zakup nieruchomości przez cudzoziemca',
      'MSWiA wniosek',
      'więź z Polską',
      'strefa nadgraniczna',
      'departament zezwoleń',
      'kancelaria MSWiA Warszawa',
      'pozwolenie ministra spraw wewnętrznych'
    ],
    en: [
      'MSWiA permit Poland',
      'real estate permit foreign buyer Poland',
      'Polish Interior Ministry permit',
      'non-EU property purchase Poland',
      'border zone Poland real estate',
      'więź z Polską',
      'Polish property buyer permit',
      'Karta Polaka real estate'
    ]
  },
  'due-diligence-nieruchomosci': {
    ru: [
      'due diligence недвижимости',
      'проверка квартиры перед покупкой',
      'KW проверка',
      'księga wieczysta',
      'проверка чистоты сделки',
      'обременения недвижимости',
      'юридический аудит недвижимости',
      'риски при покупке недвижимости Польша'
    ],
    pl: [
      'due diligence nieruchomości',
      'sprawdzenie mieszkania',
      'księga wieczysta sprawdzenie',
      'audyt prawny nieruchomości',
      'obciążenia nieruchomości',
      'historia nieruchomości',
      'wspólnota mieszkaniowa',
      'specjalista nieruchomości Warszawa'
    ],
    en: [
      'real estate due diligence Poland',
      'property check before purchase',
      'Polish land register check',
      'KW verification',
      'Polish property legal audit',
      'encumbrances Poland',
      'real estate specialist Warsaw',
      'pre-purchase property review Poland'
    ]
  },
  'notariusz-asysta': {
    ru: [
      'адвокат на акте у нотариуса',
      'akt notarialny сопровождение',
      'нотариус Варшава недвижимость',
      'pełnomocnictwo купля недвижимости',
      'depozyt notarialny',
      'PCC 2%',
      'Wpis do KW',
      'нотариальный акт Польша'
    ],
    pl: [
      'asysta przy akcie notarialnym',
      'specjalista u notariusza',
      'pełnomocnictwo zakup nieruchomości',
      'depozyt notarialny',
      'PCC 2%',
      'taksa notarialna',
      'wpis do KW',
      'specjalista nieruchomości Warszawa'
    ],
    en: [
      'notary deed assistance Poland',
      'real estate notary assistance Warsaw',
      'power of attorney property purchase Poland',
      'notarial deposit Poland',
      'PCC 2% Poland',
      'notarial fee Poland',
      'land register entry',
      'Poland real estate closing assistance'
    ]
  },
  'najem-komercyjny': {
    ru: [
      'аренда офиса Варшава',
      'najem komercyjny',
      'договор аренды офиса',
      'аренда магазина Польша',
      'аренда склада Польша',
      'service charge офис',
      'fit-out офис',
      'klauzula konkurencji najem'
    ],
    pl: [
      'najem komercyjny',
      'najem biura Warszawa',
      'najem lokalu',
      'najem magazynu',
      'service charge',
      'fit-out',
      'klauzula konkurencji',
      'kancelaria najmu Warszawa'
    ],
    en: [
      'commercial lease Poland',
      'office lease Warsaw',
      'retail lease Poland',
      'warehouse lease Poland',
      'service charge office',
      'fit-out negotiation',
      'non-compete clause lease',
      'Polish commercial real estate specialist'
    ]
  }
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getService(slug, locale);
  if (!content) return {};

  const safeLocale = (
    ['ru', 'pl', 'en', 'tr', 'uk'] as const
  ).includes(locale as SeoLocale)
    ? (locale as SeoLocale)
    : 'ru';

  const cityByLocale: Record<SeoLocale, string> = {
    ru: 'Варшава',
    pl: 'Warszawa',
    en: 'Warsaw',
    tr: 'Varşova',
    uk: 'Варшава'
  };

  const title = `${content.title} - ${content.subtitle} | ${ORG_LEGAL_NAME} ${cityByLocale[safeLocale]}`;
  const description = content.lead.slice(0, 160);
  const url = `/${locale}/uslugi/${slug}`;
  const keywords = KEYWORDS_BY_SLUG[slug]?.[safeLocale] ?? [];

  const ogLocaleMap: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US',
    tr: 'tr_TR',
    uk: 'uk_UA'
  };
  const ogLocale = ogLocaleMap[locale] ?? 'en_US';

  const languages: Record<string, string> = {};
  // Only advertise hreflang for locales whose content is translated.
  for (const l of INDEX_LOCALES) {
    if (services[slug]?.[l as SeoLocale]) {
      languages[l] = `/${l}/uslugi/${slug}`;
    }
  }
  if (services[slug]?.ru) languages['x-default'] = `/ru/uslugi/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description: content.lead.slice(0, 200),
      url,
      siteName: ORG_LEGAL_NAME,
      type: 'article',
      locale: ogLocale,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: title,
          type: 'image/webp'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1
      }
    }
  };
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = getService(slug, locale);
  if (!content) notFound();

  const safeLocale = (
    ['ru', 'pl', 'en', 'tr', 'uk'] as const
  ).includes(locale as SeoLocale)
    ? (locale as SeoLocale)
    : 'ru';

  const tServices = await getTranslations({ locale, namespace: 'Services' });
  const tNav = await getTranslations({ locale, namespace: 'Nav' });

  const url = `${SITE_URL}/${locale}/uslugi/${slug}`;

  const breadcrumb = breadcrumbLd([
    { name: ORG_LEGAL_NAME, url: `${SITE_URL}/${locale}` },
    {
      name: tNav('services') || tServices('eyebrow'),
      url: `${SITE_URL}/${locale}/#services`
    },
    { name: content.title, url }
  ]);

  const service = serviceLd({
    name: content.title,
    description: content.lead,
    url,
    locale: safeLocale,
    serviceType:
      content.group === 'immigration'
        ? 'Immigration legal services'
        : content.group === 'business'
        ? 'Business legal services'
        : content.group === 'documents'
        ? 'Document legal services'
        : 'Legal services'
  });

  const faq = faqPageLd(content.faq);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <Header />
      <main className="relative z-10">
        <ServiceDetail content={content} locale={locale} />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
