/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "tmgrey": "#495e57",
        "tmyellow": "#f4ce14" 
      }
    },
  },
  plugins: [],
};
