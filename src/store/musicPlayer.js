import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	actualPlaylist: [],
	shuffleOrder: [],
	playing: false,
	loop: false,
	shuffle: false,
	volumeLevel: 100,
	actualSong: {
		name: '',
		artist: '',
		image: '',
		time: 0,
	},
}

const musicPlayer = createSlice({
	name: 'musicPlayer',
	initialState,
	reducers: {
		togglePlaying: (state, action) => {
			state.playing = !state.playing
		},
		toggleLoop: (state, action) => {
			state.loop = !state.loop
		},
		toggleShuffle: (state, action) => {
			state.shuffle = !state.shuffle
		},
		nextSong: (state, action) => {},
		changeVolume: (state, action) => {
			state.volumeLevel = action.payload
		},
	},
})

export const { togglePlaying, toggleShuffle, toggleLoop, changeVolume } =
	musicPlayer.actions

export default musicPlayer.reducer
