import {
  CalendarOutlined,
  CheckOutlined,
  FileTextOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import React, { ReactNode } from 'react';

/**
 * Decorative illustration of the Duka routine in the site's browser-window
 * style. It deliberately shows no figures: it is not a product screen, and
 * says so in its caption (spec §3.2).
 */

const ROWS: { icon: ReactNode; label: string; color: string; bar: number }[] = [
  {
    icon: <ShoppingCartOutlined />,
    label: 'Record the sale',
    color: '#8AFEA7',
    bar: 70,
  },
  {
    icon: <InboxOutlined />,
    label: 'Track the stock',
    color: '#80E4F1',
    bar: 55,
  },
  {
    icon: <FileTextOutlined />,
    label: 'Issue the receipt',
    color: '#F7B344',
    bar: 40,
  },
];

const HeroIllustration: React.FC = () => (
  <figure className="m-0 w-full">
    <div className="relative animate-float">
      <div
        aria-hidden="true"
        className="bg-white rounded-3xl overflow-hidden border border-solid border-surfaceAlt shadow-soft"
      >
        <div className="h-14 flex items-center px-6 justify-between border-b border-solid border-surfaceAlt bg-surface/50">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow" />
            <span className="w-3 h-3 rounded-full bg-mint" />
          </div>
          <span className="w-40 h-6 rounded-full bg-white border border-solid border-surfaceAlt" />
        </div>
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="h-4 w-28 rounded bg-surfaceAlt" />
            <span className="h-6 w-20 rounded-full bg-mint/30" />
          </div>
          {ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-4 rounded-2xl border border-solid border-surfaceAlt p-4"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-navy shrink-0"
                style={{ backgroundColor: row.color }}
              >
                {row.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="m-0 font-bold text-navy">{row.label}</p>
                <span
                  className="block mt-2 h-2 rounded bg-surfaceAlt"
                  style={{ width: `${row.bar}%` }}
                />
              </div>
              <span className="w-7 h-7 rounded-full bg-mint/40 flex items-center justify-center text-navy text-xs">
                <CheckOutlined />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden sm:flex absolute -left-6 -bottom-6 z-20 bg-white rounded-2xl shadow-xl border border-solid border-surfaceAlt items-center gap-3 px-4 py-3 animate-float-delayed"
      >
        <span className="w-9 h-9 rounded-xl bg-electric text-white flex items-center justify-center">
          <CalendarOutlined />
        </span>
        <span>
          <span className="block text-sm font-bold text-navy">
            Review the day
          </span>
          <span className="block text-xs text-navy/70">
            Choose one thing to check
          </span>
        </span>
      </div>
    </div>
    <figcaption className="mt-10 text-xs text-navy/70 text-center">
      Illustration of the Duka routine — not a product screen.
    </figcaption>
  </figure>
);

export default HeroIllustration;
