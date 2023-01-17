import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
	const auth = useSelector((state) => state.auth)

	if (!auth.user) return <Navigate to='/login' />
	return children
}

function PublicRoute({ children }) {
	const auth = useSelector((state) => state.auth)

	if (auth.user) {
		return <Navigate to='/' />
	}

	return children
}

export { PrivateRoute, PublicRoute }
