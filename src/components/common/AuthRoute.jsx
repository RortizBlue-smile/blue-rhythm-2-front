import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
	const auth = useSelector((state) => state.auth)
	console.log(auth.user)
	if (!auth.user) return <Navigate to='/login' />
	return children
}

function PublicRoute({ children }) {
	const auth = useSelector((state) => state.auth)
	console.log(auth.user)

	if (auth.user) {
		console.log('public route bug')
		return <Navigate to='/' />
	}

	return children
}

export { PrivateRoute, PublicRoute }
