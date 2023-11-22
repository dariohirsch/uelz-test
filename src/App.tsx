import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import './index.css'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

export default App
