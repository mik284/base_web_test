import { useSearchParams } from '@umijs/max';
import { Form } from 'antd';
import React from 'react';

import {
  ChoiceField,
  EmailField,
  FormCard,
  FormShell,
  FormStep,
  MultiChoiceField,
  NameField,
  PhoneField,
  PhonePermissionField,
  PrivacyNotice,
  TextAreaField,
  TextField,
} from '@/components/Forms';
import { Container, HERO_H1, HeroSection, Note } from '@/components/Page';
import SEO from '@/components/SEO';
import { BUSINESS_TYPES } from '@/constants/site';

const PRODUCT_NAMES: Record<string, string> = {
  pesa: 'Pesa',
  mteja: 'Mteja',
  bandu: 'Bandu',
  duka: 'Duka',
};

const SEGMENT_BUSINESS_TYPE: Record<string, string> = {
  distributor: 'Wholesale or distribution',
  enterprise: 'Other',
};

const INTENT_NOTES: Record<string, string> = {
  support: 'You’re asking about setup support.',
  'second-outlet': 'You’re asking about preparing for another outlet.',
};

const STEPS: FormStep[] = [
  {
    title: 'Your business',
    hint: 'Two quick choices to start.',
    fields: ['business_type', 'locations'],
    content: (
      <>
        <ChoiceField
          name="business_type"
          label="What kind of business is it?"
          message="Choose your business type."
          columns={2}
          options={BUSINESS_TYPES.map((value) => ({ value }))}
        />
        <ChoiceField
          name="locations"
          label="How many locations do you run?"
          message="Choose the number of locations."
          columns={2}
          options={[
            { value: '1' },
            { value: '2–3' },
            { value: '4–10' },
            { value: 'More than 10' },
          ]}
        />
      </>
    ),
  },
  {
    title: 'What you want to change',
    hint: 'In your own words. A few sentences is enough.',
    fields: ['need', 'current_tools', 'additional_needs'],
    content: (
      <>
        <TextAreaField
          name="need"
          label="What do you want to change?"
          extra="For example: how you record sales today, where your records break down, or what you need help setting up."
        />
        <TextField name="current_tools" label="Current tools" optional />
        <MultiChoiceField
          name="additional_needs"
          label="Do you also need help with any of these?"
          options={[
            { value: 'Moving existing records' },
            { value: 'Connecting another tool or system' },
          ]}
        />
      </>
    ),
  },
  {
    title: 'How we can reach you',
    hint: 'So we can follow up on your request.',
    fields: [
      'name',
      'email',
      'preferred_contact',
      'phone',
      'phone_contact_permission',
      'business_name',
      'city',
    ],
    content: (
      <>
        <NameField />
        <EmailField />
        <ChoiceField
          name="preferred_contact"
          label="How would you like us to contact you?"
          columns={3}
          options={[
            { value: 'Email' },
            { value: 'Phone call' },
            { value: 'WhatsApp' },
          ]}
        />
        <Form.Item
          noStyle
          shouldUpdate={(prev, next) =>
            prev.preferred_contact !== next.preferred_contact
          }
        >
          {({ getFieldValue }) => {
            const byPhone = ['Phone call', 'WhatsApp'].includes(
              getFieldValue('preferred_contact'),
            );
            return (
              <>
                <PhoneField isRequired={byPhone} />
                <PhonePermissionField isRequired={byPhone} />
              </>
            );
          }}
        </Form.Item>
        <TextField
          name="business_name"
          label="Business name"
          optional
          autoComplete="organization"
        />
        <TextField
          name="city"
          label="City"
          optional
          autoComplete="address-level2"
        />
      </>
    ),
  },
];

const SAFE_ROUTE = /^\/[\w/-]{0,100}$/;

/** Reads the originating context from the query string, keeping only known values. */
const useIntakeContext = () => {
  const [params] = useSearchParams();
  const product = params.get('product') ?? '';
  const segment = params.get('segment') ?? '';
  const intent = params.get('intent') ?? '';
  const from = params.get('from') ?? '';

  const context: Record<string, string> = {};
  if (PRODUCT_NAMES[product]) context.product_interest = product;
  if (SEGMENT_BUSINESS_TYPE[segment]) context.segment = segment;
  if (INTENT_NOTES[intent]) context.intent = intent;
  if (SAFE_ROUTE.test(from)) context.origin_route = from;

  const note = PRODUCT_NAMES[product]
    ? `You’re asking about ${PRODUCT_NAMES[product]}.`
    : INTENT_NOTES[intent];

  return { context, note, businessType: SEGMENT_BUSINESS_TYPE[segment] };
};

const DemoPage: React.FC = () => {
  const { context, note, businessType } = useIntakeContext();

  return (
    <>
      <SEO
        title="Tell Us About Your Setup | Basepoint"
        description="Help us understand your business and what you want to change. We'll use this to discuss the right next step."
        canonical="/demo"
        noindex
      />
      <HeroSection>
        <Container narrow>
          <h1 className={HERO_H1}>Tell us about your setup.</h1>
          <p className="m-0 mt-6 mb-8 text-base md:text-lg leading-relaxed text-navy/80">
            Help us understand your business and what you want to change.
            We&apos;ll use this to discuss the right next step. It takes three
            short steps.
          </p>
          {note && (
            <div className="mb-8">
              <Note>{note}</Note>
            </div>
          )}
          <FormCard>
            <FormShell
              form="assisted_intake"
              journeyType="merchant"
              entryMotion="assisted"
              event="conversation_requested"
              submitLabel="Request a conversation"
              confirmation="We've received your request. We'll review your needs and contact you through the method you selected."
              initialValues={{
                business_type: businessType,
                preferred_contact: 'Email',
              }}
              context={context}
              notice={<PrivacyNotice />}
              steps={STEPS}
            />
          </FormCard>
        </Container>
      </HeroSection>
    </>
  );
};

export default DemoPage;
