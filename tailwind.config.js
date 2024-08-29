
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "Red": "hsl(14, 86%, 42%)",
        "Green": "hsl(159, 69%, 38%)",
        "Rose_50": "hsl(20, 50%, 98%)",
        "Rose_100": "hsl(13, 31%, 94%)",
        "Rose_300": "hsl(14, 25%, 72%)",
        "Rose_400": "hsl(7, 20%, 60%)",
        "Rose_500": "hsl(12, 20%, 44%)",
        "Rose_900": "hsl(14, 65%, 9%)"
      },
      fontFamily : {
        'font_redhot' : 'Red Hat Text, sans-serif'
      }
    },
  },
  plugins: [],
}

