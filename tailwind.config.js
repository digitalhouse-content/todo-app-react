/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25273D",
        secondary: "#171823",
        tertiary: "#534191",
        quaternary: "#393A4B",
      }
    },
  },
  plugins: [],
}

