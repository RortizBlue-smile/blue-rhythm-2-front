import { combineReducers, createSlice } from '@reduxjs/toolkit'
import albums from './albums'
import songs from './songs'
const music = combineReducers({
	name: 'music',
	albums,
	songs,
})

export default music
