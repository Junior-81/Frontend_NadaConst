import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'wheel-up-down': {
          '0%': { opacity: '0' },
          '30%': { opacity: '1' },
          '100%': {
            transform: 'translateY(18px)',
            opacity: '0',
          },
        },
      },
      animation: {
        'wheel-up-down': 'wheel-up-down 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
