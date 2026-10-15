import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { history, Link, useLocation } from '@umijs/max';
import { Drawer, Dropdown, MenuProps, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import {
  LEARN_LINKS,
  NAV_LINKS,
  PARTNER_LINKS,
  PRODUCT_LINKS,
  ProductLink,
  SOLUTION_LINKS,
} from '@/constants/landingData';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isBiasharaAI = location.pathname === '/solutions/biashara-ai';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (
        location.pathname === path ||
        (path === '' && location.pathname === '/')
      ) {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        history.push(href);
      }
    } else {
      history.push(href);
    }
  };

  const renderDropdownContent = (links: ProductLink[]) => (
    <div className="p-3 bg-white rounded-2xl shadow-xl border border-gray-100 min-w-[340px] max-w-[420px] font-sans">
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <button
            key={link.label}
            type="button"
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors text-left bg-transparent border-0 cursor-pointer w-full group"
            onClick={() => handleNav(link.href)}
          >
            <div
              className="text-lg mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
              style={{
                backgroundColor: 'rgba(31,43,93,0.06)',
                color: '#1F2B5D',
              }}
            >
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-navy">
                  {link.label}
                </span>
                {link.status && (
                  <Tag
                    bordered={false}
                    className="text-[10px] px-1.5 py-0 font-medium m-0"
                    style={{
                      backgroundColor:
                        link.status === 'Available'
                          ? '#8AFEA7'
                          : link.status === 'Early access'
                          ? '#80E4F1'
                          : '#F0F3F8',
                      color: '#1F2B5D',
                    }}
                  >
                    {link.status}
                  </Tag>
                )}
              </div>
              <div className="text-xs text-navy/70 leading-snug mt-1 line-clamp-2">
                {link.desc}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const getDropdownItems = (type?: string): MenuProps['items'] => {
    let links: ProductLink[] = [];
    if (type === 'products') links = PRODUCT_LINKS;
    else if (type === 'solutions') links = SOLUTION_LINKS;
    else if (type === 'partners') links = PARTNER_LINKS;
    else if (type === 'learn') links = LEARN_LINKS;

    return [
      {
        key: type || 'items',
        label: renderDropdownContent(links),
      },
    ];
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 font-sans ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-surfaceAlt'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Basepoint Logo"
              className="w-16 h-16 object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              if (link.dropdownType) {
                return (
                  <Dropdown
                    key={link.label}
                    menu={{ items: getDropdownItems(link.dropdownType) }}
                    placement="bottomLeft"
                    arrow
                  >
                    <button
                      type="button"
                      className="font-medium transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1.5 text-sm lg:text-base text-navy/80 hover:text-navy py-2"
                    >
                      {link.label}
                      <DownOutlined style={{ fontSize: 10 }} />
                    </button>
                  </Dropdown>
                );
              }

              return (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="font-medium transition-colors bg-transparent border-0 cursor-pointer text-sm lg:text-base text-navy/80 hover:text-navy py-2"
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://app.basepoint.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block font-semibold text-sm lg:text-base text-navy hover:text-navy/80 transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Log in
            </a>

            {isBiasharaAI ? (
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('waitlist-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else history.push('/solutions/biashara-ai#waitlist-form');
                }}
                className="font-bold px-5 py-2.5 text-sm lg:text-base rounded-full transition-all duration-200 shadow-sm bg-navy text-white hover:bg-navy/90 border-0 cursor-pointer whitespace-nowrap"
              >
                Join the waitlist
              </button>
            ) : (
              <Link
                to="/start"
                className="font-bold px-5 py-2.5 text-sm lg:text-base rounded-full transition-all duration-200 shadow-sm bg-navy text-white hover:bg-navy/90 whitespace-nowrap"
                style={{ textDecoration: 'none' }}
              >
                Start with Duka
              </Link>
            )}

            {/* Mobile menu trigger */}
            <button
              type="button"
              className="md:hidden bg-transparent border-0 cursor-pointer flex items-center justify-center p-2 text-navy"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuOutlined style={{ fontSize: 22 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        placement="right"
        width={320}
        title={
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Basepoint Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold text-navy text-lg">Basepoint</span>
          </div>
        }
      >
        <div className="flex flex-col gap-6 pt-2 font-sans">
          {/* Products Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-navy/50">
              Products
            </span>
            <div className="flex flex-col gap-2.5 pl-2">
              {PRODUCT_LINKS.map((prod) => (
                <button
                  type="button"
                  key={prod.label}
                  onClick={() => handleNav(prod.href)}
                  className="flex items-center justify-between text-left bg-transparent border-0 cursor-pointer p-1 text-navy hover:text-navy/80"
                >
                  <span className="font-semibold text-sm">{prod.label}</span>
                  {prod.status && (
                    <Tag
                      bordered={false}
                      className="text-[10px] px-1.5 py-0 font-medium m-0"
                      style={{
                        backgroundColor:
                          prod.status === 'Available' ? '#8AFEA7' : '#F0F3F8',
                        color: '#1F2B5D',
                      }}
                    >
                      {prod.status}
                    </Tag>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-navy/50">
              Solutions
            </span>
            <div className="flex flex-col gap-2.5 pl-2">
              {SOLUTION_LINKS.map((sol) => (
                <button
                  type="button"
                  key={sol.label}
                  onClick={() => handleNav(sol.href)}
                  className="flex items-center justify-between text-left bg-transparent border-0 cursor-pointer p-1 text-navy hover:text-navy/80"
                >
                  <span className="font-semibold text-sm">{sol.label}</span>
                  {sol.status && (
                    <Tag
                      bordered={false}
                      className="text-[10px] px-1.5 py-0 font-medium m-0"
                      style={{
                        backgroundColor:
                          sol.status === 'Early access' ? '#80E4F1' : '#F0F3F8',
                        color: '#1F2B5D',
                      }}
                    >
                      {sol.status}
                    </Tag>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-navy/50">
              Partners
            </span>
            <div className="flex flex-col gap-2.5 pl-2">
              {PARTNER_LINKS.map((partner) => (
                <button
                  type="button"
                  key={partner.label}
                  onClick={() => handleNav(partner.href)}
                  className="text-left bg-transparent border-0 cursor-pointer p-1 font-semibold text-sm text-navy hover:text-navy/80"
                >
                  {partner.label}
                </button>
              ))}
            </div>
          </div>

          {/* Learn & Pricing */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={() => handleNav('/resources')}
              className="text-left bg-transparent border-0 cursor-pointer p-1 font-semibold text-base text-navy hover:text-navy/80"
            >
              Basepoint Learn
            </button>
            <button
              type="button"
              onClick={() => handleNav('/pricing')}
              className="text-left bg-transparent border-0 cursor-pointer p-1 font-semibold text-base text-navy hover:text-navy/80"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => handleNav('/demo')}
              className="text-left bg-transparent border-0 cursor-pointer p-1 font-semibold text-base text-navy hover:text-navy/80"
            >
              Get setup help
            </button>
            <a
              href="https://app.basepoint.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left p-1 font-semibold text-base text-navy hover:text-navy/80"
              style={{ textDecoration: 'none' }}
            >
              Log in
            </a>
          </div>

          <hr className="my-2 border-gray-100" />

          {/* Primary Mobile CTA */}
          {isBiasharaAI ? (
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                const el = document.getElementById('waitlist-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else history.push('/solutions/biashara-ai#waitlist-form');
              }}
              className="text-center font-bold py-3.5 rounded-full bg-navy text-white border-0 cursor-pointer w-full text-base"
            >
              Join the waitlist
            </button>
          ) : (
            <Link
              to="/start"
              onClick={() => setMobileOpen(false)}
              className="text-center font-bold py-3.5 rounded-full bg-navy text-white text-base block"
              style={{ textDecoration: 'none' }}
            >
              Start with Duka
            </Link>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
