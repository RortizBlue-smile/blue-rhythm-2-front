import { HashRouter, Route, Routes } from 'react-router-dom'
import { AlbumsPage } from './components/AlbumsPage'
import { Placeholder } from './components/common/Placeholder'
import { PlaylistsPage } from './components/common/PlaylistsPage'
import { HomePage } from './components/HomePage'
import { MainLayout } from './components/MainLayout'
import { Menu } from './components/Menu'
import { MusicPlayer } from './components/MusicPlayer'
import { SongsPage } from './components/SongsPage'

function App() {
	return (
		<div className='grid font-ubuntu grid-areas-layout grid-cols-layout grid-rows-layout h-screen bg-gradient-to-br from-blue-600 to-cyan-300 '>
			<Menu />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<HomePage />} />
					<Route path='songs' element={<SongsPage />} />
					<Route path='albums' element={<AlbumsPage />} />
					<Route path='playlists' element={<PlaylistsPage />} />
				</Route>
				<Route path='/login' element={<Placeholder />} />
				<Route path='/register' element={<Placeholder />} />
				<Route path='*' element={<p>Not found</p>} />
			</Routes>
			<MusicPlayer />
		</div>
	)
}

export default App
