module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        celeste: `#B4F3E7`,
        spacecadet: `#273043`,
        raisinblack: `#1D2434`,
        lavenderblue: `#CCCFFF`,
        inchworm: `#CAFF85`,
        lightcoral: `#FF686B`,
        pinklace: `#FCDDF2`,
        imperialred: `#F02D3A`,
        maxyellowred: `#FFC145`,
        flame: `#EA7148`,
        cerise: `#DD5577`,
        lightcyan: `#CDEDF6`,

        dustygray: `#989898`,
        darkgray: `#5f667c`,
        gray: `#a5a5a7`,
        lightgray: `#eaecf0`,
        athensgray: `#f1f3f6`,
        geyser: `#d0d6e2`,
        shark: `#191a1b`,
        electricviolet: `#794dff`,
        champagne: `#fae2da`,
        gin: `#dbeae4`,
        vanillaice: `#f3deea`,
        mineshaft: `#2e2e2e`,
      },
      fontSize: {
        '30': '30px',
        '40': '40px'
      },
      spacing: {
        '1.25': '0.3125rem',
        '2.5': '0.625rem',
        '3.75': '0.9375rem',
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '9': '2.25rem',
        '12.5': '3.125rem',
        '25': '6.25rem',
        '50': '12.5rem',
        '50px': '50px',
        '80px': '80px',
        '140': '140px',
        '150px': '150px',
        '291px': '291px',
        '450': `450px`,
        '491': `491px`,
        '500px': '500px',
        '550': `550px`,
      },
      gridTemplateColumns: {
        '65-35': `65fr 35fr`,
        '60-40': `60fr 40fr`,
        '55-45': `55fr 45fr`,
        '45-55': `45fr 55fr`,
        '460-440': `460px 440px`,
        '500-360': `500px 360px`,
        '250-auto': `275px auto`,
        '300-auto': `300px auto`,
        'auto-140': `auto 145px`,
        'auto-250': `auto 250px`,
        '14-11-11': `14fr 11fr 11fr`
      },
      lineHeight: {
        'extra-tight': '1.17',
        'weird': '1.39',
        'awkawrd': '1.46',
        'spacious': '1.67',
        'vibing': '1.75',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '40vw': '40vw',
        '89vw': '89vw',
      },
      maxHeight: {
        '75vh': '75vh'
      }
    },
    scale: {
      '250': '2.5',
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
    extend: {
      backgroundColor: ['disabled'],
      opactiy: ['disabled'],
      cursor: ['disabled'],
    }
  },
  plugins: [],
}
