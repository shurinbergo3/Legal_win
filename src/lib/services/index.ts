import kartaPobytu from './karta-pobytu';
import kartaStalegoPobytu from './karta-stalego-pobytu';
import obywatelstwo from './obywatelstwo';
import kartaPolaka from './karta-polaka';
import ochronaMiedzynarodowa from './ochrona-miedzynarodowa';
import apelacje from './apelacje';
import kod95 from './kod-95';
import pesel from './pesel';
import aktyStanuCywilnego from './akty-stanu-cywilnego';
import apostille from './apostille';
import wymianaPrawaJazdy from './wymiana-prawa-jazdy';
import zaswiadczeniaZusUs from './zaswiadczenia-zus-us';
import zaswiadczenieONiekaralnosci from './zaswiadczenie-o-niekaralnosci';
import tlumaczeniaPrzysiegle from './tlumaczenia-przysiegle';
import rejestracjaSpZOo from './rejestracja-sp-z-oo';
import gotoweFirmy from './gotowe-firmy';
import jdg from './jdg';
import przedstawicielstwa from './przedstawicielstwa';
import podatkiKsiegowosc from './podatki-ksiegowosc';
import likwidacjaSprzedaz from './likwidacja-sprzedaz';
import mswiaZezwolenie from './mswia-zezwolenie';
import dueDiligenceNieruchomosci from './due-diligence-nieruchomosci';
import notariuszAsysta from './notariusz-asysta';
import najemKomercyjny from './najem-komercyjny';
import zaproszenia from './zaproszenia';
import odbiorZLotniska from './odbior-z-lotniska';
import wyszukiwanieMieszkania from './wyszukiwanie-mieszkania';
import tlumaczNaWizyty from './tlumacz-na-wizyty';
import pomocWZatrudnieniu from './pomoc-w-zatrudnieniu';
import zapisDzieciDoSzkoly from './zapis-dzieci-do-szkoly';
import rejestracjaPojazdu from './rejestracja-pojazdu';
import ubezpieczenieOcAc from './ubezpieczenie-oc-ac';
import przegladTechniczny from './przeglad-techniczny';
import pracaKierowcaTaxi from './praca-kierowca-taxi';
import pracaKierowcaCiezarowka from './praca-kierowca-ciezarowka';
import kartaKierowcy from './karta-kierowcy';
import rezydentUe from './rezydent-ue';
import deklaracjeZerowe from './deklaracje-zerowe';
import kontoBankowe from './konto-bankowe';
import type { ServiceEntry, ServiceLocale } from './types';

export const services: Record<string, ServiceEntry> = {
  'karta-pobytu': kartaPobytu,
  'karta-stalego-pobytu': kartaStalegoPobytu,
  'obywatelstwo': obywatelstwo,
  'karta-polaka': kartaPolaka,
  'ochrona-miedzynarodowa': ochronaMiedzynarodowa,
  'apelacje': apelacje,
  'kod-95': kod95,
  'pesel': pesel,
  'akty-stanu-cywilnego': aktyStanuCywilnego,
  'apostille': apostille,
  'wymiana-prawa-jazdy': wymianaPrawaJazdy,
  'zaswiadczenia-zus-us': zaswiadczeniaZusUs,
  'zaswiadczenie-o-niekaralnosci': zaswiadczenieONiekaralnosci,
  'tlumaczenia-przysiegle': tlumaczeniaPrzysiegle,
  'rejestracja-sp-z-oo': rejestracjaSpZOo,
  'gotowe-firmy': gotoweFirmy,
  'jdg': jdg,
  'przedstawicielstwa': przedstawicielstwa,
  'podatki-ksiegowosc': podatkiKsiegowosc,
  'likwidacja-sprzedaz': likwidacjaSprzedaz,
  'mswia-zezwolenie': mswiaZezwolenie,
  'due-diligence-nieruchomosci': dueDiligenceNieruchomosci,
  'notariusz-asysta': notariuszAsysta,
  'najem-komercyjny': najemKomercyjny,
  'zaproszenia': zaproszenia,
  'odbior-z-lotniska': odbiorZLotniska,
  'wyszukiwanie-mieszkania': wyszukiwanieMieszkania,
  'tlumacz-na-wizyty': tlumaczNaWizyty,
  'pomoc-w-zatrudnieniu': pomocWZatrudnieniu,
  'zapis-dzieci-do-szkoly': zapisDzieciDoSzkoly,
  'rejestracja-pojazdu': rejestracjaPojazdu,
  'ubezpieczenie-oc-ac': ubezpieczenieOcAc,
  'przeglad-techniczny': przegladTechniczny,
  'praca-kierowca-taxi': pracaKierowcaTaxi,
  'praca-kierowca-ciezarowka': pracaKierowcaCiezarowka,
  'karta-kierowcy': kartaKierowcy,
  'rezydent-ue': rezydentUe,
  'deklaracje-zerowe': deklaracjeZerowe,
  'konto-bankowe': kontoBankowe
};

export const serviceSlugs = Object.keys(services);

export function getService(slug: string, locale: string) {
  const entry = services[slug];
  if (!entry) return null;
  const safeLocale: ServiceLocale = (
    ['ru', 'pl', 'en', 'tr', 'uk'] as const
  ).includes(locale as ServiceLocale)
    ? (locale as ServiceLocale)
    : 'ru';
  // Fall back to ru when a locale's content has not been translated yet
  // (currently uk during the staged rollout).
  return entry[safeLocale] ?? entry.ru ?? null;
}

export type { ServiceContent } from './types';
