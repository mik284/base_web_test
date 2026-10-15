import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  CompassOutlined,
  FundProjectionScreenOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const standards = [
  {
    title: 'Speed',
    desc: 'Move a useful task forward with a clear next step.',
    icon: <ThunderboltOutlined className="text-2xl text-navy" />,
  },
  {
    title: 'Efficiency',
    desc: 'Focus on the work that matters to the business.',
    icon: <CheckCircleOutlined className="text-2xl text-navy" />,
  },
  {
    title: 'Frugality',
    desc: 'Make responsible use of time, money and tools.',
    icon: <CompassOutlined className="text-2xl text-navy" />,
  },
  {
    title: 'Accountability',
    desc: 'Be clear about commitments and review what happened.',
    icon: <FundProjectionScreenOutlined className="text-2xl text-navy" />,
  },
];

const CompanyPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Company | Basepoint Cloud Technologies"
        description="We're building Base to make business activity clearer. Practical business software and support for everyday operations in African trade."
        canonical="/company"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            ABOUT BASEPOINT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            We&apos;re building Base to make business activity clearer.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Basepoint Cloud Technologies is building business software and
            practical support around the needs of everyday operations. Our
            starting point is simple: clearer records make it easier to ask
            better questions and take the next step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/platform')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Explore Base <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/contact')}
              className="px-8 py-3.5 h-auto rounded-full font-semibold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Contact Basepoint
            </Button>
          </div>
        </div>
      </section>

      {/* Practical Standards */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our standard is practical.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Principles guiding how we design tools and serve African
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {standards.map((std) => (
              <div
                key={std.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mb-6">
                    {std.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {std.title}
                  </h3>
                  <p className="text-sm text-navy/70 leading-relaxed m-0">
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools, Knowledge and Relationships */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Tools, knowledge and relationships.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Base is the product ecosystem. Basepoint Learn provides practical
            operating guidance. Base Collabs brings experts, advisors and
            resellers into the network. Biashara AI represents the commercial
            intelligence concepts we are developing.
          </p>

          <div className="p-6 rounded-2xl bg-surfaceAlt/60 text-xs text-navy/60 max-w-xl mx-auto mb-8 border border-surfaceAlt">
            Basepoint Cloud Technologies is a trading name of Relia
            Technologies.
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Start with what you need today."
        body="Join businesses using Base to make everyday records and decisions clearer."
        primaryText="Start with Duka"
        primaryLink="/start"
        secondaryText="Get setup help"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default CompanyPage;
