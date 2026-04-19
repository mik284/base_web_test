import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Dropdown, MenuProps, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import { NAV_LINKS, PRODUCT_LINKS } from '@/constants/landingData';

import { history, Link } from '@umijs/max';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Kenya');

  const countries = [
    { key: 'kenya', label: 'Kenya', flag: '🇰🇪' },
    { key: 'tanzania', label: 'Tanzania', flag: '🇹🇿' },
    { key: 'uganda', label: 'Uganda', flag: '🇺🇬' },
    { key: 'rwanda', label: 'Rwanda', flag: '🇷🇼' },
    { key: 'burundi', label: 'Burundi', flag: '🇧🇮' },
  ];

  const countryItems: MenuProps['items'] = countries.map((c) => ({
    key: c.key,
    label: (
      <Space>
        <span>{c.flag}</span>
        <span>{c.label}</span>
      </Space>
    ),
    onClick: () => setSelectedCountry(c.label),
  }));

  // Add shadow/bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith('/#')) {
      const anchor = href.substring(1);
      if (window.location.pathname === '/') {
        const el = document.querySelector(anchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        history.push('/');
        setTimeout(() => {
          const el = document.querySelector(anchor);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      history.push(href);
    }
  };

  const productItems: MenuProps['items'] = PRODUCT_LINKS.map((link) => ({
    key: link.label,
    label: (
      <div className="flex items-start gap-3 p-2 py-1 max-w-[240px] font-outfit">
        <div className="text-xl mt-0.5" style={{ color: '#8AFEA7' }}>
          {link.icon}
        </div>
        <div>
          <div className="font-bold text-base" style={{ color: '#1F2B5D' }}>
            {link.label}
          </div>
          <div
            className="text-xs leading-snug mt-1"
            style={{ color: 'rgba(31,43,93,0.6)' }}
          >
            {link.desc}
          </div>
        </div>
      </div>
    ),
    onClick: () => handleNav(link.href),
  }));

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-surfaceAlt'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
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
              alt="BasepointCloud Logo"
              className="w-20 h-20 lg:w-16 lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) {
                return (
                  <Dropdown
                    key={link.label}
                    menu={{ items: productItems }}
                    placement="bottom"
                    arrow
                  >
                    <button
                      type="button"
                      className="font-medium font-outfit transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1.5 text-sm lg:text-base"
                      style={{ color: 'rgba(31,43,93,0.7)' }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          '#1F2B5D')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'rgba(31,43,93,0.7)')
                      }
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
                  className="font-medium font-outfit transition-colors bg-transparent border-0 cursor-pointer text-sm lg:text-base"
                  style={{ color: 'rgba(31,43,93,0.7)' }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = '#1F2B5D')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      'rgba(31,43,93,0.7)')
                  }
                >
                  {link.label}
                </button>
              );
            })}

            {/* Country Dropdown */}
            <Dropdown
              menu={{ items: countryItems }}
              placement="bottomRight"
              arrow
            >
              <button
                type="button"
                className="font-medium font-outfit transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1.5 text-sm lg:text-base"
                style={{ color: 'rgba(31,43,93,0.7)' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = '#1F2B5D')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    'rgba(31,43,93,0.7)')
                }
              >
                <Space>
                  <span>
                    {countries.find((c) => c.label === selectedCountry)?.flag}
                  </span>
                  <span className="hidden xl:inline">{selectedCountry}</span>
                  <DownOutlined style={{ fontSize: 10 }} />
                </Space>
              </button>
            </Dropdown>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/login"
              className="hidden md:block font-medium font-outfit transition-colors"
              style={{ color: '#1F2B5D', textDecoration: 'none' }}
            >
              Log In
            </Link>
            <Link
              to="/pricing"
              className="font-bold px-4 py-2 md:px-6 md:py-2.5 text-[13px] md:text-base rounded-full transition-all duration-300 shadow-sm font-outfit whitespace-nowrap"
              style={{
                backgroundColor: '#1F2B5D',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Get Started
            </Link>
            {/* Mobile menu trigger */}
            <button
              type="button"
              className="md:hidden bg-transparent border-0 cursor-pointer flex items-center justify-center p-2"
              onClick={() => setMobileOpen(true)}
              style={{ color: '#1F2B5D' }}
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
        width={280}
        title={
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Base Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        }
      >
        <div className="flex flex-col gap-5 pt-2">
          {NAV_LINKS.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="flex flex-col gap-2">
                  <span
                    className="text-lg text-left font-medium font-outfit p-0"
                    style={{ color: 'rgba(31,43,93,0.5)' }}
                  >
                    {link.label}
                  </span>
                  <div className="flex flex-col gap-3 pl-4">
                    {PRODUCT_LINKS.map((prod) => (
                      <button
                        type="button"
                        key={prod.label}
                        onClick={() => handleNav(prod.href)}
                        className="flex items-start gap-3 text-left bg-transparent border-0 cursor-pointer p-0 transition-colors"
                      >
                        <div
                          className="text-xl mt-0.5"
                          style={{ color: '#8AFEA7' }}
                        >
                          {prod.icon}
                        </div>
                        <div>
                          <div
                            className="text-base font-bold font-outfit"
                            style={{ color: '#1F2B5D' }}
                          >
                            {prod.label}
                          </div>
                          <div
                            className="text-xs font-outfit leading-snug"
                            style={{ color: 'rgba(31,43,93,0.6)' }}
                          >
                            {prod.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-lg text-left bg-transparent border-0 cursor-pointer font-medium font-outfit p-0 transition-colors"
                style={{ color: '#1F2B5D' }}
              >
                {link.label}
              </button>
            );
          })}
          <hr className="my-2" style={{ borderColor: '#F0F3F8' }} />

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider opacity-50 font-outfit">
              Select Country
            </span>
            {countries.map((c) => (
              <button
                type="button"
                key={c.key}
                onClick={() => {
                  setSelectedCountry(c.label);
                  setMobileOpen(false);
                }}
                className="flex items-center gap-3 bg-transparent border-0 cursor-pointer font-medium font-outfit p-1 transition-colors"
                style={{
                  color:
                    selectedCountry === c.label
                      ? '#1F2B5D'
                      : 'rgba(31,43,93,0.6)',
                }}
              >
                <span className="text-xl">{c.flag}</span>
                <span>{c.label}</span>
                {selectedCountry === c.label && (
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#8AFEA7' }}
                  />
                )}
              </button>
            ))}
          </div>

          <hr className="my-2" style={{ borderColor: '#F0F3F8' }} />
          <a
            href="#"
            className="font-medium font-outfit"
            style={{ color: '#1F2B5D', textDecoration: 'none' }}
          >
            Log In
          </a>
          <Link
            to="/pricing"
            className="text-center font-semibold py-3 rounded-full font-outfit transition-colors"
            style={{
              backgroundColor: '#1F2B5D',
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            Get Started
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
