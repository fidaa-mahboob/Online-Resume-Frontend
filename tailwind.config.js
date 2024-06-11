import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        typing: "typing 4s steps(17) infinite alternate, blink .6s infinite"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "50%": {
            width: "50%"
          }, 
          "100%": {
            width: "100%"
          }
        },
        blink: {
          '0%': {
            borderColor: "black"
          },
  
          '50%': {
            borderColor: "transparent"
          },
          
          '100%': {
            borderColor: "black"
          },
        }
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  }
}
