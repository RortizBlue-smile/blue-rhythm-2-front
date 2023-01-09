import axios from 'axios'

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
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export { api }
