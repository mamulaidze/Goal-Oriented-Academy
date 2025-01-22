/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom": "var(--color-primary)",
        "black":{
          "100": "#000",
          "200": "#111",
          "300": "#222",
        }
      }
    },
  },
  plugins: [],
}