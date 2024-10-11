/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'w-1/3',
    'w-2/3',
    'w-3/3'
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      width: {
        '1/3': '33.3333%',
        '3/3': '100%',
      },
    },
  },
  plugins: [],
};
