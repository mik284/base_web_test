/**
 * Shared building blocks for marketing pages. Pages compose these so that
 * the Basepoint look (blob backgrounds, pill badges, corner-accent cards,
 * navy glow sections), contrast and CTA behaviour stay consistent.
 */
import { ArrowRightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link, useLocation } from '@umijs/max';
import React, { ReactNode } from 'react';

import { dukaCta, ProductStatus, STATUS_LABEL } from '@/constants/site';
import { track } from '@/utils/analytics';

/* ── Accents ───────────────────────────────────────────────────────── */

export type Accent = 'orange' | 'mint' | 'electric' | 'cyan' | 'yellow';

/** Bright colours for decoration and icons; darker `link` shades for text on light backgrounds. */
export const ACCENTS: Record<
  Accent,
  { corner: string; border: string; icon: string; link: string }
> = {
  orange: {
    corner: 'rgba(247,179,68,0.15)',
    border: 'rgba(247,179,68,0.35)',
    icon: '#F7B344',
    link: '#8A5300',
  },
  mint: {
    corner: 'rgba(138,254,167,0.3)',
    border: 'rgba(92,224,122,0.4)',
    icon: '#3DBE5F',
    link: '#17703A',
  },
  electric: {
    corner: 'rgba(8,0,240,0.1)',
    border: 'rgba(8,0,240,0.2)',
    icon: '#0800F0',
    link: '#0800F0',
  },
  cyan: {
    corner: 'rgba(128,228,241,0.3)',
    border: 'rgba(128,228,241,0.5)',
    icon: '#0891B2',
    link: '#0E6B85',
  },
  yellow: {
    corner: 'rgba(255,231,0,0.25)',
    border: 'rgba(255,231,0,0.5)',
    icon: '#CA8A04',
    link: '#7A6000',
  },
};

const ACCENT_CYCLE: Accent[] = ['orange', 'mint', 'electric', 'cyan', 'yellow'];

/* ── Layout ────────────────────────────────────────────────────────── */

type Tone = 'white' | 'muted' | 'navy';

export const Container: React.FC<{ children: ReactNode; narrow?: boolean }> = ({
  children,
  narrow,
}) => (
  <div
    className={`${
      narrow ? 'max-w-3xl' : 'max-w-7xl'
    } mx-auto px-4 md:px-6 relative z-10`}
  >
    {children}
  </div>
);

/** Soft blurred colour shapes used behind heroes and navy sections. */
const Glow: React.FC<{
  color: string;
  size: number;
  style: React.CSSProperties;
  opacity?: number;
}> = ({ color, size, style, opacity = 0.4 }) => (
  <div
    aria-hidden="true"
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      filter: 'blur(80px)',
      opacity,
      ...style,
    }}
  />
);

export const Section: React.FC<{
  children: ReactNode;
  tone?: Tone;
  id?: string;
  narrow?: boolean;
}> = ({ children, tone = 'white', id, narrow }) => {
  if (tone === 'navy') {
    return (
      <section
        id={id}
        className="py-20 md:py-24 relative overflow-hidden bg-navy text-white"
      >
        <Glow
          color="#0800F0"
          size={600}
          opacity={0.3}
          style={{ top: -200, right: -100, filter: 'blur(100px)' }}
        />
        <Glow
          color="#8AFEA7"
          size={400}
          opacity={0.2}
          style={{ bottom: -100, left: -100, filter: 'blur(120px)' }}
        />
        <Container narrow={narrow}>{children}</Container>
      </section>
    );
  }
  return (
    <section
      id={id}
      className={`py-20 md:py-24 text-navy ${
        tone === 'muted' ? 'bg-surface' : 'bg-white'
      }`}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
};

export const Kicker: React.FC<{ children: ReactNode; onDark?: boolean }> = ({
  children,
  onDark,
}) => (
  <span
    className={`block mb-3 text-sm font-bold uppercase tracking-wider ${
      onDark ? 'text-mint' : 'text-electric'
    }`}
  >
    {children}
  </span>
);

/** The "Achieve More™"-style pill used at the top of heroes. */
export const Pill: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-navy/5 border border-solid border-navy/10">
    <span
      aria-hidden="true"
      className="h-2 w-2 rounded-full bg-mint shrink-0"
    />
    <span className="text-sm font-semibold tracking-wide text-navy">
      {children}
    </span>
  </span>
);

/** Gradient text used for the highlighted part of a heading. */
export const Highlight: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span
    className="text-transparent bg-clip-text"
    style={{ backgroundImage: 'linear-gradient(to right, #0800F0, #3FA9C9)' }}
  >
    {children}
  </span>
);

export const SectionHeading: React.FC<{
  title: ReactNode;
  kicker?: ReactNode;
  body?: ReactNode;
  onDark?: boolean;
  center?: boolean;
}> = ({ title, kicker, body, onDark, center }) => (
  <div
    className={`mb-12 md:mb-16 ${
      center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'
    }`}
  >
    {kicker && <Kicker onDark={onDark}>{kicker}</Kicker>}
    <h2 className="m-0 text-3xl lg:text-4xl font-bold tracking-[-0.02em] leading-[1.15]">
      {title}
    </h2>
    {body && (
      <p
        className={`m-0 mt-4 text-lg leading-relaxed ${
          onDark ? 'text-white/80' : 'text-navy/75'
        }`}
      >
        {body}
      </p>
    )}
  </div>
);

/** Top-of-page section with the hero glow background, for pages with their own layout. */
export const HeroSection: React.FC<{
  children: ReactNode;
  as?: 'section' | 'article';
}> = ({ children, as: Tag = 'section' }) => (
  <Tag className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white text-navy">
    <Glow color="#9DE89F" size={500} style={{ top: 0, left: -150 }} />
    <Glow color="#80E4F1" size={400} style={{ right: -100, top: '15%' }} />
    <Glow
      color="#FFE700"
      size={300}
      opacity={0.25}
      style={{ left: '30%', bottom: 0 }}
    />
    {children}
  </Tag>
);

/** H1 style shared by heroes. */
export const HERO_H1 =
  'm-0 text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.08]';

export const PageHero: React.FC<{
  title: ReactNode;
  /** Shown after the title in gradient text. */
  highlight?: ReactNode;
  kicker?: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
  aside?: ReactNode;
}> = ({ title, highlight, kicker, body, actions, note, aside }) => {
  const center = !aside;
  return (
    <section className="relative pt-32 pb-20 md:pt-36 lg:pb-28 overflow-hidden bg-white text-navy">
      <Glow color="#9DE89F" size={500} style={{ top: 0, left: -100 }} />
      <Glow color="#80E4F1" size={400} style={{ right: -50, top: '20%' }} />
      <Glow
        color="#FFE700"
        size={300}
        opacity={0.3}
        style={{ left: '25%', bottom: 0 }}
      />
      <Container>
        <div
          className={
            aside
              ? 'grid gap-14 lg:grid-cols-2 items-center'
              : 'max-w-4xl mx-auto text-center'
          }
        >
          <div className={center ? 'flex flex-col items-center' : ''}>
            {kicker && <Pill>{kicker}</Pill>}
            <h1 className="m-0 text-[2.5rem] md:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.08]">
              {title}
              {highlight && (
                <>
                  {' '}
                  <Highlight>{highlight}</Highlight>
                </>
              )}
            </h1>
            {body && (
              <p
                className={`m-0 mt-6 text-lg lg:text-xl leading-relaxed text-navy/75 ${
                  center ? 'max-w-2xl' : 'max-w-xl'
                }`}
              >
                {body}
              </p>
            )}
            {actions && (
              <div
                className={`mt-10 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto ${
                  center ? 'justify-center' : ''
                }`}
              >
                {actions}
              </div>
            )}
            {note && (
              <div className={`mt-8 ${center ? 'max-w-2xl text-left' : ''}`}>
                {note}
              </div>
            )}
          </div>
          {aside}
        </div>
      </Container>
    </section>
  );
};

/* ── Content ───────────────────────────────────────────────────────── */

export interface CardItem {
  title: ReactNode;
  body?: ReactNode;
  icon?: ReactNode;
  accent?: Accent;
  badge?: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
  /** Product screen or photo shown in place of the icon tile. */
  media?: ReactNode;
}

export const IconTile: React.FC<{
  icon: ReactNode;
  accent: Accent;
  onDark?: boolean;
}> = ({ icon, accent, onDark }) => (
  <div
    aria-hidden="true"
    className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] shadow-sm"
    style={
      onDark
        ? {
            backgroundColor: ACCENTS[accent].corner,
            color:
              ACCENTS[accent].icon === '#0800F0'
                ? '#9B97FF'
                : ACCENTS[accent].icon,
          }
        : {
            backgroundColor: '#fff',
            border: `1px solid ${ACCENTS[accent].border}`,
            color: ACCENTS[accent].icon,
          }
    }
  >
    {icon}
  </div>
);

/** Cards with an icon tile and a coloured corner accent; glass cards on navy. */
export const CardGrid: React.FC<{
  items: CardItem[];
  columns?: 2 | 3 | 4;
  onDark?: boolean;
}> = ({ items, columns = 3, onDark }) => {
  const cols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];
  return (
    <ul className={`list-none m-0 p-0 grid gap-6 ${cols}`}>
      {items.map((item, i) => {
        const accent = item.accent ?? ACCENT_CYCLE[i % ACCENT_CYCLE.length];
        return (
          <li
            key={i}
            className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-300 ${
              item.wide ? 'md:col-span-2' : ''
            } ${
              onDark
                ? 'bg-white/5 border border-solid border-white/10 hover:bg-white/10'
                : 'bg-surface border border-solid border-surfaceAlt hover:shadow-soft'
            }`}
          >
            {!onDark && (
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 rounded-bl-full transition-transform group-hover:scale-110"
                style={{ backgroundColor: ACCENTS[accent].corner }}
              />
            )}
            <div className="relative z-10 flex flex-col h-full">
              {item.media && <div className="mb-6 -mx-2">{item.media}</div>}
              {item.icon && !item.media && (
                <div className="mb-6">
                  <IconTile icon={item.icon} accent={accent} onDark={onDark} />
                </div>
              )}
              {item.badge && <div className="mb-4">{item.badge}</div>}
              <h3 className="m-0 text-xl lg:text-2xl font-bold tracking-[-0.01em]">
                {item.title}
              </h3>
              {item.body && (
                <p
                  className={`m-0 mt-3 leading-relaxed ${
                    onDark ? 'text-white/75' : 'text-navy/75'
                  }`}
                >
                  {item.body}
                </p>
              )}
              {item.footer && <div className="mt-auto pt-8">{item.footer}</div>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

/** "Explore …" text link with an arrow, coloured to match a card accent. */
export const ArrowLink: React.FC<{
  to: string;
  children: ReactNode;
  accent?: Accent;
}> = ({ to, children, accent = 'electric' }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 font-semibold no-underline transition-all hover:gap-3"
    style={{ color: ACCENTS[accent].link }}
  >
    {children}
    <ArrowRightOutlined aria-hidden="true" />
  </Link>
);

const STEP_COLORS = [
  { bg: '#8AFEA7', fg: '#1F2B5D' },
  { bg: '#0800F0', fg: '#ffffff' },
  { bg: '#F7B344', fg: '#1F2B5D' },
  { bg: '#1F2B5D', fg: '#ffffff' },
];

/** Numbered rows with coloured tiles, in the style of the original audience cards. */
export const Steps: React.FC<{
  items: { title: ReactNode; body: ReactNode }[];
}> = ({ items }) => (
  <ol className="list-none m-0 p-0 grid gap-6 md:grid-cols-2">
    {items.map((item, i) => {
      const color = STEP_COLORS[i % STEP_COLORS.length];
      return (
        <li
          key={i}
          className="group flex gap-6 p-6 rounded-3xl bg-white border border-solid border-surfaceAlt transition-all hover:shadow-lg"
        >
          <span
            aria-hidden="true"
            className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-xl font-bold transition-transform group-hover:scale-110"
            style={{ backgroundColor: color.bg, color: color.fg }}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="m-0 text-xl font-bold">{item.title}</h3>
            <p className="m-0 mt-2 leading-relaxed text-navy/75">{item.body}</p>
          </div>
        </li>
      );
    })}
  </ol>
);

/** A text notice for status lines, service notes and data captions. */
export const Note: React.FC<{ children: ReactNode; onDark?: boolean }> = ({
  children,
  onDark,
}) => (
  <p
    className={`m-0 flex gap-3 rounded-2xl px-5 py-4 text-sm leading-relaxed ${
      onDark
        ? 'bg-white/10 text-white/90 border border-solid border-white/10'
        : 'bg-white/80 text-navy border border-solid border-navy/10 backdrop-blur-sm'
    }`}
  >
    <InfoCircleOutlined aria-hidden="true" className="mt-0.5" />
    <span>{children}</span>
  </p>
);

export const StatusBadge: React.FC<{ status: ProductStatus }> = ({
  status,
}) => {
  const tone =
    status === 'available'
      ? 'bg-mint/30 border-mint'
      : status === 'in_development'
      ? 'bg-orange/15 border-orange'
      : 'bg-cyan/20 border-cyan';
  return (
    <span
      className={`inline-block rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold text-navy whitespace-nowrap ${tone}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
};

/* ── Calls to action ───────────────────────────────────────────────── */

type ButtonVariant = 'primary' | 'secondary' | 'onDark' | 'onDarkSecondary';

const BUTTON_CLASS: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-white border-navy hover:bg-[#2b3a7a] shadow-lg',
  secondary: 'bg-white text-navy border-surfaceAlt hover:border-navy',
  onDark:
    'bg-mint text-navy border-mint hover:bg-white hover:border-white shadow-xl shadow-mint/20',
  onDarkSecondary:
    'bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10',
};

export const ButtonLink: React.FC<{
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  size?: 'sm' | 'md';
  onClick?: () => void;
}> = ({
  to,
  children,
  variant = 'primary',
  external,
  size = 'md',
  onClick,
}) => {
  const sizeClass =
    size === 'sm'
      ? 'min-h-[44px] px-6 py-2 shadow-sm'
      : 'min-h-[52px] px-8 py-3';
  const className = `inline-flex items-center justify-center gap-2 ${sizeClass} rounded-full border-2 border-solid font-bold text-base no-underline transition-all text-center ${BUTTON_CLASS[variant]}`;
  if (external || to.startsWith('#')) {
    return (
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

/** The primary Duka action, labelled for the current provisioning and offer state. */
export const DukaButton: React.FC<{
  variant?: ButtonVariant;
  size?: 'sm' | 'md';
}> = ({ variant = 'primary', size }) => {
  const { pathname } = useLocation();
  const cta = dukaCta();
  return (
    <ButtonLink
      to={cta.href}
      variant={variant}
      size={size}
      onClick={() => track('cta_start_clicked', { route: pathname })}
    >
      {cta.label}
    </ButtonLink>
  );
};

/** Routes to the assisted intake form, preserving where the visitor came from. */
export const HelpButton: React.FC<{
  label?: string;
  query?: Record<string, string>;
  variant?: ButtonVariant;
}> = ({ label = 'Get setup help', query, variant = 'secondary' }) => {
  const { pathname } = useLocation();
  const params = new URLSearchParams({ from: pathname, ...query });
  return (
    <ButtonLink
      to={`/demo?${params.toString()}`}
      variant={variant}
      onClick={() => track('cta_help_clicked', { route: pathname })}
    >
      {label}
    </ButtonLink>
  );
};

/** Navy closing banner with glows; `highlight` renders in mint on a second line. */
export const FinalBanner: React.FC<{
  title: ReactNode;
  highlight?: ReactNode;
  actions: ReactNode;
}> = ({ title, highlight, actions }) => (
  <section className="py-20 md:py-24 px-4 md:px-6 bg-white">
    <div className="max-w-6xl mx-auto rounded-[2.5rem] md:rounded-[3rem] px-6 py-14 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl bg-navy">
      <Glow
        color="#8AFEA7"
        size={256}
        opacity={0.3}
        style={{ top: -50, right: -50, filter: 'blur(60px)' }}
      />
      <Glow
        color="#0800F0"
        size={256}
        opacity={0.4}
        style={{ bottom: -50, left: -50, filter: 'blur(60px)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="m-0 text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-white">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-mint">{highlight}</span>
            </>
          )}
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          {actions}
        </div>
      </div>
    </div>
  </section>
);

/* ── FAQ ───────────────────────────────────────────────────────────── */

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC<{ items: FAQItem[]; title?: string }> = ({
  items,
  title = 'Frequently asked questions',
}) => (
  <Section tone="muted" narrow>
    <h2 className="m-0 mb-10 text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-center">
      {title}
    </h2>
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl bg-white border border-solid border-surfaceAlt px-6 py-5 transition-shadow hover:shadow-card open:shadow-soft"
        >
          <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center gap-4">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 w-8 h-8 rounded-full bg-mint/30 flex items-center justify-center text-navy transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="m-0 mt-3 leading-relaxed text-navy/75">{item.a}</p>
        </details>
      ))}
    </div>
  </Section>
);

/** FAQPage structured data built from the FAQs actually rendered on the page. */
export const faqSchema = (items: FAQItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});
