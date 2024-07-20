/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'baby': '376px'
      },
      margin: {
        "mrhalf": "margin-right: 50%;" 
      },
      size: {
        '32r': '32rem',
      },
      width: {
        "comp": "52rem"
      }, 
      height: {
        "comp": "42rem"
      },
      fontSize: {
        'bigxl': '30rem',
        'smallxl': '15rem'
      },
      backgroundImage: {
        'githubbg': "url('src/assets/githublogo.png')"
      },
      transitionTimingFunction: {
        "easeInAndOut": "cubic-bezier(0.4, 0, 1, 1)"
      },
      transitionDelay: {
        "longdelay": "3s"
      },
      keyframes: {
        longpacity: {
          "0%": { opacity: 0 },
          "90%": {opacity: 0},
          "100%": { opacity: 1 }
        },
        pop: {
          "0%": {transform:"scale(0)"},
          "80%": {transform:'scale(1.1)'},
          "100%": {transform:"scale(1)"}
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' }
        },
        slideRight: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'}
        },
        slideRightBack: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        slideLeft: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'}
        },
        slideUp: {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        custompacityrev: {
          "100%": { opacity: 0 },
          "0%": { opacity: 1 }
        },
        rotate: {
          "0%": {transform: "rotate(0)"},
          "100%": {transform: "rotate(360)"}
        },
        fadeout: {
          "100%": { opacity: 0 },
          "0%": { opacity: 1 }
        },
        fadein : {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeInOut: {
          "0%": {"opacity":"0"},
          "60%": {"opacity":"100%"},
          "100%": {"opacity":"0"}
        },
        custompacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        widthExpand: {
          "0%": {"width":"0"},
          "100%": {"width": "full"}
        },
        noScroll: {
          "0%": {"overflow": "hidden", "opacity": "0"},
          "99%": {"overflow" : "hidden"},
          "100%": {"overflow": "visible"}
        }
      },
      animation: {
        longpacity: "longpacity 7s ease",
        twospacity: "longpacity 1s ease",
        shortpacity: "custompacity 1s ease",
        bounce: "bounce 2s infinite",
        longpacityBounce: "longpacity 2s ease-in, bounce 2s infinite",
        slideRight: "slideRight 1.5s ease, custompacity 1.5s ease",
        slideRightBack: "slideRightBack 1.5s ease, custompacityrev 1.5s ease",
        slideUp: "slideUp 2s easeInOut",
        popIn: "pop 1s ease",
        slideDown: "slideDown 1s ease",
        widthExpand: "widthExpand 2s ease ",
        noScroll: "noScroll 5s",
        fadeout: "fadeout 1s",
        rotateIn: "pop 1s ease",
        fadeInOut: "fadeInOut 2s ease infinite",
        fadein: "fadein 2s ease"
      }
    }
    },
    plugins: [
      require("tailwindcss-animation-delay"),

    ],
  }
  

