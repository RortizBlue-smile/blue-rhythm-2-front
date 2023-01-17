import React from 'react'
import { useLocation } from 'react-router-dom'
import { RowList } from './common/RowList'

function PlayListInfoPage() {
	const location = useLocation()
	const listInfo = location.state
	console.log(listInfo)
	return (
		<div>
			<RowList label={listInfo.title} list={listInfo.songs} />
		</div>
	)
}

export { PlayListInfoPage }
