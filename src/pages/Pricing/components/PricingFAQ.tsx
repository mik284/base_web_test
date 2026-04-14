import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const FAQS = [
  {
    q: 'Can I change my plan later?',
    a: 'Absolutely! You can upgrade or downgrade your plan at any time from your dashboard. If you upgrade, the price difference will be prorated. If you downgrade, you will receive credit toward your next billing cycle.'
  },
  {
    q: 'Do you offer custom pricing for large enterprises?',
    a: 'Yes, we do. If you have unique requirements, multiple branches, or complex integration needs, contact our sales team for a custom quote tailored to your scale.'
  },
  {
    q: 'Is there a setup fee?',
    a: 'No, there are no hidden setup fees. All our plans are straightforward and transparent. You only pay the monthly or annual subscription fee.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept M-Pesa, all major credit/debit cards (Visa, Mastercard), and bank transfers. For annual plans, we can also provide formal invoices for corporate accounting.'
  },
  {
    q: 'Is my data secure?',
    a: 'Security is our top priority. We use bank-grade encryption for all data transmissions, perform automated daily backups, and host our infrastructure on highly secure primary cloud providers with 99.9% uptime.'
  }
];

const PricingFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surfaceAlt">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy font-outfit mb-4">Frequently Asked Questions</h2>
          <p className="text-navy/60 font-medium font-outfit">Everything you need to know about our pricing and services.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-white overflow-hidden shadow-soft transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-transparent border-0 cursor-pointer"
              >
                <span className="text-base md:text-lg font-bold text-navy font-outfit pr-4">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? 'bg-navy text-white' : 'bg-surface text-navy'}`}>
                  {openIdx === idx ? <MinusOutlined /> : <PlusOutlined />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-8 pt-0 text-navy/60 font-medium font-outfit leading-relaxed border-t border-surface">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
