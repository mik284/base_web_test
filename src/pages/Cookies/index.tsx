import React from 'react';

import { openCookieSettings } from '@/components/CookieBanner';
import { Container, HERO_H1, HeroSection } from '@/components/Page';
import SEO from '@/components/SEO';
import { SITE } from '@/constants/site';

/* Factual description of the cookies this website sets. Pending Legal review. */

const CookiesPage: React.FC = () => (
  <>
    <SEO
      title="Cookie Notice | Basepoint"
      description="How the Basepoint website uses cookies and how to change your analytics cookie settings."
      canonical="/cookies"
    />
    <HeroSection>
      <Container narrow>
        <h1 className={HERO_H1}>Cookie notice</h1>
        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="m-0 mb-3 text-xl font-bold">Analytics cookies</h2>
            <p className="m-0 text-navy/80">
              With your permission, we use Google Analytics to understand how
              visitors use this website, such as which pages are viewed. These
              cookies are only set after you accept analytics cookies. If you
              decline, analytics cookies are not set.
            </p>
          </section>
          <section>
            <h2 className="m-0 mb-3 text-xl font-bold">Your choice</h2>
            <p className="m-0 text-navy/80">
              Your cookie choice is remembered in your browser so that we do not
              ask you on every page. You can change it at any time.
            </p>
            <button
              type="button"
              onClick={openCookieSettings}
              className="mt-4 min-h-[44px] px-5 rounded-full border-2 border-solid border-navy bg-white text-navy font-semibold cursor-pointer font-sans"
            >
              Change cookie settings
            </button>
          </section>
          <section>
            <h2 className="m-0 mb-3 text-xl font-bold">Questions</h2>
            <p className="m-0 text-navy/80">
              Contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </section>
        </div>
      </Container>
    </HeroSection>
  </>
);

export default CookiesPage;
