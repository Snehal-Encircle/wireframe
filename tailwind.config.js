/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lgscreen: {max: '1023px'},
        smscreen: {max: '640px'},
        small: {max: '400px'},
      },

      fontFamily: {
        body: 'Montserrat',
        slider: 'Avenir, sans-serif', 
      },

      fontSize: {
        11: '11px',
        13: '13px',
        15: '15px',
        18: '18px',
        20: '20px',
        24: '24px',
        25: '25px',
        28: '28px',
        30: '30px',
        36: '36px',
        38: '38px',
        48: '48px',
        56: '56px',
      },

      lineHeight: {
        18: '18px',
        30: '30px',
        32: '32px',
        36: '36px',
        37: '37px',
        40: '40px',
        45: '45px',
        50: '50px',
        72: '72px',
        80: '80px',
      },

      colors: {
        skyBlue: '#18A0FB',
        blue: {
          100: '#0eabf7',
        },
        gray: {
          100: '#F5F5F5',
          200: '#4D4D4D',
        },
        gold: '#8F7745'
      },

      width: {
        80: '80px',
        100: '100px',
        132: '132px',
      },

      maxWidth: {
        750: '750px',
      },

      borderRadius: {
        6 : '6px',
      },

      spacing: {
        57: '57px',
        103: '103px',
      },
      
      gap: {
        20: '20px',
        50: '50px',
        60: '60px',
        74: '74px',
        100: '100px',
        148: '148px',
      },

      padding: {
        '10px': '10px',
        14: '14px',
        18: '18px',
        20: '20px',
        21: '21px',
        22: '22px',
        30: '30px',
        32: '32px',
        34: '34px',
        40: '40px',
        45: '45px',
        48: '48px',
        49: '49px',
        60: '60px',
        80: '80px',
        84: '84px',
        100: '100px',
        120: '120px',
        156: '156px',
        160: '160px',
      },

      margin: {
        '10px': '10px',
        18: '18px',
        22: '22px',
        70: '70px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      require('flowbite/plugin')
      addComponents({
          '.container': {
              maxWidth: '100%',
              '@screen sm': {
                  maxWidth: '640px',
              },
              '@screen md': {
                  maxWidth: '768px',
              },
              '@screen lg': {
                  maxWidth: '1024px',
              },
              '@screen xl': {
                  maxWidth: '1280px',
              },
              '@screen 2xl': {
                  maxWidth: '1536px',
              },
          }
      })
  }

],
}