import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const PesaPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Pesa | Financial Records | Basepoint"
        description="Explore Pesa, Basepoint's finance product. Discuss financial records and money questions with Basepoint to confirm availability and fit."
        canonical="/products/pesa"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            PESA · FINANCIAL RECORDS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Bring your money questions into focus.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore Pesa, Basepoint&apos;s finance product. Tell us which
            financial records and decisions you need to improve, and we&apos;ll
            confirm its current availability and fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/demo?product=pesa')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Ask about Pesa <ArrowRightOutlined className="ml-1" />
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

      {/* Questions Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Start with the question you need to answer.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Are you trying to understand money received, money spent or the
              records behind a business review? Describe your current process so
              we can discuss the relevant product scope.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Confirm the fit before changing your process.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              We&apos;ll discuss supported records, connections, access, setup
              and pricing. Existing accounting and reporting obligations still
              need the appropriate checks.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Questions about Pesa
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can Pesa connect to my bank or payment tools?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Tell us which tools you use. We&apos;ll confirm any supported
                connections.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Is Pesa included with Duka?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Access and bundling depend on the approved offer. Ask us about
                your intended setup.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Tell us what you need to understand about your money."
        body="Discuss financial records, reconciliation and visibility for your business setup."
        primaryText="Ask about Pesa"
        primaryLink="/demo?product=pesa"
        secondaryText="Explore Duka"
        secondaryLink="/products/duka"
      />
    </div>
  );
};

export default PesaPage;
