/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nexa: "Nexa",
        clash: "Clash Display",
        zen: "Zen Dots",
        orbitron: "Orbitron",
        monument: "Monument",
        mesa: "Mesa",
      },
      boxShadow: {
        btn: "0px 0px 20px 5px #D231BCBA",
      },
      backgroundImage: {
        headerBg: "url('/header-bg.png')",
        heroBg: "url('/hero-bg.png')",
        aboutBg: "url('/about-bg.png')",
        beginBg: "url('/begin-bg.png')",
        footerBg: "url('/footer-bg.png')",
        map: "url('/map.png')",
        borderWhite:
          "linear-gradient(270deg, rgba(96, 220, 255, 0) -2.67%, #FFFFFF 53.21%, rgba(96, 220, 255, 0) 102.52%)",
        investingText:
          "linear-gradient(91.36deg, #FFFFFF -0.81%, #FFFFFF 32.04%, #FF01C7 44.97%, #00FFF0 58.43%, #FFFFFF 71.9%, #FFFFFF 102.6%)",
        textGr:
          "linear-gradient(114.45deg, #3DDEED -3.75%, #5B7EFA 53.72%, #CB00DD 107.29%)",
      },
      colors: {
        "pinkish-purple": "#D231BC",
        gray: "#c8c8c8",
        neonBlue: "#23DCFF",
      },
      animation: {
        bounce: "bounce 5s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
