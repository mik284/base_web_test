/**
 * Detailed pricing data for Base Suite products.
 * Includes tiers, features, combinations, and industry recommendations.
 */

export interface PricingTier {
  name: string;
  price: number;
  priceDescriptor: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ProductPricing {
  id: string;
  name: string;
  shortDescription: string;
  monthlyPrice: number;
  annualPrice: number;
  freeTier?: string;
  tiers: PricingTier[];
}

export const PRODUCT_PRICING: ProductPricing[] = [
  {
    id: 'duka',
    name: 'Duka by Base',
    shortDescription: 'Modern POS, inventory, and sales management',
    monthlyPrice: 2499,
    annualPrice: 24990,
    freeTier: '3 months trial',
    tiers: [
      {
        name: 'Free',
        price: 0,
        priceDescriptor: 'for 3 months',
        features: [
          'Up to KES 50k sales/month',
          'Up to 100 products',
          'Basic Order Management',
          'Table Management (10 tables)',
          'Basic Shift Management',
          'Email Support',
        ],
        ctaText: 'Start Free Trial',
      },
      {
        name: 'Basic',
        price: 2499,
        priceDescriptor: 'per month',
        features: [
          'Unlimited Sales',
          'Up to 500 products',
          'Advanced Order Management',
          'Custom Receipt Printing',
          '1 Location Support',
          '24/7 Email Support',
        ],
        ctaText: 'Get Basic',
      },
      {
        name: 'Professional',
        price: 3999,
        priceDescriptor: 'per month',
        isPopular: true,
        features: [
          'Unlimited Products/Sales',
          'Real-time Inventory Tracking',
          'Multi-location (3 locations)',
          'Delivery Management',
          'Custom Reporting',
          'Phone & Email Support',
        ],
        ctaText: 'Go Professional',
      },
      {
        name: 'Enterprise',
        price: 5999,
        priceDescriptor: 'per month',
        features: [
          'Unlimited Everything',
          'Multi-location (Unlimited)',
          'REST API Access',
          'AI-powered Analytics',
          'Priority Support (4hr response)',
          'Dedicated Account Manager',
        ],
        ctaText: 'Contact Enterprise',
      },
    ],
  },
  {
    id: 'pesa',
    name: 'Pesa by Base',
    shortDescription: 'Automated accounting and financial management',
    monthlyPrice: 1999,
    annualPrice: 19990,
    freeTier: '14-day trial',
    tiers: [
      {
        name: 'Basic',
        price: 1999,
        priceDescriptor: 'per month',
        features: [
          'Double-Entry Bookkeeping',
          'Invoices & Bills (Basic)',
          'Manual Expense Tracking',
          'P&L, Balance Sheet Reports',
          'VAT Reports (Basic)',
          'Up to 3 Users',
        ],
        ctaText: 'Start Trial',
      },
      {
        name: 'Professional',
        price: 3499,
        priceDescriptor: 'per month',
        isPopular: true,
        features: [
          'Auto Journal Entries',
          'Advanced Financial Reports',
          'Bank Statement Auto-import',
          'Auto-categorize Expenses',
          'Cash Flow Management',
          'Up to 10 Users',
        ],
        ctaText: 'Get Pro',
      },
      {
        name: 'Enterprise',
        price: 4999,
        priceDescriptor: 'per month',
        features: [
          'Full KRA Compliance',
          'AI-powered Reconciliation',
          'Real-time Bank Syncing',
          'Advanced Approval Workflows',
          'Audit Trails & Alerts',
          'Unlimited Users',
        ],
        ctaText: 'Contact Sales',
      },
    ],
  },
  {
    id: 'bandu',
    name: 'Bandu by Base',
    shortDescription: 'HR, Payroll, and Employee Management',
    monthlyPrice: 1499,
    annualPrice: 14990,
    freeTier: 'Up to 5 employees',
    tiers: [
      {
        name: 'Free',
        price: 0,
        priceDescriptor: 'up to 5 employees',
        features: [
          'Employee Database',
          'Basic Leave Application',
          'Manual Clock In/Out',
          'Basic HR Reports',
          'Email Support',
        ],
        ctaText: 'Use Free',
      },
      {
        name: 'Basic',
        price: 1499,
        priceDescriptor: 'up to 20 employees',
        features: [
          'Document Management',
          'Mobile App Clock In',
          'Auto Leave Calculation',
          'Shift Scheduling',
          'Basic Payroll Reports',
        ],
        ctaText: 'Start Basic',
      },
      {
        name: 'Professional',
        price: 2499,
        priceDescriptor: 'up to 100 employees',
        isPopular: true,
        features: [
          'Biometric Attendance',
          'Advanced Payroll System',
          'NHIF/NSSF/PAYE Sync',
          'Multi-level Approvals',
          'Pesa Integration',
        ],
        ctaText: 'Get Professional',
      },
      {
        name: 'Enterprise',
        price: 4999,
        priceDescriptor: 'unlimited employees',
        features: [
          'Auto-shift Rostering',
          'Custom Allowances',
          'Bank Integration (Payroll)',
          'Advanced HR Analytics',
          'Dedicated HR Consultant',
        ],
        ctaText: 'Contact Enterprise',
      },
    ],
  },
  {
    id: 'mteja',
    name: 'Mteja by Base',
    shortDescription: 'CRM, Loyalty, and Marketing Automation',
    monthlyPrice: 1299,
    annualPrice: 12990,
    freeTier: 'Up to 100 customers',
    tiers: [
      {
        name: 'Free',
        price: 0,
        priceDescriptor: 'up to 100 customers',
        features: [
          'Customer Database',
          'Visit Tracking',
          'Basic Profile History',
          'Duka Integration (Basic)',
          'Email Support',
        ],
        ctaText: 'Start Free',
      },
      {
        name: 'Basic',
        price: 1299,
        priceDescriptor: 'up to 1,000 customers',
        features: [
          '100 SMS/month included',
          'Points System (Loyalty)',
          'Referral Programs',
          'Customer Segments',
          'Promotions Manager',
        ],
        ctaText: 'Get Basic',
      },
      {
        name: 'Professional',
        price: 2499,
        priceDescriptor: 'up to 5,000 customers',
        isPopular: true,
        features: [
          '1,000 SMS/month included',
          'WhatsApp Integration',
          'Holiday & Birthday Automation',
          'Campaign ROI Tracking',
          'Email Marketing Campaigns',
        ],
        ctaText: 'Go Pro',
      },
      {
        name: 'Enterprise',
        price: 4999,
        priceDescriptor: 'unlimited customers',
        features: [
          'AI-powered Segmentation',
          'Advanced Tiered Loyalty',
          'Social Media Integration',
          'Custom API Access',
          'Strategic Marketing Audit',
        ],
        ctaText: 'Contact Sales',
      },
    ],
  },
];

export const BUNDLES = [
  {
    name: 'Duka + Pesa',
    price: 4498,
    bestFor: 'Restaurants, retail shops',
    discount: '10%',
  },
  {
    name: 'Duka + Mteja',
    price: 3798,
    bestFor: 'Service businesses, salons',
    discount: '10%',
  },
  {
    name: 'Duka + Bandu',
    price: 3998,
    bestFor: 'Businesses with 10+ staff',
    discount: '10%',
  },
  {
    name: 'All Four Products',
    price: 7296,
    bestFor: 'Full enterprise solution',
    discount: '20%',
  },
];

export const INDUSTRY_RECOMMENDATIONS = [
  {
    industry: 'Restaurants & Cafes',
    icon: '🍽️',
    tiers: [
      {
        size: 'Small Cafe',
        products: ['Duka Basic', 'Mteja Basic'],
        cost: 3798,
        features: 'POS + Customer loyalty',
      },
      {
        size: 'Restaurant',
        products: ['Duka Pro', 'Pesa Basic', 'Bandu Basic'],
        cost: 8497,
        features: 'Full operations + accounting',
      },
      {
        size: 'Restaurant Chain',
        products: ['All Products Enterprise'],
        cost: 15997,
        features: 'Complete business management',
      },
    ],
  },
  {
    industry: 'Retail Shops',
    icon: '🛍️',
    tiers: [
      {
        size: 'Small Shop',
        products: ['Duka Basic'],
        cost: 2499,
        features: 'Essential POS functions',
      },
      {
        size: 'Medium Store',
        products: ['Duka Pro', 'Pesa Basic'],
        cost: 5998,
        features: 'POS + inventory accounting',
      },
      {
        size: 'Retail Chain',
        products: ['All Products'],
        cost: 7296,
        features: 'Full retail management',
      },
    ],
  },
];
