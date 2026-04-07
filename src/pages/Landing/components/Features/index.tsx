import {
  AppstoreOutlined,
  BankOutlined,
  RiseOutlined,
  SafetyOutlined,
} from '@ant-design/icons';
import React from 'react';

import { FEATURES } from '@/constants/landingData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Appstore: <AppstoreOutlined style={{ fontSize: 22 }} />,
  Rise:     <RiseOutlined     style={{ fontSize: 22 }} />,
  Bank:     <BankOutlined     style={{ fontSize: 22 }} />,
  Safety:   <SafetyOutlined   style={{ fontSize: 22 }} />,
};


const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#1F2B5D', color: '#fff' }}
    >
      {/* Background glows */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          backgroundColor: '#0800F0',
          filter: 'blur(100px)',
          opacity: 0.3,
          top: -200,
          right: -100,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#8AFEA7',
          filter: 'blur(120px)',
          opacity: 0.2,
          bottom: -100,
          left: -100,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span
              className="font-bold tracking-wider uppercase text-sm mb-2 block font-outfit"
              style={{ color: '#8AFEA7' }}
            >
              Enterprise Grade
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-outfit">
              Built for scale,
              <br />
              designed for you.
            </h2>
          </div>
          <p
            className="max-w-md pb-2 text-lg font-outfit"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Under the hood, Basepoint uses world-class infrastructure to ensure your business never
            misses a beat, whether you have 1 store or 100.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-[2rem] transition-colors backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                  'rgba(255,255,255,0.1)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor =
                  'rgba(255,255,255,0.05)')
              }
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: feature.iconBg,
                  color: feature.iconColor,
                }}
              >
                {ICON_MAP[feature.iconKey]}
              </div>
              <h4 className="text-xl font-bold mb-3 font-outfit">{feature.title}</h4>
              <p
                className="text-sm leading-relaxed font-outfit"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
