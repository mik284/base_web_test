import { Helmet } from '@umijs/max';
import React from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const DEFAULT_DOMAIN = 'https://basepoint.co.ke';
const DEFAULT_TITLE =
  'BasepointCloud — The Operating System for African Commerce';
const DEFAULT_DESCRIPTION =
  'Modular operating system for African trade. Manage sales, inventory, accounting, mobile-money liquidity, and payments across your business ecosystem.';
const DEFAULT_KEYWORDS =
  'BasepointCloud, Base Duka, Base Pesa, Base Smart Reja, Base Bandu, Base Mteja, Base Dala, Mobile Money POS, Inventory Financing Kenya, POS System Kenya';
const DEFAULT_OG_IMAGE = `${DEFAULT_DOMAIN}/logo.png`;

const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
}) => {
  const siteTitle = title.includes('BasepointCloud')
    ? title
    : `${title} | BasepointCloud`;
  const canonicalUrl = canonical
    ? `${DEFAULT_DOMAIN}${canonical}`
    : DEFAULT_DOMAIN;

  // Global default Organization schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BasepointCloud',
    url: DEFAULT_DOMAIN,
    logo: `${DEFAULT_DOMAIN}/logo.png`,
    description: DEFAULT_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CMS Africa, Chania Avenue, Kilimani',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254746665877',
      contactType: 'customer service',
      email: 'info@basepoint.co.ke',
    },
  };

  const schemasToRender = jsonLd
    ? Array.isArray(jsonLd)
      ? [defaultSchema, ...jsonLd]
      : [defaultSchema, jsonLd]
    : [defaultSchema];

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:site_name" content="BasepointCloud" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemasToRender.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
