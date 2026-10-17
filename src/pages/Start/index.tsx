import React from 'react';

import {
  ChoiceField,
  EmailField,
  FormCard,
  FormShell,
  FormStep,
  NameField,
  PrivacyNotice,
  TextAreaField,
} from '@/components/Forms';
import {
  ButtonLink,
  Container,
  HelpButton,
  HERO_H1,
  HeroSection,
} from '@/components/Page';
import SEO from '@/components/SEO';
import { BUSINESS_TYPES, FLAGS, LINKS } from '@/constants/site';
import { track } from '@/utils/analytics';
import { getAttribution } from '@/utils/attribution';

/** Account creation happens in the product app; attribution travels with the handoff. */
const signupUrl = () => {
  const url = new URL(LINKS.dukaSignup);
  Object.entries(getAttribution()).forEach(([key, value]) => {
    if (key !== 'landing_page') url.searchParams.set(key, value);
  });
  return url.toString();
};

const ProvisioningState: React.FC = () => (
  <>
    <h1 className={HERO_H1}>Start with Duka.</h1>
    <p className="m-0 mt-6 text-base md:text-lg leading-relaxed text-navy/80">
      Create your account to begin setting up your sales, stock and receipts.
    </p>
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <ButtonLink
        to={signupUrl()}
        external
        onClick={() => track('signup_started', { route: '/start' })}
      >
        Create account
      </ButtonLink>
      <HelpButton />
    </div>
  </>
);

const ACCESS_STEPS: FormStep[] = [
  {
    title: 'Your business',
    hint: 'One quick choice, and a note if you want to add one.',
    fields: ['business_type', 'setup_note'],
    content: (
      <>
        <ChoiceField
          name="business_type"
          label="What kind of business is it?"
          message="Choose your business type."
          columns={2}
          options={BUSINESS_TYPES.map((value) => ({ value }))}
        />
        <TextAreaField
          name="setup_note"
          label="Anything we should know about your setup?"
          optional
          extra="For example: the device you use or the records you keep today."
        />
      </>
    ),
  },
  {
    title: 'How we can reach you',
    hint: 'So we can confirm the next step for your setup.',
    fields: ['name', 'email'],
    content: (
      <>
        <NameField />
        <EmailField />
      </>
    ),
  },
];

const RequestAccessState: React.FC = () => (
  <>
    <h1 className={HERO_H1}>Request Duka access.</h1>
    <p className="m-0 mt-6 mb-10 text-base md:text-lg leading-relaxed text-navy/80">
      Direct account creation is not currently available here. Leave your
      details so we can confirm the next step for your setup. It takes two short
      steps.
    </p>
    <FormCard>
      <FormShell
        form="duka_access_request"
        journeyType="merchant"
        entryMotion="self_serve"
        // A request is not an account: never record it as signup_completed.
        event="duka_access_requested"
        submitLabel="Request access"
        confirmation="We've received your access request. This has not created a Duka account. We'll contact you about the next step."
        notice={<PrivacyNotice />}
        steps={ACCESS_STEPS}
      />
    </FormCard>
  </>
);

const StartPage: React.FC = () => {
  const provisioning = FLAGS.dukaProvisioning && Boolean(LINKS.dukaSignup);
  return (
    <>
      <SEO
        title={
          provisioning
            ? 'Start with Duka | Basepoint'
            : 'Request Duka Access | Basepoint'
        }
        description="Start with Duka to record sales, track stock and issue receipts, or request access and we'll confirm the next step for your setup."
        canonical="/start"
        noindex
      />
      <HeroSection>
        <Container narrow>
          {provisioning ? <ProvisioningState /> : <RequestAccessState />}
        </Container>
      </HeroSection>
    </>
  );
};

export default StartPage;
