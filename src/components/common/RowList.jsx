import React from 'react'
import { AddToPlaylist } from './AddToPlaylist'
import { NextButton } from './NextButton'
import { PlayButton } from './PlayButton'

function RowList({ list = [], label, type }) {
	console.log(list)
	return (
		<>
			<h2 className='text-3xl mb-4 text-white capitalize'>{label}</h2>
			<div className='w-full'>
				{list.map((item, index) => (
					<div
						key={index}
						className='items-center gap-x-2 border-y-2 border-white grid grid-cols-2 py-4 text-white'
					>
						<div className='px-4 '>
							<span className=''>{item?.name}</span>
							<span className='mx-2'>|</span>
							<span className=''>{item.artist}</span>
						</div>
						{(item.preview_url || item.preview) && (
							<div className='flex items-center justify-self-center gap-x-3'>
								<PlayButton songList={[{ ...item }]} />
								<NextButton songList={[{ ...item }]} />
								<AddToPlaylist songList={[{ ...item }]} />
							</div>
						)}
					</div>
				))}
			</div>
		</>
	)
}

export { RowList }
