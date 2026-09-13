/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D4FF",
        dark: "#0a0e27",
        secondary: "#1a1f3a",
      },
    },
  },
  plugins: [],
}
