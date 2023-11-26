/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				customBlue: '#173371',
				customBackground: '#E9F7F3',
				customGreen: '#38D4AD',
				customGradient:
					'linear-gradient(282deg, #DDFFF6 6.8%, #DEFFF5 21.61%, #FFF9F2 71.37%, #FFF 106.66%)',
				customWhite: '#FFF',
				customGrey: '#DBDDE0',
				customYellow: '#FFFBDE',
				customBlueback: '#1C80BD',
				customTeal: '#38D4AD',
				customGreenback: '#7EECD0',
			},

			fontFamily: {
				inter: ['Inter'],
			},
		},
	},
	plugins: [],
}
