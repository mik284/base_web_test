/**
 * Site-wide facts, publication flags and the product status registry.
 *
 * Flags follow the "safe defaults" in Basepoint_Website_Specification.md §25.
 * Only switch a flag on once its owner (Product, Finance, Legal) has confirmed it.
 */

export const SITE = {
  name: 'Basepoint',
  organisation: 'Basepoint Cloud Technologies',
  domain: 'https://basepoint.co.ke',
  email: 'info@basepoint.co.ke',
  communityEmail: 'community@basepoint.co.ke',
  phone: '+254 183 240756',
  phoneHref: 'tel:+254183240756',
  whatsappHref: 'https://wa.me/254183240756',
  address: ['CMS Africa', 'Chania Avenue, Kilimani', 'Nairobi'],
  docsUrl: 'https://basepoint.mintlify.app',
  masterPromise: 'Know what matters. Before it matters.',
  tagline: 'Achieve More™',
};

export const FLAGS = {
  /** Direct Duka account creation works end to end (CTO/Product). */
  dukaProvisioning: false,
  /** A free Duka offer has an approved offer record (Finance/Product). */
  dukaFreeOffer: false,
  /** Referral eligibility, attribution and terms are operational (Finance/Legal). */
  referralsOpen: false,
};

export const LINKS = {
  /** Returning-user login. Left empty until a verified login URL exists. */
  login: '',
  /** Duka account-creation URL used when `FLAGS.dukaProvisioning` is on. */
  dukaSignup: '',
};

export type ProductStatus =
  | 'available'
  | 'pilot'
  | 'early_access'
  | 'in_development'
  | 'unverified';

export const STATUS_LABEL: Record<ProductStatus, string> = {
  available: 'Available',
  pilot: 'Pilot',
  early_access: 'Early access',
  in_development: 'In development',
  unverified: 'Ask about availability',
};

export interface MenuEntry {
  name: string;
  descriptor: string;
  href: string;
  status?: ProductStatus;
}

export const PRODUCTS: MenuEntry[] = [
  {
    name: 'Duka',
    descriptor: 'Sales, stock and receipts',
    href: '/products/duka',
    status: 'available',
  },
  {
    name: 'Pesa',
    descriptor: 'Financial records',
    href: '/products/pesa',
    status: 'unverified',
  },
  {
    name: 'Mteja',
    descriptor: 'Customer relationships',
    href: '/products/mteja',
    status: 'unverified',
  },
  {
    name: 'Bandu',
    descriptor: 'People administration',
    href: '/products/bandu',
    status: 'unverified',
  },
];

export const SOLUTIONS: MenuEntry[] = [
  {
    name: 'Retailers',
    descriptor: 'Sales, stock and the daily review',
    href: '/solutions/retailers',
  },
  {
    name: 'Distributors',
    descriptor: 'Visibility across your distribution operation',
    href: '/solutions/distributors',
  },
  {
    name: 'Growing operations',
    descriptor: 'More locations, people and tools',
    href: '/solutions/enterprise',
  },
  {
    name: 'Hospitality',
    descriptor: 'Register early-access interest',
    href: '/products/duka/hospitality',
    status: 'early_access',
  },
  {
    name: 'Biashara AI',
    descriptor: 'Commercial decision support',
    href: '/solutions/biashara-ai',
    status: 'in_development',
  },
];

export const PARTNER_MENU: MenuEntry[] = [
  {
    name: 'Base Collabs',
    descriptor: 'Experts and resellers',
    href: '/collabs',
  },
  ...(FLAGS.referralsOpen
    ? [
        {
          name: 'Refer a business',
          descriptor: 'Introduce a business through your referral link',
          href: '/refer',
        },
      ]
    : []),
  {
    name: 'Strategic partnerships',
    descriptor: 'Distribution, support and product partnerships',
    href: '/partners',
  },
];

export const BUSINESS_TYPES = [
  'Retail shop',
  'Wholesale or distribution',
  'Manufacturing',
  'Hospitality',
  'Services',
  'Other',
];

/** The Duka call to action that matches the current provisioning and offer state (§5.1). */
export const dukaCta = (): { label: string; href: string } => {
  if (!FLAGS.dukaProvisioning) {
    return { label: 'Request Duka access', href: '/start' };
  }
  if (FLAGS.dukaFreeOffer) {
    return { label: 'Start free with Duka', href: '/start' };
  }
  return { label: 'Start with Duka', href: '/start' };
};
