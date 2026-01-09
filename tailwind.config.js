/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'rgb(210, 0, 1)',
          blue: 'rgb(0, 117, 227)',
        },
        text: {
          black: '#000000',
          grey: '#808080',
          darkGrey: 'rgb(43, 43, 43)',
        },
        background: 'rgb(250, 250, 250)',
        chat: {
          outgoing: '#0F62FE',
          incoming: '#F1F5F9',
        },
      },
      fontFamily: {
        serif: ['Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}

