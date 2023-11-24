import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './index.css'
import Game from './pages/Game'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/game' element={<Game />} />
		</Routes>
	)
}

export default App
