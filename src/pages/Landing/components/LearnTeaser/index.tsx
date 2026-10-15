import { ArrowRightOutlined, BookOutlined } from '@ant-design/icons';
import { history, Link } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const guides = [
  {
    title: 'A simple daily review for your shop',
    summary:
      'Take a few minutes to check the day’s records and choose what needs attention tomorrow.',
    href: '/resources/daily-close',
    tag: 'Daily Close',
  },
  {
    title: 'Make a stock count useful',
    summary:
      'Count consistently, investigate differences and leave a record someone else can understand.',
    href: '/resources/stock-count',
    tag: 'Stock Management',
  },
  {
    title: 'Questions to answer before opening a second outlet',
    summary:
      'Check whether your records, people and routines can support another location.',
    href: '/resources/second-outlet',
    tag: 'Readiness & Growth',
  },
];

const LearnTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-surface font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs mb-3">
            <BookOutlined />
            <span>BASEPOINT LEARN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Make your next business review more useful.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Start with practical guides to reviewing daily records, counting
            stock and preparing for another outlet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              to={guide.href}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-navy/20 transition-all flex flex-col justify-between block"
              style={{ textDecoration: 'none' }}
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-surfaceAlt text-navy font-bold text-[11px] mb-4">
                  {guide.tag}
                </span>
                <h3 className="text-xl font-bold text-navy mb-3 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-8 flex items-center text-sm font-bold text-navy">
                <span>Read guide</span>
                <ArrowRightOutlined className="ml-2 text-xs" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="large"
            onClick={() => history.push('/resources')}
            className="px-8 py-3.5 h-auto rounded-full font-bold border-navy text-navy hover:bg-navy/5 text-base"
          >
            Explore all guides <ArrowRightOutlined className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnTeaser;
