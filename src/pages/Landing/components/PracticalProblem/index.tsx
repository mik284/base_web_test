import { HOMEPAGE_PROBLEM_CARDS } from '@/constants/landingData';
import {
  FileTextOutlined,
  InboxOutlined,
  PrinterOutlined,
} from '@ant-design/icons';
import React from 'react';

const iconMap: Record<string, React.ReactNode> = {
  'record-sale': <FileTextOutlined style={{ fontSize: 28 }} />,
  'track-stock': <InboxOutlined style={{ fontSize: 28 }} />,
  'issue-receipt': <PrinterOutlined style={{ fontSize: 28 }} />,
};

const PracticalProblem: React.FC = () => {
  return (
    <section className="py-24 bg-surface font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-3">
            THE PRACTICAL PROBLEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            A busy day should leave you with clear records.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            When sales and stock live in different places, reviewing the day
            takes more work. Duka gives you a practical place to start: record
            what you sell, keep stock records and issue receipts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOMEPAGE_PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: card.iconBg,
                  color: card.iconColor,
                }}
              >
                {iconMap[card.id] || (
                  <FileTextOutlined style={{ fontSize: 28 }} />
                )}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
              <p className="text-sm text-navy/70 leading-relaxed m-0">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalProblem;
