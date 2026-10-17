import React from 'react';

import {
  ChoiceField,
  EmailField,
  FormCard,
  FormShell,
  FormStep,
  MarketingConsentField,
  MultiChoiceField,
  NameField,
  PrivacyNotice,
  TextAreaField,
  TextField,
} from '@/components/Forms';
import {
  ButtonLink,
  CardGrid,
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  Kicker,
  Note,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

const SCENARIOS = [
  {
    name: 'Stock planning',
    question: 'What should we reorder, and why?',
    body: 'A proposed scenario would bring sales, stock and supplier information together to compare reorder options.',
  },
  {
    name: 'Commercial testing',
    question: 'Is this promotion worth testing?',
    body: 'A proposed scenario would make assumptions explicit and outline a test with a measurable result.',
  },
  {
    name: 'Distribution focus',
    question: 'Where should the team focus next?',
    body: 'A proposed scenario would compare available market and outlet signals to identify opportunities for review.',
  },
  {
    name: 'Coordinated action',
    question: 'Who needs to do what next?',
    body: 'A proposed scenario would turn an approved decision into suggested responsibilities and follow-up checks.',
  },
];

const WALKTHROUGH = [
  {
    title: 'Bring the evidence.',
    body: 'Sample sales records, a checked stock count and a supplier lead time provide the starting information.',
  },
  {
    title: 'Check the gaps.',
    body: 'Missing records or an outdated stock count must be identified before relying on a recommendation.',
  },
  {
    title: 'Compare options.',
    body: 'The proposed system would show possible actions and the assumptions behind them.',
  },
  {
    title: 'Keep approval with people.',
    body: 'The responsible manager would approve, change or reject the suggested action.',
  },
  {
    title: 'Review the result.',
    body: 'The team would compare the outcome with its original expectation and update the next decision.',
  },
];

const CAPABILITIES = [
  {
    title: 'Market sensing.',
    body: 'We intend to explore how relevant market signals could inform commercial decisions.',
  },
  {
    title: 'Hypothesis testing.',
    body: 'We intend to help teams structure assumptions and evaluate tests.',
  },
  {
    title: 'Supply-chain decisions.',
    body: 'We intend to explore decisions about goods, cash and information using permitted data.',
  },
  {
    title: 'Execution coordination.',
    body: 'We intend to connect approved decisions with responsibilities and review steps.',
  },
  {
    title: 'Learning from outcomes.',
    body: 'We intend to use evaluated results to improve subsequent recommendations.',
  },
];

const FAQS: FAQItem[] = [
  {
    q: 'Can I use Biashara AI today?',
    a: 'No. It is in development. This page collects interest and proposed use cases.',
  },
  {
    q: 'Will it run my business for me?',
    a: 'The intended approach supports human decision-making. Proposed actions would remain subject to review and approval.',
  },
  {
    q: 'Does it work with Duka or other software?',
    a: 'Connections are not yet confirmed. Tell us which workflow and tools matter to your organisation.',
  },
  {
    q: 'Will I need to share business data?',
    a: 'Any future pilot would define required data and permissions separately. Joining the waitlist does not require operational data.',
  },
  { q: 'What will it cost?', a: 'Pricing is not confirmed.' },
  {
    q: 'When will it launch?',
    a: 'There is no confirmed public launch date.',
  },
];

const waitlistButton = (variant: 'primary' | 'onDark') => (
  <ButtonLink to="#waitlist" variant={variant}>
    Join the waitlist
  </ButtonLink>
);

const WAITLIST_STEPS: FormStep[] = [
  {
    title: 'You and your organisation',
    hint: 'Who is registering interest.',
    fields: ['name', 'email', 'organisation', 'organisation_type'],
    content: (
      <>
        <NameField />
        <EmailField />
        <TextField
          name="organisation"
          label="Organisation"
          autoComplete="organization"
        />
        <p className="m-0 -mt-4 mb-6 text-sm text-navy/80">
          If you are registering as an individual, enter
          &ldquo;Independent&rdquo;.
        </p>
        <ChoiceField
          name="organisation_type"
          label="What type of organisation is it?"
          message="Choose your organisation type."
          columns={2}
          options={[
            { value: 'Business or enterprise' },
            { value: 'Distributor or manufacturer' },
            { value: 'Software provider' },
            { value: 'Advisory or ecosystem organisation' },
            { value: 'Independent business owner' },
            { value: 'Other' },
          ]}
        />
      </>
    ),
  },
  {
    title: 'Your interest',
    hint: 'Tell us what you would like from Biashara AI.',
    fields: ['primary_interest', 'decision_description'],
    content: (
      <>
        <MultiChoiceField
          name="primary_interest"
          label="What are you interested in?"
          message="Choose at least one interest."
          options={[
            { value: 'Product updates' },
            { value: 'Potential future pilot' },
            { value: 'Potential integration or partnership' },
          ]}
        />
        <TextAreaField
          name="decision_description"
          label="The decision or problem you want to improve"
          extra="Describe the decision in your own words. Please do not include customer details, operational records or login credentials."
        />
      </>
    ),
  },
  {
    title: 'A few optional details',
    hint: 'Everything on this step is optional.',
    fields: ['industry', 'tools', 'location', 'marketing_opt_in'],
    content: (
      <>
        <TextField name="industry" label="Industry" optional />
        <TextField
          name="tools"
          label="Current tools or data sources (categories only)"
          optional
        />
        <TextField
          name="location"
          label="City or country"
          optional
          autoComplete="address-level2"
        />
        <MarketingConsentField />
      </>
    ),
  },
];

const BiasharaAIPage: React.FC = () => (
  <>
    <SEO
      title="Biashara AI | Commercial Intelligence in Development"
      description="Explore Biashara AI's proposed decision-support scenarios and join the waitlist. Access, integrations and launch timing are not confirmed."
      canonical="/solutions/biashara-ai"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker="Biashara AI · In development"
      title="Turn business activity into"
      highlight="better commercial decisions."
      body="We're developing Biashara AI to help organisations interpret business signals, compare possible actions and review what happens next. The intended approach combines commercial evidence with human judgment."
      actions={waitlistButton('primary')}
      note={
        <Note>
          Biashara AI is in development. The scenarios below illustrate intended
          uses, not live capabilities. Access, integrations, pricing and launch
          timing are not confirmed.
        </Note>
      }
    />

    <Section tone="muted" narrow>
      <SectionHeading
        title="Information is useful when it helps someone decide what to do."
        body="A report can show that something changed. The next questions are harder: What caused it? What should we try? Who needs to act? How will we know whether it worked? Biashara AI is being designed around that sequence."
      />
    </Section>

    <Section>
      <SectionHeading title="Start with a decision worth improving." />
      <CardGrid
        columns={4}
        items={SCENARIOS.map((scenario) => ({
          badge: (
            <span className="text-xs font-semibold uppercase tracking-widest text-navy/80">
              {scenario.name}
            </span>
          ),
          title: scenario.question,
          body: scenario.body,
          footer: (
            <p className="m-0 text-xs italic text-navy/80">
              Proposed scenario — subject to development and validation.
            </p>
          ),
        }))}
      />
    </Section>

    <Section tone="navy">
      <Kicker onDark>Illustrative concept — not a live product</Kicker>
      <SectionHeading
        onDark
        title="One question. A visible chain of reasoning."
        body="Consider a distributor asking whether to replenish an outlet before the next delivery. This example shows the intended decision process using fictional information."
      />
      <ol className="list-none m-0 p-0 grid gap-4 md:grid-cols-5">
        {WALKTHROUGH.map((step, i) => (
          <li
            key={step.title}
            className="rounded-2xl bg-white/5 border border-white/15 p-5"
          >
            <span className="text-sm font-semibold text-mint">
              Step {i + 1}
            </span>
            <h3 className="m-0 mt-2 text-base font-bold text-white">
              {step.title}
            </h3>
            <p className="m-0 mt-2 text-sm leading-relaxed text-white/85">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
      <p className="m-0 mt-8 text-white/90 font-semibold">
        The aim is a more accountable decision process. Results will need to be
        tested in real workflows.
      </p>
    </Section>

    <Section>
      <SectionHeading
        title="A recommendation should connect to a goal and a review."
        body="We intend to link proposed actions to an agreed business goal, the resources available and a way to assess the result. A useful recommendation should explain what it depends on and leave room for human judgment."
      />
      <CardGrid
        items={[
          {
            title: 'Define the goal.',
            body: 'Name the decision and the outcome you want to evaluate.',
          },
          {
            title: 'Make the action practical.',
            body: 'Consider the time, money and people available.',
          },
          {
            title: 'Review the evidence.',
            body: 'Compare the result with the expectation and investigate differences.',
          },
        ]}
      />
    </Section>

    <Section tone="muted">
      <SectionHeading title="What we're working toward." />
      <ul className="list-none m-0 p-0 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl bg-white p-6 border border-surfaceAlt"
          >
            <h3 className="m-0 text-lg font-bold">{item.title}</h3>
            <p className="m-0 mt-2 leading-relaxed text-navy/80">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>

    <Section>
      <SectionHeading title="Help define a useful commercial workflow." />
      <CardGrid
        items={[
          {
            title: 'Enterprises and distributors.',
            body: 'Bring a recurring decision that would benefit from better evidence and follow-through.',
          },
          {
            title: 'Business software providers.',
            body: 'Explore how decision support could fit alongside the workflows your users already rely on.',
          },
          {
            title: 'Advisory and ecosystem organisations.',
            body: 'Help identify practical scenarios, evaluation criteria and responsible support needs.',
          },
        ]}
      />
    </Section>

    <Section tone="muted" narrow>
      <SectionHeading
        title="Designed to support judgment."
        body="Our intended approach keeps recommendations open to review and decisions under human control. Data sources, permissions, limitations and evaluation methods will need to be defined for each future pilot."
      />
    </Section>

    <Section id="waitlist" narrow>
      <SectionHeading title="Tell us which decision you want to improve." />
      <FormCard>
        <FormShell
          form="ai_waitlist"
          journeyType="ai_waitlist"
          entryMotion="interest_registration"
          event="ai_waitlist_submitted"
          submitLabel="Join the waitlist"
          confirmation="You're on the Biashara AI waitlist. We'll share relevant updates and may contact you to understand your proposed use case. Access and timing are not yet confirmed."
          notice={
            <>
              <PrivacyNotice>
                We&apos;ll use these details to respond to your interest and
                share relevant Biashara AI updates.
              </PrivacyNotice>{' '}
              Registration does not guarantee access or a launch date.
            </>
          }
          steps={WAITLIST_STEPS}
        />
      </FormCard>
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Bring a real decision."
      highlight="Help shape useful intelligence."
      actions={waitlistButton('onDark')}
    />
  </>
);

export default BiasharaAIPage;
