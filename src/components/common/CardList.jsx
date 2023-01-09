import React from 'react'
import { MusicCard } from './MusicCard'

function CardList({ label, list }) {
	return (
		<div className='text-white mb-4'>
			<h2 className='text-3xl mb-4'>{label}</h2>
			<div className=''>
				<ul className='flex scroll gap-x-4 mb-4 overflow-x-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-600  scrollbar-track-rounded-3xl scrollbar-thumb-rounded-3xl'>
					{list.map((item, index) => (
						<li key={index} className=''>
							<MusicCard info={item} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export { CardList }
