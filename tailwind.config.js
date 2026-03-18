/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "stoka-dark": "#092a53",
        "stoka-cyan": "#22d3ee",
        "stoka-main": "#06b6d4",
      },
    },
  },
  plugins: [],
};
