import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists, fetchPublicPlaylists } from '../store/playlists'
import LoadingSpinner from './common/LoadingSpinner'
import { PlayListRow } from './common/PlayListRow'

function PlaylistsPage() {
	const dispatch = useDispatch()
	const { publicList, list, isLoading } = useSelector(
		(state) => state.music.playlists
	)
	useEffect(() => {
		// dispatch(fetchPlaylists())
		dispatch(fetchPublicPlaylists())
	}, [])
	if (isLoading) {
		return <LoadingSpinner />
	}
	return (
		<>
			{/* <PlayListRow label='Private' /> */}
			<div className=''>
				<h2 className='text-3xl mb-4 text-white'>Public</h2>
				{publicList.map((item, index) => (
					<PlayListRow listInfo={item} key={index} />
				))}
			</div>
		</>
	)
}

export { PlaylistsPage }
