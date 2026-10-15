import {
  CheckCircleFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Checkbox, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

const { TextArea } = Input;
const { Option } = Select;

const CollabsApplyPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    const payload = {
      ...values,
      type: 'collab_application',
      submitted_at: new Date().toISOString(),
    };

    console.log('[Acquisition Event: collab_application_submitted]', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('Application received.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title="Apply to Base Collabs | Basepoint"
        description="Apply to Base Collabs. Share your experience, the businesses you serve and how you would like to work with Basepoint."
        canonical="/collabs/apply"
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-2">
                  BASE COLLABS · APPLICATION
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
                  Tell us how you help businesses.
                </h1>
                <p className="text-navy/70 text-base max-w-md mx-auto leading-relaxed">
                  Share your experience, the businesses you serve and how you
                  would like to work with Basepoint.
                </p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                requiredMark={false}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      prefix={<UserOutlined className="text-navy/40 mr-1" />}
                      placeholder="e.g. Mary Achieng"
                      className="rounded-xl"
                    />
                  </Form.Item>

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
                      placeholder="mary@example.com"
                      className="rounded-xl"
                    />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="phone"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Phone / WhatsApp
                      </span>
                    }
                  >
                    <Input
                      prefix={<PhoneOutlined className="text-navy/40 mr-1" />}
                      placeholder="07XX XXX XXX"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="role_interest"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Role Interest
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Select your role interest' },
                    ]}
                  >
                    <Select placeholder="Select role" className="rounded-xl">
                      <Option value="advisor">
                        Advisor / Business Consultant
                      </Option>
                      <Option value="reseller_onboarding">
                        Reseller / Onboarding Partner
                      </Option>
                      <Option value="champion_referrer">
                        Champion / Introducer
                      </Option>
                    </Select>
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="territory"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        City / Territory
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Enter your city or area' },
                    ]}
                  >
                    <Input
                      prefix={
                        <EnvironmentOutlined className="text-navy/40 mr-1" />
                      }
                      placeholder="e.g. Eldoret, Nakuru, Nairobi East"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="network_range"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Existing Business Network
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Select network range' },
                    ]}
                  >
                    <Select
                      placeholder="Select network size"
                      className="rounded-xl"
                    >
                      <Option value="1-10">
                        1 – 10 retail/business contacts
                      </Option>
                      <Option value="11-50">11 – 50 contacts</Option>
                      <Option value="51-200">51 – 200 contacts</Option>
                      <Option value="200+">200+ contacts</Option>
                    </Select>
                  </Form.Item>
                </div>

                <Form.Item
                  name="industries_served"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Industries Served
                    </span>
                  }
                  rules={[{ required: true, message: 'Enter industries' }]}
                >
                  <Input
                    placeholder="e.g. General retail, hardware, agrovet, beauty, wholesale"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  name="relevant_experience"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Relevant Experience & Proposed Collaboration
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Tell us about your experience with businesses',
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Describe your background helping local businesses, tools you recommend, and how you would introduce Base..."
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  name="contact_consent"
                  valuePropName="checked"
                  className="mb-6"
                >
                  <Checkbox className="text-xs text-navy/70">
                    I agree to be contacted via phone / WhatsApp regarding this
                    application and partnership coordination.
                  </Checkbox>
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
                >
                  Send application
                </Button>
              </Form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                <CheckCircleFilled style={{ color: '#1F2B5D' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                We&apos;ve received your application.
              </h2>
              <p className="text-sm text-navy/70 leading-relaxed mb-8 max-w-md mx-auto">
                We&apos;ll review the fit and contact you about the next step.
                Submission does not confirm membership or commercial terms.
              </p>
              <Button
                type="primary"
                onClick={() => history.push('/collabs')}
                className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy text-white"
              >
                Back to Collabs
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollabsApplyPage;
