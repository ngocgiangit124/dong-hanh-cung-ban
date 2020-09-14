// tailwind.config.js
module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js'
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            backgroundColor: {
                colorinput: '#F3F4F7',
            },
            colors: {
                cyan: '#9cdbff',
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
            }
        }
    }
}