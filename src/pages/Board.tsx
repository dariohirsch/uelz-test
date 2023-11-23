import { useEffect, useState } from 'react'
import number from '../assets/number1.png'
import { CustomModal } from '../components/Modal/Modal'
import { useQuery } from 'react-query'
import fetchImages from '../api/api'

export const Board = () => {
	const { data: IMAGES, isLoading } = useQuery('images', fetchImages)
	const [selected, setSelected] = useState<string[]>([])
	const [guessed, setGuessed] = useState<string[]>([])
	const [isGameWon, setIsGameWon] = useState<boolean>(false)
	const [startTime, setStartTime] = useState<number>(0)
	const [endTime, setEndTime] = useState<number>(0)

	useEffect(() => {
		setStartTime(Date.now())
	}, [])

	useEffect(() => {
		if (selected.length === 2) {
			if (selected[0].split('-')[1] === selected[1].split('-')[1]) {
				setGuessed((guessed) => guessed.concat(selected))
			}
			setTimeout(() => {
				setSelected([])
			}, 1000)
		}
	}, [selected])

	useEffect(() => {
		if (IMAGES && guessed.length === IMAGES.length) {
			setEndTime(Date.now())
			setTimeout(() => {
				setIsGameWon(true)
			}, 1000)
		}
	}, [guessed])

	const handleResetGame = () => {
		setIsGameWon(false)
		location.reload()
	}

	if (isLoading) return <div>Loading...</div>

	return (
		<div className='bg-customBackground w-screen h-screen flex items-center justify-center '>
			<div className=' grid grid-cols-6 gap-10'>
				{IMAGES &&
					IMAGES.map((image) => {
						const pieces = image.split('-')
						const url = pieces[1]
						const isFlipped =
							selected.includes(image) || guessed.includes(image)

						return (
							<div
								className={`cursor-pointer ${isFlipped ? 'flip' : ''}`}
								key={image}
								onClick={() =>
									selected.length < 2 &&
									setSelected((selected) => selected.concat(image))
								}>
								{isFlipped ? (
									<img src={url} alt='card' className='w-40' />
								) : (
									<img src={number} alt='card' className='w-40' />
								)}
							</div>
						)
					})}
			</div>
			<CustomModal
				handleResetGame={handleResetGame}
				isGameWon={isGameWon}
				setIsGameWon={setIsGameWon}
				startTime={startTime}
				endTime={endTime}
			/>
		</div>
	)
}
