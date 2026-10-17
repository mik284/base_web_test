import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  title: 'Basepoint | Sales, Stock and Business Clarity',
  metas: [
    {
      name: 'description',
      content:
        'Start with Duka for sales, stock and receipts. Explore Base products, practical guides and setup support for your business.',
    },
    { property: 'og:site_name', content: 'Basepoint' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://basepoint.co.ke/logo.png' },
    { name: 'twitter:card', content: 'summary' },
  ],
  headScripts: [
    // Analytics storage is denied until the visitor accepts analytics cookies
    // (see src/components/CookieBanner).
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
try {
  if (localStorage.getItem('bp_cookie_consent') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', 'G-BHYMHYB41H');`,
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-BHYMHYB41H',
      async: true,
    },
  ],
  define: {
    // Endpoint that receives website form submissions (CRM intake).
    'process.env.FORMS_ENDPOINT': process.env.FORMS_ENDPOINT || '',
  },
  antd: {
    theme: {
      token: {
        colorPrimary: '#1F2B5D', // navy
        colorSuccess: '#8AFEA7', // mint
        colorInfo: '#0800F0', // electric
        colorWarning: '#F7B344', // orange
        colorError: '#ff4d4f',
        fontFamily: "Outfit, system-ui, -apple-system, 'Segoe UI', sans-serif",
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
    title: 'Basepoint',
    locale: 'en-US',
  },
  links: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap',
    },
  ],
  routes: routes,
  npmClient: 'pnpm',
  tailwindcss: {},
});
