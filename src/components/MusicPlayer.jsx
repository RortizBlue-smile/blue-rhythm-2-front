import React from 'react'
import { HiRewind } from 'react-icons/hi'
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa'
import { ImLoop, ImShuffle } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import * as playerActions from '../store/musicPlayer'

function MusicPlayer() {
	const dispatch = useDispatch()
	const playerState = useSelector((state) => state.player)
	const handleVolume = (e) => {
		dispatch(playerActions.changeVolume(e.target.value))
	}
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
					<button
						onClick={() => dispatch(playerActions.toggleShuffle())}
						className={`rounded-half h-10 w-10 flex justify-center items-center   ${
							playerState.shuffle ? 'bg-blue-700 ' : 'bg-blue-500 '
						} hover:bg-blue-700`}
					>
						<i>
							<ImShuffle />
						</i>
					</button>
					<button className='rounded-half bg-blue-500 h-12 w-12 flex justify-center items-center hover:bg-blue-700'>
						<i>
							<HiRewind />
						</i>
					</button>
					<button
						onClick={() => dispatch(playerActions.togglePlaying())}
						className='rounded-half bg-blue-500 h-16 w-16 flex justify-center items-center hover:bg-blue-700'
					>
						<i>{playerState.playing ? <FaPause /> : <FaPlay />}</i>
					</button>
					<button className='rounded-half bg-blue-500 h-12 w-12 flex justify-center items-center hover:bg-blue-700'>
						<i>
							<HiRewind className='rotate-180' />
						</i>
					</button>
					<button
						onClick={() => dispatch(playerActions.toggleLoop())}
						className={`rounded-half h-10 w-10 flex justify-center items-center ${
							playerState.loop ? 'bg-blue-700' : 'bg-blue-500'
						}  hover:bg-blue-700`}
					>
						<i>
							<ImLoop />
						</i>
					</button>
				</div>
			</div>
			<div className='flex items-center justify-between justify-self-end gap-3'>
				<i>
					<FaVolumeUp />
				</i>

				<input
					type='range'
					className='accent-blue-500'
					onChange={handleVolume}
					value={playerState.volume}
				/>
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
