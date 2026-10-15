import { ArrowRightOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const DistributorsPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Distribution Solutions | Basepoint"
        description="Discuss how Basepoint could support visibility across your distribution operation. We'll review workflows, data access and requirements before proposing a fit."
        canonical="/solutions/distributors"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            FOR DISTRIBUTORS AND MANUFACTURERS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Start with the commercial question your network needs to answer.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discuss how Basepoint could support visibility across your
            distribution operation. We&apos;ll review your workflows, data
            access and requirements before proposing a fit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/demo?segment=distributor')}
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

      {/* Where Does Visibility Break Down? */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Where does visibility break down?
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Distribution operations face specific information bottlenecks
              between warehouse and retail shelf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Sales and movement.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  Which records do you need to understand where products are
                  moving, what sits in stock, and what needs reordering?
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Outlet coordination.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  What information do teams need from the businesses they serve
                  to plan delivery routes and fulfillment schedules?
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Commercial follow-through.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  How do you turn observations into agreed actions, follow up
                  with retail outlets, and review the commercial outcome?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Pilot Evidence */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Begin with a bounded assessment.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              Define the business question, the participating businesses and the
              records they can share with permission. Then agree which available
              tools, human support or future pilot could be relevant.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Agree the evidence before the rollout.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed m-0">
              A useful pilot needs a baseline, a clear workflow and a measure of
              success. We&apos;ll discuss those alongside scope,
              responsibilities and cost.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Distribution FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Is a network portal available?
                </span>
              }
              key="1"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Availability and scope must be confirmed for your use case. This
                page does not promise a live portal.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can we see merchant data?
                </span>
              }
              key="2"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Only through an agreed, permissioned arrangement with
                appropriate access controls. A referral or partnership does not
                grant data access.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Is Biashara AI part of the offer?
                </span>
              }
              key="3"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Biashara AI is in development and has a separate waitlist.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Bring one commercial question. Define a practical next step."
        body="Discuss how Basepoint could support visibility and coordination across your distribution operation."
        primaryText="Discuss your operation"
        primaryLink="/demo?segment=distributor"
        secondaryText="Explore Base Platform"
        secondaryLink="/platform"
      />
    </div>
  );
};

export default DistributorsPage;
