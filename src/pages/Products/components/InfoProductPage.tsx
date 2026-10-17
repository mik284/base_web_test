import React from 'react';

import {
  FAQ,
  FAQItem,
  faqSchema,
  FinalBanner,
  HelpButton,
  PageHero,
  Section,
  SectionHeading,
} from '@/components/Page';
import SEO from '@/components/SEO';

/**
 * Conservative information-request page for add-on products whose
 * capabilities are not yet verified (spec §9). No feature tabs, pricing or
 * "Add to your account" action until the product registry approves them.
 */
export interface InfoProduct {
  key: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  highlight: string;
  body: string;
  sections: { title: string; body: string }[];
  faqs: FAQItem[];
  finalTitle: string;
  finalHighlight: string;
}

const InfoProductPage: React.FC<{ product: InfoProduct }> = ({ product }) => {
  const ask = (variant: 'primary' | 'onDark') => (
    <HelpButton
      label={`Ask about ${product.name}`}
      query={{ product: product.key }}
      variant={variant}
    />
  );

  return (
    <>
      <SEO
        title={product.seoTitle}
        description={product.seoDescription}
        canonical={`/products/${product.key}`}
        jsonLd={faqSchema(product.faqs)}
      />

      <PageHero
        kicker={product.kicker}
        title={product.title}
        highlight={product.highlight}
        body={product.body}
        actions={ask('primary')}
      />

      <Section tone="muted">
        <div className="grid gap-12 md:grid-cols-2">
          {product.sections.map((section) => (
            <SectionHeading
              key={section.title}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
      </Section>

      <FAQ items={product.faqs} />

      <FinalBanner
        title={product.finalTitle}
        highlight={product.finalHighlight}
        actions={ask('onDark')}
      />
    </>
  );
};

export default InfoProductPage;
