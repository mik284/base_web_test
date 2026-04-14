import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Segmented, Switch } from 'antd';
import React, { useState } from 'react';
import { PRODUCT_PRICING } from '@/constants/pricingData';

const PricingTiers: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_PRICING[0].id);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const currentProduct = PRODUCT_PRICING.find((p) => p.id === selectedProduct) || PRODUCT_PRICING[0];

  return (
    <section className="py-20 bg-white" id="tiers">
      <div className="max-w-7xl mx-auto px-6">
        {/* Product Selector - Using Ant Design Segmented */}
        <div className="flex justify-start md:justify-center mb-16 overflow-x-auto pb-4 hide-scrollbar">
          <Segmented
            size="large"
            value={selectedProduct}
            onChange={(value) => setSelectedProduct(value as string)}
            options={PRODUCT_PRICING.map((p) => ({ label: p.name, value: p.id }))}
            className="p-1.5 bg-surfaceAlt rounded-2xl flex-shrink-0"
          />
        </div>

        {/* Billing Toggle - Using Ant Design Switch */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-sm font-bold font-outfit ${
              billingCycle === 'monthly' ? 'text-navy' : 'text-navy/40'
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={billingCycle === 'annual'}
            onChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')}
            className="bg-surfaceAlt"
          />
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold font-outfit ${
                billingCycle === 'annual' ? 'text-navy' : 'text-navy/40'
              }`}
            >
              Annual
            </span>
            <span className="px-2 py-0.5 rounded-md bg-mint text-[10px] font-black uppercase text-navy animate-pulse">
              2 Months Free
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProduct.tiers.map((tier) => {
            const displayPrice =
              billingCycle === 'annual'
                ? Math.floor(
                    (currentProduct.annualPrice / 12) * (tier.price / currentProduct.monthlyPrice),
                  )
                : tier.price;

            // Handle free tier specifically
            const isFree = tier.price === 0;

            return (
              <div
                key={tier.name}
                className={`group relative flex flex-col p-8 rounded-[32px] border transition-all duration-500 hover:-translate-y-2 ${
                  tier.isPopular
                    ? 'bg-navy text-white border-navy shadow-2xl shadow-navy/20 z-10'
                    : 'bg-white text-navy border-surfaceAlt hover:border-mint shadow-soft hover:shadow-xl'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-mint text-navy text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={`text-xl font-bold font-outfit mb-2 ${
                      tier.isPopular ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold opacity-60">KES</span>
                    <span className="text-4xl font-black font-outfit">
                      {isFree ? '0' : displayPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium opacity-60">/mo</span>
                  </div>
                  <p
                    className={`text-xs mt-2 font-medium ${
                      tier.isPopular ? 'text-white/60' : 'text-navy/60'
                    }`}
                  >
                    {tier.priceDescriptor}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircleFilled
                        className={`mt-1 text-sm ${tier.isPopular ? 'text-mint' : 'text-mint'}`}
                      />
                      <span
                        className={`text-sm font-medium font-outfit leading-tight ${
                          tier.isPopular ? 'text-white/80' : 'text-navy/80'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  type={tier.isPopular ? 'primary' : 'default'}
                  size="large"
                  className={`w-full h-14 rounded-2xl font-bold font-outfit transition-all duration-300 ${
                    tier.isPopular
                      ? 'bg-mint text-navy border-mint hover:bg-white hover:text-navy hover:scale-105 shadow-lg shadow-mint/20'
                      : 'bg-surface text-navy border-transparent hover:bg-navy hover:text-white hover:scale-105'
                  }`}
                >
                  {tier.ctaText}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <p className="text-navy/50 font-medium font-outfit">
            Not sure which plan is right for you?{' '}
            <a
              href="#"
              className="text-navy font-bold border-b-2 border-mint hover:border-navy transition-colors"
            >
              Contact our sales team
            </a>{' '}
            for a custom demo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
