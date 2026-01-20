/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
                serif: ['Georgia', 'serif'],
            },
            colors: {
                gold: '#C5A059',
                dark: '#1a1a1a',
            }
        },
    },
    plugins: [],
}