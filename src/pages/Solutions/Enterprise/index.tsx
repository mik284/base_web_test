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
    q: 'Can Base replace all our systems?',
    a: "We'll assess the relevant workflows and confirm product fit.",
  },
  {
    q: 'Can we request integrations?',
    a: 'Yes, as part of discovery. Availability, effort and costs must be assessed.',
  },
  {
    q: 'Can we start with one location?',
    a: 'We can discuss a bounded setup or pilot appropriate to your needs.',
  },
];

const discuss = (variant: 'primary' | 'onDark') => (
  <HelpButton
    label="Discuss your operation"
    query={{ segment: 'enterprise' }}
    variant={variant}
  />
);

const EnterprisePage: React.FC = () => (
  <>
    <SEO
      title="Growing and Complex Operations | Basepoint"
      description="More locations, people and tools create more setup decisions. Tell us what you need to coordinate and we'll assess the available Base products and support."
      canonical="/solutions/enterprise"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="For growing and complex operations"
      title="Make the next stage of your operation"
      highlight="easier to understand."
      body="More locations, more people and more tools create more setup decisions. Tell us what you need to coordinate, and we'll assess the available Base products and support options."
      actions={discuss('primary')}
    />

    <Section tone="muted">
      <SectionHeading title="Define what needs to work together." />
      <CardGrid
        items={[
          {
            title: 'Locations.',
            body: 'Explain what each outlet needs to record and what management needs to review.',
          },
          {
            title: 'People.',
            body: 'Identify who needs access and who owns each decision.',
          },
          {
            title: 'Tools.',
            body: 'List the systems you rely on and any connection requirements.',
          },
        ]}
      />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Plan the setup before scaling it."
          body="Agree the supported product scope, migration needs, training responsibilities and review criteria. Start with an appropriate rollout size and expand after the workflow has been evaluated."
        />
        <SectionHeading
          title="Know what is included."
          body="Product access, implementation work, integrations and ongoing support are confirmed in the proposal. Any service commitments must be agreed explicitly."
        />
      </div>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Define the operation"
      highlight="you want to build."
      actions={discuss('onDark')}
    />
  </>
);

export default EnterprisePage;
