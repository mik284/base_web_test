import { Helmet } from '@umijs/max';
import React from 'react';

import { SITE } from '@/constants/site';

export interface SEOProps {
  /** Full page title, used exactly as given. */
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const DEFAULT_OG_IMAGE = `${SITE.domain}/logo.png`;

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.organisation,
  url: SITE.domain,
  logo: `${SITE.domain}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phoneHref.replace('tel:', ''),
    contactType: 'customer service',
    email: SITE.email,
  },
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex,
  jsonLd,
}) => {
  const canonicalUrl = `${SITE.domain}${canonical}`;
  const schemas = [
    organisationSchema,
    ...([] as object[]).concat(jsonLd ?? []),
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph (also used for WhatsApp previews) */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
