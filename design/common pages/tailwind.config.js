/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineClamp: {
        8: '8',
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
      },
      height:{
        '697px': "697px",
        '315px' : "315px",
        '65px': "65px",
        '75px': "75px",
        '55px': "55px",
        "51px":"51px",
        '50px': "50px",
        '57px': "57px",
        '232px': "232px",
        '338px': "338px",
        'footerinfo' : "calc(100% - 155px)",
      },
      width:{
        '419px' : "419px",
        '292px' : "292px",
        '161px' : "161px",
        '95per' : "95%",
        'formsubscribe' : "calc(100% - 475px)",
        'formsubscribemob' : "calc(100% - 64px)",
      },
      fontFamily: {
        danablack: ["Dana_black"],
        danabold: ["Dana_bold"],
        danamedium: ["Dana_medium"],
        danaregular: ["Dana_regular"],
      },
      borderWidth:{
        '7px' : '7px',
      },
      borderRadius:{
        '44px' : '44px',
      },
      margin:{
        "69px" : "69px",
        "10px" : "10px",
        "27px" : "27px",
      },
      lineHeight:{
        "64px":"64px",
        "51px":"51px",
        "34px":"34px",
        "24px":"24px",
      },
      
    },
  },
  plugins: [],
}