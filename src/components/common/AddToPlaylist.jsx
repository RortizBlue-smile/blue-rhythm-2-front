import React, { useEffect, useState } from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import { RiPlayListAddFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { resetUpdating, updatePlaylist } from '../../store/playlists'

function AddToPlaylist({ songList = [] }) {
	const [done, setDone] = useState(false)
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()
	const { list, isUpdating, lastFetch } = useSelector(
		(state) => state.music.playlists
	)
	const handleClick = () => {
		setOpen((prev) => !prev)
	}
	const addToPlaylist = (id) => {
		const songsIds = songList.map((song) => song.externalId ?? song.trackId)
		dispatch(updatePlaylist({ id, songs: songsIds }))
	}
	useEffect(() => {
		if (isUpdating === 'done' && open) {
			setOpen(false)
			setDone(true)
			dispatch(resetUpdating())
		}
	}, [isUpdating])

	return (
		<div className='relative'>
			<button
				className={`rounded-half  w-16 h-16 text-2xl text-white flex justify-center items-center  relative ${
					!open
						? 'bg-blue-500 hover:bg-blue-700'
						: 'bg-blue-700 hover:bg-blue-900'
				} relative mobile:w-12 mobile:h-12 mobile:text-base`}
				onClick={handleClick}
				disabled={done}
			>
				{done ? <BsCheck2Square /> : <RiPlayListAddFill />}
			</button>
			{open && (
				<div className='w-44 flex flex-col absolute -bottom-20 -right-44 bg-black/70 rounded-3xl py-2 px-4 z-10 mobile:right-16 '>
					<span className='mb-2'>
						{isUpdating === 'none' && 'Add to'}
						{isUpdating === 'updating' && 'Adding...'}
						{isUpdating === 'error' && 'Try Again'}
					</span>
					{list.map((item, index) => (
						<>
							<button
								className=' truncate border-t-2 hover:bg-blue-900 disabled:bg-blue-900'
								key={index}
								disabled={done}
								onClick={() => addToPlaylist(item._id)}
							>
								{item.name}
							</button>
						</>
					))}
				</div>
			)}
		</div>
	)
}

export { AddToPlaylist }
