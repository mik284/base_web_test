import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const BanduPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Bandu | People Administration | Basepoint"
        description="Explore Bandu, Basepoint's people product. Discuss staff records, team administration and access controls with Basepoint to confirm availability."
        canonical="/products/bandu"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            BANDU · PEOPLE ADMINISTRATION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Make the work of managing people clearer.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore Bandu, Basepoint&apos;s people product. Tell us what your
            team needs to organise, and we&apos;ll confirm its current
            availability and fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/demo?product=bandu')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Ask about Bandu <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/platform')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Back to Base Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Team Admin Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Start with your team&apos;s everyday administration.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Describe how you maintain staff records and coordinate team
              responsibilities. We&apos;ll discuss the relevant product scope
              and setup.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Confirm access and responsibilities.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              People information needs appropriate access controls. We&apos;ll
              confirm the supported roles, records and permissions before setup.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Questions about Bandu
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Does Bandu include payroll or shift tracking?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We&apos;ll confirm the available functions for your intended
                setup.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can each staff member have separate access?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We&apos;ll confirm the supported roles and account limits.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Tell us what your team needs to organise."
        body="Discuss staff roles, access permissions and team coordination for your business."
        primaryText="Ask about Bandu"
        primaryLink="/demo?product=bandu"
        secondaryText="Explore Duka"
        secondaryLink="/products/duka"
      />
    </div>
  );
};

export default BanduPage;
