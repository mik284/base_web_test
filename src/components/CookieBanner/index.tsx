import { Link } from '@umijs/max';
import React, { useEffect, useState } from 'react';

/**
 * Analytics consent. Google Analytics starts with analytics storage denied
 * (see config `headScripts`); it is only granted after the visitor accepts.
 * The choice itself is a per-browser preference, so localStorage is fine.
 */
const STORAGE_KEY = 'bp_cookie_consent';
export const OPEN_COOKIE_SETTINGS = 'bp:open-cookie-settings';

type Choice = 'granted' | 'denied';

const readChoice = (): Choice | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
};

export const openCookieSettings = () =>
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));

const CookieBanner: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readChoice() === null);
    const show = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, show);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, show);
  }, []);

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage may be unavailable; the choice still applies to this visit.
    }
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: choice });
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Cookie settings"
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-surfaceAlt shadow-soft p-5 md:p-6 text-navy">
        <p className="m-0 text-sm md:text-base leading-relaxed">
          We use analytics cookies to understand how the website is used. They
          are only set if you accept. See our{' '}
          <Link to="/cookies" className="text-electric">
            cookie notice
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => choose('granted')}
            className="min-h-[44px] px-5 rounded-full border-2 border-solid border-navy bg-navy text-white font-semibold cursor-pointer"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => choose('denied')}
            className="min-h-[44px] px-5 rounded-full border-2 border-solid border-navy/30 bg-white text-navy font-semibold cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
