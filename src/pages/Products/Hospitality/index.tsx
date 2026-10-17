import React from 'react';

import {
  ChoiceField,
  EmailField,
  FormCard,
  FormShell,
  FormStep,
  NameField,
  PhoneField,
  PhonePermissionField,
  PrivacyNotice,
  TextField,
} from '@/components/Forms';
import {
  ButtonLink,
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  HelpButton,
  Note,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

const FAQS: FAQItem[] = [
  { q: 'What will it cost?', a: 'Pricing is not yet confirmed.' },
  {
    q: 'Will it work offline?',
    a: 'Connectivity requirements are being assessed.',
  },
  {
    q: 'Can I use it now?',
    a: 'This page collects early-access interest. We will confirm when access is available.',
  },
];

const INTEREST_STEPS: FormStep[] = [
  {
    title: 'Your business',
    hint: 'A few quick choices to start.',
    fields: ['business_type', 'outlets', 'city'],
    content: (
      <>
        <ChoiceField
          name="business_type"
          label="What kind of business is it?"
          message="Choose your business type."
          columns={3}
          options={[
            { value: 'Restaurant' },
            { value: 'Café' },
            { value: 'Bar' },
            { value: 'Hotel' },
            { value: 'Other' },
          ]}
        />
        <ChoiceField
          name="outlets"
          label="How many outlets do you run?"
          message="Choose the number of outlets."
          columns={2}
          options={[
            { value: '1' },
            { value: '2–3' },
            { value: '4–10' },
            { value: 'More than 10' },
          ]}
        />
        <TextField name="city" label="City" autoComplete="address-level2" />
      </>
    ),
  },
  {
    title: 'What matters most',
    hint: 'These are proposed development areas, not available features.',
    fields: ['priority_workflow'],
    content: (
      <ChoiceField
        name="priority_workflow"
        label="Which workflow matters most to you?"
        message="Choose the workflow that matters most."
        columns={2}
        options={[
          { value: 'Table and order handling' },
          { value: 'Kitchen or bar tickets' },
          { value: 'Split bills' },
          { value: 'Modifiers' },
          { value: 'Staff permissions' },
          { value: 'Connectivity requirements' },
          { value: 'Something else' },
        ]}
      />
    ),
  },
  {
    title: 'How we can reach you',
    hint: 'So we can let you know about eligibility, features or access.',
    fields: ['name', 'email', 'phone', 'phone_contact_permission'],
    content: (
      <>
        <NameField />
        <EmailField />
        <PhoneField />
        <PhonePermissionField />
      </>
    ),
  },
];

const HospitalityPage: React.FC = () => (
  <>
    <SEO
      title="Duka for Hospitality | Early-Access Interest | Basepoint"
      description="Register early-access interest in Duka for restaurants, cafés, bars and hotels. Tell us which daily workflows matter most. No product access or launch date is confirmed."
      canonical="/products/duka/hospitality"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="Duka for hospitality · Early-access interest"
      title="Help shape Duka for the way"
      highlight="your hospitality business works."
      body="We're developing a hospitality proposition for restaurants, cafés, bars and hotels. Register your interest and tell us which daily workflows matter most to you."
      actions={
        <>
          <ButtonLink to="#early-access">Join early access</ButtonLink>
          <HelpButton label="Discuss your setup" />
        </>
      }
      note={
        <Note>
          This is an interest registration. It does not provide immediate
          product access. Features, eligibility and pricing will be confirmed as
          development progresses.
        </Note>
      }
    />

    <Section tone="muted">
      <div className="grid gap-12 md:grid-cols-2">
        <SectionHeading
          title="Which workflows should we prioritise?"
          body="We're considering table and order handling, kitchen or bar tickets, split bills, modifiers, staff permissions and connectivity requirements. These are proposed development areas, not available features."
        />
        <SectionHeading
          title="Tell us how your business actually runs."
          body="The number of outlets, your busiest service period and the tools you use will help us understand the right requirements."
        />
      </div>
    </Section>

    <Section id="early-access" narrow>
      <h2 className="m-0 mb-8 text-2xl md:text-3xl font-bold">
        Register early-access interest
      </h2>
      <p className="m-0 -mt-4 mb-8 text-navy/80">It takes three short steps.</p>
      <FormCard>
        <FormShell
          form="hospitality_interest"
          journeyType="hospitality_interest"
          entryMotion="interest_registration"
          event="hospitality_interest_submitted"
          submitLabel="Join early access"
          confirmation="Thanks for registering your interest. We'll contact you when there is relevant information about eligibility, features or access. Registration does not guarantee a place or a launch date."
          notice={<PrivacyNotice />}
          steps={INTEREST_STEPS}
        />
      </FormCard>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Tell us what a useful hospitality setup"
      highlight="needs to do."
      actions={
        <ButtonLink to="#early-access" variant="onDark">
          Join early access
        </ButtonLink>
      }
    />
  </>
);

export default HospitalityPage;
