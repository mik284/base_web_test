import {
  ArrowRightOutlined,
  DollarOutlined,
  ShopOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse, Tag } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const products = [
  {
    name: 'Duka',
    role: 'Sales and stock',
    status: 'Available',
    body: 'Record sales, track stock and issue receipts.',
    cta: 'Explore Duka',
    href: '/products/duka',
    icon: <ShopOutlined className="text-2xl text-navy" />,
  },
  {
    name: 'Pesa',
    role: 'Financial records',
    status: 'In development',
    body: 'Explore Pesa’s approach to money and financial records.',
    cta: 'Explore Pesa',
    href: '/products/pesa',
    icon: <DollarOutlined className="text-2xl text-navy" />,
  },
  {
    name: 'Mteja',
    role: 'Customer relationships',
    status: 'In development',
    body: 'Explore Mteja’s approach to customer records and relationships.',
    cta: 'Explore Mteja',
    href: '/products/mteja',
    icon: <TeamOutlined className="text-2xl text-navy" />,
  },
  {
    name: 'Bandu',
    role: 'People administration',
    status: 'In development',
    body: 'Explore Bandu’s approach to people and team administration.',
    cta: 'Explore Bandu',
    href: '/products/bandu',
    icon: <UsergroupAddOutlined className="text-2xl text-navy" />,
  },
];

const PlatformPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Base | Explore the Product Ecosystem"
        description="Start with Duka and explore Pesa, Mteja and Bandu. Check current product availability and discuss the setup your business needs."
        canonical="/platform"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            THE BASE ECOSYSTEM
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Start with clearer operations. Build from there.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Base brings a family of business products under one identity. Start
            with Duka&apos;s sales, stock and receipts, and explore the products
            relevant to your next business need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/products/duka')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Explore Duka
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

      {/* Product Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              A clear job for every product.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Each product is built around a distinct operating task. Status is
              clearly communicated before any setup begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center">
                      {p.icon}
                    </div>
                    <Tag
                      bordered={false}
                      className="text-xs font-semibold px-2.5 py-1 m-0"
                      style={{
                        backgroundColor:
                          p.status === 'Available' ? '#8AFEA7' : '#F0F3F8',
                        color: '#1F2B5D',
                      }}
                    >
                      {p.status}
                    </Tag>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    {p.name}
                    <span className="text-sm font-normal text-navy/60 block mt-1">
                      {p.role}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-navy/70 leading-relaxed mb-8">
                    {p.body}
                  </p>
                </div>
                <div>
                  <Button
                    type="default"
                    onClick={() => history.push(p.href)}
                    className="h-auto py-2.5 px-6 rounded-full font-bold border-navy text-navy hover:bg-navy/5 text-sm"
                  >
                    {p.cta} <ArrowRightOutlined className="ml-1 text-xs" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Need Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
            Choose the next product around a real need.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed mb-8">
            A second product should solve a problem you can name. Tell us where
            your current process breaks down, and we&apos;ll discuss which
            available product or support option fits.
          </p>
          <Button
            size="large"
            onClick={() => history.push('/demo')}
            className="px-8 py-3.5 h-auto rounded-full font-bold border-2 border-navy text-navy hover:bg-navy/5 text-base"
          >
            Discuss your setup
          </Button>
        </div>
      </section>

      {/* Guidance & Support Layer */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                Records, practical guidance and people.
              </h3>
              <p className="text-base text-navy/70 leading-relaxed m-0">
                Use Basepoint Learn for operating guidance. Ask about setup
                support when you need it. Explore Biashara AI to see the
                intelligence concepts we&apos;re developing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Button
                type="primary"
                onClick={() => history.push('/resources')}
                className="px-6 py-3 h-auto rounded-full font-bold bg-navy border-navy"
              >
                Explore Learn
              </Button>
              <Button
                onClick={() => history.push('/solutions/biashara-ai')}
                className="px-6 py-3 h-auto rounded-full font-semibold border-navy text-navy"
              >
                Explore Biashara AI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform FAQs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Are all products included together?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Product access and pricing are confirmed for each offer. Check
                the pricing page or ask about your intended setup.
              </p>
            </Panel>
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Do the products share data automatically?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We&apos;ll confirm which connections are supported for the
                products and workflows you need.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Begin with the job you need to do today."
        body="Start with Duka's sales, stock and receipts. Build a dependable record of the day, then explore more of Base as your needs expand."
        primaryText="Explore Duka"
        primaryLink="/products/duka"
        secondaryText="Discuss your setup"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default PlatformPage;
