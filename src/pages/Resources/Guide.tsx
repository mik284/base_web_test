import { WhatsAppOutlined } from '@ant-design/icons';
import { Link, useLocation } from '@umijs/max';
import React, { useEffect } from 'react';

import {
  ButtonLink,
  Container,
  HelpButton,
  HERO_H1,
  HeroSection,
} from '@/components/Page';
import SEO from '@/components/SEO';
import { getGuide, Guide } from '@/constants/guides';
import { SITE } from '@/constants/site';
import NotFoundPage from '@/pages/404';
import { track } from '@/utils/analytics';
import { getAttribution } from '@/utils/attribution';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/** A WhatsApp share link that keeps a valid referral code but never contact data. */
const whatsappShareUrl = (guide: Guide) => {
  const url = new URL(`${SITE.domain}/resources/${guide.slug}`);
  const { referral_code: referralCode } = getAttribution();
  if (referralCode) url.searchParams.set('ref', referralCode);
  return `https://wa.me/?text=${encodeURIComponent(
    `${guide.title}: ${guide.summary} ${url.toString()}`,
  )}`;
};

const GuideBody: React.FC<{ guide: Guide }> = ({ guide }) => {
  useEffect(() => {
    track('resource_viewed', { resource: guide.slug });
  }, [guide.slug]);

  const StepList = guide.numbered ? 'ol' : 'ul';

  return (
    <>
      <SEO
        title={`${guide.title} | Basepoint Learn`}
        description={guide.summary}
        canonical={`/resources/${guide.slug}`}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.summary,
          datePublished: guide.published,
          author: { '@type': 'Organization', name: SITE.organisation },
          publisher: { '@type': 'Organization', name: SITE.organisation },
        }}
      />
      <HeroSection as="article">
        <Container narrow>
          <p className="m-0 mb-4 text-sm">
            <Link
              to="/resources"
              className="text-electric no-underline hover:underline"
            >
              Basepoint Learn
            </Link>
            <span className="text-navy/80">
              {' '}
              · {guide.categories.join(' · ')}
            </span>
          </p>
          <h1 className={HERO_H1}>{guide.title}</h1>
          <p className="m-0 mt-6 text-lg md:text-xl leading-relaxed text-navy/80">
            {guide.summary}
          </p>
          <p className="m-0 mt-4 text-sm text-navy/80">
            By {guide.author} · Published{' '}
            <time dateTime={guide.published}>
              {formatDate(guide.published)}
            </time>
          </p>

          <p className="m-0 mt-10 text-base md:text-lg leading-relaxed">
            {guide.intro}
          </p>

          <StepList className="list-none m-0 p-0 mt-10 grid gap-6">
            {guide.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                {guide.numbered && (
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-9 h-9 rounded-full bg-navy text-white font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                )}
                <div>
                  <h2 className="m-0 text-lg font-bold">{step.title}</h2>
                  <p className="m-0 mt-2 leading-relaxed text-navy/80">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </StepList>

          {guide.extra && (
            <div className="mt-10 rounded-2xl bg-surface p-6">
              <h2 className="m-0 text-lg font-bold">{guide.extra.title}</h2>
              <p className="m-0 mt-2 leading-relaxed text-navy/80">
                {guide.extra.body}
              </p>
            </div>
          )}

          <dl className="m-0 mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-solid border-mint p-6">
              <dt className="font-bold">{guide.tryLabel}</dt>
              <dd className="m-0 mt-2 leading-relaxed">{guide.tryText}</dd>
            </div>
            <div className="rounded-2xl border-2 border-solid border-cyan p-6">
              <dt className="font-bold">{guide.reviewLabel}</dt>
              <dd className="m-0 mt-2 leading-relaxed">{guide.reviewText}</dd>
            </div>
          </dl>

          {guide.closing && (
            <p className="m-0 mt-8 text-sm leading-relaxed text-navy/80">
              {guide.closing}
            </p>
          )}

          <div className="mt-12 pt-10 border-t border-surfaceAlt">
            {guide.connection && (
              <p className="m-0 mb-6 leading-relaxed">
                <strong>Duka connection:</strong> {guide.connection}
              </p>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {guide.cta.href ? (
                <ButtonLink to={guide.cta.href}>{guide.cta.label}</ButtonLink>
              ) : (
                <HelpButton label={guide.cta.label} variant="primary" />
              )}
              <a
                href={whatsappShareUrl(guide)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track('resource_shared', { resource: guide.slug })
                }
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy/80 hover:text-navy"
              >
                <WhatsAppOutlined aria-hidden="true" />
                Share this guide
              </a>
            </div>
          </div>

          <details className="mt-12 rounded-2xl bg-surface px-5 py-4">
            <summary className="cursor-pointer font-semibold">
              Explaining this to a business owner?
            </summary>
            <p className="m-0 mt-3 leading-relaxed text-navy/80">
              &ldquo;Base helps a business get clearer records. Duka starts with
              sales, stock and receipts. Choose one daily routine, review the
              records and use the right help when you need it.&rdquo;
            </p>
          </details>
        </Container>
      </HeroSection>
    </>
  );
};

const GuidePage: React.FC = () => {
  const { pathname } = useLocation();
  const guide = getGuide(pathname.split('/').filter(Boolean).pop() ?? '');
  return guide ? <GuideBody guide={guide} /> : <NotFoundPage />;
};

export default GuidePage;
