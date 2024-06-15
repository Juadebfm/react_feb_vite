/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ss_purple: "#2F1893",
        ss_blue: "#1E0E62",
        ss_green: "#25DAC5",
        ss_gray: "#808080",
      },
      fontSize: {
        ss_heading: "60px",
        ss_paragraph: "22px",
        ss_btn_text: "20px",
        ss_logo_text: "24px",
        ss_body: "18px",
      },
      fontFamily: {
        ss_dm_sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
