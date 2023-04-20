/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
    "./pages/index.tsx",
    "./components/header.tsx",
    "./components/banner.tsx",
    "./components/productList.tsx",
    "./components/productItem.tsx",
  ],
  theme: {
    extend: {
      colors : {
        amazon_blue :{
          light : '#232f3e',
          default : '#131921'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp')
  ],
}
