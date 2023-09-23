/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      orange: {
        1: "#E9ECEF",
      },
    },
  },
  plugins: [],
}