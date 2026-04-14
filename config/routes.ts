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
                path: '/*',
                component: './404',
            }
        ]
    }
];  