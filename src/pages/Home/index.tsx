import {
  AimOutlined,
  CustomerServiceOutlined,
  EyeOutlined,
  FileTextOutlined,
  InboxOutlined,
  ReadOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import React from 'react';

import HeroIllustration from '@/components/HeroIllustration';
import {
  ArrowLink,
  ButtonLink,
  CardGrid,
  DukaButton,
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  HelpButton,
  Kicker,
  Note,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import ProductCards from '@/components/ProductCards';
import ProductShot from '@/components/ProductShot';
import SEO from '@/components/SEO';
import { GUIDES } from '@/constants/guides';
import { HOME_MEDIA, MediaAsset } from '@/constants/media';
import { SITE } from '@/constants/site';

const FAQS: FAQItem[] = [
  {
    q: 'Where should I begin?',
    a: 'Start with Duka if you need sales, stock and receipts for a retail business. If your needs are more complex, tell us about your setup.',
  },
  {
    q: 'Can I get help setting up?',
    a: "You can request help. We'll confirm the available support, scope and any fees before work begins.",
  },
  {
    q: 'Is Biashara AI available?',
    a: 'No. It is in development. You can join the waitlist for updates and potential opportunities to contribute to its development.',
  },
  {
    q: 'Does Base guarantee business growth?',
    a: 'No. Base provides tools and information. Business outcomes depend on many factors, including the quality of your records and the decisions you make.',
  },
];

const stepMedia = (asset: MediaAsset | null) =>
  asset ? <ProductShot asset={asset} /> : undefined;

const HomePage: React.FC = () => (
  <>
    <SEO
      title="Basepoint | Sales, Stock and Business Clarity"
      description="Start with Duka for sales, stock and receipts. Explore Base products, practical guides and setup support for your business."
      canonical="/"
      jsonLd={faqSchema(FAQS)}
    />

    <PageHero
      kicker={SITE.tagline}
      title="Know what sold. Know what's left."
      highlight="Know your next move."
      body="Start with Duka to record sales, track stock and issue receipts. Build a clearer picture of your business, then explore more of Base as your needs grow."
      actions={
        <>
          <DukaButton />
          <HelpButton />
        </>
      }
      note={
        <p className="m-0 text-sm font-semibold uppercase tracking-wider text-navy/75">
          Business software for your everyday operations ·{' '}
          <span className="text-navy">{SITE.masterPromise}</span>
        </p>
      }
      aside={
        HOME_MEDIA.heroScreen ? (
          <ProductShot asset={HOME_MEDIA.heroScreen} priority />
        ) : (
          <HeroIllustration />
        )
      }
    />

    <Section>
      {HOME_MEDIA.shopPhoto ? (
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-12 md:mb-16">
          <SectionHeading
            kicker="Start with Duka"
            title="Sales in one book, stock in another. Your records shouldn't be scattered."
            body="When sales and stock live in different places, reviewing the day takes more work. Duka gives you a practical place to start: record what you sell, keep stock records and issue receipts."
          />
          <ProductShot asset={HOME_MEDIA.shopPhoto} framed={false} />
        </div>
      ) : (
        <SectionHeading
          center
          kicker="Start with Duka"
          title="Sales in one book, stock in another. Your records shouldn't be scattered."
          body="When sales and stock live in different places, reviewing the day takes more work. Duka gives you a practical place to start: record what you sell, keep stock records and issue receipts."
        />
      )}
      <CardGrid
        items={[
          {
            icon: <ShoppingCartOutlined />,
            title: 'Record the sale.',
            body: 'Keep a record of what was sold.',
            media: stepMedia(HOME_MEDIA.steps.sale),
          },
          {
            icon: <InboxOutlined />,
            title: 'Track the stock.',
            body: 'Review your recorded stock and compare it with what is on the shelf.',
            media: stepMedia(HOME_MEDIA.steps.stock),
          },
          {
            icon: <FileTextOutlined />,
            title: 'Issue the receipt.',
            body: 'Give customers a receipt for their purchase.',
            media: stepMedia(HOME_MEDIA.steps.receipt),
          },
        ]}
      />
    </Section>

    {HOME_MEDIA.counters.length > 0 && (
      <Section tone="muted">
        <SectionHeading
          center
          kicker="Everyday businesses"
          title="Every sale starts at a counter."
          body="Kiosks, butcheries, cafés and fruit stalls: busy counters where clear records make the end of the day easier."
        />
        <ul className="list-none m-0 p-0 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {HOME_MEDIA.counters.map((asset) => (
            <li key={asset.src}>
              <ProductShot asset={asset} framed={false} />
            </li>
          ))}
        </ul>
      </Section>
    )}

    <Section tone="navy">
      <div className="max-w-2xl mb-12 md:mb-16">
        <Kicker onDark>A suggested routine</Kicker>
        <h2 className="m-0 text-3xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1]">
          Build a clearer routine, one day at a time.
        </h2>
      </div>
      <CardGrid
        onDark
        columns={4}
        items={[
          {
            icon: <EyeOutlined />,
            accent: 'mint',
            title: 'See where you stand.',
            body: 'Review the records you have and check what needs attention.',
          },
          {
            icon: <AimOutlined />,
            accent: 'electric',
            title: 'Choose one priority.',
            body: 'Focus on a practical question: a stock gap, missing records or a setup task.',
          },
          {
            icon: <RocketOutlined />,
            accent: 'orange',
            title: 'Take the next step.',
            body: 'Use your records and a relevant Learn guide to work through it.',
          },
          {
            icon: <SyncOutlined />,
            accent: 'cyan',
            title: 'Review what changed.',
            body: 'Return to the records and decide what to keep doing or improve.',
          },
        ]}
      />
      <p className="m-0 mt-8 text-sm text-white/70">
        A suggested operating routine. Planning and review remain your
        responsibility.
      </p>
    </Section>

    <Section>
      <SectionHeading center title="Start your way." />
      <CardGrid
        columns={2}
        items={[
          {
            icon: <ShoppingCartOutlined />,
            accent: 'mint',
            title: 'Ready to try Duka?',
            body: 'Start with the sales, stock and receipt workflow.',
            footer: <DukaButton />,
          },
          {
            icon: <CustomerServiceOutlined />,
            accent: 'electric',
            title: 'Need help with your setup?',
            body: "Tell us about your business, your current tools and what you want to change. We'll use that information to discuss the right next step.",
            footer: <HelpButton />,
          },
        ]}
      />
    </Section>

    <Section tone="muted">
      <SectionHeading
        center
        kicker="Our products"
        title="Start with what you need. Explore more as you grow."
        body="Duka is the retail starting point. Explore Pesa for financial records, Mteja for customer relationships and Bandu for people administration. Each product page explains its current availability."
      />
      <ProductCards />
      <div className="mt-12 text-center">
        <ButtonLink to="/platform" variant="secondary">
          Explore Base
        </ButtonLink>
      </div>
    </Section>

    <Section>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy text-white p-8 md:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-mint/30 blur-[60px]"
          />
          <div className="relative z-10">
            <Kicker onDark>Base Collabs</Kicker>
            <h2 className="m-0 text-3xl font-bold tracking-[-0.02em] leading-[1.15]">
              Better tools. People who understand the work.
            </h2>
            <p className="m-0 mt-4 text-lg leading-relaxed text-white/80">
              Base Collabs brings experts, advisors and resellers into
              Basepoint&apos;s network. Tell us what help you need, and we can
              discuss available support for your setup.
            </p>
            <div className="mt-8">
              <HelpButton
                label="Ask about support"
                query={{ intent: 'support' }}
                variant="onDark"
              />
            </div>
            <div className="mt-8">
              <Note onDark>
                Availability, scope and any fees are confirmed before support
                begins.
              </Note>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-surface border border-solid border-surfaceAlt p-8 md:p-12">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-40 h-40 -mt-10 -mr-10 rounded-bl-full bg-yellow/25"
          />
          <div className="relative z-10">
            <Kicker>Biashara AI — in development</Kicker>
            <h2 className="m-0 text-3xl font-bold tracking-[-0.02em] leading-[1.15]">
              From business records to better decisions.
            </h2>
            <p className="m-0 mt-4 text-lg leading-relaxed text-navy/75">
              We&apos;re exploring how Biashara AI could help organisations turn
              business signals into proposed actions, coordinate follow-through
              and learn from results. Explore the concept and register your
              interest.
            </p>
            <div className="mt-8">
              <ButtonLink to="/solutions/biashara-ai" variant="secondary">
                Explore Biashara AI
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section tone="muted">
      <SectionHeading
        center
        kicker="Basepoint Learn"
        title="Make your next business review more useful."
        body="Start with practical guides to reviewing daily records, counting stock and preparing for another outlet."
      />
      <CardGrid
        items={GUIDES.map((guide) => ({
          icon: <ReadOutlined />,
          title: guide.title,
          body: guide.summary,
          footer: (
            <ArrowLink to={`/resources/${guide.slug}`}>
              Read the guide
            </ArrowLink>
          ),
        }))}
      />
    </Section>

    <FAQ items={FAQS} />

    <FinalBanner
      title="Close the day knowing what sold."
      highlight="Start with Duka."
      actions={
        <>
          <DukaButton variant="onDark" />
          <HelpButton variant="onDarkSecondary" />
        </>
      }
    />
  </>
);

export default HomePage;
