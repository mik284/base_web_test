import {
  CheckCircleFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history, useLocation } from '@umijs/max';
import { Button, Form, Input, message, Radio, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import SEO from '@/components/SEO';

const { TextArea } = Input;
const { Option } = Select;

const DemoPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  const [contextInfo, setContextInfo] = useState<{
    intent?: string;
    product?: string;
    segment?: string;
  }>({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const intent = params.get('intent') || undefined;
    const product = params.get('product') || undefined;
    const segment = params.get('segment') || undefined;
    setContextInfo({ intent, product, segment });

    // Pre-populate need description if contextual intent exists
    if (intent === 'support') {
      form.setFieldsValue({
        need_description:
          'I would like to discuss hands-on setup support and Collabs assistance for my business.',
      });
    } else if (product) {
      form.setFieldsValue({
        need_description: `I would like to explore ${product.toUpperCase()} availability, requirements and fit for our business.`,
      });
    } else if (segment === 'distributor') {
      form.setFieldsValue({
        need_description:
          'We are a distributor/wholesaler looking to understand visibility across our retail network.',
        locations: 'multiple',
      });
    } else if (segment === 'enterprise') {
      form.setFieldsValue({
        need_description:
          'We have multi-location and complex team operations and want to discuss coordinated rollout.',
        locations: 'multiple',
      });
    }
  }, [location.search, form]);

  const onFinish = (values: any) => {
    setLoading(true);

    const payload = {
      ...values,
      context: contextInfo,
      submitted_at: new Date().toISOString(),
    };

    console.log('[Acquisition Event: conversation_requested]', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('Request received. We will be in touch shortly.');
    }, 1000);
  };

  const getContextBadge = () => {
    if (contextInfo.intent === 'support')
      return 'Inquiring about Setup Support';
    if (contextInfo.product)
      return `Inquiring about ${contextInfo.product.toUpperCase()}`;
    if (contextInfo.segment === 'distributor')
      return 'Distribution Network Inquiry';
    if (contextInfo.segment === 'enterprise')
      return 'Growing & Complex Operations Inquiry';
    return null;
  };

  return (
    <div className="min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title="Tell Us About Your Setup | Basepoint"
        description="Discuss your retail, finance, or distribution operation with Basepoint. We'll assess fit and help you choose the right next step."
        canonical="/demo"
      />

      <div className="max-w-2xl mx-auto">
        {getContextBadge() && (
          <div className="mb-6 p-3 rounded-xl bg-navy/5 border border-navy/10 text-center text-xs font-semibold text-navy">
            {getContextBadge()}
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-2">
                  ASSISTED INTAKE
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
                  Tell us about your setup.
                </h1>
                <p className="text-navy/70 text-base max-w-md mx-auto leading-relaxed">
                  Help us understand your business and what you want to change.
                  We&apos;ll use this to discuss the right next step.
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
                    name="full_name"
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
                      placeholder="e.g. John Kamau"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="business_name"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Business Name
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter business name' },
                    ]}
                  >
                    <Input
                      prefix={<ShopOutlined className="text-navy/40 mr-1" />}
                      placeholder="e.g. Kamau Wholesalers"
                      className="rounded-xl"
                    />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder="john@example.com"
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Phone / WhatsApp
                      </span>
                    }
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your phone number',
                      },
                    ]}
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
                        Business Type
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Select business type' },
                    ]}
                  >
                    <Select placeholder="Select type" className="rounded-xl">
                      <Option value="retail_store">Retail Store / Shop</Option>
                      <Option value="supermarket">
                        Supermarket / Mini-mart
                      </Option>
                      <Option value="wholesaler_distributor">
                        Wholesaler / Distributor
                      </Option>
                      <Option value="hospitality">
                        Restaurant / Café / Bar
                      </Option>
                      <Option value="pharmacy">Pharmacy / Healthcare</Option>
                      <Option value="services">Professional Services</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="locations"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Number of Outlets
                      </span>
                    }
                    rules={[{ required: true, message: 'Select outlet count' }]}
                  >
                    <Select
                      placeholder="Number of outlets"
                      className="rounded-xl"
                    >
                      <Option value="1">1 outlet</Option>
                      <Option value="2-3">2 – 3 outlets</Option>
                      <Option value="4-10">4 – 10 outlets</Option>
                      <Option value="10+">10+ outlets</Option>
                    </Select>
                  </Form.Item>
                </div>

                <Form.Item
                  name="city"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Location / City
                    </span>
                  }
                >
                  <Input
                    prefix={
                      <EnvironmentOutlined className="text-navy/40 mr-1" />
                    }
                    placeholder="e.g. Nairobi, Kisumu, Mombasa"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  name="need_description"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      What are you trying to organize or improve?
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message:
                        'Please briefly describe your current workflow and needs',
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Tell us about your current tools, stock reconciliation, team coordination, or what breaks down during the week..."
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  name="preferred_contact"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Preferred Contact Method
                    </span>
                  }
                  initialValue="whatsapp"
                >
                  <Radio.Group className="flex gap-4">
                    <Radio value="whatsapp">WhatsApp</Radio>
                    <Radio value="phone">Phone Call</Radio>
                    <Radio value="email">Email</Radio>
                  </Radio.Group>
                </Form.Item>

                <div className="p-4 rounded-2xl bg-surfaceAlt/50 text-xs text-navy/70 mb-6 leading-relaxed">
                  We use these details only to discuss your setup and recommend
                  a fitting approach. Scope, support terms and any fees are
                  always confirmed before work begins.
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
                >
                  Request a conversation
                </Button>
              </Form>

              <div className="mt-8 text-center border-t border-gray-100 pt-6">
                <span className="text-sm text-navy/60">
                  Just need standard retail sales and stock tracking today?
                </span>{' '}
                <button
                  type="button"
                  onClick={() => history.push('/start')}
                  className="text-sm font-bold text-navy hover:underline bg-transparent border-0 cursor-pointer p-0 ml-1"
                >
                  Start with Duka directly
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                <CheckCircleFilled style={{ color: '#1F2B5D' }} />
              </div>

              <h2 className="text-3xl font-bold text-navy mb-3">
                We&apos;ve received your request.
              </h2>

              <p className="text-navy/70 text-base max-w-md mx-auto mb-8 leading-relaxed">
                Thank you for telling us about your setup. We&apos;ll review
                your operational requirements and contact you through your
                selected method to discuss next steps.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  type="primary"
                  onClick={() => history.push('/')}
                  className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy"
                >
                  Return to Homepage
                </Button>
                <Button
                  onClick={() => history.push('/resources')}
                  className="px-6 py-3.5 h-auto rounded-full font-semibold border-navy text-navy"
                >
                  Explore Learn Guides
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
