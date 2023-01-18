import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getSongInfo } from '../services/apiService'
import { AddToPlaylist } from './common/AddToPlaylist'
import { NextButton } from './common/NextButton'
import { PlayButton } from './common/PlayButton'

function SongInfoPage() {
	const params = useParams()
	const location = useLocation()
	const state = location.state
	const [song, setSong] = useState(state?.info)
	const getSong = async () => {
		const songInfo = await getSongInfo(params.id)
		setSong(songInfo)
	}
	useEffect(() => {
		if (!song) getSong()
	}, [])
	return (
		<div className='grid grid-cols-songInfo mobile:flex mobile:flex-col items-center mobile:gap-y-4'>
			<div className='w-64 h-64 rounded-3xl bg-stone-500 justify-self-center'>
				<img
					src={song.albumImage ?? song.images[2]?.url ?? ''}
					alt='song album image'
					className='object-contain rounded-3xl h-full w-full'
				/>
			</div>
			<div className='flex flex-col justify-center text-white gap-y-8 '>
				<div className='bg-black/30 p-4 rounded-3xl'>
					<h2 className='text-3xl font-extrabold'>{song?.name}</h2>
					{song.album && <p> Album: {song?.album}</p>}
					{song.artist && <p> Artits: {song?.artist}</p>}
				</div>
				{(song.preview || song.preview_url) && (
					<div className='flex gap-4 bg-black/30 p-4 rounded-3xl'>
						<PlayButton songList={[{ ...song }]} />
						<NextButton songList={[{ ...song }]} />
						<AddToPlaylist songList={[{ ...song }]} />
					</div>
				)}
			</div>
		</div>
	)
}

export { SongInfoPage }
