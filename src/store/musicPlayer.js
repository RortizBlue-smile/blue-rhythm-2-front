import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	actualPlaylist: [],
	shuffleOrder: [],
	playing: false,
	loop: false,
	shuffle: false,
	volumeLevel: 25,
	isChanching: false,
	currentSong: {
		name: '',
		artist: '',
		image: '',
		link: '',
	},
	index: null,
}

const musicPlayer = createSlice({
	name: 'musicPlayer',
	initialState,
	reducers: {
		resetIndex: (state, action) => {
			state.index = null
		},
		resetSong: (state) => {
			state.currentSong = null
		},
		changeSong: (state) => {
			state.isChanching = true
		},
		togglePlaying: (state, action) => {
			state.playing = !state.playing
		},
		toggleLoop: (state, action) => {
			state.loop = !state.loop
		},
		toggleShuffle: (state, action) => {
			state.shuffle = !state.shuffle
		},
		toggleLoading: (state, action) => {
			state.isLoading = !state.isLoading
		},
		play: (state, action) => {
			state.playing = false
			const { songList } = action.payload
			Array.isArray(songList)
				? (state.actualPlaylist = action.payload.songList)
				: (state.actualPlaylist = [action.payload.songList])
			state.shuffleOrder = []
			state.currentSong = songList[0]
			state.index = 0
		},
		addToList: (state, action) => {
			state.actualPlaylist.push(...action.payload.songList)
		},
		nextSong: (state) => {
			state.playing = false
			if (state.index < state.actualPlaylist.length - 1) {
				state.index += 1
			} else {
				state.index = 0
			}
			state.currentSong = state.actualPlaylist[state.index]
		},
		autoNext: (state) => {
			state.playing = false
			if (state.index < state.actualPlaylist.length - 1) {
				state.index += 1
			} else if (state.loop) {
				state.index = 0
			}
			state.currentSong = state.actualPlaylist[state.index]
		},
		prevSong: (state) => {
			state.playing = false
			if (state.index - 1 < 0) {
				state.index = state.actualPlaylist.length - 1
			} else {
				state.index = 0
			}
			state.currentSong = state.actualPlaylist[state.index]
		},
		changeVolume: (state, action) => {
			state.volumeLevel = action.payload
		},
	},
})

export const {
	resetIndex,
	resetSong,
	togglePlaying,
	toggleShuffle,
	toggleLoop,
	toggleLoading,
	changeVolume,
	changeSong,
	play,
	addToList,
	nextSong,
	autoNext,
	prevSong,
} = musicPlayer.actions

export default musicPlayer.reducer
