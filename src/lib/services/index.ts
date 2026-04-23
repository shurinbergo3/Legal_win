import kartaPobytu from './karta-pobytu';
import kartaStalegoPobytu from './karta-stalego-pobytu';
import obywatelstwo from './obywatelstwo';
import ochronaMiedzynarodowa from './ochrona-miedzynarodowa';
import apelacje from './apelacje';
import type { ServiceEntry, ServiceLocale } from './types';

export const services: Record<string, ServiceEntry> = {
  'karta-pobytu': kartaPobytu,
  'karta-stalego-pobytu': kartaStalegoPobytu,
  'obywatelstwo': obywatelstwo,
  'ochrona-miedzynarodowa': ochronaMiedzynarodowa,
  'apelacje': apelacje
};

export const serviceSlugs = Object.keys(services);

export function getService(slug: string, locale: string) {
  const entry = services[slug];
  if (!entry) return null;
  const safeLocale: ServiceLocale = (['ru', 'pl', 'en'] as const).includes(
    locale as ServiceLocale
  )
    ? (locale as ServiceLocale)
    : 'ru';
  return entry[safeLocale];
}

export type { ServiceContent } from './types';
