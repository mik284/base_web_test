import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { useSearchParams } from '@umijs/max';
import React, { ReactNode } from 'react';

import {
  EmailField,
  FormCard,
  FormShell,
  NameField,
  PhoneField,
  PhonePermissionField,
  PrivacyNotice,
  SelectField,
  TextAreaField,
  TextField,
} from '@/components/Forms';
import { Container, HERO_H1, HeroSection } from '@/components/Page';
import SEO from '@/components/SEO';
import { SITE } from '@/constants/site';
import { JourneyType } from '@/services/forms';

const CATEGORIES: { label: string; intent: string; journey: JourneyType }[] = [
  { label: 'Product question', intent: 'product', journey: 'merchant' },
  { label: 'Setup request', intent: 'setup', journey: 'merchant' },
  {
    label: 'Partnership enquiry',
    intent: 'partnership',
    journey: 'strategic_partnership',
  },
  {
    label: 'Introducing a business',
    intent: 'referral',
    journey: 'referral_introduction',
  },
  { label: 'Support issue', intent: 'support', journey: 'support' },
];

const CHANNELS: { icon: ReactNode; label: string; content: ReactNode }[] = [
  {
    icon: <MailOutlined />,
    label: 'Email',
    content: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>,
  },
  {
    icon: <PhoneOutlined />,
    label: 'Phone',
    content: <a href={SITE.phoneHref}>{SITE.phone}</a>,
  },
  {
    icon: <WhatsAppOutlined />,
    label: 'WhatsApp',
    content: <a href={SITE.whatsappHref}>{SITE.phone}</a>,
  },
  {
    icon: <EnvironmentOutlined />,
    label: 'Office',
    content: SITE.address.join(', '),
  },
];

const ContactPage: React.FC = () => {
  const [params] = useSearchParams();
  const initialCategory = CATEGORIES.find(
    (category) => category.intent === params.get('intent'),
  )?.label;

  return (
    <>
      <SEO
        title="Contact Basepoint"
        description="Contact Basepoint about a product question, setup request, partnership enquiry or support issue. Email info@basepoint.co.ke or call +254 183 240756."
        canonical="/contact"
      />
      <HeroSection>
        <Container>
          <div className="max-w-3xl">
            <h1 className={HERO_H1}>Tell us what you need help with.</h1>
            <p className="m-0 mt-6 text-base md:text-lg leading-relaxed text-navy/80">
              Choose a product question, setup request, partnership enquiry or
              support issue so we can direct your message.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] items-start">
            <FormCard>
              <FormShell
                form="contact"
                journeyType={(values) =>
                  CATEGORIES.find((c) => c.label === values.category)
                    ?.journey ?? 'merchant'
                }
                entryMotion="assisted"
                event="contact_message_submitted"
                submitLabel="Send message"
                confirmation="Your message has been received. We'll direct it to the relevant team."
                initialValues={{ category: initialCategory }}
                notice={<PrivacyNotice />}
              >
                <NameField />
                <EmailField />
                <SelectField
                  name="category"
                  label="What is your message about?"
                  options={CATEGORIES.map((category) => category.label)}
                />
                <TextAreaField name="message" label="Message" />
                <PhoneField />
                <PhonePermissionField />
                <TextField
                  name="business"
                  label="Business name"
                  optional
                  autoComplete="organization"
                />
                <TextField
                  name="account_reference"
                  label="Existing account reference"
                  optional
                />
                <p className="m-0 mb-6 text-sm text-navy/80">
                  Never share a password or payment details in this form.
                </p>
              </FormShell>
            </FormCard>

            <aside className="rounded-3xl bg-surface p-6 md:p-8">
              <h2 className="m-0 mb-6 text-xl font-bold">
                Other ways to reach us
              </h2>
              <ul className="list-none m-0 p-0 space-y-5">
                {CHANNELS.map((channel) => (
                  <li key={channel.label} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="text-xl text-navy mt-0.5"
                    >
                      {channel.icon}
                    </span>
                    <div>
                      <p className="m-0 font-semibold">{channel.label}</p>
                      <p className="m-0 text-navy/80">{channel.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </HeroSection>
    </>
  );
};

export default ContactPage;
