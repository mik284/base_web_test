import React from 'react';

import InfoProductPage from '@/pages/Products/components/InfoProductPage';

const PesaPage: React.FC = () => (
  <InfoProductPage
    product={{
      key: 'pesa',
      name: 'Pesa',
      seoTitle: 'Pesa | Financial Records | Basepoint',
      seoDescription:
        "Explore Pesa, Basepoint's finance product. Tell us which financial records and decisions you need to improve, and we'll confirm availability and fit.",
      kicker: 'Pesa · Financial records',
      title: 'Bring your money questions',
      highlight: 'into focus.',
      body: "Explore Pesa, Basepoint's finance product. Tell us which financial records and decisions you need to improve, and we'll confirm its current availability and fit.",
      sections: [
        {
          title: 'Start with the question you need to answer.',
          body: 'Are you trying to understand money received, money spent or the records behind a business review? Describe your current process so we can discuss the relevant product scope.',
        },
        {
          title: 'Confirm the fit before changing your process.',
          body: "We'll discuss supported records, connections, access, setup and pricing. Existing accounting and reporting obligations still need the appropriate checks.",
        },
      ],
      faqs: [
        {
          q: 'Can Pesa connect to my bank or payment tools?',
          a: "Tell us which tools you use. We'll confirm any supported connections.",
        },
        {
          q: 'Is Pesa included with Duka?',
          a: 'Access and bundling depend on the approved offer. Ask us about your intended setup.',
        },
      ],
      finalTitle: 'Tell us what you need to understand',
      finalHighlight: 'about your money.',
    }}
  />
);

export default PesaPage;
