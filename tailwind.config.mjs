/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extends: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                ovo: ['Ovo', 'serif'],
            },
        },
    },
    plugins: [],

};