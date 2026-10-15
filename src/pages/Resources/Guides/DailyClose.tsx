import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { history, Link } from '@umijs/max';
import { Button, message } from 'antd';
import React from 'react';

import SEO from '@/components/SEO';

const DailyCloseGuide: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'A simple daily review for your shop',
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
        title="A Simple Daily Review for Your Shop | Basepoint Learn"
        description="Take a few minutes to check the day's records and choose what needs attention tomorrow. Practical daily review routine for retail shops."
        canonical="/resources/daily-close"
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
              PRACTICAL OPERATING HABIT · RUN
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              A simple daily review for your shop
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed m-0">
              Take a few minutes to check the day&apos;s records and choose what
              needs attention tomorrow.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-base text-navy/80 leading-relaxed space-y-6">
            <p className="font-medium text-navy/90">
              A daily review is a check on your records. It helps you notice
              gaps while the day is still fresh. It does not replace accounting
              or prove that every payment has settled.
            </p>

            <div className="space-y-6 my-8">
              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  1. Review recorded sales
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Check the date and look for missing or duplicated entries.
                  Investigate returns, corrections or unusual transactions
                  before closing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  2. Separate the payment channels
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Compare the relevant sales records with cash, confirmed
                  mobile-money receipts and other payment records. Keep unpaid
                  sales distinct from money received.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  3. Check differences
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Note withdrawals, refunds, expenses or opening cash where they
                  affect the comparison. Do not change records just to force a
                  match. Investigate unexplained differences.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  4. Note stock questions
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Identify items that need a physical count or another check.
                  Sales records are one part of the stock picture.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">
                  5. Choose tomorrow&apos;s first task
                </h3>
                <p className="text-sm text-navy/70 m-0">
                  Write down one action, who will do it and when you will review
                  it.
                </p>
              </div>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-mint/15 border border-mint/40 text-navy">
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">
                Habit to apply
              </h4>
              <p className="text-sm m-0 mb-2">
                <strong>Try today:</strong> Record one discrepancy or missing
                entry and investigate its cause.
              </p>
              <p className="text-sm m-0">
                <strong>Review tomorrow:</strong> Was it resolved, and what
                would prevent it recurring?
              </p>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-surfaceAlt/60 border border-surfaceAlt text-sm text-navy/70">
              <strong className="text-navy">Duka connection:</strong> Duka can
              provide recorded sales and stock information for your review.
              Confirm the reports and payment features available in your setup.
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

export default DailyCloseGuide;
