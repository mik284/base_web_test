import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';
import BiasharaTeaser from '@/pages/Landing/components/BiasharaTeaser';
import Expansion from '@/pages/Landing/components/Expansion';
import Hero from '@/pages/Landing/components/Hero';
import HomepageFAQs from '@/pages/Landing/components/HomepageFAQs';
import HumanSupport from '@/pages/Landing/components/HumanSupport';
import LearnTeaser from '@/pages/Landing/components/LearnTeaser';
import OperatingRoutine from '@/pages/Landing/components/OperatingRoutine';
import PracticalProblem from '@/pages/Landing/components/PracticalProblem';
import TwoWaysToBegin from '@/pages/Landing/components/TwoWaysToBegin';

import './index.css';

const LandingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Basepoint | Sales, Stock and Business Clarity"
        description="Start with Duka for sales, stock and receipts. Explore Base products, practical guides and setup support for your business."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Basepoint',
          url: 'https://basepoint.co.ke',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://basepoint.co.ke/contact?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* 6.1 Hero — Verified Duka focus, Dual CTAs, illustrative caption */}
      <Hero />

      {/* 6.2 Practical problem — Record sale, Track stock, Issue receipt */}
      <PracticalProblem />

      {/* 6.3 Operating routine — 4-step suggested review */}
      <OperatingRoutine />

      {/* 6.5 Two ways to begin — Self-serve vs Assisted Intake */}
      <TwoWaysToBegin />

      {/* 6.6 Expansion — Pesa, Mteja, Bandu */}
      <Expansion />

      {/* 6.7 Human support — Base Collabs network */}
      <HumanSupport />

      {/* 6.8 Biashara AI teaser — Concept in development */}
      <BiasharaTeaser />

      {/* 6.9 Learn launch guides */}
      <LearnTeaser />

      {/* 6.9 Final CTA Banner */}
      <CTASection
        title="Make the business clearer. Start with Duka."
        body="Start with Duka to record sales, track stock and issue receipts. Build a clearer picture of your business, then explore more of Base as your needs grow."
        primaryText="Start with Duka"
        primaryLink="/start"
        secondaryText="Get setup help"
        secondaryLink="/demo"
        note="Availability, scope and any fees are confirmed before support begins."
      />

      {/* 6.10 Homepage FAQs */}
      <HomepageFAQs />
    </>
  );
};

export default LandingPage;
