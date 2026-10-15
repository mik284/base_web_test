import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const TwoWaysToBegin: React.FC = () => {
  return (
    <section className="py-24 bg-surface font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-3">
            ONBOARDING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Start your way.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Begin with standard retail tools immediately, or request assisted
            setup if your shop or network has specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card A — Self-serve */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-block px-3.5 py-1 rounded-full bg-mint/30 text-navy font-bold text-xs mb-6">
                SELF-SERVE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                Ready to try Duka?
              </h3>
              <p className="text-base text-navy/70 leading-relaxed mb-8">
                Start with the sales, stock and receipt workflow. Begin directly
                and add items as you go.
              </p>
            </div>
            <div>
              <Button
                type="primary"
                size="large"
                onClick={() => history.push('/start')}
                className="w-full sm:w-auto h-auto px-8 py-3.5 rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
              >
                Start with Duka <ArrowRightOutlined className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Card B — Assisted Intake */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-block px-3.5 py-1 rounded-full bg-surfaceAlt text-navy font-bold text-xs mb-6">
                ASSISTED INTAKE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                Need help with your setup?
              </h3>
              <p className="text-base text-navy/70 leading-relaxed mb-8">
                Tell us about your business, your current tools and what you
                want to change. We&apos;ll use that information to discuss the
                right next step.
              </p>
            </div>
            <div>
              <Button
                size="large"
                onClick={() => history.push('/demo')}
                className="w-full sm:w-auto h-auto px-8 py-3.5 rounded-full font-bold border-2 border-navy text-navy hover:bg-navy/5 text-base"
              >
                Get setup help <ArrowRightOutlined className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysToBegin;
