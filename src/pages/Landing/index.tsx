import React from 'react';

import Features from '@/pages/Landing/components/Features';
import Hero from '@/pages/Landing/components/Hero';
import IntegrationsMarquee from '@/pages/Landing/components/IntegrationsMarquee';
import Products from '@/pages/Landing/components/Products';
import SocialProof from '@/pages/Landing/components/SocialProof';
import UseCases from '@/pages/Landing/components/UseCases';

import './index.css';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* 2. Hero — headline, CTA, animated dashboard mockup */}
      <Hero />

      {/* 3. Payment integrations scrolling marquee */}
      <IntegrationsMarquee />

      {/* 4. Product cards (BasePesa, Duka1, Bandu, Duka1, Loyalty) */}
      <Products />

      {/* 5. Enterprise features (dark navy section) */}
      <Features />

      {/* 6. Use-case audience segments */}
      <UseCases />

      {/* 2.3 Value Chain Block ("Trust Engine") */}
      {/* <TrustEngine /> */}
      {/* 7. Stats + customer testimonials */}
      <SocialProof />
    </>
  );
};

export default LandingPage;
