import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const MtejaPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Mteja | Customer Relationships | Basepoint"
        description="Explore Mteja, Basepoint's customer product. Discuss customer records and follow-up practices with Basepoint to confirm availability and fit."
        canonical="/products/mteja"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            MTEJA · CUSTOMER RELATIONSHIPS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Give customer relationships a clearer place in your business.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore Mteja, Basepoint&apos;s customer product. Tell us how you
            keep customer records and manage follow-up, and we&apos;ll confirm
            its current availability and fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/demo?product=mteja')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Ask about Mteja <ArrowRightOutlined className="ml-1" />
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

      {/* Relationships Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Start with the relationship you want to improve.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Describe how you recognise returning customers, keep contact
              information and decide who needs a follow-up. We&apos;ll discuss
              the relevant product scope.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Use customer information with care.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Customer records and outreach require the right permissions.
              We&apos;ll confirm the supported workflow and what you need to
              prepare.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Questions about Mteja
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Does Mteja send WhatsApp campaigns?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We&apos;ll confirm the supported channels and messaging
                requirements.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Is loyalty included?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Ask us to confirm the available features for your intended use.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Tell us how you want to serve your customers better."
        body="Discuss customer records, follow-up and engagement for your retail or business operations."
        primaryText="Ask about Mteja"
        primaryLink="/demo?product=mteja"
        secondaryText="Explore Duka"
        secondaryLink="/products/duka"
      />
    </div>
  );
};

export default MtejaPage;
