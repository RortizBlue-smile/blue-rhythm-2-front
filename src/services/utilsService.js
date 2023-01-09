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

const saveToken = (token) => {
	localStorage.set('token', token)
}
const getToken = () => {
	return localStorage.get('token')
}
const decodeToken = (token) => {
	const decodedToken = jwtDecode(token)
	return decodedToken
}

export { titleLength, getTimeDiff, decodeToken, getToken, saveToken }
