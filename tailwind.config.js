/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",  // Optional: If using pages dir
    "./src/**/*.{js,jsx,ts,tsx}" // Safe catch-all
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
