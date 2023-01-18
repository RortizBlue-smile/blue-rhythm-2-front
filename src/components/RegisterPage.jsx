import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { InputField } from './common/InputField'
import { register as registerAction, resetStatus } from '../store/auth'
import { useNavigate } from 'react-router-dom'
function RegisterPage() {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const { status } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	const isLoading = status === 'loading'
	const handleRegister = (data) => {
		dispatch(registerAction({ ...data, avatar: 'avatar1' }))
	}
	useEffect(() => {
		if (status === 'success') {
			dispatch(resetStatus())

			navigate('/login')
		}
	}, [status])
	return (
		<>
			<h2 className='text-3xl text-white mb-2'>Register</h2>
			<form
				onSubmit={handleSubmit(handleRegister)}
				className='bg-gradient-to-br from-darkBlue1/50 to-darkBlue2/50 rounded-3xl py-4 px-8 w-1/2 flex flex-col gap-y-4 mobile:w-full'
			>
				<InputField title='Name' name='name' register={register} />
				<InputField title='Last Name' name='surname' register={register} />
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
						className={`bg-blue-500 rounded-3xl px-4 py-2 text-white  text-lg ${
							isLoading ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
						}`}
						disabled={isLoading}
					>
						{isLoading ? 'Loading...' : 'Register'}
					</button>
				</div>
			</form>
		</>
	)
}

export { RegisterPage }
