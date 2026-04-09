import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div
        className="max-w-6xl mx-auto rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        style={{ backgroundColor: '#1F2B5D' }}
      >
        {/* Glow blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 256,
            height: 256,
            backgroundColor: 'rgba(138,254,167,0.3)',
            filter: 'blur(60px)',
            top: -50,
            right: -50,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 256,
            height: 256,
            backgroundColor: 'rgba(8,0,240,0.4)',
            filter: 'blur(60px)',
            bottom: -50,
            left: -50,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-outfit">
            Ready to start{' '}
            <span style={{ color: '#8AFEA7' }}>achieving more?</span>
          </h2>
          <p
            className="text-lg mb-10 font-outfit"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Join thousands of African businesses using Basepoint to scale their operations,
            simplify management, and boost sales.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <a
              href="#"
              className="w-full sm:w-auto text-center font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg font-outfit"
              style={{
                backgroundColor: '#8AFEA7',
                color: '#1F2B5D',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(138,254,167,0.4)',
                display: 'block',
              }}
            >
              Create Free Account
            </a>
            <a
              href="#"
              className="w-full sm:w-auto text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg font-outfit"
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'rgba(255,255,255,0.3)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              }}
            >
              Talk to Sales
            </a>
          </div>

          <p
            className="mt-6 text-sm font-outfit"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            No credit card required • 14-day free trial on premium features
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
