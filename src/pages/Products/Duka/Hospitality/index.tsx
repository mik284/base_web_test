import {
  CheckCircleFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Checkbox, Collapse, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { TextArea } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const workflows = [
  {
    title: 'Table & Order Handling',
    desc: 'Managing open tables, bar tabs, and quick takeaway counter orders.',
  },
  {
    title: 'Kitchen & Bar Tickets',
    desc: 'Sending item tickets directly to kitchen printers or preparation displays.',
  },
  {
    title: 'Split Bills & Custom Payments',
    desc: 'Splitting checks across cash, card, and individual mobile money payments.',
  },
  {
    title: 'Modifiers & Add-ons',
    desc: 'Recording food preferences, cooking degrees, toppings, and item substitutions.',
  },
  {
    title: 'Staff Roles & Shifts',
    desc: 'Setting waiter vs cashier permissions, tracking shift closes and cash floats.',
  },
  {
    title: 'Connectivity & Speed',
    desc: 'Fast ordering under busy service rushes and offline order buffering considerations.',
  },
];

const HospitalityPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    const payload = {
      ...values,
      product: 'duka_hospitality',
      submitted_at: new Date().toISOString(),
    };

    console.log('[Acquisition Event: hospitality_interest_submitted]', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('Interest registered successfully.');
    }, 1000);
  };

  return (
    <div className="font-sans">
      <SEO
        title="Duka for Hospitality | Early-Access Interest | Basepoint"
        description="Help shape Duka for restaurants, cafés, bars and hotels. Register your interest and tell us which daily hospitality workflows matter most to you."
        canonical="/products/duka/hospitality"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan/20 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            DUKA FOR HOSPITALITY · EARLY-ACCESS INTEREST
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Help shape Duka for the way your hospitality business works.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            We&apos;re developing a hospitality proposition for restaurants,
            cafés, bars and hotels. Register your interest and tell us which
            daily workflows matter most to you.
          </p>

          <div className="p-4 rounded-2xl bg-surfaceAlt/60 text-xs text-navy/70 max-w-xl mx-auto mb-10 leading-relaxed border border-surfaceAlt">
            This is an interest registration. It does not provide immediate
            product access. Features, eligibility and pricing will be confirmed
            as development progresses.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => {
                const el = document.getElementById('hospitality-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Join early access
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/demo')}
              className="px-8 py-3.5 h-auto rounded-full font-bold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Discuss your setup
            </Button>
          </div>
        </div>
      </section>

      {/* Workflow Priorities */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Which workflows should we prioritise?
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              We&apos;re considering the daily service requirements below. These
              are proposed development areas, not live features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {workflows.map((wf) => (
              <div
                key={wf.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy mb-2">{wf.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Registration Form */}
      <section
        id="hospitality-form"
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                    Tell us how your business actually runs.
                  </h2>
                  <p className="text-sm text-navy/70 leading-relaxed">
                    The number of outlets, your busiest service period and the
                    tools you use will help us understand the right
                    requirements.
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
                        Your Name
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter your name' },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-navy/40 mr-1" />}
                      placeholder="e.g. Samuel Mutua"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Form.Item
                      name="email"
                      label={
                        <span className="font-semibold text-navy text-sm">
                          Email Address
                        </span>
                      }
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Enter a valid email' },
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined className="text-navy/40 mr-1" />}
                        placeholder="samuel@example.com"
                        className="rounded-xl"
                      />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label={
                        <span className="font-semibold text-navy text-sm">
                          Phone / WhatsApp (Optional)
                        </span>
                      }
                    >
                      <Input
                        prefix={<PhoneOutlined className="text-navy/40 mr-1" />}
                        placeholder="07XX XXX XXX"
                        className="rounded-xl"
                      />
                    </Form.Item>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Form.Item
                      name="business_type"
                      label={
                        <span className="font-semibold text-navy text-sm">
                          Hospitality Category
                        </span>
                      }
                      rules={[
                        { required: true, message: 'Select business type' },
                      ]}
                    >
                      <Select
                        placeholder="Select category"
                        className="rounded-xl"
                      >
                        <Option value="restaurant">Restaurant</Option>
                        <Option value="cafe">Café / Bakery</Option>
                        <Option value="bar_lounge">Bar / Lounge</Option>
                        <Option value="hotel">Hotel / Lodging</Option>
                        <Option value="food_court">
                          Food Court / Takeaway
                        </Option>
                        <Option value="other">Other Hospitality</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="locations"
                      label={
                        <span className="font-semibold text-navy text-sm">
                          Number of Outlets
                        </span>
                      }
                      rules={[
                        { required: true, message: 'Select outlet count' },
                      ]}
                    >
                      <Select
                        placeholder="Number of outlets"
                        className="rounded-xl"
                      >
                        <Option value="1">1 location</Option>
                        <Option value="2-3">2 – 3 locations</Option>
                        <Option value="4+">4+ locations</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="city"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Town / City
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter town/city' },
                    ]}
                  >
                    <Input
                      prefix={
                        <EnvironmentOutlined className="text-navy/40 mr-1" />
                      }
                      placeholder="e.g. Nairobi, Naivasha"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="priority_workflow"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Most Important Workflow to Solve
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Tell us which workflow matters most',
                      },
                    ]}
                  >
                    <TextArea
                      rows={3}
                      placeholder="e.g. Order ticket sending to kitchen, fast bill splitting at tables, staff shift close reconciliation..."
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="contact_consent"
                    valuePropName="checked"
                    className="mb-6"
                  >
                    <Checkbox className="text-xs text-navy/70">
                      Permission to contact me by phone / WhatsApp regarding
                      hospitality research and eligibility updates.
                    </Checkbox>
                  </Form.Item>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                    className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
                  >
                    Join early access
                  </Button>
                </Form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                  <CheckCircleFilled style={{ color: '#1F2B5D' }} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Thanks for registering your interest.
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed mb-8 max-w-md mx-auto">
                  We&apos;ll contact you when there is relevant information
                  about eligibility, features or access. Registration does not
                  guarantee a place or a launch date.
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

      {/* FAQs */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Hospitality FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  What will it cost?
                </span>
              }
              key="1"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Pricing is not yet confirmed.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Will it work offline?
                </span>
              }
              key="2"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Connectivity requirements are being assessed.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can I use it now?
                </span>
              }
              key="3"
              className="bg-white rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                This page collects early-access interest. We will confirm when
                access is available.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Tell us what a useful hospitality setup needs to do."
        body="Register your interest to help test table management, order workflows, and staff permissions."
        primaryText="Join early access"
        primaryLink="#hospitality-form"
        secondaryText="Discuss your setup"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default HospitalityPage;
