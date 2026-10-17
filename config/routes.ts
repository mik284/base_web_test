export const routes = [
  {
    path: '/',
    component: '@/layouts/LandingLayout',
    layout: false,
    routes: [
      { path: '/', component: './Home' },
      { path: '/platform', component: './Platform' },

      // Products
      { path: '/products/duka', component: './Products/Duka' },
      {
        path: '/products/duka/hospitality',
        component: './Products/Hospitality',
      },
      { path: '/products/pesa', component: './Products/Pesa' },
      { path: '/products/mteja', component: './Products/Mteja' },
      { path: '/products/bandu', component: './Products/Bandu' },

      // Solutions
      { path: '/solutions/retailers', component: './Solutions/Retailers' },
      {
        path: '/solutions/distributors',
        component: './Solutions/Distributors',
      },
      { path: '/solutions/enterprise', component: './Solutions/Enterprise' },
      { path: '/solutions/biashara-ai', component: './Solutions/BiasharaAI' },

      // Conversion
      { path: '/start', component: './Start' },
      { path: '/demo', component: './Demo' },
      { path: '/pricing', component: './Pricing' },
      { path: '/contact', component: './Contact' },

      // Network and partnerships
      { path: '/collabs', component: './Collabs' },
      { path: '/collabs/apply', component: './CollabsApply' },
      { path: '/refer', component: './Refer' },
      { path: '/partners', component: './Partners' },
      { path: '/partners/apply', component: './PartnersApply' },

      // Basepoint Learn
      { path: '/resources', component: './Resources' },
      { path: '/resources/daily-close', component: './Resources/Guide' },
      { path: '/resources/stock-count', component: './Resources/Guide' },
      { path: '/resources/second-outlet', component: './Resources/Guide' },

      // Company and legal
      { path: '/company', component: './Company' },
      { path: '/privacy', component: './Privacy' },
      { path: '/terms', component: './Terms' },
      { path: '/cookies', component: './Cookies' },

      // Previous URLs
      { path: '/base-duka', redirect: '/products/duka' },
      { path: '/base-pesa', redirect: '/products/pesa' },
      { path: '/base-mteja', redirect: '/products/mteja' },
      { path: '/base-bandu', redirect: '/products/bandu' },
      { path: '/base-smart-reja', redirect: '/platform' },
      { path: '/base-dala', redirect: '/platform' },
      { path: '/base-custom', redirect: '/solutions/enterprise' },

      { path: '/*', component: './404' },
    ],
  },
];
