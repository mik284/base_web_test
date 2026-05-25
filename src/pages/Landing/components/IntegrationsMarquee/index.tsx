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
        style={{ backgroundColor: '#ed9c10' }}
      >
        N
      </div>
      <span
        className="font-bold text-xl font-outfit"
        style={{ color: '#1F2B5D' }}
      >
        Nuba Spa
      </span>
    </LogoItem>

    {/* Pesapal */}
    <LogoItem>
      <span
        className="font-bold text-xl tracking-tight font-outfit"
        style={{ color: '#1F2B5D' }}
      >
        Soba Cafe
      </span>
    </LogoItem>

    {/* Stripe */}
    <LogoItem>
      <span
        className="font-bold text-2xl tracking-tight font-outfit"
        style={{ color: '#6366f1' }}
      >
        Soba Pilates
      </span>
    </LogoItem>

    {/* VISA */}
    <LogoItem>
      <span
        className="font-black italic text-xl font-outfit"
        style={{ color: '#1e3a8a', letterSpacing: 2 }}
      >
        Guacca
      </span>
    </LogoItem>

    {/* Mastercard */}
    <LogoItem>
      <span
        className="font-bold text-lg ml-1 font-outfit"
        style={{ color: '#1F2B5D' }}
      >
        MamaFua
      </span>
    </LogoItem>

    {/* Airtel Money */}
    <LogoItem>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: '#ef4444' }}
      >
        L
      </div>
      <span
        className="font-bold text-xl font-outfit"
        style={{ color: '#1F2B5D' }}
      >
        Loc Haven
      </span>
    </LogoItem>

    {/* Flutterwave */}
    <LogoItem>
      <span
        className="font-bold text-xl font-outfit"
        style={{ color: '#f97316' }}
      >
        Cleaning School Kenya
      </span>
    </LogoItem>

    {/* VISA */}
    <LogoItem>
      <span
        className="font-black italic text-xl font-outfit"
        style={{ color: '#1e3a8a', letterSpacing: 2 }}
      >
        Yami Cosmetics
      </span>
    </LogoItem>
    {/* M-PESA */}
    <LogoItem>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: '#22c55e' }}
      >
        BK
      </div>
      <span
        className="font-bold text-xl font-outfit"
        style={{ color: '#1F2B5D' }}
      >
        BK Phone Repair
      </span>
    </LogoItem>
    {/* Airtel Money */}
    <LogoItem>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: '#ef4444' }}
      >
        S
      </div>
      <span
        className="font-bold text-xl font-outfit"
        style={{ color: '#1F2B5D' }}
      >
        StellarCiti
      </span>
    </LogoItem>

    {/* Flutterwave */}
    <LogoItem>
      <span
        className="font-bold text-xl font-outfit"
        style={{ color: '#f97316' }}
      >
        Maringa Homes
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
          Trusted by leading brands
        </p>
      </div>

      {/* Scrolling track */}
      <div className="flex whitespace-nowrap overflow-hidden relative">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #F8F9FA, transparent)',
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #F8F9FA, transparent)',
          }}
        />

        {/* Animated track — two copies create the seamless loop */}
        <div className="flex animate-marquee items-center gap-16 px-8">
          <LogoSet />
        </div>
        {/* Aria-hidden duplicate */}
        <div
          className="flex animate-marquee items-center gap-16 px-8"
          aria-hidden
        >
          <LogoSet />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsMarquee;
