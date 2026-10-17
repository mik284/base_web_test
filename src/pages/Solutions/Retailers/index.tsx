import { Link } from '@umijs/max';
import React from 'react';

import {
  CardGrid,
  DukaButton,
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  HelpButton,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

const FAQS: FAQItem[] = [
  {
    q: 'Is this for a single shop?',
    a: 'Duka is the entry point for standard retail needs. Ask us about requirements for larger or more complex operations.',
  },
  {
    q: 'Will it tell me my profit?',
    a: 'Sales records alone are not profit. Costs, expenses and other relevant records must be considered.',
  },
];

const RetailersPage: React.FC = () => (
  <>
    <SEO
      title="Retail Business Software | Duka for Shops | Basepoint"
      description="Start with Duka to record sales, track stock and issue receipts. Build a daily routine that gives your shop clearer records to work from."
      canonical="/solutions/retailers"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="For retail businesses"
      title="A clearer view of the shop,"
      highlight="from the first sale to the daily review."
      body="Start with Duka to record sales, track stock and issue receipts. Build a routine that gives you clearer records to work from."
      actions={
        <>
          <DukaButton />
          <HelpButton />
        </>
      }
    />

    <Section tone="muted">
      <SectionHeading title="Keep the essentials visible." />
      <CardGrid
        items={[
          {
            title: 'What sold?',
            body: 'Use your recorded sales to review the day.',
          },
          {
            title: "What's on the shelf?",
            body: 'Compare stock records with regular physical counts.',
          },
          {
            title: 'What should you check next?',
            body: 'Use the records to identify a question worth investigating.',
          },
        ]}
      />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Start with your current shop."
          body="Tell us about your device, product range and existing records if you need setup help. You do not need to choose every Base product at once."
        />
        <SectionHeading
          title="Useful routines for the owner and the team."
          body={
            <>
              Read the <Link to="/resources/daily-close">daily review</Link> and{' '}
              <Link to="/resources/stock-count">stock-count</Link> guides, then
              choose a routine you can maintain.
            </>
          }
        />
      </div>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Make the next day's records"
      highlight="easier to review."
      actions={<DukaButton variant="onDark" />}
    />
  </>
);

export default RetailersPage;
