import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import { api } from '../services/apiService'
import { getTimeDiff } from '../services/utilsService'

const initialState = {
	list: [],
	publicList: [],
	isLoading: false,
	lastFetch: null,
}
export const fetchPublicPlaylists = createAsyncThunk(
	'playlists/fetchPublicPlaylists',
	async (payload, creator) => {
		try {
			const state = creator.getState().music.playlists
			if (state.lastFetch) {
				const timediff = getTimeDiff(state.lastFetch)
				if (timediff.minutes < 5)
					return Promise.resolve({ success: 'cache', data: state.publicList })
			}
			const response = await api.get('/playlist/publics')
			console.log(response.data)
			return response.data
		} catch (err) {
			return err.message
		}
	}
)
export const fetchPlaylists = createAsyncThunk(
	'playlists/fetchPlaylists',
	async (payload, creator) => {
		try {
			const state = creator.getState().music.playlists
			if (state.lastFetch) {
				const timediff = getTimeDiff(state.lastFetch)
				if (timediff.minutes < 5)
					return Promise.resolve({ success: 'cache', data: state.list })
			}
			const response = await api.get('/playlist')
			return response.data
		} catch (err) {
			return err.message
		}
	}
)
export const createPlaylist = createAsyncThunk(
	'playlists/createPlaylist',
	async (payload, creator) => {
		try {
			const response = await api.post('/playlist/', { ...payload })
			return response.data
		} catch (err) {
			return err.message
		}
	}
)
export const updatePlaylist = createAsyncThunk(
	'playlists/updatePlaylist',
	async (payload, creator) => {
		try {
			const response = await api.patch('/playlist/', { songs: [payload] })
			return response.data
		} catch (err) {
			return err.message
		}
	}
)
const playlists = createSlice({
	name: 'playlists',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchPublicPlaylists.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchPublicPlaylists.fulfilled, (state, action) => {
				state.isLoading = false
				state.publicList = [...action.payload.data]
				if (action.payload.success !== 'cache')
					state.lastFetch = DateTime.now().toSeconds()
			})
			.addCase(fetchPublicPlaylists.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(fetchPlaylists.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchPlaylists.fulfilled, (state, action) => {
				state.isLoading = false
				state.list.push(action.payload.data)

				if (action.payload.success !== 'cache')
					state.lastFetch = DateTime.now().toSeconds()
			})
			.addCase(fetchPlaylists.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const {} = playlists.actions

export default playlists.reducer
