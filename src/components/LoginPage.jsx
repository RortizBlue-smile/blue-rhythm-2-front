import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, resetStatus } from '../store/auth'
import { InputField } from './common/InputField'

function LoginPage() {
	const { register, handleSubmit } = useForm()
	const { status } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	const isLoading = status === 'loading'
	const dispatch = useDispatch()
	const handleLogin = (data) => {
		dispatch(login(data))
	}
	useEffect(() => {
		if (status === 'success') {
			dispatch(resetStatus())
			navigate('/')
		}
	}, [status])
	return (
		<>
			<h2 className='text-3xl text-white mb-2'>Login</h2>
			<form
				onSubmit={handleSubmit(handleLogin)}
				className='bg-gradient-to-br from-darkBlue1/50 to-darkBlue2/50 rounded-3xl py-4 px-8 w-1/2 flex flex-col gap-y-4 mobile:w-full'
			>
				<InputField
					title='Email'
					name='email'
					register={register}
					type={'email'}
				/>
				<InputField
					title='Password'
					name='password'
					register={register}
					type={'password'}
				/>
				<div className='div flex justify-center'>
					<button
						type='submit'
						className='bg-blue-500 rounded-3xl px-4 py-2 text-white hover:bg-blue-700 text-lg'
					>
						{isLoading ? 'Loading...' : 'Login'}
					</button>
				</div>
			</form>
		</>
	)
}

export { LoginPage }
