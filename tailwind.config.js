/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "stokka-dark": "#092a53",
        "stokka-cyan": "#22d3ee",
        "stokka-main": "#06b6d4",
      },
    },
  },
  plugins: [],
};
