import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import { api } from '../services/apiService'
import { getTimeDiff } from '../services/utilsService'

const initialState = {
	list: [],
	isLoading: false,
	lastFetch: null,
}
export const fetchSongs = createAsyncThunk(
	'songs/fetchSongs',
	async (payload, creator) => {
		try {
			const state = creator.getState().music.songs
			if (state.lastFetch) {
				const timediff = getTimeDiff(state.lastFetch)
				if (timediff.minutes < 5)
					return Promise.resolve({ success: 'cache', data: state.list })
			}
			const response = await api.get('/songs')
			return response.data
		} catch (err) {
			return err.message
		}
	}
)

const songs = createSlice({
	name: 'songs',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchSongs.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchSongs.fulfilled, (state, action) => {
				state.isLoading = false
				state.list = action.payload.data ?? []
				if (action.payload.success !== 'cache')
					state.lastFetch = DateTime.now().toSeconds()
			})
			.addCase(fetchSongs.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const {} = songs.actions

export default songs.reducer
