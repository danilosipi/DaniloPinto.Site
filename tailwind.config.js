const withOpacityValue =
  (variable) =>
    ({ opacityValue } = {}) => {
      if (opacityValue === undefined) {
        return `rgb(var(${variable}) / 1)`;
      }
      return `rgb(var(${variable}) / ${opacityValue})`;
    };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        xl: '3rem',
      },
    },
    extend: {
      colors: {
        primary: {
          900: withOpacityValue('--color-primary-900'),
          700: withOpacityValue('--color-primary-700'),
          500: withOpacityValue('--color-primary-500'),
        },
        accent: withOpacityValue('--color-accent'),
        background: withOpacityValue('--color-bg'),
        foreground: withOpacityValue('--color-text'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(4, 39, 67, 0.08)',
      },
    },
  },
  plugins: [],
};
