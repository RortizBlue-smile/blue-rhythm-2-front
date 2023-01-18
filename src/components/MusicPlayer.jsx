import React, { useEffect, useRef, useState } from 'react'
import { HiRewind } from 'react-icons/hi'
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa'
import { ImLoop, ImShuffle } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import * as playerActions from '../store/musicPlayer'
import { formatAudioTime, titleLength } from '../services/utilsService'
import { BiLoaderAlt } from 'react-icons/bi'

function MusicPlayer() {
	const audio = useRef(new Audio())
	const intervalRef = useRef()
	const isReady = useRef(false)

	const [songProgress, setSongProgress] = useState(0)

	const dispatch = useDispatch()
	const playerState = useSelector((state) => state.player)

	const handleVolume = (e) => {
		dispatch(playerActions.changeVolume(parseInt(e.target.value)))
		audio.current.volume = playerState.volumeLevel / 100
	}

	useEffect(() => {
		if (playerState.playing) {
			audio.current.play()
			startTimer()
		} else {
			clearInterval(intervalRef.current)
			audio.current.pause()
		}
	}, [playerState.playing])

	useEffect(() => {
		audio.current.pause()

		audio.current = new Audio(
			playerState.currentSong.preview ?? playerState.currentSong.preview_url
		)
		setSongProgress(audio.current.currentTime)
		if (isReady.current) {
			audio.current.volume = playerState.volumeLevel / 100
			audio.current.play()
			dispatch(playerActions.togglePlaying())
			startTimer()
		} else {
			isReady.current = true
		}
	}, [playerState.currentSong])

	useEffect(() => {
		return () => {
			audio.current.pause()
			clearInterval(intervalRef.current)
		}
	}, [])

	const startTimer = () => {
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval(() => {
			if (audio.current.ended) {
				toNextSongAuto()
			} else {
				setSongProgress(audio.current.currentTime)
			}
		}, [1000])
	}

	const toPrevSong = () => {
		dispatch(playerActions.prevSong())
	}

	const toNextSong = () => {
		dispatch(playerActions.nextSong())
	}
	const toNextSongAuto = () => {
		dispatch(playerActions.autoNext())
	}

	return (
		<div className='sm:grid-in-player bg-zinc-700/75 grid grid-cols-musicPlayer text-white mobile:fixed mobile:bottom-0 mobile:flex mobile:justify-center mobile:z-20 mobile:w-full mobile:h-24'>
			<div className='flex justify-start items-center gap-4 pl-4  mobile:hidden'>
				<div className='w-16 h-16 bg-white '>
					{playerState.currentSong.albumImage && (
						<img
							src={playerState.currentSong.albumImage}
							alt=''
							className='w-full h-full '
						/>
					)}
				</div>
				<div className='w-3/5'>
					<h3
						className={`text-${titleLength(
							playerState.currentSong.name
						)} truncate`}
					>
						{playerState.currentSong.name
							? playerState.currentSong.name
							: '-------'}
					</h3>
					<span className=''>
						{playerState.currentSong.artist
							? playerState.currentSong.artist
							: '-------'}
					</span>
				</div>
			</div>
			<div className=' flex justify-center  gap-x-4 text-white text-lg '>
				<div className='flex justify-center items-center gap-x-4 justify-self-center'>
					{/* <button
						onClick={() => dispatch(playerActions.toggleShuffle())}
						className={`rounded-half h-10 w-10 flex justify-center items-center   ${
							playerState.shuffle ? 'bg-blue-700 ' : 'bg-blue-500 '
						} hover:bg-blue-700`}
					>
						<i>
							<ImShuffle />
						</i>
					</button> */}
					<button
						className='rounded-half bg-blue-500 h-12 w-12 flex justify-center items-center hover:bg-blue-700'
						onClick={toPrevSong}
					>
						<i>
							<HiRewind />
						</i>
					</button>
					<button
						onClick={() => {
							dispatch(playerActions.togglePlaying())
						}}
						className='rounded-half bg-blue-500 h-16 w-16 flex justify-center items-center hover:bg-blue-700'
					>
						<i>
							{playerState.isLoading ? (
								<BiLoaderAlt className='animate-spin' />
							) : playerState.playing ? (
								<FaPause />
							) : (
								<FaPlay />
							)}
						</i>
					</button>

					<button
						className='rounded-half bg-blue-500 h-12 w-12 flex justify-center items-center hover:bg-blue-700'
						onClick={toNextSong}
					>
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
			<div className='flex items-center justify-between justify-self-end gap-3 mobile:hidden'>
				<i>
					<FaVolumeUp />
				</i>

				<input
					type='range'
					className='accent-blue-500'
					onChange={handleVolume}
					value={playerState.volumeLevel}
					min={0}
					max={100}
				/>
			</div>
			<div className='text-2xl flex items-center justify-center mobile:ml-3'>
				<span className={``}>{formatAudioTime(songProgress)}</span>
				<span className='mobile:hidden'>/</span>
				<span className='mobile:hidden'>
					{formatAudioTime(audio.current.duration)}
				</span>
			</div>
		</div>
	)
}

export { MusicPlayer }
