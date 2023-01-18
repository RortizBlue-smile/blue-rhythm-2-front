import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { toggleMobile } from '../store/responsive'
import { SearchBar } from './SearchBar'
import { GiHamburgerMenu } from 'react-icons/gi'
function MainLayout() {
	const dispatch = useDispatch()
	return (
		<main className=' sm:grid-in-main grid grid-rows-main mobile:grid-rows-mainMob mobile:overflow-x-auto'>
			<div className='flex items-center mobile:overflow-x-auto'>
				<div
					className='hidden mobile:block w-16 h-16 text-white '
					onClick={() => dispatch(toggleMobile())}
				>
					<GiHamburgerMenu className='w-16 h-16' />
				</div>
				<div className='p-8  flex items-center w-full mobile:p-2'>
					<SearchBar />
				</div>
			</div>
			<div
				className='px-8  overflow-y-auto scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-600  scrollbar-track-rounded-3xl scrollbar-thumb-rounded-3xl
				mobile:overflow-x-auto mobile:h-[750px]
				'
			>
				<Outlet />
			</div>
		</main>
	)
}

export { MainLayout }
