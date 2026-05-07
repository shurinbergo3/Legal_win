import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { REVIEW_COUNT, REVIEW_RATING_VALUE } from '@/lib/seo';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'LegalWin — иммиграционные консультанты · Варшава';

// Source Serif 4 has full Cyrillic + matching italic. Without a desktop
// User-Agent, Google Fonts serves a single unsegmented TTF per weight that
// covers Latin + Latin-ext + Cyrillic — exactly what Satori needs.
async function loadFont(weight: number, italic = false): Promise<ArrayBuffer> {
  const axes = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=Source+Serif+4:${axes}&display=swap`;
  const css = await fetch(cssUrl).then((r) => r.text());
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('truetype'\)/);
  if (!match) throw new Error(`Font URL not found (${weight} ${italic ? 'italic' : 'normal'})`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function OpengraphImage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  const titleLine1 = t('titleLine1');
  const titleLine2 = t('titleLine2');
  const eyebrow = t('eyebrow');
  const reviewLabel = t('socialProofLabel');

  // Satori chokes on webp data URLs in current next/og — use the pre-baked
  // jpeg copy generated from staruwka.webp (see scripts/build-og-bg.ts).
  const [bg, fontRegular, fontBold, fontItalic] = await Promise.all([
    readFile(join(process.cwd(), 'public/hero/staruwka-og.jpg')),
    loadFont(400),
    loadFont(700),
    loadFont(700, true)
  ]);

  const bgDataUrl = `data:image/jpeg;base64,${bg.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: '"Source Serif 4"',
          color: '#F5F2EA',
          backgroundColor: '#05091a'
        }}
      >
        <img
          src={bgDataUrl}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            backgroundImage:
              'linear-gradient(180deg, rgba(5,9,26,0.85), rgba(5,9,26,0.55) 38%, rgba(5,9,26,0.85) 72%, rgba(5,9,26,0.97))'
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 1200,
            height: 630,
            padding: '56px 72px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 64,
                  height: 64,
                  marginRight: 18,
                  borderRadius: 12,
                  border: '1.5px solid rgba(212,166,71,0.7)',
                  backgroundColor: '#0e1a36',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 32,
                  color: '#E1BC5E'
                }}
              >
                LW
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 26,
                    letterSpacing: 4,
                    color: '#F5F2EA'
                  }}
                >
                  LEGALWIN
                </div>
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: 4,
                    color: 'rgba(212,166,71,0.85)',
                    marginTop: 4
                  }}
                >
                  WARSZAWA · POLSKA
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: 16,
                letterSpacing: 4,
                color: 'rgba(212,166,71,0.9)',
                textTransform: 'uppercase'
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 76,
                lineHeight: 1.06,
                fontWeight: 700,
                color: '#F5F2EA'
              }}
            >
              {titleLine1}
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 64,
                lineHeight: 1.1,
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#E1BC5E',
                marginTop: 6
              }}
            >
              {titleLine2}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '14px 22px',
                borderRadius: 999,
                border: '1px solid rgba(212,166,71,0.45)',
                backgroundColor: 'rgba(5,9,26,0.55)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginRight: 14 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#E1BC5E"
                    style={{ marginRight: i < 4 ? 2 : 0 }}
                  >
                    <path d="M12 2l2.9 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.5 21.7l1.8-7.3L1.6 9.5l7.5-.6L12 2z" />
                  </svg>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#F5F2EA',
                  marginRight: 14
                }}
              >
                {REVIEW_RATING_VALUE}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 14,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'rgba(245,242,234,0.8)'
                }}
              >
                / {REVIEW_COUNT} {reviewLabel}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                color: 'rgba(245,242,234,0.85)'
              }}
            >
              legalwin.pl
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Source Serif 4', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Source Serif 4', data: fontBold, weight: 700, style: 'normal' },
        { name: 'Source Serif 4', data: fontItalic, weight: 700, style: 'italic' }
      ]
    }
  );
}
