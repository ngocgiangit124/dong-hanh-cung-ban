// tailwind.config.js
module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js'
    ],
    theme: {
        screens: {
            'sm': '360px',
            // 'sm': '640px',
            'tl': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        fontFamily: {
            san: ['Encode Sans Expanded'],
        },
        extend: {
            backgroundColor: {
                colorinput: '#F3F4F7',

            },
            colors: {
                cyan: '#9cdbff',
                color1472BE: '#1472BE'
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
            }
        },
        minWidth: {
            '0': '0',
            '115': '115px',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        }
    }
}