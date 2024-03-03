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
        darkerGray: '#443B3B',
        linkBlue: '#404F84',
        blackText: '#111010',
        activeWhite: '#E5E5DF',
        primaryBorderColor: '#827D7D',
        buttonTextColor: '#1C1B1B',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'gray-005': 'rgba(217, 217, 217, 0.05)',
        grayBorder: '#888D8E',
        green: '#CAE871',
        mediaLine: '#252525',
        mediaTime: '#C9C4C1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '3/4scHeight': '75vh',
        '1/3scHeight': '33.333333vh',
      },
    },
  },
  plugins: [],
}

export default config
