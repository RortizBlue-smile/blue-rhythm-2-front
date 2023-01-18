import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { FaHome, FaMusic } from 'react-icons/fa'
import { RiPlayList2Fill } from 'react-icons/ri'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { NavButton } from './common/NavButton'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobile } from '../store/responsive'

function Menu() {
	const [avatar, setAvatar] = useState(null)
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)
	const responsive = useSelector((state) => state.responsive)
	const isLoggedIn = !!user
	const getAvatar = async (id = 'avatar1') => {
		const { default: avatarImport } = await import(
			`../assets/avatars/${id}.webp`
		)
		setAvatar(avatarImport)
	}
	useEffect(() => {
		user?.avatar ? getAvatar(user.avatar) : getAvatar()
	}, [user])
	console.log(responsive)
	return (
		<nav
			className={`bg-gradient-to-br from-darkBlue1/50 to-darkBlue2/50 sm:grid-in-menu grid grid-rows-menu font-andika ${
				responsive.menu ? 'mobile:grid' : 'mobile:hidden'
			} mobile:absolute mobile:z-10 mobile:top-0 mobile:left-0 mobile:from-darkBlue1/80 mobile:to-darkBlue2/80 mobile:h-[750px] mobile:pr-4`}
		>
			<div className='flex justify-star items-center gap-x-4'>
				<div className='rounded-half object-contain w-32 h-32 ml-8 mobile:w-24 mobile:h-24 mobile:'>
					<img src={avatar} alt='' className='w-full h-full rounded-half' />
				</div>
				<div className=''>
					<h2 className='text-2xl text-slate-100'>
						{isLoggedIn ? (
							<Link to='/profile' className='hover:underline'>
								{user.name}
							</Link>
						) : (
							'Rhythm 2'
						)}
					</h2>
					<span className='text-slate-300'>
						{isLoggedIn ? (
							<Link to='/logout'>Logout </Link>
						) : (
							<>
								<Link to='/login' className='hover:text-slate-400'>
									Login
								</Link>{' '}
								<span>|</span>
								<Link to='/register' className='hover:text-slate-400'>
									Register
								</Link>
							</>
						)}
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
					<li
						className='w-full hidden mobile:block'
						onClick={() => {
							dispatch(toggleMobile())
						}}
					>
						<div
							className={`rounded-3xl p-3 flex items-center text-2xl text-white gap-x-2 hover:bg-slate-200/20 bg-slate-100/30  
								
							`}
						>
							<i>
								<IoMdArrowRoundBack />
							</i>
							<span>Close Menu</span>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

const navItems = [
	{ nav: '/', name: 'Home', icon: <FaHome /> },
	{ nav: '/songs', name: 'Songs', icon: <FaMusic /> },
	// { nav: '/albums', name: 'Albums', icon: <BiAlbum /> },
	{ nav: '/playlists', name: 'Playlist', icon: <RiPlayList2Fill /> },
]
export { Menu }
