/** @type {import('tailwindcss').Config}  */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1080px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          main: withOpacity("--primary-main"),
        },
        background: {
          default: withOpacity("--background-default"),
          paper: withOpacity("--background-paper"),
        },
        text: {
          main: withOpacity("--text-main"),
        },
        "white-blue": "#E3F6FF",
        "white-blue-30": "#caf0f8",
        "white-blue-50": "#8ecae6",
        "white-blue-100": "#F2F7FF",
        "white-blue-200": "#89C2D9",
        "white-blue-300": "#61A5C2",
        "white-blue-400": "#468FAF",
        "navy-blue-200": "#1A659E",
        "navy-blue-400": "#00408F",
        "navy-blue-500": "#0B409C",
        "deep-blue": "#00296B",
        "dark-blue": "#001D3D",
        "yellow-brown-100": "#FFEE99",
        "yellow-brown-500": "#FDC500",
        "yellow-brown-400": "#EDC531",
        "yellow-brown-300": "#FAD643",
        "yellow-brown-200": "#FDD85D",
        "yellow-brown-600": "#FDBE34",
        "red-pastel-600": "#cc444b",
        "red-pastel-500": "#f08080",
        "red-pastel-400": "#f4978e",
        "red-pastel-300": "#f8ad9d",
        "red-pastel-200": "#ffb5a7",
        "red-pastel-100": "#fcd5ce",
      },
    },
  },
  plugins: [],
}
