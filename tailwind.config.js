/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          DEFAULT: '#FFB703',
          50: '#FFFBEA',
          100: '#FFF3C4',
          200: '#FFE68B',
          300: '#FFD752',
          400: '#FFC726',
          500: '#FFB703',
          600: '#D99600',
          700: '#B27600',
          800: '#8C5700',
          900: '#663B00',
        },
        saffron: {
          DEFAULT: '#E76F51',
          50: '#FDF2EF',
          100: '#F9DDD5',
          200: '#F4B9AA',
          300: '#EE947E',
          400: '#E76F51',
          500: '#D65131',
          600: '#B33C20',
          700: '#8E2C15',
          800: '#6A1E0D',
          900: '#471106',
        },
        accentGold: '#F4D35E',
        creamBg: '#FFF8E7',
        darkBg: '#0F172A',
        darkCard: '#1E293B',
        textSlate: '#1E293B',
        highlightAmber: '#F59E0B',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'spiritual-gradient': 'linear-gradient(135deg, #FFB703 0%, #E76F51 100%)',
        'golden-radial': 'radial-gradient(circle at center, rgba(255, 183, 3, 0.15) 0%, transparent 70%)',
        'dark-spiritual': 'linear-gradient(180deg, #0F172A 0%, #1E1B4B 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'golden-glow': '0 0 25px rgba(255, 183, 3, 0.4)',
        'saffron-glow': '0 0 25px rgba(231, 111, 81, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
}
