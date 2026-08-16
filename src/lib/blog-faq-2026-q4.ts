// FAQ for the 2026-Q3/Q4 cluster: meldunek, apostille, KRK, and trend pieces.
// Merged into BLOG_FAQ in blog-faq.ts. Questions mirror real "People also ask"
// phrasing per locale rather than being translated word for word.

import type { BlogFaqItem, BlogFaqLocale } from './blog-faq';

type Map = Record<string, Partial<Record<BlogFaqLocale, BlogFaqItem[]>>>;

export const BLOG_FAQ_2026_Q4: Map = {
  'meldunek-dlya-inostranca-2026': {
    ru: [
      { q: 'В какой срок иностранец обязан сделать meldunek в Польше?', a: 'Гражданин страны вне ЕС - не позднее 4-го дня от заселения по адресу, если проживание там длится дольше 30 дней. Граждане ЕС, ЕЭЗ и Швейцарии - в течение 30 дней.' },
      { q: 'Сколько стоит zameldowanie?', a: 'Сама регистрация бесплатна. Zaświadczenie o zameldowaniu na pobyt stały тоже 0 PLN, справка о временной прописке - 17 PLN, доверенность на представителя - ещё 17 PLN.' },
      { q: 'Можно ли прописаться в Польше онлайн?', a: 'Нет, если вы гражданин страны вне ЕС - для вас доступна только личная подача или подача через представителя. Гражданам Польши и ЕС электронный канал доступен, но с 1 января 2026 требует активного аккаунта eDoręczenia.' },
      { q: 'Даёт ли прописка права на квартиру?', a: 'Нет. Zameldowanie - запись в реестре населения, а не титул собственности и не право проживания. Оно не мешает продать квартиру и не блокирует выселение по договору.' },
      { q: 'Что грозит за отсутствие мельдунка?', a: 'Для иностранца это wykroczenie по art. 147 kodeksu wykroczeń: mandat либо grzywna до 5 000 PLN. Управы штрафуют редко, но отсутствие адреса в реестре создаёт проблемы при подаче на карту побыту и при контроле straży granicznej.' }
    ],
    uk: [
      { q: 'У який строк іноземець зобов\'язаний зробити meldunek у Польщі?', a: 'Громадянин країни поза ЄС - не пізніше 4-го дня від заселення за адресою, якщо проживання там триває довше 30 днів. Громадяни ЄС, ЄЕЗ і Швейцарії - протягом 30 днів.' },
      { q: 'Скільки коштує zameldowanie?', a: 'Сама реєстрація безкоштовна. Zaświadczenie o zameldowaniu na pobyt stały теж 0 PLN, довідка про тимчасову прописку - 17 PLN, довіреність на представника - ще 17 PLN.' },
      { q: 'Чи можна прописатися в Польщі онлайн?', a: 'Ні, якщо ви громадянин країни поза ЄС - для вас доступна лише особиста подача або подача через представника. Громадянам Польщі та ЄС електронний канал доступний, але з 1 січня 2026 вимагає активного акаунта eDoręczenia.' },
      { q: 'Чи дає прописка права на квартиру?', a: 'Ні. Zameldowanie - запис у реєстрі населення, а не титул власності і не право проживання. Воно не заважає продати квартиру і не блокує виселення за договором.' },
      { q: 'Що загрожує за відсутність мельдунку?', a: 'Для іноземця це wykroczenie за art. 147 kodeksu wykroczeń: mandat або grzywna до 5 000 PLN. Управи штрафують рідко, але відсутність адреси в реєстрі створює проблеми при подачі на карту побиту і під час контролю straży granicznej.' }
    ],
    pl: [
      { q: 'W jakim terminie cudzoziemiec musi się zameldować?', a: 'Obywatel państwa spoza UE - najpóźniej czwartego dnia od przybycia pod dany adres, jeżeli pobyt przekracza 30 dni. Obywatele UE, EOG i Szwajcarii - w ciągu 30 dni.' },
      { q: 'Ile kosztuje zameldowanie?', a: 'Samo zameldowanie jest bezpłatne. Zaświadczenie o zameldowaniu na pobyt stały również, a o pobyt czasowy kosztuje 17 PLN. Pełnomocnictwo to dodatkowe 17 PLN opłaty skarbowej.' },
      { q: 'Czy cudzoziemiec może zameldować się online?', a: 'Cudzoziemcy spoza UE nie mogą - pozostaje wizyta osobista albo pełnomocnik. Obywatele polscy i UE korzystają z kanału elektronicznego, ale od 1 stycznia 2026 r. wymaga on aktywnego adresu do doręczeń elektronicznych.' },
      { q: 'Czy meldunek daje prawa do lokalu?', a: 'Nie. Zameldowanie to czynność ewidencyjna, a nie tytuł prawny do lokalu. Nie blokuje sprzedaży mieszkania ani wypowiedzenia umowy najmu.' },
      { q: 'Co grozi za brak meldunku?', a: 'Wobec cudzoziemca jest to wykroczenie z art. 147 Kodeksu wykroczeń zagrożone mandatem albo grzywną do 5 000 PLN. Urzędy karzą rzadko, ale brak adresu w rejestrze utrudnia sprawy pobytowe i kontrole Straży Granicznej.' }
    ],
    en: [
      { q: 'How quickly must a foreigner register an address in Poland?', a: 'A national of a non-EU country must register by the fourth day after moving into an address, where the stay exceeds 30 days. EU, EEA and Swiss nationals have 30 days.' },
      { q: 'How much does registration cost?', a: 'Registration itself is free. A certificate of permanent registration is also free; the temporary equivalent costs PLN 17, and a power of attorney adds PLN 17 stamp duty.' },
      { q: 'Can a foreigner register online in Poland?', a: 'Non-EU nationals cannot - only in person or through a representative. Polish and EU citizens can file electronically, but since 1 January 2026 that requires an active eDoręczenia account.' },
      { q: 'Does registration give rights to the flat?', a: 'No. It is a records entry, not a legal title or a right of occupancy. It neither blocks a sale nor prevents termination of a lease.' },
      { q: 'What happens if I do not register?', a: 'For a foreigner it is a petty offence under art. 147 of the Petty Offences Code, punishable by an on-the-spot fine or up to PLN 5,000. Offices rarely enforce it, but a missing address complicates residence applications and Border Guard checks.' }
    ],
    tr: [
      { q: 'Yabancı Polonya\'da hangi sürede kayıt yaptırmalı?', a: 'AB dışı ülke vatandaşı, bir adreste 30 günden uzun kalacaksa en geç dördüncü günde kayıt yaptırmalıdır. AB, AEA ve İsviçre vatandaşları için süre 30 gündür.' },
      { q: 'Zameldowanie ne kadar tutuyor?', a: 'Kaydın kendisi ücretsizdir. Daimi kayıt belgesi de ücretsizdir; geçici kayıt belgesi 17 PLN, vekâletname ise ayrıca 17 PLN opłata skarbowa gerektirir.' },
      { q: 'Yabancı online kayıt yaptırabilir mi?', a: 'AB dışı yabancılar yapamaz; yalnızca bizzat ya da vekil aracılığıyla. Polonya ve AB vatandaşları elektronik kanalı kullanabilir, ancak 1 Ocak 2026\'dan itibaren aktif eDoręczenia hesabı gerekir.' },
      { q: 'Kayıt konut üzerinde hak verir mi?', a: 'Hayır. Zameldowanie bir sicil işlemidir; mülkiyet başlığı ya da oturma hakkı değildir. Satışı engellemez, kira sözleşmesinin feshini de.' },
      { q: 'Kayıt yaptırmazsam ne olur?', a: 'Yabancı için bu, kabahatler kanunu art. 147 kapsamında bir kabahattir: yerinde ceza ya da 5.000 PLN\'ye kadar para cezası. İdareler nadiren ceza keser, ancak sicilde adres olmaması ikamet dosyalarını ve sınır denetimlerini zorlaştırır.' }
    ]
  },

  'zameldowanie-bez-soglasiya-sobstvennika-2026': {
    ru: [
      { q: 'Можно ли прописаться без согласия собственника?', a: 'Да. Согласие владельца не является юридическим условием: если факт проживания доказан, гмина вносит запись решением в административном порядке по art. 31 ustawy o ewidencji ludności.' },
      { q: 'Сколько длится административная процедура прописки?', a: 'В Варшаве обычно от 6 недель до 3 месяцев. Срок зависит от гмины и от того, отвечает ли собственник на вызовы урядa.' },
      { q: 'Чем доказать факт проживания по адресу?', a: 'Договором аренды, переводами за аренду с назначением платежа, счетами и письмами на ваше имя по этому адресу, показаниями соседей, договором с работодателем с указанием адреса.' },
      { q: 'Сколько стоит прописка через административную процедуру?', a: 'Госпошлина за само zameldowanie - 0 PLN. Платными остаются только справки (17 PLN) и доверенность на представителя (17 PLN).' }
    ],
    uk: [
      { q: 'Чи можна прописатися без згоди власника?', a: 'Так. Згода власника не є юридичною умовою: якщо факт проживання доведено, гміна вносить запис рішенням в адміністративному порядку за art. 31 ustawy o ewidencji ludności.' },
      { q: 'Скільки триває адміністративна процедура прописки?', a: 'У Варшаві зазвичай від 6 тижнів до 3 місяців. Строк залежить від гміни і від того, чи відповідає власник на виклики urzędu.' },
      { q: 'Чим довести факт проживання за адресою?', a: 'Договором оренди, переказами за оренду з призначенням платежу, рахунками і листами на ваше ім\'я за цією адресою, показаннями сусідів, договором з роботодавцем із зазначенням адреси.' },
      { q: 'Скільки коштує прописка через адміністративну процедуру?', a: 'Держмито за саме zameldowanie - 0 PLN. Платними лишаються тільки довідки (17 PLN) і довіреність на представника (17 PLN).' }
    ],
    pl: [
      { q: 'Czy można zameldować się bez zgody właściciela?', a: 'Tak. Zgoda właściciela nie jest przesłanką ustawową - przy wykazanym fakcie zamieszkiwania organ gminy dokonuje zameldowania decyzją administracyjną na podstawie art. 31 ustawy o ewidencji ludności.' },
      { q: 'Ile trwa postępowanie o zameldowanie w trybie administracyjnym?', a: 'W Warszawie zwykle od 6 tygodni do 3 miesięcy, zależnie od gminy i od tego, czy właściciel odpowiada na wezwania.' },
      { q: 'Jak udowodnić fakt zamieszkiwania?', a: 'Umową najmu, przelewami czynszu z tytułem, rachunkami i korespondencją na nazwisko pod danym adresem, zeznaniami sąsiadów oraz umową z pracodawcą wskazującą adres.' },
      { q: 'Ile kosztuje zameldowanie w trybie administracyjnym?', a: 'Samo zameldowanie jest bezpłatne. Płatne pozostają wyłącznie zaświadczenia (17 PLN) i pełnomocnictwo (17 PLN).' }
    ],
    en: [
      { q: 'Can I register an address without the owner\'s consent?', a: 'Yes. Consent is not a statutory condition: where residence is proven, the municipality registers you by administrative decision under art. 31 of the Population Records Act.' },
      { q: 'How long do the administrative proceedings take?', a: 'In Warsaw typically six weeks to three months, depending on the municipality and on whether the owner responds to summonses.' },
      { q: 'How do I prove I live at the address?', a: 'With the lease, rent transfers with a clear reference, bills and correspondence in your name at that address, neighbours\' statements, and an employment contract stating the address.' },
      { q: 'What does the administrative route cost?', a: 'Registration itself is free. Only certificates (PLN 17) and a power of attorney (PLN 17) carry fees.' }
    ],
    tr: [
      { q: 'Mal sahibinin onayı olmadan kayıt yaptırılabilir mi?', a: 'Evet. Onay yasal bir koşul değildir: ikamet olgusu kanıtlanırsa gmina, ustawa o ewidencji ludności art. 31 uyarınca idari kararla kaydı yapar.' },
      { q: 'İdari usul ne kadar sürer?', a: 'Varşova\'da genellikle 6 hafta ile 3 ay arası; gminaya ve mal sahibinin tebligatlara yanıt verip vermemesine bağlıdır.' },
      { q: 'İkamet olgusu nasıl kanıtlanır?', a: 'Kira sözleşmesi, açıklamalı kira havaleleri, adrese gelen faturalar ve yazışmalar, komşu beyanları ve adresi içeren iş sözleşmesiyle.' },
      { q: 'İdari yolla kayıt ne tutar?', a: 'Kaydın kendisi ücretsizdir. Yalnızca belgeler (17 PLN) ve vekâletname (17 PLN) ücretlidir.' }
    ]
  },

  'meldunek-czasowy-vs-staly-2026': {
    ru: [
      { q: 'Кто может получить постоянную прописку в Польше?', a: 'Только граждане Польши, обладатели karty stałego pobytu, статуса резидента ЕС и граждане ЕС с правом постоянного пребывания. Всем остальным доступен только meldunek czasowy.' },
      { q: 'Чем отличается adres do korespondencji от мельдунка?', a: 'Адрес для корреспонденции указывается в CEIDG, KRS, налоговой и ZUS, но не попадает в реестр PESEL. Там, где орган смотрит именно в PESEL - школа, регистрация авто, POZ - он мельдунек не заменяет.' },
      { q: 'Нужно ли обновлять прописку после новой карты побыту?', a: 'Да. Временная прописка не может действовать дольше вашего документа пребывания, поэтому после получения новой карты zgłoszenie подаётся заново.' },
      { q: 'Можно ли иметь временную и постоянную прописку одновременно?', a: 'Да. Постоянная по одному адресу и временная по другому - законная конструкция, типичная при работе в другом городе.' }
    ],
    uk: [
      { q: 'Хто може отримати постійну прописку в Польщі?', a: 'Лише громадяни Польщі, власники karty stałego pobytu, статусу резидента ЄС і громадяни ЄС з правом постійного перебування. Усім іншим доступний тільки meldunek czasowy.' },
      { q: 'Чим відрізняється adres do korespondencji від мельдунку?', a: 'Адреса для кореспонденції вказується в CEIDG, KRS, податковій і ZUS, але не потрапляє до реєстру PESEL. Там, де орган дивиться саме в PESEL - школа, реєстрація авто, POZ - вона мельдунек не замінює.' },
      { q: 'Чи треба оновлювати прописку після нової карти побиту?', a: 'Так. Тимчасова прописка не може діяти довше за ваш документ перебування, тому після отримання нової картки zgłoszenie подається заново.' },
      { q: 'Чи можна мати тимчасову і постійну прописку одночасно?', a: 'Так. Постійна за однією адресою і тимчасова за іншою - законна конструкція, типова при роботі в іншому місті.' }
    ],
    pl: [
      { q: 'Kto może zameldować się na pobyt stały?', a: 'Wyłącznie obywatele polscy, posiadacze karty stałego pobytu, statusu rezydenta długoterminowego UE oraz obywatele UE z prawem stałego pobytu. Pozostali meldują się czasowo.' },
      { q: 'Czym różni się adres do korespondencji od meldunku?', a: 'Adres do korespondencji wskazuje się w CEIDG, KRS, urzędzie skarbowym i ZUS, ale nie trafia on do rejestru PESEL. Tam, gdzie organ sprawdza PESEL - rekrutacja szkolna, rejestracja pojazdu, POZ - nie zastąpi meldunku.' },
      { q: 'Czy meldunek trzeba odnawiać po nowej karcie pobytu?', a: 'Tak. Zameldowanie czasowe nie może wykraczać poza ważność dokumentu pobytowego, więc po odbiorze nowej karty zgłoszenie składa się ponownie.' },
      { q: 'Czy można mieć meldunek czasowy i stały równocześnie?', a: 'Tak. Pobyt stały pod jednym adresem i czasowy pod innym jest zgodny z prawem i typowy przy pracy w innym mieście.' }
    ],
    en: [
      { q: 'Who can obtain permanent address registration in Poland?', a: 'Only Polish citizens, holders of a permanent residence card, EU long-term residents, and EU nationals with a permanent right of residence. Everyone else registers temporarily.' },
      { q: 'How does a correspondence address differ from registration?', a: 'A correspondence address is given to CEIDG, the company register, the tax office and ZUS, but never enters the PESEL register. Where an authority checks PESEL - school admission, vehicle registration, clinic assignment - it does not substitute.' },
      { q: 'Do I need to renew registration after a new residence card?', a: 'Yes. Temporary registration cannot outlast your residence document, so a fresh notification is filed once you collect the new card.' },
      { q: 'Can I hold temporary and permanent registration at once?', a: 'Yes. Permanent at one address and temporary at another is lawful and common when working in another city.' }
    ],
    tr: [
      { q: 'Daimi kayıt kimlere açık?', a: 'Yalnızca Polonya vatandaşları, karta stałego pobytu sahipleri, AB uzun dönem mukimleri ve daimi ikamet hakkı olan AB vatandaşları. Diğer herkes geçici kayıt yaptırır.' },
      { q: 'Yazışma adresi meldunek\'ten nasıl ayrılır?', a: 'Yazışma adresi CEIDG, KRS, vergi dairesi ve ZUS\'a bildirilir ama PESEL siciline girmez. İdarenin PESEL\'e baktığı yerlerde (okul kaydı, araç tescili, aile hekimi) onun yerine geçmez.' },
      { q: 'Yeni karta pobytu sonrası kayıt yenilenmeli mi?', a: 'Evet. Geçici kayıt ikamet belgenizin süresini aşamaz; yeni kartı aldıktan sonra bildirim yeniden yapılır.' },
      { q: 'Aynı anda geçici ve daimi kayıt olur mu?', a: 'Evet. Bir adreste daimi, başka adreste geçici kayıt hukuka uygundur ve başka şehirde çalışanlarda yaygındır.' }
    ]
  },

  'zaswiadczenie-o-zameldowaniu-2026': {
    ru: [
      { q: 'Сколько стоит справка о прописке в Польше?', a: 'Zaświadczenie o zameldowaniu na pobyt stały - 0 PLN, о временной прописке - 17 PLN. Справка о выписке и о количестве прописанных - тоже по 17 PLN.' },
      { q: 'Где требуют zaświadczenie o zameldowaniu?', a: 'В банке при открытии фирменного счёта и AML-проверках, в wydziale komunikacji при регистрации авто, в школе при зачислении по rejonizacji, у воеводы как подтверждение места проживания, в налоговой и страховой.' },
      { q: 'Принимают ли выписку из mObywatel вместо бумажной справки?', a: 'Внутри Польши обычно да - электронный документ с печатью урядa равнозначен бумажному. Для апостиля и для части иностранных органов нужен бумажный оригинал.' },
      { q: 'Сколько действует справка о прописке?', a: 'Формального срока нет, она подтверждает состояние реестра на дату выдачи. Принимающие органы обычно требуют документ не старше 1-3 месяцев, банки часто - не старше 30 дней.' }
    ],
    uk: [
      { q: 'Скільки коштує довідка про прописку в Польщі?', a: 'Zaświadczenie o zameldowaniu na pobyt stały - 0 PLN, про тимчасову прописку - 17 PLN. Довідка про виписку і про кількість прописаних - теж по 17 PLN.' },
      { q: 'Де вимагають zaświadczenie o zameldowaniu?', a: 'У банку при відкритті фірмового рахунку та AML-перевірках, у wydziale komunikacji при реєстрації авто, у школі при зарахуванні за rejonizacją, у воєводи як підтвердження місця проживання, у податковій і страховій.' },
      { q: 'Чи приймають витяг з mObywatel замість паперової довідки?', a: 'Усередині Польщі зазвичай так - електронний документ із печаткою urzędu рівнозначний паперовому. Для апостиля і для частини іноземних органів потрібен паперовий оригінал.' },
      { q: 'Скільки діє довідка про прописку?', a: 'Формального строку немає, вона підтверджує стан реєстру на дату видачі. Приймальні органи зазвичай вимагають документ не старший за 1-3 місяці, банки часто - не старший за 30 днів.' }
    ],
    pl: [
      { q: 'Ile kosztuje zaświadczenie o zameldowaniu?', a: 'Zaświadczenie o zameldowaniu na pobyt stały jest bezpłatne, o pobyt czasowy kosztuje 17 PLN. Zaświadczenie o wymeldowaniu i o liczbie osób zameldowanych również po 17 PLN.' },
      { q: 'Gdzie wymagane jest zaświadczenie o zameldowaniu?', a: 'W banku przy rachunku firmowym i procedurach AML, w wydziale komunikacji przy rejestracji pojazdu, w szkole przy rekrutacji rejonowej, u wojewody jako potwierdzenie miejsca zamieszkania oraz w urzędzie skarbowym i u ubezpieczyciela.' },
      { q: 'Czy wydruk z mObywatela zastępuje zaświadczenie papierowe?', a: 'W obrocie krajowym zwykle tak - dokument elektroniczny z pieczęcią urzędu ma tę samą moc. Do apostille i dla części organów zagranicznych potrzebny jest oryginał papierowy.' },
      { q: 'Jak długo ważne jest zaświadczenie o zameldowaniu?', a: 'Nie ma ustawowego terminu - dokument potwierdza stan rejestru na dzień wydania. Odbiorcy oczekują zwykle dokumentu nie starszego niż 1-3 miesiące, banki często nie starszego niż 30 dni.' }
    ],
    en: [
      { q: 'How much is a registration certificate in Poland?', a: 'A certificate of permanent registration is free; the temporary one costs PLN 17. Certificates of deregistration and of the number of registered persons also cost PLN 17.' },
      { q: 'Who asks for a registration certificate?', a: 'Banks for business accounts and AML checks, the vehicle department for car registration, schools for catchment-area admission, the wojewoda as proof of residence, plus tax offices and insurers.' },
      { q: 'Does an mObywatel extract replace the paper certificate?', a: 'Inside Poland, usually yes - an electronic document with the office\'s seal carries the same force. An apostille and some foreign authorities require the paper original.' },
      { q: 'How long is the certificate valid?', a: 'There is no statutory expiry; it reflects the register on the day of issue. Recipients typically want one no older than one to three months, and banks often 30 days.' }
    ],
    tr: [
      { q: 'Kayıt belgesi ne kadar tutuyor?', a: 'Daimi kayıt belgesi ücretsizdir, geçici kayıt belgesi 17 PLN\'dir. Kayıt silme belgesi ve kayıtlı kişi sayısı belgesi de 17 PLN\'dir.' },
      { q: 'Bu belgeyi kimler istiyor?', a: 'Şirket hesabı ve AML işlemlerinde bankalar, araç tescilinde wydział komunikacji, bölge esaslı kayıtta okullar, ikamet teyidi için wojewoda, ayrıca vergi dairesi ve sigorta şirketleri.' },
      { q: 'mObywatel çıktısı kâğıt belgenin yerine geçer mi?', a: 'Polonya içinde genellikle evet; idare mühürlü elektronik belge aynı güçtedir. Apostil için ve bazı yabancı kurumlar için kâğıt asıl gerekir.' },
      { q: 'Belge ne kadar geçerli?', a: 'Kanuni bir süre yoktur; düzenlendiği gündeki sicil durumunu gösterir. Alıcılar genellikle 1-3 aydan, bankalar çoğu kez 30 günden eski olmamasını ister.' }
    ]
  },

  'wymeldowanie-i-fiktivnaya-propiska-2026': {
    ru: [
      { q: 'Нужно ли выписываться при переезде внутри Польши?', a: 'Нет. Новое zgłoszenie по новому адресу автоматически аннулирует прежнюю запись - отдельная процедура wymeldowania не требуется.' },
      { q: 'Как собственнику выписать жильца, который съехал?', a: 'Подать wniosek o wymeldowanie w trybie administracyjnym. Урząd устанавливает факт непроживания по доказательствам и выносит decyzję; пошлина - 10 PLN, срок обычно 4-12 недель.' },
      { q: 'Чем рискует собственник при фиктивной прописке?', a: 'Прописанным, которого придётся выписывать административно, вопросами налоговой о недекларируемом доходе от аренды, перерасчётом коммунальных платежей и ответственностью, если адрес использовался в мошеннических схемах.' },
      { q: 'Нужно ли выписываться при выезде из Польши?', a: 'Да, при выезде на срок дольше 6 месяцев подаётся zgłoszenie wyjazdu poza granice Rzeczypospolitej Polskiej. Это же документ пригодится при смене налогового резидентства.' }
    ],
    uk: [
      { q: 'Чи треба виписуватися при переїзді всередині Польщі?', a: 'Ні. Нове zgłoszenie за новою адресою автоматично анулює попередній запис - окрема процедура wymeldowania не потрібна.' },
      { q: 'Як власнику виписати мешканця, який виїхав?', a: 'Подати wniosek o wymeldowanie w trybie administracyjnym. Urząd встановлює факт непроживання за доказами і виносить decyzję; мито - 10 PLN, строк зазвичай 4-12 тижнів.' },
      { q: 'Чим ризикує власник при фіктивній прописці?', a: 'Прописаним, якого доведеться виписувати адміністративно, питаннями податкової про недекларований дохід від оренди, перерахунком комунальних платежів і відповідальністю, якщо адреса використовувалася в шахрайських схемах.' },
      { q: 'Чи треба виписуватися при виїзді з Польщі?', a: 'Так, при виїзді на строк довший за 6 місяців подається zgłoszenie wyjazdu poza granice Rzeczypospolitej Polskiej. Цей самий документ знадобиться при зміні податкового резидентства.' }
    ],
    pl: [
      { q: 'Czy trzeba się wymeldować przy przeprowadzce w Polsce?', a: 'Nie. Nowe zgłoszenie pod nowym adresem znosi poprzedni wpis automatycznie - odrębne wymeldowanie nie jest konieczne.' },
      { q: 'Jak wymeldować najemcę, który się wyprowadził?', a: 'Składając wniosek o wymeldowanie w trybie administracyjnym. Organ ustala fakt opuszczenia lokalu na podstawie dowodów i wydaje decyzję; opłata wynosi 10 PLN, a postępowanie trwa zwykle 4-12 tygodni.' },
      { q: 'Czym ryzykuje właściciel przy fikcyjnym meldunku?', a: 'Osobą do wymeldowania w trybie administracyjnym, pytaniami urzędu skarbowego o niezgłoszony przychód z najmu, przeliczeniem opłat za media oraz odpowiedzialnością, gdy adres posłużył do działań oszukańczych.' },
      { q: 'Czy trzeba się wymeldować przy wyjeździe z Polski?', a: 'Tak, przy wyjeździe na dłużej niż 6 miesięcy składa się zgłoszenie wyjazdu poza granice Rzeczypospolitej Polskiej. Ten sam dokument bywa przydatny przy zmianie rezydencji podatkowej.' }
    ],
    en: [
      { q: 'Do I need to deregister when moving within Poland?', a: 'No. A new notification at the new address cancels the previous entry automatically, so separate deregistration is unnecessary.' },
      { q: 'How does an owner remove a tenant who moved out?', a: 'By filing for deregistration by administrative decision. The authority establishes the departure on the evidence and issues a decision; the fee is PLN 10 and it usually takes four to twelve weeks.' },
      { q: 'What does an owner risk with a fictitious registration?', a: 'Someone who will need removing through administrative proceedings, tax office questions about undeclared rental income, recalculated utility charges, and exposure if the address was used in fraudulent schemes.' },
      { q: 'Must I deregister when leaving Poland?', a: 'Yes, for departures longer than six months a notification of departure abroad is filed. The same document helps when changing tax residency.' }
    ],
    tr: [
      { q: 'Polonya içinde taşınırken kayıt sildirmek gerekir mi?', a: 'Hayır. Yeni adrese yapılan bildirim eski kaydı otomatik düşürür; ayrı wymeldowanie gerekmez.' },
      { q: 'Taşınan kiracının kaydı nasıl sildirilir?', a: 'İdari yolla kayıt silme talebi verilerek. İdare delillere göre taşınmayı tespit eder ve karar verir; harç 10 PLN, süre genellikle 4-12 haftadır.' },
      { q: 'Sahte kayıtta mal sahibi neyi riske atar?', a: 'İdari yolla sildirmesi gereken bir kişiyi, beyansız kira gelirine dair vergi sorularını, kişi sayısına göre yeniden hesaplanan faturaları ve adres dolandırıcılıkta kullanılırsa doğacak sorumluluğu.' },
      { q: 'Polonya\'dan ayrılırken kayıt sildirmeli miyim?', a: 'Evet; altı aydan uzun ayrılışlarda yurt dışına çıkış bildirimi verilir. Aynı belge vergi mukimliği değişikliğinde de işe yarar.' }
    ]
  },

  'apostille-ili-legalizacja-konsularna-2026': {
    ru: [
      { q: 'Сколько стоит апостиль в Польше в 2026 году?', a: '60 PLN за каждый документ, оплата на счёт Centrum Obsługi Podatnika (21 1030 1508 0000 0005 5000 0070). Для стран вне Гаагской конвенции применяется другой тариф - poświadczenie MSZ за 26 PLN плюс консульский сбор.' },
      { q: 'Нужен ли апостиль на украинские документы для Польши?', a: 'Нет. Договор между Польшей и Украиной от 24 мая 1993 года (Dz.U. 1994 nr 96 poz. 465) освобождает официальные документы от легализации - достаточно присяжного перевода. Аналогичные договоры действуют с Беларусью и Россией.' },
      { q: 'Какие страны не признают апостиль?', a: 'По состоянию на 2026 год это, в частности, ОАЭ, Вьетнам, Ирак, Иордания, Ливия, Египет, Алжир, Ливан, Куба, Таиланд, Малайзия, Мьянма и Тайвань. Китай, Канада, Саудовская Аравия и Пакистан присоединились к конвенции и апостиль признают.' },
      { q: 'Сколько действует апостиль?', a: 'Сам апостиль бессрочен. Ограничение всегда идёт от документа: справка о несудимости обычно принимается 3-6 месяцев, выписка из KRS - 3-6 месяцев, свидетельства USC формально бессрочны.' },
      { q: 'Можно ли поставить апостиль в Польше на иностранный документ?', a: 'Нет. Апостиль ставит только страна, выдавшая документ: украинское свидетельство апостилируется в Украине, турецкое - в Турции.' }
    ],
    uk: [
      { q: 'Скільки коштує апостиль у Польщі у 2026 році?', a: '60 PLN за кожен документ, оплата на рахунок Centrum Obsługi Podatnika (21 1030 1508 0000 0005 5000 0070). Для країн поза Гаазькою конвенцією застосовується інший тариф - poświadczenie MSZ за 26 PLN плюс консульський збір.' },
      { q: 'Чи потрібен апостиль на українські документи для Польщі?', a: 'Ні. Договір між Польщею та Україною від 24 травня 1993 року (Dz.U. 1994 nr 96 poz. 465) звільняє офіційні документи від легалізації - достатньо присяжного перекладу. Аналогічні договори діють з Білоруссю та Росією.' },
      { q: 'Які країни не визнають апостиль?', a: 'Станом на 2026 рік це, зокрема, ОАЕ, В\'єтнам, Ірак, Йорданія, Лівія, Єгипет, Алжир, Ліван, Куба, Таїланд, Малайзія, М\'янма і Тайвань. Китай, Канада, Саудівська Аравія і Пакистан приєдналися до конвенції та апостиль визнають.' },
      { q: 'Скільки діє апостиль?', a: 'Сам апостиль безстроковий. Обмеження завжди йде від документа: довідка про несудимість зазвичай приймається 3-6 місяців, витяг із KRS - 3-6 місяців, свідоцтва USC формально безстрокові.' },
      { q: 'Чи можна поставити в Польщі апостиль на іноземний документ?', a: 'Ні. Апостиль ставить лише країна, що видала документ: українське свідоцтво апостилюється в Україні, турецьке - у Туреччині.' }
    ],
    pl: [
      { q: 'Ile kosztuje apostille w Polsce w 2026 r.?', a: '60 PLN od każdego dokumentu, płatne na rachunek Centrum Obsługi Podatnika (21 1030 1508 0000 0005 5000 0070). Dla państw spoza konwencji haskiej obowiązuje inna stawka - poświadczenie MSZ za 26 PLN plus opłata konsularna.' },
      { q: 'Czy dokumenty z Ukrainy wymagają apostille w Polsce?', a: 'Nie. Umowa z 24 maja 1993 r. (Dz.U. 1994 nr 96 poz. 465) zwalnia dokumenty urzędowe z legalizacji - wystarcza tłumaczenie przysięgłe. Analogiczne umowy obowiązują z Białorusią i Rosją.' },
      { q: 'Które państwa nie honorują apostille?', a: 'Według stanu na 2026 r. m.in. ZEA, Wietnam, Irak, Jordania, Libia, Egipt, Algieria, Liban, Kuba, Tajlandia, Malezja, Mjanma i Tajwan. Chiny, Kanada, Arabia Saudyjska i Pakistan przystąpiły do konwencji.' },
      { q: 'Jak długo ważne jest apostille?', a: 'Samo apostille jest bezterminowe. Ograniczenie wynika z dokumentu: zaświadczenie o niekaralności honoruje się zwykle 3-6 miesięcy, odpis z KRS 3-6 miesięcy, a odpisy z USC są formalnie bezterminowe.' },
      { q: 'Czy w Polsce można poświadczyć dokument zagraniczny?', a: 'Nie. Apostille wystawia wyłącznie państwo wydania dokumentu - ukraiński odpis poświadcza się w Ukrainie, turecki w Turcji.' }
    ],
    en: [
      { q: 'What does an apostille cost in Poland in 2026?', a: 'PLN 60 per document, paid to the Centrum Obsługi Podatnika account (21 1030 1508 0000 0005 5000 0070). Countries outside the Hague Convention follow a different tariff - MSZ certification at PLN 26 plus a consular fee.' },
      { q: 'Do Ukrainian documents need an apostille for Poland?', a: 'No. The Poland-Ukraine treaty of 24 May 1993 (Journal of Laws 1994 no. 96 item 465) exempts official documents from legalisation - a sworn translation is enough. Equivalent treaties apply with Belarus and Russia.' },
      { q: 'Which countries do not recognise apostilles?', a: 'As of 2026 these include the UAE, Vietnam, Iraq, Jordan, Libya, Egypt, Algeria, Lebanon, Cuba, Thailand, Malaysia, Myanmar and Taiwan. China, Canada, Saudi Arabia and Pakistan have acceded and do recognise them.' },
      { q: 'How long is an apostille valid?', a: 'The apostille itself never expires. Any limit comes from the document: criminal record certificates are usually accepted for three to six months, company extracts likewise, and civil registry certificates are formally open-ended.' },
      { q: 'Can a foreign document be apostilled in Poland?', a: 'No. Only the issuing country can apostille its own document - a Ukrainian certificate in Ukraine, a Turkish one in Turkey.' }
    ],
    tr: [
      { q: '2026\'da Polonya\'da apostil ne kadar?', a: 'Belge başına 60 PLN; Centrum Obsługi Podatnika hesabına ödenir (21 1030 1508 0000 0005 5000 0070). Lahey Sözleşmesi dışındaki ülkeler için tarife farklıdır: 26 PLN MSZ tasdiki artı konsolosluk harcı.' },
      { q: 'Ukrayna belgeleri Polonya için apostil gerektirir mi?', a: 'Hayır. 24 Mayıs 1993 tarihli Polonya-Ukrayna anlaşması (Dz.U. 1994 nr 96 poz. 465) resmî belgeleri tasdikten muaf tutar; yeminli tercüme yeterlidir. Belarus ve Rusya ile de benzer anlaşmalar vardır.' },
      { q: 'Hangi ülkeler apostili tanımıyor?', a: '2026 itibarıyla BAE, Vietnam, Irak, Ürdün, Libya, Mısır, Cezayir, Lübnan, Küba, Tayland, Malezya, Myanmar ve Tayvan bunlar arasındadır. Çin, Kanada, Suudi Arabistan ve Pakistan sözleşmeye katılmıştır.' },
      { q: 'Apostil ne kadar geçerli?', a: 'Apostilin kendisi süresizdir. Sınır belgeden gelir: adli sicil belgesi genellikle 3-6 ay, KRS kaydı 3-6 ay kabul edilir; USC belgeleri biçimsel olarak süresizdir.' },
      { q: 'Yabancı belge Polonya\'da apostillenir mi?', a: 'Hayır. Apostili yalnızca belgeyi düzenleyen ülke verir: Ukrayna belgesi Ukrayna\'da, Türk belgesi Türkiye\'de.' }
    ]
  },

  'apostille-na-korporativnye-dokumenty-krs-2026': {
    ru: [
      { q: 'Есть ли в Польше certificate of good standing?', a: 'Такого документа нет. Эквивалент - odpis aktualny z KRS плюс zaświadczenia o niezaleganiu из urzędu skarbowego и ZUS.' },
      { q: 'Почему MSZ не принимает распечатку из eKRS?', a: 'Распечатка не содержит подписи и печати, а апостиль ставится только на бумажный оригинал. Нужно заказать бумажный odpis в sądzie rejestrowym либо заверить распечатку у нотариуса.' },
      { q: 'Какова цепочка для нотариальной доверенности?', a: 'Сначала prezes Sądu Okręgowego заверяет подпись нотариуса (26 PLN), затем MSZ ставит апостиль (60 PLN). Пропустить суд нельзя.' },
      { q: 'Нужен ли апостиль на KRS для банка в ЕС?', a: 'Обычно нет: внутри ЕС действует взаимное признание реестров, и большинство банков принимают odpis с переводом. Апостиль требуют банки за пределами ЕС.' }
    ],
    uk: [
      { q: 'Чи існує в Польщі certificate of good standing?', a: 'Такого документа немає. Еквівалент - odpis aktualny z KRS плюс zaświadczenia o niezaleganiu з urzędu skarbowego і ZUS.' },
      { q: 'Чому MSZ не приймає роздруківку з eKRS?', a: 'Роздруківка не містить підпису й печатки, а апостиль ставиться лише на паперовий оригінал. Треба замовити паперовий odpis у sądzie rejestrowym або засвідчити роздруківку в нотаріуса.' },
      { q: 'Який ланцюжок для нотаріальної довіреності?', a: 'Спершу prezes Sądu Okręgowego засвідчує підпис нотаріуса (26 PLN), потім MSZ ставить апостиль (60 PLN). Пропустити суд не можна.' },
      { q: 'Чи потрібен апостиль на KRS для банку в ЄС?', a: 'Зазвичай ні: всередині ЄС діє взаємне визнання реєстрів, і більшість банків приймають odpis з перекладом. Апостиль вимагають банки за межами ЄС.' }
    ],
    pl: [
      { q: 'Czy w Polsce wydaje się certificate of good standing?', a: 'Taki dokument nie występuje. Odpowiednikiem jest odpis aktualny z KRS wraz z zaświadczeniami o niezaleganiu z urzędu skarbowego i ZUS.' },
      { q: 'Dlaczego MSZ nie przyjmuje wydruku z eKRS?', a: 'Wydruk nie zawiera podpisu ani pieczęci, a apostille umieszcza się wyłącznie na oryginale papierowym. Trzeba zamówić odpis w sądzie rejestrowym albo poświadczyć wydruk notarialnie.' },
      { q: 'Jak wygląda ścieżka dla pełnomocnictwa notarialnego?', a: 'Najpierw prezes sądu okręgowego poświadcza podpis notariusza (26 PLN), następnie MSZ wystawia apostille (60 PLN). Etapu sądowego nie da się pominąć.' },
      { q: 'Czy bank w UE wymaga apostille na odpisie z KRS?', a: 'Zwykle nie - w obrocie unijnym działa wzajemne uznawanie rejestrów, a odpis z tłumaczeniem wystarcza. Apostille wymagają instytucje spoza UE.' }
    ],
    en: [
      { q: 'Does Poland issue a certificate of good standing?', a: 'No such document exists. The equivalent is a current company register extract plus tax and social security clearance certificates.' },
      { q: 'Why does the MSZ reject an eKRS printout?', a: 'The printout carries no signature or seal, and an apostille goes only on a paper original. Order the paper extract from the registry court, or have the printout notarised.' },
      { q: 'What is the chain for a notarial power of attorney?', a: 'The president of the regional court certifies the notary\'s signature (PLN 26), then the MSZ issues the apostille (PLN 60). The court step cannot be skipped.' },
      { q: 'Does an EU bank need an apostilled company extract?', a: 'Usually not - mutual recognition of registers applies within the EU and an extract with a translation suffices. Institutions outside the EU generally require the apostille.' }
    ],
    tr: [
      { q: 'Polonya certificate of good standing düzenliyor mu?', a: 'Böyle bir belge yoktur. Karşılığı, güncel KRS kaydı ile vergi dairesi ve ZUS borcu yoktur yazılarıdır.' },
      { q: 'MSZ neden eKRS çıktısını kabul etmiyor?', a: 'Çıktıda imza ve mühür yoktur; apostil yalnızca kâğıt asla vurulur. Sicil mahkemesinden kâğıt odpis alınmalı ya da çıktı noterde tasdik edilmelidir.' },
      { q: 'Noter vekâletnamesinde zincir nasıl işler?', a: 'Önce bölge mahkemesi başkanı noterin imzasını tasdik eder (26 PLN), ardından MSZ apostil verir (60 PLN). Mahkeme aşaması atlanamaz.' },
      { q: 'AB\'deki banka KRS kaydında apostil ister mi?', a: 'Genellikle hayır; AB içinde siciller karşılıklı tanınır ve tercümeli kayıt yeterlidir. Apostili AB dışındaki kurumlar ister.' }
    ]
  },

  'pochemu-otkazyvayut-v-apostile-2026': {
    ru: [
      { q: 'Почему MSZ вернул мои документы?', a: 'Чаще всего из-за копии вместо оригинала, электронной распечатки, пропущенной промежуточной инстанции (воевода, суд, NAWA, kuratorium) либо ламинирования документа.' },
      { q: 'Можно ли апостилировать инвойс или таможенные документы?', a: 'Нет. Гаагская конвенция исключает административные документы, напрямую относящиеся к коммерческим и таможенным операциям, а также документы консульских агентов. Для них применяется легализация через Krajową Izbę Gospodarczą и консульство.' },
      { q: 'В каком порядке делать перевод и апостиль?', a: 'Сначала оригинал, затем апостиль, затем присяжный перевод вместе с текстом апостиля. Перевод, сделанный заранее, обычно приходится переделывать.' },
      { q: 'Можно ли обжаловать отказ MSZ?', a: 'Практического смысла обычно нет - отказы формальные и устраняются правильным документом быстрее, чем через обжалование.' }
    ],
    uk: [
      { q: 'Чому MSZ повернув мої документи?', a: 'Найчастіше через копію замість оригіналу, електронну роздруківку, пропущену проміжну інстанцію (воєвода, суд, NAWA, kuratorium) або ламінування документа.' },
      { q: 'Чи можна апостилювати інвойс або митні документи?', a: 'Ні. Гаазька конвенція виключає адміністративні документи, що безпосередньо стосуються комерційних і митних операцій, а також документи консульських агентів. Для них застосовується легалізація через Krajową Izbę Gospodarczą і консульство.' },
      { q: 'У якому порядку робити переклад і апостиль?', a: 'Спершу оригінал, потім апостиль, потім присяжний переклад разом із текстом апостиля. Переклад, зроблений завчасно, зазвичай доводиться переробляти.' },
      { q: 'Чи можна оскаржити відмову MSZ?', a: 'Практичного сенсу зазвичай немає - відмови формальні й усуваються правильним документом швидше, ніж через оскарження.' }
    ],
    pl: [
      { q: 'Dlaczego MSZ zwrócił moje dokumenty?', a: 'Najczęściej z powodu kopii zamiast oryginału, wydruku dokumentu elektronicznego, pominięcia instancji pośredniej (wojewoda, sąd, NAWA, kuratorium) albo zalaminowania dokumentu.' },
      { q: 'Czy można poświadczyć fakturę albo dokumenty celne?', a: 'Nie. Konwencja haska wyłącza dokumenty administracyjne dotyczące bezpośrednio operacji handlowych i celnych oraz dokumenty przedstawicieli konsularnych. Obsługuje je legalizacja przez Krajową Izbę Gospodarczą i placówkę konsularną.' },
      { q: 'W jakiej kolejności wykonać tłumaczenie i apostille?', a: 'Najpierw oryginał, potem apostille, na końcu tłumaczenie przysięgłe obejmujące klauzulę. Tłumaczenie sporządzone wcześniej zwykle trzeba powtórzyć.' },
      { q: 'Czy odmowę MSZ można zaskarżyć?', a: 'Zwykle nie ma to praktycznego sensu - zwroty mają charakter formalny i szybciej jest usunąć przyczynę.' }
    ],
    en: [
      { q: 'Why did the MSZ return my documents?', a: 'Most often because of a copy rather than an original, a printout of an electronic document, a skipped intermediate authority (wojewoda, court, NAWA, education board), or lamination.' },
      { q: 'Can invoices or customs documents be apostilled?', a: 'No. The Hague Convention excludes administrative documents dealing directly with commercial or customs operations, and documents executed by consular agents. They go through chamber of commerce and consular certification instead.' },
      { q: 'In what order do translation and apostille go?', a: 'Original first, then the apostille, then a sworn translation covering the apostille clause. A translation prepared in advance usually has to be redone.' },
      { q: 'Can an MSZ refusal be appealed?', a: 'Rarely worth it in practice - refusals are formal and fixing the cause is faster than appealing.' }
    ],
    tr: [
      { q: 'MSZ belgelerimi neden geri çevirdi?', a: 'Çoğunlukla asıl yerine suret, elektronik belge çıktısı, atlanan ara makam (wojewoda, mahkeme, NAWA, kuratorium) ya da laminasyon nedeniyle.' },
      { q: 'Fatura veya gümrük belgeleri apostillenir mi?', a: 'Hayır. Lahey Sözleşmesi doğrudan ticari ve gümrük işlemlerine ilişkin idari belgeleri ve konsolosluk memurlarınca düzenlenen belgeleri kapsam dışı bırakır. Bunlar ticaret odası ve konsolosluk tasdikiyle işlem görür.' },
      { q: 'Tercüme ve apostil hangi sırayla yapılır?', a: 'Önce asıl, sonra apostil, en son apostil şerhini de kapsayan yeminli tercüme. Önceden yapılan tercüme genellikle yenilenmek zorunda kalır.' },
      { q: 'MSZ reddine itiraz edilir mi?', a: 'Pratikte genellikle anlamlı değildir; retler şeklîdir ve nedeni gidermek itirazdan hızlıdır.' }
    ]
  },

  'e-apostille-elektronnye-dokumenty-2026': {
    ru: [
      { q: 'Выдаёт ли Польша электронный апостиль?', a: 'Нет. В 2026 году MSZ ставит только физическую клаузулу на бумажный документ. Иностранные e-apostille Польша при этом проверяет через онлайн-реестры соответствующих стран.' },
      { q: 'Как апостилировать выписку из CEIDG?', a: 'Бумажной версии не существует, поэтому маршрут один: нотариальное заверение соответствия распечатки электронному документу, затем Sąd Okręgowy, затем MSZ.' },
      { q: 'Сколько стоит нотариальный маршрут?', a: 'Ориентировочно 110-140 PLN официальных расходов на документ: нотариус 20-50 PLN, суд 26 PLN, MSZ 60 PLN. Перевод оплачивается отдельно.' },
      { q: 'Что дешевле - бумажный оригинал или нотариус?', a: 'Бумажный оригинал почти всегда: odpis z KRS - 30 PLN, KRK - 30 PLN, odpis z USC - 22-33 PLN, и это заменяет две инстанции из трёх.' }
    ],
    uk: [
      { q: 'Чи видає Польща електронний апостиль?', a: 'Ні. У 2026 році MSZ ставить лише фізичну клаузулу на паперовий документ. Іноземні e-apostille Польща при цьому перевіряє через онлайн-реєстри відповідних країн.' },
      { q: 'Як апостилювати витяг із CEIDG?', a: 'Паперової версії не існує, тож маршрут один: нотаріальне засвідчення відповідності роздруківки електронному документу, потім Sąd Okręgowy, потім MSZ.' },
      { q: 'Скільки коштує нотаріальний маршрут?', a: 'Орієнтовно 110-140 PLN офіційних витрат на документ: нотаріус 20-50 PLN, суд 26 PLN, MSZ 60 PLN. Переклад оплачується окремо.' },
      { q: 'Що дешевше - паперовий оригінал чи нотаріус?', a: 'Паперовий оригінал майже завжди: odpis z KRS - 30 PLN, KRK - 30 PLN, odpis z USC - 22-33 PLN, і це замінює дві інстанції з трьох.' }
    ],
    pl: [
      { q: 'Czy Polska wystawia apostille elektroniczne?', a: 'Nie. W 2026 r. MSZ umieszcza wyłącznie klauzulę fizyczną na dokumencie papierowym. Zagraniczne e-apostille są natomiast weryfikowane w rejestrach online państw wydania.' },
      { q: 'Jak poświadczyć wydruk z CEIDG?', a: 'Wersja papierowa nie istnieje, więc pozostaje jedna ścieżka: notarialne poświadczenie zgodności wydruku z dokumentem elektronicznym, następnie sąd okręgowy i MSZ.' },
      { q: 'Ile kosztuje ścieżka notarialna?', a: 'Orientacyjnie 110-140 PLN opłat na dokument: notariusz 20-50 PLN, sąd 26 PLN, MSZ 60 PLN. Tłumaczenie liczone jest osobno.' },
      { q: 'Co jest tańsze - odpis papierowy czy notariusz?', a: 'Niemal zawsze odpis papierowy: KRS 30 PLN, KRK 30 PLN, odpis z USC 22-33 PLN, przy czym eliminuje to dwie instancje z trzech.' }
    ],
    en: [
      { q: 'Does Poland issue electronic apostilles?', a: 'No. In 2026 the MSZ affixes only a physical clause to a paper document. Foreign e-apostilles are, however, verified through the issuing country\'s online register.' },
      { q: 'How do I apostille a CEIDG extract?', a: 'No paper version exists, so one route remains: notarial certification that the printout matches the electronic document, then the regional court, then the MSZ.' },
      { q: 'What does the notarial route cost?', a: 'Roughly PLN 110-140 in official fees per document: notary PLN 20-50, court PLN 26, MSZ PLN 60. Translation is separate.' },
      { q: 'Which is cheaper - a paper original or the notary?', a: 'The paper original, almost always: a company extract is PLN 30, a criminal record certificate PLN 30, a civil registry extract PLN 22-33 - and it removes two of the three stages.' }
    ],
    tr: [
      { q: 'Polonya elektronik apostil veriyor mu?', a: 'Hayır. 2026\'da MSZ yalnızca kâğıt belgeye fiziksel şerh vurur. Yabancı e-apostiller ise düzenleyen ülkenin çevrimiçi sicilinden doğrulanır.' },
      { q: 'CEIDG çıktısı nasıl apostillenir?', a: 'Kâğıt sürümü yoktur; tek yol çıktının elektronik belgeye uygunluğunun noterce tasdiki, ardından bölge mahkemesi ve MSZ\'dir.' },
      { q: 'Noter güzergâhı ne tutar?', a: 'Belge başına yaklaşık 110-140 PLN resmî harç: noter 20-50 PLN, mahkeme 26 PLN, MSZ 60 PLN. Tercüme ayrıdır.' },
      { q: 'Kâğıt asıl mı noter mi daha ucuz?', a: 'Neredeyse her zaman kâğıt asıl: KRS kaydı 30 PLN, KRK 30 PLN, USC belgesi 22-33 PLN; üstelik üç aşamadan ikisini ortadan kaldırır.' }
    ]
  },

  'krk-i-rstpn-rabota-s-detmi-2026': {
    ru: [
      { q: 'Какие справки нужны для работы с детьми в Польше?', a: 'Работодатель проверяет кандидата в реестре RSTPN бесплатно, а кандидат предъявляет zaświadczenie z KRK. Иностранец дополнительно подаёт справку из страны гражданства и oświadczenie о странах проживания.' },
      { q: 'Что за правило 20 лет в ustawie Kamilka?', a: 'Кандидат заявляет все страны, кроме Польши и страны гражданства, где он непрерывно проживал не менее 12 месяцев за последние 20 лет, и прикладывает справки из реестров судимостей этих стран.' },
      { q: 'Кто проверяет реестр RSTPN - работодатель или кандидат?', a: 'Работодатель, самостоятельно и бесплатно, через сайт Министерства юстиции. Распечатку запроса с результатом нужно хранить в деле работника как доказательство исполнения обязанности.' },
      { q: 'Сколько действует справка KRK для работы с детьми?', a: 'Закон срока не устанавливает, но кадровые службы школ и садиков принимают документ не старше 3 месяцев на дату допуска к работе.' },
      { q: 'Распространяется ли проверка на волонтёров и практикантов?', a: 'Да. Закон говорит о допуске к деятельности, а не о виде договора, поэтому волонтёры, практиканты и люди на umowie zlecenie проверяются так же.' }
    ],
    uk: [
      { q: 'Які довідки потрібні для роботи з дітьми в Польщі?', a: 'Роботодавець перевіряє кандидата в реєстрі RSTPN безкоштовно, а кандидат пред\'являє zaświadczenie z KRK. Іноземець додатково подає довідку з країни громадянства і oświadczenie про країни проживання.' },
      { q: 'Що за правило 20 років в ustawie Kamilka?', a: 'Кандидат заявляє всі країни, крім Польщі та країни громадянства, де він безперервно проживав не менше 12 місяців за останні 20 років, і додає довідки з реєстрів судимостей цих країн.' },
      { q: 'Хто перевіряє реєстр RSTPN - роботодавець чи кандидат?', a: 'Роботодавець, самостійно і безкоштовно, через сайт Міністерства юстиції. Роздруківку запиту з результатом треба зберігати у справі працівника як доказ виконання обов\'язку.' },
      { q: 'Скільки діє довідка KRK для роботи з дітьми?', a: 'Закон строку не встановлює, але кадрові служби шкіл і садків приймають документ не старший за 3 місяці на дату допуску до роботи.' },
      { q: 'Чи поширюється перевірка на волонтерів і практикантів?', a: 'Так. Закон говорить про допуск до діяльності, а не про вид договору, тож волонтери, практиканти й особи на umowie zlecenie перевіряються так само.' }
    ],
    pl: [
      { q: 'Jakie zaświadczenia są wymagane przy pracy z dziećmi?', a: 'Pracodawca bezpłatnie sprawdza kandydata w RSTPN, a kandydat przedkłada informację z KRK. Cudzoziemiec dokłada zaświadczenie z państwa obywatelstwa oraz oświadczenie o państwach zamieszkania.' },
      { q: 'Na czym polega zasada 20 lat z ustawy Kamilka?', a: 'Kandydat wskazuje wszystkie państwa poza Polską i państwem obywatelstwa, w których zamieszkiwał nieprzerwanie co najmniej 12 miesięcy w ciągu ostatnich 20 lat, i dołącza informacje z ich rejestrów karnych.' },
      { q: 'Kto sprawdza rejestr RSTPN?', a: 'Pracodawca, samodzielnie i bezpłatnie, na stronie Ministerstwa Sprawiedliwości. Wydruk zapytania wraz z wynikiem przechowuje się w aktach pracownika.' },
      { q: 'Jak długo ważne jest zaświadczenie z KRK przy pracy z dziećmi?', a: 'Ustawa nie określa terminu, ale działy kadr przyjmują dokument nie starszy niż 3 miesiące na dzień dopuszczenia do pracy.' },
      { q: 'Czy weryfikacja obejmuje wolontariuszy i praktykantów?', a: 'Tak. Ustawa mówi o dopuszczeniu do działalności, a nie o rodzaju umowy, więc dotyczy również wolontariuszy, praktykantów i osób na umowie zlecenia.' }
    ],
    en: [
      { q: 'What certificates are needed to work with children in Poland?', a: 'The employer checks the sex offender register free of charge, and the candidate supplies a KRK criminal record certificate. A foreigner adds a certificate from their country of citizenship and a declaration of countries of residence.' },
      { q: 'What is the 20-year rule under the Kamilek Act?', a: 'The candidate declares every country other than Poland and their country of citizenship where they lived continuously for at least 12 months in the last 20 years, and attaches criminal register extracts from each.' },
      { q: 'Who checks the RSTPN register?', a: 'The employer, directly and free of charge, on the Ministry of Justice site. The printed query and result stay in the employee file as proof the duty was met.' },
      { q: 'How fresh must the KRK certificate be?', a: 'The statute sets no limit, but school and nursery HR departments accept documents no older than three months on the start date.' },
      { q: 'Does vetting cover volunteers and interns?', a: 'Yes. The statute speaks of admission to the activity rather than the contract type, so volunteers, interns and civil-law contractors are vetted the same way.' }
    ],
    tr: [
      { q: 'Polonya\'da çocuklarla çalışmak için hangi belgeler gerekir?', a: 'İşveren adayı RSTPN sicilinde ücretsiz sorgular, aday ise KRK belgesini sunar. Yabancı ayrıca vatandaşı olduğu ülkenin belgesini ve ikamet ülkeleri beyanını ekler.' },
      { q: 'Ustawa Kamilka\'daki 20 yıl kuralı nedir?', a: 'Aday, Polonya ve vatandaşı olduğu ülke dışında son 20 yılda kesintisiz en az 12 ay yaşadığı tüm ülkeleri bildirir ve bu ülkelerin adli sicil belgelerini ekler.' },
      { q: 'RSTPN sicilini kim sorgular?', a: 'İşveren; Adalet Bakanlığı sitesinden doğrudan ve ücretsiz. Sorgu ve sonucun çıktısı, yükümlülüğün yerine getirildiğinin kanıtı olarak personel dosyasında saklanır.' },
      { q: 'KRK belgesi ne kadar taze olmalı?', a: 'Kanun süre belirlemez, ancak okul ve anaokullarının insan kaynakları işe başlama tarihinde 3 aydan eski olmayan belgeyi kabul eder.' },
      { q: 'Kontrol gönüllüleri ve stajyerleri kapsıyor mu?', a: 'Evet. Kanun sözleşme türünden değil faaliyete kabulden söz eder; gönüllüler, stajyerler ve umowa zlecenie ile çalışanlar da aynı şekilde kontrol edilir.' }
    ]
  },

  'krk-o-podmiocie-zbiorowym-dlya-firmy-2026': {
    ru: [
      { q: 'Что такое zaświadczenie o niekaralności podmiotu zbiorowego?', a: 'Справка из KRK на юридическое лицо, подтверждающая, что компания не фигурирует в реестре как субъект, привлечённый к ответственности по ustawie o odpowiedzialności podmiotów zbiorowych.' },
      { q: 'Сколько стоит справка о несудимости фирмы?', a: '20 PLN при подаче онлайн через e-KRK и 30 PLN при бумажной подаче. Документ обычно готов в течение суток при электронном заказе.' },
      { q: 'Достаточно ли в тендере одной справки на фирму?', a: 'Нет. Заказчик проверяет также членов правления и прокуриста, а в spółkach osobowych - партнёров или комплементариев. Для иностранцев в правлении добавляются национальные справки.' },
      { q: 'Нужна ли такая справка для JDG?', a: 'Нет. Jednoosobowa działalność gospodarcza не является podmiotem zbiorowym - для неё берётся обычная справка на физическое лицо предпринимателя.' }
    ],
    uk: [
      { q: 'Що таке zaświadczenie o niekaralności podmiotu zbiorowego?', a: 'Довідка з KRK на юридичну особу, що підтверджує: компанія не фігурує в реєстрі як суб\'єкт, притягнутий до відповідальності за ustawą o odpowiedzialności podmiotów zbiorowych.' },
      { q: 'Скільки коштує довідка про несудимість фірми?', a: '20 PLN при поданні онлайн через e-KRK і 30 PLN при паперовому поданні. Документ зазвичай готовий протягом доби при електронному замовленні.' },
      { q: 'Чи достатньо в тендері однієї довідки на фірму?', a: 'Ні. Замовник перевіряє також членів правління і прокуриста, а в spółkach osobowych - партнерів чи комплементаріїв. Для іноземців у правлінні додаються національні довідки.' },
      { q: 'Чи потрібна така довідка для JDG?', a: 'Ні. Jednoosobowa działalność gospodarcza не є podmiotem zbiorowym - для неї береться звичайна довідка на фізичну особу підприємця.' }
    ],
    pl: [
      { q: 'Czym jest zaświadczenie o niekaralności podmiotu zbiorowego?', a: 'To informacja z KRK dotycząca osoby prawnej, potwierdzająca brak wpisu z tytułu odpowiedzialności na podstawie ustawy o odpowiedzialności podmiotów zbiorowych.' },
      { q: 'Ile kosztuje zaświadczenie dla spółki?', a: '20 PLN przy wniosku elektronicznym w e-KRK i 30 PLN przy wniosku papierowym. Dokument elektroniczny wydawany jest zwykle w ciągu doby.' },
      { q: 'Czy w przetargu wystarczy zaświadczenie dla spółki?', a: 'Nie. Zamawiający weryfikuje także członków zarządu i prokurenta, a w spółkach osobowych wspólników albo komplementariuszy. Przy cudzoziemcach dochodzą zaświadczenia krajowe.' },
      { q: 'Czy JDG potrzebuje takiego zaświadczenia?', a: 'Nie. Jednoosobowa działalność gospodarcza nie jest podmiotem zbiorowym - właściwe jest zaświadczenie dla osoby fizycznej.' }
    ],
    en: [
      { q: 'What is a collective entity criminal record certificate?', a: 'A KRK certificate for a legal person, confirming that the company has no entry arising from liability under the Act on the Liability of Collective Entities.' },
      { q: 'What does the company certificate cost?', a: 'PLN 20 filed electronically through e-KRK and PLN 30 on paper. The electronic version is usually issued within a day.' },
      { q: 'Is the company certificate enough for a tender?', a: 'No. The contracting authority also checks board members and the commercial proxy, and in partnerships the partners or general partners. Foreign board members add national certificates.' },
      { q: 'Does a sole trader need one?', a: 'No. A sole trader business is not a collective entity - the ordinary certificate for the individual entrepreneur applies.' }
    ],
    tr: [
      { q: 'Tüzel kişi adli sicil belgesi nedir?', a: 'KRK\'dan tüzel kişi için alınan, şirketin tüzel kişilerin sorumluluğuna dair kanun kapsamında sicilde kaydı bulunmadığını teyit eden belgedir.' },
      { q: 'Şirket belgesi ne kadar tutuyor?', a: 'e-KRK üzerinden elektronik başvuruda 20 PLN, kâğıt başvuruda 30 PLN. Elektronik belge genellikle bir gün içinde düzenlenir.' },
      { q: 'İhalede yalnızca şirket belgesi yeter mi?', a: 'Hayır. İdare yönetim kurulu üyelerini ve ticari vekili, şahıs şirketlerinde ise ortakları da sorgular. Yönetimde yabancı varsa ulusal belgeler eklenir.' },
      { q: 'JDG için bu belge gerekir mi?', a: 'Hayır. Jednoosobowa działalność gospodarcza podmiot zbiorowy değildir; girişimcinin gerçek kişi belgesi kullanılır.' }
    ]
  },

  'krk-dlya-litsenziy-i-professiy-2026': {
    ru: [
      { q: 'В каких профессиях справка о несудимости обязательна по закону?', a: 'В физической охране, дорожном транспорте (dobra reputacja przewoźnika), перевозке людей, финансах и страховании, бухгалтерии и налоговом консультировании, детективной деятельности, при разрешении на оружие и при работе с несовершеннолетними.' },
      { q: 'Что нужно иностранцу дополнительно к польской KRK?', a: 'Справка из страны гражданства с присяжным переводом. Для Украины, Беларуси и России апостиль не требуется по двусторонним договорам, для большинства других стран - требуется.' },
      { q: 'Сколько ждать справку из-за границы?', a: 'От двух недель до трёх месяцев в зависимости от страны. Именно этот срок обычно определяет дату выхода на работу, поэтому начинать стоит до подписания договора.' },
      { q: 'Что покажет справка после погашения судимости?', a: 'После zatarcia skazania запись удаляется из реестра и справка выходит чистой. Сроки zatarcia зависят от вида наказания и считаются индивидуально.' }
    ],
    uk: [
      { q: 'У яких професіях довідка про несудимість обов\'язкова за законом?', a: 'У фізичній охороні, дорожньому транспорті (dobra reputacja przewoźnika), перевезенні людей, фінансах і страхуванні, бухгалтерії та податковому консультуванні, детективній діяльності, при дозволі на зброю і при роботі з неповнолітніми.' },
      { q: 'Що потрібно іноземцю додатково до польської KRK?', a: 'Довідка з країни громадянства з присяжним перекладом. Для України, Білорусі та Росії апостиль не потрібен за двосторонніми договорами, для більшості інших країн - потрібен.' },
      { q: 'Скільки чекати довідку з-за кордону?', a: 'Від двох тижнів до трьох місяців залежно від країни. Саме цей строк зазвичай визначає дату виходу на роботу, тому починати варто до підписання договору.' },
      { q: 'Що покаже довідка після погашення судимості?', a: 'Після zatarcia skazania запис видаляється з реєстру і довідка виходить чистою. Строки zatarcia залежать від виду покарання і рахуються індивідуально.' }
    ],
    pl: [
      { q: 'W jakich zawodach niekaralność jest wymogiem ustawowym?', a: 'W ochronie fizycznej, transporcie drogowym (dobra reputacja przewoźnika), przewozie osób, finansach i ubezpieczeniach, księgowości i doradztwie podatkowym, usługach detektywistycznych, przy pozwoleniu na broń oraz w pracy z małoletnimi.' },
      { q: 'Co cudzoziemiec dokłada do polskiego zaświadczenia z KRK?', a: 'Zaświadczenie z państwa obywatelstwa wraz z tłumaczeniem przysięgłym. Ukraina, Białoruś i Rosja są zwolnione z apostille na podstawie umów dwustronnych, większość pozostałych państw nie.' },
      { q: 'Ile trwa uzyskanie zaświadczenia zagranicznego?', a: 'Od dwóch tygodni do trzech miesięcy, zależnie od państwa. To zwykle ten termin wyznacza datę rozpoczęcia pracy, więc warto zacząć przed podpisaniem umowy.' },
      { q: 'Co pokaże zaświadczenie po zatarciu skazania?', a: 'Po zatarciu wpis znika z rejestru i zaświadczenie jest czyste. Terminy zatarcia zależą od rodzaju orzeczonej kary.' }
    ],
    en: [
      { q: 'Which professions require a criminal record certificate by law?', a: 'Physical security, road transport (carrier good repute), passenger transport, finance and insurance, bookkeeping and tax advisory, detective services, firearms permits, and work with minors.' },
      { q: 'What does a foreigner add to the Polish certificate?', a: 'A certificate from their country of citizenship with a sworn translation. Ukraine, Belarus and Russia are exempt from apostille under bilateral treaties; most other countries are not.' },
      { q: 'How long does a foreign certificate take?', a: 'Two weeks to three months depending on the country. That period usually sets your start date, so begin before signing the contract.' },
      { q: 'What does the certificate show after a conviction is spent?', a: 'Once expunged, the entry is removed and the certificate comes back clean. The periods depend on the sentence imposed.' }
    ],
    tr: [
      { q: 'Hangi mesleklerde adli sicil kanunen zorunlu?', a: 'Fiziki güvenlik, karayolu taşımacılığı (taşımacıda iyi itibar), yolcu taşımacılığı, finans ve sigortacılık, muhasebe ve vergi danışmanlığı, dedektiflik, silah ruhsatı ve reşit olmayanlarla çalışma.' },
      { q: 'Yabancı Polonya belgesine ne ekler?', a: 'Vatandaşı olduğu ülkeden yeminli tercümeli belge. Ukrayna, Belarus ve Rusya ikili anlaşmalarla apostilden muaftır; çoğu diğer ülke değildir.' },
      { q: 'Yurt dışı belgesi ne kadar sürer?', a: 'Ülkeye göre iki haftadan üç aya. İşe başlama tarihini genellikle bu süre belirler; sözleşmeyi imzalamadan başlayın.' },
      { q: 'Mahkûmiyet silindikten sonra belge ne gösterir?', a: 'Zatarcia sonrası kayıt sicilden çıkar ve belge temiz gelir. Süreler hükmedilen cezanın türüne bağlıdır.' }
    ]
  },

  'pesel-ukr-aktualizacja-danych-31-avgusta-2026': {
    ru: [
      { q: 'Кто обязан обновить данные PESEL UKR до 31 августа 2026?', a: 'Те, кто получал PESEL UKR без предъявления документа с фотографией, у кого не было загранпаспорта на момент регистрации, кто с тех пор получил новый паспорт или сменил паспортные данные, а также дети, внесённые без собственного проездного документа.' },
      { q: 'Что будет 1 сентября 2026, если не обновить данные?', a: 'Статус в реестре меняется с UKR на NUE: теряется ochrona czasowa, право работать по уведомлению, социальные выплаты и доступ к NFZ по этому основанию.' },
      { q: 'Меняется ли номер PESEL при обновлении данных?', a: 'Нет. Номер остаётся прежним, обновляются только данные проездного документа. Услуга бесплатна.' },
      { q: 'Можно ли обновить данные онлайн?', a: 'Нет, только лично. Зато подойдёт любой urząd gminy или miasta на территории Польши - привязки к месту прописки нет.' },
      { q: 'До какой даты действует ochrona czasowa для граждан Украины?', a: 'До 4 марта 2027 года. Документы, срок которых истёк после 24 февраля 2022 года, продлены до той же даты.' }
    ],
    uk: [
      { q: 'Хто зобов\'язаний оновити дані PESEL UKR до 31 серпня 2026?', a: 'Ті, хто отримував PESEL UKR без пред\'явлення документа з фотографією, у кого не було закордонного паспорта на момент реєстрації, хто відтоді отримав новий паспорт або змінив паспортні дані, а також діти, внесені без власного проїзного документа.' },
      { q: 'Що буде 1 вересня 2026, якщо не оновити дані?', a: 'Статус у реєстрі змінюється з UKR на NUE: втрачається ochrona czasowa, право працювати за повідомленням, соціальні виплати і доступ до NFZ за цією підставою.' },
      { q: 'Чи змінюється номер PESEL при оновленні даних?', a: 'Ні. Номер лишається той самий, оновлюються лише дані проїзного документа. Послуга безкоштовна.' },
      { q: 'Чи можна оновити дані онлайн?', a: 'Ні, тільки особисто. Зате підійде будь-який urząd gminy або miasta на території Польщі - прив\'язки до місця прописки немає.' },
      { q: 'До якої дати діє ochrona czasowa для громадян України?', a: 'До 4 березня 2027 року. Документи, строк яких сплив після 24 лютого 2022 року, продовжені до тієї ж дати.' }
    ],
    pl: [
      { q: 'Kto musi zaktualizować dane PESEL UKR do 31 sierpnia 2026 r.?', a: 'Osoby, które otrzymały PESEL UKR bez okazania dokumentu ze zdjęciem, nie miały wówczas paszportu, otrzymały od tego czasu nowy dokument albo zmieniły jego dane, a także dzieci wpisane bez własnego dokumentu podróży.' },
      { q: 'Co stanie się 1 września 2026 r. bez aktualizacji?', a: 'Status w rejestrze zmienia się z UKR na NUE: wygasa ochrona czasowa, praca na podstawie powiadomienia, świadczenia socjalne oraz dostęp do NFZ z tego tytułu.' },
      { q: 'Czy numer PESEL ulega zmianie przy aktualizacji?', a: 'Nie. Numer pozostaje ten sam, aktualizowane są wyłącznie dane dokumentu podróży, a czynność jest bezpłatna.' },
      { q: 'Czy aktualizacji można dokonać online?', a: 'Nie, wyłącznie osobiście. Wystarczy jednak dowolny urząd gminy lub miasta w Polsce - właściwość miejscowa nie obowiązuje.' },
      { q: 'Do kiedy obowiązuje ochrona czasowa dla obywateli Ukrainy?', a: 'Do 4 marca 2027 r. Dokumenty, które utraciły ważność po 24 lutego 2022 r., przedłużono do tej samej daty.' }
    ],
    en: [
      { q: 'Who must update PESEL UKR data by 31 August 2026?', a: 'Anyone who received a PESEL UKR without presenting photo identification, had no passport at registration, has since obtained a new passport or changed document details, and children entered without their own travel document.' },
      { q: 'What happens on 1 September 2026 without the update?', a: 'The register switches the status from UKR to NUE: temporary protection lapses, along with the notification-based right to work, social payments and health cover on that basis.' },
      { q: 'Does the PESEL number change?', a: 'No. The number stays the same and only the travel document data are refreshed. The service is free.' },
      { q: 'Can the update be done online?', a: 'No, only in person - but any municipal office in Poland will do, as territorial jurisdiction does not apply.' },
      { q: 'How long does temporary protection run for Ukrainian nationals?', a: 'Until 4 March 2027. Documents that expired after 24 February 2022 are extended to the same date.' }
    ],
    tr: [
      { q: '31 Ağustos 2026\'ya kadar PESEL UKR verisini kimler güncellemeli?', a: 'PESEL UKR\'yi fotoğraflı kimlik ibraz etmeden alanlar, kayıt anında pasaportu olmayanlar, o tarihten sonra yeni pasaport alanlar veya belge bilgileri değişenler ve kendi seyahat belgesi olmadan sicile işlenen çocuklar.' },
      { q: 'Güncelleme yapılmazsa 1 Eylül 2026\'da ne olur?', a: 'Sicildeki statü UKR\'den NUE\'ye döner: geçici koruma, bildirimle çalışma hakkı, sosyal ödemeler ve bu dayanaktaki NFZ erişimi sona erer.' },
      { q: 'PESEL numarası değişir mi?', a: 'Hayır. Numara aynı kalır, yalnızca seyahat belgesi bilgileri güncellenir ve işlem ücretsizdir.' },
      { q: 'Güncelleme internetten yapılabilir mi?', a: 'Hayır, yalnızca bizzat. Ancak Polonya\'daki herhangi bir belediye idaresi uygundur; yer bakımından yetki kuralı işlemez.' },
      { q: 'Ukrayna vatandaşları için geçici koruma ne zamana kadar?', a: '4 Mart 2027\'ye kadar. 24 Şubat 2022\'den sonra süresi dolan belgeler de aynı tarihe uzatılmıştır.' }
    ]
  },

  'obywatelstwo-polskie-2026-reforma-10-let': {
    ru: [
      { q: 'Вступила ли в силу реформа гражданства с 3 до 10 лет?', a: 'Нет. По состоянию на середину 2026 года ни президентский проект, ни проект PiS, ни предложения MSWiA в силу не вступили - действует закон 2009 года в прежней редакции.' },
      { q: 'Сколько лет нужно прожить в Польше для uznania za obywatela polskiego?', a: 'Три года на karcie stałego pobytu, статусе резидента ЕС или праве постоянного пребывания. При браке с гражданином Польши - два года pobytu stałego плюс три года брака.' },
      { q: 'От какой даты считаются три года?', a: 'Не от приезда в Польшу, а от получения karty stałego pobytu или статуса резидента ЕС. Это самая частая ошибка в расчётах.' },
      { q: 'Сколько стоит подача на гражданство и нужен ли B1?', a: 'Госпошлина за uznanie - 219 PLN. Государственный сертификат польского языка уровня B1 обязателен; заменить его могут только польский школьный аттестат или диплом польского вуза с польским языком обучения.' },
      { q: 'Нужно ли отказываться от прежнего гражданства?', a: 'Польша допускает множественное гражданство. Ограничения могут идти от законодательства вашей страны, а не от польского.' }
    ],
    uk: [
      { q: 'Чи набрала чинності реформа громадянства з 3 до 10 років?', a: 'Ні. Станом на середину 2026 року ні президентський проєкт, ні проєкт PiS, ні пропозиції MSWiA чинності не набрали - діє закон 2009 року в попередній редакції.' },
      { q: 'Скільки років треба прожити в Польщі для uznania za obywatela polskiego?', a: 'Три роки на karcie stałego pobytu, статусі резидента ЄС або праві постійного перебування. За шлюбу з громадянином Польщі - два роки pobytu stałego плюс три роки шлюбу.' },
      { q: 'Від якої дати рахуються три роки?', a: 'Не від приїзду до Польщі, а від отримання karty stałego pobytu або статусу резидента ЄС. Це найчастіша помилка в розрахунках.' },
      { q: 'Скільки коштує подання на громадянство і чи потрібен B1?', a: 'Держмито за uznanie - 219 PLN. Державний сертифікат польської мови рівня B1 обов\'язковий; замінити його можуть лише польський шкільний атестат або диплом польського вишу з польською мовою навчання.' },
      { q: 'Чи треба відмовлятися від попереднього громадянства?', a: 'Польща допускає множинне громадянство. Обмеження можуть іти від законодавства вашої країни, а не від польського.' }
    ],
    pl: [
      { q: 'Czy nowelizacja wydłużająca pobyt z 3 do 10 lat weszła w życie?', a: 'Nie. Według stanu na połowę 2026 r. ani projekt prezydencki, ani poselski, ani propozycje MSWiA nie obowiązują - stosuje się ustawę z 2009 r. w dotychczasowym brzmieniu.' },
      { q: 'Ile lat pobytu wymaga uznanie za obywatela polskiego?', a: 'Trzy lata na karcie stałego pobytu, statusie rezydenta UE albo prawie stałego pobytu. Przy małżeństwie z obywatelem polskim - dwa lata pobytu stałego i trzy lata małżeństwa.' },
      { q: 'Od kiedy liczy się trzyletni okres?', a: 'Nie od przyjazdu do Polski, lecz od uzyskania karty stałego pobytu albo statusu rezydenta długoterminowego UE. To najczęstszy błąd w obliczeniach.' },
      { q: 'Ile kosztuje wniosek i czy certyfikat B1 jest konieczny?', a: 'Opłata skarbowa za uznanie wynosi 219 PLN. Państwowy certyfikat na poziomie B1 jest wymagany; zastępuje go wyłącznie świadectwo polskiej szkoły albo dyplom polskiej uczelni z polskim językiem wykładowym.' },
      { q: 'Czy trzeba zrzec się dotychczasowego obywatelstwa?', a: 'Polska dopuszcza wielość obywatelstw. Ograniczenia mogą wynikać z prawa państwa pochodzenia, nie z prawa polskiego.' }
    ],
    en: [
      { q: 'Has the 3-to-10-year citizenship reform entered into force?', a: 'No. As of mid-2026 neither the presidential bill, nor the parliamentary one, nor the interior ministry proposals are in force - the 2009 Act applies in its existing wording.' },
      { q: 'How many years of residence does recognition as a Polish citizen require?', a: 'Three years on a permanent residence card, EU long-term resident status or a permanent right of residence. With a Polish spouse, two years of permanent residence plus three years of marriage.' },
      { q: 'When do the three years start?', a: 'Not on arrival in Poland but from obtaining the permanent residence card or EU long-term resident status - the most common miscalculation.' },
      { q: 'What does the application cost and is B1 required?', a: 'Stamp duty for recognition is PLN 219. A state B1 certificate in Polish is mandatory; only a Polish school certificate or a Polish university diploma taught in Polish substitutes for it.' },
      { q: 'Must I renounce my current citizenship?', a: 'Poland allows multiple citizenship. Any restriction comes from your country of origin, not from Polish law.' }
    ],
    tr: [
      { q: '3 yıldan 10 yıla çıkaran reform yürürlüğe girdi mi?', a: 'Hayır. 2026 ortası itibarıyla ne cumhurbaşkanlığı tasarısı, ne PiS tasarısı, ne de MSWiA önerileri yürürlüktedir; 2009 tarihli kanun mevcut hâliyle uygulanır.' },
      { q: 'Uznanie za obywatela polskiego için kaç yıl ikamet gerekir?', a: 'Karta stałego pobytu, AB mukim statüsü ya da daimi ikamet hakkıyla üç yıl. Polonya vatandaşıyla evlilikte iki yıl daimi ikamet ve üç yıl evlilik.' },
      { q: 'Üç yıl ne zaman başlar?', a: 'Polonya\'ya gelişten değil, karta stałego pobytu ya da AB mukim statüsünün alındığı tarihten. En sık yapılan hesap hatası budur.' },
      { q: 'Başvuru ne kadar ve B1 şart mı?', a: 'Uznanie için opłata skarbowa 219 PLN\'dir. B1 düzeyinde devlet dil sertifikası zorunludur; yerine yalnızca Polonya okulu diploması ya da eğitim dili Lehçe olan Polonya üniversitesi diploması geçer.' },
      { q: 'Mevcut vatandaşlıktan çıkmak gerekir mi?', a: 'Polonya çok vatandaşlığa izin verir. Kısıt varsa Polonya hukukundan değil, köken ülkenizin hukukundan doğar.' }
    ]
  },

  'karta-pobytu-udalennaya-rabota-2026': {
    ru: [
      { q: 'Есть ли в Польше виза цифрового кочевника?', a: 'Нет. Польское законодательство такой категории не содержит - в отличие от Испании, Португалии, Хорватии и Венгрии. Легализация идёт через бизнес-основание.' },
      { q: 'Даёт ли работа на иностранного работодателя право на карту побыту?', a: 'Нет. Карта по работе (art. 114) требует польского работодателя и разрешения на работу. Контракт с компанией из США, Британии или ОАЭ этому не соответствует.' },
      { q: 'Какой доход нужен для карты побыту по бизнесу?', a: 'Один из вариантов: доход не ниже 12-кратной средней месячной зарплаты в воеводстве за предыдущий год (в Мазовецком - порядка 100 000 PLN в год), либо трудоустройство двух человек, либо доказанные ресурсы и деятельность.' },
      { q: 'Засчитывается ли период по бизнес-карте в стаж для ПМЖ?', a: 'Да, полностью - в отличие от периода ochrony czasowej. Пять лет по такой карте открывают путь к статусу резидента ЕС.' }
    ],
    uk: [
      { q: 'Чи є в Польщі віза цифрового кочівника?', a: 'Ні. Польське законодавство такої категорії не містить - на відміну від Іспанії, Португалії, Хорватії та Угорщини. Легалізація йде через бізнес-підставу.' },
      { q: 'Чи дає робота на іноземного роботодавця право на карту побиту?', a: 'Ні. Картка по роботі (art. 114) вимагає польського роботодавця і дозволу на роботу. Контракт із компанією зі США, Британії чи ОАЕ цьому не відповідає.' },
      { q: 'Який дохід потрібен для карти побиту по бізнесу?', a: 'Один із варіантів: дохід не нижче 12-кратної середньої місячної зарплати у воєводстві за попередній рік (у Мазовецькому - близько 100 000 PLN на рік), або працевлаштування двох осіб, або доведені ресурси й діяльність.' },
      { q: 'Чи зараховується період за бізнес-карткою у стаж для ПМП?', a: 'Так, повністю - на відміну від періоду ochrony czasowej. П\'ять років за такою карткою відкривають шлях до статусу резидента ЄС.' }
    ],
    pl: [
      { q: 'Czy w Polsce funkcjonuje wiza dla cyfrowych nomadów?', a: 'Nie. Ustawa o cudzoziemcach nie zna takiej kategorii, inaczej niż w Hiszpanii, Portugalii, Chorwacji czy na Węgrzech. Legalizacja przebiega przez podstawę gospodarczą.' },
      { q: 'Czy praca dla zagranicznego pracodawcy daje kartę pobytu?', a: 'Nie. Karta z tytułu pracy wymaga polskiego pracodawcy i zezwolenia na pracę, czego kontrakt z podmiotem z USA, Wielkiej Brytanii czy ZEA nie spełnia.' },
      { q: 'Jaki dochód jest wymagany przy karcie z tytułu działalności?', a: 'Jedna z trzech przesłanek: dochód nie niższy niż 12-krotność przeciętnego wynagrodzenia w województwie za rok poprzedni (w Mazowieckiem rzędu 100 000 PLN), zatrudnienie dwóch osób albo wykazane środki i działania.' },
      { q: 'Czy okres na karcie z tytułu działalności liczy się do pobytu stałego?', a: 'Tak, w całości - inaczej niż okres ochrony czasowej. Pięć lat otwiera drogę do statusu rezydenta długoterminowego UE.' }
    ],
    en: [
      { q: 'Does Poland have a digital nomad visa?', a: 'No. Polish law contains no such category, unlike Spain, Portugal, Croatia or Hungary. Legalisation runs through a business basis instead.' },
      { q: 'Does working for a foreign employer qualify for a residence card?', a: 'No. A work-based card requires a Polish employer and a work permit, which a contract with a US, UK or UAE company does not satisfy.' },
      { q: 'What income does a business-based card require?', a: 'One of three conditions: income of at least twelve times the average monthly salary in your voivodeship for the previous year (around PLN 100,000 in Mazowieckie), employing two people, or demonstrated resources and activity.' },
      { q: 'Does time on a business card count towards permanent residence?', a: 'Yes, in full - unlike time under temporary protection. Five years opens the route to EU long-term resident status.' }
    ],
    tr: [
      { q: 'Polonya\'da dijital göçebe vizesi var mı?', a: 'Hayır. Polonya mevzuatında böyle bir kategori yoktur; İspanya, Portekiz, Hırvatistan ve Macaristan\'dan farklı olarak legalizasyon ticari gerekçe üzerinden yürür.' },
      { q: 'Yabancı işverene çalışmak karta pobytu hakkı verir mi?', a: 'Hayır. İş temelli kart, Polonyalı işveren ve çalışma izni gerektirir; ABD, Birleşik Krallık ya da BAE şirketiyle sözleşme bunu karşılamaz.' },
      { q: 'Ticari gerekçeli kartta hangi gelir aranır?', a: 'Üç koşuldan biri: yaşadığınız eyalette önceki yıl ortalama aylık maaşın 12 katından az olmayan gelir (Mazowieckie\'de yaklaşık 100.000 PLN), iki kişinin istihdamı ya da kanıtlanmış kaynak ve faaliyet.' },
      { q: 'Ticari kartla geçen süre daimi ikamete sayılır mı?', a: 'Evet, tamamen; geçici koruma döneminin aksine. Beş yıl AB mukim statüsünün yolunu açar.' }
    ]
  },

  'zmiana-danych-wymiana-karty-pobytu-2026': {
    ru: [
      { q: 'В какой срок нужно подать на замену карты побыту?', a: 'В течение 14 дней от наступления обстоятельства - смены фамилии, имени, гражданства, существенного изменения внешности или повреждения карты.' },
      { q: 'Нужно ли менять карту при переезде?', a: 'Нет: адрес на карте побыту не печатается. Переезд решается новым мельдунком и уведомлением воеводы, если дело ещё на рассмотрении.' },
      { q: 'Сколько стоит замена карты?', a: '100 PLN при изменении данных, 150 PLN при виновной утрате или уничтожении и 300 PLN при повторной виновной утрате.' },
      { q: 'Меняется ли срок действия карты при замене?', a: 'Нет. Новая карта выдаётся на остаток срока прежней - замена данных не является продлением пребывания.' }
    ],
    uk: [
      { q: 'У який строк треба подати на заміну карти побиту?', a: 'Протягом 14 днів від настання обставини - зміни прізвища, імені, громадянства, суттєвої зміни зовнішності або пошкодження картки.' },
      { q: 'Чи треба міняти картку при переїзді?', a: 'Ні: адреса на карті побиту не друкується. Переїзд вирішується новим мельдунком і повідомленням воєводи, якщо справа ще на розгляді.' },
      { q: 'Скільки коштує заміна картки?', a: '100 PLN при зміні даних, 150 PLN при винній втраті або знищенні і 300 PLN при повторній винній втраті.' },
      { q: 'Чи змінюється строк дії картки при заміні?', a: 'Ні. Нова картка видається на залишок строку попередньої - заміна даних не є продовженням перебування.' }
    ],
    pl: [
      { q: 'W jakim terminie składa się wniosek o wymianę karty pobytu?', a: 'W ciągu 14 dni od zaistnienia okoliczności - zmiany nazwiska, imienia, obywatelstwa, istotnej zmiany wizerunku albo uszkodzenia karty.' },
      { q: 'Czy przeprowadzka wymaga wymiany karty?', a: 'Nie, ponieważ karta pobytu nie zawiera adresu. Przeprowadzkę załatwia nowe zameldowanie oraz zawiadomienie wojewody, jeżeli sprawa jest w toku.' },
      { q: 'Ile kosztuje wymiana karty?', a: '100 PLN przy zmianie danych, 150 PLN przy zawinionej utracie albo zniszczeniu i 300 PLN przy kolejnej zawinionej utracie.' },
      { q: 'Czy wymiana zmienia okres ważności karty?', a: 'Nie. Nowa karta wydawana jest na pozostały okres, a wymiana danych nie stanowi przedłużenia pobytu.' }
    ],
    en: [
      { q: 'What is the deadline for a replacement residence card?', a: 'Fourteen days from the event - a change of surname, first name or citizenship, a significant change in appearance, or damage to the card.' },
      { q: 'Does moving house require a new card?', a: 'No - the card does not show your address. A move is handled by new address registration and, where the case is pending, a notification to the wojewoda.' },
      { q: 'What does a replacement cost?', a: 'PLN 100 for changed data, PLN 150 after culpable loss or destruction, and PLN 300 for a further culpable loss.' },
      { q: 'Does replacement change the card\'s validity?', a: 'No. The new card runs for the remainder of the original period; replacing data is not an extension of stay.' }
    ],
    tr: [
      { q: 'Kart yenileme başvurusu hangi sürede yapılır?', a: 'Olayın gerçekleşmesinden itibaren 14 gün içinde: soyadı, ad veya vatandaşlık değişikliği, görünümde önemli değişiklik ya da kartın hasar görmesi.' },
      { q: 'Taşınma kart yenilemesi gerektirir mi?', a: 'Hayır; kartta adres yazmaz. Taşınma, yeni meldunek ve dosya derdestse wojewoda\'ya bildirimle çözülür.' },
      { q: 'Yenileme ne kadar tutuyor?', a: 'Veri değişikliğinde 100 PLN, kusurlu kayıp veya tahripte 150 PLN, tekrarlanan kusurlu kayıpta 300 PLN.' },
      { q: 'Yenileme kartın geçerlilik süresini değiştirir mi?', a: 'Hayır. Yeni kart öncekinin kalan süresi için verilir; veri yenilemesi ikametin uzatılması değildir.' }
    ]
  },

  'zezwolenie-na-prace-2026-praca-gov-pl': {
    ru: [
      { q: 'Как подаются заявления на разрешение на работу в 2026 году?', a: 'Только электронно через praca.gov.pl. Документы, поданные в другой форме, оставляются без рассмотрения - без возможности исправить.' },
      { q: 'Отменён ли тест рынка труда?', a: 'Да. Informacja starosty перестала быть обязательным элементом процедуры с 1 июня 2025 года, что убрало из неё 14-30 дней ожидания.' },
      { q: 'Сколько стоит oświadczenie o powierzeniu wykonywania pracy?', a: '400 PLN - плата выросла со 100 PLN. Разрешение типа A стоит 100 PLN при сроке дольше 3 месяцев и 50 PLN при более коротком.' },
      { q: 'В какой срок работодатель уведомляет о начале работы гражданина Украины?', a: 'В течение 7 дней от начала работы, через praca.gov.pl. Правило действует с 5 марта 2026 года.' },
      { q: 'Легализует ли разрешение на работу пребывание в Польше?', a: 'Нет. Разрешение даёт право работать, а право находиться в стране - виза или карта побыту. Сроки обоих документов нужно синхронизировать.' }
    ],
    uk: [
      { q: 'Як подаються заяви на дозвіл на роботу у 2026 році?', a: 'Лише електронно через praca.gov.pl. Документи, подані в іншій формі, лишаються без розгляду - без можливості виправити.' },
      { q: 'Чи скасовано тест ринку праці?', a: 'Так. Informacja starosty перестала бути обов\'язковим елементом процедури з 1 червня 2025 року, що прибрало з неї 14-30 днів очікування.' },
      { q: 'Скільки коштує oświadczenie o powierzeniu wykonywania pracy?', a: '400 PLN - плата зросла зі 100 PLN. Дозвіл типу A коштує 100 PLN за строку довшого за 3 місяці і 50 PLN за коротшого.' },
      { q: 'У який строк роботодавець повідомляє про початок роботи громадянина України?', a: 'Протягом 7 днів від початку роботи, через praca.gov.pl. Правило діє з 5 березня 2026 року.' },
      { q: 'Чи легалізує дозвіл на роботу перебування в Польщі?', a: 'Ні. Дозвіл дає право працювати, а право перебувати в країні - віза або карта побиту. Строки обох документів треба синхронізувати.' }
    ],
    pl: [
      { q: 'Jak składa się wnioski o zezwolenie na pracę w 2026 r.?', a: 'Wyłącznie elektronicznie przez praca.gov.pl. Dokumenty złożone w innej formie pozostawia się bez rozpoznania, bez wezwania do poprawienia.' },
      { q: 'Czy test rynku pracy został zniesiony?', a: 'Tak. Informacja starosty przestała być obowiązkowym elementem procedury 1 czerwca 2025 r., co usunęło z niej 14-30 dni oczekiwania.' },
      { q: 'Ile kosztuje oświadczenie o powierzeniu wykonywania pracy?', a: '400 PLN - opłata wzrosła ze 100 PLN. Zezwolenie typu A kosztuje 100 PLN przy okresie powyżej 3 miesięcy i 50 PLN przy krótszym.' },
      { q: 'W jakim terminie zgłasza się podjęcie pracy przez obywatela Ukrainy?', a: 'W ciągu 7 dni od podjęcia pracy, przez praca.gov.pl. Zasada obowiązuje od 5 marca 2026 r.' },
      { q: 'Czy zezwolenie na pracę legalizuje pobyt?', a: 'Nie. Zezwolenie daje prawo do pracy, a prawo pobytu wynika z wizy albo karty pobytu. Terminy obu dokumentów należy zsynchronizować.' }
    ],
    en: [
      { q: 'How are work permit applications filed in 2026?', a: 'Electronically through praca.gov.pl only. Anything filed in another form is left without examination, with no chance to correct it.' },
      { q: 'Has the labour market test been abolished?', a: 'Yes. The starosta\'s information ceased to be a mandatory element on 1 June 2025, removing 14 to 30 days of waiting from the procedure.' },
      { q: 'What does a declaration of entrusting work cost?', a: 'PLN 400, up from PLN 100. A type A permit costs PLN 100 for periods over three months and PLN 50 for shorter ones.' },
      { q: 'How quickly must an employer report a Ukrainian national starting work?', a: 'Within seven days of the start, through praca.gov.pl. The rule has applied since 5 March 2026.' },
      { q: 'Does a work permit legalise my stay?', a: 'No. The permit grants the right to work; the right to be in Poland comes from a visa or residence card. The two sets of dates must be synchronised.' }
    ],
    tr: [
      { q: '2026\'da çalışma izni başvuruları nasıl yapılıyor?', a: 'Yalnızca praca.gov.pl üzerinden elektronik olarak. Başka biçimde verilen belgeler, düzeltme çağrısı yapılmadan incelenmeden bırakılır.' },
      { q: 'İş gücü piyasası testi kaldırıldı mı?', a: 'Evet. Informacja starosty 1 Haziran 2025\'te zorunlu unsur olmaktan çıktı ve süreçten 14-30 günlük bekleme kalktı.' },
      { q: 'Oświadczenie o powierzeniu wykonywania pracy ne kadar?', a: '400 PLN; ücret 100 PLN\'den yükseldi. A tipi izin üç aydan uzun sürelerde 100 PLN, daha kısa sürelerde 50 PLN\'dir.' },
      { q: 'Ukrayna vatandaşının işe başlaması hangi sürede bildirilir?', a: 'İşe başlamadan itibaren 7 gün içinde, praca.gov.pl üzerinden. Kural 5 Mart 2026\'dan beri geçerlidir.' },
      { q: 'Çalışma izni ikameti yasallaştırır mı?', a: 'Hayır. İzin çalışma hakkı verir; ülkede bulunma hakkı vize ya da karta pobytu\'dan doğar. İki belgenin süreleri eşitlenmelidir.' }
    ]
  },

  'etias-2026-kogo-kasaetsya': {
    ru: [
      { q: 'Когда запускают ETIAS?', a: 'Запуск ожидается в IV квартале 2026 года; точную дату ЕС объявляет за несколько месяцев. Система EES при этом полностью работает на всех внешних границах с 10 апреля 2026 года.' },
      { q: 'Нужен ли ETIAS обладателю карты побыту?', a: 'Нет. Разрешение на пребывание в стране Шенгена освобождает от ETIAS и выводит из-под регистрации в EES. Карту нужно возить вместе с паспортом.' },
      { q: 'Сколько стоит ETIAS и на сколько он выдаётся?', a: '20 евро для заявителей от 18 до 70 лет, бесплатно для младше 18 и старше 70. Срок действия - 3 года или до истечения паспорта, что наступит раньше.' },
      { q: 'Заменяет ли ETIAS визу?', a: 'Нет. Это разрешение для безвизового въезда, аналог американского ESTA. Гражданам стран, которым нужна шенгенская виза, ETIAS не оформляется.' }
    ],
    uk: [
      { q: 'Коли запускають ETIAS?', a: 'Запуск очікується у IV кварталі 2026 року; точну дату ЄС оголошує за кілька місяців. Система EES при цьому повністю працює на всіх зовнішніх кордонах з 10 квітня 2026 року.' },
      { q: 'Чи потрібен ETIAS власнику карти побиту?', a: 'Ні. Дозвіл на перебування в країні Шенгену звільняє від ETIAS і виводить з-під реєстрації в EES. Картку треба возити разом із паспортом.' },
      { q: 'Скільки коштує ETIAS і на скільки він видається?', a: '20 євро для заявників від 18 до 70 років, безкоштовно для молодших за 18 і старших за 70. Строк дії - 3 роки або до закінчення паспорта, що настане раніше.' },
      { q: 'Чи замінює ETIAS візу?', a: 'Ні. Це дозвіл для безвізового в\'їзду, аналог американського ESTA. Громадянам країн, яким потрібна шенгенська віза, ETIAS не оформлюється.' }
    ],
    pl: [
      { q: 'Kiedy ruszy ETIAS?', a: 'Start przewidziano na IV kwartał 2026 r., a datę Komisja ogłasza z kilkumiesięcznym wyprzedzeniem. System EES działa w pełni na wszystkich przejściach od 10 kwietnia 2026 r.' },
      { q: 'Czy posiadacz karty pobytu potrzebuje ETIAS?', a: 'Nie. Zezwolenie pobytowe państwa Schengen zwalnia z ETIAS i pozostaje poza zakresem rejestracji w EES. Kartę należy wozić razem z paszportem.' },
      { q: 'Ile kosztuje ETIAS i na jak długo jest ważny?', a: '20 euro dla osób w wieku 18-70 lat, bezpłatnie poniżej 18 i powyżej 70 lat. Ważność wynosi 3 lata albo do utraty ważności paszportu.' },
      { q: 'Czy ETIAS zastępuje wizę?', a: 'Nie. To zezwolenie na podróż w ruchu bezwizowym, odpowiednik amerykańskiego ESTA. Obywatele państw objętych obowiązkiem wizowym nie składają wniosku o ETIAS.' }
    ],
    en: [
      { q: 'When does ETIAS launch?', a: 'Launch is expected in Q4 2026, with the exact date announced months ahead. EES has meanwhile been fully operational at all external border crossings since 10 April 2026.' },
      { q: 'Does a residence card holder need ETIAS?', a: 'No. A Schengen residence permit exempts you from ETIAS and places you outside EES registration. Carry the card with your passport.' },
      { q: 'What does ETIAS cost and how long does it last?', a: 'EUR 20 for applicants aged 18 to 70, free below 18 and above 70. Validity is three years or until your passport expires, whichever is first.' },
      { q: 'Does ETIAS replace a visa?', a: 'No. It is a travel authorisation for visa-free entry, comparable to the American ESTA. Nationals who need a Schengen visa do not apply for ETIAS.' }
    ],
    tr: [
      { q: 'ETIAS ne zaman başlıyor?', a: 'Başlangıç 2026\'nın dördüncü çeyreğinde bekleniyor; kesin tarih aylar öncesinden duyurulur. EES ise 10 Nisan 2026\'dan beri tüm dış sınır kapılarında tam olarak işliyor.' },
      { q: 'Karta pobytu sahibine ETIAS gerekir mi?', a: 'Hayır. Schengen ikamet izni ETIAS\'tan muaf tutar ve EES kaydının dışında bırakır. Kartı pasaportla birlikte taşıyın.' },
      { q: 'ETIAS ne kadar ve ne kadar süre geçerli?', a: '18-70 yaş arası için 20 avro; 18 altı ve 70 üstü ücretsiz. Geçerlilik üç yıl ya da pasaportun süresi dolana kadardır.' },
      { q: 'ETIAS vizenin yerine geçer mi?', a: 'Hayır. Vizesiz giriş için seyahat iznidir; ABD\'deki ESTA\'nın karşılığıdır. Schengen vizesine tabi ülke vatandaşları ETIAS başvurusu yapmaz.' }
    ]
  },

  'transkrypcja-aktu-w-usc-2026': {
    ru: [
      { q: 'Когда транскрипция акта в польский USC обязательна?', a: 'Когда гражданин Польши подаёт на документ, удостоверяющий личность, или на PESEL, когда нужно создать польский акт на основе иностранного события, и когда иностранный акт требует дополнения или исправления через польский реестр.' },
      { q: 'Сколько стоит транскрипция?', a: '50 PLN opłaty skarbowej за odpis zupełny акта после транскрипции, плюс присяжный перевод - обычно 60-150 PLN за документ.' },
      { q: 'Нужен ли апостиль на украинское свидетельство для USC?', a: 'Нет. По двустороннему договору 1993 года украинские официальные документы освобождены от легализации - достаточно присяжного перевода.' },
      { q: 'Признают ли в Польше иностранный развод автоматически?', a: 'Решения судов стран ЕС признаются в силу закона, без отдельной процедуры. Для решений вне ЕС применяется административное признание в USC или судебная процедура - в зависимости от страны и даты.' }
    ],
    uk: [
      { q: 'Коли транскрипція акта в польський USC обов\'язкова?', a: 'Коли громадянин Польщі подає на документ, що посвідчує особу, або на PESEL, коли треба створити польський акт на основі іноземної події, і коли іноземний акт потребує доповнення чи виправлення через польський реєстр.' },
      { q: 'Скільки коштує транскрипція?', a: '50 PLN opłaty skarbowej за odpis zupełny акта після транскрипції, плюс присяжний переклад - зазвичай 60-150 PLN за документ.' },
      { q: 'Чи потрібен апостиль на українське свідоцтво для USC?', a: 'Ні. За двостороннім договором 1993 року українські офіційні документи звільнені від легалізації - достатньо присяжного перекладу.' },
      { q: 'Чи визнають у Польщі іноземне розлучення автоматично?', a: 'Рішення судів країн ЄС визнаються з огляду на закон, без окремої процедури. Для рішень поза ЄС застосовується адміністративне визнання в USC або судова процедура - залежно від країни і дати.' }
    ],
    pl: [
      { q: 'Kiedy transkrypcja aktu jest obowiązkowa?', a: 'Gdy obywatel polski ubiega się o dokument tożsamości albo numer PESEL, gdy trzeba utworzyć polski akt na podstawie zdarzenia zagranicznego oraz gdy akt wymaga uzupełnienia lub sprostowania w polskim rejestrze.' },
      { q: 'Ile kosztuje transkrypcja?', a: '50 PLN opłaty skarbowej za odpis zupełny po transkrypcji oraz tłumaczenie przysięgłe, zwykle 60-150 PLN od dokumentu.' },
      { q: 'Czy ukraiński akt wymaga apostille w USC?', a: 'Nie. Umowa dwustronna z 1993 r. zwalnia ukraińskie dokumenty urzędowe z legalizacji - wystarcza tłumaczenie przysięgłe.' },
      { q: 'Czy zagraniczny rozwód jest uznawany automatycznie?', a: 'Orzeczenia z państw UE podlegają uznaniu z mocy prawa. Poza UE stosuje się uznanie w trybie administracyjnym w USC albo postępowanie sądowe, zależnie od państwa i daty orzeczenia.' }
    ],
    en: [
      { q: 'When is transcription into the Polish registry compulsory?', a: 'When a Polish citizen applies for an identity document or a PESEL number, when a Polish record must be created from a foreign event, and when a foreign record needs supplementing or correcting through the Polish registry.' },
      { q: 'What does transcription cost?', a: 'PLN 50 stamp duty for the full extract issued afterwards, plus a sworn translation at typically PLN 60-150 per document.' },
      { q: 'Does a Ukrainian certificate need an apostille for the registry?', a: 'No. The 1993 bilateral treaty exempts Ukrainian official documents from legalisation - a sworn translation is enough.' },
      { q: 'Is a foreign divorce recognised automatically in Poland?', a: 'Judgments from EU states are recognised by operation of law. Outside the EU, either administrative recognition at the registry or court proceedings apply, depending on the country and the date.' }
    ],
    tr: [
      { q: 'Transkripsiyon ne zaman zorunlu?', a: 'Polonya vatandaşı kimlik belgesi ya da PESEL için başvurduğunda, yabancı bir olaydan Polonya kaydı oluşturulması gerektiğinde ve yabancı kaydın Polonya sicilinde tamamlanması ya da düzeltilmesi gerektiğinde.' },
      { q: 'Transkripsiyon ne kadar tutuyor?', a: 'İşlem sonrası tam örnek için 50 PLN opłata skarbowa, ayrıca belge başına genellikle 60-150 PLN yeminli tercüme.' },
      { q: 'Ukrayna belgesi USC için apostil gerektirir mi?', a: 'Hayır. 1993 tarihli ikili anlaşma Ukrayna resmî belgelerini tasdikten muaf tutar; yeminli tercüme yeterlidir.' },
      { q: 'Yabancı boşanma Polonya\'da kendiliğinden tanınır mı?', a: 'AB ülkelerinin kararları kanun gereği tanınır. AB dışında ülkeye ve karar tarihine göre USC\'de idari tanıma ya da mahkeme yolu uygulanır.' }
    ]
  },

  'arenda-kvartiry-najem-okazjonalny-2026': {
    ru: [
      { q: 'Какая кауция законна при аренде в Польше?', a: 'При najmie zwykłym - до 12 месячных czynszów, при najmie okazjonalnym - до 6, при najmie instytucjonalnym - до 3. Это нормы закона, а не рыночная практика.' },
      { q: 'Чем najem okazjonalny отличается от обычного договора?', a: 'Арендатор подписывает у нотариуса заявление о добровольном подчинении исполнению и указывает адрес для выезда. Собственник получает более быстрый путь к возврату квартиры, поэтому охотнее сдаёт иностранцам.' },
      { q: 'Можно ли снять квартиру без PESEL и карты побыту?', a: 'Да. Аренда не требует ни PESEL, ни разрешения на пребывание - достаточно паспорта. Отказы отражают позицию конкретного собственника, а не закон.' },
      { q: 'Как вернуть депозит после выезда?', a: 'Понадобятся протокол приёма-передачи при заселении и при выезде, документально подтверждённые платежи и письменное расторжение в срок. Депозит возвращается в течение месяца за вычетом обоснованных претензий.' }
    ],
    uk: [
      { q: 'Яка кауція законна при оренді в Польщі?', a: 'При najmie zwykłym - до 12 місячних czynszów, при najmie okazjonalnym - до 6, при najmie instytucjonalnym - до 3. Це норми закону, а не ринкова практика.' },
      { q: 'Чим najem okazjonalny відрізняється від звичайного договору?', a: 'Орендар підписує в нотаріуса заяву про добровільне підкорення виконанню і вказує адресу для виїзду. Власник отримує швидший шлях до повернення квартири, тому охочіше здає іноземцям.' },
      { q: 'Чи можна зняти квартиру без PESEL і карти побиту?', a: 'Так. Оренда не вимагає ні PESEL, ні дозволу на перебування - достатньо паспорта. Відмови відображають позицію конкретного власника, а не закон.' },
      { q: 'Як повернути депозит після виїзду?', a: 'Знадобляться протокол приймання-передачі при заселенні і при виїзді, документально підтверджені платежі та письмове розірвання у строк. Депозит повертається протягом місяця за вирахуванням обґрунтованих претензій.' }
    ],
    pl: [
      { q: 'Jaka kaucja jest dopuszczalna przy najmie?', a: 'Przy najmie zwykłym do 12-krotności czynszu, przy okazjonalnym do 6-krotności, przy instytucjonalnym do 3-krotności. To limity ustawowe, nie praktyka rynkowa.' },
      { q: 'Czym najem okazjonalny różni się od zwykłego?', a: 'Najemca składa u notariusza oświadczenie o poddaniu się egzekucji i wskazuje lokal, do którego się wyprowadzi. Właściciel zyskuje szybszą ścieżkę odzyskania lokalu i chętniej wynajmuje cudzoziemcom.' },
      { q: 'Czy można wynająć mieszkanie bez numeru PESEL i karty pobytu?', a: 'Tak. Najem nie wymaga ani numeru PESEL, ani tytułu pobytowego - wystarczy paszport. Odmowy wynikają ze stanowiska właściciela, nie z przepisów.' },
      { q: 'Jak odzyskać kaucję po wyprowadzce?', a: 'Potrzebne są protokoły zdawczo-odbiorcze przy wprowadzeniu i wyprowadzce, udokumentowane płatności oraz wypowiedzenie na piśmie w terminie. Zwrot następuje w ciągu miesiąca, po potrąceniu uzasadnionych roszczeń.' }
    ],
    en: [
      { q: 'What deposit is lawful when renting in Poland?', a: 'Up to 12 months\' rent under a standard lease, six under an occasional lease and three under an institutional lease. These are statutory caps, not market convention.' },
      { q: 'How does an occasional lease differ from a standard one?', a: 'The tenant signs a notarial submission to enforcement and names an address to move to. The owner gains a faster route to recovering the flat, which makes them far more willing to let to foreigners.' },
      { q: 'Can I rent without a PESEL or residence card?', a: 'Yes. A lease requires neither - a passport is enough. Refusals reflect an owner\'s position rather than the law.' },
      { q: 'How do I get the deposit back?', a: 'You need handover protocols on move-in and move-out, documented payments, and written termination within the notice period. The deposit returns within a month, less justified claims.' }
    ],
    tr: [
      { q: 'Polonya\'da yasal kaucja tutarı nedir?', a: 'Najem zwykły\'de 12 aylık kiraya kadar, okazjonalny\'de 6, instytucjonalny\'de 3 aylık kiraya kadar. Bunlar piyasa alışkanlığı değil, kanuni sınırlardır.' },
      { q: 'Najem okazjonalny normal sözleşmeden nasıl ayrılır?', a: 'Kiracı noterde icraya rıza beyanı verir ve taşınacağı adresi bildirir. Mal sahibi konutu geri almanın hızlı yolunu kazanır, bu yüzden yabancılara daha kolay kiralar.' },
      { q: 'PESEL ve karta pobytu olmadan ev kiralanır mı?', a: 'Evet. Kira için ikisi de gerekmez; pasaport yeterlidir. Retler kanundan değil, mal sahibinin tutumundan doğar.' },
      { q: 'Depozito nasıl geri alınır?', a: 'Girişte ve çıkışta teslim tutanakları, belgelenmiş ödemeler ve süresinde yazılı fesih gerekir. Depozito, haklı talepler düşülerek bir ay içinde iade edilir.' }
    ]
  },

  'zaswiadczenia-zus-us-o-niezaleganiu-2026': {
    ru: [
      { q: 'Сколько стоят справки о niezaleganiu?', a: 'Справка ZUS выдаётся бесплатно, справка из urzędu skarbowego стоит 21 PLN opłaty skarbowej. Обе делаются за день-два, если задолженностей нет.' },
      { q: 'Как получить справку, если есть долг?', a: 'Оплатить и дождаться разноски (1-5 рабочих дней), проверить, реален ли долг - часто это ошибка разноски, либо заключить układ ratalny и получить справку с учётом рассрочки.' },
      { q: 'Сколько действуют такие справки?', a: 'Формального срока нет. Воевода обычно принимает документ не старше 1-3 месяцев, тендеры - до 3-6 месяцев, банки чаще всего требуют не старше 30 дней.' },
      { q: 'Можно ли получить справки через представителя?', a: 'Да. Для ZUS оформляется pełnomocnictwo ZUS-PEL, для налоговой - PPS-1 или PPO-1. Ни логины, ни личный визит клиента не нужны.' }
    ],
    uk: [
      { q: 'Скільки коштують довідки про niezaleganie?', a: 'Довідка ZUS видається безкоштовно, довідка з urzędu skarbowego коштує 21 PLN opłaty skarbowej. Обидві роблять за день-два, якщо заборгованостей немає.' },
      { q: 'Як отримати довідку, якщо є борг?', a: 'Сплатити і дочекатися рознесення (1-5 робочих днів), перевірити, чи реальний борг - часто це помилка рознесення, або укласти układ ratalny і отримати довідку з урахуванням розстрочки.' },
      { q: 'Скільки діють такі довідки?', a: 'Формального строку немає. Воєвода зазвичай приймає документ не старший за 1-3 місяці, тендери - до 3-6 місяців, банки найчастіше вимагають не старший за 30 днів.' },
      { q: 'Чи можна отримати довідки через представника?', a: 'Так. Для ZUS оформлюється pełnomocnictwo ZUS-PEL, для податкової - PPS-1 або PPO-1. Ні логіни, ні особистий візит клієнта не потрібні.' }
    ],
    pl: [
      { q: 'Ile kosztują zaświadczenia o niezaleganiu?', a: 'Zaświadczenie z ZUS jest bezpłatne, a z urzędu skarbowego kosztuje 21 PLN opłaty skarbowej. Oba wydaje się w dzień albo dwa, o ile nie ma zaległości.' },
      { q: 'Jak uzyskać zaświadczenie przy istniejącej zaległości?', a: 'Zapłacić i poczekać na zaksięgowanie (1-5 dni roboczych), sprawdzić, czy zaległość jest realna - często to błąd księgowania - albo zawrzeć układ ratalny i uzyskać zaświadczenie uwzględniające układ.' },
      { q: 'Jak długo honorowane są takie zaświadczenia?', a: 'Ustawowego terminu nie ma. Wojewoda przyjmuje zwykle dokument nie starszy niż 1-3 miesiące, przetargi do 3-6 miesięcy, a banki najczęściej wymagają 30 dni.' },
      { q: 'Czy zaświadczenia może pobrać pełnomocnik?', a: 'Tak. Dla ZUS służy druk ZUS-PEL, dla administracji skarbowej PPS-1 albo PPO-1. Loginy i osobista wizyta klienta nie są potrzebne.' }
    ],
    en: [
      { q: 'What do clearance certificates cost?', a: 'The ZUS certificate is free; the tax office one costs PLN 21 stamp duty. Both take a day or two provided there are no arrears.' },
      { q: 'How do I get one if arrears exist?', a: 'Pay and wait for posting (one to five working days), check whether the debt is real - often it is a posting error - or agree an instalment arrangement and obtain a certificate that reflects it.' },
      { q: 'How long are they honoured?', a: 'No statutory expiry applies. The wojewoda usually accepts one no older than one to three months, tenders up to three or six, and banks most often 30 days.' },
      { q: 'Can a representative collect them?', a: 'Yes. ZUS uses the ZUS-PEL form and the tax administration PPS-1 or PPO-1. No logins and no client visit are required.' }
    ],
    tr: [
      { q: 'Borcu yoktur yazıları ne kadar?', a: 'ZUS yazısı ücretsiz, vergi dairesi yazısı 21 PLN opłata skarbowa. Borç yoksa ikisi de bir-iki günde çıkar.' },
      { q: 'Borç varken belge nasıl alınır?', a: 'Ödeyip kaydın işlemesini beklemek (1-5 iş günü), borcun gerçek olup olmadığını kontrol etmek - çoğu kez kayıt hatasıdır - ya da taksitlendirme yapıp bunu dikkate alan belgeyi almak.' },
      { q: 'Bu belgeler ne kadar kabul edilir?', a: 'Kanuni süre yoktur. Wojewoda genellikle 1-3 aydan eski olmayanı, ihaleler 3-6 aya kadar olanı, bankalar çoğu kez 30 günlük belgeyi ister.' },
      { q: 'Belgeleri vekil alabilir mi?', a: 'Evet. ZUS için ZUS-PEL, vergi idaresi için PPS-1 ya da PPO-1 kullanılır. Şifre ya da müvekkilin bizzat gitmesi gerekmez.' }
    ]
  },

  'pokupka-kvartiry-v-polshe-inostrancem-2026': {
    ru: [
      { q: 'Нужно ли иностранцу разрешение MSWiA на покупку квартиры?', a: 'Нет. Покупка самостоятельной жилой квартиры разрешения не требует независимо от гражданства. Разрешение нужно на дом с участком, землю и недвижимость в приграничной зоне.' },
      { q: 'Сколько стоит сделка сверх цены квартиры?', a: 'На вторичном рынке - PCC 2 %, taksa notarialna по тарифу, 200 PLN за wpis do księgi wieczystej и ещё 200 PLN при ипотеке. На первичном рынке PCC не платится, но в цену включён VAT 8 % или 23 %.' },
      { q: 'Даёт ли покупка недвижимости право на карту побыту?', a: 'Нет. Программы «золотой визы» в Польше нет. Недвижимость может подтверждать место проживания и связи с Польшей, но самостоятельным основанием не является.' },
      { q: 'Что проверять до подписания договора?', a: 'Księgę wieczystą (собственник, ипотеки, сервитуты), задолженности перед wspólnotą, количество прописанных лиц, правовой статус помещения и наследственные риски.' }
    ],
    uk: [
      { q: 'Чи потрібен іноземцю дозвіл MSWiA на купівлю квартири?', a: 'Ні. Купівля самостійної житлової квартири дозволу не потребує незалежно від громадянства. Дозвіл потрібен на будинок із ділянкою, землю і нерухомість у прикордонній зоні.' },
      { q: 'Скільки коштує угода понад ціну квартири?', a: 'На вторинному ринку - PCC 2 %, taksa notarialna за тарифом, 200 PLN за wpis do księgi wieczystej і ще 200 PLN за іпотеки. На первинному ринку PCC не сплачується, але в ціну включено VAT 8 % або 23 %.' },
      { q: 'Чи дає купівля нерухомості право на карту побиту?', a: 'Ні. Програми «золотої візи» в Польщі немає. Нерухомість може підтверджувати місце проживання і зв\'язки з Польщею, але самостійною підставою не є.' },
      { q: 'Що перевіряти до підписання договору?', a: 'Księgę wieczystą (власник, іпотеки, сервітути), заборгованості перед wspólnotą, кількість прописаних осіб, правовий статус приміщення і спадкові ризики.' }
    ],
    pl: [
      { q: 'Czy cudzoziemiec potrzebuje zezwolenia MSWiA na zakup mieszkania?', a: 'Nie. Nabycie samodzielnego lokalu mieszkalnego nie wymaga zezwolenia niezależnie od obywatelstwa. Zezwolenie dotyczy domu z gruntem, nieruchomości gruntowych i nieruchomości w strefie nadgranicznej.' },
      { q: 'Jakie są koszty ponad cenę mieszkania?', a: 'Na rynku wtórnym PCC 2 %, taksa notarialna według tarify, 200 PLN za wpis do księgi wieczystej i kolejne 200 PLN przy hipotece. Na rynku pierwotnym PCC nie występuje, a w cenie zawarty jest VAT 8 % albo 23 %.' },
      { q: 'Czy zakup nieruchomości daje prawo pobytu?', a: 'Nie. Polska nie prowadzi programu "złotej wizy". Nieruchomość może potwierdzać miejsce zamieszkania i więzi z Polską, ale nie jest samodzielną podstawą pobytową.' },
      { q: 'Co sprawdzić przed podpisaniem umowy?', a: 'Księgę wieczystą (właściciel, hipoteki, służebności), zaległości wobec wspólnoty, liczbę osób zameldowanych, status prawny lokalu oraz ryzyka spadkowe.' }
    ],
    en: [
      { q: 'Does a foreigner need a permit to buy a flat in Poland?', a: 'No. Buying a self-contained residential flat requires no permit, whatever your citizenship. Permits apply to houses with land, land plots and property in the border zone.' },
      { q: 'What costs come on top of the price?', a: 'On the secondary market: 2% transfer tax, notarial fees by tariff, PLN 200 for the land register entry and another PLN 200 with a mortgage. On the primary market there is no transfer tax, but VAT of 8% or 23% is built into the price.' },
      { q: 'Does buying property grant residence rights?', a: 'No. Poland runs no golden visa programme. Property can evidence where you live and your ties to Poland, but it is not a basis for residence on its own.' },
      { q: 'What should I check before signing?', a: 'The land register (owner, mortgages, easements), arrears to the building association, the number of registered occupants, the legal status of the unit and any inheritance risks.' }
    ],
    tr: [
      { q: 'Yabancının daire alımı için MSWiA izni gerekir mi?', a: 'Hayır. Bağımsız konut birimi alımı, vatandaşlıktan bağımsız olarak izin gerektirmez. İzin; arsalı ev, arsa ve sınır bölgesindeki taşınmazlar için gerekir.' },
      { q: 'Fiyatın üzerine hangi maliyetler biniyor?', a: 'İkinci elde %2 PCC, tarifeye göre noter ücreti, tapu tescili için 200 PLN ve ipotek varsa 200 PLN daha. Birinci elde PCC yoktur, fiyata %8 ya da %23 KDV dâhildir.' },
      { q: 'Taşınmaz almak ikamet hakkı verir mi?', a: 'Hayır. Polonya\'da "altın vize" programı yoktur. Taşınmaz, ikamet yerini ve Polonya ile bağları kanıtlayabilir ama tek başına gerekçe değildir.' },
      { q: 'İmzadan önce ne kontrol edilmeli?', a: 'Tapu sicili (malik, ipotekler, irtifaklar), site yönetimine borçlar, kayıtlı kişi sayısı, birimin hukuki durumu ve miras riskleri.' }
    ]
  },

  'registraciya-avto-i-oc-v-polshe-2026': {
    ru: [
      { q: 'В какой срок нужно зарегистрировать автомобиль в Польше?', a: 'В течение 30 дней от покупки авто, уже зарегистрированного в Польше, или от даты ввоза из-за границы. Нарушение карается штрафом от 500 до 1 000 PLN.' },
      { q: 'Нужен ли PESEL для полиса OC?', a: 'Практически да. Идентификация владельца в системах UFG и тарификация строятся на номере PESEL, поэтому вариант «по паспорту без PESEL» у большинства страховщиков не проходит.' },
      { q: 'Можно ли зарегистрировать авто без карты побыту?', a: 'Да, разрешение на пребывание не требуется. Но нужен адрес в реестре - wydział komunikacji берёт его оттуда, поэтому без мельдунка заявление не примут.' },
      { q: 'Сколько стоит акциз при ввозе авто из ЕС?', a: '3,1 % от стоимости для двигателей до 2 000 см³ и 18,6 % для более крупных. Декларация AKC-U/S подаётся в течение 14 дней от ввоза, оплата - в течение 30 дней.' }
    ],
    uk: [
      { q: 'У який строк треба зареєструвати автомобіль у Польщі?', a: 'Протягом 30 днів від купівлі авто, вже зареєстрованого в Польщі, або від дати ввезення з-за кордону. Порушення карається штрафом від 500 до 1 000 PLN.' },
      { q: 'Чи потрібен PESEL для поліса OC?', a: 'Практично так. Ідентифікація власника в системах UFG і тарифікація будуються на номері PESEL, тому варіант «за паспортом без PESEL» у більшості страховиків не проходить.' },
      { q: 'Чи можна зареєструвати авто без карти побиту?', a: 'Так, дозвіл на перебування не потрібен. Але потрібна адреса в реєстрі - wydział komunikacji бере її звідти, тому без мельдунку заяву не приймуть.' },
      { q: 'Скільки коштує акциз при ввезенні авто з ЄС?', a: '3,1 % від вартості для двигунів до 2 000 см³ і 18,6 % для більших. Декларація AKC-U/S подається протягом 14 днів від ввезення, оплата - протягом 30 днів.' }
    ],
    pl: [
      { q: 'W jakim terminie trzeba zarejestrować pojazd?', a: 'W ciągu 30 dni od zakupu pojazdu zarejestrowanego w Polsce albo od sprowadzenia go z zagranicy. Przekroczenie terminu zagrożone jest karą od 500 do 1 000 PLN.' },
      { q: 'Czy do polisy OC potrzebny jest numer PESEL?', a: 'W praktyce tak. Identyfikacja właściciela w systemach UFG i taryfikacja opierają się na numerze PESEL, więc wariant "na paszport" w większości towarzystw nie działa.' },
      { q: 'Czy można zarejestrować auto bez karty pobytu?', a: 'Tak, tytuł pobytowy nie jest wymagany. Konieczny jest natomiast adres w rejestrze, ponieważ wydział komunikacji pobiera go automatycznie - bez meldunku wniosek nie zostanie przyjęty.' },
      { q: 'Ile wynosi akcyza przy sprowadzeniu auta z UE?', a: '3,1 % wartości dla pojemności do 2 000 cm³ i 18,6 % powyżej. Deklarację AKC-U/S składa się w ciągu 14 dni od sprowadzenia, a płatność następuje w ciągu 30 dni.' }
    ],
    en: [
      { q: 'How quickly must a car be registered in Poland?', a: 'Within 30 days of buying a car already registered in Poland, or of importing one. Missing the deadline attracts a fine of PLN 500 to 1,000.' },
      { q: 'Do I need a PESEL for third-party motor cover?', a: 'In practice, yes. Owner identification in the guarantee fund systems and insurer pricing are built on the PESEL number, so a passport-only policy does not work at most insurers.' },
      { q: 'Can I register a car without a residence card?', a: 'Yes, no residence permit is needed. An address in the register is, however - the vehicle department pulls it automatically, so without registration the application is refused.' },
      { q: 'What excise duty applies to a car imported from the EU?', a: '3.1% of value for engines up to 2,000 cc and 18.6% above. The AKC-U/S declaration is filed within 14 days of import and paid within 30.' }
    ],
    tr: [
      { q: 'Araç hangi sürede tescil edilmeli?', a: 'Polonya\'da tescilli bir aracın satın alınmasından ya da yurt dışından getirilmesinden itibaren 30 gün içinde. Süre aşımı 500-1.000 PLN para cezası gerektirir.' },
      { q: 'OC poliçesi için PESEL gerekir mi?', a: 'Pratikte evet. UFG sistemlerindeki kimliklendirme ve fiyatlama PESEL numarasına dayanır; bu yüzden yalnızca pasaportla poliçe çoğu şirkette işlemez.' },
      { q: 'Karta pobytu olmadan araç tescil edilir mi?', a: 'Evet, ikamet izni gerekmez. Ancak sicilde adres gerekir; wydział komunikacji adresi oradan çeker, meldunek yoksa başvuru kabul edilmez.' },
      { q: 'AB\'den araç ithalinde ÖTV ne kadar?', a: '2.000 cm³\'e kadar motorlarda değerin %3,1\'i, üzerinde %18,6\'sı. AKC-U/S beyannamesi getirişten itibaren 14 gün içinde verilir, ödeme 30 gün içinde yapılır.' }
    ]
  },

  'licenciya-taxi-bolt-uber-dlya-inostranca-2026': {
    ru: [
      { q: 'Можно ли работать в Bolt или Uber с украинскими правами?', a: 'Нет. С 17 июня 2024 года водитель, перевозящий пассажиров, обязан иметь права, выданные в Польше или в другой стране ЕС и ЕЭЗ. Переходный период для уже работавших закончился 17 июня 2025 года.' },
      { q: 'Какие документы нужны водителю кроме прав?', a: 'Медицинское и психологическое заключения, zaświadczenie o niekaralności, легальное пребывание с правом на работу и личная верификация у оператора приложения.' },
      { q: 'Сколько стоит лицензия на перевозку людей?', a: 'Ориентировочно 700 PLN на 2-15 лет, 800 PLN на 15-30 лет и 900 PLN на 30-50 лет. Licencja taksówkowa от гмины дешевле - около 200-300 PLN.' },
      { q: 'Нужна ли собственная лицензия при работе на флот?', a: 'Нет, лицензию имеет тот, кто ведёт деятельность. Но требования к водителю - права, медицина, психология, несудимость - остаются в силе.' }
    ],
    uk: [
      { q: 'Чи можна працювати в Bolt або Uber з українськими правами?', a: 'Ні. З 17 червня 2024 року водій, який перевозить пасажирів, зобов\'язаний мати права, видані в Польщі або в іншій країні ЄС і ЄЕЗ. Перехідний період для тих, хто вже працював, завершився 17 червня 2025 року.' },
      { q: 'Які документи потрібні водієві крім прав?', a: 'Медичний і психологічний висновки, zaświadczenie o niekaralności, легальне перебування з правом на роботу та особиста верифікація в оператора застосунку.' },
      { q: 'Скільки коштує ліцензія на перевезення людей?', a: 'Орієнтовно 700 PLN на 2-15 років, 800 PLN на 15-30 років і 900 PLN на 30-50 років. Licencja taksówkowa від гміни дешевша - близько 200-300 PLN.' },
      { q: 'Чи потрібна власна ліцензія при роботі на флот?', a: 'Ні, ліцензію має той, хто веде діяльність. Але вимоги до водія - права, медицина, психологія, несудимість - лишаються чинними.' }
    ],
    pl: [
      { q: 'Czy można jeździć w Bolt albo Uber na ukraińskim prawie jazdy?', a: 'Nie. Od 17 czerwca 2024 r. kierowca przewożący pasażerów musi mieć prawo jazdy wydane w Polsce albo w innym państwie UE lub EOG. Okres przejściowy zakończył się 17 czerwca 2025 r.' },
      { q: 'Jakie dokumenty poza prawem jazdy są wymagane?', a: 'Badania lekarskie i psychologiczne, zaświadczenie o niekaralności, legalny pobyt z prawem do pracy oraz osobista weryfikacja tożsamości u operatora aplikacji.' },
      { q: 'Ile kosztuje licencja na przewóz osób?', a: 'Orientacyjnie 700 PLN na 2-15 lat, 800 PLN na 15-30 lat i 900 PLN na 30-50 lat. Licencja taksówkowa wydawana przez gminę kosztuje około 200-300 PLN.' },
      { q: 'Czy przy pracy dla floty potrzebna jest własna licencja?', a: 'Nie, licencję posiada podmiot prowadzący działalność. Wymogi wobec kierowcy - prawo jazdy, badania, niekaralność - obowiązują niezależnie.' }
    ],
    en: [
      { q: 'Can I drive for Bolt or Uber on a Ukrainian licence?', a: 'No. Since 17 June 2024 a driver carrying passengers must hold a licence issued in Poland or another EU or EEA state. The transitional period ended on 17 June 2025.' },
      { q: 'What documents besides the licence are required?', a: 'Medical and psychological clearance, a criminal record certificate, legal residence with the right to work, and in-person identity verification by the app operator.' },
      { q: 'What does a passenger transport licence cost?', a: 'Around PLN 700 for 2-15 years, PLN 800 for 15-30 years and PLN 900 for 30-50 years. A municipal taxi licence is cheaper at roughly PLN 200-300.' },
      { q: 'Do I need my own licence when working for a fleet?', a: 'No - the licence belongs to whoever runs the business. The driver requirements, from the licence to medicals and criminal record, still apply to you.' }
    ],
    tr: [
      { q: 'Türk ya da Ukrayna ehliyetiyle Bolt veya Uber\'de çalışılır mı?', a: 'Hayır. 17 Haziran 2024\'ten beri yolcu taşıyan sürücünün Polonya ya da başka bir AB/AEA ülkesinde verilmiş ehliyeti olmalıdır. Geçiş dönemi 17 Haziran 2025\'te bitti.' },
      { q: 'Ehliyet dışında hangi belgeler gerekiyor?', a: 'Sağlık ve psikolojik rapor, adli sicil belgesi, çalışma hakkı veren yasal ikamet ve uygulama operatöründe yüz yüze kimlik doğrulaması.' },
      { q: 'Yolcu taşıma lisansı ne kadar?', a: 'Yaklaşık 2-15 yıl için 700 PLN, 15-30 yıl için 800 PLN, 30-50 yıl için 900 PLN. Gminanın verdiği taksi lisansı daha ucuzdur: yaklaşık 200-300 PLN.' },
      { q: 'Filoda çalışırken kendi lisansım gerekir mi?', a: 'Hayır; lisans faaliyeti yürüten kişiye aittir. Ancak ehliyet, sağlık raporu ve adli sicil gibi sürücü koşulları sizi bağlamaya devam eder.' }
    ]
  },

  'zaproszenie-dlya-inostranca-v-polshu-2026': {
    ru: [
      { q: 'Кто может пригласить иностранца в Польшу?', a: 'Гражданин Польши или ЕС, проживающий в Польше, иностранец с легальным непрерывным пребыванием не менее 5 лет либо с картой сталего побыту или статусом резидента ЕС, а также юридическое лицо с местонахождением в Польше.' },
      { q: 'Сколько стоит и сколько действует приглашение?', a: 'Opłata skarbowa - 27 PLN за wpis do ewidencji. Срок действия указывает приглашающий, но он не может превышать 1 год.' },
      { q: 'Гарантирует ли приглашение получение визы?', a: 'Нет. Решение принимает консул, оценивая цель поездки, средства, связи со страной проживания и историю поездок. Приглашение - лишь один из документов.' },
      { q: 'Какие обязательства берёт на себя приглашающий?', a: 'Покрытие расходов на пребывание, на обратную дорогу и на лечение. Если государство понесло такие расходы, оно вправе взыскать их с приглашающего.' }
    ],
    uk: [
      { q: 'Хто може запросити іноземця до Польщі?', a: 'Громадянин Польщі або ЄС, який проживає в Польщі, іноземець із легальним безперервним перебуванням не менше 5 років або з картою сталего побиту чи статусом резидента ЄС, а також юридична особа з місцезнаходженням у Польщі.' },
      { q: 'Скільки коштує і скільки діє запрошення?', a: 'Opłata skarbowa - 27 PLN за wpis do ewidencji. Строк дії вказує запрошувач, але він не може перевищувати 1 рік.' },
      { q: 'Чи гарантує запрошення отримання візи?', a: 'Ні. Рішення ухвалює консул, оцінюючи мету поїздки, кошти, зв\'язки з країною проживання та історію поїздок. Запрошення - лише один з документів.' },
      { q: 'Які зобов\'язання бере на себе запрошувач?', a: 'Покриття витрат на перебування, на зворотну дорогу і на лікування. Якщо держава понесла такі витрати, вона вправі стягнути їх із запрошувача.' }
    ],
    pl: [
      { q: 'Kto może zaprosić cudzoziemca do Polski?', a: 'Obywatel polski albo obywatel UE zamieszkujący w Polsce, cudzoziemiec z legalnym nieprzerwanym pobytem co najmniej 5 lat albo z kartą stałego pobytu lub statusem rezydenta UE, a także osoba prawna z siedzibą w Polsce.' },
      { q: 'Ile kosztuje i jak długo ważne jest zaproszenie?', a: 'Opłata skarbowa wynosi 27 PLN za wpis do ewidencji. Okres ważności wskazuje zapraszający, przy czym nie może przekroczyć roku.' },
      { q: 'Czy zaproszenie gwarantuje wizę?', a: 'Nie. Decyzję podejmuje konsul, oceniając cel podróży, środki, więzi z państwem zamieszkania i historię wyjazdów. Zaproszenie jest jednym z dokumentów.' },
      { q: 'Jakie zobowiązania przyjmuje zapraszający?', a: 'Pokrycie kosztów pobytu, podróży powrotnej oraz leczenia. Poniesione przez państwo koszty podlegają zwrotowi przez zapraszającego.' }
    ],
    en: [
      { q: 'Who can invite a foreigner to Poland?', a: 'A Polish or EU citizen residing in Poland, a foreigner with at least five years of legal uninterrupted residence or holding a permanent residence card or EU long-term resident status, and a legal person with its seat in Poland.' },
      { q: 'What does an invitation cost and how long is it valid?', a: 'Stamp duty is PLN 27 for the register entry. The host sets the validity period, which cannot exceed one year.' },
      { q: 'Does an invitation guarantee a visa?', a: 'No. The consul decides, weighing the purpose of travel, funds, ties to the country of residence and travel history. The invitation is one document among several.' },
      { q: 'What does the host commit to?', a: 'Covering the costs of stay, the return journey and medical treatment. Costs borne by the state can be recovered from the host.' }
    ],
    tr: [
      { q: 'Polonya\'ya kimler yabancı davet edebilir?', a: 'Polonya\'da ikamet eden Polonya ya da AB vatandaşı, en az beş yıl yasal ve kesintisiz ikamet eden ya da karta stałego pobytu veya AB mukim statüsü olan yabancı ve merkezi Polonya\'da bulunan tüzel kişi.' },
      { q: 'Davetiye ne kadar tutuyor ve ne kadar geçerli?', a: 'Sicile kayıt için opłata skarbowa 27 PLN\'dir. Geçerlilik süresini davet eden belirtir ve bir yılı aşamaz.' },
      { q: 'Davetiye vizeyi garanti eder mi?', a: 'Hayır. Kararı konsolos verir; seyahatin amacını, kaynakları, ikamet ülkesiyle bağları ve seyahat geçmişini değerlendirir. Davetiye dosyadaki belgelerden yalnızca biridir.' },
      { q: 'Davet eden neyi taahhüt eder?', a: 'İkamet, dönüş yolculuğu ve tedavi masraflarını. Devletin yaptığı masraflar davet edenden tahsil edilebilir.' }
    ]
  }
};
