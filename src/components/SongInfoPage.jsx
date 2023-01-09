import React from 'react'
import { useLocation } from 'react-router-dom'

function SongInfoPage() {
	const location = useLocation()
	const state = location.state
	console.log(state)
	return <div>{state.name}</div>
}

export { SongInfoPage }
