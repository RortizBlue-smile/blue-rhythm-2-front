import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	createPlaylist,
	fetchPlaylists,
	fetchPublicPlaylists,
	resetUpdating,
} from '../store/playlists'
import { PlayListRow } from './common/PlayListRow'
import { AiOutlinePlus } from 'react-icons/ai'
import LoadingSpinner from './common/LoadingSpinner'
import { useForm } from 'react-hook-form'

function PlaylistsPage() {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const { publicList, list, isLoading, isUpdating, lastFetch } = useSelector(
		(state) => state.music.playlists
	)
	const [activeAddForm, setActiveAddForm] = useState(false)
	useEffect(() => {
		if (isUpdating === 'done') {
			setActiveAddForm(false)
			dispatch(fetchPlaylists())
			dispatch(fetchPublicPlaylists())
			dispatch(resetUpdating())
		}
	}, [isUpdating])
	const toggleAddPlaylist = () => {
		setActiveAddForm((prev) => !prev)
	}
	const handleOnSubmit = ({ name, isPublic }) => {
		dispatch(createPlaylist({ name, isPublic, songs: [] }))
	}
	if (isLoading) {
		return <LoadingSpinner />
	}
	return (
		<>
			<div className='mb-4'>
				<div className='flex justify-start items-center gap-x-2 mb-4'>
					<h2 className='text-3xl text-white '>Private</h2>
					<button
						className='bg-blue-700 w-8 h-8 rounded-half  text-white flex justify-center items-center text-lg hover:bg-blue-900'
						onClick={toggleAddPlaylist}
					>
						<AiOutlinePlus />
					</button>
				</div>
				{list.length > 0 ? (
					list.map((item, index) => <PlayListRow listInfo={item} key={index} />)
				) : (
					<p className='text-white text-center'>
						You dont have playlists, Create a new One
					</p>
				)}
			</div>
			{activeAddForm && (
				<form
					onSubmit={handleSubmit(handleOnSubmit)}
					className='flex justify-center items-center gap-x-4 text-white font-bold mobile:flex-col mobile:items-start mobile:gap-y-4'
				>
					<div className='flex justify-center items-center gap-x-4 '>
						<label
							htmlFor='name'
							className='bg-black/30 px-4 py-2 mobile:rounded-2xl'
						>
							Playlist name
						</label>
						<input
							type='text'
							required
							{...register('name')}
							className='text-black font-normal  '
							placeholder='Awesome playlist'
						/>
					</div>
					<div className='flex justify-center items-center gap-x-4 mobile:self-center  '>
						<label
							htmlFor='isPublic'
							className='bg-black/30 px-4 py-2 mobile:rounded-2xl'
						>
							Public
						</label>
						<input
							type='checkbox'
							{...register('isPublic')}
							className='w-8 h-8'
						/>
					</div>
					<button
						type='submit'
						className='bg-blue-600 px-4 py-2 font-normal rounded-3xl hover:bg-blue-700 mobile:self-center'
					>
						{isUpdating === 'updating' && 'Creating'}
						{isUpdating === 'error' && 'Try Again'}
						{isUpdating === 'none' && 'Create'}
					</button>
				</form>
			)}
			<div className=''>
				<h2 className='text-3xl mb-4 text-white'>Public</h2>
				{publicList.map((item, index) => (
					<PlayListRow listInfo={item} key={index} />
				))}
			</div>
		</>
	)
}

export { PlaylistsPage }
