import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const PartnersPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Strategic Partnerships | Basepoint"
        description="Build useful business workflows with Basepoint. We welcome conversations with organisations that can improve business support, product fit or distribution."
        canonical="/partners"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            STRATEGIC PARTNERSHIPS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Build useful business workflows with Basepoint.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We welcome conversations with organisations that can improve
            business support, product fit or distribution. Start with the
            problem you want to solve and the value each organisation can
            contribute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/partners/apply')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Explore a partnership <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/collabs')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Base Collabs Network
            </Button>
          </div>
        </div>
      </section>

      {/* Three Ways to Begin */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Three ways to begin a conversation.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Explore partnership avenues structured around mutual value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Distribution and adoption.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Explore how your network or association could introduce
                  businesses to relevant Base products.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Business support.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Explore a bounded collaboration around practical expertise,
                  training programmes and retail adoption.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Product and intelligence.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Discuss workflow requirements, possible integrations or future
                  Biashara AI evaluation scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value on Both Sides & Collabs Callout */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Define value on both sides.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              A useful partnership has a clear audience, responsibilities, scope
              and a way to evaluate the result. Commercial terms, data access
              and delivery commitments are agreed separately.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Looking to join as an individual expert or reseller?
              </h3>
              <p className="text-sm text-navy/70 leading-relaxed m-0">
                Base Collabs is the entry point for individual experts, advisors
                and resellers.
              </p>
            </div>
            <Button
              onClick={() => history.push('/collabs')}
              className="px-6 py-3 h-auto rounded-full font-bold border-navy text-navy shrink-0"
            >
              Explore Base Collabs
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Partnership FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Does partnership provide access to merchant data?
                </span>
              }
              key="1"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                No. Access requires a separate agreed and permissioned
                arrangement with strict privacy controls.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Do you have a live integration programme?
                </span>
              }
              key="2"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Available integrations and programme scope must be confirmed for
                the proposed use case during discovery.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Propose a structured partnership."
        body="Start with the problem you want to solve and the value each organisation brings to the table."
        primaryText="Explore a partnership"
        primaryLink="/partners/apply"
        secondaryText="Explore Base Collabs"
        secondaryLink="/collabs"
      />
    </div>
  );
};

export default PartnersPage;
