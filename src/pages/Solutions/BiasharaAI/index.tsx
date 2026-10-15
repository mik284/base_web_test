import { CheckCircleFilled } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

const { TextArea } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const scenarios = [
  {
    title: 'Stock planning',
    question: 'What should we reorder, and why?',
    description:
      'A proposed scenario would bring sales, stock and supplier information together to compare reorder options.',
  },
  {
    title: 'Commercial testing',
    question: 'Is this promotion worth testing?',
    description:
      'A proposed scenario would make assumptions explicit and outline a test with a measurable result.',
  },
  {
    title: 'Distribution focus',
    question: 'Where should the team focus next?',
    description:
      'A proposed scenario would compare available market and outlet signals to identify opportunities for review.',
  },
  {
    title: 'Coordinated action',
    question: 'Who needs to do what next?',
    description:
      'A proposed scenario would turn an approved decision into suggested responsibilities and follow-up checks.',
  },
];

const reasoningChain = [
  {
    step: '1',
    title: 'Bring the evidence',
    desc: 'Sample sales records, a checked stock count and a supplier lead time provide the starting information.',
  },
  {
    step: '2',
    title: 'Check the gaps',
    desc: 'Missing records or an outdated stock count must be identified before relying on a recommendation.',
  },
  {
    step: '3',
    title: 'Compare options',
    desc: 'The proposed system would show possible actions and the assumptions behind them.',
  },
  {
    step: '4',
    title: 'Keep approval with people',
    desc: 'The responsible manager would approve, change or reject the suggested action.',
  },
  {
    step: '5',
    title: 'Review the result',
    desc: 'The team would compare the outcome with its original expectation and update the next decision.',
  },
];

const BiasharaAIPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    const payload = {
      ...values,
      product: 'biashara_ai',
      submitted_at: new Date().toISOString(),
    };

    console.log('[Acquisition Event: ai_waitlist_submitted]', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success("You're on the Biashara AI waitlist.");
    }, 1000);
  };

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans">
      <SEO
        title="Biashara AI | Commercial Intelligence in Development | Basepoint"
        description="Explore Biashara AI's proposed decision-support scenarios and join the waitlist. Access, integrations and launch timing are not confirmed."
        canonical="/solutions/biashara-ai"
      />

      {/* 14.2 Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            BIASHARA AI · IN DEVELOPMENT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Turn business activity into better commercial decisions.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            We&apos;re developing Biashara AI to help organisations interpret
            business signals, compare possible actions and review what happens
            next. The intended approach combines commercial evidence with human
            judgment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              type="primary"
              size="large"
              onClick={scrollToWaitlist}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base shadow-md"
            >
              Join the waitlist
            </Button>
          </div>

          <p className="text-xs text-navy/50 max-w-xl mx-auto leading-relaxed m-0">
            Biashara AI is in development. The scenarios below illustrate
            intended uses, not live capabilities. Access, integrations, pricing
            and launch timing are not confirmed.
          </p>
        </div>
      </section>

      {/* 14.3 The Problem */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
            Information is useful when it helps someone decide what to do.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed m-0">
            A report can show that something changed. The next questions are
            harder: What caused it? What should we try? Who needs to act? How
            will we know whether it worked? Biashara AI is being designed around
            that sequence.
          </p>
        </div>
      </section>

      {/* 14.4 Proposed Scenarios */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Start with a decision worth improving.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Real commercial challenges we intend to evaluate during future
              collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {scenarios.map((sc) => (
              <div
                key={sc.title}
                className="bg-surface rounded-3xl p-8 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                    {sc.title}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {sc.question}
                  </h3>
                  <p className="text-sm text-navy/70 leading-relaxed mb-6">
                    {sc.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200/60 text-[11px] font-semibold text-navy/50">
                  Proposed scenario — subject to development and validation.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14.5 Concept Walkthrough */}
      <section className="py-24 bg-surface border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-4">
              ILLUSTRATIVE CONCEPT — NOT A LIVE PRODUCT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              One question. A visible chain of reasoning.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Consider a distributor asking whether to replenish an outlet
              before the next delivery. This example shows the intended decision
              process using fictional information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
            {reasoningChain.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-navy/70 leading-relaxed m-0">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="text-xs font-semibold text-navy/60">
              The aim is a more accountable decision process. Results will need
              to be tested in real workflows.
            </span>
          </div>
        </div>
      </section>

      {/* 14.6 Goal, Action and Review */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              A recommendation should connect to a goal and a review.
            </h2>
            <p className="text-sm text-navy/70 leading-relaxed">
              We intend to link proposed actions to an agreed business goal, the
              resources available and a way to assess the result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-navy mb-2">Define the goal.</h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Name the decision and the outcome you want to evaluate.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-navy mb-2">
                Make the action practical.
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Consider the time, money and people available.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-navy mb-2">Review the evidence.</h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Compare the result with the expectation and investigate
                differences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14.7 & 14.8 Audience Collaboration */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Help define a useful commercial workflow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-navy mb-2">
                Enterprises and distributors
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Bring a recurring decision that would benefit from better
                evidence and follow-through.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-navy mb-2">
                Business software providers
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Explore how decision support could fit alongside the workflows
                your users already rely on.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-navy mb-2">
                Advisory and ecosystem organisations
              </h4>
              <p className="text-xs text-navy/70 leading-relaxed m-0">
                Help identify practical scenarios, evaluation criteria and
                responsible support needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14.9 Trust and Human Control */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Designed to support judgment.
          </h2>
          <p className="text-sm sm:text-base text-navy/70 leading-relaxed m-0">
            Our intended approach keeps recommendations open to review and
            decisions under human control. Data sources, permissions,
            limitations and evaluation methods will need to be defined for each
            future pilot.
          </p>
        </div>
      </section>

      {/* 14.10 Waitlist Form */}
      <section
        id="waitlist-form"
        className="py-24 bg-surface border-t border-gray-100"
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-2">
                    BIASHARA AI WAITLIST
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                    Tell us which decision you want to improve.
                  </h2>
                  <p className="text-sm text-navy/70 leading-relaxed">
                    Join the waitlist for updates, proposed pilot evaluations,
                    and research conversations.
                  </p>
                </div>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  size="large"
                  requiredMark={false}
                >
                  <Form.Item
                    name="name"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Full Name
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter your name' },
                    ]}
                  >
                    <Input
                      placeholder="e.g. David Mwangi"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Work Email
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Enter a valid email' },
                    ]}
                  >
                    <Input
                      placeholder="david@company.com"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Form.Item
                      name="organisation"
                      label={
                        <span className="font-semibold text-navy text-sm">
                          Organisation Name
                        </span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Enter organisation or Independent',
                        },
                      ]}
                    >
                      <Input
                        placeholder="e.g. Apex Supplies"
                        className="rounded-xl"
                      />
                    </Form.Item>

                    <Form.Item
                      name="organisation_type"
                      label={
                        <span className="font-semibold text-navy text-sm">
                          Organisation Type
                        </span>
                      }
                      rules={[{ required: true, message: 'Select type' }]}
                    >
                      <Select placeholder="Select type" className="rounded-xl">
                        <Option value="enterprise">
                          Business / Enterprise
                        </Option>
                        <Option value="distributor">
                          Distributor / Manufacturer
                        </Option>
                        <Option value="software_provider">
                          Software Provider
                        </Option>
                        <Option value="advisory_ecosystem">
                          Advisory / Ecosystem Organisation
                        </Option>
                        <Option value="independent_owner">
                          Independent Business Owner
                        </Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="primary_interest"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Primary Interest
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Select primary interest' },
                    ]}
                  >
                    <Select
                      placeholder="Select interest"
                      className="rounded-xl"
                    >
                      <Option value="product_updates">Product Updates</Option>
                      <Option value="potential_pilot">
                        Potential Future Pilot
                      </Option>
                      <Option value="integration_partnership">
                        Potential Integration / Partnership
                      </Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="decision_description"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Decision or Problem Description
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message:
                          'Describe the commercial decision you want to improve',
                      },
                    ]}
                  >
                    <TextArea
                      rows={3}
                      placeholder="e.g. Inventory reordering across 8 distributor routes, evaluating promotion discounts on high-margin lines..."
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <div className="p-4 rounded-2xl bg-surfaceAlt/60 text-xs text-navy/70 mb-6 leading-relaxed">
                    We&apos;ll use these details to respond to your interest and
                    share relevant Biashara AI updates. See our{' '}
                    <a
                      href="/privacy"
                      className="text-navy font-semibold underline"
                    >
                      Privacy Policy
                    </a>
                    . Registration does not guarantee access or a launch date.
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                    className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
                  >
                    Join the waitlist
                  </Button>
                </Form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                  <CheckCircleFilled style={{ color: '#1F2B5D' }} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  You&apos;re on the Biashara AI waitlist.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed mb-8 max-w-md mx-auto">
                  We&apos;ll share relevant updates and may contact you to
                  understand your proposed use case. Access and timing are not
                  yet confirmed.
                </p>
                <Button
                  onClick={() => history.push('/')}
                  className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy text-white"
                >
                  Return to Homepage
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 14.11 FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Biashara AI FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can I use Biashara AI today?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                No. It is in development. This page collects interest and
                proposed use cases.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Will it run my business for me?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                The intended approach supports human decision-making. Proposed
                actions would remain subject to review and approval.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Does it work with Duka or other software?
                </span>
              }
              key="3"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Connections are not yet confirmed. Tell us which workflow and
                tools matter to your organisation.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Will I need to share business data?
                </span>
              }
              key="4"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Any future pilot would define required data and permissions
                separately. Joining the waitlist does not require operational
                data.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  What will it cost?
                </span>
              }
              key="5"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Pricing is not confirmed.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  When will it launch?
                </span>
              }
              key="6"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                There is no confirmed public launch date.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <section className="py-20 px-6 bg-surface border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Bring a real decision. Help shape useful intelligence.
          </h2>
          <Button
            type="primary"
            size="large"
            onClick={scrollToWaitlist}
            className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy text-base"
          >
            Join the waitlist
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BiasharaAIPage;
