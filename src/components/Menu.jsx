import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaMusic } from 'react-icons/fa'
import { RiPlayList2Fill } from 'react-icons/ri'
import { BiAlbum } from 'react-icons/bi'
import { NavButton } from './common/NavButton'
function Menu() {
	return (
		<nav className='bg-gradient-to-br from-darkBlue1/50 to-darkBlue2/50 grid-in-menu grid grid-rows-menu font-andika'>
			<div className='flex justify-center items-center gap-x-2'>
				<div className='rounded-half object-contain w-32 h-32'>
					<img
						src='https://pyxis.nymag.com/v1/imgs/86b/2d8/1e9d1d2fd5919a507e3779ef4790205a95-post-malone.1x.rsquare.w1400.jpg'
						alt=''
						className='w-full h-full rounded-half'
					/>
				</div>
				<div className=''>
					<h2 className='text-2xl text-slate-100'>Rhythm 2</h2>
					<span className='text-slate-300'>
						<Link to='/login' className='hover:text-slate-400'>
							Login
						</Link>{' '}
						|{' '}
						<Link to='/register' className='hover:text-slate-400'>
							Register
						</Link>
					</span>
				</div>
			</div>
			<div className='px-5'>
				<ul className='flex flex-col justify-center items-start list-none gap-y-2 mt-3'>
					{navItems.map((item, i) => (
						<NavButton
							key={`${item.name}-${i}`}
							nav={item.nav}
							name={item.name}
							icon={item.icon}
						/>
					))}
				</ul>
			</div>
		</nav>
	)
}

const navItems = [
	{ nav: '/', name: 'Home', icon: <FaHome /> },
	{ nav: '/songs', name: 'Songs', icon: <FaMusic /> },
	{ nav: '/albums', name: 'Albums', icon: <BiAlbum /> },
	{ nav: '/playlists', name: 'Playlist', icon: <RiPlayList2Fill /> },
]
export { Menu }
