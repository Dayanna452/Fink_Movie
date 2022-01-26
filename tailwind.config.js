module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        redLight: '#E44B4A',
        greenLight: '#61BEAC',
        yellowLight: '#F9F7E8',
        greenLand: '#A0D6C5',
        greenLogo: '#37CA8A',
        brownLand: '#EFE8D8',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rambla: ['Rambla', 'sans-serif'],
        average: ['Average', 'serif'],
      },
      height: {
        98: '26rem',
        100: '27rem',
        104: '30rem',
        120: '36.3rem',
      },
      width: {
        78: '19.42rem',
        104: '28rem',
        120: '36.3rem',
      },
    },
  },
  plugins: [],
};
