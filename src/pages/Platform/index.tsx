import { Link } from '@umijs/max';
import React from 'react';

import {
  ButtonLink,
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  HelpButton,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import ProductCards from '@/components/ProductCards';
import SEO from '@/components/SEO';

const PRODUCT_BODY: Record<string, string> = {
  Duka: 'Record sales, track stock and issue receipts.',
  Pesa: "Explore Pesa's approach to money and financial records.",
  Mteja: "Explore Mteja's approach to customer records and relationships.",
  Bandu: "Explore Bandu's approach to people and team administration.",
};

const FAQS: FAQItem[] = [
  {
    q: 'Are all products included together?',
    a: 'Product access and pricing are confirmed for each offer. Check the pricing page or ask about your intended setup.',
  },
  {
    q: 'Do the products share data automatically?',
    a: "We'll confirm which connections are supported for the products and workflows you need.",
  },
];

const PlatformPage: React.FC = () => (
  <>
    <SEO
      title="Base | Explore the Product Ecosystem"
      description="Start with Duka and explore Pesa, Mteja and Bandu. Check current product availability and discuss the setup your business needs."
      canonical="/platform"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="The Base ecosystem"
      title="Start with clearer operations."
      highlight="Build from there."
      body="Base brings a family of business products under one identity. Start with Duka's sales, stock and receipts, and explore the products relevant to your next business need."
      actions={
        <>
          <ButtonLink to="/products/duka">Explore Duka</ButtonLink>
          <HelpButton label="Discuss your setup" />
        </>
      }
    />

    <Section tone="muted">
      <SectionHeading
        center
        kicker="Our products"
        title="A clear job for every product."
      />
      <ProductCards bodies={PRODUCT_BODY} />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Choose the next product around a real need."
          body="A second product should solve a problem you can name. Tell us where your current process breaks down, and we'll discuss which available product or support option fits."
        />
        <SectionHeading
          title="Records, practical guidance and people."
          body={
            <>
              Use <Link to="/resources">Basepoint Learn</Link> for operating
              guidance. Ask about{' '}
              <Link to="/demo?from=/platform&intent=support">
                setup support
              </Link>{' '}
              when you need it. Explore{' '}
              <Link to="/solutions/biashara-ai">Biashara AI</Link> to see the
              intelligence concepts we&apos;re developing.
            </>
          }
        />
      </div>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Begin with the job"
      highlight="you need to do today."
      actions={
        <ButtonLink to="/products/duka" variant="onDark">
          Explore Duka
        </ButtonLink>
      }
    />
  </>
);

export default PlatformPage;
