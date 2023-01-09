import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeAvatar } from '../../store/auth'

function PlaylistsPage() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(changeAvatar('avatar3'))
	}, [])
	return <div>PlaylistsPage</div>
}

export { PlaylistsPage }
