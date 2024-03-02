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
        lightBrown: '#D9D9D9', // advertbar
        lightGray: '#ECECEC', // exampleSection
        mediumGray: '#D9D9D9', // footer
        darkGray: '#827D7D', // navbar
        linkBlue: '#404F84',
        blackText: '#111010',
        activeWhite: '#E5E5DF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '1/2scHeight': '50vh',
        '1/3scHeight': '33.333333vh',
      },
    },
  },
  plugins: [],
}

export default config
