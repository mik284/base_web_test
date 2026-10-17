/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{tsx,ts}',
    './src/components/**/*.{tsx,ts}',
    './src/layouts/**/*.{tsx,ts}',
  ],
  corePlugins: {
    // Disable Tailwind's preflight reset to avoid conflicts with Ant Design
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        navy: '#1F2B5D',
        mint: {
          DEFAULT: '#8AFEA7',
          light: '#9DE89F',
          dark: '#5CE07A',
        },
        electric: '#0800F0',
        yellow: '#FFE700',
        cyan: '#80E4F1',
        orange: '#F7B344',
        surface: '#F8F9FA',
        surfaceAlt: '#F0F3F8',
      },
      fontFamily: {
        sans: [
          'Outfit',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(31, 43, 93, 0.08)',
        glow: '0 0 30px rgba(138, 254, 167, 0.4)',
        card: '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }], // 16px base, 1.5 line-height
        lg: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 20px (H6)
        xl: ['1.563rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 25px (H5)
        '2xl': ['1.953rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 31.25px (H4)
        '3xl': ['2.441rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }], // 39.06px (H3)
        '4xl': ['3.052rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // 48.83px (H2)
        '5xl': ['3.815rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }], // 61.04px (H1)
        '6xl': ['4.768rem', { lineHeight: '1', letterSpacing: '-0.04em' }], // 76.3px
        '7xl': ['5.96rem', { lineHeight: '1', letterSpacing: '-0.05em' }], // 95.36px
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        marquee: 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
