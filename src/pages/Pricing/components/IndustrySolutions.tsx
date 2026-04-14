import React from 'react';
import { INDUSTRY_RECOMMENDATIONS } from '@/constants/pricingData';
import { ShopOutlined, ArrowRightOutlined } from '@ant-design/icons';

const IndustrySolutions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-navy font-outfit mb-4">
              Solutions tailored to <br />
              <span className="text-electric">your industry.</span>
            </h2>
            <p className="text-navy/60 font-medium font-outfit">
              Don't know where to start? We've bundled our most popular products for specific business models.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold text-navy font-outfit px-8 py-3 rounded-xl bg-surface hover:bg-surfaceAlt transition-colors border-0 cursor-pointer">
            View All Industries <ArrowRightOutlined />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {INDUSTRY_RECOMMENDATIONS.map((industry) => (
            <div 
              key={industry.industry}
              className="bg-surface p-6 md:p-10 rounded-[40px] border border-surfaceAlt shadow-soft"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="text-3xl md:text-4xl">{industry.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-navy font-outfit">{industry.industry}</h3>
              </div>

              <div className="space-y-6">
                {industry.tiers.map((tier) => (
                  <div 
                    key={tier.size}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-3xl bg-white border border-surfaceAlt hover:border-mint transition-colors group"
                  >
                    <div>
                      <span className="block text-xs font-black uppercase tracking-widest text-navy/40 mb-1">{tier.size}</span>
                      <h4 className="text-lg font-bold text-navy font-outfit mb-2">{tier.features}</h4>
                      <div className="flex flex-wrap gap-2">
                        {tier.products.map(p => (
                          <span key={p} className="px-2 py-1 rounded-md bg-navy/5 text-[10px] font-bold text-navy/60 border border-navy/5 uppercase">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center justify-between md:flex-col md:items-end gap-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-navy/40">KES</span>
                        <span className="text-2xl font-black text-navy font-outfit">{tier.cost.toLocaleString()}</span>
                        <span className="text-xs font-medium text-navy/40">/mo</span>
                      </div>
                      <button className="text-sm font-bold text-electric group-hover:underline bg-transparent border-0 cursor-pointer p-0">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
