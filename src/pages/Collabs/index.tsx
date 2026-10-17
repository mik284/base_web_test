import React from 'react';

import {
  ButtonLink,
  CardGrid,
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  PageHero,
  Section,
  SectionHeading,
  Steps,
} from '@/components/Page';
import SEO from '@/components/SEO';

const FAQS: FAQItem[] = [
  {
    q: 'Must every client book a demo?',
    a: 'No. A standard retail business can use the available start path. Complex needs or requested assistance follow the help path.',
  },
  {
    q: 'Is the network operated through WhatsApp?',
    a: 'Approved members may use WhatsApp for coordination. Applications and attribution use structured records.',
  },
  {
    q: 'Are commissions published here?',
    a: 'Your applicable commercial terms are confirmed before participation.',
  },
  {
    q: 'Will I receive a certification?',
    a: 'No certification is promised by applying. Any future credential requires defined assessment and conduct standards.',
  },
];

const CollabsPage: React.FC = () => (
  <>
    <SEO
      title="Base Collabs | Experts, Advisors and Resellers"
      description="Apply to Base Collabs to introduce relevant products, support adoption within your role and develop business opportunities."
      canonical="/collabs"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="Base Collabs"
      title="Help businesses work better."
      highlight="Build your own opportunity."
      body="Base Collabs brings independent experts, advisors and resellers into Basepoint's network. Help businesses understand Base, support adoption within your role and refer opportunities through an agreed process."
      actions={
        <>
          <ButtonLink to="/collabs/apply">Become a Collab</ButtonLink>
          <ButtonLink to="#how-it-works" variant="secondary">
            See how it works
          </ButtonLink>
        </>
      }
    />

    <Section tone="muted">
      <SectionHeading title="Who is it for?" />
      <CardGrid
        items={[
          {
            title: 'Experts and advisors.',
            body: 'People who help businesses improve how they work.',
          },
          {
            title: 'Resellers and onboarding partners.',
            body: 'People who can introduce Base and support an agreed setup process.',
          },
          {
            title: 'Champions and referrers.',
            body: 'People with trusted business relationships and relevant introductions.',
          },
        ]}
      />
    </Section>

    <Section narrow>
      <SectionHeading
        title="Give clients a practical next step."
        body="Help a business identify a need, understand the relevant product and choose how to begin. Your role, training and service boundaries are agreed before participation."
      />
    </Section>

    <Section tone="muted" id="how-it-works">
      <SectionHeading title="How the relationship works." />
      <Steps
        items={[
          {
            title: 'Apply.',
            body: 'Tell us about your work, territory and the businesses you serve.',
          },
          {
            title: 'Agree your role.',
            body: 'Confirm product scope, enablement, conduct and commercial terms.',
          },
          {
            title: 'Introduce and support.',
            body: 'Use agreed materials and attributable links. Escalate needs outside your scope.',
          },
          {
            title: 'Review outcomes.',
            body: 'Follow the agreed process for adoption, feedback and eligible referrals.',
          },
        ]}
      />
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Know the terms before you commit."
          body="Commission, referral eligibility, payout timing and any onboarding responsibilities are confirmed in your agreement. An application is not approval and does not guarantee earnings."
        />
        <div>
          <SectionHeading
            title="Practical knowledge travels further."
            body="Use Basepoint Learn to explain everyday business routines. Share a relevant guide, discuss the business need and introduce the appropriate next step."
          />
          <ButtonLink to="/resources" variant="secondary">
            Explore Learn
          </ButtonLink>
        </div>
      </div>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Bring your expertise."
      highlight="Help a business take its next step."
      actions={
        <ButtonLink to="/collabs/apply" variant="onDark">
          Become a Collab
        </ButtonLink>
      }
    />
  </>
);

export default CollabsPage;
