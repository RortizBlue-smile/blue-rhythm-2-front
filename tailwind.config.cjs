/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				half: '50%',
			},
			colors: {
				orange: '#ff7849',
				yellow: '#ffc82c',
				darkBlue1: '#03031F',
				darkBlue2: '#1C1C4B',
			},
			fontFamily: {
				andika: ['Andika', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif'],
			},
			gridTemplateAreas: {
				layout: ['menu main main', 'menu main main', 'player player player'],
			},
			gridTemplateColumns: {
				layout: 'minmax(250px, 1fr) 3fr 1fr',
				musicPlayer: 'minmax(250px, 1fr) 2fr 1fr 1fr',
				gridList: 'repeat(auto-fit, minmax(256px, 1fr))',
			},
			gridTemplateRows: {
				layout: `1fr 1fr 100px`,
				main: '1fr 4fr',
				menu: '1fr 3fr',
			},
			gridAutoRows: {
				gridList: 'minmax(350px, max-content)',
			},
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas'),
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('@tailwindcss/forms'),
	],
}
