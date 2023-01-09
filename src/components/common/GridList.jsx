import React from 'react'
import { MusicCard } from './MusicCard'

function GridList({ label, list }) {
	return (
		<div className=''>
			<h2 className='text-3xl mb-4 text-white'>{label}</h2>
			<div className='grid grid-cols-gridList auto-rows-gridList gap-4 justify-items-center'>
				{list.map((item, index) => (
					<MusicCard info={item} key={index} />
				))}
			</div>
		</div>
	)
}

export { GridList }
