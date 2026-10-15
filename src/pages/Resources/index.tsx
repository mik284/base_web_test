import {
  ArrowRightOutlined,
  BookOutlined,
  CalculatorOutlined,
} from '@ant-design/icons';
import { Link } from '@umijs/max';
import { InputNumber } from 'antd';
import React, { useState } from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const allGuides = [
  {
    category: 'run',
    categoryName: 'Run',
    title: 'A simple daily review for your shop',
    summary:
      'Take a few minutes to check the day’s records and choose what needs attention tomorrow.',
    href: '/resources/daily-close',
  },
  {
    category: 'run',
    categoryName: 'Run',
    title: 'Make a stock count useful',
    summary:
      'Count consistently, investigate differences and leave a record someone else can understand.',
    href: '/resources/stock-count',
  },
  {
    category: 'grow',
    categoryName: 'Grow',
    title: 'Questions to answer before opening a second outlet',
    summary:
      'Check whether your records, people and routines can support another location.',
    href: '/resources/second-outlet',
  },
];

const MarginCalculator: React.FC = () => {
  const [sellingPrice, setSellingPrice] = useState<number | null>(null);
  const [purchaseCost, setPurchaseCost] = useState<number | null>(null);

  const calculateResults = () => {
    if (
      sellingPrice === null ||
      purchaseCost === null ||
      isNaN(sellingPrice) ||
      isNaN(purchaseCost)
    ) {
      return null;
    }

    const grossProfit = sellingPrice - purchaseCost;

    let grossMargin: number | string = 'Enter a selling price above zero';
    if (sellingPrice > 0) {
      grossMargin = ((grossProfit / sellingPrice) * 100).toFixed(1) + '%';
    }

    let markup: number | string = 'Enter a purchase cost above zero';
    if (purchaseCost > 0) {
      markup = ((grossProfit / purchaseCost) * 100).toFixed(1) + '%';
    }

    return { grossProfit, grossMargin, markup };
  };

  const results = calculateResults();

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4 text-navy">
        <CalculatorOutlined className="text-xl" />
        <h3 className="text-2xl font-bold text-navy m-0">
          Check an item&apos;s gross margin.
        </h3>
      </div>
      <p className="text-sm text-navy/70 leading-relaxed mb-8">
        Enter the selling price and purchase cost per consistent unit in KES.
        Inputs must use the same tax basis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
            Selling Price per unit (KES)
          </label>
          <InputNumber
            size="large"
            className="w-full rounded-xl"
            min={0}
            placeholder="e.g. 500"
            value={sellingPrice}
            onChange={(val) => setSellingPrice(val)}
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
            Purchase Cost per unit (KES)
          </label>
          <InputNumber
            size="large"
            className="w-full rounded-xl"
            min={0}
            placeholder="e.g. 350"
            value={purchaseCost}
            onChange={(val) => setPurchaseCost(val)}
          />
        </div>
      </div>

      {results ? (
        <div className="p-6 rounded-2xl bg-surface border border-gray-100 mb-6 space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-sm font-semibold text-navy/70">
              Gross Profit per unit:
            </span>
            <span
              className={`font-mono font-bold text-lg ${
                results.grossProfit < 0 ? 'text-red-500' : 'text-navy'
              }`}
            >
              KES {results.grossProfit.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-t border-gray-200/60">
            <span className="text-sm font-semibold text-navy/70">
              Gross Margin (Profit ÷ Selling Price):
            </span>
            <span className="font-mono font-bold text-base text-navy">
              {results.grossMargin}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-t border-gray-200/60">
            <span className="text-sm font-semibold text-navy/70">
              Markup (Profit ÷ Cost):
            </span>
            <span className="font-mono font-bold text-base text-navy">
              {results.markup}
            </span>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-surface border border-dashed border-gray-200 text-center text-xs text-navy/50 mb-6">
          Enter both selling price and purchase cost to see calculated margin
          and markup.
        </div>
      )}

      <div className="text-xs text-navy/50 leading-relaxed italic">
        This calculation uses the values you enter in your browser. Gross margin
        is not net profit and does not account for all business costs such as
        rent, staff, transport, or shrinkage.
      </div>
    </div>
  );
};

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredGuides =
    activeTab === 'all'
      ? allGuides
      : allGuides.filter((g) => g.category === activeTab);

  return (
    <div className="font-sans">
      <SEO
        title="Basepoint Learn | Practical Business Guides"
        description="Practical guides for daily reviews, stock counts and preparing for another outlet. Choose one useful action and review what changed."
        canonical="/resources"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            BASEPOINT LEARN
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Practical habits for a clearer business.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Use simple guides to review the day, count stock and prepare for
            your next stage. Choose one useful action, then check what changed.
          </p>
        </div>
      </section>

      {/* Guides Section with Category Filter */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Start with a question from your working day.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Explore guidance grouped by everyday operational focus.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-100 shadow-sm gap-2 flex-wrap justify-center">
              {[
                { key: 'all', label: 'All Guides' },
                { key: 'run', label: 'Run' },
                { key: 'money', label: 'Money' },
                { key: 'grow', label: 'Grow' },
                { key: 'customers', label: 'Customers' },
                { key: 'industry', label: 'Industry' },
              ].map((cat) => (
                <button
                  type="button"
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-colors border-0 cursor-pointer ${
                    activeTab === cat.key
                      ? 'bg-navy text-white'
                      : 'bg-transparent text-navy/70 hover:text-navy hover:bg-surface'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {filteredGuides.map((guide) => (
                <Link
                  key={guide.title}
                  to={guide.href}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-navy/20 transition-all flex flex-col justify-between block"
                  style={{ textDecoration: 'none' }}
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-surfaceAlt text-navy font-bold text-[11px] mb-4 uppercase">
                      {guide.categoryName}
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
          ) : (
            <div className="text-center py-12 max-w-md mx-auto mb-20 bg-white rounded-3xl p-8 border border-gray-100">
              <BookOutlined className="text-3xl text-navy/30 mb-3" />
              <h4 className="font-bold text-navy text-base mb-2">
                Guides in preparation
              </h4>
              <p className="text-xs text-navy/60 leading-relaxed m-0">
                Additional guides for this category are undergoing practitioner
                review. Explore our launch guides in the Run and Grow sections.
              </p>
            </div>
          )}

          {/* 19.4 Transparent Margin Calculator */}
          <div className="pt-8 border-t border-gray-200/60">
            <MarginCalculator />
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Put good habits into daily software."
        body="Use Duka to record sales, track inventory and maintain dependable retail records."
        primaryText="Start with Duka"
        primaryLink="/start"
        secondaryText="Get setup help"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default ResourcesPage;
