/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blacks: "#212121",
        red: "#EF233C",
      },

    },
  },
  plugins: [require('flowbite/plugin')],
};
