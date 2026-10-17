import React from 'react';

import InfoProductPage from '@/pages/Products/components/InfoProductPage';

const BanduPage: React.FC = () => (
  <InfoProductPage
    product={{
      key: 'bandu',
      name: 'Bandu',
      seoTitle: 'Bandu | People Administration | Basepoint',
      seoDescription:
        "Explore Bandu, Basepoint's people product. Tell us what your team needs to organise, and we'll confirm its current availability and fit.",
      kicker: 'Bandu · People administration',
      title: 'Make the work of managing people',
      highlight: 'clearer.',
      body: "Explore Bandu, Basepoint's people product. Tell us what your team needs to organise, and we'll confirm its current availability and fit.",
      sections: [
        {
          title: "Start with your team's everyday administration.",
          body: "Describe how you maintain staff records and coordinate team responsibilities. We'll discuss the relevant product scope and setup.",
        },
        {
          title: 'Confirm access and responsibilities.',
          body: "People information needs appropriate access controls. We'll confirm the supported roles, records and permissions before setup.",
        },
      ],
      faqs: [
        {
          q: 'Does Bandu include payroll or shift tracking?',
          a: "We'll confirm the available functions for your intended setup.",
        },
        {
          q: 'Can each staff member have separate access?',
          a: "We'll confirm the supported roles and account limits.",
        },
      ],
      finalTitle: 'Tell us what your team',
      finalHighlight: 'needs to organise.',
    }}
  />
);

export default BanduPage;
