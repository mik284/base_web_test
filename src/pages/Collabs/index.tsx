import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const CollabsPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Base Collabs | Experts, Advisors and Resellers | Basepoint"
        description="Base Collabs brings independent experts, advisors and resellers into Basepoint's network. Help businesses understand Base and refer opportunities."
        canonical="/collabs"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            BASE COLLABS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Help businesses work better. Build your own opportunity.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Base Collabs brings independent experts, advisors and resellers into
            Basepoint&apos;s network. Help businesses understand Base, support
            adoption within your role and refer opportunities through an agreed
            process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/collabs/apply')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Become a Collab <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/resources')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Explore Learn Guides
            </Button>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Who is it for?
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Three clear collaborator profiles across our adoption network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Experts and advisors.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  People who help businesses improve how they work, review
                  financial records, and organize operations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Resellers and onboarding partners.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  People who can introduce Base, assist with hardware/catalog
                  setup, and support an agreed merchant setup process.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Champions and referrers.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  People with trusted business relationships who can introduce
                  retailers and businesses using attributable links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the relationship works */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How the relationship works.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              An accountable, transparent four-step participation model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-surface border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="font-bold text-navy mb-2">Apply</h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Tell us about your work, territory and the businesses you serve.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="font-bold text-navy mb-2">Agree your role</h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Confirm product scope, enablement, conduct and commercial terms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="font-bold text-navy mb-2">Introduce & support</h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Use agreed materials and attributable links. Escalate needs
                outside your scope.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mb-4">
                4
              </div>
              <h4 className="font-bold text-navy mb-2">Review outcomes</h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Follow the agreed process for adoption, feedback and eligible
                referrals.
              </p>
            </div>
          </div>

          {/* Know the Terms */}
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-navy mb-3">
              Know the terms before you commit.
            </h3>
            <p className="text-sm sm:text-base text-navy/70 max-w-2xl mx-auto leading-relaxed mb-6">
              Commission, referral eligibility, payout timing and any onboarding
              responsibilities are confirmed in your agreement. An application
              is not approval and does not guarantee earnings.
            </p>
            <Button
              type="primary"
              onClick={() => history.push('/collabs/apply')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy text-sm"
            >
              Apply now
            </Button>
          </div>
        </div>
      </section>

      {/* Practical Knowledge Travels Further */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Practical knowledge travels further.
          </h2>
          <p className="text-base text-navy/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Use Basepoint Learn to explain everyday business routines. Share a
            relevant guide, discuss the business need and introduce the
            appropriate next step.
          </p>
          <Button
            size="large"
            onClick={() => history.push('/resources')}
            className="px-8 py-3.5 h-auto rounded-full font-bold border-navy text-navy hover:bg-navy/5 text-base"
          >
            Explore Learn <ArrowRightOutlined className="ml-1" />
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Base Collabs FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Must every client book a demo?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                No. A standard retail business can use the available start path.
                Complex needs or requested assistance follow the help path.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Is the network operated through WhatsApp?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Approved members may use WhatsApp for coordination. Applications
                and attribution use structured records.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Are commissions published here?
                </span>
              }
              key="3"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Your applicable commercial terms are confirmed before
                participation.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Will I receive a certification?
                </span>
              }
              key="4"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                No certification is promised by applying. Any future credential
                requires defined assessment and conduct standards.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Bring your expertise. Help a business take its next step."
        body="Join the Base Collabs network to advise businesses and support software adoption in your area."
        primaryText="Become a Collab"
        primaryLink="/collabs/apply"
        secondaryText="Explore Learn"
        secondaryLink="/resources"
      />
    </div>
  );
};

export default CollabsPage;
