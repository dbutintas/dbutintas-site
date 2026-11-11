/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F1115',
          900: '#0B0D10',
          800: '#14171C',
          700: '#1D2027',
          600: '#2A2E37',
          500: '#3D4250',
        },
        paper: {
          DEFAULT: '#FAF9F6',
          50: '#FFFFFF',
          100: '#F7F5F1',
          200: '#EFECE5',
        },
        ember: {
          DEFAULT: '#E8461F',
          50: '#FDEEE8',
          100: '#FBD9CB',
          300: '#F0824F',
          400: '#EC6635',
          500: '#E8461F',
          600: '#C93815',
          700: '#A22C10',
        },
        cobalt: {
          DEFAULT: '#1B4CE0',
          50: '#EAF0FE',
          200: '#B7C9FA',
          400: '#4B74E8',
          500: '#1B4CE0',
          600: '#153CB4',
          700: '#112F8C',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(15, 17, 21, 0.06)',
        card: '0 8px 30px rgba(15, 17, 21, 0.08)',
        lift: '0 20px 45px rgba(15, 17, 21, 0.16)',
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #E8461F 0%, #EC6635 55%, #F0824F 100%)',
        'splash-gradient':
          'radial-gradient(circle at 20% 20%, rgba(232,70,31,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(27,76,224,0.30), transparent 40%), radial-gradient(circle at 60% 80%, rgba(236,102,53,0.25), transparent 45%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
