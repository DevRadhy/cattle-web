/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        16: "4rem",
      },

      backgroundImage: {
        "blur-border": "linear-gradient(to left, #ffffff, transparent 4%);",
      },

      backgroundColor: {
        green: {
          50: "#eefbf1",
          200: "#ddf7e3",
          300: "#bbf0c7",
          400: "#99e8aa",
          500: "#77e18e",
          600: "#55d972",
          700: "#44ae5b",
          800: "#338244",
          900: "#22572e",
        },
      },
    },
  },
  plugins: [],
};
