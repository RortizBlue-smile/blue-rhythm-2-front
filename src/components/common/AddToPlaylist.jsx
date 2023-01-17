import React from 'react'
import { RiPlayListAddFill } from 'react-icons/ri'

function AddToPlaylist() {
	return (
		<button className='rounded-half bg-blue-500 w-16 h-16 text-2xl text-white flex justify-center items-center hover:bg-blue-700'>
			<RiPlayListAddFill />
		</button>
	)
}

export { AddToPlaylist }
