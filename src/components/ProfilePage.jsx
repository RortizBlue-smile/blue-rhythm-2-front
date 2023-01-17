import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar1 from '../assets/avatars/avatar1.webp'
import avatar2 from '../assets/avatars/avatar2.webp'
import avatar3 from '../assets/avatars/avatar3.webp'
import avatar4 from '../assets/avatars/avatar4.webp'
import avatar5 from '../assets/avatars/avatar5.webp'
import { changeAvatar } from '../store/auth'
function ProfilePage() {
	const dispatch = useDispatch()
	const userInfo = useSelector((state) => state.auth.user)
	const handleChangeAvatar = (avatarId) => {
		dispatch(changeAvatar(`avatar${avatarId}`))
	}
	return (
		<div>
			<h2 className='text-2xl text-white'>Profile</h2>
			<div className='mt-4 text-xl text-white'>
				<h3 className='font-bold'>{`${userInfo.name} ${userInfo.surname} `}</h3>
				<p>Change avatar:</p>
				<div className='flex justify-start gap-x-4 mt-4'>
					<div
						onClick={() => handleChangeAvatar(1)}
						className='w-16 h-16 rounded-half hover:scale-110 hover:cursor-pointer'
					>
						<img
							src={avatar1}
							alt=''
							className='rounded-half w-full h-full object-contain'
						/>
					</div>
					<div
						onClick={() => handleChangeAvatar(2)}
						className='w-16 h-16 rounded-half hover:scale-110 hover:cursor-pointer'
					>
						<img
							src={avatar2}
							alt=''
							className='rounded-half w-full h-full object-contain'
						/>
					</div>
					<div
						onClick={() => handleChangeAvatar(3)}
						className='w-16 h-16 rounded-half hover:scale-110 hover:cursor-pointer'
					>
						<img
							src={avatar3}
							alt=''
							className='rounded-half w-full h-full object-contain'
						/>
					</div>
					<div
						onClick={() => handleChangeAvatar(4)}
						className='w-16 h-16 rounded-half hover:scale-110 hover:cursor-pointer'
					>
						<img
							src={avatar4}
							alt=''
							className='rounded-half w-full h-full object-contain'
						/>
					</div>
					<div
						onClick={() => handleChangeAvatar(5)}
						className='w-16 h-16 rounded-half hover:scale-110 hover:cursor-pointer'
					>
						<img
							src={avatar5}
							alt=''
							className='rounded-half w-full h-full object-contain'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export { ProfilePage }
