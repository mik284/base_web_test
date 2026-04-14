/**
 * Landing Page — BasepointCloud
 *
 * This page renders completely outside the ProLayout wrapper (layout: false in .umirc.ts).
 * It composes all landing section components and owns the top-level page styles.
 */
import React from 'react';

import CTASection from '@/pages/Landing/components/CTASection';
import Features from '@/pages/Landing/components/Features';
import Footer from '@/pages/Landing/components/Footer';
import Hero from '@/pages/Landing/components/Hero';
import IntegrationsMarquee from '@/pages/Landing/components/IntegrationsMarquee';
import Navbar from '@/pages/Landing/components/Navbar';
import Products from '@/pages/Landing/components/Products';
import SocialProof from '@/pages/Landing/components/SocialProof';
import UseCases from '@/pages/Landing/components/UseCases';

import './index.css';

const LandingPage: React.FC = () => {
  return (
    <div
      className="antialiased w-full min-h-screen relative overflow-x-hidden font-outfit"
      style={{
        backgroundColor: '#ffffff',
        color: '#1F2B5D',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* 1. Sticky navigation bar */}
      <Navbar />

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

      {/* 7. Stats + customer testimonials */}
      <SocialProof />

      {/* 8. Final call-to-action */}
      <CTASection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
