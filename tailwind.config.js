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
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(31, 43, 93, 0.08)',
        glow: '0 0 30px rgba(138, 254, 167, 0.4)',
        card: '0 4px 20px rgba(0, 0, 0, 0.03)',
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
