import {
  FileTextOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import React from 'react';

import HeroIllustration from '@/components/HeroIllustration';

import {
  ButtonLink,
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

/*
 * Not yet published (spec §8), pending Product verification:
 * - "See the workflow before you start": three verified Duka screens with captions.
 * - The setup requirements table: every row is unresolved, so it stays hidden.
 */

const FAQS: FAQItem[] = [
  {
    q: 'Do I need a demo first?',
    a: 'If account creation is available for your setup, you can begin directly. Ask for help whenever you need it.',
  },
  {
    q: 'Can I move existing records into Duka?',
    a: "Tell us what you currently use. We'll confirm the supported import or setup options.",
  },
  {
    q: 'Can I keep selling without internet?',
    a: 'Ask us to confirm the connectivity requirements for the version and device you intend to use.',
  },
  {
    q: 'Are payments and tax features included?',
    a: "We'll confirm the supported features and requirements for your plan. Recording a sale does not by itself confirm a payment or satisfy every tax obligation.",
  },
  {
    q: 'Can I run multiple outlets?',
    a: "Tell us how many outlets you have and what you need to coordinate. We'll confirm the available setup.",
  },
];

const DukaPage: React.FC = () => (
  <>
    <SEO
      title="Duka | Sales, Stock and Receipts | Basepoint"
      description="Explore Duka for recording sales, tracking inventory and issuing receipts. Confirm pricing and the setup suited to your retail business."
      canonical="/products/duka"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="Duka · Sales, stock and receipts"
      title="Keep the sale, the stock"
      highlight="and the receipt in view."
      body="Record daily sales, track inventory and issue receipts with Duka. Start with the everyday retail tasks that make your business easier to review."
      actions={
        <>
          <DukaButton />
          <HelpButton />
        </>
      }
      aside={<HeroIllustration />}
    />

    <Section tone="muted">
      <SectionHeading
        center
        title="Three everyday jobs. One practical starting point."
      />
      <CardGrid
        items={[
          {
            icon: <ShoppingCartOutlined />,
            title: 'Record sales.',
            body: 'Keep a record of the items sold during the day.',
          },
          {
            icon: <InboxOutlined />,
            title: 'Track inventory.',
            body: 'Review recorded stock and use regular physical counts to check it.',
          },
          {
            icon: <FileTextOutlined />,
            title: 'Issue receipts.',
            body: 'Give a customer a receipt for the purchase.',
          },
        ]}
      />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            title="A simple daily habit."
            body="Record sales as they happen. Check records during your daily review. Count stock regularly so your records reflect the shelf."
          />
          <ButtonLink to="/resources/daily-close" variant="secondary">
            Read the daily review guide
          </ButtonLink>
        </div>
        <div>
          <SectionHeading
            title="What to confirm for your setup."
            body="Tell us which device you use, whether you need printed receipts and what records you already keep. We'll confirm the supported setup and any preparation needed."
          />
          <HelpButton />
        </div>
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeading
        title="Clear terms before you begin."
        body="Check the available Duka offer and what it includes on our pricing page."
      />
      <ButtonLink to="/pricing" variant="secondary">
        See pricing
      </ButtonLink>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Start with a clearer record"
      highlight="of the day."
      actions={
        <>
          <DukaButton variant="onDark" />
          <HelpButton variant="onDarkSecondary" />
        </>
      }
    />
  </>
);

export default DukaPage;
