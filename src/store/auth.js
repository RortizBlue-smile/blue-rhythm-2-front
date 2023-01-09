import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../services/apiService'
import { decodeToken } from '../services/utilsService'

const initialState = {
	user: null,
	token: null,
	status: 'idle',
}

export const login = createAsyncThunk('auth/login', async (payload) => {
	try {
		const res = await api.post('/user/login', payload)
		return res.data
	} catch (ex) {
		return Promise.reject(ex.message)
	}
})
export const register = createAsyncThunk('auth/register', async (payload) => {
	try {
		const res = await api.post('/user/register', payload)
		return res.data
	} catch (ex) {
		return Promise.reject(ex.message)
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCrentials: (state, action) => {
			const { user, accesToken } = action.payload
			state.user = user
			state.token = accesToken
		},
		logOut: (state, action) => {
			state.user = null
			state.token = null
		},
		resetStatus: (state, action) => {
			state.status = 'idle'
		},
		changeAvatar: (state, action) => {
			state.user.avatar = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(login.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = decodeToken(action.payload.token)
				state.token = action.payload.token
				state.status = 'success'
			})
			.addCase(register.fulfilled, (state, action) => {
				state.status = 'success'
			})
			.addCase(register.rejected, (state, action) => {
				state.status = 'fail'
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'fail'
			})
	},
})

export const { logOut, setCrentials, resetStatus, changeAvatar } =
	authSlice.actions

export default authSlice.reducer
