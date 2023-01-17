import React, { useState } from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import { RiPlayList2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { addToList } from '../../store/musicPlayer.js'
function NextButton({ songList }) {
	const [selected, setSelected] = useState(false)
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(addToList({ songList }))
		setSelected(true)
	}
	return (
		<button
			className='rounded-half bg-blue-500 w-16 h-16 text-2xl text-white flex justify-center items-center hover:bg-blue-700 disabled:hover:bg-blue-700'
			disabled={selected}
			onClick={handleClick}
		>
			{selected ? <BsCheck2Square /> : <RiPlayList2Fill />}
		</button>
	)
}

export { NextButton }
