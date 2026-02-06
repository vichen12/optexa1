/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'optexa-dark': '#092a53',
        'optexa-cyan': '#22d3ee',
        'optexa-main': '#06b6d4',
      }
    },
  },
  plugins: [],
}