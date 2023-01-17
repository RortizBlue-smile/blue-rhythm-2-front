import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function AlbumInfoPage() {
	const location = useLocation()
	const state = location.state
	const [song, setSong] = useState(state?.info)
	return (
		<div className='grid grid-cols-songInfo'>
			<div className='w-64 h-64 rounded-3xl bg-stone-500 justify-self-center'>
				<img
					src={song?.albumImage}
					alt='song album image'
					className='object-contain rounded-3xl'
				/>
			</div>
			<div className='flex flex-col justify-center text-white gap-y-8'>
				<div>
					<h2 className='text-3xl font-extrabold'>{song?.name}</h2>
					<p> Album: {song?.album}</p>
					<p> Artits: {song?.artist}</p>
				</div>
			</div>
		</div>
	)
}

export { AlbumInfoPage }
