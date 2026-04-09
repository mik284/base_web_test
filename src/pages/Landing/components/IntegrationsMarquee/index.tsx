import React from 'react';

/** A single logo item in the marquee */
const LogoItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 shrink-0">
    {children}
  </div>
);

/** Duplicated set of logos — rendered twice to create seamless infinite loop */
const LogoSet: React.FC = () => (
  <>
    {/* M-PESA */}
    <LogoItem>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: '#22c55e' }}
      >
        M
      </div>
      <span className="font-bold text-xl font-outfit" style={{ color: '#1F2B5D' }}>
        M-PESA
      </span>
    </LogoItem>

    {/* Pesapal */}
    <LogoItem>
      <div className="flex">
        <div
          className="w-6 h-6 rounded-full"
          style={{ backgroundColor: '#2563eb', marginRight: -8, mixBlendMode: 'multiply' }}
        />
        <div
          className="w-6 h-6 rounded-full"
          style={{ backgroundColor: '#F7B344', mixBlendMode: 'multiply' }}
        />
      </div>
      <span className="font-bold text-xl tracking-tight font-outfit" style={{ color: '#1F2B5D' }}>
        pesapal
      </span>
    </LogoItem>

    {/* Stripe */}
    <LogoItem>
      <span className="font-bold text-2xl tracking-tight font-outfit" style={{ color: '#6366f1' }}>
        Stripe
      </span>
    </LogoItem>

    {/* VISA */}
    <LogoItem>
      <span
        className="font-black italic text-xl font-outfit"
        style={{ color: '#1e3a8a', letterSpacing: 2 }}
      >
        VISA
      </span>
    </LogoItem>

    {/* Mastercard */}
    <LogoItem>
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#ef4444' }} />
        <div
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: '#FFE700', marginLeft: -8 }}
        />
      </div>
      <span className="font-bold text-lg ml-1 font-outfit" style={{ color: '#1F2B5D' }}>
        Mastercard
      </span>
    </LogoItem>

    {/* Airtel Money */}
    <LogoItem>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: '#ef4444' }}
      >
        A
      </div>
      <span className="font-bold text-xl font-outfit" style={{ color: '#1F2B5D' }}>
        Airtel Money
      </span>
    </LogoItem>

    {/* Flutterwave */}
    <LogoItem>
      <span className="font-bold text-xl font-outfit" style={{ color: '#f97316' }}>
        Flutterwave
      </span>
    </LogoItem>
  </>
);

const IntegrationsMarquee: React.FC = () => {
  return (
    <section
      className="py-10 border-y overflow-hidden relative"
      style={{ backgroundColor: '#F8F9FA', borderColor: '#F0F3F8' }}
    >
      {/* Label */}
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase font-outfit"
          style={{ color: 'rgba(31,43,93,0.5)' }}
        >
          Seamless Integrations &amp; Payments
        </p>
      </div>

      {/* Scrolling track */}
      <div className="flex whitespace-nowrap overflow-hidden relative">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F8F9FA, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F8F9FA, transparent)' }}
        />

        {/* Animated track — two copies create the seamless loop */}
        <div className="flex animate-marquee items-center gap-16 px-8">
          <LogoSet />
        </div>
        {/* Aria-hidden duplicate */}
        <div className="flex animate-marquee items-center gap-16 px-8" aria-hidden>
          <LogoSet />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsMarquee;
