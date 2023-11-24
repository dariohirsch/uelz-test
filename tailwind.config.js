/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				customBlue: '#173371',
				customGreen: '#38D4AD',
				customGradient:
					'linear-gradient(282deg, #DDFFF6 6.8%, #DEFFF5 21.61%, #FFF9F2 71.37%, #FFF 106.66%)',
				customWhite: '#FFF',
				customGrey: '#DBDDE0',
			},

			fontFamily: {
				inter: ['Inter'],
			},
		},
	},
	plugins: [],
}
