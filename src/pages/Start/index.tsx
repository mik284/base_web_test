import {
  CheckCircleFilled,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history, useLocation } from '@umijs/max';
import { Button, Form, Input, message, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import SEO from '@/components/SEO';

const { Option } = Select;

const StartPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [provisioned, setProvisioned] = useState(false);
  const [accountDetails, setAccountDetails] = useState<any>(null);
  const location = useLocation();

  // Extract UTMs, referral and collab IDs from query string
  const [trackingContext, setTrackingContext] = useState<
    Record<string, string>
  >({
    acquisition_motion: 'self_serve',
    acquisition_channel: 'organic',
    landing_page: '/start',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    referral_code: '',
    collab_id: '',
    first_touch_timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const utmSource = params.get('utm_source') || '';
    const utmMedium = params.get('utm_medium') || '';
    const utmCampaign = params.get('utm_campaign') || '';
    const refCode = params.get('ref') || params.get('referral_code') || '';
    const collabId =
      params.get('collab_id') || (refCode.startsWith('COLLAB-') ? refCode : '');

    let detectedChannel = 'organic';
    if (refCode || collabId) detectedChannel = 'referral_collab';
    else if (
      utmMedium === 'cpc' ||
      utmSource.includes('google') ||
      utmSource.includes('search')
    )
      detectedChannel = 'search';
    else if (
      utmMedium.includes('social') ||
      utmSource.includes('instagram') ||
      utmSource.includes('facebook')
    )
      detectedChannel = 'social';
    else if (utmSource.includes('partner')) detectedChannel = 'partner';

    setTrackingContext({
      acquisition_motion: 'self_serve',
      acquisition_channel: detectedChannel,
      landing_page: '/start',
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      referral_code: refCode,
      collab_id: collabId,
      first_touch_timestamp: new Date().toISOString(),
    });
  }, [location.search]);

  const onFinish = (values: any) => {
    setLoading(true);

    const submissionPayload = {
      ...values,
      attribution: trackingContext,
      product: 'duka',
      submitted_at: new Date().toISOString(),
    };

    console.log('[Acquisition Event: signup_started]', submissionPayload);

    // Simulate reliable provisioning pipeline
    setTimeout(() => {
      setLoading(false);
      setProvisioned(true);
      setAccountDetails(submissionPayload);
      message.success('Duka account created successfully!');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title="Start with Duka | Basepoint"
        description="Create your Duka account to begin recording sales, tracking stock and issuing receipts."
        canonical="/start"
      />

      <div className="max-w-2xl mx-auto">
        {/* Attribution Badge if referred */}
        {(trackingContext.collab_id || trackingContext.referral_code) && (
          <div className="mb-6 p-3 rounded-xl bg-mint/20 border border-mint/40 text-center text-xs font-semibold text-navy">
            Referred by Partner:{' '}
            <span className="font-mono font-bold">
              {trackingContext.collab_id || trackingContext.referral_code}
            </span>
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          {!provisioned ? (
            <>
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-2">
                  DUKA · ACCOUNT CREATION
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
                  Start with Duka.
                </h1>
                <p className="text-navy/70 text-base max-w-md mx-auto leading-relaxed">
                  Create your account to begin setting up your sales, stock and
                  receipts.
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
                  name="business_name"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Shop or Business Name
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your business name',
                    },
                  ]}
                >
                  <Input
                    prefix={<ShopOutlined className="text-navy/40 mr-1" />}
                    placeholder="e.g. Riverbank General Store"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  name="full_name"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Your Full Name
                    </span>
                  }
                  rules={[
                    { required: true, message: 'Please enter your full name' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="text-navy/40 mr-1" />}
                    placeholder="e.g. Grace Wanjiku"
                    className="rounded-xl"
                  />
                </Form.Item>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="phone"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Phone (for SMS / WhatsApp receipts)
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
                      placeholder="you@example.com"
                      className="rounded-xl"
                    />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="business_type"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Shop Category
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Select your business type' },
                    ]}
                  >
                    <Select
                      placeholder="Select category"
                      className="rounded-xl"
                    >
                      <Option value="general_retail">
                        General Retail / Duka
                      </Option>
                      <Option value="cosmetics_beauty">
                        Cosmetics & Beauty
                      </Option>
                      <Option value="clothing_boutique">
                        Boutique & Apparel
                      </Option>
                      <Option value="electronics">Electronics & Repair</Option>
                      <Option value="pharmacy_chemist">Chemist / Health</Option>
                      <Option value="hardware">Hardware & Tools</Option>
                      <Option value="agrovet">Agrovet / Farming</Option>
                      <Option value="other">Other Retail</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="city"
                    label={
                      <span className="font-semibold text-navy text-sm">
                        Location / Town
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter town/city' },
                    ]}
                  >
                    <Input
                      placeholder="e.g. Nairobi CBD"
                      className="rounded-xl"
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  name="password"
                  label={
                    <span className="font-semibold text-navy text-sm">
                      Create Password
                    </span>
                  }
                  rules={[
                    { required: true, message: 'Please create a password' },
                    { min: 6, message: 'Must be at least 6 characters' },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-navy/40 mr-1" />}
                    placeholder="••••••••"
                    className="rounded-xl"
                  />
                </Form.Item>

                <div className="p-4 rounded-2xl bg-surfaceAlt/50 border border-surfaceAlt text-xs text-navy/70 mb-6 leading-relaxed flex items-start gap-3">
                  <SafetyCertificateOutlined className="text-base text-navy mt-0.5" />
                  <span>
                    By creating an account, you agree to our{' '}
                    <a
                      href="/terms"
                      className="text-navy font-semibold underline"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="/privacy"
                      className="text-navy font-semibold underline"
                    >
                      Privacy Policy
                    </a>
                    . Account setup is confirmed before billing begins.
                  </span>
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  className="h-14 rounded-full font-bold text-base bg-navy border-navy hover:bg-navy/90 shadow-md"
                >
                  Create account
                </Button>
              </Form>

              <div className="mt-8 text-center border-t border-gray-100 pt-6">
                <span className="text-sm text-navy/60">
                  Need help with migration, multi-branch, or custom setup?
                </span>{' '}
                <button
                  type="button"
                  onClick={() => history.push('/demo')}
                  className="text-sm font-bold text-navy hover:underline bg-transparent border-0 cursor-pointer p-0 ml-1"
                >
                  Get setup help
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-navy flex items-center justify-center mx-auto mb-6 text-3xl">
                <CheckCircleFilled style={{ color: '#1F2B5D' }} />
              </div>

              <h2 className="text-3xl font-bold text-navy mb-3">
                Your Duka workspace is ready!
              </h2>

              <p className="text-navy/70 text-base max-w-md mx-auto mb-8 leading-relaxed">
                Welcome, {accountDetails?.full_name}. Your account for{' '}
                <span className="font-semibold text-navy">
                  {accountDetails?.business_name}
                </span>{' '}
                has been provisioned. You can now begin recording sales and
                setting up your inventory.
              </p>

              <div className="p-6 rounded-2xl bg-surface text-left max-w-md mx-auto mb-8 border border-gray-100">
                <h4 className="font-bold text-navy text-sm mb-3">
                  First steps for your shop:
                </h4>
                <ol className="list-decimal pl-5 text-xs text-navy/70 space-y-2 m-0">
                  <li>Add your first 5 products and selling prices.</li>
                  <li>Record a test sale and preview the receipt.</li>
                  <li>
                    Review the daily close guide for your evening routine.
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.basepoint.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-navy text-white hover:bg-navy/90 text-center shadow-md text-base"
                  style={{ textDecoration: 'none' }}
                >
                  Go to Duka App
                </a>
                <Button
                  onClick={() => history.push('/resources/daily-close')}
                  className="w-full sm:w-auto px-6 py-3.5 h-auto rounded-full font-semibold border-navy text-navy"
                >
                  Read Daily Review Guide
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
