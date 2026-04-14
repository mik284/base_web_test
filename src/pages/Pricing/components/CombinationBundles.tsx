import React from 'react';
import { BUNDLES } from '@/constants/pricingData';
import { PlusCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const CombinationBundles: React.FC = () => {
  return (
    <section className="py-24 bg-surfaceAlt relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy font-outfit mb-4">
            Powerful Alone. <span className="text-mint-dark">Better Together.</span>
          </h2>
          <p className="max-w-xl mx-auto text-navy/60 font-medium font-outfit">
            Combine any two or more products to unlock seamless data integration and massive discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUNDLES.map((bundle) => (
            <div
              key={bundle.name}
              className="bg-white p-8 rounded-[32px] border border-surfaceAlt shadow-soft hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-mint transition-colors">
                <PlusCircleOutlined className="text-2xl text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy font-outfit mb-2">{bundle.name}</h3>
              <p className="text-sm text-navy/50 font-medium font-outfit mb-6">Best for: {bundle.bestFor}</p>

              <div className="flex items-center gap-2 mb-8">
                <span className="text-3xl font-black text-navy font-outfit">
                  <span className="text-sm font-bold opacity-60 mr-1">KES</span>
                  {bundle.price.toLocaleString()}
                </span>
                <span className="text-sm font-bold text-navy/40">/mo</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-8">
                Save {bundle.discount}
              </div>

              <Button className="w-full group/btn flex items-center justify-center gap-2 font-bold text-navy font-outfit hover:text-electric transition-colors"
                icon={<ArrowRightOutlined className="group-hover/btn:translate-x-1 transition-transform" />}
                iconPosition='end'
                size='large'
              >
                Build this bundle
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 p-10 rounded-[40px] bg-navy text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#8AFEA7_0%,transparent_50%)]" />
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold font-outfit mb-2">Bulk Volume Discounts</h3>
            <p className="text-white/60 font-medium font-outfit">Deploying across 10+ locations? We offer custom enterprise pricing.</p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="block text-2xl font-black font-outfit">10% OFF</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">2 Products</span>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="block text-2xl font-black font-outfit">15% OFF</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">3 Products</span>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm border-mint/30 shadow-lg shadow-mint/10">
              <span className="block text-2xl font-black font-outfit text-mint">20% OFF</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-mint/50">4 Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinationBundles;
