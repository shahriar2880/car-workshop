/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '340px',
        // => @media (min-width: 640px) { ... }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        carWorkshopTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "blue",
          secondary: "teal",

          ".btn-primary":{
            "color": "#fff"
          },
          ".btn-outline.btn-primary:hover":{
            "color": "#fff"
          },
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
