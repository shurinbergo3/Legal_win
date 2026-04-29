import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { ServiceDetail } from '@/components/ServiceDetail';
import { JsonLd } from '@/components/JsonLd';
import { getService, services, serviceSlugs } from '@/lib/services';
import { routing } from '@/i18n/routing';
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

const KEYWORDS_BY_SLUG: Record<string, Record<SeoLocale, string[]>> = {
  'karta-pobytu': {
    ru: [
      'карта побыту',
      'карта побыту в Польше',
      'оформить ВНЖ в Польше',
      'Karta Czasowego Pobytu',
      'временный вид на жительство Польша',
      'юрист по карте побыту Варшава',
      'TRC Польша',
      'MOS v2.0'
    ],
    pl: [
      'karta pobytu',
      'karta czasowego pobytu',
      'TRC Polska',
      'zezwolenie na pobyt czasowy',
      'wniosek o kartę pobytu Warszawa',
      'kancelaria imigracyjna Warszawa',
      'MOS v2.0',
      'eDoręczenia'
    ],
    en: [
      'temporary residence card Poland',
      'Karta Pobytu',
      'Polish residence permit',
      'TRC Poland',
      'immigration lawyer Warsaw',
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
      'юрист ПМЖ Варшава',
      'долгосрочный резидент ЕС'
    ],
    pl: [
      'karta stałego pobytu',
      'pobyt stały w Polsce',
      'PR Polska',
      'rezydent długoterminowy UE',
      'kancelaria pobyt stały Warszawa'
    ],
    en: [
      'permanent residence Poland',
      'Karta Stałego Pobytu',
      'Polish PR',
      'EU long-term resident',
      'Polish permanent residency lawyer'
    ]
  },
  obywatelstwo: {
    ru: [
      'гражданство Польши',
      'польское гражданство',
      'натурализация Польша',
      'признание гражданина Польши',
      'польский паспорт',
      'обязательно полски язык B1',
      'юрист гражданство Варшава'
    ],
    pl: [
      'obywatelstwo polskie',
      'nadanie obywatelstwa polskiego',
      'uznanie za obywatela polskiego',
      'naturalizacja',
      'wniosek do Prezydenta RP',
      'kancelaria obywatelstwo Warszawa'
    ],
    en: [
      'Polish citizenship',
      'naturalisation Poland',
      'Polish passport',
      'citizenship by descent Poland',
      'Polish citizenship lawyer'
    ]
  },
  'ochrona-miedzynarodowa': {
    ru: [
      'международная защита Польша',
      'статус беженца Польша',
      'ochrona międzynarodowa',
      'гуманитарные основания Польша',
      'толерантное пребывание',
      'юрист по убежищу Варшава'
    ],
    pl: [
      'ochrona międzynarodowa',
      'status uchodźcy',
      'azyl w Polsce',
      'pobyt humanitarny',
      'pobyt tolerowany',
      'kancelaria uchodźcza Warszawa'
    ],
    en: [
      'international protection Poland',
      'refugee status Poland',
      'asylum Poland',
      'humanitarian residence Poland',
      'asylum lawyer Warsaw'
    ]
  },
  apelacje: {
    ru: [
      'апелляция отказ в карте побыту',
      'оспаривание отказа в ВНЖ Польша',
      'odwołanie do Szefa UdSC',
      'skarga WSA Польша',
      'юрист апелляция отказ Польша'
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
      'immigration appeals lawyer Warsaw'
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
      'юрист KRK Варшава'
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

  const safeLocale = (['ru', 'pl', 'en'] as const).includes(locale as SeoLocale)
    ? (locale as SeoLocale)
    : 'ru';

  const cityByLocale: Record<SeoLocale, string> = {
    ru: 'Варшава',
    pl: 'Warszawa',
    en: 'Warsaw'
  };

  const title = `${content.title} — ${content.subtitle} | ${ORG_LEGAL_NAME} ${cityByLocale[safeLocale]}`;
  const description = content.lead.slice(0, 160);
  const url = `/${locale}/uslugi/${slug}`;
  const keywords = KEYWORDS_BY_SLUG[slug]?.[safeLocale] ?? [];

  const ogLocaleMap: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US'
  };
  const ogLocale = ogLocaleMap[locale] ?? 'en_US';

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
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
          type: 'image/jpeg'
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

  const safeLocale = (['ru', 'pl', 'en'] as const).includes(locale as SeoLocale)
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
