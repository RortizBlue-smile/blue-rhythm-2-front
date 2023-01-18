import { Navigate, Route, Routes } from 'react-router-dom'
import { AlbumsPage } from './components/AlbumsPage'
import { PrivateRoute, PublicRoute } from './components/common/AuthRoute'
import { LogoutPage } from './components/common/LogoutPage'
import { PlaylistsPage } from './components/PlaylistsPage'
import { HomePage } from './components/HomePage'
import { LoginPage } from './components/LoginPage'
import { MainLayout } from './components/MainLayout'
import { Menu } from './components/Menu'
import { MusicPlayer } from './components/MusicPlayer'
import { RegisterPage } from './components/RegisterPage'
import { SearchPage } from './components/SearchPage'
import { SongInfoPage } from './components/SongInfoPage'
import { SongsPage } from './components/SongsPage'
import { ProfilePage } from './components/ProfilePage'
import { PlayListInfoPage } from './components/PlaylistInfoPage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchPlaylists } from './store/playlists'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchPlaylists())
	}, [])
	return (
		<div className='sm:grid font-ubuntu sm:grid-areas-layout grid-cols-layout sm:grid-rows-layout sm:h-screen bg-gradient-to-br from-blue-600 h-full to-cyan-300 mobile:relative mobile:overflow-auto'>
			<Menu />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<HomePage />} />
					<Route path='songs' element={<SongsPage />} />
					<Route
						path='songs/:id'
						element={
							<PrivateRoute>
								<SongInfoPage />
							</PrivateRoute>
						}
					/>
					<Route path='albums' element={<AlbumsPage />}>
						<Route
							path='albums/:id'
							element={
								<PrivateRoute>
									<SongInfoPage />
								</PrivateRoute>
							}
						/>
					</Route>

					<Route
						path='artists/:id'
						element={
							<PrivateRoute>
								<SongInfoPage />
							</PrivateRoute>
						}
					/>

					<Route
						path='playlists'
						element={
							<PrivateRoute>
								<PlaylistsPage />
							</PrivateRoute>
						}
					></Route>
					<Route
						path='playlists/:id'
						element={
							<PrivateRoute>
								<PlayListInfoPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='search'
						element={
							<PrivateRoute>
								<SearchPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='login'
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path='logout'
						element={
							<PrivateRoute>
								<LogoutPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='register'
						element={
							<PublicRoute>
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						path='profile'
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route path='*' element={<p>not found</p>} />
			</Routes>
			<MusicPlayer />
		</div>
	)
}

export default App
