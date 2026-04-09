import {
  BankOutlined,
  GlobalOutlined,
  ShopOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import React from 'react';

import { USE_CASES } from '@/constants/landingData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Shop:    <ShopOutlined   style={{ fontSize: 22 }} />,
  Bank:    <BankOutlined   style={{ fontSize: 22 }} />,
  Global:  <GlobalOutlined style={{ fontSize: 22 }} />,
  Wallet:  <WalletOutlined style={{ fontSize: 22 }} />,
};

// Icon text color for each use case based on bg contrast
const ICON_TEXT_COLOR: Record<string, string> = {
  '#8AFEA7': '#1F2B5D', // mint bg → dark text
  '#0800F0': '#ffffff',
  '#F7B344': '#ffffff',
  '#1F2B5D': '#ffffff',
};

const UseCases: React.FC = () => {
  return (
    <section id="usecases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 font-outfit"
            style={{ color: '#1F2B5D' }}
          >
            Who is Basepoint for?
          </h2>
          <p className="text-lg font-outfit" style={{ color: 'rgba(31,43,93,0.6)' }}>
            Whatever your size or industry, we have the tools to help you grow.
          </p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((uc) => (
            <div
              key={uc.id}
              className={`flex gap-6 p-6 rounded-3xl border transition-all group ${uc.hoverBorder} hover:shadow-lg`}
              style={{ backgroundColor: 'rgba(248,249,250,0.5)', borderColor: '#F0F3F8' }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: uc.iconBg,
                  color: ICON_TEXT_COLOR[uc.iconBg] ?? '#fff',
                }}
              >
                {ICON_MAP[uc.iconKey]}
              </div>

              {/* Text */}
              <div>
                <h4
                  className="text-xl font-bold mb-2 font-outfit"
                  style={{ color: '#1F2B5D' }}
                >
                  {uc.title}
                </h4>
                <p
                  className="leading-relaxed font-outfit"
                  style={{ color: 'rgba(31,43,93,0.6)' }}
                >
                  {uc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
