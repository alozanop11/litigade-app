/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D0A144",
        "secondary-color-2": "#784F33",
        "secondary-color-4": "#295C7A",

        "light-background-color": "#FFFFFF",
        "dark-background-color": "#252B42",
        "background-gradient-1": "#295C7A",

        "second-text-color": "#737373",
        "light-text-color": "#FFFFFF",
        "text-color": "#252B42",

        "muted-color": "#BDBDBD",
      },
    },
  },
  plugins: [],
};
