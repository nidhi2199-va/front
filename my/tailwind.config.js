/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Ensure Tailwind scans index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all components inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
