import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-50': 'rgba(17, 17, 17, 0.5)',
        'dark-100': '#111111',
        'dark-200': '#1a1a1a',
        'dark-300': '#262626',
        'dark-400': '#333333',
        'dark-500': '#404040',
        'dark-600': '#4d4d4d',
        'dark-700': '#595959',
        'dark-800': '#666666',
        'dark-900': '#737373',
        'gold': '#D4AF37',
        'gold-light': '#E5C76B',
        'gold-dark': '#B38F2E',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.8)',
        'text-tertiary': 'rgba(255, 255, 255, 0.6)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #111111, #1a1a1a)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #E5C76B)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
