/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "rgb(2,3,5)",
        "card-dark": "rgb(24,27,34)",
      },
    },
  },
  plugins: [],
};
