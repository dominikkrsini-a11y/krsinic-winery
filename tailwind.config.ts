import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        cream: 'var(--cream)',
        'ink-soft': 'var(--ink-soft)',
        gold: 'var(--gold)',
        'gold-light': 'var(--gold-light)',
        terra: 'var(--terra)',
        surface: 'var(--surface)',
        olive: 'var(--olive)',
        'hero-bg': 'var(--hero-bg)',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'ui-serif', 'Georgia', 'serif'],
        jost: ['var(--font-jost)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
