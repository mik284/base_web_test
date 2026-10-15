import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { history, Link } from '@umijs/max';
import { Button, message, Table } from 'antd';
import React from 'react';

import SEO from '@/components/SEO';

const worksheetColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    className: 'font-bold',
  },
  { title: 'Unit', dataIndex: 'unit', key: 'unit' },
  { title: 'Recorded', dataIndex: 'recorded', key: 'recorded' },
  { title: 'Physical', dataIndex: 'physical', key: 'physical' },
  {
    title: 'Difference',
    dataIndex: 'diff',
    key: 'diff',
    className: 'font-semibold',
  },
  { title: 'Explanation', dataIndex: 'explanation', key: 'explanation' },
];

const worksheetData = [
  {
    key: '1',
    date: '12 Oct',
    product: 'Cooking Oil 1L',
    unit: 'Bottle',
    recorded: '12',
    physical: '10',
    diff: '-2',
    explanation: 'Damaged during delivery; unrecorded',
  },
  {
    key: '2',
    date: '12 Oct',
    product: 'Maize Flour 2kg',
    unit: 'Bale',
    recorded: '5',
    physical: '5',
    diff: '0',
    explanation: 'Matched records',
  },
];

const StockCountGuide: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Make a stock count useful',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      message.success('Guide link copied to clipboard!');
    }
  };

  return (
    <div className="font-sans min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Make a Stock Count Useful | Basepoint Learn"
        description="Count consistently, investigate differences and leave a record someone else can understand. Practical retail inventory counting guide."
        canonical="/resources/stock-count"
      />

      <div className="max-w-3xl mx-auto">
        <Link
          to="/resources"
          className="inline-flex items-center text-sm font-semibold text-navy/70 hover:text-navy mb-8"
        >
          <ArrowLeftOutlined className="mr-2" /> Back to Basepoint Learn
        </Link>

        <article className="bg-white rounded-3xl p-8 sm:p-14 border border-gray-100 shadow-sm">
          <header className="mb-10 pb-8 border-b border-gray-100">
            <span className="inline-block px-3 py-1 rounded-full bg-surfaceAlt text-navy font-bold text-xs uppercase tracking-wider mb-4">
              INVENTORY HABIT · RUN
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              Make a stock count useful
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed m-0">
              Count consistently, investigate differences and leave a record
              someone else can understand.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-base text-navy/80 leading-relaxed space-y-6">
            <p className="font-medium text-navy/90">
              A stock count checks what is physically present against your
              records. Differences are questions to investigate, not automatic
              evidence of theft or loss.
            </p>

            <div className="space-y-6 my-8">
              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  1. Choose a manageable scope
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Start with a shelf, category or small group of products.
                  Decide the counting time and how sales or deliveries during
                  the count will be handled.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  2. Use clear product names and units
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Avoid mixing boxes, packs and individual items in the same
                  quantity field. Keep units uniform.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  3. Record the physical quantity
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Count carefully and recount unexpected results. Note damaged
                  or unsellable items separately.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  4. Compare with the recorded quantity
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Check recent sales, receipts, returns and adjustments before
                  deciding why a difference exists.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  5. Record the resolution
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Keep the date, person responsible and explanation for an
                  approved correction.
                </p>
              </div>
            </div>

            {/* Suggested Worksheet */}
            <div className="my-8">
              <h4 className="font-bold text-navy text-base mb-3">
                Suggested Stock Worksheet Structure
              </h4>
              <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-surface p-4">
                <Table
                  dataSource={worksheetData}
                  columns={worksheetColumns}
                  pagination={false}
                  size="small"
                  className="bg-transparent"
                />
              </div>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-mint/15 border border-mint/40 text-navy">
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">
                Habit to apply
              </h4>
              <p className="text-sm m-0 mb-2">
                <strong>Try today:</strong> Count five important products using
                consistent units.
              </p>
              <p className="text-sm m-0">
                <strong>Review next time:</strong> Did the same difference
                recur?
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-surfaceAlt/60 border border-surfaceAlt text-sm text-navy/70">
              <strong className="text-navy">Duka connection:</strong> Use the
              stock records supported in your setup as one side of the
              comparison.
            </div>
          </div>

          <footer className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="primary"
              onClick={() => history.push('/products/duka')}
              className="w-full sm:w-auto h-auto py-3 px-8 rounded-full font-bold bg-navy border-navy"
            >
              Explore Duka <ArrowRightOutlined className="ml-1" />
            </Button>
            <Button
              icon={<ShareAltOutlined />}
              onClick={handleShare}
              className="w-full sm:w-auto h-auto py-3 px-6 rounded-full font-semibold border-gray-200 text-navy hover:border-navy"
            >
              Share this guide
            </Button>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default StockCountGuide;
