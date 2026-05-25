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
        path: '/pricing',
        redirect: '/contact',
      },
      {
        path: '/contact',
        component: './Contact',
      },
      {
        path: '/base-duka',
        component: './Products/Duka',
      },
      {
        path: '/base-pesa',
        component: './Products/Pesa',
      },
      {
        path: '/base-bandu',
        component: './Products/Bandu',
      },
      {
        path: '/base-mteja',
        component: './Products/Mteja',
      },
      {
        path: '/base-smart-reja',
        component: './Products/SmartReja',
      },
      {
        path: '/base-dala',
        component: './Products/Dala',
      },
      {
        path: '/base-custom',
        component: './Products/Custom',
      },
      {
        path: '/*',
        component: './404',
      },
    ],
  },
];
