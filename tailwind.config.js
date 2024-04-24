/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "primary": "#23232e",
            "secondary": "#141418",
            "nav-primary": "#ff7eee",
            "nav-secondary": "#df49a6",
            "border-primary": "#4b4168",
            "text-primary": "#edecff",
            "background-primary": "#6D639F",
            "input": "#dec9fc",
            "placeholder": "#6F5C8FFF",
            "error": "#ff5555",
            amber: colors.amber,
            red: colors.red,
        },
        extend: {
            rotate: {
                '270': '270deg'
            }
        },
        fontFamily: {
            "open-sans": "'Open Sans', sans-serif",
            "red-hat": "'Red Hat Display', sans-serif"
        },
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
            "mobile": {
                "max": "1023px"
            }
        }
    },
    plugins: [],
}

