import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/common/LoadingSpinner'
import { GridList } from '../components/common/GridList'
import { getSearch, getSearch2 } from '../services/apiService'
import { RowList } from './common/RowList'

const cardLabels = {
	track: 'Songs',
	artists: 'Artist',
	album: 'Album',
}
const cardTypes = {
	track: 'songs',
	artists: 'artists',
	album: 'albums',
}

function SearchPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [songList, setSongList] = useState([])
	const [onError, setOnError] = useState(false)
	const location = useLocation()
	const state = location.state
	const searchFetch = async () => {
		try {
			const param =
				state.field === 'artists'
					? { [state.field]: [state.query] }
					: { [state.field]: state.query }
			const songs = await getSearch(param)
			setSongList(songs)
			setIsLoading(false)
		} catch (ex) {
			setIsLoading(false)
			setOnError(true)
		}
	}
	useEffect(() => {
		setIsLoading(true)
		searchFetch()
	}, [state])
	if (isLoading) {
		return <LoadingSpinner />
	}
	if (onError) {
		return (
			<div className='grid w-full h-full place-items-center'>
				Something went wrong{' '}
			</div>
		)
	}
	console.log(state.field)
	return (
		<>
			{state.field === 'track' ? (
				<RowList
					label={cardLabels[state.field]}
					list={songList}
					type={cardTypes[state.field]}
				/>
			) : (
				<GridList
					label={cardLabels[state.field]}
					list={songList}
					type={cardTypes[state.field]}
				/>
			)}
		</>
	)
}

export { SearchPage }
