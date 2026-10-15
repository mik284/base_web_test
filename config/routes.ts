export const routes = [
  {
    path: '/',
    component: '@/layouts/LandingLayout',
    layout: false,
    routes: [
      {
        path: '/',
        component: './Landing',
      },
      {
        path: '/platform',
        component: './Platform',
      },
      {
        path: '/products/duka',
        component: './Products/Duka',
      },
      {
        path: '/products/pesa',
        component: './Products/Pesa',
      },
      {
        path: '/products/mteja',
        component: './Products/Mteja',
      },
      {
        path: '/products/bandu',
        component: './Products/Bandu',
      },
      {
        path: '/products/duka/hospitality',
        component: './Products/Duka/Hospitality',
      },
      {
        path: '/solutions/retailers',
        component: './Solutions/Retailers',
      },
      {
        path: '/solutions/distributors',
        component: './Solutions/Distributors',
      },
      {
        path: '/solutions/enterprise',
        component: './Solutions/Enterprise',
      },
      {
        path: '/solutions/biashara-ai',
        component: './Solutions/BiasharaAI',
      },
      {
        path: '/start',
        component: './Start',
      },
      {
        path: '/demo',
        component: './Demo',
      },
      {
        path: '/pricing',
        component: './Pricing',
      },
      {
        path: '/collabs',
        component: './Collabs',
      },
      {
        path: '/collabs/apply',
        component: './Collabs/Apply',
      },
      {
        path: '/refer',
        component: './Refer',
      },
      {
        path: '/refer/terms',
        component: './Refer/Terms',
      },
      {
        path: '/partners',
        component: './Partners',
      },
      {
        path: '/partners/apply',
        component: './Partners/Apply',
      },
      {
        path: '/resources',
        component: './Resources',
      },
      {
        path: '/resources/daily-close',
        component: './Resources/Guides/DailyClose',
      },
      {
        path: '/resources/stock-count',
        component: './Resources/Guides/StockCount',
      },
      {
        path: '/resources/second-outlet',
        component: './Resources/Guides/SecondOutlet',
      },
      {
        path: '/company',
        component: './Company',
      },
      {
        path: '/contact',
        component: './Contact',
      },
      {
        path: '/privacy',
        component: './Privacy',
      },
      {
        path: '/terms',
        component: './Terms',
      },

      // Legacy backwards-compatible redirects
      {
        path: '/base-duka',
        redirect: '/products/duka',
      },
      {
        path: '/base-pesa',
        redirect: '/products/pesa',
      },
      {
        path: '/base-bandu',
        redirect: '/products/bandu',
      },
      {
        path: '/base-mteja',
        redirect: '/products/mteja',
      },
      {
        path: '/base-smart-reja',
        redirect: '/solutions/distributors',
      },
      {
        path: '/base-dala',
        redirect: '/platform',
      },
      {
        path: '/base-custom',
        redirect: '/platform',
      },
      {
        path: '/custom',
        redirect: '/platform',
      },
      {
        path: '/*',
        component: './404',
      },
    ],
  },
];
