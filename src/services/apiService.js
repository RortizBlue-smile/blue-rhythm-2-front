import axios from 'axios'
import { store } from '../store/configStore'

// const token = getToken()

const api = axios.create({
	baseURL: 'https://blue-rythm-back-production.up.railway.app/api',
	headers: {
		'Content-type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': '*',
	},
})
api.interceptors.request.use(
	(config) => {
		const token = store.getState().auth.token
		config.headers.Authorization = token ? token : ''
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
const getSongInfo = async (id) => {
	const res = await api.get(`/songs/${id}`)
	return res.data
}
const getSearch = async (body) => {
	const baseBody = {
		track: '',
		artists: [],
		album: '',
		...body,
	}
	const res = await api.post('/search', baseBody)
	return res.data.data
}
const getSearch2 = async (body) => {
	const token = store.getState().auth.token
	const baseBody = {
		track: '',
		artists: [],
		album: '',
		...body,
	}
	const res = await fetch(
		'https://blue-rythm-back-production.up.railway.app/api/search',
		{
			method: 'GET',
			headers: {
				'Content-type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Origin': '*',
				Authorization: token ? token : '',
			},
			body: JSON.stringify(baseBody),
		}
	)
	const data = await res.json()
	return data
}

export { api, getSongInfo, getSearch, getSearch2 }
