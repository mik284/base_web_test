import { Link } from '@umijs/max';
import React from 'react';

import {
  CardGrid,
  DukaButton,
  FAQ,
  FAQItem,
  faqSchema,
  HelpButton,
  Note,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

/*
 * Price-unconfirmed state (spec §18). When Finance approves a Duka offer, add
 * currency, billing interval, taxes, limits, setup fees, trial terms and the
 * cancellation route to Card A.
 */

const FAQS: FAQItem[] = [
  {
    q: 'What does the starting offer include?',
    a: 'The offer card lists the approved product access and limits. Ask us before starting if any requirement is unclear.',
  },
  {
    q: 'Is setup help included?',
    a: 'Assistance, scope and fees are confirmed separately unless the offer explicitly includes them.',
  },
  {
    q: 'Does starting an account mean my business is fully set up?',
    a: 'No. Account creation and completing your first useful workflow are separate steps.',
  },
  {
    q: 'Can I add products later?',
    a: 'Availability and access depend on the product and offer. Ask about the next product when you have a clear need.',
  },
  {
    q: 'Is Biashara AI included?',
    a: 'No. Biashara AI is in development and has a separate waitlist.',
  },
  {
    q: 'How do I cancel?',
    a: 'Approved offers must show their cancellation process and applicable terms before purchase.',
  },
];

const PricingPage: React.FC = () => (
  <>
    <SEO
      title="Basepoint Pricing | Duka and Setup Options"
      description="Confirm the current Duka offer or discuss a more complex operation. Review product access, support scope and pricing before starting."
      canonical="/pricing"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      title="Start with the job"
      highlight="you need to do."
      body="Choose a Duka starting point or discuss a more complex setup. Confirm product access, support and costs before you commit."
    />

    <Section tone="muted">
      <CardGrid
        columns={2}
        items={[
          {
            title: 'Duka for everyday retail.',
            body: 'Sales recording, stock tracking and receipts.',
            footer: (
              <div className="flex flex-col gap-6">
                <Note>
                  Contact us to confirm current Duka pricing and the offer
                  available for your setup.
                </Note>
                <div>
                  <DukaButton />
                </div>
              </div>
            ),
          },
          {
            title: 'A more complex operation.',
            body: "Discuss multiple locations, implementation needs or custom requirements. We'll confirm scope before providing a proposal.",
            footer: <HelpButton label="Discuss your setup" variant="primary" />,
          },
        ]}
      />
    </Section>

    <Section narrow>
      <SectionHeading
        title="Interested in another Base product?"
        body={
          <>
            Ask about <Link to="/products/pesa">Pesa</Link>,{' '}
            <Link to="/products/mteja">Mteja</Link> or{' '}
            <Link to="/products/bandu">Bandu</Link> to confirm availability,
            scope and pricing.
          </>
        }
      />
    </Section>

    <FAQ items={FAQS} />
  </>
);

export default PricingPage;
