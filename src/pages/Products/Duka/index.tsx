import {
  ArrowRightOutlined,
  FileTextOutlined,
  InboxOutlined,
  PrinterOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Collapse, Table } from 'antd';
import React from 'react';

import CTASection from '@/components/CTASection';
import SEO from '@/components/SEO';

const { Panel } = Collapse;

const requirementsColumns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    className: 'font-bold text-navy',
  },
  {
    title: 'Requirement / Specification',
    dataIndex: 'spec',
    key: 'spec',
    className: 'text-navy/80',
  },
];

const requirementsData = [
  {
    key: '1',
    category: 'Device & Browser',
    spec: 'Modern smartphone, tablet, laptop or desktop via current web browser (Chrome, Safari, Edge).',
  },
  {
    key: '2',
    category: 'Connectivity',
    spec: 'Standard internet connection required for syncing data and issuing digital receipts.',
  },
  {
    key: '3',
    category: 'Receipt Hardware',
    spec: 'Digital receipts (SMS / WhatsApp / Link) supported natively. Bluetooth thermal printer support confirmed per model.',
  },
  {
    key: '4',
    category: 'Account & Limits',
    spec: 'Single-outlet retail store baseline. Multi-outlet coordination configured on request.',
  },
  {
    key: '5',
    category: 'Data Import',
    spec: 'Bulk product catalog setup assistance available via CSV or structured spreadsheet import.',
  },
  {
    key: '6',
    category: 'Setup Assistance',
    spec: 'Assisted onboarding and inventory cataloging available via Base Collabs.',
  },
];

const DukaPage: React.FC = () => {
  return (
    <div className="font-sans">
      <SEO
        title="Duka | Sales, Stock and Receipts | Basepoint"
        description="Explore Duka for recording sales, tracking inventory and issuing receipts. Confirm pricing and the setup suited to your retail business."
        canonical="/products/duka"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-6">
            DUKA · SALES, STOCK AND RECEIPTS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 max-w-4xl mx-auto leading-tight">
            Keep the sale, the stock and the receipt in view.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Record daily sales, track inventory and issue receipts with Duka.
            Start with the everyday retail tasks that make your business easier
            to review.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/start')}
              className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy hover:bg-navy/90 text-base"
            >
              Start with Duka
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/demo')}
              className="px-8 py-3.5 h-auto rounded-full font-bold border-2 border-surfaceAlt text-navy hover:border-navy text-base"
            >
              Get setup help
            </Button>
          </div>
        </div>
      </section>

      {/* Three Everyday Jobs */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Three everyday jobs. One practical starting point.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Duka focuses on the daily tasks that keep retail records straight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-mint/20 text-navy flex items-center justify-center text-2xl mb-6">
                <FileTextOutlined />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Record sales.
              </h3>
              <p className="text-sm text-navy/70 leading-relaxed m-0">
                Keep a record of the items sold during the day, whether cash,
                mobile money, or on credit.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-orange/20 text-orange flex items-center justify-center text-2xl mb-6">
                <InboxOutlined />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Track inventory.
              </h3>
              <p className="text-sm text-navy/70 leading-relaxed m-0">
                Review recorded stock and use regular physical counts to check
                what is actually on the shelf.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-electric/15 text-electric flex items-center justify-center text-2xl mb-6">
                <PrinterOutlined />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Issue receipts.
              </h3>
              <p className="text-sm text-navy/70 leading-relaxed m-0">
                Give customers a receipt for their purchase via digital channels
                or compatible thermal receipt printers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Sequence */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              See the workflow before you start.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              A clean 3-step sequence designed for fast daily operation in your
              shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-surface rounded-3xl p-6 border border-gray-100 flex flex-col justify-between">
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                  Step 1
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">
                  Enter a sale
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Select items from your catalog or scan barcodes. Record item
                  quantity and payment channel.
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-200/60 font-mono text-xs text-navy/80">
                <div className="font-bold border-b border-gray-100 pb-2 mb-2">
                  Current Sale #1042
                </div>
                <div className="flex justify-between py-1">
                  <span>Maize Flour 2kg x 2</span>
                  <span>KES 420</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Cooking Oil 1L x 1</span>
                  <span>KES 310</span>
                </div>
                <div className="border-t border-gray-100 pt-2 font-bold flex justify-between">
                  <span>Total</span>
                  <span>KES 730</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface rounded-3xl p-6 border border-gray-100 flex flex-col justify-between">
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                  Step 2
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">
                  Issue a receipt
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Issue an instant digital receipt via SMS/WhatsApp or print to
                  a connected thermal printer.
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-200/60 font-mono text-xs text-navy/80">
                <div className="text-center font-bold border-b border-gray-100 pb-2 mb-2">
                  *** DUKA RECEIPT ***
                </div>
                <div className="text-center text-[11px] text-navy/60 mb-2">
                  Date: Today • Cashier: POS-01
                </div>
                <div className="text-center font-bold text-mint-dark my-1">
                  PAID: KES 730
                </div>
                <div className="text-center text-[10px] text-navy/50">
                  Receipt sent via SMS
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface rounded-3xl p-6 border border-gray-100 flex flex-col justify-between">
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-navy/60 mb-2">
                  Step 3
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">
                  Review the record
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Stock levels update automatically. Review daily sales totals
                  and stock movement anytime.
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-200/60 font-mono text-xs text-navy/80">
                <div className="font-bold border-b border-gray-100 pb-2 mb-2">
                  Stock Ledger Summary
                </div>
                <div className="flex justify-between py-1">
                  <span>Maize Flour 2kg</span>
                  <span className="font-bold text-navy">18 left</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Cooking Oil 1L</span>
                  <span className="font-bold text-navy">9 left</span>
                </div>
                <div className="border-t border-gray-100 pt-2 text-[10px] text-navy/60">
                  Ready for evening close
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-surface text-xs font-medium text-navy/60">
              Product screen with illustrative data.
            </span>
          </div>
        </div>
      </section>

      {/* Simple Daily Habit */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            A simple daily habit.
          </h2>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed mb-8">
            Record sales as they happen. Check records during your daily review.
            Count stock regularly so your records reflect the shelf.
          </p>
          <Button
            size="large"
            onClick={() => history.push('/resources/daily-close')}
            className="px-8 py-3.5 h-auto rounded-full font-bold border-navy text-navy hover:bg-navy/5 text-base"
          >
            Read the daily review guide <ArrowRightOutlined className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Requirements Table */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What to confirm for your setup.
            </h2>
            <p className="text-base text-navy/70 leading-relaxed">
              Tell us which device you use, whether you need printed receipts
              and what records you already keep. We&apos;ll confirm the
              supported setup and any preparation needed.
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm overflow-x-auto">
            <Table
              dataSource={requirementsData}
              columns={requirementsColumns}
              pagination={false}
              className="bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Clear Terms Before You Begin */}
      <section className="py-20 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Clear terms before you begin.
          </h2>
          <p className="text-base text-navy/70 leading-relaxed mb-8">
            Check the available Duka offer and what it includes on our pricing
            page.
          </p>
          <Button
            type="primary"
            size="large"
            onClick={() => history.push('/pricing')}
            className="px-8 py-3.5 h-auto rounded-full font-bold bg-navy border-navy text-base"
          >
            See pricing <ArrowRightOutlined className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Duka FAQs */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-12">
            Frequently Asked Questions about Duka
          </h2>
          <Collapse bordered={false} className="bg-transparent space-y-4">
            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Do I need a demo first?
                </span>
              }
              key="1"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                If account creation is available for your setup, you can begin
                directly. Ask for help whenever you need it.
              </p>
            </Panel>

            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can I move existing records into Duka?
                </span>
              }
              key="2"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Tell us what you currently use. We&apos;ll confirm the supported
                import or setup options.
              </p>
            </Panel>

            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can I keep selling without internet?
                </span>
              }
              key="3"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Ask us to confirm the connectivity requirements for the version
                and device you intend to use.
              </p>
            </Panel>

            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Are payments and tax features included?
                </span>
              }
              key="4"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                We&apos;ll confirm the supported features and requirements for
                your plan. Recording a sale does not by itself confirm a payment
                or satisfy every tax obligation.
              </p>
            </Panel>

            <Panel
              header={
                <span className="font-bold text-navy text-base">
                  Can I run multiple outlets?
                </span>
              }
              key="5"
              className="bg-surface rounded-2xl border border-gray-100"
            >
              <p className="text-sm text-navy/70 m-0 py-2 leading-relaxed">
                Tell us how many outlets you have and what you need to
                coordinate. We&apos;ll confirm the available setup.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>

      {/* Final Banner */}
      <CTASection
        title="Start with a clearer record of the day."
        body="Start with Duka to record sales, track stock and issue receipts. Begin with what you need today."
        primaryText="Start with Duka"
        primaryLink="/start"
        secondaryText="Get setup help"
        secondaryLink="/demo"
      />
    </div>
  );
};

export default DukaPage;
