import React from 'react'
import { HiRewind } from 'react-icons/hi'
import { FaPlay, FaVolumeUp } from 'react-icons/fa'
function MusicPlayer() {
	return (
		<div className='grid-in-player bg-zinc-700/75 grid grid-cols-musicPlayer text-white '>
			<div className='flex justify-start items-center gap-4 pl-4 '>
				<div className='w-16 h-16 bg-white'>
					<img
						src='https://upload.wikimedia.org/wikipedia/en/1/1c/PostMaloneRockstar.jpg'
						alt=''
						className='w-full h-full'
					/>
				</div>
				<div className=''>
					<h3 className='text-3xl'>Rockstar</h3>
					<span className=''>Post Malone</span>
				</div>
			</div>
			<div className=' flex justify-center  gap-x-4 text-white text-lg '>
				<div className='flex justify-center items-center gap-x-4 justify-self-center'>
					<button className='rounded-half bg-blue-500 h-12 w-12 flex justify-center items-center hover:bg-blue-700'>
						<i>
							<HiRewind />
						</i>
					</button>
					<button className='rounded-half bg-blue-500 h-16 w-16 flex justify-center items-center hover:bg-blue-700'>
						<i>
							<FaPlay />
						</i>
					</button>
					<button className='rounded-half bg-blue-500 h-12 w-12 flex justify-center items-center hover:bg-blue-700'>
						<i>
							<HiRewind className='rotate-180' />
						</i>
					</button>
				</div>
			</div>
			<div className='flex items-center justify-between justify-self-end gap-3'>
				<i>
					<FaVolumeUp />
				</i>
				<div className='w-32 h-2 bg-slate-200/20 rounded-3xl relative'>
					<div className='w-16 h-2 bg-blue-500 rounded-3xl absolute z-10'>
						<div className='absolute -right-1 -top-1 h-4 w-4 rounded-half bg-blue-500 hidden hover:block z-20'></div>
					</div>
				</div>
			</div>
			<div className='text-2xl flex items-center justify-center'>
				<span>0:00</span>
				<span>/</span>
				<span>0:30</span>
			</div>
		</div>
	)
}

export { MusicPlayer }
