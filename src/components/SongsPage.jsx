import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSongs } from '../store/songs'
import { GridList } from './common/GridList'
import LoadingSpinner from './common/LoadingSpinner'

function SongsPage() {
	const dispatch = useDispatch()
	const { list: songsList, isLoading } = useSelector(
		(state) => state.music.songs
	)
	useEffect(() => {
		dispatch(fetchSongs())
	}, [])
	if (isLoading) {
		return <LoadingSpinner />
	}
	return (
		<>
			<GridList label='Songs' list={songsList} />
		</>
	)
}

export { SongsPage }
