/**
 * Basepoint Learn guides. Article copy is taken verbatim from the website
 * specification (§19); the specification is the authoritative source.
 */

export type LearnCategory = 'Run' | 'Money' | 'Grow' | 'Customers' | 'Industry';

export const CATEGORY_DESCRIPTIONS: Record<LearnCategory, string> = {
  Run: 'Sales records, stock and daily routines.',
  Money: 'Financial records and questions worth investigating.',
  Grow: 'Readiness, expansion and operating capacity.',
  Customers: 'Responsible records and follow-up practices.',
  Industry: 'Guidance for relevant business workflows.',
};

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  categories: LearnCategory[];
  author: string;
  /** ISO date the guide was published. */
  published: string;
  intro: string;
  /** Whether the steps are an ordered sequence or a set of questions. */
  numbered: boolean;
  steps: { title: string; body: string }[];
  /** Extra content placed after the steps, such as a worksheet layout. */
  extra?: { title: string; body: string };
  closing?: string;
  tryLabel: string;
  tryText: string;
  reviewLabel: string;
  reviewText: string;
  connection?: string;
  /** Contextual call to action; without an href it routes to setup help. */
  cta: { label: string; href?: string };
}

export const GUIDES: Guide[] = [
  {
    slug: 'daily-close',
    title: 'A simple daily review for your shop',
    summary:
      "Take a few minutes to check the day's records and choose what needs attention tomorrow.",
    categories: ['Run', 'Money'],
    author: 'Basepoint team',
    published: '2026-10-15',
    numbered: true,
    intro:
      'A daily review is a check on your records. It helps you notice gaps while the day is still fresh. It does not replace accounting or prove that every payment has settled.',
    steps: [
      {
        title: 'Review recorded sales.',
        body: 'Check the date and look for missing or duplicated entries. Investigate returns, corrections or unusual transactions.',
      },
      {
        title: 'Separate the payment channels.',
        body: 'Compare the relevant sales records with cash, confirmed mobile-money receipts and other payment records. Keep unpaid sales distinct from money received.',
      },
      {
        title: 'Check differences.',
        body: 'Note withdrawals, refunds, expenses or opening cash where they affect the comparison. Do not change records just to force a match. Investigate unexplained differences.',
      },
      {
        title: 'Note stock questions.',
        body: 'Identify items that need a physical count or another check. Sales records are one part of the stock picture.',
      },
      {
        title: "Choose tomorrow's first task.",
        body: 'Write down one action, who will do it and when you will review it.',
      },
    ],
    tryLabel: 'Try today',
    tryText:
      'Record one discrepancy or missing entry and investigate its cause.',
    reviewLabel: 'Review tomorrow',
    reviewText: 'Was it resolved, and what would prevent it recurring?',
    connection:
      'Duka can provide recorded sales and stock information for your review. Confirm the reports and payment features available in your setup.',
    cta: { label: 'Explore Duka', href: '/products/duka' },
  },
  {
    slug: 'stock-count',
    title: 'Make a stock count useful',
    summary:
      'Count consistently, investigate differences and leave a record someone else can understand.',
    categories: ['Run'],
    author: 'Basepoint team',
    published: '2026-10-15',
    numbered: true,
    intro:
      'A stock count checks what is physically present against your records. Differences are questions to investigate, not automatic evidence of theft or loss.',
    steps: [
      {
        title: 'Choose a manageable scope.',
        body: 'Start with a shelf, category or small group of products. Decide the counting time and how sales or deliveries during the count will be handled.',
      },
      {
        title: 'Use clear product names and units.',
        body: 'Avoid mixing boxes, packs and individual items in the same quantity field.',
      },
      {
        title: 'Record the physical quantity.',
        body: 'Count carefully and recount unexpected results. Note damaged or unsellable items separately.',
      },
      {
        title: 'Compare with the recorded quantity.',
        body: 'Check recent sales, receipts, returns and adjustments before deciding why a difference exists.',
      },
      {
        title: 'Record the resolution.',
        body: 'Keep the date, person responsible and explanation for an approved correction.',
      },
    ],
    extra: {
      title: 'Suggested worksheet columns',
      body: 'Date, product, unit, recorded quantity, physical quantity, difference, explanation, approved correction, reviewer.',
    },
    tryLabel: 'Try today',
    tryText: 'Count five important products using consistent units.',
    reviewLabel: 'Review next time',
    reviewText: 'Did the same difference recur?',
    connection:
      'Use the stock records supported in your setup as one side of the comparison.',
    cta: { label: 'Explore Duka', href: '/products/duka' },
  },
  {
    slug: 'second-outlet',
    title: 'Questions to answer before opening a second outlet',
    summary:
      'Check whether your records, people and routines can support another location.',
    categories: ['Grow', 'Money'],
    author: 'Basepoint team',
    published: '2026-10-15',
    numbered: false,
    intro:
      'A second outlet adds another place where stock, money and decisions need attention. Start by checking whether the current operation can be explained and repeated.',
    steps: [
      {
        title: 'Records',
        body: 'Can you distinguish sales, stock and expenses for the existing outlet? What would need to be recorded separately at a new location?',
      },
      {
        title: 'People',
        body: 'Who will manage the outlet, who can make decisions and who reviews exceptions?',
      },
      {
        title: 'Stock',
        body: 'How will deliveries and transfers be recorded? Who approves movements between locations?',
      },
      {
        title: 'Money',
        body: 'What are the setup and ongoing costs? How will you review cash received, expenses and unpaid sales by location?',
      },
      {
        title: 'Routine',
        body: 'Which daily checks are dependable today? Which still rely on the owner remembering every detail?',
      },
    ],
    closing:
      'This guide is a readiness discussion, not a financial forecast or recommendation to expand.',
    tryLabel: 'Try this week',
    tryText:
      'Document one existing operating routine and ask another responsible person to follow it.',
    reviewLabel: 'Review',
    reviewText: 'Where did they need clarification?',
    cta: { label: 'Discuss your setup' },
  },
];

export const getGuide = (slug: string) =>
  GUIDES.find((guide) => guide.slug === slug);
