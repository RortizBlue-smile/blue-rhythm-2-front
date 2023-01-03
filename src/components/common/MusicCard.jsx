import React from 'react'

function MusicCard({ info = '' }) {
	return (
		<div className='flex flex-col text-slate-100'>
			<div className='rounded-3xl w-64 h-64 '>
				<img
					src='https://upload.wikimedia.org/wikipedia/en/1/1c/PostMaloneRockstar.jpg'
					alt=''
					className='w-full h-full  rounded-3xl object-contain'
				/>
			</div>
			<h3 className='text-2xl'>Rockstar</h3>
			<span className='text-lg'>Post Malone</span>
		</div>
	)
}

export { MusicCard }
