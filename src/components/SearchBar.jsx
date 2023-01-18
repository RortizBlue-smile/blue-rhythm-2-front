import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Select } from './common/Select'

function SearchBar() {
	const { register, handleSubmit } = useForm()
	const nav = useNavigate()
	const searchHandle = (data) => {
		nav('/search', { state: data })
	}
	return (
		<div className='w-full'>
			<form
				className='rounded-3xl w-3/5 h-12 bg-black/30 flex items-center pl-6 gap-x-4 mobile:w-full overflow-x-auto'
				onSubmit={handleSubmit(searchHandle)}
			>
				<div className='flex items-center'>
					<button
						type='submit'
						className='text-white rounded-xl px-2 py-1 hover:bg-blue-600 '
					>
						<i>
							<FaSearch />
						</i>
					</button>
				</div>
				<div className='flex items-center h-full gap-x-4 overflow-x-auto'>
					<input
						type='text'
						className=' rounded-xl h-3/5 mx-2 w-96'
						{...register('query')}
						placeholder='Search'
					/>
					<input
						list='searchOptions'
						className=' rounded-xl h-3/5 mx-2 px-2'
						{...register('field')}
						placeholder='Type'
					/>
					<datalist id='searchOptions'>
						<option value='track'>Song</option>
						<option value='artists'>Artist</option>
						<option value='album'>Album</option>
					</datalist>
				</div>
			</form>
		</div>
	)
}

export { SearchBar }
