import React from 'react'
import { Outlet } from 'react-router-dom'
import { SearchBar } from './SearchBar'

function MainLayout() {
	return (
		<main className=' grid-in-main grid grid-rows-main'>
			<div className='p-8  flex items-center w-full'>
				<SearchBar />
			</div>
			<div
				className='px-8  overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-600  scrollbar-track-rounded-3xl scrollbar-thumb-rounded-3xl
			'
			>
				<Outlet />
			</div>
		</main>
	)
}

export { MainLayout }
