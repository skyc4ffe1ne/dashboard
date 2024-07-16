/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        "main-width": "calc(100% - 83px)",
      },
      height: {
        "sidebar-height": "calc(100% - 230px)",
      },
      gridTemplateColumns: {
        "card-grid": "minmax(138px,1fr) minmax(0px,1fr) minmax(138px, 1fr)",
        "card-grid-lg":
          "minmax(218px,1fr) minmax(207px,1fr) minmax(218px,1fr) minmax(207px,1fr)",
        "card-grid-xl": "265px minmax(218px,1fr) 265px",
      },
      gridTemplateRows: {
        "card-rows": "288px 144px 144px",
        "card-rows-sm": "144px 288px 144px",
        "card-rows-xl": "144px 121px 144px",
      },
    },
  },
  plugins: [],
};
