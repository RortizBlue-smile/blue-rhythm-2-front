import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { changeSong, play, resetIndex } from '../../store/musicPlayer'

function PlayButton({ songList }) {
	const dispatch = useDispatch()
	const handleClick = () => {
		// dispatch(changeSong())
		dispatch(play({ songList }))
	}
	return (
		<button
			className='rounded-half bg-blue-500 w-16 h-16 text-lg text-white flex justify-center items-center hover:bg-blue-700 mobile:w-12 mobile:h-12 mobile:text-base'
			onClick={handleClick}
		>
			<FaPlay />
		</button>
	)
}

export { PlayButton }
