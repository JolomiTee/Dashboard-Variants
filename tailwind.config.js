/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			cabinet: ["CabinetGrotesk-Medium", "sans-serif"],
			'sp-display': ["SP Pro Display", "sans-serif"],
		},
		extend: {
			fontSize: {
				12: "12px",
				14: "14px",
				16: "16px",
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
            },
            fill: {
                'blok-dark-fill': '#3A3A3A',

            },
			backgroundColor: {
				'blok-red': '#FEEEF1',
                'blok-green': '#EFF7F4',
                'blok-component-grey': '#F6F6F6',
                'dark-mode': '#070C0F',
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				'blok-color': "#CBCBCB",
			},
            borderRadius: {
                8: '8px',
                16: '16px',
            },
		},
	},
	plugins: [],
};
