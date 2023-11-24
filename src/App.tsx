import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './index.css'
import { Board } from './pages/Board'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/board' element={<Board />} />
		</Routes>
	)
}

export default App
