import { configureStore } from '@reduxjs/toolkit'
import basic from './basic'
export const store = configureStore({
	reducer: { basic },
})
