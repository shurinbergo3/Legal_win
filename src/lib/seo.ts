import { INDEX_LOCALES } from '@/i18n/routing';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legalwin.pl';

export const ORG_LEGAL_NAME = 'LegalWin';
export const ORG_PHONE = '+48 506 55 07 21';
export const ORG_EMAIL = 'legalwin.warszawa@gmail.com';
export const ORG_STREET = 'ul. Świętokrzyska 30/63';
export const ORG_POSTAL = '00-116';
export const ORG_CITY = 'Warszawa';
export const ORG_REGION = 'Mazowieckie';
export const ORG_COUNTRY = 'PL';
export const ORG_LAT = 52.2376;
export const ORG_LNG = 21.0061;
export const ORG_FOUNDED = '2019';

export const OG_IMAGE_PATH = '/hero/staruwka.webp';
export const OG_IMAGE_WIDTH = 1600;
export const OG_IMAGE_HEIGHT = 900;

// Visible rating value used in the Hero badge and OG image. No reviewCount
// counterpart - we deliberately don't expose a count number on the page, so
// the organization JSON-LD no longer emits AggregateRating (Google requires
// the count to be backed by visible review data on the page).
export const REVIEW_RATING_VALUE = '4.9';

export type SeoLocale = 'ru' | 'pl' | 'en' | 'tr' | 'uk';

export function languagesAlternate(
  basePath: (locale: SeoLocale) => string
): Record<string, string> {
  const out: Record<string, string> = {};
  // INDEX_LOCALES (not routing.locales) — only advertise locales whose content
  // is actually translated. 'uk' is excluded until Этап 1 ships.
  for (const l of INDEX_LOCALES as readonly SeoLocale[]) {
    out[l] = basePath(l);
  }
  out['x-default'] = basePath('ru');
  return out;
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: ORG_LEGAL_NAME,
    legalName: 'LegalWin Kancelaria Prawna',
    url: SITE_URL,
    logo: `${SITE_URL}/logo/legal-win-gold.svg`,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    foundingDate: ORG_FOUNDED,
    priceRange: 'PLN 200-3000',
    description:
      'Polish law firm in Warsaw helping foreigners with residence permits (Karta Pobytu), Polish citizenship, business setup (Sp. z o.o., JDG), tax compliance, driving licence exchange and Code 95 since 2019.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG_STREET,
      postalCode: ORG_POSTAL,
      addressLocality: ORG_CITY,
      addressRegion: ORG_REGION,
      addressCountry: ORG_COUNTRY
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ORG_LAT,
      longitude: ORG_LNG
    },
    areaServed: [
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'AdministrativeArea', name: 'European Union' }
    ],
    availableLanguage: ['pl', 'ru', 'uk', 'en', 'tr'],
    knowsLanguage: ['pl', 'ru', 'uk', 'en', 'tr'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '19:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal services for foreigners in Poland',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Immigration',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Karta Czasowego Pobytu (TRC)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Karta Stałego Pobytu (PR)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Polish citizenship' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Karta Polaka' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International protection' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Administrative appeals' } }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Documents',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PESEL' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meldunek' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Driving licence exchange' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Code 95 (driver CPC)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apostille and legalization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sworn translations' } }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Business',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sp. z o.o. registration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jednoosobowa działalność gospodarcza (JDG)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax and accounting (CIT, VAT, PIT)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foreign branch offices' } }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Real estate',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MSWiA permit for non-EU buyers' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property due diligence' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Notary deed assistance' } }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Relocation',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Schengen and national visa invitations' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Housing search' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interpreter for office visits' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'School enrolment for children' } }
          ]
        }
      ]
    },
    sameAs: [] as string[]
  } as const;
}

export function websiteLd(locale: SeoLocale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: ORG_LEGAL_NAME,
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` }
  } as const;
}

export function breadcrumbLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  } as const;
}

export function faqPageLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a }
    }))
  } as const;
}

export function articleLd(opts: {
  title: string;
  description: string;
  url: string;
  locale: SeoLocale;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: opts.locale,
    url: opts.url,
    datePublished: opts.publishDate,
    dateModified: opts.modifiedDate ?? opts.publishDate,
    image: opts.image ?? `${SITE_URL}${OG_IMAGE_PATH}`,
    keywords: opts.keywords ?? [],
    ...(opts.articleSection ? { articleSection: opts.articleSection } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    author: {
      '@type': 'Organization',
      name: opts.author ?? ORG_LEGAL_NAME,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: ORG_LEGAL_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo/legal-win-gold.svg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url
    }
  } as const;
}

export function blogLd(opts: {
  url: string;
  name: string;
  description: string;
  locale: SeoLocale;
  posts: { slug: string; title: string; description: string; publishDate: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${opts.url}#blog`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: opts.locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: opts.posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      url: `${SITE_URL}/${opts.locale}/blog/${p.slug}`,
      datePublished: p.publishDate,
      inLanguage: opts.locale
    }))
  } as const;
}

export function serviceLd(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  locale: SeoLocale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? 'Legal services',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Poland' },
    url: opts.url,
    inLanguage: opts.locale,
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'foreigners in Poland'
    }
  } as const;
}
