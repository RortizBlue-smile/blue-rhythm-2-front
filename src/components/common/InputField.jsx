import React from 'react'

function InputField({ type = 'text', required = true, name, title, register }) {
	return (
		<div className='flex flex-col '>
			<label className='text-xl text-white ' htmlFor={name}>
				{title}
			</label>
			<input
				className='rounded-2xl form-input'
				type={type}
				required={required}
				placeholder={title}
				{...register(name)}
			/>
		</div>
	)
}

export { InputField }
