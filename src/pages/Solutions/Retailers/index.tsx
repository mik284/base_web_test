import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const RetailersPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Retail Solutions | Basepoint"
        description="A clearer view of the shop, from the first sale to the daily review. Start with Duka to record sales, track stock and issue receipts."
        canonical="/solutions/retailers"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            FOR RETAIL BUSINESSES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            A clearer view of the shop, from the first sale to the daily review.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start with Duka to record sales, track stock and issue receipts.
            Build a routine that gives you clearer records to work from.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/start')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Start with Duka
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/demo')}
              className="px-8 py-3.5 h-auto rounded-full font-bold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Get setup help
            </Button>
          </div>
        </div>
      </section>

      {/* Essentials Visible */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Keep the essentials visible.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Build daily clarity without unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">What sold?</h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Use your recorded sales to review the day. Notice what moved
                  fast, what stalled, and how money came in.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  What&apos;s on the shelf?
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Compare stock records with regular physical counts. Identify
                  differences early rather than finding out at reorder time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  What should you check next?
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Use the records to identify a question worth investigating: a
                  stock discrepancy, a missing payment, or a fast-selling line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Shop & Routines */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Start with your current shop.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed mb-6">
              Tell us about your device, product range and existing records if
              you need setup help. You do not need to choose every Base product
              at once.
            </p>
            <Button
              onClick={() => history.push('/demo')}
              className="px-6 py-3 h-auto rounded-full font-bold border-navy text-navy"
            >
              Get setup help
            </Button>
          </div>

          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Useful routines for the owner and the team.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed mb-6">
              Read the daily review and stock-count guides, then choose a
              routine you can maintain consistently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                type="primary"
                onClick={() => history.push('/resources/daily-close')}
                className="px-6 py-3 h-auto rounded-full font-bold bg-navy border-navy"
              >
                Daily review guide
              </Button>
              <Button
                onClick={() => history.push('/resources/stock-count')}
                className="px-6 py-3 h-auto rounded-full font-semibold border-navy text-navy"
              >
                Stock count guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Retail Questions
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Is this for a single shop?
                </span>
              }
              key="1"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Duka is the entry point for standard retail needs. Ask us about
                requirements for larger or more complex operations.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Will it tell me my profit?
                </span>
              }
              key="2"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Sales records alone are not profit. Costs, expenses and other
                relevant records must be considered.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Make the next day's records easier to review."
        body="Start with Duka's sales recording, stock tracking and receipt issuing for your retail business."
        primaryText="Start with Duka"
        primaryLink="/start"
        secondaryText="Get setup help"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default RetailersPage;
