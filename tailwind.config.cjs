module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily : {
    "archivo" : ['Archivo Black', "sans-serif"] ,
    "barlow" : ['Barlow', "sans-serif"],
    "bree" : ['Bree Serif', "serif"],
    "courgette" : ['Courgette', "cursive"],
    "dancing" : ['Dancing Script', "cursive"],
    "gideon" : ['Gideon Roman', "cursive"],
    "great" : ['Great Vibes', "cursive"],
    "inter" : ['Inter', "sans-serif"],
    "kanit" : ['Kanit', "sans-serif"],
    "lobster" : ['Lobster', "cursive"],
    "nunito" : ['Nunito', "sans-serif"],
    "sans" : ['Open Sans', "sans-serif"],
    "pacifico" : ['Pacifico', "cursive"],
    "paytone" : ['Paytone One', "sans-serif"],
    "playfair" : ['Playfair Display', "serif"],
    "poppins" : ['Poppins', "sans-serif"],
    "serif" : ['PT Serif', "serif"],
    "roboto" : ['Roboto', "sans-serif"],
    "russo" : ['Russo One', "sans-serif"],
    "urbanist" : ['Urbanist', "sans-serif"],
    "lora": ['Lora', 'serif']
  },
  extend: {
      backgroundImage: {
        'bg_one': `linear-gradient(to right, #30534d, rgba(30, 67, 86, 0.6)), url("https://wallpaperaccess.com/full/136934.jpg") `
      },
      colors:{
        "bhc_green":"#30534d",
        "bhc_white":"#f2eee3",
        "card_bg" : "#fdfdff"
      }
}},
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('flowbite/plugin')
  ]
}