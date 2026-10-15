import {
  CheckCircleFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history, useLocation } from '@umijs/max';
import { Button, Form, Input, message, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import SEO from '@/components/SEO';

const { TextArea } = Input;
const { Option } = Select;

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const intent = params.get('intent');
    if (intent === 'referral') {
      form.setFieldsValue({
        category: 'partnership',
        message:
          'I would like to discuss introducing businesses to Basepoint and receiving an assigned referral link.',
      });
    } else if (intent === 'support') {
      form.setFieldsValue({
        category: 'support',
      });
    }
  }, [location.search, form]);

  const onFinish = (values: any) => {
    setLoading(true);

    const payload = {
      ...values,
      type: 'general_contact_message',
      submitted_at: new Date().toISOString(),
    };

    console.log('[Contact Event: message_submitted]', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('Your message has been received.');
    }, 1000);
  };

  return (
    <div className="font-sans min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Contact Basepoint | Support, Sales and Partnerships"
        description="Tell us what you need help with. Choose a product question, setup request, partnership enquiry or support issue so we can direct your message."
        canonical="/contact"
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-3">
            CONTACT BASEPOINT
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-navy mb-4">
            Tell us what you need help with.
          </h1>
          <p className="text-base sm:text-lg text-navy/70 max-w-xl mx-auto leading-relaxed">
            Choose a product question, setup request, partnership enquiry or
            support issue so we can direct your message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-4 text-navy">
              <MailOutlined className="text-xl" />
            </div>
            <h3 className="font-bold text-navy text-base mb-2">Email</h3>
            <p className="text-sm text-navy/70 m-0">
              <a
                href="mailto:info@basepoint.co.ke"
                className="text-navy hover:underline"
              >
                info@basepoint.co.ke
              </a>
              <br />
              <a
                href="mailto:community@basepoint.co.ke"
                className="text-navy hover:underline"
              >
                community@basepoint.co.ke
              </a>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-4 text-navy">
              <PhoneOutlined className="text-xl" />
            </div>
            <h3 className="font-bold text-navy text-base mb-2">Telephone</h3>
            <p className="text-sm text-navy/70 m-0">
              <a href="tel:+254746665877" className="text-navy hover:underline">
                +254 746 665 877
              </a>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-4 text-navy">
              <EnvironmentOutlined className="text-xl" />
            </div>
            <h3 className="font-bold text-navy text-base mb-2">Location</h3>
            <p className="text-sm text-navy/70 m-0">
              CMS Africa, Chania Avenue
              <br />
              Kilimani, Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 max-w-2xl mx-auto">
          {!submitted ? (
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
                    placeholder="e.g. Kelvin Mutua"
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
                    placeholder="kelvin@example.com"
                    className="rounded-xl"
                  />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Form.Item
                  name="category"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Enquiry Category
                    </span>
                  }
                  rules={[
                    { required: true, message: 'Select enquiry category' },
                  ]}
                >
                  <Select placeholder="Select category" className="rounded-xl">
                    <Option value="product_question">Product Question</Option>
                    <Option value="setup_request">Setup Request</Option>
                    <Option value="partnership">Partnership Enquiry</Option>
                    <Option value="support">Technical Support</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Phone Number (Optional)
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

              <Form.Item
                name="business_name"
                label={
                  <span className="font-semibold text-navy text-sm">
                    Business Name (Optional)
                  </span>
                }
              >
                <Input
                  placeholder="e.g. Apex Hardware Ltd"
                  className="rounded-xl"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={
                  <span className="font-semibold text-navy text-sm">
                    Your Message
                  </span>
                }
                rules={[
                  { required: true, message: 'Please enter your message' },
                ]}
              >
                <TextArea
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  className="rounded-xl"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
              >
                Send message
              </Button>
            </Form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                <CheckCircleFilled style={{ color: '#1F2B5D' }} />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">
                Your message has been received.
              </h2>
              <p className="text-sm text-navy/70 leading-relaxed mb-8 max-w-md mx-auto">
                We&apos;ll direct your message to the relevant team and respond
                to you directly.
              </p>
              <Button
                type="primary"
                onClick={() => history.push('/')}
                className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy text-white"
              >
                Return to Homepage
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
