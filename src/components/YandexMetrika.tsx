'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONSENT_EVENT, loadConsent, type ConsentState } from '@/lib/cookie-consent';

const COUNTER_ID = 101710963;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export function YandexMetrika() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(loadConsent()?.choices.analytical === true);
    function onChange(e: Event) {
      const detail = (e as CustomEvent<ConsentState | null>).detail;
      const next = detail?.choices.analytical === true;
      // Unmounting the <Script> doesn't stop an already-loaded Metrika tag
      // (webvisor/clickmap keep running) — a reload is the only reliable
      // teardown when the user revokes analytics consent.
      if (!next && typeof window.ym === 'function') {
        window.location.reload();
        return;
      }
      setAllowed(next);
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

          ym(${COUNTER_ID}, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
        `}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${COUNTER_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
