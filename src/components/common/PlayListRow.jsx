import React from 'react'
import { Link } from 'react-router-dom'

function PlayListRow({ listInfo }) {
	return (
		<>
			<div className='w-full'>
				<div className='items-center gap-x-2 border-y-2 border-white grid grid-cols-rowList py-4 text-white'>
					<div className='px-4'>
						<span>{listInfo?.name}</span>
						<span className='mx-2'>|</span>
						<span>{`By ${listInfo.name} ${listInfo.surname} `}</span>
						<span>{`Total songs: ${listInfo.songs.length}`}</span>
					</div>
					<div className='flex items-center justify-self-center gap-x-3'>
						<Link
							className='px-4 p-y2 text-white bg-blue-500 rounded-2xl'
							to={`${listInfo?._id}`}
							state={{ songs: listInfo.songs, title: listInfo.name }}
						>
							View
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export { PlayListRow }
