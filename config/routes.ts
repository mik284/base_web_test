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
        component: './Pricing',
      },
      {
        path: '/duka',
        component: './Products/Duka',
      },
      {
        path: '/pesa',
        component: './Products/Pesa',
      },
      {
        path: '/bandu',
        component: './Products/Bandu',
      },
      {
        path: '/mteja',
        component: './Products/Mteja',
      },
      {
        path: '/custom',
        component: './Products/Custom',
      },
      {
        path: '/*',
        component: './404',
      },
    ],
  },
];
