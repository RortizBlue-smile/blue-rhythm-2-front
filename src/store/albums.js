import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../services/apiService'

const initialState = {
	list: [],
	lastFetch: '',
	isLoading: false,
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
	try {
		const response = await api.get('/albums')
		return response.data
	} catch (err) {
		return err.message
	}
})

const albums = createSlice({
	name: 'albums',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchAlbums.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchAlbums.fulfilled, (state, action) => {
				state.isLoading = false

				state.list = action.payload.data ?? []
			})
			.addCase(fetchAlbums.rejected, (state) => {
				state.isLoading = false
			})
	},
})
export const {} = albums.actions

export default albums.reducer
