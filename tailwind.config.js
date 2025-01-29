/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lora: ['Lora', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    colors: {
        warning:'#F9B234',
        darkgreen: '#051B16',
        yellow: '#FFC42A',
        darkyellow:'#FAC05B',
        lightslate:'#ADADAD',
        blue:'#007BF1',
        skyblue:'#4E90CC',
        lightgray:'#F8F9FA',
        purple:'#2C358C',
        lightblack:'#00000066',
        green:'#1ABC9C',
        lightslate:'#EAEAEF'
      },
      backgroundPosition: {
        'right-bottom': 'right bottom', // Adds a new class for bottom-right positioning
      },
    },
  },
  plugins: [],
}