import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const EnterprisePage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Growing & Complex Operations | Basepoint"
        description="More locations, more people and more tools create more setup decisions. Tell us what you need to coordinate, and we'll assess available Base products."
        canonical="/solutions/enterprise"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            FOR GROWING AND COMPLEX OPERATIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Make the next stage of your operation easier to understand.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            More locations, more people and more tools create more setup
            decisions. Tell us what you need to coordinate, and we&apos;ll
            assess the available Base products and support options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/demo?segment=enterprise')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Discuss your operation <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/platform')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Explore Base Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Define What Needs to Work Together */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Define what needs to work together.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Break down the moving parts across outlets, team members, and
              existing software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Locations.</h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Explain what each outlet needs to record and what management
                  needs to review to maintain multi-branch operational control.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">People.</h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Identify who needs access and who owns each decision: store
                  managers, cashiers, inventory clerks, and accounting.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Tools.</h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  List the systems you currently rely on and any specific data
                  migration or connection requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Setup & Inclusions */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Plan the setup before scaling it.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Agree the supported product scope, migration needs, training
              responsibilities and review criteria. Start with an appropriate
              rollout size and expand after the workflow has been evaluated.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Know what is included.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Product access, implementation work, integrations and ongoing
              support are confirmed in the proposal. Any service commitments
              must be agreed explicitly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Enterprise Operations FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can Base replace all our systems?
                </span>
              }
              key="1"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We&apos;ll assess the relevant workflows and confirm product fit
                during discovery.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can we request integrations?
                </span>
              }
              key="2"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Yes, as part of discovery. Availability, effort and costs must
                be assessed.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can we start with one location?
                </span>
              }
              key="3"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We can discuss a bounded setup or pilot appropriate to your
                needs.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Define the operation you want to build."
        body="Discuss multiple outlets, staff roles, and coordinated rollout with the Basepoint team."
        primaryText="Discuss your operation"
        primaryLink="/demo?segment=enterprise"
        secondaryText="Explore Base Platform"
        secondaryLink="/platform"
      />
    </div>
  );
};

export default EnterprisePage;
