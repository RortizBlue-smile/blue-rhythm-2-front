import React, { useEffect } from 'react'
import { api } from '../services/apiService'
import { CardList } from './common/CardList'

function HomePage() {
	const callAPI = async () => {
		api.get()
	}
	useEffect(() => {}, [])
	return (
		<>
			<CardList label={'Songs'} />
			<CardList label={'Albums'} />
		</>
	)
}

export { HomePage }
