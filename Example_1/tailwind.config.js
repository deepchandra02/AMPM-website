module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mpurple: "#25215c",
        mblue: "#69c7ed",
        mgrey: "#231f20",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        hero: "url('./images/about_us_bg.svg')",
      },
      textUnderlineOffset: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
