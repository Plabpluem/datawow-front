/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": " #243831",
        "success-green":'#49A569',
        "green-100":"#D8E9E4",
        "green-300":"#2B5F44",
        "gray-300":"#939494",
        "gray-100":"#BBC2C0",
        "text-color":"#191919",
        "description-color":"#5B5B5B",
        "text-primary":"#101828",
        "backgroundLight":"#F3F3F3",
        "blackCommunity":'#4A4A4A',
        "borderDefault":"#DADADA",
        "grayHeader":"#1C1C1C",
        "red-critical":"#F23536"
      },
    },
  },
  plugins: [],
};
