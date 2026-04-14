import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
    antd: {
        theme: {
            token: {
                colorPrimary: '#1F2B5D', // navy
                colorSuccess: '#8AFEA7', // mint
                colorInfo: '#0800F0',    // electric
                colorWarning: '#F7B344', // orange
                colorError: '#ff4d4f',
                fontFamily: 'Outfit, sans-serif',
                borderRadius: 12,
                colorTextBase: '#1F2B5D',
                colorBgBase: '#ffffff',
                colorLink: '#0800F0',
            },
            components: {
                Button: {
                    controlHeightLG: 48,
                    fontWeight: 600,
                    borderRadius: 12,
                    borderRadiusLG: 16,
                },
                Card: {
                    borderRadiusLG: 24,
                },
                Input: {
                    borderRadius: 12,
                    controlHeight: 40,
                },
                Select: {
                    borderRadius: 12,
                    controlHeight: 40,
                },
            },
        },
    },
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
