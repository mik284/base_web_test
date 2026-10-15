/**
 * Static data for Basepoint website.
 * Grounded in Basepoint Website Specification (10 October 2026).
 */

import {
  AppstoreOutlined,
  BookOutlined,
  BranchesOutlined,
  CoffeeOutlined,
  DeploymentUnitOutlined,
  DollarOutlined,
  FundProjectionScreenOutlined,
  GlobalOutlined,
  RobotOutlined,
  ShopOutlined,
  ShoppingOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import React, { ReactNode } from 'react';

export interface ProductLink {
  label: string;
  href: string;
  desc: string;
  status?: string;
  icon: ReactNode;
}

export const PRODUCT_LINKS: ProductLink[] = [
  {
    label: 'Duka',
    href: '/products/duka',
    desc: 'Sales, stock and receipts for everyday retail.',
    status: 'Available',
    icon: React.createElement(ShopOutlined),
  },
  {
    label: 'Pesa',
    href: '/products/pesa',
    desc: 'Money and financial records.',
    status: 'In development',
    icon: React.createElement(DollarOutlined),
  },
  {
    label: 'Mteja',
    href: '/products/mteja',
    desc: 'Customer records and relationships.',
    status: 'In development',
    icon: React.createElement(TeamOutlined),
  },
  {
    label: 'Bandu',
    href: '/products/bandu',
    desc: 'People and team administration.',
    status: 'In development',
    icon: React.createElement(UsergroupAddOutlined),
  },
  {
    label: 'Base Platform',
    href: '/platform',
    desc: 'Business software for clearer daily operations.',
    status: 'Ecosystem',
    icon: React.createElement(AppstoreOutlined),
  },
];

export const SOLUTION_LINKS: ProductLink[] = [
  {
    label: 'Retailers',
    href: '/solutions/retailers',
    desc: 'Clear view of the shop, from first sale to daily review.',
    icon: React.createElement(ShoppingOutlined),
  },
  {
    label: 'Distributors',
    href: '/solutions/distributors',
    desc: 'Commercial questions across distribution networks.',
    icon: React.createElement(BranchesOutlined),
  },
  {
    label: 'Growing Operations',
    href: '/solutions/enterprise',
    desc: 'Coordinating multiple locations, people, and tools.',
    icon: React.createElement(DeploymentUnitOutlined),
  },
  {
    label: 'Hospitality',
    href: '/products/duka/hospitality',
    desc: 'Shape Duka for restaurants, cafés, bars and hotels.',
    status: 'Early access',
    icon: React.createElement(CoffeeOutlined),
  },
  {
    label: 'Biashara AI',
    href: '/solutions/biashara-ai',
    desc: 'From business records to better commercial decisions.',
    status: 'In development',
    icon: React.createElement(RobotOutlined),
  },
];

export const PARTNER_LINKS: ProductLink[] = [
  {
    label: 'Base Collabs',
    href: '/collabs',
    desc: 'Experts, advisors and resellers helping businesses adopt Base.',
    icon: React.createElement(TeamOutlined),
  },
  {
    label: 'Refer a Business',
    href: '/refer',
    desc: 'Introduce Basepoint with attributable links and clear terms.',
    icon: React.createElement(GlobalOutlined),
  },
  {
    label: 'Strategic Partnerships',
    href: '/partners',
    desc: 'Distribution, business support, and workflow collaboration.',
    icon: React.createElement(FundProjectionScreenOutlined),
  },
];

export const LEARN_LINKS: ProductLink[] = [
  {
    label: 'Basepoint Learn',
    href: '/resources',
    desc: 'Practical guides and operating routines.',
    icon: React.createElement(BookOutlined),
  },
  {
    label: 'Daily Close Guide',
    href: '/resources/daily-close',
    desc: 'A simple daily review for your shop.',
    icon: React.createElement(ShopOutlined),
  },
  {
    label: 'Stock Count Guide',
    href: '/resources/stock-count',
    desc: 'Make a physical stock count useful.',
    icon: React.createElement(AppstoreOutlined),
  },
  {
    label: 'Second Outlet Guide',
    href: '/resources/second-outlet',
    desc: 'Questions to answer before opening a second outlet.',
    icon: React.createElement(BranchesOutlined),
  },
];

export interface NavLink {
  label: string;
  href: string;
  dropdownType?: 'products' | 'solutions' | 'partners' | 'learn';
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', href: '#', dropdownType: 'products' },
  { label: 'Solutions', href: '#', dropdownType: 'solutions' },
  { label: 'Learn', href: '/resources', dropdownType: 'learn' },
  { label: 'Partners', href: '#', dropdownType: 'partners' },
  { label: 'Pricing', href: '/pricing' },
];

// ─── Homepage Content Blocks (Section 6) ─────────────────────────────────────

export const HOMEPAGE_PROBLEM_CARDS = [
  {
    id: 'record-sale',
    title: 'Record the sale.',
    description: 'Keep a record of what was sold.',
    iconBg: 'rgba(138,254,167,0.2)',
    iconColor: '#1F2B5D',
  },
  {
    id: 'track-stock',
    title: 'Track the stock.',
    description:
      'Review your recorded stock and compare it with what is on the shelf.',
    iconBg: 'rgba(247,179,68,0.2)',
    iconColor: '#F7B344',
  },
  {
    id: 'issue-receipt',
    title: 'Issue the receipt.',
    description: 'Give customers a receipt for their purchase.',
    iconBg: 'rgba(128,228,241,0.2)',
    iconColor: '#0800F0',
  },
];

export const HOMEPAGE_ROUTINE_STEPS = [
  {
    step: '1',
    title: 'See where you stand.',
    description: 'Review the records you have and check what needs attention.',
  },
  {
    step: '2',
    title: 'Choose one priority.',
    description:
      'Focus on a practical question: a stock gap, missing records or a setup task.',
  },
  {
    step: '3',
    title: 'Take the next step.',
    description:
      'Use your records and a relevant Learn guide to work through it.',
  },
  {
    step: '4',
    title: 'Review what changed.',
    description:
      'Return to the records and decide what to keep doing or improve.',
  },
];

export const HOMEPAGE_EXPANSION_CARDS = [
  {
    name: 'Duka',
    role: 'Sales and stock',
    description: 'Record sales, track stock and issue receipts.',
    status: 'Available',
    href: '/products/duka',
  },
  {
    name: 'Pesa',
    role: 'Financial records',
    description: 'Explore Pesa’s approach to money and financial records.',
    status: 'In development',
    href: '/products/pesa',
  },
  {
    name: 'Mteja',
    role: 'Customer relationships',
    description:
      'Explore Mteja’s approach to customer records and relationships.',
    status: 'In development',
    href: '/products/mteja',
  },
  {
    name: 'Bandu',
    role: 'People administration',
    description: 'Explore Bandu’s approach to people and team administration.',
    status: 'In development',
    href: '/products/bandu',
  },
];

export const HOMEPAGE_FAQS = [
  {
    question: 'Where should I begin?',
    answer:
      'Start with Duka if you need sales, stock and receipts for a retail business. If your needs are more complex, tell us about your setup.',
  },
  {
    question: 'Can I get help setting up?',
    answer:
      'You can request help. We’ll confirm the available support, scope and any fees before work begins.',
  },
  {
    question: 'Is Biashara AI available?',
    answer:
      'No. It is in development. You can join the waitlist for updates and potential opportunities to contribute to its development.',
  },
  {
    question: 'Does Base guarantee business growth?',
    answer:
      'No. Base provides tools and information. Business outcomes depend on many factors, including the quality of your records and the decisions you make.',
  },
];

// ─── Footer Links ────────────────────────────────────────────────────────────

export const FOOTER_PRODUCTS = [
  { label: 'Duka', href: '/products/duka' },
  { label: 'Pesa', href: '/products/pesa' },
  { label: 'Mteja', href: '/products/mteja' },
  { label: 'Bandu', href: '/products/bandu' },
  { label: 'Base Platform', href: '/platform' },
];

export const FOOTER_SOLUTIONS = [
  { label: 'Retailers', href: '/solutions/retailers' },
  { label: 'Distributors', href: '/solutions/distributors' },
  { label: 'Growing Operations', href: '/solutions/enterprise' },
  { label: 'Hospitality (Early access)', href: '/products/duka/hospitality' },
  { label: 'Biashara AI (In development)', href: '/solutions/biashara-ai' },
];

export const FOOTER_LEARN = [
  { label: 'Basepoint Learn', href: '/resources' },
  { label: 'Daily Review Guide', href: '/resources/daily-close' },
  { label: 'Stock Count Guide', href: '/resources/stock-count' },
  { label: 'Second Outlet Guide', href: '/resources/second-outlet' },
];

export const FOOTER_PARTNERS = [
  { label: 'Base Collabs', href: '/collabs' },
  { label: 'Apply as a Collab', href: '/collabs/apply' },
  { label: 'Refer a Business', href: '/refer' },
  { label: 'Referral Terms', href: '/refer/terms' },
  { label: 'Strategic Partnerships', href: '/partners' },
];

export const FOOTER_COMPANY = [
  { label: 'Company Overview', href: '/company' },
  { label: 'Contact & Support', href: '/contact' },
  {
    label: 'Product Documentation',
    href: 'https://basepoint.mintlify.app',
    isExternal: true,
  },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];
