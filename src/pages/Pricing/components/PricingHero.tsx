import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-4 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-mint/40 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-electric/10 blur-[100px] rounded-full animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy/5 border border-navy/10">
          <span className="text-xs font-bold uppercase tracking-widest text-navy opacity-80 font-outfit">
            Simple & Transparent Pricing
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-navy font-outfit tracking-tight">
          Scalable plans for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-electric to-mint-dark">
            every stage of your business.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-navy/70 font-outfit leading-relaxed mb-10">
          Whether you're just starting with a single shop or managing a national enterprise,
          Base Suite has a plan tailored to your needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-surface border border-surfaceAlt shadow-soft">
            <span className="flex h-2 w-2 rounded-full bg-mint" />
            <span className="text-sm font-semibold text-navy font-outfit">3-Month Free Trial on Duka</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-surface border border-surfaceAlt shadow-soft">
            <span className="flex h-2 w-2 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-navy font-outfit">Save 20% on Annual Billing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
