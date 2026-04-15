import {
  ArrowRightOutlined,
  CalculatorOutlined,
  GlobalOutlined,
  ShopOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import React from 'react';

/* ── Icon map ────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
  Calculator: <CalculatorOutlined style={{ fontSize: 28 }} />,
  Shop: <ShopOutlined style={{ fontSize: 28 }} />,
  Team: <TeamOutlined style={{ fontSize: 28 }} />,
  Global: <GlobalOutlined style={{ fontSize: 28 }} />,
  Star: <StarOutlined style={{ fontSize: 28 }} />,
};

/* ── Data ────────────────────────────────────────────────────────── */
interface ProductData {
  id: string;
  name: string;
  description: string;
  cta: string;
  iconKey: string;
  accentColor: string; // rgba for corner blob
  iconBorderColor: string;
  iconTextColor: string;
  ctaColor: string;
  isWide?: boolean;
}

const PRODUCTS: ProductData[] = [
  {
    id: 'duka',
    name: 'Duka',
    description:
      'Next-gen POS and multi-channel inventory management. Sell in-store, online, or on social media with one central inventory system.',
    cta: 'Explore Duka',
    iconKey: 'Shop',
    accentColor: 'rgba(247,179,68,0.1)',
    iconBorderColor: 'rgba(247,179,68,0.3)',
    iconTextColor: '#F7B344',
    ctaColor: '#F7B344',
    isWide: true,
  },
  {
    id: 'pesa',
    name: 'Pesa',
    description:
      'Automate accounting, invoicing, and tax calculations effortlessly. Stay compliant without the headache.',
    cta: 'Explore Pesa',
    iconKey: 'Calculator',
    accentColor: 'rgba(138,254,167,0.2)',
    iconBorderColor: 'rgba(138,254,167,0.3)',
    iconTextColor: '#5CE07A',
    ctaColor: '#5CE07A',
  },
  {
    id: 'bandu',
    name: 'Bandu',
    description:
      'Empower your team with seamless communication and task management. Assign roles, track progress, and manage shifts effortlessly.',
    cta: 'Explore Bandu',
    iconKey: 'Team',
    accentColor: 'rgba(8,0,240,0.1)',
    iconBorderColor: 'rgba(8,0,240,0.2)',
    iconTextColor: '#0800F0',
    ctaColor: '#0800F0',
  },
  {
    id: 'mteja',
    name: 'Mteja',
    description:
      'Turn every transaction into a marketing opportunity. Track customer preferences, reward loyalty, and send targeted promotions that drive repeat business.',
    cta: 'Explore Mteja',
    iconKey: 'Star',
    accentColor: 'rgba(128,228,241,0.2)',
    iconBorderColor: 'rgba(128,228,241,0.4)',
    iconTextColor: '#0891b2',
    ctaColor: '#0891b2',
  },
  {
    id: 'custom',
    name: 'Custom',
    description:
      'Tailored software solutions designed to meet your unique business needs. From custom integrations to bespoke features, we build technology that works the way you do.',
    cta: 'Explore Custom',
    iconKey: 'Global',
    accentColor: 'rgba(255,231,0,0.2)',
    iconBorderColor: 'rgba(255,231,0,0.4)',
    iconTextColor: '#ca8a04',
    ctaColor: '#ca8a04',
  },
];

/* ── Single product card ─────────────────────────────────────────── */
import { history } from '@umijs/max';

const ProductCard: React.FC<{ product: ProductData }> = ({ product }) => {
  const isWide = !!product.isWide;

  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/pricing');
  };

  return (
    <div
      className={`relative rounded-[2rem] p-8 border overflow-hidden group transition-all duration-300 hover:shadow-soft ${
        isWide ? 'md:col-span-2' : ''
      }`}
      style={{ backgroundColor: '#F8F9FA', borderColor: '#F0F3F8' }}
    >
      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 rounded-bl-full transition-transform group-hover:scale-110"
        style={{
          backgroundColor: product.accentColor,
          width: isWide ? 192 : 128,
          height: isWide ? 192 : 128,
          marginRight: isWide ? -48 : -32,
          marginTop: isWide ? -48 : -32,
        }}
      />

      <div
        className={`relative z-10 ${
          isWide ? 'flex flex-col lg:flex-row gap-8 items-center h-full' : ''
        }`}
      >
        {/* Text block */}
        <div className={isWide ? 'w-full lg:w-1/2' : ''}>
          {/* Icon */}
          <div
            className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6"
            style={{
              border: `1px solid ${product.iconBorderColor}`,
              color: product.iconTextColor,
            }}
          >
            {ICON_MAP[product.iconKey]}
          </div>

          <h3
            className="text-2xl font-bold mb-3 font-outfit"
            style={{ color: '#1F2B5D' }}
          >
            {product.name}
          </h3>
          <p
            className="mb-8 leading-relaxed font-outfit"
            style={{ color: 'rgba(31,43,93,0.6)' }}
          >
            {product.description}
          </p>
          <a
            href="/pricing"
            onClick={handleCta}
            className="inline-flex items-center gap-2 font-semibold font-outfit group-hover:gap-3 transition-all"
            style={{ color: product.ctaColor, textDecoration: 'none' }}
          >
            {product.cta}
            <ArrowRightOutlined />
          </a>
        </div>

        {/* Duka1 only: mini sales preview */}
        {isWide && (
          <div
            className="w-full lg:w-1/2 h-40 bg-white rounded-2xl p-4 hidden sm:flex flex-col justify-center"
            style={{
              border: '1px solid #F0F3F8',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
          >
            <div
              className="flex items-center justify-between mb-4 pb-2"
              style={{ borderBottom: '1px solid #F0F3F8' }}
            >
              <span
                className="text-sm font-semibold font-outfit"
                style={{ color: '#1F2B5D' }}
              >
                Recent Sales
              </span>
              <span
                className="text-xs px-2 py-1 rounded font-outfit"
                style={{
                  color: '#5CE07A',
                  backgroundColor: 'rgba(138,254,167,0.1)',
                }}
              >
                +14%
              </span>
            </div>
            <div className="space-y-3">
              {[24, 32, 20].map((w, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div
                    className="h-2 rounded"
                    style={{ width: `${w * 4}px`, backgroundColor: '#F0F3F8' }}
                  />
                  <div
                    className="h-2 w-12 rounded"
                    style={{ backgroundColor: 'rgba(31,43,93,0.2)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Section ─────────────────────────────────────────────────────── */
const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="font-bold tracking-wider uppercase text-sm mb-2 block font-outfit"
            style={{ color: '#0800F0' }}
          >
            Our Products
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4 font-outfit"
            style={{ color: '#1F2B5D' }}
          >
            The Complete Basepoint Ecosystem
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg font-outfit"
            style={{ color: 'rgba(31,43,93,0.6)' }}
          >
            Powerful standalone products that work even better together. Build
            your perfect business stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
