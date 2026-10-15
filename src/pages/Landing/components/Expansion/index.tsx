import { HOMEPAGE_EXPANSION_CARDS } from '@/constants/landingData';
import { ArrowRightOutlined } from '@ant-design/icons';
import { history, Link } from '@umijs/max';
import { Button, Tag } from 'antd';
import React from 'react';

const Expansion: React.FC = () => {
  return (
    <section className="py-24 bg-white font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-3">
            PRODUCT EXPANSION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Start with what you need. Explore more as you grow.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Duka is the retail starting point. Explore Pesa for financial
            records, Mteja for customer relationships and Bandu for people
            administration. Each product page explains its current availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HOMEPAGE_EXPANSION_CARDS.map((card) => (
            <Link
              key={card.name}
              to={card.href}
              className="p-8 rounded-3xl bg-surface border border-gray-100 hover:border-navy/30 hover:shadow-md transition-all flex flex-col justify-between block"
              style={{ textDecoration: 'none' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-xl text-navy">
                    {card.name}
                  </span>
                  <Tag
                    bordered={false}
                    className="text-[10px] font-semibold px-2 py-0.5 m-0"
                    style={{
                      backgroundColor:
                        card.status === 'Available' ? '#8AFEA7' : '#F0F3F8',
                      color: '#1F2B5D',
                    }}
                  >
                    {card.status}
                  </Tag>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy/60 mb-3">
                  {card.role}
                </div>
                <p className="text-sm text-navy/70 leading-relaxed m-0">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 flex items-center text-sm font-bold text-navy">
                <span>View details</span>
                <ArrowRightOutlined className="ml-2 text-xs" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            type="default"
            size="large"
            onClick={() => history.push('/platform')}
            className="px-8 py-3.5 h-auto rounded-full font-bold border-navy text-navy hover:bg-navy/5 text-base"
          >
            Explore Base Platform <ArrowRightOutlined className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Expansion;
