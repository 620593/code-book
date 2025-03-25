/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1E293B",
        aqua: {
          300: "#7FDBFF",
          500: "#00FFFF",
        },
      },
    },
  },
  plugins: [],
};
