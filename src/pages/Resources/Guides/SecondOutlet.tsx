import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { history, Link } from '@umijs/max';
import { Button, message } from 'antd';
import React from 'react';

import SEO from '@/components/SEO';

const SecondOutletGuide: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Questions to answer before opening a second outlet',
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
        title="Questions Before Opening a Second Outlet | Basepoint Learn"
        description="Check whether your records, people and routines can support another location. Practical retail expansion readiness guide."
        canonical="/resources/second-outlet"
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
              EXPANSION READINESS · GROW
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              Questions to answer before opening a second outlet
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed m-0">
              Check whether your records, people and routines can support
              another location.
            </p>
          </header>

          <div className="prose prose-navy max-w-none text-base text-navy/80 leading-relaxed space-y-6">
            <p className="font-medium text-navy/90">
              A second outlet adds another place where stock, money and
              decisions need attention. Start by checking whether the current
              operation can be explained and repeated.
            </p>

            <div className="space-y-6 my-8">
              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">Records</h3>
                <p className="text-sm text-navy/70 m-0">
                  Can you distinguish sales, stock and expenses for the existing
                  outlet? What would need to be recorded separately at a new
                  location?
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">People</h3>
                <p className="text-sm text-navy/70 m-0">
                  Who will manage the outlet, who can make decisions and who
                  reviews exceptions when stock or cash totals differ?
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">Stock</h3>
                <p className="text-sm text-navy/70 m-0">
                  How will deliveries and transfers be recorded? Who approves
                  movements between locations, and how is transit stock tracked?
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">Money</h3>
                <p className="text-sm text-navy/70 m-0">
                  What are the setup and ongoing costs? How will you review cash
                  received, expenses and unpaid sales by location?
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">Routine</h3>
                <p className="text-sm text-navy/70 m-0">
                  Which daily checks are dependable today? Which still rely on
                  the owner remembering every detail in their head?
                </p>
              </div>
            </div>

            <div className="my-8 p-6 rounded-2xl bg-mint/15 border border-mint/40 text-navy">
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-2">
                Habit to apply
              </h4>
              <p className="text-sm m-0 mb-2">
                <strong>Try this week:</strong> Document one existing operating
                routine and ask another responsible person to follow it.
              </p>
              <p className="text-sm m-0">
                <strong>Review:</strong> Where did they need clarification?
              </p>
            </div>

            <p className="text-xs text-navy/60 italic">
              This guide is a readiness discussion, not a financial forecast or
              recommendation to expand.
            </p>
          </div>

          <footer className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="primary"
              onClick={() => history.push('/demo?segment=enterprise')}
              className="w-full sm:w-auto h-auto py-3 px-8 rounded-full font-bold bg-navy border-navy"
            >
              Discuss your setup <ArrowRightOutlined className="ml-1" />
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

export default SecondOutletGuide;
