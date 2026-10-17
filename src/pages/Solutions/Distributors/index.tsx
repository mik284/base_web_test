import React from 'react';

import {
  CardGrid,
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
    q: 'Is a network portal available?',
    a: 'Availability and scope must be confirmed for your use case. This page does not promise a live portal.',
  },
  {
    q: 'Can we see merchant data?',
    a: 'Only through an agreed, permissioned arrangement with appropriate access controls. A referral or partnership does not grant data access.',
  },
  {
    q: 'Is Biashara AI part of the offer?',
    a: 'Biashara AI is in development and has a separate waitlist.',
  },
];

const discuss = (variant: 'primary' | 'onDark') => (
  <HelpButton
    label="Discuss your operation"
    query={{ segment: 'distributor' }}
    variant={variant}
  />
);

const DistributorsPage: React.FC = () => (
  <>
    <SEO
      title="Distributors and Manufacturers | Basepoint"
      description="Discuss how Basepoint could support visibility across your distribution operation. We review workflows, data access and requirements before proposing a fit."
      canonical="/solutions/distributors"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="For distributors and manufacturers"
      title="Start with the commercial question"
      highlight="your network needs to answer."
      body="Discuss how Basepoint could support visibility across your distribution operation. We'll review your workflows, data access and requirements before proposing a fit."
      actions={discuss('primary')}
    />

    <Section tone="muted">
      <SectionHeading title="Where does visibility break down?" />
      <CardGrid
        items={[
          {
            title: 'Sales and movement.',
            body: 'Which records do you need to understand where products are moving?',
          },
          {
            title: 'Outlet coordination.',
            body: 'What information do teams need from the businesses they serve?',
          },
          {
            title: 'Commercial follow-through.',
            body: 'How do you turn observations into actions and review the result?',
          },
        ]}
      />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Begin with a bounded assessment."
          body="Define the business question, the participating businesses and the records they can share with permission. Then agree which available tools, human support or future pilot could be relevant."
        />
        <SectionHeading
          title="Agree the evidence before the rollout."
          body="A useful pilot needs a baseline, a clear workflow and a measure of success. We'll discuss those alongside scope, responsibilities and cost."
        />
      </div>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Bring one commercial question."
      highlight="Define a practical next step."
      actions={discuss('onDark')}
    />
  </>
);

export default DistributorsPage;
