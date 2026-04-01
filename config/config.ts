import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'BasepointCloud',
        locale: 'en-US',
    },
    links: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap',
        },
    ],
    routes: routes,
    npmClient: 'pnpm',
    tailwindcss: {},
});
