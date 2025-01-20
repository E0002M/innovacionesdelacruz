import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Fuentes clásicas para un estilo vintage
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Fuente para el cuerpo del texto
        serif: ['Playfair Display', 'serif'], // Fuente para títulos
      },
      // Paleta de colores vintage
      colors: {
        primary: '#8B4513', // Marrón cálido para botones y encabezados
        secondary: '#D2B48C', // Beige claro para fondos o acentos
        accent: '#A0522D', // Marrón rojizo para detalles pequeños
        background: '#F5F5DC', // Beige claro para el fondo principal
        text: '#5C4033', // Marrón oscuro para textos
        highlight: '#FFE4C4', // Beige cremoso para destacar elementos
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
  ],
};

export default config;
