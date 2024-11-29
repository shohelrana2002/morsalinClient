/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-minus-240": "calc(100vh - 178px)",
      },
      fontFamily: {
        text_font: ' "DM Sans", "sans-serif" ',
      },
    },
  },
  plugins: [require("daisyui")],
};
