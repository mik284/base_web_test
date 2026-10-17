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
  TextField,
} from '@/components/Forms';
import { Container, HERO_H1, HeroSection } from '@/components/Page';
import SEO from '@/components/SEO';

const STEPS: FormStep[] = [
  {
    title: 'You and your organisation',
    hint: 'Who we would be talking to.',
    fields: ['name', 'email', 'organisation', 'organisation_type', 'location'],
    content: (
      <>
        <NameField />
        <EmailField label="Work email" />
        <TextField
          name="organisation"
          label="Organisation"
          autoComplete="organization"
        />
        <ChoiceField
          name="organisation_type"
          label="What type of organisation is it?"
          message="Choose your organisation type."
          columns={2}
          options={[
            { value: 'Distributor or manufacturer' },
            { value: 'Software or technology provider' },
            { value: 'Financial services provider' },
            { value: 'Business support or advisory organisation' },
            { value: 'Industry or ecosystem organisation' },
            { value: 'Other' },
          ]}
        />
        <TextField
          name="location"
          label="City and country"
          autoComplete="address-level2"
        />
      </>
    ),
  },
  {
    title: 'The partnership',
    hint: 'Start with the problem you want to solve.',
    fields: ['partnership_area', 'proposal'],
    content: (
      <>
        <ChoiceField
          name="partnership_area"
          label="Which area fits best?"
          message="Choose a partnership area."
          options={[
            {
              value: 'Distribution and adoption',
              description:
                'Your network could introduce businesses to relevant Base products.',
            },
            {
              value: 'Business support',
              description:
                'A bounded collaboration around practical expertise and adoption.',
            },
            {
              value: 'Product and intelligence',
              description:
                'Workflow requirements, possible integrations or future Biashara AI scenarios.',
            },
          ]}
        />
        <TextAreaField
          name="proposal"
          label="The problem you want to address and the value you could contribute"
          extra="A few sentences is enough. We'll follow up on the details."
        />
      </>
    ),
  },
  {
    title: 'A few optional details',
    hint: 'Everything on this step is optional.',
    fields: ['website', 'network_size'],
    content: (
      <>
        <TextField
          name="website"
          label="Website"
          optional
          type="url"
          autoComplete="url"
        />
        <ChoiceField
          name="network_size"
          label="Roughly how many businesses are in your network?"
          columns={2}
          options={[
            { value: 'Fewer than 50' },
            { value: '50–500' },
            { value: '501–5,000' },
            { value: 'More than 5,000' },
          ]}
        />
      </>
    ),
  },
];

const PartnersApplyPage: React.FC = () => (
  <>
    <SEO
      title="Partnership Enquiry | Basepoint"
      description="Describe the partnership you have in mind: who you serve, the problem you want to address and how you would like to work with Basepoint."
      canonical="/partners/apply"
      noindex
    />
    <HeroSection>
      <Container narrow>
        <h1 className={HERO_H1}>Describe the partnership you have in mind.</h1>
        <p className="m-0 mt-6 mb-10 text-base md:text-lg leading-relaxed text-navy/80">
          Tell us who you serve, the problem you want to address and how you
          would like to work with Basepoint. It takes three short steps.
        </p>
        <FormCard>
          <FormShell
            form="partnership_enquiry"
            journeyType="strategic_partnership"
            entryMotion="application"
            event="partnership_enquiry_submitted"
            submitLabel="Send partnership enquiry"
            confirmation="We've received your enquiry. We'll review the proposed fit and contact you about the next step. No partnership, integration or data access is confirmed by submission."
            notice={
              <PrivacyNotice>
                We&apos;ll use these details to respond to your enquiry.
              </PrivacyNotice>
            }
            steps={STEPS}
          />
        </FormCard>
      </Container>
    </HeroSection>
  </>
);

export default PartnersApplyPage;
