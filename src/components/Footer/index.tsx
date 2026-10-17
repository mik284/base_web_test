import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Link } from '@umijs/max';
import React from 'react';

import { openCookieSettings } from '@/components/CookieBanner';
import { FLAGS, SITE } from '@/constants/site';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Products',
    links: [
      { label: 'Base platform', href: '/platform' },
      { label: 'Duka', href: '/products/duka' },
      { label: 'Pesa', href: '/products/pesa' },
      { label: 'Mteja', href: '/products/mteja' },
      { label: 'Bandu', href: '/products/bandu' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Basepoint Learn', href: '/resources' },
      { label: 'Daily review guide', href: '/resources/daily-close' },
      { label: 'Stock count guide', href: '/resources/stock-count' },
      { label: 'Second outlet guide', href: '/resources/second-outlet' },
    ],
  },
  {
    title: 'Base Collabs',
    links: [
      { label: 'Base Collabs', href: '/collabs' },
      { label: 'Become a Collab', href: '/collabs/apply' },
      ...(FLAGS.referralsOpen
        ? [{ label: 'Refer a business', href: '/refer' }]
        : []),
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Basepoint', href: '/company' },
      { label: 'Partnerships', href: '/partners' },
      { label: 'Contact', href: '/contact' },
      { label: 'Product documentation', href: SITE.docsUrl, external: true },
    ],
  },
];

const linkClass = 'no-underline text-navy/70 hover:text-navy transition-colors';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-solid border-surfaceAlt pt-20 pb-10 text-navy">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6 mb-16">
        <div className="sm:col-span-2">
          <img
            src="/logo.png"
            alt="Basepoint"
            width={96}
            height={96}
            className="w-24 h-24 object-contain"
          />
          <p className="m-0 mt-2 mb-6 max-w-xs leading-relaxed text-navy/70">
            Business software for clearer daily operations.{' '}
            <span className="font-semibold text-navy">
              {SITE.masterPromise}
            </span>
          </p>
          <ul className="list-none m-0 p-0 space-y-4 text-navy/70">
            <li className="flex items-start gap-3">
              <MailOutlined aria-hidden="true" className="mt-1 text-navy/50" />
              <span>
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
                <br />
                <a href={`mailto:${SITE.communityEmail}`} className={linkClass}>
                  {SITE.communityEmail}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneOutlined aria-hidden="true" className="mt-1 text-navy/50" />
              <a href={SITE.phoneHref} className={linkClass}>
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <EnvironmentOutlined
                aria-hidden="true"
                className="mt-1 text-navy/50"
              />
              <span>
                {SITE.address[0]}
                <br />
                {SITE.address.slice(1).join(', ')}
              </span>
            </li>
          </ul>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h2 className="m-0 mb-6 text-base font-bold">{column.title}</h2>
            <ul className="list-none m-0 p-0 space-y-4">
              {column.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-solid border-surfaceAlt flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-navy/70">
        <p className="m-0">
          © {new Date().getFullYear()} {SITE.organisation}. {SITE.tagline}
        </p>
        <ul className="list-none m-0 p-0 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link to="/privacy" className={linkClass}>
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className={linkClass}>
              Terms
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={openCookieSettings}
              className={`bg-transparent border-0 p-0 cursor-pointer text-sm font-sans ${linkClass}`}
            >
              Cookie settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
