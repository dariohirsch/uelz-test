import { useNavigate } from 'react-router-dom'
import titleLogo from '../assets/main-logo.png'
import { UelzButton } from '../components/UelzButton'

export const Home = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/game')
	}

	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center bg-customBlue '>
			<img src={titleLogo} alt='logo' className='w-96' />
			<h3 className='text-3xl text-customWhite font-inter mb-12'>
				Test de memoria
			</h3>
			<UelzButton onClick={handleClick} text='Comenzar' />
		</div>
	)
}
