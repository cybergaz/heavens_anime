/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        poppins : ['"Poppins"', 'sans-serif'],
        quicksand : ['"Quicksand"', 'sans-serif'],
        greatvibes : ['"Great Vibes"', 'cursive'],
        montserrat : ['"Montserrat Alternates"', 'sans-serif'],
      },
      colors: {
        main: '#12141E',
        submain : '#00FFA3',
        rare : '#35F3FF',
        rare2 : '#848484',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
