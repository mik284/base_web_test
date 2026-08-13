import { CheckCircleFilled } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

import SEO from '@/components/SEO';

const MtejaPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Base Mteja | Customer Loyalty & CRM Platform"
        description="Turn transactions into repeat customers. Track customer preferences, automate loyalty rewards, and launch targeted SMS campaigns with Base Mteja."
        keywords="Base Mteja, Customer Loyalty Software Kenya, SMS Marketing CRM, Retail Rewards Program, Customer Retention"
        canonical="/base-mteja"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Base Mteja',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Android, iOS, Web',
          description:
            'All-in-one CRM for customer relationship management, loyalty programs, and personalized campaigns.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'KES',
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-mint/40 blur-[120px] rounded-full animate-float" />
          <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-electric/10 blur-[100px] rounded-full animate-float-delayed" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy/5 border border-navy/10">
            <span className="text-xs font-bold uppercase tracking-widest text-navy opacity-80 font-outfit">
              <span className="font-black">Base</span>{' '}
              <span className="font-medium opacity-70">Mteja</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-navy font-outfit">
            Grow and retain{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-electric to-mint-dark">
              your audience.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-navy/70 font-outfit leading-relaxed mb-10">
            All-in-one CRM designed to manage customer relationships, points,
            loyalty programs, and personalized SMS marketing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/pricing')}
              className="px-8 py-3.5 h-auto rounded-full font-bold font-outfit bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-md"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Product Overview & Visual */}
      <section className="py-16 bg-surfaceAlt/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 font-outfit">
            Know your customers
          </h2>
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100 aspect-video flex items-center justify-center">
            <span className="text-gray-400 font-medium text-lg font-outfit">
              Base Mteja CRM Dashboard
            </span>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-outfit">
                Why choose Base Mteja?
              </h2>
              <p className="text-lg text-navy/70 mb-8 font-outfit">
                Turn first-time buyers into loyal advocates. Base Mteja keeps
                track of customer history and coordinates your engagement
                campaigns effortlessly.
              </p>
              <div className="space-y-4">
                {[
                  'Customer 360-degree purchase history',
                  'Automated loyalty tier & point tracking',
                  'Targeted SMS and Email campaigns inline with sales',
                  'Feedback collection right after checkout',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleFilled className="text-mint text-xl mt-1" />
                    <span className="text-navy text-lg font-outfit">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {[
                {
                  title: 'Customer Success Teams',
                  desc: 'Identify VIPs and at-risk churn accounts easily.',
                },
                {
                  title: 'Marketing Managers',
                  desc: 'Send tailored promotions based on previous purchase behavior.',
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-surface border border-surfaceAlt shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-navy mb-2 font-outfit">
                    {useCase.title}
                  </h3>
                  <p className="text-navy/70 font-outfit">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MtejaPage;
