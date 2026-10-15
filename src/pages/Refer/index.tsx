import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const ReferPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Refer a Business | Basepoint"
        description="Introduce Basepoint through an approved referral link. A clear introduction helps the business choose its own next step."
        canonical="/refer"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            REFERRALS & INTRODUCTIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Know a business that needs clearer records?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Introduce Basepoint through a relevant product page or an approved
            referral link. A clear introduction helps the business choose its
            own next step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/contact?intent=referral')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Refer a business <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/refer/terms')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              See referral terms
            </Button>
          </div>
        </div>
      </section>

      {/* How Approved Referrals Work */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How approved referrals work.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Transparent attribution with respect for the merchant&apos;s
              choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center mb-6 text-sm">
                  1
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Use your assigned link.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  It connects the introduction with your referrer record via
                  clean, validated attribution parameters.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center mb-6 text-sm">
                  2
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Let the business choose.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  The owner can start directly with Duka self-serve or request
                  assisted setup depending on their comfort.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center mb-6 text-sm">
                  3
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Follow the agreed terms.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Any reward depends on the eligibility criteria and qualifying
                  events detailed in the referral agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Referral FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Does a signup qualify for a reward?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Not automatically. The referral terms define the qualifying
                event (e.g. verified shop activation or paid subscription).
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can I submit someone else&apos;s phone number?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Only with their permission for the proposed contact. Prefer
                sharing your referral link so they can submit their own details.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  What if the business already has an account?
                </span>
              }
              key="3"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Eligibility depends on the referral terms and server duplicate
                checks against existing accounts.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Structured introductions for African commerce."
        body="Review our referral terms or contact us to receive an assigned partner referral code."
        primaryText="Discuss an introduction"
        primaryLink="/contact?intent=referral"
        secondaryText="See referral terms"
        secondaryLink="/refer/terms"
      />
    </div>
  );
};

export default ReferPage;
