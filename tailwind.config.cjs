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
				layoutSM: ['main ', 'mainn', 'player'],
			},
			gridTemplateColumns: {
				layout: 'minmax(250px, 1fr) 3fr 1fr',
				musicPlayer: 'minmax(250px, 1fr) 2fr 1fr 1fr',
				gridList: 'repeat(auto-fit, minmax(256px, 1fr))',
				songInfo: '350px 1fr ',
				rowList: '4fr 1fr',
				layoutMob: 'minmax(320px, 1fr)',
				musicPlayerMob: 'minmax(200px, 1fr) 1fr',
			},
			gridTemplateRows: {
				layout: `1fr 1fr 100px`,
				main: '1fr 4fr',
				menu: '1fr 3fr',
				mainMob: '150px 1fr',
			},
			gridAutoRows: {
				gridList: 'minmax(350px, max-content)',
			},
			screens: {
				mobile: {
					max: '640px',
				},
				// desktopMini: {
				// 	max: '1000px',
				// },
			},
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas'),
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('@tailwindcss/forms'),
	],
}
