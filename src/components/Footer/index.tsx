import {
  EnvironmentOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import React from 'react';

import { FOOTER_COMPANY, FOOTER_PRODUCTS } from '@/constants/landingData';
import { Link } from '@umijs/max';

const SOCIAL = [
  {
    icon: <TwitterOutlined style={{ fontSize: 22 }} />,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: <InstagramOutlined style={{ fontSize: 22 }} />,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: <LinkedinOutlined style={{ fontSize: 22 }} />,
    href: '#',
    label: 'LinkedIn',
  },
];

const CONTACT = [
  {
    icon: <EnvironmentOutlined style={{ fontSize: 18 }} />,
    content: (
      <>
        CMS Africa
        <br />
        Chania Avenue, Kilimani
      </>
    ),
  },
  {
    icon: <MailOutlined style={{ fontSize: 18 }} />,
    content: (
      <>
        <a
          href="mailto:info@basepoint.co.ke"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          info@basepoint.co.ke
        </a>
        <br />
        <a
          href="mailto:community@basepoint.co.ke"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          community@basepoint.co.ke
        </a>
      </>
    ),
  },
  {
    icon: <PhoneOutlined style={{ fontSize: 18 }} />,
    content: '+254 746 665 877',
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="pt-20 pb-10"
      style={{ backgroundColor: '#fff', borderTop: '1px solid #F0F3F8' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Base Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <p
              className="mb-6 max-w-xs leading-relaxed font-outfit"
              style={{ color: 'rgba(31,43,93,0.6)' }}
            >
              Empowering businesses with modern, unified tools to sell more,
              manage better, and scale faster.
            </p>
            {/* Social links */}
            <div
              className="flex items-center gap-4"
              style={{ color: 'rgba(31,43,93,0.4)' }}
            >
              {SOCIAL.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      '#8AFEA7')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(31,43,93,0.4)')
                  }
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products links */}
          <div>
            <h5
              className="font-bold mb-6 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Products
            </h5>
            <ul className="space-y-4 list-none p-0 m-0">
              {FOOTER_PRODUCTS.map((item: { label: string; href: string }) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="transition-colors font-outfit"
                    style={{
                      color: 'rgba(31,43,93,0.6)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = '#1F2B5D')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        'rgba(31,43,93,0.6)')
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h5
              className="font-bold mb-6 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Company
            </h5>
            <ul className="space-y-4 list-none p-0 m-0">
              {FOOTER_COMPANY.map((item: { label: string; href: string }) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="transition-colors font-outfit"
                    style={{
                      color: 'rgba(31,43,93,0.6)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = '#1F2B5D')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        'rgba(31,43,93,0.6)')
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="font-bold mb-6 font-outfit"
              style={{ color: '#1F2B5D' }}
            >
              Contact Us
            </h5>
            <ul className="space-y-4 list-none p-0 m-0">
              {CONTACT.map(({ icon, content }, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-outfit"
                  style={{ color: 'rgba(31,43,93,0.6)' }}
                >
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: 'rgba(31,43,93,0.4)' }}
                  >
                    {icon}
                  </span>
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm"
          style={{
            borderTop: '1px solid #F0F3F8',
            color: 'rgba(31,43,93,0.4)',
          }}
        >
          <p className="font-outfit">
            © {new Date().getFullYear()} BasepointCloud Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="transition-colors font-outfit"
                style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = '#1F2B5D')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    'rgba(31,43,93,0.4)')
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
