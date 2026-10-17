import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from '@umijs/max';
import { Drawer } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { ButtonLink, DukaButton, StatusBadge } from '@/components/Page';
import {
  LINKS,
  MenuEntry,
  PARTNER_MENU,
  PRODUCTS,
  SOLUTIONS,
} from '@/constants/site';

interface NavItem {
  label: string;
  href?: string;
  items?: MenuEntry[];
}

const NAV: NavItem[] = [
  { label: 'Products', items: PRODUCTS },
  { label: 'Solutions', items: SOLUTIONS },
  { label: 'Learn', href: '/resources' },
  { label: 'Partners', items: PARTNER_MENU },
  { label: 'Pricing', href: '/pricing' },
];

const EntryLink: React.FC<{ entry: MenuEntry; onNavigate?: () => void }> = ({
  entry,
  onNavigate,
}) => (
  <Link
    to={entry.href}
    onClick={onNavigate}
    className="block rounded-xl px-3 py-2.5 no-underline text-navy hover:bg-surface focus-visible:bg-surface"
  >
    <span className="flex flex-wrap items-center gap-2 font-semibold">
      {entry.name}
      {entry.status && <StatusBadge status={entry.status} />}
    </span>
    <span className="block mt-0.5 text-sm text-navy/75">
      {entry.descriptor}
    </span>
  </Link>
);

/** Disclosure menu: opens on hover or click, closes on Escape or focus loss. */
const NavMenu: React.FC<{ item: NavItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = `nav-menu-${item.label.toLowerCase()}`;

  useEffect(() => setOpen(false), [pathname]);

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 bg-transparent border-0 cursor-pointer px-1 py-2 font-medium text-base text-navy/75 hover:text-navy"
      >
        {item.label}
        <DownOutlined aria-hidden="true" style={{ fontSize: 10 }} />
      </button>
      {open && (
        <div id={menuId} className="absolute left-0 top-full pt-2">
          <ul className="list-none m-0 p-2 w-[340px] rounded-2xl bg-white border border-surfaceAlt shadow-soft">
            {item.items!.map((entry) => (
              <li key={entry.href}>
                <EntryLink entry={entry} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

/** On Biashara AI the only conversion action is the waitlist (§4.2). */
const PrimaryAction: React.FC<{ isBiashara: boolean }> = ({ isBiashara }) =>
  isBiashara ? (
    <ButtonLink to="#waitlist" size="sm">
      Join the waitlist
    </ButtonLink>
  ) : (
    <DukaButton size="sm" />
  );

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isBiashara = pathname.startsWith('/solutions/biashara-ai');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-shadow ${
          scrolled
            ? 'shadow-card border-surfaceAlt'
            : 'bg-white/80 border-gray-100'
        }`}
      >
        <nav
          aria-label="Main"
          className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-4"
        >
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Basepoint home"
              width={80}
              height={80}
              className="w-20 h-20 lg:w-16 lg:h-16 object-contain"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {NAV.map((item) =>
              item.items ? (
                <NavMenu key={item.label} item={item} />
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.href!}
                    className="px-1 py-2 font-medium text-base no-underline text-navy/75 hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            {LINKS.login && (
              <a
                href={LINKS.login}
                className="font-medium text-[15px] no-underline text-navy/80 hover:text-navy"
              >
                Log in
              </a>
            )}
            <PrimaryAction isBiashara={isBiashara} />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="lg:hidden bg-transparent border-0 cursor-pointer p-2 text-navy"
            onClick={() => setMobileOpen(true)}
          >
            <MenuOutlined aria-hidden="true" style={{ fontSize: 22 }} />
          </button>
        </nav>
      </header>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        placement="right"
        width={320}
        title="Menu"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6 text-navy">
          {NAV.map((item) =>
            item.items ? (
              <div key={item.label}>
                <p className="m-0 mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-navy/75">
                  {item.label}
                </p>
                <ul className="list-none m-0 p-0">
                  {item.items.map((entry) => (
                    <li key={entry.href}>
                      <EntryLink
                        entry={entry}
                        onNavigate={() => setMobileOpen(false)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="px-3 text-lg font-semibold no-underline text-navy"
              >
                {item.label}
              </Link>
            ),
          )}
          {LINKS.login && (
            <a
              href={LINKS.login}
              className="px-3 text-lg font-semibold no-underline text-navy"
            >
              Log in
            </a>
          )}
          <div className="flex flex-col">
            <PrimaryAction isBiashara={isBiashara} />
          </div>
        </nav>
      </Drawer>
    </>
  );
};

export default Navbar;
