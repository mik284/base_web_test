import { Link } from '@umijs/max';
import React, { useState } from 'react';

import { PageHero, Section } from '@/components/Page';
import SEO from '@/components/SEO';
import {
  CATEGORY_DESCRIPTIONS,
  GUIDES,
  LearnCategory,
} from '@/constants/guides';

// Only offer filters that have at least one guide; never show empty results.
const CATEGORIES = (
  Object.keys(CATEGORY_DESCRIPTIONS) as LearnCategory[]
).filter((category) =>
  GUIDES.some((guide) => guide.categories.includes(category)),
);

const ResourcesPage: React.FC = () => {
  const [category, setCategory] = useState<LearnCategory | null>(null);
  const guides = category
    ? GUIDES.filter((guide) => guide.categories.includes(category))
    : GUIDES;

  const filterClass = (active: boolean) =>
    `min-h-[44px] px-4 rounded-full border-2 border-solid font-semibold text-sm cursor-pointer font-sans ${
      active
        ? 'bg-navy border-navy text-white'
        : 'bg-white border-navy/20 text-navy hover:border-navy'
    }`;

  return (
    <>
      <SEO
        title="Basepoint Learn | Practical Business Guides"
        description="Practical guides for daily reviews, stock counts and preparing for another outlet. Choose one useful action and review what changed."
        canonical="/resources"
      />

      <PageHero
        kicker="Basepoint Learn"
        title="Practical habits for"
        highlight="a clearer business."
        body="Use simple guides to review the day, count stock and prepare for your next stage. Choose one useful action, then check what changed."
      />

      <Section tone="muted">
        <h2 className="m-0 text-3xl lg:text-4xl font-bold tracking-[-0.02em]">
          Start with a question from your working day.
        </h2>
        <div
          role="group"
          aria-label="Filter guides by topic"
          className="mt-8 flex flex-wrap gap-3"
        >
          <button
            type="button"
            aria-pressed={category === null}
            onClick={() => setCategory(null)}
            className={filterClass(category === null)}
          >
            All guides
          </button>
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={filterClass(category === item)}
            >
              {item}
            </button>
          ))}
        </div>
        {category && (
          <p className="m-0 mt-4 text-navy/80">
            {category}: {CATEGORY_DESCRIPTIONS[category]}
          </p>
        )}

        <ul className="list-none m-0 p-0 mt-10 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <li
              key={guide.slug}
              className="flex flex-col rounded-[2rem] bg-white border border-solid border-surfaceAlt p-8 transition-all hover:shadow-soft"
            >
              <p className="m-0 mb-3 text-xs font-semibold uppercase tracking-widest text-navy/80">
                {guide.categories.join(' · ')}
              </p>
              <h3 className="m-0 text-lg font-bold">
                <Link
                  to={`/resources/${guide.slug}`}
                  className="no-underline text-navy hover:underline"
                >
                  {guide.title}
                </Link>
              </h3>
              <p className="m-0 mt-3 leading-relaxed text-navy/80">
                {guide.summary}
              </p>
              <Link
                to={`/resources/${guide.slug}`}
                className="mt-auto pt-6 font-semibold text-electric no-underline hover:underline"
                aria-label={`Read: ${guide.title}`}
              >
                Read the guide
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default ResourcesPage;
