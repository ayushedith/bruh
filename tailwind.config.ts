import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          dark: '#4338CA'
        }
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(64rem 32rem at 50% -20%, rgba(99,102,241,0.25), transparent)',
        'hero-radial-2': 'radial-gradient(64rem 32rem at 120% 120%, rgba(217,70,239,0.18), transparent)'
      }
    }
  },
  plugins: []
}

export default config
