import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  container: {
    center: true,
    padding: "1rem",
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"], // Add themes here
  },
}
