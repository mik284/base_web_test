import {} from '@ant-design/icons';
import { Link } from '@umijs/max';
import React from 'react';

import {
  FOOTER_COMPANY,
  FOOTER_LEARN,
  FOOTER_PARTNERS,
  FOOTER_PRODUCTS,
  FOOTER_SOLUTIONS,
} from '@/constants/landingData';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-12 font-sans bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand & Narrative */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Basepoint Logo"
                className="w-16 h-16 object-contain"
              />
            </Link>
            <p className="font-bold text-navy text-lg mb-2">Basepoint</p>
            <p className="text-sm text-navy/70 max-w-sm leading-relaxed mb-4">
              Business software for your everyday operations. Know what sold.
              Know what&apos;s left. Know your next move.
            </p>
            <p className="text-xs text-navy/50 font-medium">
              Know what matters. Before it matters.
            </p>
          </div>

          {/* Products */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-navy mb-4">
              Products
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-navy/70 hover:text-navy transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-navy mb-4">
              Solutions
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-navy/70 hover:text-navy transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn & Partners */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-navy mb-4">
              Learn & Partners
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {FOOTER_LEARN.slice(0, 2).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-navy/70 hover:text-navy transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {FOOTER_PARTNERS.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-navy/70 hover:text-navy transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-navy mb-4">
              Company
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-navy/70 hover:text-navy transition-colors"
                      style={{ textDecoration: 'none' }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm text-navy/70 hover:text-navy transition-colors"
                      style={{ textDecoration: 'none' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-navy/60 gap-4">
          <p className="m-0 text-center md:text-left">
            © {new Date().getFullYear()} Basepoint Cloud Technologies. All
            rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-navy/60 hover:text-navy transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-navy/60 hover:text-navy transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Terms of Service
            </Link>
            <a
              href="https://basepoint.mintlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy/60 hover:text-navy transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
