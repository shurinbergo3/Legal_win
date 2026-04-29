import kartaPobytu from './karta-pobytu';
import kartaStalegoPobytu from './karta-stalego-pobytu';
import obywatelstwo from './obywatelstwo';
import ochronaMiedzynarodowa from './ochrona-miedzynarodowa';
import apelacje from './apelacje';
import kod95 from './kod-95';
import pesel from './pesel';
import meldunek from './meldunek';
import aktyStanuCywilnego from './akty-stanu-cywilnego';
import apostille from './apostille';
import wymianaPrawaJazdy from './wymiana-prawa-jazdy';
import zaswiadczeniaZusUs from './zaswiadczenia-zus-us';
import zaswiadczenieONiekaralnosci from './zaswiadczenie-o-niekaralnosci';
import tlumaczeniaPrzysiegle from './tlumaczenia-przysiegle';
import type { ServiceEntry, ServiceLocale } from './types';

export const services: Record<string, ServiceEntry> = {
  'karta-pobytu': kartaPobytu,
  'karta-stalego-pobytu': kartaStalegoPobytu,
  'obywatelstwo': obywatelstwo,
  'ochrona-miedzynarodowa': ochronaMiedzynarodowa,
  'apelacje': apelacje,
  'kod-95': kod95,
  'pesel': pesel,
  'meldunek': meldunek,
  'akty-stanu-cywilnego': aktyStanuCywilnego,
  'apostille': apostille,
  'wymiana-prawa-jazdy': wymianaPrawaJazdy,
  'zaswiadczenia-zus-us': zaswiadczeniaZusUs,
  'zaswiadczenie-o-niekaralnosci': zaswiadczenieONiekaralnosci,
  'tlumaczenia-przysiegle': tlumaczeniaPrzysiegle
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
