/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/hero-pattern.jpg')",
        'hero-contact-pattern': "url('./images/pattern-contact.svg')",
      },
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
        grcolor:{
        'fromcard' : "var(--gradient-from-card)" ,
        'tocard': "var(--gradient-to-card)" ,
        }
      },
      height:{
        
        '304px': "304px",
        '172px': "172px",
        '253px': "253px",
        '441px': "441px",
        '285px': "285px",
        '499px': "499px",
        '260px': "260px",
        '183px': "183px",
        '102px': "102px",
        '697px': "697px",
        '315px' : "315px",
        '210px' : "210px",
        '56px': "56px",
        '65px': "65px",
        '60px': "60px",
        '75px': "75px",
        '55px': "55px",
        "51px":"51px",
        '50px': "50px",
        '57px': "57px",
        '232px': "232px",
        '338px': "338px",
        '90px': "90px",
        '97px': "97px",
        'footerinfo' : "calc(100% - 155px)",
        'halfwindow' : "calc(100vh / 2)",

      },
      minHeight:{
        '210px' : '210px',
      },
      minWidth:{
        '118px':'118px',
      },
      width:{
        '304px': "304px",

        '147px': "147px",
        '299px' : "299px",
        '314px' : "314px",
        '749px' : "749px",
        '419px' : "419px",
        '410px' : "410px",
        '355px' : "355px",
        '60px': "60px",
        '292px' : "292px",
        '161px' : "161px",
        '133px' : "133px",
        '95per' : "95%",
        '49per' : "49%",
        '97px': "97px",
        'formsubscribe' : "calc(100% - 475px)",
        'formsubscribemob' : "calc(100% - 64px)",
        '32per' : "32%",
      },
      fontFamily: {
        danablack: ["Dana_black"],
        danabold: ["Dana_bold"],
        danamedium: ["Dana_medium"],
        danaregular: ["Dana_regular"],
        danaextrabold: ["Dana_ExtraBold"],
      },
      fontSize:{
        '64px' : '64px',
      },
      borderWidth:{
        '7px' : '7px',
        '3px' : '3px',
      },
      borderRadius:{
        '94px' : '94px',
        '44px' : '44px',
        '10px' : '10px',
      },
      margin:{
        "47px" : "47px",
        "84px" : "84px",
        "69px" : "69px",
        "10px" : "10px",
        "27px" : "27px",
      },
      lineHeight:{
        "64px":"64px",
        '60px': "60px",
        "51px":"51px",
        "34px":"34px",
        "24px":"24px",
        "48px":"48px",
        "50px":"50px",
        "22px":"22px",
      },
      keyframes: {
        airplane: {
          '0%': {
            transform: 'translateY(50px) scale(0.8)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
        tada: {
          "0%": {
              transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
              transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
              transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
              transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
              transform: "scale3d(1, 1, 1)",
          },
      },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        jiggle: {
          "0%": {
              transform: "scale3d(1, 1, 1)"
          },
          "30%": {
              transform: "scale3d(1.25, 0.75, 1)"
          },
          "40%": {
              transform: "scale3d(0.75, 1.25, 1)"
          },
          "50%": {
              transform: "scale3d(1.15, 0.85, 1)"
          },
          "65%": {
              transform: "scale3d(0.95, 1.05, 1)"
          },
          "75%": {
              transform: "scale3d(1.05, 0.95, 1)"
          },
          "100%": {
              transform: "scale3d(1, 1, 1)"
          },
      },
      },
      animation: {
        airplane: 'airplane 2s ease-out',
        tada: 'tada 1s ease-in-out 0.25s 1',
        jiggle: 'jiggle 0.6s ease-in-out 0.25s 1',
        'slide-in-left': 'slideInLeft 1.5s ease-out',
        'slide-in-right': 'slideInRight 1.5s ease-out',
      },
    },
  },
  plugins: [],
}