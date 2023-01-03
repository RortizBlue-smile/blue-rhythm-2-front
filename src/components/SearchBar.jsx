import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
	return (
		<div className='w-full'>
			<div className='rounded-3xl w-3/5 h-12 bg-black/30 flex items-center pl-6 gap-x-2;'>
				<i>
					<FaSearch className='text-white' />
				</i>
				<input type='text' className='bg-transparent' />
			</div>
		</div>
	)
}

export { SearchBar }
