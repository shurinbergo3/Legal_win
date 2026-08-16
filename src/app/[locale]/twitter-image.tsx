import OpengraphImage from './opengraph-image';
import { routing } from '@/i18n/routing';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'LegalWin - immigration consultants · Warsaw, Poland';

// Same reason as opengraph-image: prerender instead of rendering on every scrape.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default OpengraphImage;
