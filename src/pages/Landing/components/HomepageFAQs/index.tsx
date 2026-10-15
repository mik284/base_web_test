import { HOMEPAGE_FAQS } from '@/constants/landingData';
import { Collapse } from 'antd';
import React from 'react';

const { Panel } = Collapse;

const HomepageFAQs: React.FC = () => {
  return (
    <section className="py-24 bg-white font-sans border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Common questions about Base.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Clear information about software availability, setup help, and
            expectations.
          </p>
        </div>

        <div className="space-y-4">
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            className="bg-transparent"
          >
            {HOMEPAGE_FAQS.map((faq, index) => (
              <Panel
                key={String(index)}
                header={
                  <span className="font-bold text-base sm:text-lg text-navy">
                    {faq.question}
                  </span>
                }
                className="mb-4 bg-surface rounded-2xl border border-gray-100 overflow-hidden"
              >
                <p className="text-navy/70 leading-relaxed text-sm sm:text-base m-0 pt-2 pb-2">
                  {faq.answer}
                </p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQs;
