import {
  CheckCircleFilled,
  EnvironmentOutlined,
  MailOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

const { TextArea } = Input;
const { Option } = Select;

const PartnersApplyPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    const payload = {
      ...values,
      type: 'strategic_partnership_enquiry',
      submitted_at: new Date().toISOString(),
    };

    console.log('[Acquisition Event: partnership_enquiry_submitted]', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('Enquiry received.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title="Partnership Enquiry | Basepoint"
        description="Describe the partnership you have in mind. Tell us who you serve, the problem you want to address and how you would like to work with Basepoint."
        canonical="/partners/apply"
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-2">
                  STRATEGIC PARTNERSHIPS · ENQUIRY
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
                  Describe the partnership you have in mind.
                </h1>
                <p className="text-navy/70 text-base max-w-md mx-auto leading-relaxed">
                  Tell us who you serve, the problem you want to address and how
                  you would like to work with Basepoint.
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
                        Your Name
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter your name' },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-navy/40 mr-1" />}
                      placeholder="e.g. Angela Ochieng"
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
                      prefix={<MailOutlined className="text-navy/40 mr-1" />}
                      placeholder="angela@institution.org"
                      className="rounded-xl"
                    />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="organisation"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Organisation Name
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Enter organisation name' },
                    ]}
                  >
                    <Input
                      prefix={<ShopOutlined className="text-navy/40 mr-1" />}
                      placeholder="e.g. Kenya Traders Alliance"
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
                      <Option value="industry_association">
                        Industry / Trade Association
                      </Option>
                      <Option value="distributor_fmcg">
                        Distributor / FMCG Brand
                      </Option>
                      <Option value="financial_fintech">
                        Financial Institution / Fintech
                      </Option>
                      <Option value="technology_isv">
                        Technology Provider / ISV
                      </Option>
                      <Option value="development_ngo">
                        Development Organisation / NGO
                      </Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="territory"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        City / Country
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Enter city and country' },
                    ]}
                  >
                    <Input
                      prefix={
                        <EnvironmentOutlined className="text-navy/40 mr-1" />
                      }
                      placeholder="e.g. Nairobi, Kenya"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="partnership_area"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Partnership Area
                      </span>
                    }
                    rules={[{ required: true, message: 'Select area' }]}
                  >
                    <Select placeholder="Select area" className="rounded-xl">
                      <Option value="distribution_adoption">
                        Distribution and Adoption
                      </Option>
                      <Option value="business_support">
                        Business Support and Training
                      </Option>
                      <Option value="product_intelligence">
                        Product & Biashara AI Exploration
                      </Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </div>

                <Form.Item
                  name="problem_value_proposal"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Proposed Problem & Value on Both Sides
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Please describe the problem and proposed value',
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Tell us who you serve, the operational challenge you want to address, and how each organisation contributes..."
                    className="rounded-xl"
                  />
                </Form.Item>

                <div className="p-4 rounded-2xl bg-surfaceAlt/60 text-xs text-navy/70 mb-6 leading-relaxed">
                  We&apos;ll review your enquiry and reach out to discuss
                  potential collaboration fit. No partnership, integration or
                  data access is confirmed by submission.
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
                >
                  Send partnership enquiry
                </Button>
              </Form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                <CheckCircleFilled style={{ color: '#1F2B5D' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                We&apos;ve received your enquiry.
              </h2>
              <p className="text-sm text-navy/70 leading-relaxed mb-8 max-w-md mx-auto">
                Thank you for reaching out. We&apos;ll review the proposed fit
                and contact you about the next step. No partnership, integration
                or data access is confirmed by submission.
              </p>
              <Button
                type="primary"
                onClick={() => history.push('/partners')}
                className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy text-white"
              >
                Back to Partnerships
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnersApplyPage;
