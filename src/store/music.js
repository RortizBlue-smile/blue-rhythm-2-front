import { combineReducers, createSlice } from '@reduxjs/toolkit'
import albums from './albums'
import songs from './songs'
import playlists from './playlists'
const music = combineReducers({
	name: 'music',
	albums,
	songs,
	playlists,
})

export default music
