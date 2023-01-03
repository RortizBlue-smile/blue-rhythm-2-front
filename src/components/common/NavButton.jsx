import React from 'react'
import { NavLink } from 'react-router-dom'

function NavButton({ nav, name, icon }) {
	return (
		<li className='w-full'>
			<NavLink
				to={nav}
				className={({ isActive }) =>
					`rounded-3xl p-3 flex items-center text-2xl text-white gap-x-2 hover:bg-slate-200/20  ${
						isActive ? 'bg-slate-100/30 ' : ''
					}`
				}
			>
				<i>{icon}</i>
				<span>{name}</span>
			</NavLink>
		</li>
	)
}

export { NavButton }
