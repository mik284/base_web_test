import React from 'react';

import InfoProductPage from '@/pages/Products/components/InfoProductPage';

const MtejaPage: React.FC = () => (
  <InfoProductPage
    product={{
      key: 'mteja',
      name: 'Mteja',
      seoTitle: 'Mteja | Customer Relationships | Basepoint',
      seoDescription:
        "Explore Mteja, Basepoint's customer product. Tell us how you keep customer records and manage follow-up, and we'll confirm availability and fit.",
      kicker: 'Mteja · Customer relationships',
      title: 'Give customer relationships',
      highlight: 'a clearer place in your business.',
      body: "Explore Mteja, Basepoint's customer product. Tell us how you keep customer records and manage follow-up, and we'll confirm its current availability and fit.",
      sections: [
        {
          title: 'Start with the relationship you want to improve.',
          body: "Describe how you recognise returning customers, keep contact information and decide who needs a follow-up. We'll discuss the relevant product scope.",
        },
        {
          title: 'Use customer information with care.',
          body: "Customer records and outreach require the right permissions. We'll confirm the supported workflow and what you need to prepare.",
        },
      ],
      faqs: [
        {
          q: 'Does Mteja send WhatsApp campaigns?',
          a: "We'll confirm the supported channels and messaging requirements.",
        },
        {
          q: 'Is loyalty included?',
          a: 'Ask us to confirm the available features for your intended use.',
        },
      ],
      finalTitle: 'Tell us how you want to',
      finalHighlight: 'serve your customers better.',
    }}
  />
);

export default MtejaPage;
