/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
      },
      colors: {
        'lg': '#21b0fe', 
        'teal': '#fed700', 
        'reds': '#fe218b',
        'exsup': '#F4D741',
        'exsup1': '#F02582',
        'exsup2': '#17066F'
      }
    },
  },
  plugins: [],
};
