import React from 'react';

import {
  ButtonLink,
  CardGrid,
  FAQ,
  FAQItem,
  faqSchema,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

const FAQS: FAQItem[] = [
  {
    q: 'Does partnership provide access to merchant data?',
    a: 'No. Access requires a separate agreed and permissioned arrangement.',
  },
  {
    q: 'Do you have a live integration programme?',
    a: 'Available integrations and programme scope must be confirmed for the proposed use case.',
  },
];

const PartnersPage: React.FC = () => (
  <>
    <SEO
      title="Strategic Partnerships | Basepoint"
      description="Explore a partnership with Basepoint around distribution, business support or product workflows. Start with the problem you want to solve."
      canonical="/partners"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="Partnerships"
      title="Build useful business workflows"
      highlight="with Basepoint."
      body="We welcome conversations with organisations that can improve business support, product fit or distribution. Start with the problem you want to solve and the value each organisation can contribute."
      actions={
        <ButtonLink to="/partners/apply">Explore a partnership</ButtonLink>
      }
    />

    <Section tone="muted">
      <SectionHeading title="Three ways to begin a conversation." />
      <CardGrid
        items={[
          {
            title: 'Distribution and adoption.',
            body: 'Explore how your network could introduce businesses to relevant Base products.',
          },
          {
            title: 'Business support.',
            body: 'Explore a bounded collaboration around practical expertise and adoption.',
          },
          {
            title: 'Product and intelligence.',
            body: 'Discuss workflow requirements, possible integrations or future Biashara AI scenarios.',
          },
        ]}
      />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Define value on both sides."
          body="A useful partnership has a clear audience, responsibilities, scope and a way to evaluate the result. Commercial terms, data access and delivery commitments are agreed separately."
        />
        <div>
          <SectionHeading
            title="Looking to join as an individual expert or reseller?"
            body="Base Collabs is the entry point for individual experts, advisors and resellers."
          />
          <ButtonLink to="/collabs" variant="secondary">
            Explore Base Collabs
          </ButtonLink>
        </div>
      </div>
    </Section>

    <FAQ items={FAQS} />
  </>
);

export default PartnersPage;
