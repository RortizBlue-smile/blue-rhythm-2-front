import { configureStore } from '@reduxjs/toolkit'
import musicReducer from './music'
import musicPlayerReducer from './musicPlayer'
import authReducer from './auth'
import responsiveReducer from './responsive'
export const store = configureStore({
	reducer: {
		player: musicPlayerReducer,
		music: musicReducer,
		auth: authReducer,
		responsive: responsiveReducer,
	},
})
