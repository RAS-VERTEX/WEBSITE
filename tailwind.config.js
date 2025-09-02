// FILE PATH: /tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#002653",
        "brand-grey": "#545454",
        primary: {
          50: "#e6f2ff",
          100: "#cce5ff",
          200: "#99ccff",
          300: "#66b2ff",
          400: "#3399ff",
          500: "#0080ff",
          600: "#002653",
          700: "#001f42",
          800: "#001831",
          900: "#001020",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "ui-sans-serif", "system-ui"],
        poppins: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-bebas-neue)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
