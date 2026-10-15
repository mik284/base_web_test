import { history, Link } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

import SEO from '@/components/SEO';

const ReferTermsPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-surface py-28 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Referral Terms & Conditions | Basepoint"
        description="Official referral rules, eligibility criteria, qualifying events, and attribution policies for Basepoint introductions."
        canonical="/refer/terms"
      />

      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-gray-100 shadow-sm">
        <div className="mb-10 pb-6 border-b border-gray-100">
          <span className="text-xs font-bold uppercase tracking-wider text-navy/60 block mb-2">
            BASEPOINT LEGAL & FINANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Referral Programme Terms
          </h1>
          <p className="text-sm text-navy/60">
            Last updated: October 2026 · Governed by Basepoint Legal & Finance
          </p>
        </div>

        <div className="space-y-8 text-sm text-navy/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-navy mb-2">1. Eligibility</h2>
            <p>
              Participation in the Basepoint Referral Programme is open to
              approved Base Collabs members and registered individuals who hold
              a valid, active referrer profile. Applications are reviewed
              individually.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              2. Geographic Scope
            </h2>
            <p>
              Referral terms currently apply to businesses operating within the
              Republic of Kenya unless an explicit cross-border addendum has
              been executed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              3. Qualifying Events & Attribution Window
            </h2>
            <p>
              A referral is eligible for commercial recognition only upon the
              occurrence of an approved qualifying event, which may include
              verified merchant workspace activation or completion of an agreed
              paid subscription period. A referral click alone does not
              constitute qualification. The standard attribution window is 60
              days from first tracked link visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              4. Existing Accounts & Duplicate Handling
            </h2>
            <p>
              Referrals are matched against existing records. Businesses that
              already hold an active Basepoint account, are in active sales
              dialogue, or have registered independently within the prior 90
              days are excluded from new referral compensation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              5. Self-Referral Prohibition
            </h2>
            <p>
              Referrers may not refer their own businesses, branches, or
              entities in which they hold a direct ownership interest to claim
              referral rewards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              6. Payout Timing & Reconciliation
            </h2>
            <p>
              All referral fees and incentives require Finance approval prior to
              disbursement. Payouts are reconciled monthly following the close
              of the relevant qualification period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">
              7. Disputes & Inquiries
            </h2>
            <p>
              Attribution questions or disputes must be submitted to{' '}
              <a
                href="mailto:community@basepoint.co.ke"
                className="text-navy font-semibold underline"
              >
                community@basepoint.co.ke
              </a>{' '}
              accompanied by the merchant identifier and date of introduction.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            to="/refer"
            className="font-bold text-navy text-sm hover:underline"
          >
            ← Back to Referrals
          </Link>
          <Button
            type="primary"
            onClick={() => history.push('/collabs/apply')}
            className="rounded-full bg-navy border-navy"
          >
            Apply to Base Collabs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferTermsPage;
