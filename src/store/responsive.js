import { createSlice } from '@reduxjs/toolkit'

const responsive = createSlice({
	name: 'responsive',
	initialState: {
		menu: false,
	},
	reducers: {
		toggleMobile: (state) => {
			state.menu = !state.menu
		},
	},
})

export const { toggleMobile } = responsive.actions

export default responsive.reducer
