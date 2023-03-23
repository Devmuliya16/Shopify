/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        mc:"10px"
      },
      keyframes:{
        reduceheight: {
          "0%":{height:"0%"},
          "100%":{height:"80%"}
        },
        dropdown:{
          "from":{height:"0%"},
          "to":{height:"280%"}
        }
      }
    },
    animation:{
      redheight: 'reduceheight 0.5s ',
      dropdown: 'dropdown 0.8s '
    }
  },
  plugins: [],
}