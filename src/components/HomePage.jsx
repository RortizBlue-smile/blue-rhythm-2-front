import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../store/albums'
import { fetchPlaylists } from '../store/playlists'
import { fetchSongs } from '../store/songs'
import { CardList } from './common/CardList'
import LoadingSpinner from './common/LoadingSpinner'

function HomePage() {
	const dispatch = useDispatch()
	const { list: songsList, isLoading: isLoadingSongs } = useSelector(
		(state) => state.music.songs
	)
	// const { list: albumsList, isLoading: isLoadingAlbums } = useSelector(
	// 	(state) => state.music.albums
	// )
	useEffect(() => {
		dispatch(fetchSongs())
	}, [])
	if (isLoadingSongs) {
		return <LoadingSpinner />
	}
	return (
		<>
			<CardList label={'Songs'} list={songsList} />
			{/* <CardList label={'Albums'} list={songsList} /> */}
		</>
	)
}

export { HomePage }
