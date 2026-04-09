import { StarFilled } from '@ant-design/icons';
import React from 'react';

import { STATS, TESTIMONIALS } from '@/constants/landingData';

/** Five-star rating row */
const StarRating: React.FC = () => (
  <div className="flex items-center gap-1 mb-6" style={{ color: '#FFE700' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <StarFilled key={i} style={{ fontSize: 16 }} />
    ))}
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#F0F3F8' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Stats row ─────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center"
          style={{ borderBottom: '1px solid rgba(31,43,93,0.1)' }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="py-8"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? '1px solid rgba(31,43,93,0.1)'
                    : 'none',
              }}
            >
              <div
                className="text-5xl font-black mb-2 font-outfit"
                style={{ color: '#1F2B5D' }}
              >
                {stat.value}
              </div>
              <div
                className="font-medium font-outfit"
                style={{ color: 'rgba(31,43,93,0.6)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Testimonials grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl shadow-sm"
              style={{ backgroundColor: '#fff', border: '1px solid #F8F9FA' }}
            >
              <StarRating />

              <p
                className="text-lg mb-8 leading-relaxed font-outfit"
                style={{ color: '#1F2B5D' }}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg font-outfit"
                  style={{ backgroundColor: t.avatarBg, color: t.avatarTextColor }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-bold font-outfit"
                    style={{ color: '#1F2B5D' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-sm font-outfit"
                    style={{ color: 'rgba(31,43,93,0.6)' }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
