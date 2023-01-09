import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
function LoadingSpinner() {
	return (
		<div className='grid place-items-center h-full'>
			<i className=' '>
				<BiLoaderAlt className=' w-64 h-64 text-indigo-500 animate-spin ' />
			</i>
		</div>
	)
}

export default LoadingSpinner
