/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        lightgrey: 'var(--lightgrey)',
        lightblue: 'var(--lightblue)',
        black50: 'var(--black-50)',
        black40: 'var(--black-40)',
        black30: 'var(--black-30)',
        white: 'var(--white)',
        black: 'var(--black)',
        grey: 'var(--grey)',
      },
    },
    screens: {
      xl: { max: '1440px' },
      lg: { max: '1340px' },
      md: { max: '1180px' },
      sm: { max: '780px' },
      xs: { max: '480px' },
    },

    fontFamily: {
      roboto: ['var(--font-roboto)', 'sans'],
      josefin: ['var(--font-Josefin)', 'sans'],
    },
  },
  plugins: [],
};
