import React from 'react';

import {
  ButtonLink,
  CardGrid,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

/*
 * Team names, roles and portraits are published only once verified (spec §20).
 * The legal entity line is pending Legal confirmation and is not shown.
 */

const CompanyPage: React.FC = () => (
  <>
    <SEO
      title="About Basepoint Cloud Technologies"
      description="Basepoint Cloud Technologies is building Base: business software and practical support around the needs of everyday operations."
      canonical="/company"
    />

    <PageHero
      title="We're building Base to make"
      highlight="business activity clearer."
      body="Basepoint Cloud Technologies is building business software and practical support around the needs of everyday operations. Our starting point is simple: clearer records make it easier to ask better questions and take the next step."
    />

    <Section tone="muted">
      <SectionHeading title="Our standard is practical." />
      <CardGrid
        columns={4}
        items={[
          {
            title: 'Speed.',
            body: 'Move a useful task forward with a clear next step.',
          },
          {
            title: 'Efficiency.',
            body: 'Focus on the work that matters to the business.',
          },
          {
            title: 'Frugality.',
            body: 'Make responsible use of time, money and tools.',
          },
          {
            title: 'Accountability.',
            body: 'Be clear about commitments and review what happened.',
          },
        ]}
      />
    </Section>

    <Section narrow>
      <SectionHeading
        title="Tools, knowledge and relationships."
        body="Base is the product ecosystem. Basepoint Learn provides practical guidance. Base Collabs brings experts, advisors and resellers into the network. Biashara AI represents the commercial intelligence concepts we are developing."
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <ButtonLink to="/platform">Explore Base</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">
          Contact Basepoint
        </ButtonLink>
      </div>
    </Section>
  </>
);

export default CompanyPage;
