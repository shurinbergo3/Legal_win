import type { LegalSection } from '@/components/LegalPage';

type Locale = 'ru' | 'pl' | 'en' | 'tr' | 'uk';

type LegalDoc = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

/* ──────────── PRIVACY POLICY ──────────── */

export const PRIVACY: Partial<Record<Locale, LegalDoc>> = {
  ru: {
    eyebrow: '/ право',
    title: 'Политика конфиденциальности',
    intro:
      'Настоящая политика описывает, как LegalWin обрабатывает ваши персональные данные в соответствии с GDPR, польским Законом о защите персональных данных (RODO) и Prawem komunikacji elektronicznej (PKE 2024).',
    sections: [
      {
        id: 'administrator',
        title: 'Администратор данных',
        blocks: [
          {
            dl: [
              { term: 'Название', def: 'LegalWin sp. z o.o.' },
              { term: 'Адрес', def: 'ul. Świętokrzyska 30/63, 00-116 Warszawa, Polska' },
              { term: 'Email', def: 'legalwin.warszawa@gmail.com' },
              { term: 'Телефон', def: '+48 506 55 07 21' }
            ]
          },
          'Контактным лицом по вопросам персональных данных является администратор. Инспектор по защите данных (DPO) не назначен - для нашей деятельности это не обязательно по ст. 37 GDPR.'
        ]
      },
      {
        id: 'cele',
        title: 'Цели и правовые основания',
        blocks: [
          'Мы обрабатываем ваши данные исключительно для законных целей, перечисленных ниже:',
          {
            dl: [
              { term: 'Art. 6(1)(a) GDPR', def: 'Согласие - обработка заявок через форму или AI-чат, отправка ответа специалиста.' },
              { term: 'Art. 6(1)(b) GDPR', def: 'Заключение и исполнение договора об оказании юридических услуг.' },
              { term: 'Art. 6(1)(c) GDPR', def: 'Исполнение правовых обязательств - ведение бухгалтерской и налоговой документации.' },
              { term: 'Art. 6(1)(f) GDPR', def: 'Законный интерес - защита фирмы от мошенничества, обеспечение безопасности сайта.' }
            ]
          }
        ]
      },
      {
        id: 'kategorie',
        title: 'Категории получателей данных',
        blocks: [
          'Ваши данные могут быть переданы следующим обработчикам, действующим по нашему поручению:',
          {
            list: [
              'Бухгалтерская фирма-партнёр (Польша) - для ведения учёта, ст. 28 GDPR.',
              'Хостинг-провайдер Vercel Inc. (США) - стандартные договорные положения ЕС, IDTA.',
              'Telegram Messenger LLP (UK/EU) - отправка уведомлений о заявках в наш закрытый чат.',
              'Groq Inc. (США) - обработка обращений в AI-чате, не сохраняет содержание (zero-retention).',
              'Польские государственные органы - только при официальном законном запросе.'
            ]
          }
        ]
      },
      {
        id: 'okres',
        title: 'Срок хранения',
        blocks: [
          {
            dl: [
              { term: 'Заявки и переписка', def: 'до 24 месяцев с момента последнего контакта или до отзыва согласия.' },
              { term: 'Договоры и счета', def: '5 лет от конца налогового года (ст. 86 § 1 Ordynacja podatkowa).' },
              { term: 'Конфиденциальная переписка по делам', def: '10 лет с момента последнего контакта по делу.' },
              { term: 'Чаты с AI-ботом', def: 'не сохраняются на наших серверах; передача в Telegram при явном согласии.' }
            ]
          }
        ]
      },
      {
        id: 'prawa',
        title: 'Ваши права',
        blocks: [
          'По GDPR и польскому RODO вам принадлежат следующие права:',
          {
            list: [
              'Право доступа к своим данным (ст. 15 GDPR).',
              'Право на исправление неточных данных (ст. 16 GDPR).',
              'Право на удаление - «право быть забытым» (ст. 17 GDPR).',
              'Право на ограничение обработки (ст. 18 GDPR).',
              'Право на переносимость данных (ст. 20 GDPR).',
              'Право возражать против обработки на основании законного интереса (ст. 21 GDPR).',
              'Право отозвать согласие в любой момент - без последствий для обработки до отзыва.',
              'Право подать жалобу в надзорный орган - Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
            ]
          },
          'Для реализации любого из прав достаточно письма на legalwin.warszawa@gmail.com - мы ответим в течение 30 дней.'
        ]
      },
      {
        id: 'transfer',
        title: 'Передача в третьи страны',
        blocks: [
          'Часть наших обработчиков (Vercel, Groq) находится в США. Передача осуществляется на основании Standard Contractual Clauses (Decyzja KE 2021/914) и оценки Transfer Impact Assessment. Мы не передаём данные в страны без adekwatności защиты.'
        ]
      },
      {
        id: 'profilowanie',
        title: 'Автоматизированное принятие решений',
        blocks: [
          'Мы не принимаем юридически значимых решений на основании автоматической обработки. AI-чат - справочный инструмент, его ответы не заменяют консультацию специалиста и не являются юридическим заключением.'
        ]
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          'Подробнее об используемых cookies, способах изменения настроек и категориях - см. отдельную страницу Политика cookies.'
        ]
      },
      {
        id: 'zmiany',
        title: 'Изменения политики',
        blocks: [
          'Мы оставляем за собой право обновлять данную политику. Дата последнего обновления указана вверху страницы. Существенные изменения дополнительно сообщаются в баннере на сайте.'
        ]
      }
    ]
  },
  pl: {
    eyebrow: '/ prawne',
    title: 'Polityka prywatności',
    intro:
      'Niniejsza polityka opisuje, jak LegalWin przetwarza Twoje dane osobowe zgodnie z RODO, ustawą o ochronie danych osobowych i Prawem komunikacji elektronicznej (PKE 2024).',
    sections: [
      {
        id: 'administrator',
        title: 'Administrator danych',
        blocks: [
          {
            dl: [
              { term: 'Nazwa', def: 'LegalWin sp. z o.o.' },
              { term: 'Adres', def: 'ul. Świętokrzyska 30/63, 00-116 Warszawa, Polska' },
              { term: 'Email', def: 'legalwin.warszawa@gmail.com' },
              { term: 'Telefon', def: '+48 506 55 07 21' }
            ]
          },
          'Osobą do kontaktu w sprawach danych osobowych jest administrator. Inspektor Ochrony Danych (IOD) nie został wyznaczony - dla naszej działalności nie jest to obowiązkowe (art. 37 RODO).'
        ]
      },
      {
        id: 'cele',
        title: 'Cele i podstawy prawne',
        blocks: [
          'Przetwarzamy Twoje dane wyłącznie w zgodnych z prawem celach wymienionych poniżej:',
          {
            dl: [
              { term: 'Art. 6 ust. 1 lit. a RODO', def: 'Zgoda - obsługa zgłoszeń z formularza lub AI-czatu, przesłanie odpowiedzi specjalisty.' },
              { term: 'Art. 6 ust. 1 lit. b RODO', def: 'Zawarcie i wykonanie umowy o świadczenie usług prawnych.' },
              { term: 'Art. 6 ust. 1 lit. c RODO', def: 'Wypełnienie obowiązków prawnych - prowadzenie dokumentacji księgowej i podatkowej.' },
              { term: 'Art. 6 ust. 1 lit. f RODO', def: 'Prawnie uzasadniony interes - ochrona kancelarii przed nadużyciami, bezpieczeństwo serwisu.' }
            ]
          }
        ]
      },
      {
        id: 'kategorie',
        title: 'Kategorie odbiorców',
        blocks: [
          'Twoje dane mogą zostać udostępnione następującym podmiotom przetwarzającym działającym na nasze zlecenie:',
          {
            list: [
              'Kancelaria księgowa-partner (Polska) - w celu prowadzenia księgowości, art. 28 RODO.',
              'Hostingodawca Vercel Inc. (USA) - Standardowe Klauzule Umowne KE, IDTA.',
              'Telegram Messenger LLP (UK/EU) - wysyłka powiadomień o zgłoszeniach na nasz zamknięty kanał.',
              'Groq Inc. (USA) - przetwarzanie zapytań w AI-czacie, brak retencji treści.',
              'Polskie organy państwowe - wyłącznie na podstawie zgodnego z prawem wniosku.'
            ]
          }
        ]
      },
      {
        id: 'okres',
        title: 'Okres przechowywania',
        blocks: [
          {
            dl: [
              { term: 'Zgłoszenia i korespondencja', def: 'do 24 miesięcy od ostatniego kontaktu lub do cofnięcia zgody.' },
              { term: 'Umowy i faktury', def: '5 lat od końca roku podatkowego (art. 86 § 1 Ordynacji podatkowej).' },
              { term: 'Poufna korespondencja sprawowa', def: '10 lat od ostatniego kontaktu w sprawie.' },
              { term: 'Czaty z AI-botem', def: 'nie są zapisywane na naszych serwerach; przekazanie do Telegrama wyłącznie za wyraźną zgodą.' }
            ]
          }
        ]
      },
      {
        id: 'prawa',
        title: 'Twoje prawa',
        blocks: [
          'Zgodnie z RODO przysługują Ci następujące prawa:',
          {
            list: [
              'Prawo dostępu do swoich danych (art. 15 RODO).',
              'Prawo do sprostowania (art. 16 RODO).',
              'Prawo do usunięcia - „prawo do bycia zapomnianym" (art. 17 RODO).',
              'Prawo do ograniczenia przetwarzania (art. 18 RODO).',
              'Prawo do przenoszenia danych (art. 20 RODO).',
              'Prawo sprzeciwu wobec przetwarzania na podstawie prawnie uzasadnionego interesu (art. 21 RODO).',
              'Prawo do cofnięcia zgody w dowolnym momencie - bez wpływu na zgodność z prawem przetwarzania przed cofnięciem.',
              'Prawo wniesienia skargi do organu nadzorczego - Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
            ]
          },
          'Aby skorzystać z któregokolwiek z praw, wystarczy wiadomość na legalwin.warszawa@gmail.com - odpowiemy w ciągu 30 dni.'
        ]
      },
      {
        id: 'transfer',
        title: 'Przekazywanie do państw trzecich',
        blocks: [
          'Część naszych podmiotów przetwarzających (Vercel, Groq) ma siedzibę w USA. Przekazywanie odbywa się na podstawie Standardowych Klauzul Umownych (Decyzja KE 2021/914) i Transfer Impact Assessment. Nie przekazujemy danych do państw bez decyzji o adekwatności ochrony.'
        ]
      },
      {
        id: 'profilowanie',
        title: 'Zautomatyzowane podejmowanie decyzji',
        blocks: [
          'Nie podejmujemy decyzji wywołujących skutki prawne na podstawie wyłącznie zautomatyzowanego przetwarzania. AI-czat to narzędzie pomocnicze - jego odpowiedzi nie zastępują konsultacji ze specjalistą ani nie stanowią opinii prawnej.'
        ]
      },
      {
        id: 'cookies',
        title: 'Pliki cookies',
        blocks: [
          'Szczegóły dotyczące używanych cookies, sposobu zmiany ustawień i kategorii - zobacz odrębną stronę Polityka cookies.'
        ]
      },
      {
        id: 'zmiany',
        title: 'Zmiany polityki',
        blocks: [
          'Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. Data ostatniej aktualizacji wskazana jest u góry strony. O istotnych zmianach informujemy dodatkowo banerem w serwisie.'
        ]
      }
    ]
  },
  en: {
    eyebrow: '/ legal',
    title: 'Privacy Policy',
    intro:
      'This policy describes how LegalWin processes your personal data under the GDPR, the Polish Data Protection Act (RODO) and the Polish Electronic Communications Law (PKE 2024).',
    sections: [
      {
        id: 'administrator',
        title: 'Data controller',
        blocks: [
          {
            dl: [
              { term: 'Name', def: 'LegalWin sp. z o.o.' },
              { term: 'Address', def: 'ul. Świętokrzyska 30/63, 00-116 Warszawa, Poland' },
              { term: 'Email', def: 'legalwin.warszawa@gmail.com' },
              { term: 'Phone', def: '+48 506 55 07 21' }
            ]
          },
          'Contact for data protection matters is the controller. A Data Protection Officer (DPO) has not been appointed - not required for our activity under Art. 37 GDPR.'
        ]
      },
      {
        id: 'cele',
        title: 'Purposes and legal bases',
        blocks: [
          'We process your data only for the lawful purposes listed below:',
          {
            dl: [
              { term: 'Art. 6(1)(a) GDPR', def: 'Consent - handling form and AI-chat enquiries, sending the specialist\'s reply.' },
              { term: 'Art. 6(1)(b) GDPR', def: 'Performance of a legal-services contract.' },
              { term: 'Art. 6(1)(c) GDPR', def: 'Compliance with legal obligations - accounting and tax records.' },
              { term: 'Art. 6(1)(f) GDPR', def: 'Legitimate interests - fraud prevention, site security.' }
            ]
          }
        ]
      },
      {
        id: 'kategorie',
        title: 'Categories of recipients',
        blocks: [
          'Your data may be shared with the following processors acting on our behalf:',
          {
            list: [
              'Partner accounting firm (Poland) - bookkeeping, Art. 28 GDPR.',
              'Hosting provider Vercel Inc. (USA) - EU Standard Contractual Clauses, IDTA.',
              'Telegram Messenger LLP (UK/EU) - enquiry notifications to our private channel.',
              'Groq Inc. (USA) - AI-chat processing, zero retention of content.',
              'Polish public authorities - only on lawful request.'
            ]
          }
        ]
      },
      {
        id: 'okres',
        title: 'Retention period',
        blocks: [
          {
            dl: [
              { term: 'Enquiries & messages', def: 'up to 24 months from last contact or until consent is withdrawn.' },
              { term: 'Contracts & invoices', def: '5 years from end of tax year (Art. 86 §1 Polish Tax Ordinance).' },
              { term: 'Confidential case correspondence', def: '10 years from the last case contact.' },
              { term: 'AI-bot chats', def: 'not stored on our servers; forwarded to Telegram only with explicit consent.' }
            ]
          }
        ]
      },
      {
        id: 'prawa',
        title: 'Your rights',
        blocks: [
          'Under the GDPR you have the following rights:',
          {
            list: [
              'Right of access (Art. 15 GDPR).',
              'Right to rectification (Art. 16 GDPR).',
              'Right to erasure - "right to be forgotten" (Art. 17 GDPR).',
              'Right to restriction of processing (Art. 18 GDPR).',
              'Right to data portability (Art. 20 GDPR).',
              'Right to object to processing based on legitimate interest (Art. 21 GDPR).',
              'Right to withdraw consent at any time - without affecting lawfulness of processing before withdrawal.',
              'Right to lodge a complaint with the supervisory authority - Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
            ]
          },
          'To exercise any right, email legalwin.warszawa@gmail.com - we reply within 30 days.'
        ]
      },
      {
        id: 'transfer',
        title: 'Transfers outside the EEA',
        blocks: [
          'Some of our processors (Vercel, Groq) are based in the USA. Transfers rely on EU Standard Contractual Clauses (Decision 2021/914) and Transfer Impact Assessments. We do not transfer data to countries without adequate protection.'
        ]
      },
      {
        id: 'profilowanie',
        title: 'Automated decision-making',
        blocks: [
          'We do not take decisions producing legal effects based solely on automated processing. The AI chat is a helper tool - its answers are not legal advice and don\'t substitute a consultation.'
        ]
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          'For details on the cookies we use, how to change settings and the categories - see the separate Cookie Policy page.'
        ]
      },
      {
        id: 'zmiany',
        title: 'Policy changes',
        blocks: [
          'We may update this policy. The last-updated date is shown at the top. Material changes are also announced via a site banner.'
        ]
      }
    ]
  },
  tr: {
    eyebrow: '/ hukuki',
    title: 'Gizlilik Politikası',
    intro:
      'Bu politika, LegalWin\'in kişisel verilerinizi GDPR, Polonya Kişisel Verilerin Korunması Kanunu (RODO) ve Elektronik Haberleşme Kanunu (PKE 2024) uyarınca nasıl işlediğini açıklar.',
    sections: [
      {
        id: 'administrator',
        title: 'Veri sorumlusu',
        blocks: [
          {
            dl: [
              { term: 'Unvan', def: 'LegalWin sp. z o.o.' },
              { term: 'Adres', def: 'ul. Świętokrzyska 30/63, 00-116 Warszawa, Polonya' },
              { term: 'E-posta', def: 'legalwin.warszawa@gmail.com' },
              { term: 'Telefon', def: '+48 506 55 07 21' }
            ]
          },
          'Kişisel veri konularında iletişim noktası, veri sorumlusudur. Veri Koruma Görevlisi (DPO) atanmamıştır - GDPR Madde 37 kapsamında faaliyetlerimiz için zorunlu değildir.'
        ]
      },
      {
        id: 'cele',
        title: 'Amaçlar ve hukuki dayanaklar',
        blocks: [
          'Verilerinizi yalnızca aşağıda sıralanan hukuka uygun amaçlarla işliyoruz:',
          {
            dl: [
              { term: 'GDPR Madde 6(1)(a)', def: 'Açık rıza - form veya AI sohbet üzerinden gelen başvurunun ele alınması ve uzman yanıtının iletilmesi.' },
              { term: 'GDPR Madde 6(1)(b)', def: 'Hukuki hizmet sözleşmesinin kurulması ve ifası.' },
              { term: 'GDPR Madde 6(1)(c)', def: 'Yasal yükümlülüklerin yerine getirilmesi - muhasebe ve vergi kayıtlarının tutulması.' },
              { term: 'GDPR Madde 6(1)(f)', def: 'Meşru menfaat - büromuzun dolandırıcılığa karşı korunması, site güvenliği.' }
            ]
          }
        ]
      },
      {
        id: 'kategorie',
        title: 'Veri alıcısı kategorileri',
        blocks: [
          'Verileriniz, adımıza hareket eden aşağıdaki veri işleyenlerle paylaşılabilir:',
          {
            list: [
              'Partner muhasebe firması (Polonya) - defter tutma, GDPR Madde 28.',
              'Hosting sağlayıcı Vercel Inc. (ABD) - AB Standart Sözleşme Maddeleri, IDTA.',
              'Telegram Messenger LLP (UK/AB) - başvuru bildirimlerinin iç kanalımıza iletilmesi.',
              'Groq Inc. (ABD) - AI sohbet işlemleri, içerik saklanmaz (zero-retention).',
              'Polonya kamu kurumları - yalnızca hukuka uygun resmi talep üzerine.'
            ]
          }
        ]
      },
      {
        id: 'okres',
        title: 'Saklama süresi',
        blocks: [
          {
            dl: [
              { term: 'Başvurular ve yazışmalar', def: 'son temas tarihinden itibaren 24 aya kadar veya rızanın geri çekilmesine kadar.' },
              { term: 'Sözleşmeler ve faturalar', def: 'vergi yılı sonundan itibaren 5 yıl (Polonya Vergi Usul Kanunu Madde 86 § 1).' },
              { term: 'Gizli dosya yazışmaları', def: 'son dosya temasından itibaren 10 yıl.' },
              { term: 'AI sohbetleri', def: 'sunucularımızda saklanmaz; yalnızca açık rıza ile Telegram\'a iletilir.' }
            ]
          }
        ]
      },
      {
        id: 'prawa',
        title: 'Haklarınız',
        blocks: [
          'GDPR ve Polonya RODO kapsamında aşağıdaki haklara sahipsiniz:',
          {
            list: [
              'Verilere erişim hakkı (GDPR Madde 15).',
              'Hatalı verilerin düzeltilmesi hakkı (GDPR Madde 16).',
              'Silme hakkı - "unutulma hakkı" (GDPR Madde 17).',
              'İşlemenin kısıtlanması hakkı (GDPR Madde 18).',
              'Veri taşınabilirliği hakkı (GDPR Madde 20).',
              'Meşru menfaate dayalı işlemeye itiraz hakkı (GDPR Madde 21).',
              'Açık rızayı her zaman geri çekme hakkı - geri çekme öncesi işlemenin hukuka uygunluğunu etkilemez.',
              'Denetim makamına şikayet hakkı - Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
            ]
          },
          'Haklarınızdan herhangi birini kullanmak için legalwin.warszawa@gmail.com adresine yazmanız yeterlidir - 30 gün içinde yanıt veriyoruz.'
        ]
      },
      {
        id: 'transfer',
        title: 'Üçüncü ülkelere veri aktarımı',
        blocks: [
          'Veri işleyenlerimizin bir kısmı (Vercel, Groq) ABD merkezlidir. Aktarım, AB Standart Sözleşme Maddeleri (Komisyon Kararı 2021/914) ve Aktarım Etki Değerlendirmesi temelinde yapılır. Yeterli koruma kararı bulunmayan ülkelere veri aktarımı yapmıyoruz.'
        ]
      },
      {
        id: 'profilowanie',
        title: 'Otomatik karar verme',
        blocks: [
          'Yalnızca otomatik işlemeye dayanarak hukuki sonuç doğuran karar almıyoruz. AI sohbet yardımcı bir araçtır - yanıtları uzman danışmanlığının yerine geçmez ve hukuki görüş niteliği taşımaz.'
        ]
      },
      {
        id: 'cookies',
        title: 'Çerezler',
        blocks: [
          'Kullandığımız çerezler, ayar değişiklikleri ve kategoriler hakkında ayrıntılar için ayrı Çerez Politikası sayfasına bakın.'
        ]
      },
      {
        id: 'zmiany',
        title: 'Politika değişiklikleri',
        blocks: [
          'Bu politikayı güncelleme hakkımız saklıdır. Son güncelleme tarihi sayfanın üst kısmında belirtilir. Önemli değişiklikler ayrıca site üzerinde bir banner ile duyurulur.'
        ]
      }
    ]
  },
  uk: {
    eyebrow: '/ право',
    title: 'Політика конфіденційності',
    intro:
      'Ця політика описує, як LegalWin обробляє ваші персональні дані відповідно до GDPR, польського Закону про захист персональних даних (RODO) та Prawa komunikacji elektronicznej (PKE 2024).',
    sections: [
      {
        id: 'administrator',
        title: 'Адміністратор даних',
        blocks: [
          {
            dl: [
              { term: 'Назва', def: 'LegalWin sp. z o.o.' },
              { term: 'Адреса', def: 'ul. Świętokrzyska 30/63, 00-116 Warszawa, Polska' },
              { term: 'Email', def: 'legalwin.warszawa@gmail.com' },
              { term: 'Телефон', def: '+48 506 55 07 21' }
            ]
          },
          'Контактною особою з питань персональних даних є адміністратор. Інспектора із захисту даних (DPO) не призначено — для нашої діяльності це не обов’язково за ст. 37 GDPR.'
        ]
      },
      {
        id: 'cele',
        title: 'Цілі та правові підстави',
        blocks: [
          'Ми обробляємо ваші дані виключно для законних цілей, перелічених нижче:',
          {
            dl: [
              { term: 'Art. 6(1)(a) GDPR', def: 'Згода — обробка заявок через форму чи AI-чат, надсилання відповіді фахівця.' },
              { term: 'Art. 6(1)(b) GDPR', def: 'Укладення та виконання договору про надання юридичних послуг.' },
              { term: 'Art. 6(1)(c) GDPR', def: 'Виконання правових обов’язків — ведення бухгалтерської та податкової документації.' },
              { term: 'Art. 6(1)(f) GDPR', def: 'Законний інтерес — захист фірми від шахрайства, забезпечення безпеки сайту.' }
            ]
          }
        ]
      },
      {
        id: 'kategorie',
        title: 'Категорії одержувачів даних',
        blocks: [
          'Ваші дані можуть бути передані таким обробникам, що діють за нашим дорученням:',
          {
            list: [
              'Партнерська бухгалтерська фірма (Польща) — для ведення обліку, ст. 28 GDPR.',
              'Хостинг-провайдер Vercel Inc. (США) — стандартні договірні положення ЄС, IDTA.',
              'Telegram Messenger LLP (UK/EU) — надсилання сповіщень про заявки в наш закритий чат.',
              'Groq Inc. (США) — обробка звернень в AI-чаті, без збереження вмісту (zero-retention).',
              'Польські державні органи — лише за офіційним законним запитом.'
            ]
          }
        ]
      },
      {
        id: 'okres',
        title: 'Термін зберігання',
        blocks: [
          {
            dl: [
              { term: 'Заявки та листування', def: 'до 24 місяців з моменту останнього контакту або до відкликання згоди.' },
              { term: 'Договори та рахунки', def: '5 років від кінця податкового року (ст. 86 § 1 Ordynacja podatkowa).' },
              { term: 'Конфіденційне листування за справами', def: '10 років з моменту останнього контакту за справою.' },
              { term: 'Чати з AI-ботом', def: 'не зберігаються на наших серверах; передача в Telegram — лише з явної згоди.' }
            ]
          }
        ]
      },
      {
        id: 'prawa',
        title: 'Ваші права',
        blocks: [
          'За GDPR і польським RODO вам належать такі права:',
          {
            list: [
              'Право доступу до своїх даних (ст. 15 GDPR).',
              'Право на виправлення неточних даних (ст. 16 GDPR).',
              'Право на видалення — «право бути забутим» (ст. 17 GDPR).',
              'Право на обмеження обробки (ст. 18 GDPR).',
              'Право на перенесення даних (ст. 20 GDPR).',
              'Право заперечувати проти обробки на підставі законного інтересу (ст. 21 GDPR).',
              'Право відкликати згоду будь-якої миті — без наслідків для обробки до моменту відкликання.',
              'Право подати скаргу до наглядового органу — Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
            ]
          },
          'Для реалізації будь-якого з прав достатньо листа на legalwin.warszawa@gmail.com — ми відповімо протягом 30 днів.'
        ]
      },
      {
        id: 'transfer',
        title: 'Передача в треті країни',
        blocks: [
          'Частина наших обробників (Vercel, Groq) перебуває у США. Передача здійснюється на підставі Standard Contractual Clauses (Decyzja KE 2021/914) і оцінки Transfer Impact Assessment. Ми не передаємо дані до країн без adekwatności (належного рівня) захисту.'
        ]
      },
      {
        id: 'profilowanie',
        title: 'Автоматизоване ухвалення рішень',
        blocks: [
          'Ми не ухвалюємо юридично значущих рішень на основі автоматичної обробки. AI-чат — довідковий інструмент, його відповіді не замінюють консультацію фахівця і не є юридичним висновком.'
        ]
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          'Докладніше про використовувані cookies, способи зміни налаштувань і категорії — див. окрему сторінку «Політика cookies».'
        ]
      },
      {
        id: 'zmiany',
        title: 'Зміни політики',
        blocks: [
          'Ми залишаємо за собою право оновлювати цю політику. Дату останнього оновлення зазначено вгорі сторінки. Про істотні зміни додатково повідомлятимемо банером на сайті.'
        ]
      }
    ]
  }
};

/* ──────────── COOKIE POLICY ──────────── */

export const COOKIES: Partial<Record<Locale, LegalDoc>> = {
  ru: {
    eyebrow: '/ право',
    title: 'Политика cookies',
    intro:
      'Cookies - небольшие текстовые файлы, которые браузер автоматически сохраняет на вашем устройстве при посещении сайта. Они нужны для работы сервиса, безопасности и улучшения удобства.',
    sections: [
      {
        id: 'administrator',
        title: 'Администратор данных',
        blocks: [
          'Администратором персональных данных, обрабатываемых через cookies, является LegalWin sp. z o.o., ul. Świętokrzyska 30/63, 00-116 Warszawa, Polska.'
        ]
      },
      {
        id: 'rodzaje',
        title: 'Категории cookies',
        blocks: [
          {
            dl: [
              { term: 'Необходимые', def: 'Сессия, выбор языка, базовая безопасность (CSRF-токен). Не требуют согласия по PKE Art. 11.' },
              { term: 'Функциональные', def: 'Запоминают ваши предпочтения - например, последний выбранный фильтр или автозаполнение формы.' },
              { term: 'Аналитические', def: 'Анонимная статистика посещений: какие страницы популярны, как пользователи перемещаются по сайту. В будущем - Google Analytics, Hotjar.' },
              { term: 'Маркетинговые', def: 'Персонализация рекламы на сторонних площадках. В будущем - Meta Pixel, Google Ads.' }
            ]
          }
        ]
      },
      {
        id: 'czas',
        title: 'Срок хранения',
        blocks: [
          {
            list: [
              'Сессионные - удаляются при закрытии браузера.',
              'Постоянные - сохраняются на устройстве до момента удаления вручную или истечения срока, заданного в файле (макс. 12 месяцев).'
            ]
          }
        ]
      },
      {
        id: 'zakres',
        title: 'Какие данные собираются',
        blocks: [
          'В рамках работы cookies могут обрабатываться следующие технические данные:',
          {
            list: [
              'IP-адрес устройства (анонимизированный для аналитики).',
              'Тип устройства, операционная система, версия браузера.',
              'Время, проведённое на сайте.',
              'Страницы, на которые вы переходили, и порядок переходов.',
              'Регион (на уровне страны), из которого происходит подключение.'
            ]
          }
        ]
      },
      {
        id: 'cofnac',
        title: 'Как изменить или отозвать согласие',
        blocks: [
          'Вы в любой момент можете изменить настройки через нашу панель «Настройки cookies» в футере сайта.',
          'Дополнительно - отключить cookies в браузере:',
          {
            list: [
              'Chrome: chrome://settings/cookies',
              'Firefox: about:preferences#privacy',
              'Safari: Настройки → Конфиденциальность → Cookies',
              'Edge: edge://settings/content/cookies'
            ]
          },
          'Отключение cookies не блокирует доступ к сайту, но может ограничить часть функциональности (например, не будут работать некоторые формы).'
        ]
      },
      {
        id: 'kontakt',
        title: 'Контакты и право жалобы',
        blocks: [
          'Вопросы по обработке данных: legalwin.warszawa@gmail.com.',
          'В случае нарушения у вас есть право подать жалобу в Prezes Urzędu Ochrony Danych Osobowych - ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
        ]
      }
    ]
  },
  pl: {
    eyebrow: '/ prawne',
    title: 'Polityka cookies',
    intro:
      'Pliki cookies to niewielkie pliki tekstowe, które przeglądarka automatycznie zapisuje na Twoim urządzeniu podczas odwiedzania strony. Służą do prawidłowego działania serwisu, zapewnienia bezpieczeństwa i zwiększenia jego efektywności.',
    sections: [
      {
        id: 'administrator',
        title: 'Administrator danych',
        blocks: [
          'Administratorem danych osobowych przetwarzanych za pośrednictwem plików cookies jest LegalWin sp. z o.o., ul. Świętokrzyska 30/63, 00-116 Warszawa, Polska.'
        ]
      },
      {
        id: 'rodzaje',
        title: 'Rodzaje wykorzystywanych plików cookies',
        blocks: [
          {
            dl: [
              { term: 'Niezbędne', def: 'Sesja, wybór języka, podstawowe bezpieczeństwo (token CSRF). Nie wymagają zgody zgodnie z PKE Art. 11.' },
              { term: 'Funkcjonalne', def: 'Zapamiętują Twoje preferencje - np. ostatnio wybrany filtr lub automatyczne uzupełnianie formularza.' },
              { term: 'Analityczne', def: 'Anonimowe statystyki odwiedzin: które strony są popularne, jak użytkownicy poruszają się po serwisie. W przyszłości - Google Analytics, Hotjar.' },
              { term: 'Marketingowe', def: 'Personalizacja reklam na zewnętrznych platformach. W przyszłości - Meta Pixel, Google Ads.' }
            ]
          }
        ]
      },
      {
        id: 'czas',
        title: 'Czas przechowywania plików cookies',
        blocks: [
          {
            list: [
              'Sesyjne - są usuwane po zamknięciu przeglądarki.',
              'Stałe - są przechowywane na urządzeniu do momentu ich ręcznego usunięcia lub wygaśnięcia określonego w samym pliku (maks. 12 miesięcy).'
            ]
          }
        ]
      },
      {
        id: 'zakres',
        title: 'Zakres gromadzonych danych',
        blocks: [
          'W ramach działania cookies mogą być zbierane następujące dane techniczne:',
          {
            list: [
              'Adres IP urządzenia (zanonimizowany dla analityki).',
              'Typ urządzenia, system operacyjny, wersja przeglądarki.',
              'Czas spędzony w serwisie.',
              'Strony, które odwiedziłeś, i kolejność przejść.',
              'Region (na poziomie kraju), z którego następuje połączenie.'
            ]
          }
        ]
      },
      {
        id: 'cofnac',
        title: 'Jak zmienić lub cofnąć zgodę',
        blocks: [
          'W każdej chwili możesz zmienić ustawienia poprzez naszą zakładkę „Ustawienia cookies" w stopce serwisu.',
          'Dodatkowo - wyłączyć cookies w ustawieniach przeglądarki:',
          {
            list: [
              'Chrome: chrome://settings/cookies',
              'Firefox: about:preferences#privacy',
              'Safari: Preferencje → Prywatność → Cookies',
              'Edge: edge://settings/content/cookies'
            ]
          },
          'Wyłączenie plików cookies nie blokuje dostępu do strony, ale może ograniczyć część funkcjonalności (np. niektóre formularze nie zadziałają).'
        ]
      },
      {
        id: 'kontakt',
        title: 'Kontakt i prawo skargi',
        blocks: [
          'Pytania dotyczące przetwarzania danych: legalwin.warszawa@gmail.com.',
          'W razie naruszenia masz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych - ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
        ]
      }
    ]
  },
  en: {
    eyebrow: '/ legal',
    title: 'Cookie Policy',
    intro:
      'Cookies are small text files automatically saved by your browser on your device when you visit a website. They are used for the correct operation of the service, security and improving usability.',
    sections: [
      {
        id: 'administrator',
        title: 'Data controller',
        blocks: [
          'The controller of personal data processed via cookies is LegalWin sp. z o.o., ul. Świętokrzyska 30/63, 00-116 Warszawa, Poland.'
        ]
      },
      {
        id: 'rodzaje',
        title: 'Categories of cookies used',
        blocks: [
          {
            dl: [
              { term: 'Necessary', def: 'Session, language preference, basic security (CSRF token). No consent needed under PKE Art. 11.' },
              { term: 'Functional', def: 'Remember your preferences - last selected filter or form autofill.' },
              { term: 'Analytics', def: 'Anonymous visit statistics: which pages are popular, how users navigate. In the future - Google Analytics, Hotjar.' },
              { term: 'Marketing', def: 'Personalised advertising on third-party platforms. In the future - Meta Pixel, Google Ads.' }
            ]
          }
        ]
      },
      {
        id: 'czas',
        title: 'Cookie lifetime',
        blocks: [
          {
            list: [
              'Session - deleted when the browser is closed.',
              'Persistent - stored on the device until manually deleted or until the expiry set in the file (max. 12 months).'
            ]
          }
        ]
      },
      {
        id: 'zakres',
        title: 'Data collected',
        blocks: [
          'Through cookies the following technical data may be processed:',
          {
            list: [
              'Device IP address (anonymised for analytics).',
              'Device type, operating system, browser version.',
              'Time spent on the site.',
              'Pages visited and navigation order.',
              'Region (country level) from which the connection is made.'
            ]
          }
        ]
      },
      {
        id: 'cofnac',
        title: 'How to change or withdraw consent',
        blocks: [
          'You can change your choices any time via our "Cookie settings" panel in the site footer.',
          'In addition you can disable cookies via your browser settings:',
          {
            list: [
              'Chrome: chrome://settings/cookies',
              'Firefox: about:preferences#privacy',
              'Safari: Preferences → Privacy → Cookies',
              'Edge: edge://settings/content/cookies'
            ]
          },
          'Disabling cookies does not block access to the site but may limit some functionality (some forms may stop working).'
        ]
      },
      {
        id: 'kontakt',
        title: 'Contact and right to complain',
        blocks: [
          'Data-protection questions: legalwin.warszawa@gmail.com.',
          'In case of a violation you may lodge a complaint with the President of the Polish Data Protection Authority - ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
        ]
      }
    ]
  },
  tr: {
    eyebrow: '/ hukuki',
    title: 'Çerez politikası',
    intro:
      'Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınızın cihazınıza otomatik olarak kaydettiği küçük metin dosyalarıdır. Hizmetin doğru çalışması, güvenlik ve kullanım kolaylığının iyileştirilmesi için kullanılır.',
    sections: [
      {
        id: 'administrator',
        title: 'Veri sorumlusu',
        blocks: [
          'Çerezler aracılığıyla işlenen kişisel verilerin sorumlusu LegalWin sp. z o.o., ul. Świętokrzyska 30/63, 00-116 Warszawa, Polonya\'dır.'
        ]
      },
      {
        id: 'rodzaje',
        title: 'Kullanılan çerez kategorileri',
        blocks: [
          {
            dl: [
              { term: 'Gerekli', def: 'Oturum, dil tercihi, temel güvenlik (CSRF token). PKE madde 11 gereği onay gerekmez.' },
              { term: 'Fonksiyonel', def: 'Tercihlerinizi hatırlar - en son seçilen filtre veya form otomatik doldurma.' },
              { term: 'Analitik', def: 'Anonim ziyaret istatistikleri: hangi sayfalar popüler, kullanıcılar nasıl gezinir. İleride - Google Analytics, Hotjar.' },
              { term: 'Pazarlama', def: 'Üçüncü taraf platformlarda kişiselleştirilmiş reklam. İleride - Meta Pixel, Google Ads.' }
            ]
          }
        ]
      },
      {
        id: 'czas',
        title: 'Çerez ömrü',
        blocks: [
          {
            list: [
              'Oturum - tarayıcı kapatıldığında silinir.',
              'Kalıcı - manuel olarak silinene veya dosyada belirlenen son kullanma tarihine kadar (en fazla 12 ay) cihazda saklanır.'
            ]
          }
        ]
      },
      {
        id: 'zakres',
        title: 'Toplanan veriler',
        blocks: [
          'Çerezler aracılığıyla aşağıdaki teknik veriler işlenebilir:',
          {
            list: [
              'Cihaz IP adresi (analitik için anonimleştirilmiş).',
              'Cihaz türü, işletim sistemi, tarayıcı sürümü.',
              'Sitede geçirilen süre.',
              'Ziyaret edilen sayfalar ve gezinme sırası.',
              'Bağlantının yapıldığı bölge (ülke düzeyi).'
            ]
          }
        ]
      },
      {
        id: 'cofnac',
        title: 'Onayı nasıl değiştirir veya geri çekersiniz',
        blocks: [
          'Sitenin alt kısmındaki "Çerez ayarları" panelinden seçimlerinizi istediğiniz zaman değiştirebilirsiniz.',
          'Ayrıca tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz:',
          {
            list: [
              'Chrome: chrome://settings/cookies',
              'Firefox: about:preferences#privacy',
              'Safari: Tercihler → Gizlilik → Çerezler',
              'Edge: edge://settings/content/cookies'
            ]
          },
          'Çerezlerin devre dışı bırakılması siteye erişimi engellemez ancak bazı işlevleri kısıtlayabilir (bazı formlar çalışmayı durdurabilir).'
        ]
      },
      {
        id: 'kontakt',
        title: 'İletişim ve şikayet hakkı',
        blocks: [
          'Veri koruma soruları: legalwin.warszawa@gmail.com.',
          'İhlal durumunda Polonya Veri Koruma Kurumu Başkanı\'na şikayette bulunabilirsiniz - ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
        ]
      }
    ]
  },
  uk: {
    eyebrow: '/ право',
    title: 'Політика cookies',
    intro:
      'Cookies — невеликі текстові файли, які браузер автоматично зберігає на вашому пристрої під час відвідування сайту. Вони потрібні для роботи сервісу, безпеки та поліпшення зручності.',
    sections: [
      {
        id: 'administrator',
        title: 'Адміністратор даних',
        blocks: [
          'Адміністратором персональних даних, що обробляються через cookies, є LegalWin sp. z o.o., ul. Świętokrzyska 30/63, 00-116 Warszawa, Polska.'
        ]
      },
      {
        id: 'rodzaje',
        title: 'Категорії cookies',
        blocks: [
          {
            dl: [
              { term: 'Необхідні', def: 'Сесія, вибір мови, базова безпека (CSRF-токен). Не потребують згоди за PKE Art. 11.' },
              { term: 'Функціональні', def: 'Запам’ятовують ваші вподобання — наприклад, останній обраний фільтр або автозаповнення форми.' },
              { term: 'Аналітичні', def: 'Анонімна статистика відвідувань: які сторінки популярні, як користувачі переміщуються сайтом. У майбутньому — Google Analytics, Hotjar.' },
              { term: 'Маркетингові', def: 'Персоналізація реклами на сторонніх майданчиках. У майбутньому — Meta Pixel, Google Ads.' }
            ]
          }
        ]
      },
      {
        id: 'czas',
        title: 'Термін зберігання',
        blocks: [
          {
            list: [
              'Сесійні — видаляються при закритті браузера.',
              'Постійні — зберігаються на пристрої до моменту видалення вручну або закінчення терміну, заданого у файлі (макс. 12 місяців).'
            ]
          }
        ]
      },
      {
        id: 'zakres',
        title: 'Які дані збираються',
        blocks: [
          'У межах роботи cookies можуть оброблятися такі технічні дані:',
          {
            list: [
              'IP-адреса пристрою (анонімізована для аналітики).',
              'Тип пристрою, операційна система, версія браузера.',
              'Час, проведений на сайті.',
              'Сторінки, на які ви переходили, і порядок переходів.',
              'Регіон (на рівні країни), з якого відбувається підключення.'
            ]
          }
        ]
      },
      {
        id: 'cofnac',
        title: 'Як змінити або відкликати згоду',
        blocks: [
          'Ви будь-якої миті можете змінити налаштування через нашу панель «Налаштування cookies» у футері сайту.',
          'Додатково — вимкнути cookies у браузері:',
          {
            list: [
              'Chrome: chrome://settings/cookies',
              'Firefox: about:preferences#privacy',
              'Safari: Налаштування → Конфіденційність → Cookies',
              'Edge: edge://settings/content/cookies'
            ]
          },
          'Вимкнення cookies не блокує доступ до сайту, але може обмежити частину функціональності (наприклад, не працюватимуть деякі форми).'
        ]
      },
      {
        id: 'kontakt',
        title: 'Контакти і право скарги',
        blocks: [
          'Питання щодо обробки даних: legalwin.warszawa@gmail.com.',
          'У разі порушення ви маєте право подати скаргу до Prezes Urzędu Ochrony Danych Osobowych — ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl/.'
        ]
      }
    ]
  }
};

export function getLegalDoc(
  doc: 'privacy' | 'cookies',
  locale: string
): LegalDoc {
  const safeLocale: Locale = (
    ['ru', 'pl', 'en', 'tr', 'uk'] as const
  ).includes(locale as Locale)
    ? (locale as Locale)
    : 'ru';
  const source = doc === 'privacy' ? PRIVACY : COOKIES;
  // Fall back to ru for locales without a translated copy (e.g. uk during Этап 0).
  // PRIVACY/COOKIES.ru is guaranteed to exist.
  return source[safeLocale] ?? (source.ru as LegalDoc);
}
