import React from 'react'
import { useNavigate } from 'react-router-dom'
import { titleLength } from '../../services/utilsService'

function MusicCard({ type = 'songs', info }) {
	const navigate = useNavigate()
	const handleClick = (id) => {
		if (type !== 'songs') return
		navigate(`/${type}/${id}`, { state: { info } })
	}
	return (
		<div className='flex flex-col text-slate-100 items-center'>
			<div
				className='rounded-3xl w-64 h-64 relative bg-gray-800/30 after:bg-gray-800/50  after:hidden after:absolute after:z-10 after:w-64 after:h-64 after:rounded-3xl hover:after:block hover:shadow-lg hover:scale-105 cursor-pointer'
				onClick={() =>
					handleClick(info.externalId ?? info.artistId ?? info.albumId ?? '')
				}
			>
				<img
					src={info.albumImage ?? info?.images[1]?.url ?? ''}
					alt=''
					className='w-full h-full  rounded-3xl object-contain absolute z-0 '
				/>
			</div>
			<h4 className={`text-center text-${titleLength(info.name)}`}>
				{info.name}
			</h4>
			<span className='text-lg text-black/40 text-center mb-4'>
				{info.artist}
			</span>
		</div>
	)
}

export { MusicCard }
