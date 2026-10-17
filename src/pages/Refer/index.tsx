import React from 'react';

import {
  ButtonLink,
  FAQ,
  FAQItem,
  PageHero,
  Section,
  SectionHeading,
  Steps,
} from '@/components/Page';
import SEO from '@/components/SEO';
import { FLAGS } from '@/constants/site';

/*
 * Restricted state until referral eligibility, attribution and terms are
 * operational (spec §16). Turning on FLAGS.referralsOpen also requires the
 * referral form and /refer/terms with Legal/Finance-approved terms.
 */

const FAQS: FAQItem[] = [
  {
    q: 'Does a signup qualify for a reward?',
    a: 'Not automatically. The referral terms define the qualifying event.',
  },
  {
    q: "Can I submit someone else's phone number?",
    a: 'Only with their permission for the proposed contact. Prefer sharing your referral link so they can submit their own details.',
  },
  {
    q: 'What if the business already has an account?',
    a: 'Eligibility depends on the referral terms and duplicate checks.',
  },
];

const ReferPage: React.FC = () => (
  <>
    <SEO
      title="Refer a Business | Basepoint"
      description="Know a business that needs clearer records? Introduce Basepoint through a relevant product page or an approved referral link."
      canonical="/refer"
      noindex={!FLAGS.referralsOpen}
    />

    <PageHero
      title="Know a business that needs"
      highlight="clearer records?"
      body="Introduce Basepoint through a relevant product page or an approved referral link. A clear introduction helps the business choose its own next step."
    />

    {FLAGS.referralsOpen ? (
      <Section tone="muted">
        <SectionHeading title="How approved referrals work." />
        <Steps
          items={[
            {
              title: 'Use your assigned link.',
              body: 'It connects the introduction with your referrer record.',
            },
            {
              title: 'Let the business choose.',
              body: 'The owner can start directly or request help.',
            },
            {
              title: 'Follow the agreed terms.',
              body: 'Any reward depends on the eligibility and qualifying event in your referral agreement.',
            },
          ]}
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <ButtonLink to="/contact?intent=referral">
            Refer a business
          </ButtonLink>
          <ButtonLink to="/refer/terms" variant="secondary">
            See referral terms
          </ButtonLink>
        </div>
      </Section>
    ) : (
      <Section tone="muted" narrow>
        <p className="m-0 text-base md:text-lg leading-relaxed">
          Structured referral registration is not currently open. Contact
          Basepoint to discuss an introduction.
        </p>
        <div className="mt-8">
          <ButtonLink to="/contact?intent=referral">
            Discuss an introduction
          </ButtonLink>
        </div>
      </Section>
    )}

    <FAQ items={FAQS} />
  </>
);

export default ReferPage;
