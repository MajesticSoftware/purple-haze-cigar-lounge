import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          deep: '#6B21A8',
          vivid: '#7C3AED',
          light: '#A855F7',
          glow: '#C084FC',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D07A',
          dark: '#B8860B',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          lighter: '#1A1A2E',
          card: '#16161D',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-glow': 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
export default config
