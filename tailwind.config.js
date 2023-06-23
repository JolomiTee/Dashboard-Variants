/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			cabinet: ["CabinetGrotesk-Medium", "sans-serif"],
			'sp-display': ["SP Pro Display", "sans-serif"],
            'product-sans': ["Product Sans", "sans-serif"]
		},
		extend: {
            screens: {
                'mdl': '896px',
                ...defaultTheme.screens,
            },
			fontSize: {
				12: "12px",
				14: "14px",
				16: "16px",
                18: "18px",
                20: '20px',
                24: "24px",
                40: '40px'
			},
            colors: {
                'blok-grey': '#999999',
                'blok-dark': '#3A3A3A',
                'blok-red': '#FC6171',
                'blok-rate-red': '#E77F8D',
                'blok-light-green': '#EEF7F4',
                'blok-dark-green': '#54AE94',
                'blok-rate-green': '#79BDA8',

                'damostik-grey': '#2A2A2A',
                'damostik-black': '#1E1E1E',
                'damostik-faint-blue': '#5F6980',
                'damostik-light-green': '#CFF0DB',
                'damostik-dark-green': '#008C7A',
                'damostik-success': '#008C7A',
                'damostik-pending': '#F5D020',
                'damostik-failed': '#FF5F76'
            },
            fill: {
                'blok-dark-fill': '#3A3A3A',

            },
			backgroundColor: {
                'blok-red': '#FEEEF1',
                'blok-green': '#EFF7F4',
                'blok-component-grey': '#F6F6F6',
                'dark-mode': '#070C0F',
                'searchbar-dark': '#3A3A3A80',

                'damostik-dashboard-grey': '#E3E3E3',
                'damostik-light-green': '#CFF0DB',
                'damostik-dark-green': '#008C7A',
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				'blok-color': "#CBCBCB",
                'damostik-light-green': '#CFF0DB',
			},
            borderRadius: {
                8: '8px',
                12: '12px',
                16: '16px',
            },
		},
	},
	plugins: [],
};
