import React, { useEffect, useRef, useState } from 'react'

function Select({ multiple, value, onChange, options }) {
	const [isOpen, setIsOpen] = useState(false)
	const [highlitedIndex, setHighlitedIndex] = useState(0)
	const containerRef = useRef(null)

	const clearOptions = () => {
		multiple ? onChange([]) : onChange(undefined)
	}
	const selectedOption = (option) => {
		if (multiple) {
			if (value.includes(option)) {
				onChange(value.filter((o) => o !== option))
			} else {
				onChange([...value, option])
			}
		} else {
			if (option !== value) onChange(option)
		}
	}
	const isOptionSelected = (option) => {
		return multiple ? value.includes(option) : option === value
	}

	useEffect(() => {
		if (isOpen) setHighlitedIndex(0)
	}, [isOpen])

	useEffect(() => {
		const handler = (e) => {
			if (e.target !== containerRef.current) return
			switch (e.code) {
				case 'Enter':
				case 'Space':
					setIsOpen((prev) => !prev)
					if (isOpen) selectedOption(options[highlitedIndex])
					break

				case 'ArrowUp':
				case 'ArrowDown': {
					if (!isOpen) {
						setIsOpen(true)
						break
					}
					const newValue = highlitedIndex + (e.code === 'ArrowDown' ? 1 : -1)
					if (newValue >= 0 && newValue < options.length) {
						setHighlitedIndex(newValue)
					}
					break
				}
				case 'Escape':
					setIsOpen(false)
					break
			}
		}
		containerRef.current?.addEventListener('keydown', handler)
		return () => {
			containerRef.current?.removeEventListener('keydown', handler)
		}
	}, [isOpen, highlitedIndex, options])

	return (
		<div
			ref={containerRef}
			className=''
			tabIndex={0}
			onClick={(e) => setIsOpen((prev) => !prev)}
			onBlur={() => setIsOpen(false)}
		>
			<span className=''>
				{multiple
					? value.map((v) => (
							<button
								key={v.value}
								onClick={(e) => {
									e.stopPropagation()
									selectedOption(v)
								}}
								className=''
							>
								{v.label}
								<span className=''>&times;</span>
							</button>
					  ))
					: value?.label}
			</span>
			<button
				onClick={(e) => {
					e.stopPropagation()
					clearOptions()
				}}
				className=''
			>
				&times;
			</button>
			<div className=''></div>
			<div className=''></div>
			<ul className={` ${isOpen ? '' : ''}`}>
				{options.map((option, index) => (
					<li
						key={option.value}
						className={` ${isOptionSelected(option) ? '' : ''} ${
							index === highlitedIndex ? '' : ''
						}`}
						onClick={(e) => {
							e.stopPropagation()
							selectedOption(option)
							setIsOpen(false)
						}}
						onMouseEnter={() => setHighlitedIndex(index)}
					>
						{option.label}
					</li>
				))}
			</ul>
		</div>
	)
}

export { Select }
