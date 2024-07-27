/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens : {
        'md' : '1024px'
      }
    },
  },
  plugins: [],
}

