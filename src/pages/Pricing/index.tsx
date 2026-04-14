import React from 'react';
import CombinationBundles from './components/CombinationBundles';
import IndustrySolutions from './components/IndustrySolutions';
import PricingFAQ from './components/PricingFAQ';
import PricingHero from './components/PricingHero';
import PricingTiers from './components/PricingTiers';

const PricingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <PricingHero />

      {/* Pricing Tiers & Selector */}
      <PricingTiers />

      {/* Bundles & Discounts */}
      <CombinationBundles />

      {/* Industry Solutions */}
      <IndustrySolutions />

      {/* FAQ */}
      <PricingFAQ />
    </>
  );
};

export default PricingPage;
