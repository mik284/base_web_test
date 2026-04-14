import {
  CloudUploadOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import React from 'react';

import { FOOTER_COMPANY, FOOTER_PRODUCTS } from '@/constants/landingData';

const SOCIAL = [
  { icon: <TwitterOutlined style={{ fontSize: 22 }} />, href: '#', label: 'Twitter' },
  { icon: <InstagramOutlined style={{ fontSize: 22 }} />, href: '#', label: 'Instagram' },
  { icon: <LinkedinOutlined style={{ fontSize: 22 }} />, href: '#', label: 'LinkedIn' },
];

const CONTACT = [
  {
    icon: <EnvironmentOutlined style={{ fontSize: 18 }} />,
    content: (
      <>
        Westlands, Nairobi
        <br />
        Kenya
      </>
    ),
  },
  {
    icon: <MailOutlined style={{ fontSize: 18 }} />,
    content: (
      <a
        href="mailto:hello@basepoint.cloud"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        hello@basepoint.cloud
      </a>
    ),
  },
  {
    icon: <PhoneOutlined style={{ fontSize: 18 }} />,
    content: '+254 700 000 000',
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
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Base Logo" 
                className="w-10 h-10 object-contain"
              />
              <span
                className="font-bold text-xl tracking-tight font-outfit"
                style={{ color: '#1F2B5D' }}
              >
                BasepointCloud
              </span>
            </div>
            <p
              className="mb-6 max-w-xs leading-relaxed font-outfit"
              style={{ color: 'rgba(31,43,93,0.6)' }}
            >
              Empowering African businesses with modern, unified tools to sell more, manage
              better, and scale faster.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4" style={{ color: 'rgba(31,43,93,0.4)' }}>
              {SOCIAL.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#8AFEA7')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(31,43,93,0.4)')}
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
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors font-outfit"
                    style={{ color: 'rgba(31,43,93,0.6)', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#1F2B5D')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(31,43,93,0.6)')}
                  >
                    {item}
                  </a>
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
              {FOOTER_COMPANY.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors font-outfit"
                    style={{ color: 'rgba(31,43,93,0.6)', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#1F2B5D')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(31,43,93,0.6)')}
                  >
                    {item}
                  </a>
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
          style={{ borderTop: '1px solid #F0F3F8', color: 'rgba(31,43,93,0.4)' }}
        >
          <p className="font-outfit">© {new Date().getFullYear()} BasepointCloud Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                className="transition-colors font-outfit"
                style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#1F2B5D')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(31,43,93,0.4)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
