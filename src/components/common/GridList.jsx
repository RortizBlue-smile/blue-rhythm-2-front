import React from 'react'
import { MusicCard } from './MusicCard'

function GridList({ label, list = [1, 2, 3, 4, 5, 6, 7, 8] }) {
	return (
		<>
			<h2 className='text-3xl mb-4 text-white'>{label}</h2>
			<div className='grid grid-cols-gridList gap-4 place-items-center'>
				{list.map((item) => (
					<MusicCard />
				))}
			</div>
		</>
	)
}

export { GridList }
