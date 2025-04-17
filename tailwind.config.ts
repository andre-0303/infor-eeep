import type { Config } from 'tailwindcss';

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F5F5F5",
                primary: "#3B82F6",
            },
        },
    },
    plugins: [],
} satisfies Config;