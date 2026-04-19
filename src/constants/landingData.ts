/**
 * Static data for the BasepointCloud landing page.
 * Keeping data separate from UI makes it easy to update content without touching components.
 */

import {
  AppstoreOutlined,
  CreditCardOutlined,
  RocketOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import React, { ReactNode } from 'react';

export interface ProductLink {
  label: string;
  href: string;
  desc: string;
  icon: ReactNode;
}

export const PRODUCT_LINKS: ProductLink[] = [
  {
    label: 'Duka',
    href: '/duka',
    desc: 'Digitize your ledger book and track inventory.',
    icon: React.createElement(AppstoreOutlined),
  },
  {
    label: 'Pesa',
    href: '/pesa',
    desc: 'Seamless payments and auto-reconciliation.',
    icon: React.createElement(CreditCardOutlined),
  },
  {
    label: 'Bandu',
    href: '/bandu',
    desc: 'Fulfill orders with advanced logistics.',
    icon: React.createElement(RocketOutlined),
  },
  {
    label: 'Mteja',
    href: '/mteja',
    desc: 'Grow loyalty with our all-in-one CRM.',
    icon: React.createElement(TeamOutlined),
  },
  {
    label: 'Custom',
    href: '/custom',
    desc: 'Tailor-made solutions to fit your workflows.',
    icon: React.createElement(ToolOutlined),
  },
];

export interface NavLink {
  label: string;
  href: string;
  isDropdown?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', href: '#', isDropdown: true },
  { label: 'Features', href: '/#features' },
  { label: 'About', href: '/#usecases' },
  { label: 'Pricing', href: '/pricing' },
];

// ─── Features ────────────────────────────────────────────────────────────────
export interface Feature {
  id: string;
  title: string;
  description: string;
  iconKey: string;
  iconBg: string; // rgba CSS value
  iconColor: string; // hex CSS value
}

export const FEATURES: Feature[] = [
  {
    id: 'dashboard',
    title: 'Unified Dashboard',
    description:
      'Control every aspect of your operations from a single pane of glass. Stop switching between 5 different apps.',
    iconKey: 'Appstore',
    iconBg: 'rgba(138,254,167,0.2)',
    iconColor: '#8AFEA7',
  },
  {
    id: 'analytics',
    title: 'Real-time Analytics',
    description:
      'Make decisions based on facts. View live sales data, stock levels, and staff performance instantly.',
    iconKey: 'Rise',
    iconBg: 'rgba(247,179,68,0.2)',
    iconColor: '#F7B344',
  },
  {
    id: 'multitenant',
    title: 'Multi-tenant Architecture',
    description:
      'Manage multiple branches, warehouses, or entirely different businesses under one master account securely.',
    iconKey: 'Bank',
    iconBg: 'rgba(128,228,241,0.2)',
    iconColor: '#80E4F1',
  },
  {
    id: 'security',
    title: 'Secure Infrastructure',
    description:
      'Bank-grade encryption, automated backups, and 99.9% uptime SLA ensures your data is always safe.',
    iconKey: 'Safety',
    iconBg: 'rgba(255,231,0,0.2)',
    iconColor: '#FFE700',
  },
];

// ─── Use Cases ───────────────────────────────────────────────────────────────
export interface UseCase {
  id: string;
  title: string;
  description: string;
  iconKey: string;
  iconBg: string; // hex colour for the icon circle background
  hoverBorder: string; // Tailwind class for hover border colour
}

export const USE_CASES: UseCase[] = [
  {
    id: 'sme',
    title: 'SME Duka Owners',
    description:
      'Digitize your ledger book. Track inventory, record daily sales accurately, and print physical or digital receipts instantly from your phone.',
    iconKey: 'Shop',
    iconBg: '#8AFEA7',
    hoverBorder: 'hover:border-mint/50',
  },
  {
    id: 'retail',
    title: 'Retail Chains',
    description:
      'Sync inventory across multiple physical locations in real-time. Transfer stock easily and get consolidated reports for the whole group.',
    iconKey: 'Bank',
    iconBg: '#0800F0',
    hoverBorder: 'hover:border-electric/50',
  },
  {
    id: 'online',
    title: 'Online Businesses',
    description:
      'Connect your Instagram sales to your central inventory. Create a professional web storefront (Duka1) and process payments securely online.',
    iconKey: 'Global',
    iconBg: '#F7B344',
    hoverBorder: 'hover:border-orange/50',
  },
  {
    id: 'wholesale',
    title: 'Wholesale & Enterprise',
    description:
      'Manage complex pricing tiers, generate pro-forma invoices, handle bulk orders, and utilize our robust API to connect to your existing ERP.',
    iconKey: 'Wallet',
    iconBg: '#1F2B5D',
    hoverBorder: 'hover:border-navy/50',
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '10k+', label: 'Active Businesses' },
  { value: '5M+', label: 'Transactions Processed' },
  { value: '99.9%', label: 'Uptime Guarantee' },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarTextColor: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'njeri',
    quote:
      '"Basepoint completely changed how we run our boutique. We used to lose track of inventory constantly. Now, I can see exactly what\'s in stock from my phone while at home."',
    name: 'Njeri Kariuki',
    role: 'Owner, Style Hub Nairobi',
    initials: 'NJ',
    avatarBg: '#80E4F1',
    avatarTextColor: '#1F2B5D',
  },
  {
    id: 'david',
    quote:
      '"The M-Pesa integration in Duka is flawless. Reconciliation used to take us hours every evening. Now it\'s done automatically. Highly recommended for any growing retail chain."',
    name: 'David Ochieng',
    role: 'Manager, TechMart Ltd',
    initials: 'DO',
    avatarBg: '#F7B344',
    avatarTextColor: '#ffffff',
  },
  {
    id: 'fatuma',
    quote:
      '"Setting up Duka1 was incredibly easy. We started selling online within a day, and the fact that it links directly to our physical store inventory is just magic."',
    name: 'Fatuma Wanjiku',
    role: 'Founder, Fresh Organic',
    initials: 'FW',
    avatarBg: '#8AFEA7',
    avatarTextColor: '#1F2B5D',
  },
];

// ─── Footer Links ────────────────────────────────────────────────────────────
export const FOOTER_PRODUCTS = [
  { label: 'Duka', href: '/duka' },
  { label: 'Bandu', href: '/bandu' },
  { label: 'Pesa', href: '/pesa' },
  { label: 'Mteja', href: '/mteja' },
  { label: 'Custom Solutions', href: '/custom' },
];

export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Partners', href: '/partners' },
];
