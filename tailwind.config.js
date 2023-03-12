module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        'item': '0px 4px 10px rgba(34, 34, 34, 0.15)'
      }
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: ['34px', '41px'],
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'title-1': ['28px', '34px'],
      'title-2': ['22px', '28px'],
      'title-3': ['20px', '25px'],
      'headline': ['17px', '22px'],
      'body': ['16px', '21px'],
      'callout': ['14px', '19px'],
      'subhead': ['14px', '19px'],
      'footnote': ['13px', '18px'],
      'caption-1': ['12px', '16px'],
      'caption-2': ['10px', '12px'],
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1152px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#35B050',
        900: '#2E8F66',
      },
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#F7F7F8',
        700: '#ECECEC;',
        800: '#AAAAAA',
        900: '#595959',
      },
      'white': '#fff',
      'gray-light': '#d3dce6',
      'primary': '#35B050',
      'secondary': '#2E8F66',
      'dark-gray': '#595959 !important',
      'light-gray': '#AAAAAA',
      'lightest-gray': '#ECECEC',
      'dark-white': '#F7F7F8',
      'error': '#E81103',
      'warning': '#FD881A',
      'apollo-green': '#2C9137',
      'insurance': '#0396E8',
      'transparent': 'transparent'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      primary: ['Montserrat', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
