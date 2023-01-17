import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logOut } from '../../store/auth'

function LogoutPage() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(logOut())
	}, [])
	return <Navigate to='/' />
}

export { LogoutPage }
