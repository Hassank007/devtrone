/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRightt: {
         '0%': { transform: 'translateX(-100%)' }, // start off-screen left
          '100%': { transform: 'translateX(0)' }, 
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marqueeRightt: 'marqueeRightt 15s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xxs': '320px',
        'xs': '375px',
        's': '425px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        
        "primary-yellow": "#ffad00",
        "bg-yellow":"#fff8ea",
      
      },
      fontFamily: {
       
        LexenDeca: ["var(--font-lexen-deca)"],
      },
    },
  },
  plugins: [
  
  ],
};
