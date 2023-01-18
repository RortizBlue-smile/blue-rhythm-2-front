import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import { api } from '../services/apiService'
import { getTimeDiff } from '../services/utilsService'

const initialState = {
	list: [],
	publicList: [],
	isLoading: false,
	isUpdating: 'none',
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
			return Promise.reject(ex.message)
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
			return Promise.reject(ex.message)
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
			return Promise.reject(ex.message)
		}
	}
)
export const updatePlaylist = createAsyncThunk(
	'playlists/updatePlaylist',
	async (payload, creator) => {
		try {
			const response = await api.patch(`/playlist/${payload.id}`, {
				songs: payload.songs,
			})
			return response.data
		} catch (err) {
			return Promise.reject(ex.message)
		}
	}
)
const playlists = createSlice({
	name: 'playlists',
	initialState,
	reducers: {
		resetUpdating: (state) => {
			state.isUpdating = 'none'
		},
	},
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
				state.list = [...action.payload.data]

				if (action.payload.success !== 'cache')
					state.lastFetch = DateTime.now().toSeconds()
			})
			.addCase(fetchPlaylists.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(createPlaylist.pending, (state) => {
				state.isUpdating = 'updating'
			})
			.addCase(createPlaylist.fulfilled, (state, action) => {
				state.isUpdating = 'done'
				state.lastFetch = null
			})
			.addCase(createPlaylist.rejected, (state) => {
				state.isUpdating = 'error'
			})
			.addCase(updatePlaylist.pending, (state, action) => {
				state.isUpdating = 'updating'
			})
			.addCase(updatePlaylist.fulfilled, (state, action) => {
				state.isUpdating = 'done'
				state.lastFetch = null
			})
			.addCase(updatePlaylist.rejected, (state) => {
				state.isUpdating = 'error'
			})
	},
})

export const { resetUpdating } = playlists.actions

export default playlists.reducer
