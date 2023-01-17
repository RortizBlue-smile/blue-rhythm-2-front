import jwtDecode from 'jwt-decode'
import { DateTime } from 'luxon'

const titleLength = ({ length }) => {
	if (length > 25) return 'lg'
	if (length > 10) return 'xl'
	if (length > 15) return '2xl'
	return '3xl'
}

const getTimeDiff = (date) => {
	const now = DateTime.now()
	const diff = now.diff(DateTime.fromSeconds(date), ['minutes'])
	return diff.toObject()
}

const formatAudioTime = (audioTime = 0) => {
	audioTime ||= 0
	const totalTime = Math.round(audioTime)
	return `00:${totalTime < 10 ? '0' : ''}${totalTime}`
}

const saveToken = (token) => {
	localStorage.setItem('token', token)
}
const getToken = () => {
	return localStorage.getItem('token')
}
const removeToken = () => {
	localStorage.removeItem('token')
}
const decodeToken = (token) => {
	const decodedToken = jwtDecode(token)
	return decodedToken
}

export {
	titleLength,
	getTimeDiff,
	decodeToken,
	getToken,
	saveToken,
	removeToken,
	formatAudioTime,
}
