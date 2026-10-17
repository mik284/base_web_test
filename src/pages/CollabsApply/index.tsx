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
  TextAreaField,
  TextField,
} from '@/components/Forms';
import { Container, HERO_H1, HeroSection } from '@/components/Page';
import SEO from '@/components/SEO';

const STEPS: FormStep[] = [
  {
    title: 'About you',
    hint: 'Start with who you are and how you would like to work with us.',
    fields: ['name', 'email', 'role_interest'],
    content: (
      <>
        <NameField />
        <EmailField />
        <ChoiceField
          name="role_interest"
          label="How would you like to work with Basepoint?"
          message="Choose how you would like to work with Basepoint."
          options={[
            {
              value: 'Expert or advisor',
              description: 'You help businesses improve how they work.',
            },
            {
              value: 'Reseller or onboarding partner',
              description: 'You introduce Base and support an agreed setup.',
            },
            {
              value: 'Champion or referrer',
              description: 'You have trusted relationships and introductions.',
            },
          ]}
        />
      </>
    ),
  },
  {
    title: 'Your work',
    hint: 'Tell us where you work and the businesses you serve.',
    fields: ['territory', 'industries', 'network_size', 'experience'],
    content: (
      <>
        <TextField
          name="territory"
          label="City or territory"
          autoComplete="address-level2"
        />
        <TextField name="industries" label="Industries you serve" />
        <ChoiceField
          name="network_size"
          label="Roughly how many businesses are in your network?"
          message="Choose the size of your business network."
          columns={2}
          options={[
            { value: 'Fewer than 10' },
            { value: '10–50' },
            { value: '51–200' },
            { value: 'More than 200' },
          ]}
        />
        <TextAreaField
          name="experience"
          label="Relevant experience"
          extra="A few sentences is enough."
        />
      </>
    ),
  },
  {
    title: 'A few optional details',
    hint: 'Everything on this step is optional. Add what helps us review your application.',
    fields: ['organisation', 'website', 'phone', 'phone_contact_permission'],
    content: (
      <>
        <TextField
          name="organisation"
          label="Organisation"
          optional
          autoComplete="organization"
        />
        <TextField
          name="website"
          label="Website"
          optional
          type="url"
          autoComplete="url"
        />
        <PhoneField />
        <PhonePermissionField />
      </>
    ),
  },
];

const CollabsApplyPage: React.FC = () => (
  <>
    <SEO
      title="Apply to Base Collabs | Basepoint"
      description="Tell us how you help businesses. Share your experience, the businesses you serve and how you would like to work with Basepoint."
      canonical="/collabs/apply"
      noindex
    />
    <HeroSection>
      <Container narrow>
        <h1 className={HERO_H1}>Tell us how you help businesses.</h1>
        <p className="m-0 mt-6 mb-10 text-base md:text-lg leading-relaxed text-navy/80">
          Share your experience, the businesses you serve and how you would like
          to work with Basepoint. It takes three short steps.
        </p>
        <FormCard>
          <FormShell
            form="collab_application"
            journeyType="collab_application"
            entryMotion="application"
            event="collab_application_submitted"
            submitLabel="Send application"
            confirmation="We've received your application. We'll review the fit and contact you about the next step. Submission does not confirm membership or commercial terms."
            notice={
              <PrivacyNotice>
                We&apos;ll use these details to review your application.
              </PrivacyNotice>
            }
            steps={STEPS}
          />
        </FormCard>
      </Container>
    </HeroSection>
  </>
);

export default CollabsApplyPage;
