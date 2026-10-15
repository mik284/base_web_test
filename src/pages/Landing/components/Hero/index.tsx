import {
  AppstoreOutlined,
  BellOutlined,
  CheckOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

/** Floating notification badge — reused for both alerts */
const FloatingBadge: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  animClass?: string;
}> = ({
  className = '',
  style,
  children,
  animClass = 'animate-float-delayed',
}) => (
  <div
    className={`absolute z-20 bg-white rounded-2xl shadow-xl flex items-center gap-3 ${animClass} ${className}`}
    style={{ border: '1px solid #F0F3F8', ...style }}
  >
    {children}
  </div>
);

/** Mini bar chart inside the dashboard mockup */
const MiniBarChart: React.FC = () => (
  <div className="flex items-end gap-1 h-16">
    {[40, 60, 50, 90, 70].map((h, i) => (
      <div
        key={i}
        className="flex-1 rounded-t-sm"
        style={{
          height: `${h}%`,
          backgroundColor:
            i === 4 ? '#1F2B5D' : `rgba(138,254,167,${0.4 + i * 0.15})`,
        }}
      />
    ))}
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Decorative blob backgrounds */}
      <div
        className="blob-bg w-[500px] h-[500px]"
        style={{ backgroundColor: '#9DE89F', top: 0, left: -100 }}
      />
      <div
        className="blob-bg w-[400px] h-[400px]"
        style={{ backgroundColor: '#80E4F1', right: -50, top: '20%' }}
      />
      <div
        className="blob-bg w-[300px] h-[300px]"
        style={{ backgroundColor: '#FFE700', left: '20%', bottom: 0 }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* ── Left: Text ─────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Kicker */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(31,43,93,0.05)',
              border: '1px solid rgba(31,43,93,0.1)',
            }}
          >
            <span
              className="flex h-2 w-2 rounded-full"
              style={{ backgroundColor: '#8AFEA7' }}
            />
            <span className="text-xs font-bold uppercase tracking-wider font-sans text-navy">
              BUSINESS SOFTWARE FOR YOUR EVERYDAY OPERATIONS
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 font-sans text-navy"
            style={{ lineHeight: 1.1 }}
          >
            Know what sold.{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #0800F0, #80E4F1)',
              }}
            >
              Know what&apos;s left.
            </span>{' '}
            Know your next move.
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg lg:text-xl mb-8 max-w-lg leading-relaxed font-sans"
            style={{ color: 'rgba(31,43,93,0.75)' }}
          >
            Start with Duka to record sales, track stock and issue receipts.
            Build a clearer picture of your business, then explore more of Base
            as your needs grow.
          </p>

          {/* Dual CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/start')}
              className="w-full sm:w-auto h-auto px-8 py-3.5 rounded-full font-bold font-sans bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-lg text-base"
            >
              Start with Duka
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/demo')}
              className="w-full sm:w-auto h-auto px-8 py-3.5 rounded-full font-bold font-sans bg-white border-2 border-surfaceAlt text-navy hover:border-navy hover:text-navy transition-all text-base"
            >
              Get setup help
            </Button>
          </div>

          {/* Master Promise & Brand Line */}
          <div className="mt-8 flex items-center gap-2">
            <span
              className="text-sm font-semibold font-sans"
              style={{ color: 'rgba(31,43,93,0.7)' }}
            >
              Know what matters. Before it matters.
            </span>
          </div>
        </div>

        {/* ── Right: Dashboard Mockup ────────────────────────────────── */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] animate-float">
          {/* Browser chrome card */}
          <div
            className="absolute inset-0 bg-white rounded-3xl overflow-hidden flex flex-col"
            style={{
              boxShadow: '0 20px 40px -15px rgba(31,43,93,0.08)',
              border: '1px solid #F0F3F8',
            }}
          >
            {/* Top bar */}
            <div
              className="h-14 flex items-center px-6 justify-between"
              style={{
                borderBottom: '1px solid #F0F3F8',
                backgroundColor: 'rgba(248,249,250,0.5)',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#FFE700' }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#8AFEA7' }}
                />
              </div>
              <div
                className="w-48 h-6 rounded-full flex items-center px-3"
                style={{ backgroundColor: '#fff', border: '1px solid #F0F3F8' }}
              >
                <SearchOutlined style={{ color: '#9ca3af', fontSize: 10 }} />
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div
                className="w-20 lg:w-48 flex flex-col gap-4 p-4"
                style={{
                  borderRight: '1px solid #F0F3F8',
                  backgroundColor: 'rgba(248,249,250,0.3)',
                }}
              >
                <div
                  className="h-8 rounded-lg mb-2"
                  style={{ backgroundColor: '#F0F3F8' }}
                />
                {/* Active item */}
                <div
                  className="flex items-center gap-3 p-2 rounded-lg"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #F0F3F8',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <AppstoreOutlined
                    style={{ color: '#8AFEA7', fontSize: 18 }}
                  />
                  <div
                    className="hidden lg:block h-2 w-16 rounded"
                    style={{ backgroundColor: 'rgba(31,43,93,0.2)' }}
                  />
                </div>
                {/* Inactive items */}
                {[ShoppingCartOutlined, TeamOutlined].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 rounded-lg"
                  >
                    <Icon
                      style={{ color: 'rgba(31,43,93,0.4)', fontSize: 18 }}
                    />
                    <div
                      className="hidden lg:block h-2 rounded"
                      style={{
                        width: i === 0 ? 80 : 48,
                        backgroundColor: 'rgba(31,43,93,0.1)',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div
                className="flex-1 p-6"
                style={{ backgroundColor: 'rgba(248,249,250,0.1)' }}
              >
                {/* Header row */}
                <div className="flex justify-between items-center mb-6">
                  <div
                    className="h-6 w-32 rounded-md"
                    style={{ backgroundColor: '#F0F3F8' }}
                  />
                  <div
                    className="h-8 w-24 rounded-full"
                    style={{ backgroundColor: 'rgba(138,254,167,0.2)' }}
                  />
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Revenue card */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #F0F3F8',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      className="h-4 w-16 rounded mb-4"
                      style={{ backgroundColor: '#F0F3F8' }}
                    />
                    <div
                      className="text-2xl font-bold mb-2 font-outfit"
                      style={{ color: '#1F2B5D' }}
                    >
                      KES 450K
                    </div>
                    <MiniBarChart />
                  </div>
                  {/* Orders card */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #F0F3F8',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      className="h-4 w-20 rounded mb-4"
                      style={{ backgroundColor: '#F0F3F8' }}
                    />
                    <div
                      className="text-2xl font-bold mb-2 font-outfit"
                      style={{ color: '#1F2B5D' }}
                    >
                      1,204
                    </div>
                    {/* Donut placeholder */}
                    <div className="flex items-center justify-center h-16">
                      <div
                        className="w-14 h-14 rounded-full"
                        style={{
                          border: '4px solid #FFE700',
                          borderTop: '4px solid #0800F0',
                          borderRight: '4px solid #80E4F1',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* List rows */}
                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #F0F3F8',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    className="h-4 w-24 rounded mb-4"
                    style={{ backgroundColor: '#F0F3F8' }}
                  />
                  <div className="space-y-3">
                    {[{ status: '#8AFEA7' }, { status: '#F7B344' }].map(
                      ({ status }, i) => (
                        <div
                          key={i}
                          className="h-8 rounded flex items-center justify-between px-3"
                          style={{ backgroundColor: 'rgba(248,249,250,0.5)' }}
                        >
                          <div
                            className="h-2 rounded w-1/3"
                            style={{ backgroundColor: 'rgba(31,43,93,0.1)' }}
                          />
                          <div
                            className="h-2 rounded w-1/4"
                            style={{ backgroundColor: 'rgba(31,43,93,0.1)' }}
                          />
                          <div
                            className="h-2 rounded w-1/6"
                            style={{ backgroundColor: status }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Illustrative data caption (Section 3.2 compliance) */}
            <div
              className="py-1.5 px-4 text-center text-xs font-medium font-sans border-t"
              style={{
                backgroundColor: 'rgba(248,249,250,0.85)',
                color: 'rgba(31,43,93,0.6)',
                borderColor: '#F0F3F8',
              }}
            >
              Product screen with illustrative data
            </div>
          </div>

          {/* Floating badge — Payment received */}
          <FloatingBadge
            animClass="animate-float-delayed"
            style={{ right: -32, top: 48, padding: '12px 16px' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#8AFEA7' }}
            >
              <CheckOutlined
                style={{ color: '#1F2B5D', fontSize: 16, fontWeight: 700 }}
              />
            </div>
            <div>
              <div
                className="text-sm font-bold font-outfit"
                style={{ color: '#1F2B5D' }}
              >
                Payment Received
              </div>
              <div
                className="text-xs font-outfit"
                style={{ color: 'rgba(31,43,93,0.6)' }}
              >
                via M-Pesa • Just now
              </div>
            </div>
            <div
              className="font-bold ml-2 font-outfit"
              style={{ color: '#5CE07A' }}
            >
              +KSh 4,500
            </div>
          </FloatingBadge>

          {/* Floating badge — Inventory alert */}
          <FloatingBadge
            animClass="animate-float"
            style={{ left: -24, bottom: 80, padding: '10px 14px' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#0800F0' }}
            >
              <BellOutlined style={{ color: '#fff', fontSize: 14 }} />
            </div>
            <div>
              <div
                className="text-xs font-bold font-outfit"
                style={{ color: '#1F2B5D' }}
              >
                Inventory Alert
              </div>
              <div
                className="font-outfit"
                style={{ color: 'rgba(31,43,93,0.6)', fontSize: 10 }}
              >
                Running low on Product X
              </div>
            </div>
          </FloatingBadge>
        </div>
      </div>
    </section>
  );
};

export default Hero;
