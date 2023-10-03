/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      colors: {
        secondaryText: "#568E40",
        textColor: "#333333",
        primaryColor: "#5E9C46",
        headerColor: "#425038",
        linkColor: "#666666",
        bgColor: "#FEF7E3",
      },
      backgroundImage: {
        heroBg: "url('../public/images/plus_icon.svg')",
        greenMobileBg: "url('../public/images/GreenBackgroundMobile.png')",
        greenWebBg: "url('../public/images/Green-Background.png')",
        ring: "url('../public/images/Backgroundcircle.png')",
      },
      // animation: {
      //   shine: "shine 1s",
      // },
      // keyframes: {
      //   shine: {
      //     "0%": {transform: 'translateY(0px)'},
      //     "50%": {transform: 'translateY(-100%)'},
      //     "100%": { transform: 'translateY(-100%)'},
      //   },
      // },
    },
  },
  plugins: [],
};
