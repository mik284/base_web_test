import React from 'react';

import { ButtonLink, Container, HERO_H1, HeroSection } from '@/components/Page';
import SEO from '@/components/SEO';

const NotFoundPage: React.FC = () => (
  <>
    <SEO
      title="Page Not Found | Basepoint"
      description="The page you are looking for is not available."
      canonical="/404"
      noindex
    />
    <HeroSection>
      <Container narrow>
        <p className="m-0 text-sm font-semibold uppercase tracking-widest text-navy/80">
          Error 404
        </p>
        <h1 className={`${HERO_H1} mt-4`}>We can&apos;t find that page.</h1>
        <p className="m-0 mt-6 text-base md:text-lg leading-relaxed text-navy/80">
          The page may have moved or is not available. Start from the homepage,
          read a practical guide or tell us what you were looking for.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/">Go to the homepage</ButtonLink>
          <ButtonLink to="/resources" variant="secondary">
            Browse Basepoint Learn
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </HeroSection>
  </>
);

export default NotFoundPage;
