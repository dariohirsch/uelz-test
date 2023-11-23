import { useNavigate } from 'react-router-dom'
import TitleLogo from '../assets/Logo.png'

export const Home = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/board')
	}

	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center bg-customBlue '>
			<img src={TitleLogo} alt='logo' className='w-1/4' />
			<h3 className='text-3xl text-white font-inter mb-12'>Test de memoria</h3>
			<button
				onClick={handleClick}
				className='bg-customGreen text-xl text-white py-3 px-6 rounded-md font-inter'>
				Comenzar
			</button>
		</div>
	)
}
