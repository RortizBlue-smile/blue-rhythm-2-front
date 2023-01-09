import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../store/albums'

import { GridList } from './common/GridList'

function AlbumsPage() {
	const dispatch = useDispatch()
	const { list: albumsList, isLoading } = useSelector(
		(state) => state.music.albums
	)
	useEffect(() => {
		dispatch(fetchAlbums())
	}, [])
	if (isLoading) {
		return <h2>Loading</h2>
	}

	return (
		<>
			<GridList label='Albums' list={albumsList} />
		</>
	)
}

export { AlbumsPage }
