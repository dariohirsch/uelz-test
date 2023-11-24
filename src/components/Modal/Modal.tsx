import Modal from 'react-modal'
import Clock from '../../assets/Clock.png'
import Close from '../../assets/X.png'
import formatTime from './helpers'
import { UelzButton } from '../UelzButton'

type CustomModalProps = {
	isGameWon: boolean
	handleResetGame: () => void
	setIsGameWon: (value: boolean) => void
	startTime: number
	endTime: number
}

export const CustomModal = ({
	isGameWon,
	handleResetGame,
	setIsGameWon,
	startTime,
	endTime,
}: CustomModalProps) => {
	return (
		<Modal
			className='bg-customWhite flex items-center justify-center self-center rounded-md'
			ariaHideApp={false}
			isOpen={isGameWon}
			shouldCloseOnOverlayClick={false}
			style={{
				overlay: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				},
				content: {
					width: '38%',
					height: '42%',
					border: 'none',
					outline: 'none',
				},
			}}>
			<div className='flex items-center flex-col w-full'>
				<div
					className='ml-auto mr-4 cursor-pointer'
					onClick={() => setIsGameWon(false)}>
					<img src={Close} alt='close' className='w-5 h-5' />
				</div>
				<h2 className='text-customBlue font-inter text-xl font-medium'>
					¡Lo haz conseguido!
				</h2>
				<div className='flex flex-row items-center'>
					<img src={Clock} alt='clock' className='w-10 h-10' />
					<p className='text-customBlue font-inter text-6xl mx-4 my-8'>
						{formatTime(endTime - startTime)}
					</p>
				</div>
				<div className='bg-customGrey h-px w-full mb-6'></div>
				<UelzButton text='Jugar otra vez' onClick={handleResetGame} />
			</div>
		</Modal>
	)
}
