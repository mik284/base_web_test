import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  title: 'BasepointCloud — The Operating System for African Commerce',
  metas: [
    {
      name: 'description',
      content:
        'Modular operating system for African trade. Manage sales, inventory, accounting, mobile-money liquidity, and payments across your business ecosystem.',
    },
    {
      name: 'keywords',
      content:
        'BasepointCloud, Base Duka, Base Pesa, Base Smart Reja, Base Bandu, Base Mteja, Base Dala, Mobile Money POS, Inventory Financing Kenya, POS System Kenya',
    },
    { property: 'og:site_name', content: 'BasepointCloud' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://basepoint.co.ke/logo.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  headScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-BHYMHYB41H',
      async: 'true',
    },
    `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-BHYMHYB41H');`,
  ],
  antd: {
    theme: {
      token: {
        colorPrimary: '#1F2B5D', // navy
        colorSuccess: '#8AFEA7', // mint
        colorInfo: '#0800F0', // electric
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
        Typography: {
          fontSizeHeading1: 61,
          lineHeightHeading1: 1.05,
          fontSizeHeading2: 49,
          lineHeightHeading2: 1.1,
          fontSizeHeading3: 39,
          lineHeightHeading3: 1.1,
          fontSizeHeading4: 31,
          lineHeightHeading4: 1.2,
          fontSizeHeading5: 25,
          lineHeightHeading5: 1.3,
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
