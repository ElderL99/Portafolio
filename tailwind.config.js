/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "var(--gold)",
        blue: "var(--blue)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        title: ["var(--font-title)"],
      },
    },
  },
  plugins: [],
};
