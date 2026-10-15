import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

interface CTASectionProps {
  title?: string;
  body?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  note?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = 'Make the business clearer. Start with Duka.',
  body = 'Start with Duka to record sales, track stock and issue receipts. Build a clearer picture of your business, then explore more of Base as your needs grow.',
  primaryText = 'Start with Duka',
  primaryLink = '/start',
  secondaryText = 'Get setup help',
  secondaryLink = '/demo',
  note = 'Availability, scope and support terms are confirmed before work begins.',
}) => {
  return (
    <section className="py-20 px-6 bg-white font-sans">
      <div
        className="max-w-6xl mx-auto rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden shadow-xl"
        style={{ backgroundColor: '#1F2B5D' }}
      >
        {/* Subtle accent gradients */}
        <div
          className="absolute rounded-full pointer-events-none opacity-40"
          style={{
            width: 320,
            height: 320,
            backgroundColor: '#8AFEA7',
            filter: 'blur(80px)',
            top: -100,
            right: -100,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none opacity-30"
          style={{
            width: 320,
            height: 320,
            backgroundColor: '#0800F0',
            filter: 'blur(80px)',
            bottom: -100,
            left: -100,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p
            className="text-base lg:text-lg mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            {body}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <Button
              type="primary"
              size="large"
              onClick={() => history.push(primaryLink)}
              className="w-full sm:w-auto h-auto px-8 py-3.5 rounded-full font-bold bg-mint border-mint text-navy hover:bg-white hover:border-white transition-all shadow-md"
            >
              {primaryText}
            </Button>
            {secondaryText && (
              <Button
                size="large"
                ghost
                onClick={() => history.push(secondaryLink)}
                className="w-full sm:w-auto h-auto px-8 py-3.5 rounded-full font-bold text-white border-white/40 hover:border-white hover:bg-white/10 transition-all"
              >
                {secondaryText}
              </Button>
            )}
          </div>

          {note && <p className="mt-6 text-xs text-white/60 mb-0">{note}</p>}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
