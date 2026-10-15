import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import { history, Link } from '@umijs/max';
import { Button, Collapse } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const pricingFaqs = [
  {
    question: 'What does the starting offer include?',
    answer:
      'The offer includes core Duka sales recording, stock tracking and receipts for a single-outlet retail business. Ask us before starting if any requirement is unclear.',
  },
  {
    question: 'Is setup help included?',
    answer:
      'Assistance, scope and fees are confirmed separately unless the offer explicitly includes them.',
  },
  {
    question: 'Does starting an account mean my business is fully set up?',
    answer:
      'No. Account creation and completing your first useful workflow (like catalog entry and your first sale) are separate steps.',
  },
  {
    question: 'Can I add products later?',
    answer:
      'Availability and access depend on the product and offer. Ask about the next product (Pesa, Mteja, Bandu) when you have a clear need.',
  },
  {
    question: 'Is Biashara AI included?',
    answer: 'No. Biashara AI is in development and has a separate waitlist.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'Approved offers show their cancellation process and applicable terms before purchase.',
  },
];

const otherProducts = [
  {
    name: 'Pesa',
    role: 'Financial records',
    href: '/products/pesa',
    status: 'In development',
  },
  {
    name: 'Mteja',
    role: 'Customer relationships',
    href: '/products/mteja',
    status: 'In development',
  },
  {
    name: 'Bandu',
    role: 'People administration',
    href: '/products/bandu',
    status: 'In development',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Basepoint Pricing | Duka and Setup Options"
        description="Confirm the current Duka offer or discuss a more complex operation. Review product access, support scope and pricing before starting."
        canonical="/pricing"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            PLANS & SETUP OPTIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Start with the job you need to do.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-6 leading-relaxed">
            Choose a Duka starting point or discuss a more complex setup.
            Confirm product access, support and costs before you commit.
          </p>
          <div className="p-3 bg-surface rounded-xl max-w-md mx-auto text-xs text-navy/60 border border-surfaceAlt">
            Contact us to confirm current Duka pricing and the offer available
            for your setup.
          </div>
        </div>
      </section>

      {/* Dual Options Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A: Everyday Retail */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-mint/30 text-navy font-bold text-xs mb-6">
                  EVERYDAY RETAIL
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Duka for everyday retail.
                </h2>
                <p className="text-base text-navy/70 leading-relaxed mb-6">
                  Sales recording, stock tracking and receipts.
                </p>

                <ul className="space-y-3 mb-8 list-none p-0 text-sm text-navy/80">
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-mint text-base" />
                    <span>Record daily sales & transaction history</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-mint text-base" />
                    <span>Track stock & compare physical counts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-mint text-base" />
                    <span>Issue digital or thermal receipts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-mint text-base" />
                    <span>Standard single-outlet retail workflow</span>
                  </li>
                </ul>
              </div>

              <div>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => history.push('/start')}
                  className="w-full h-auto py-3.5 rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
                >
                  Start with Duka <ArrowRightOutlined className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Card B: Complex Operation */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-surfaceAlt text-navy font-bold text-xs mb-6">
                  COMPLEX OPERATIONS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                  A more complex operation.
                </h2>
                <p className="text-base text-navy/70 leading-relaxed mb-6">
                  Discuss multiple locations, implementation needs or custom
                  requirements. We&apos;ll confirm scope before providing a
                  proposal.
                </p>

                <ul className="space-y-3 mb-8 list-none p-0 text-sm text-navy/80">
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-navy text-base" />
                    <span>Multi-outlet inventory coordination</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-navy text-base" />
                    <span>Distributor or supply-chain visibility</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-navy text-base" />
                    <span>Catalog migration & staff onboarding support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleFilled className="text-navy text-base" />
                    <span>Custom workflows & partner agreements</span>
                  </li>
                </ul>
              </div>

              <div>
                <Button
                  size="large"
                  onClick={() => history.push('/demo')}
                  className="w-full h-auto py-3.5 rounded-full font-bold border-2 border-navy text-navy hover:bg-navy/5 text-base"
                >
                  Discuss your setup <ArrowRightOutlined className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interested in another Base product? */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Interested in another Base product?
          </h2>
          <p className="text-base text-navy/70 leading-relaxed mb-8">
            Ask about Pesa, Mteja or Bandu to confirm availability, scope and
            pricing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {otherProducts.map((p) => (
              <Link
                key={p.name}
                to={p.href}
                className="p-5 rounded-2xl bg-surface border border-gray-100 hover:border-navy/30 transition-colors block text-navy"
                style={{ textDecoration: 'none' }}
              >
                <div className="font-bold text-base mb-1">{p.name}</div>
                <div className="text-xs text-navy/60">{p.role}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-24 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-12">
            Pricing FAQs
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            {pricingFaqs.map((faq, i) => (
              <Panel
                key={String(i)}
                header={
                  <span className="font-bold text-navy text-base">
                    {faq.question}
                  </span>
                }
                className="bg-white rounded-2xl border border-gray-100"
              >
                <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                  {faq.answer}
                </p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Start with what you need."
        body="Confirm product access, support and costs before starting your retail setup."
        primaryText="Start with Duka"
        primaryLink="/start"
        secondaryText="Discuss your setup"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default PricingPage;
