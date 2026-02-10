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
        'space': {
          'dark': '#0A0F2D',
          'navy': '#142157',
          'blue': '#2B3A8A',
          'cyan': '#00BFFF',
          'ice': '#9CC7E8',
          'lava': '#FF4500',
        },
        palette: {
          dustyBlue: '#7BA4BA',
          mint: '#9DD5BE',
          lightGreen: '#C8E6C9',
          cream: '#FFFAF0',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
