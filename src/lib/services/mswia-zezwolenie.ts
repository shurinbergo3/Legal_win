import type { ServiceEntry } from './types';

const mswiaZezwolenie: ServiceEntry = {
  ru: {
    slug: 'mswia-zezwolenie',
    group: 'realestate',
    icon: 'home',
    badge: 'MSWiA · zezwolenie · не-ЕС',
    title: 'Разрешение MSWiA на покупку недвижимости',
    subtitle: 'Согласие МВД Польши на покупку недвижимости иностранцами вне ЕС/ЕЭП',
    lead: 'Граждане стран вне ЕС/ЕЭП обязаны получить zezwolenie MSWiA (Ministerstwa Spraw Wewnętrznych i Administracji) перед покупкой недвижимости в Польше. Без разрешения сделка ничтожна с момента zawarcia. Готовим документы и обоснование «связи с Польшей» (więź z Polską), сопровождаем рассмотрение в Departamencie Zezwoleń. Срок - 60-180 дней. Освобождения: квартиры (не дома), Karta Polaka, брак с поляком 5+ лет, ВНЖ 5+ лет.',
    facts: [
      { label: 'Срок рассмотрения', value: '60-180 дней', note: 'MSWiA · standard' },
      { label: 'Действует', value: '2 года', note: 'на конкретную nieruchomość' },
      { label: 'Госпошлина', value: '1 570 PLN', note: 'opłata skarbowa' },
      { label: 'Лимит площади', value: '0,5-1 га', note: 'для жилых дома + участок' }
    ],
    grounds: {
      title: 'Когда нужно zezwolenie',
      subtitle: 'Не все покупки требуют разрешения. Многие иностранцы покупают без MSWiA - нужно знать исключения.',
      items: [
        { title: 'Дом или земля для гражданина не-ЕС', desc: 'Покупка дома (с участком), отдельной земли, дома с участком - обязательно zezwolenie. Без него akt notarialny невозможен.' },
        { title: 'Контрольный пакет в Sp. z o.o. с недвижимостью', desc: 'Покупка > 50% udziałów в Sp. z o.o., владеющей недвижимостью - попадает под MSWiA. Считается косвенной покупкой.' },
        { title: 'Освобождение - отдельная квартира', desc: 'Lokal mieszkalny (квартира) и miejsce parkingowe - не требуют zezwolenia, кроме как в strefie nadgranicznej. Это самая большая исключение.' },
        { title: 'Освобождение - Karta Polaka', desc: 'Holders Karty Polaka покупают без zezwolenia (любую недвижимость, кроме strefy nadgranicznej и площади > 1 ha).' },
        { title: 'Освобождение - брак с поляком', desc: 'Минимум 5 лет брака с гражданином Польши + проживание в Польше = освобождение от zezwolenia.' },
        { title: 'Освобождение - ВНЖ 5+ лет', desc: 'Karta Stałego Pobytu или Pobyt Rezydenta Długoterminowego UE даёт право покупки без zezwolenia. Karta Czasowego Pobytu - НЕ даёт.' }
      ]
    },
    timeline: {
      title: 'Этапы получения zezwolenia',
      subtitle: 'От подписания договора предварительного до wydania zezwolenia - обычно 3-6 месяцев. Только потом окончательный akt notarialny.',
      steps: [
        { title: 'Бесплатная консультация', duration: '30 мин', desc: 'Проверяем, нужно ли zezwolenie вашему гражданству и для этой недвижимости. Часто оказывается, что не нужно - экономим клиенту 6 месяцев и 5 000 PLN.' },
        { title: 'Umowa przedwstępna', duration: '1 неделя', desc: 'Подписание договора предварительного с продавцом - фиксируем цену и сроки. Указываем условие отлагательное: zawarcie aktu po wydaniu zezwolenia. Залог 5-10%.' },
        { title: 'Подготовка wniosku', duration: '2-3 недели', desc: 'Wniosek o wydanie zezwolenia + обоснование więzi z Polską: umowa o pracę, история визитов, родственные связи, бизнес в Польше, образование, владение польским.' },
        { title: 'Подача в MSWiA', duration: '1 день', desc: 'Через ePUAP или физически в Departament Zezwoleń, ul. Stefana Batorego 5, Варшава. Госпошлина 1 570 PLN. Документы - на польском с присяжным переводом.' },
        { title: 'Postępowanie MSWiA', duration: '60-180 дней', desc: 'MSWiA проверяет: страну происхождения, источник средств, цель покупки, связь с Польшей, безопасность государства. Может требовать дополнительные документы (отвечаем за 14 дней).' },
        { title: 'Wydanie zezwolenia', duration: '1 день', desc: 'Decyzja приходит почтой или через ePUAP. Действует 2 года на конкретную недвижимость. Можно продлить за 30 дней до конца срока.' },
        { title: 'Akt notarialny', duration: '1 день', desc: 'У нотариуса с покупателем и продавцом. Передача собственности, оплата, registracja в księdze wieczystej. Стандартная процедура, теперь с zezwoleniem.' }
      ]
    },
    documents: {
      title: 'Что нужно для wniosku',
      subtitle: 'MSWiA смотрит на полноту документов и качество обоснования więzi z Polską.',
      items: [
        'Wniosek o wydanie zezwolenia (заполняем мы)',
        'Паспорт + копия ВНЖ если есть (присяжный перевод)',
        'Umowa przedwstępna sprzedaży nieruchomości',
        'KW (księga wieczysta) недвижимости - выписка',
        'Mapa ewidencyjna i wypis z rejestru gruntów',
        'Подтверждение источника средств: 12 месяцев wyciąg bankowy, договоры о работе, sprawozdanie фирмы',
        'Документы о więzi z Polską: PIT/CIT за 3 года, договоры najmu/o pracę, KRS своей фирмы, метрики родственников',
        'Apostille на всех иностранных документах',
        'Tłumaczenia przysięgłe всех документов',
        'Pełnomocnictwo на нас (LegalWin) - пред MSWiA'
      ]
    },
    pricing: {
      title: 'Стоимость работы',
      subtitle: 'Под ключ от первой консультации до wydania zezwolenia.',
      items: [
        { label: 'Консультация', value: 'Бесплатно', note: '30 минут · нужно ли zezwolenie' },
        { label: 'Wniosek o zezwolenie', value: 'от 4 800 PLN', note: 'Документы + подача + сопровождение' },
        { label: 'С присяжными переводами', value: 'от 6 500 PLN', note: '+ apostille' },
        { label: 'Сложный случай', value: 'от 9 800 PLN', note: 'strefa nadgraniczna · слабая więź' }
      ],
      note: 'Госпошлина MSWiA - 1 570 PLN отдельно. Apostille в стране происхождения - отдельно. Tłumaczenia ~50-100 PLN/страница (если не входят в pakiet).'
    },
    legalBase: {
      title: 'Нормативная база',
      items: [
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Rozporządzenie MSWiA z dnia 17 stycznia 2017 r. ws. szczegółowych informacji oraz dokumentów',
        'Konstytucja RP - art. 32 (równość obywateli i obcokrajowców)',
        'Traktat akcesyjny z UE z 16 kwietnia 2003 r. (zwolnienie obywateli UE/EOG)',
        'Konwencja Haska 1961 r. - apostille na dokumenty zagraniczne'
      ]
    },
    faq: [
      { q: 'Какие квартиры можно покупать без zezwolenia?', a: 'Любая lokal mieszkalny (жилое помещение, квартира с księgą wieczystą lokalu - поземельной книгой квартиры) - без zezwolenia (разрешения), для всех граждан мира. Но: только не в strefie nadgranicznej (приграничной зоне, 15 км от границы Беларусь, Россия, Украина, Литва - там нужно zezwolenie всегда). И не дом с участком - это уже nieruchomość gruntowa (земельная недвижимость), требует zezwolenia.' },
      { q: 'Как доказывать więź z Polską?', a: 'Документально. Więź z Polską (связь с Польшей) - несколько примеров сильных доказательств: 1) ВНЖ или Karta Polaka; 2) договор работы у польского работодателя 1+ год; 3) Sp. z o.o. в Польше с реальным оборотом; 4) брак с поляком (даже < 5 лет - частичная więź); 5) дети, которые ходят в польскую школу; 6) обучение в польском вузе; 7) Польские родственники - даже бабушки/дедушки. Чем больше - тем сильнее.' },
      { q: 'Что если получили odmowę?', a: 'Odmowa (отказ) - 14 дней на wniosek o ponowne rozpatrzenie sprawy (заявление о повторном рассмотрении дела) в Министерство. Если опять отказ - skarga (жалоба) в Wojewódzki Sąd Administracyjny (Воеводский административный суд, 30 дней). Часто причина - слабая więź (связь). Дополняем доказательства и подаём повторно. У нас 80%+ успеха при повторной подаче.' },
      { q: 'Можно ли купить через польскую Sp. z o.o.?', a: 'Да, и иногда это удобнее. Sp. z o.o. - польская юридическая личность, может покупать без zezwolenia (разрешения) (если 51%+ принадлежит резидентам ЕС или гражданам Польши). Для покупки домов через Sp. z o.o. с иностранным контролем (>50% non-EU) - снова нужно zezwolenie на покупку контрольного пакета.' },
      { q: 'Какова strefa nadgraniczna?', a: 'Strefa nadgraniczna (приграничная зона) - 15 км от государственной границы по карте. В Польше это границы с Беларусью, Россией (Калининградская область), Украиной и Литвой (только узкая полоса). В strefie - zezwolenie нужно ВСЕМ иностранцам, включая граждан ЕС. Большие города у границы (Białystok, Lublin, Rzeszów) - обычно вне strefy.' },
      { q: 'Сколько действует zezwolenie?', a: '2 года с даты wydania (выдачи). На конкретную недвижимость (с указанием KW - поземельной книги и адреса). Если не успели - продление за 30 дней до конца срока (1 раз). Если продали другую - нужно новое zezwolenie на новую.' },
      { q: 'Граждане ЕС/ЕЭП нужно zezwolenie?', a: 'Нет. Граждане UE и EOG (ЕЭЗ - Norwegia, Islandia, Liechtenstein) + Швейцария - покупают без zezwolenia (с момента 2009/2014 после accesyjnych okresów dla rolnictwa - переходных периодов после вступления в ЕС для сельхозземель). Только в strefie nadgranicznej (приграничной зоне) могут быть ограничения.' }
    ],
    related: ['due-diligence-nieruchomosci', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zezwolenie MSWiA под ключ',
    ctaSubtitle: 'Бесплатно проверяем, нужно ли разрешение. От wniosku до aktu - 4 800 PLN под ключ.'
  },
  pl: {
    slug: 'mswia-zezwolenie',
    group: 'realestate',
    icon: 'home',
    badge: 'MSWiA · zezwolenie · spoza UE',
    title: 'Zezwolenie MSWiA na zakup nieruchomości',
    subtitle: 'Zgoda Ministerstwa SWiA dla cudzoziemców spoza UE/EOG',
    lead: 'Obywatele spoza UE/EOG muszą uzyskać zezwolenie MSWiA przed zakupem nieruchomości w Polsce. Bez zezwolenia transakcja jest nieważna od momentu zawarcia. Przygotowujemy dokumenty i uzasadnienie więzi z Polską, prowadzimy postępowanie w Departamencie Zezwoleń. Termin 60-180 dni. Zwolnienia: lokale mieszkalne (nie domy), Karta Polaka, małżeństwo z Polakiem 5+ lat, PR 5+ lat.',
    facts: [
      { label: 'Termin', value: '60-180 dni', note: 'MSWiA standard' },
      { label: 'Ważność', value: '2 lata', note: 'na konkretną nieruchomość' },
      { label: 'Opłata', value: '1 570 PLN', note: 'opłata skarbowa' },
      { label: 'Limit powierzchni', value: '0,5-1 ha', note: 'dom + działka' }
    ],
    grounds: {
      title: 'Kiedy potrzebne',
      subtitle: 'Nie każdy zakup wymaga zezwolenia.',
      items: [
        { title: 'Dom lub działka - spoza UE', desc: 'Dom z działką, sama działka - obowiązkowe.' },
        { title: 'Pakiet kontrolny w spółce z nieruchomością', desc: 'Nabycie > 50% udziałów Sp. z o.o. z nieruchomością - pośrednie nabycie.' },
        { title: 'Zwolnienie - lokal mieszkalny', desc: 'Mieszkanie i miejsce parkingowe - bez zezwolenia (poza strefą nadgraniczną).' },
        { title: 'Zwolnienie - Karta Polaka', desc: 'Bez zezwolenia (poza strefą i > 1 ha).' },
        { title: 'Zwolnienie - małżeństwo', desc: 'Min. 5 lat z Polakiem + zamieszkanie w Polsce.' },
        { title: 'Zwolnienie - PR 5+ lat', desc: 'Karta Stałego Pobytu lub rezydent długoterminowy UE.' }
      ]
    },
    timeline: {
      title: 'Etapy uzyskania',
      subtitle: '3-6 miesięcy od umowy przedwstępnej do aktu notarialnego.',
      steps: [
        { title: 'Konsultacja', duration: '30 min', desc: 'Czy zezwolenie potrzebne dla Twojego obywatelstwa.' },
        { title: 'Umowa przedwstępna', duration: '1 tydz.', desc: 'Z warunkiem zawieszającym - akt po zezwoleniu. Zaliczka 5-10%.' },
        { title: 'Wniosek', duration: '2-3 tyg.', desc: 'Uzasadnienie więzi: praca, rodzina, biznes, edukacja.' },
        { title: 'Złożenie w MSWiA', duration: '1 dzień', desc: 'ePUAP lub fizycznie ul. Batorego 5. Opłata 1 570 PLN.' },
        { title: 'Postępowanie', duration: '60-180 dni', desc: 'MSWiA bada źródło środków, więź, bezpieczeństwo państwa.' },
        { title: 'Decyzja', duration: '1 dzień', desc: 'Decyzja pocztą / ePUAP. 2 lata ważności.' },
        { title: 'Akt notarialny', duration: '1 dzień', desc: 'Standardowa procedura z zezwoleniem.' }
      ]
    },
    documents: {
      title: 'Co potrzebujemy',
      subtitle: 'MSWiA patrzy na kompletność i siłę więzi.',
      items: [
        'Wniosek (przygotowujemy)',
        'Paszport + karta pobytu (tłumaczenie)',
        'Umowa przedwstępna',
        'KW nieruchomości',
        'Mapa ewidencyjna i wypis z rejestru gruntów',
        'Źródło środków: wyciągi 12 mies., umowy, sprawozdanie',
        'Dowody więzi: PIT/CIT 3 lata, umowy o pracę/najmu, KRS, metryki rodzinne',
        'Apostille na dokumentach zagranicznych',
        'Tłumaczenia przysięgłe',
        'Pełnomocnictwo dla nas'
      ]
    },
    pricing: {
      title: 'Wycena',
      subtitle: 'Pod klucz.',
      items: [
        { label: 'Konsultacja', value: 'Gratis', note: '30 min · czy potrzebne' },
        { label: 'Wniosek', value: 'od 4 800 PLN', note: 'Dokumenty + podanie + asysta' },
        { label: 'Z tłumaczeniami', value: 'od 6 500 PLN', note: '+ apostille' },
        { label: 'Trudny przypadek', value: 'od 9 800 PLN', note: 'Strefa nadgraniczna · słaba więź' }
      ],
      note: 'Opłata MSWiA 1 570 PLN osobno. Apostille za granicą - osobno. Tłumaczenia ~50-100 PLN/strona.'
    },
    legalBase: {
      title: 'Podstawa prawna',
      items: [
        'Ustawa z 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Rozporządzenie MSWiA z 17 stycznia 2017 r.',
        'Konstytucja RP - art. 32',
        'Traktat akcesyjny UE z 16 kwietnia 2003 r.',
        'Konwencja Haska 1961 r.'
      ]
    },
    faq: [
      { q: 'Mieszkania bez zezwolenia?', a: 'Każdy lokal mieszkalny - tak. Wyjątek - strefa nadgraniczna (15 km od granicy z BY, RU, UA, LT). Dom z działką - zawsze zezwolenie.' },
      { q: 'Jak udowodnić więź?', a: 'Karta pobytu / Karta Polaka, umowa pracy, Sp. z o.o., małżeństwo, dzieci w polskiej szkole, studia, polscy krewni.' },
      { q: 'Odmowa?', a: '14 dni na ponowne rozpatrzenie. Potem WSA. 80%+ sukcesu po uzupełnieniu więzi.' },
      { q: 'Kupno przez Sp. z o.o.?', a: 'Tak, polska Sp. z o.o. (51%+ rezydenci UE/Polacy) - bez zezwolenia. Pakiet kontrolny zagraniczny - wymaga zezwolenia.' },
      { q: 'Strefa nadgraniczna?', a: '15 km od granicy. Wszyscy cudzoziemcy (też UE) potrzebują zezwolenia.' },
      { q: 'Ważność zezwolenia?', a: '2 lata na konkretną nieruchomość. Przedłużenie 1× przed końcem.' },
      { q: 'UE/EOG?', a: 'Bez zezwolenia (poza strefą nadgraniczną).' }
    ],
    related: ['due-diligence-nieruchomosci', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zezwolenie MSWiA pod klucz',
    ctaSubtitle: 'Sprawdzamy bezpłatnie. Pod klucz od 4 800 PLN.'
  },
  en: {
    slug: 'mswia-zezwolenie',
    group: 'realestate',
    icon: 'home',
    badge: 'MSWiA · permit · non-EU',
    title: 'MSWiA real estate permit',
    subtitle: 'Polish Ministry of Interior consent for non-EU/EEA buyers',
    lead: 'Citizens of countries outside the EU/EEA must obtain MSWiA permission before buying real estate in Poland. Without it, the transaction is void from the moment of signing. We prepare documents and demonstrate ties to Poland (więź z Polską), and run the case at the Department of Permits. Decision time 60-180 days. Exemptions: apartments (not houses), Karta Polaka holders, marriage to a Polish citizen for 5+ years, 5+ years of PR.',
    facts: [
      { label: 'Decision time', value: '60-180 days', note: 'MSWiA · standard' },
      { label: 'Validity', value: '2 years', note: 'tied to specific property' },
      { label: 'State fee', value: '1,570 PLN', note: 'opłata skarbowa' },
      { label: 'Area limit', value: '0.5-1 ha', note: 'house + plot' }
    ],
    grounds: {
      title: 'When permission is required',
      subtitle: 'Not every purchase requires it. Many foreigners buy without - knowing exemptions matters.',
      items: [
        { title: 'House or land - non-EU buyer', desc: 'House with plot, standalone land - permission mandatory.' },
        { title: 'Controlling stake in property-holding Sp. z o.o.', desc: 'Buying > 50% of shares in a Sp. z o.o. owning property - counts as indirect purchase.' },
        { title: 'Exemption - apartment', desc: 'Apartment unit and parking spot - no permit needed (except border zone). Biggest exemption.' },
        { title: 'Exemption - Karta Polaka', desc: 'Card holders buy without permit (except border zone and > 1 ha).' },
        { title: 'Exemption - marriage', desc: 'Min. 5 years married to a Polish citizen + Polish residence.' },
        { title: 'Exemption - 5+ years PR', desc: 'Karta Stałego Pobytu or EU long-term resident.' }
      ]
    },
    timeline: {
      title: 'Permit process',
      subtitle: 'From preliminary contract to permit issuance - typically 3-6 months.',
      steps: [
        { title: 'Free consultation', duration: '30 min', desc: 'Whether your nationality and the property require permission.' },
        { title: 'Preliminary agreement', duration: '1 week', desc: 'Sign with seller. Suspension condition: deed after permit. Deposit 5-10%.' },
        { title: 'Application drafting', duration: '2-3 weeks', desc: 'Application + ties justification: work, family, business, education, language.' },
        { title: 'Filing at MSWiA', duration: '1 day', desc: 'ePUAP or in person at ul. Batorego 5, Warsaw. Fee 1,570 PLN. Documents in Polish with sworn translation.' },
        { title: 'MSWiA review', duration: '60-180 days', desc: 'Country of origin, source of funds, purpose, ties, state security checks.' },
        { title: 'Decision', duration: '1 day', desc: 'Sent by post or ePUAP. Valid 2 years on specific property.' },
        { title: 'Notarial deed', duration: '1 day', desc: 'Notary handles transfer with permit attached. Standard procedure.' }
      ]
    },
    documents: {
      title: 'What we need',
      subtitle: 'MSWiA looks at completeness and the strength of ties.',
      items: [
        'Application (we prepare)',
        'Passport + residence card with sworn translation',
        'Preliminary purchase agreement',
        'Land register (KW) extract',
        'Cadastral map and land register excerpt',
        '12 months of bank statements, work contracts, company financials (source of funds)',
        'Ties evidence: 3 years of PIT/CIT, employment/lease contracts, KRS, family records',
        'Apostille on foreign documents',
        'Sworn translations',
        'Power of attorney for us'
      ]
    },
    pricing: {
      title: 'Our fee',
      subtitle: 'Turnkey from consultation to permit.',
      items: [
        { label: 'Consultation', value: 'Free', note: '30 min · whether required' },
        { label: 'Application', value: 'from 4,800 PLN', note: 'Docs + filing + representation' },
        { label: 'With sworn translations', value: 'from 6,500 PLN', note: '+ apostille' },
        { label: 'Complex case', value: 'from 9,800 PLN', note: 'Border zone · weak ties' }
      ],
      note: 'MSWiA fee 1,570 PLN separate. Apostille from country of origin - separate. Translations ~50-100 PLN/page.'
    },
    legalBase: {
      title: 'Legal basis',
      items: [
        'Act of 24 March 1920 on the Acquisition of Real Estate by Foreigners',
        'MSWiA Regulation of 17 January 2017 on detailed information and documents',
        'Constitution of Poland - art. 32',
        'EU Accession Treaty of 16 April 2003 (EU/EEA exemption)',
        'Hague Apostille Convention 1961'
      ]
    },
    faq: [
      { q: 'Apartments without permit?', a: 'Any apartment unit - yes, regardless of nationality. Exception: border zone (15 km from BY, RU, UA, LT borders - always need permit). House with land - always needs permit.' },
      { q: 'How to prove ties?', a: 'Documentation. Strong examples: residence card / Karta Polaka; 1+ year Polish employment contract; Polish Sp. z o.o. with revenue; marriage to Polish citizen (even < 5 years); kids in Polish school; Polish university; Polish ancestors. More = stronger.' },
      { q: 'Refusal?', a: '14 days for reconsideration. Then voivodeship court (30 days). Often weak ties - we strengthen and refile. 80%+ success on second filing.' },
      { q: 'Buy through Polish Sp. z o.o.?', a: "Yes - Polish Sp. z o.o. (51%+ EU/Polish residents) buys without permit. Foreign-controlled (>50% non-EU) - share purchase needs permit." },
      { q: 'Border zone?', a: '15 km from state border. All foreigners (including EU) need permit there.' },
      { q: 'Permit validity?', a: '2 years on specific property. One extension available before expiry.' },
      { q: 'EU/EEA citizens?', a: 'No permit required (except border zone).' }
    ],
    related: ['due-diligence-nieruchomosci', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'MSWiA permit turnkey',
    ctaSubtitle: 'Free check whether you need it. Turnkey from 4,800 PLN.'
  },
  tr: {
    slug: 'mswia-zezwolenie',
    group: 'realestate',
    icon: 'home',
    badge: 'MSWiA · zezwolenie · AB dışı',
    title: 'MSWiA gayrimenkul izni',
    subtitle: 'AB / EFTA dışı yabancılar için Polonya İçişleri Bakanlığı izni',
    lead: 'AB / EFTA dışı vatandaşlar Polonya\'da gayrimenkul almadan önce zezwolenie MSWiA (Ministerstwo Spraw Wewnętrznych i Administracji - İçişleri Bakanlığı izni) almak zorundadır. İzin olmadan satış akdi başından geçersizdir. Belgeleri ve "Polonya ile bağ" (więź z Polską) gerekçesini hazırlıyor, Departament Zezwoleń\'de süreci yürütüyoruz. Süre 60-180 gün. Muafiyetler: daire (ev değil), Karta Polaka, 5+ yıl Polonyalıyla evlilik, 5+ yıl daimi ikamet.',
    facts: [
      { label: 'İnceleme süresi', value: '60-180 gün', note: 'MSWiA · standart' },
      { label: 'Geçerlilik', value: '2 yıl', note: 'belirli bir gayrimenkule' },
      { label: 'Resmi harç', value: '1.570 PLN', note: 'opłata skarbowa' },
      { label: 'Alan limiti', value: '0,5-1 ha', note: 'konut + arsa' }
    ],
    grounds: {
      title: 'İzin ne zaman gerekir',
      subtitle: 'Her alımda izin gerekmez. Birçok yabancı MSWiA olmadan alım yapar - istisnaları bilmek önemlidir.',
      items: [
        { title: 'AB dışı vatandaş için ev veya arsa', desc: 'Ev (arsayla birlikte), tek başına arsa veya arsalı ev alımı - mutlaka zezwolenie gerekir. Olmadan akt notarialny mümkün değildir.' },
        { title: 'Gayrimenkul sahibi Sp. z o.o.\'da kontrol payı', desc: 'Gayrimenkul sahibi Sp. z o.o.\'da > %50 udziałów alımı - dolaylı edinim sayılır ve MSWiA kapsamına girer.' },
        { title: 'Muafiyet - bağımsız daire', desc: 'Lokal mieszkalny (daire) ve miejsce parkingowe (otopark) - strefa nadgraniczna (sınır bölgesi) hariç zezwolenie gerektirmez. En büyük muafiyettir.' },
        { title: 'Muafiyet - Karta Polaka', desc: 'Karta Polaka sahipleri zezwolenie olmadan alabilir (strefa nadgraniczna ve > 1 ha alan hariç).' },
        { title: 'Muafiyet - Polonyalıyla evlilik', desc: 'En az 5 yıl Polonya vatandaşıyla evlilik + Polonya\'da ikamet = zezwolenie\'den muafiyet.' },
        { title: 'Muafiyet - 5+ yıl daimi ikamet', desc: 'Karta Stałego Pobytu veya AB Uzun Dönem Mukim statüsü zezwolenie\'siz alım hakkı verir. Karta Czasowego Pobytu (geçici) - vermez.' }
      ]
    },
    timeline: {
      title: 'İzin süreci',
      subtitle: 'Umowa przedwstępna\'dan (ön sözleşme) zezwolenie\'nin verilmesine genelde 3-6 ay. Sonrasında nihai akt notarialny.',
      steps: [
        { title: 'Ücretsiz danışmanlık', duration: '30 dk', desc: 'Vatandaşlığınız ve hedef gayrimenkul için zezwolenie gerekip gerekmediğini kontrol ediyoruz. Sıkça gerekmediği ortaya çıkıyor - müvekkile 6 ay ve 5.000 PLN tasarruf sağlıyoruz.' },
        { title: 'Umowa przedwstępna', duration: '1 hafta', desc: 'Satıcıyla ön sözleşme - fiyat ve süreler sabitlenir. Geciktirici şart yazılır: zawarcie aktu po wydaniu zezwolenia (izin verildikten sonra akt). Kapora %5-10.' },
        { title: 'Wniosku hazırlığı', duration: '2-3 hafta', desc: 'Wniosek o wydanie zezwolenia + więź z Polską gerekçesi: iş sözleşmesi, ziyaret geçmişi, akrabalık bağları, Polonya\'daki işletme, eğitim, Lehçe bilgisi.' },
        { title: 'MSWiA\'ya sunma', duration: '1 gün', desc: 'ePUAP üzerinden veya bizzat Departament Zezwoleń, ul. Stefana Batorego 5, Varşova adresine. Resmi harç 1.570 PLN. Belgeler Lehçe ve yeminli tercümeli.' },
        { title: 'MSWiA incelemesi', duration: '60-180 gün', desc: 'MSWiA inceler: menşe ülke, fon kaynağı, alım amacı, Polonya bağı, devlet güvenliği. Ek belge isteyebilir (14 gün içinde yanıt veriyoruz).' },
        { title: 'Zezwolenie\'nin verilmesi', duration: '1 gün', desc: 'Decyzja posta veya ePUAP üzerinden gelir. Belirli gayrimenkulde 2 yıl geçerlidir. Süre bitiminden 30 gün önce uzatılabilir.' },
        { title: 'Akt notarialny', duration: '1 gün', desc: 'Alıcı ve satıcıyla noter huzurunda. Mülkiyetin geçişi, ödeme, księga wieczysta\'ya tescil. Standart prosedür, izinle birlikte uygulanır.' }
      ]
    },
    documents: {
      title: 'Wniosku için gerekenler',
      subtitle: 'MSWiA belgelerin tamlığına ve więź gerekçesinin gücüne bakar.',
      items: [
        'Wniosek o wydanie zezwolenia (biz hazırlıyoruz)',
        'Pasaport + varsa karta pobytu kopyası (yeminli tercümeyle)',
        'Umowa przedwstępna sprzedaży nieruchomości',
        'KW (księga wieczysta) çıktısı',
        'Mapa ewidencyjna ve wypis z rejestru gruntów',
        'Fon kaynağı kanıtı: 12 aylık banka ekstresi, iş sözleşmeleri, şirket sprawozdanie\'si',
        'Polonya bağı belgeleri: 3 yıllık PIT/CIT, umowa najmu / o pracę, kendi şirketinizin KRS\'i, akrabalık nüfus belgeleri',
        'Tüm yabancı belgelere apostille',
        'Tüm belgelerin yeminli tercümesi',
        'LegalWin\'e MSWiA önünde temsil yetkisi (pełnomocnictwo)'
      ]
    },
    pricing: {
      title: 'Hizmet bedelimiz',
      subtitle: 'İlk danışmanlıktan zezwolenie\'nin teslimine anahtar teslim.',
      items: [
        { label: 'Danışmanlık', value: 'Ücretsiz', note: '30 dakika · zezwolenie gerekli mi' },
        { label: 'Wniosek o zezwolenie', value: '4.800 PLN\'den', note: 'Belgeler + sunma + temsil' },
        { label: 'Yeminli tercümelerle', value: '6.500 PLN\'den', note: '+ apostille' },
        { label: 'Karmaşık dosya', value: '9.800 PLN\'den', note: 'Strefa nadgraniczna · zayıf więź' }
      ],
      note: 'MSWiA harcı 1.570 PLN ayrıdır. Menşe ülkede apostille ayrıdır. Yeminli tercüme sayfa başı ~50-100 PLN (pakete dahil değilse).'
    },
    legalBase: {
      title: 'Yasal dayanak',
      items: [
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców (Yabancıların Gayrimenkul Edinimi Kanunu)',
        '17 Ocak 2017 tarihli MSWiA gayrimenkul izni başvuru belgeleri yönetmeliği',
        'Polonya Cumhuriyeti Anayasası - madde 32 (vatandaş ve yabancılar arasında eşitlik)',
        '16 Nisan 2003 AB Katılım Antlaşması (AB / EFTA vatandaşlarına muafiyet)',
        '1961 Lahey Apostille Sözleşmesi'
      ]
    },
    faq: [
      { q: 'Hangi daireler zezwolenie\'siz alınabilir?', a: 'Lokal mieszkalny (oturulan dairenin księga wieczysta\'sı bulunan bağımsız bölüm) - zezwolenie\'siz, dünyanın her vatandaşı için. Ancak: strefa nadgraniczna (sınır bölgesi - Belarus, Rusya, Ukrayna, Litvanya sınırının 15 km içi) hariç tutulur, orada her zaman zezwolenie gerekir. Arsasıyla ev nieruchomość gruntowa (arsalı gayrimenkul) kategorisindedir, zezwolenie ister.' },
      { q: 'Polonya ile więź nasıl kanıtlanır?', a: 'Belgeyle. Güçlü kanıtlardan örnekler: 1) karta pobytu veya Karta Polaka; 2) Polonyalı işverenle 1+ yıl iş sözleşmesi; 3) Polonya\'da gerçek cirolu Sp. z o.o.; 4) Polonyalıyla evlilik (5 yıldan az olsa bile kısmi więź); 5) Polonya okulunda eğitim alan çocuklar; 6) Polonya üniversitesinde öğrenim; 7) Polonyalı atalar (büyükanne / büyükbaba dahil). Ne kadar çok - o kadar güçlü.' },
      { q: 'Ret aldıysanız ne yapmalı?', a: 'Odmowa (ret) - 14 gün içinde Bakanlığa wniosek o ponowne rozpatrzenie sprawy (yeniden inceleme talebi). Tekrar reddedilirse - 30 gün içinde Wojewódzki Sąd Administracyjny\'ye skarga (dava). Sıkça neden zayıf więź olur. Kanıtları güçlendirir, yeniden sunarız. İkinci başvuruda %80+ başarımız var.' },
      { q: 'Polonyalı Sp. z o.o. üzerinden alabilir miyim?', a: 'Evet, bazen daha kullanışlıdır. Sp. z o.o. Polonya tüzel kişiliğidir, %51+ AB mukimi veya Polonya vatandaşı sahipliğindeyse zezwolenie olmadan alabilir. Yabancı kontrollü (%50+ AB dışı) Sp. z o.o. üzerinden ev alımında kontrol payına yine zezwolenie gerekir.' },
      { q: 'Strefa nadgraniczna nedir?', a: 'Sınır bölgesi - haritada devlet sınırından 15 km uzaklık. Polonya\'da Belarus, Rusya (Kaliningrad), Ukrayna ve Litvanya sınırlarını kapsar (Litvanya\'da yalnızca dar bir şerit). Strefa\'da AB vatandaşları dahil tüm yabancılar zezwolenie\'ye tabidir. Sınıra yakın büyük şehirler (Białystok, Lublin, Rzeszów) genelde strefa dışındadır.' },
      { q: 'Zezwolenie ne kadar geçerli?', a: 'Verildiği tarihten itibaren 2 yıl. Belirli bir gayrimenkule (KW ve adres bilgisiyle) bağlıdır. Sürenin bitiminden 30 gün önce 1 kez uzatılabilir. Başka bir mülk için yeniden zezwolenie gerekir.' },
      { q: 'AB / EFTA vatandaşları için zezwolenie gerekli mi?', a: 'Hayır. AB ve EFTA (Norveç, İzlanda, Liechtenstein) + İsviçre vatandaşları zezwolenie\'siz alır (tarım arsalarında AB katılımının ardından geçiş dönemleri 2009/2014\'te bitti). Yalnızca strefa nadgraniczna\'da kısıtlamalar olabilir.' }
    ],
    related: ['due-diligence-nieruchomosci', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Anahtar teslim MSWiA izni',
    ctaSubtitle: 'İzin gerekip gerekmediğini ücretsiz kontrol ediyoruz. Wniosku\'dan akit\'e kadar 4.800 PLN\'den anahtar teslim.'
  },
  uk: {
    slug: 'mswia-zezwolenie',
    group: 'realestate',
    icon: 'home',
    badge: 'MSWiA · zezwolenie · поза ЄС',
    title: 'Дозвіл MSWiA на купівлю нерухомості',
    subtitle: 'Згода МВС Польщі на купівлю нерухомості іноземцями поза ЄС/ЄЕП',
    lead: 'Громадяни країн поза ЄС/ЄЕП зобов’язані отримати zezwolenie MSWiA (Ministerstwa Spraw Wewnętrznych i Administracji) перед купівлею нерухомості в Польщі. Без дозволу угода є нікчемною з моменту zawarcia. Готуємо документи та обґрунтування «зв’язку з Польщею» (więź z Polską), супроводжуємо розгляд у Departamencie Zezwoleń. Термін — 60–180 днів. Звільнення: квартири (не будинки), Karta Polaka, шлюб із поляком 5+ років, карта сталого побуту 5+ років.',
    facts: [
      { label: 'Термін розгляду', value: '60–180 днів', note: 'MSWiA · standard' },
      { label: 'Діє', value: '2 роки', note: 'на конкретну nieruchomość' },
      { label: 'Держмито', value: '1 570 PLN', note: 'opłata skarbowa' },
      { label: 'Ліміт площі', value: '0,5–1 га', note: 'для житлового будинку + ділянка' }
    ],
    grounds: {
      title: 'Коли потрібне zezwolenie',
      subtitle: 'Не всі купівлі вимагають дозволу. Багато іноземців купують без MSWiA — треба знати винятки.',
      items: [
        { title: 'Будинок або земля для громадянина поза ЄС', desc: 'Купівля будинку (з ділянкою), окремої землі, будинку з ділянкою — обов’язково zezwolenie. Без нього akt notarialny неможливий.' },
        { title: 'Контрольний пакет у Sp. z o.o. з нерухомістю', desc: 'Купівля > 50% udziałów у Sp. z o.o., що володіє нерухомістю — підпадає під MSWiA. Вважається непрямою купівлею.' },
        { title: 'Звільнення — окрема квартира', desc: 'Lokal mieszkalny (квартира) і miejsce parkingowe — не вимагають zezwolenia, крім як у strefie nadgranicznej. Це найбільший виняток.' },
        { title: 'Звільнення — Karta Polaka', desc: 'Власники Karty Polaka купують без zezwolenia (будь-яку нерухомість, окрім strefy nadgranicznej та площі > 1 га).' },
        { title: 'Звільнення — шлюб із поляком', desc: 'Мінімум 5 років шлюбу з громадянином Польщі + проживання в Польщі = звільнення від zezwolenia.' },
        { title: 'Звільнення — карта сталого побуту 5+ років', desc: 'Karta Stałego Pobytu або Pobyt Rezydenta Długoterminowego UE дає право купівлі без zezwolenia. Karta Czasowego Pobytu — НЕ дає.' }
      ]
    },
    timeline: {
      title: 'Етапи отримання zezwolenia',
      subtitle: 'Від підписання umowy przedwstępnej до wydania zezwolenia — зазвичай 3–6 місяців. Лише потім — остаточний akt notarialny.',
      steps: [
        { title: 'Безкоштовна консультація', duration: '30 хв', desc: 'Перевіряємо, чи потрібне zezwolenie для вашого громадянства та для цієї нерухомості. Часто виявляється, що не потрібне — економимо клієнту 6 місяців і 5 000 PLN.' },
        { title: 'Umowa przedwstępna', duration: '1 тиждень', desc: 'Підписання попереднього договору з продавцем — фіксуємо ціну та строки. Прописуємо відкладальну умову: zawarcie aktu po wydaniu zezwolenia. Завдаток 5–10%.' },
        { title: 'Підготовка wniosku', duration: '2–3 тижні', desc: 'Wniosek o wydanie zezwolenia + обґрунтування więzi z Polską: umowa o pracę, історія візитів, родинні зв’язки, бізнес у Польщі, освіта, володіння польською.' },
        { title: 'Подання в MSWiA', duration: '1 день', desc: 'Через ePUAP або фізично в Departament Zezwoleń, ul. Stefana Batorego 5, Варшава. Держмито 1 570 PLN. Документи — польською мовою з присяжним перекладом.' },
        { title: 'Postępowanie MSWiA', duration: '60–180 днів', desc: 'MSWiA перевіряє: країну походження, джерело коштів, мету купівлі, зв’язок із Польщею, безпеку держави. Може вимагати додаткові документи (відповідаємо за 14 днів).' },
        { title: 'Wydanie zezwolenia', duration: '1 день', desc: 'Decyzja надходить поштою або через ePUAP. Діє 2 роки на конкретну нерухомість. Можна продовжити за 30 днів до кінця терміну.' },
        { title: 'Akt notarialny', duration: '1 день', desc: 'У нотаріуса з покупцем і продавцем. Передача власності, оплата, реєстрація в księdze wieczystej. Стандартна процедура, тепер уже з zezwoleniem.' }
      ]
    },
    documents: {
      title: 'Що потрібно для wniosku',
      subtitle: 'MSWiA дивиться на повноту документів та якість обґрунтування więzi z Polską.',
      items: [
        'Wniosek o wydanie zezwolenia (заповнюємо ми)',
        'Закордонний паспорт + копія карти побуту, якщо є (присяжний переклад)',
        'Umowa przedwstępna sprzedaży nieruchomości',
        'KW (księga wieczysta) нерухомості — виписка',
        'Mapa ewidencyjna i wypis z rejestru gruntów',
        'Підтвердження джерела коштів: 12 місяців wyciąg bankowy, договори про роботу, sprawozdanie фірми',
        'Документи про więź z Polską: PIT/CIT за 3 роки, договори najmu/o pracę, KRS своєї фірми, метрики родичів',
        'Apostille на всіх іноземних документах',
        'Tłumaczenia przysięgłe всіх документів',
        'Pełnomocnictwo на нас (LegalWin) — перед MSWiA'
      ]
    },
    pricing: {
      title: 'Вартість роботи',
      subtitle: 'Під ключ від першої консультації до wydania zezwolenia.',
      items: [
        { label: 'Консультація', value: 'Безкоштовно', note: '30 хвилин · чи потрібне zezwolenie' },
        { label: 'Wniosek o zezwolenie', value: 'від 4 800 PLN', note: 'Документи + подання + супровід' },
        { label: 'З присяжними перекладами', value: 'від 6 500 PLN', note: '+ apostille' },
        { label: 'Складний випадок', value: 'від 9 800 PLN', note: 'strefa nadgraniczna · слабка więź' }
      ],
      note: 'Держмито MSWiA — 1 570 PLN окремо. Apostille в країні походження — окремо. Tłumaczenia ~50–100 PLN/сторінка (якщо не входять у pakiet).'
    },
    legalBase: {
      title: 'Нормативна база',
      items: [
        'Ustawa z dnia 24 marca 1920 r. o nabywaniu nieruchomości przez cudzoziemców',
        'Rozporządzenie MSWiA z dnia 17 stycznia 2017 r. ws. szczegółowych informacji oraz dokumentów',
        'Konstytucja RP — art. 32 (równość obywateli i obcokrajowców)',
        'Traktat akcesyjny z UE z 16 kwietnia 2003 r. (zwolnienie obywateli UE/EOG)',
        'Konwencja Haska 1961 r. — apostille na dokumenty zagraniczne'
      ]
    },
    faq: [
      { q: 'Які квартири можна купувати без zezwolenia?', a: 'Будь-яка lokal mieszkalny (житлове приміщення, квартира з власною księgą wieczystą lokalu) — без zezwolenia (дозволу), для громадян усього світу. Але: лише не в strefie nadgranicznej (прикордонній зоні, 15 км від кордону з Україною, Білоруссю, Литвою — там zezwolenie потрібне завжди). І не будинок із ділянкою — це вже nieruchomość gruntowa (земельна нерухомість), вимагає zezwolenia.' },
      { q: 'Як доводити więź z Polską?', a: 'Документально. Więź z Polską (зв’язок із Польщею) — кілька прикладів сильних доказів: 1) карта побуту або Karta Polaka; 2) договір про роботу в польського роботодавця 1+ рік; 3) Sp. z o.o. у Польщі з реальним оборотом; 4) шлюб із поляком (навіть < 5 років — часткова więź); 5) діти, які ходять до польської школи; 6) навчання в польському виші; 7) польські родичі — навіть бабусі/дідусі. Що більше — то сильніше.' },
      { q: 'Що робити при odmowie?', a: 'Odmowa (відмова) — 14 днів на wniosek o ponowne rozpatrzenie sprawy (заяву про повторний розгляд справи) до Міністерства. Якщо знову відмова — skarga (скарга) до Wojewódzki Sąd Administracyjny (Воєводського адміністративного суду, 30 днів). Часто причина — слабка więź (зв’язок). Доповнюємо докази та подаємо повторно. У нас 80%+ успіху при повторному поданні.' },
      { q: 'Чи можна купити через польську Sp. z o.o.?', a: 'Так, і подеколи це зручніше. Sp. z o.o. — польська юридична особа, може купувати без zezwolenia (якщо 51%+ належить резидентам ЄС або громадянам Польщі). Для купівлі будинків через Sp. z o.o. з іноземним контролем (>50% non-EU) — знову потрібне zezwolenie на купівлю контрольного пакета.' },
      { q: 'Що таке strefa nadgraniczna?', a: 'Strefa nadgraniczna (прикордонна зона) — 15 км від державного кордону на карті. У Польщі це кордони з Україною, Білоруссю, Литвою (лише вузька смуга) та Калінінградською областю. У strefie zezwolenie потрібне ВСІМ іноземцям, включно з громадянами ЄС. Великі міста біля кордону (Białystok, Lublin, Rzeszów) — зазвичай поза strefą.' },
      { q: 'Скільки діє zezwolenie?', a: '2 роки з дати wydania (видачі). На конкретну нерухомість (із зазначенням KW — поземельної книги та адреси). Якщо не встигли — продовження за 30 днів до кінця терміну (1 раз). Якщо продали іншу — потрібне нове zezwolenie на нову.' },
      { q: 'Чи потрібне zezwolenie громадянам ЄС/ЄЕП?', a: 'Ні. Громадяни UE та EOG (ЄЕЗ — Norwegia, Islandia, Liechtenstein) + Швейцарія — купують без zezwolenia (з 2009/2014 років після перехідних періодів для сільгоспземель). Лише в strefie nadgranicznej (прикордонній зоні) можуть бути обмеження.' }
    ],
    related: ['due-diligence-nieruchomosci', 'notariusz-asysta', 'wyszukiwanie-mieszkania'],
    ctaTitle: 'Zezwolenie MSWiA під ключ',
    ctaSubtitle: 'Безкоштовно перевіряємо, чи потрібен дозвіл. Від wniosku до aktu — 4 800 PLN під ключ.'
  }
};

export default mswiaZezwolenie;
