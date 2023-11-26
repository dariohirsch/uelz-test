import { useEffect, useState } from 'react'
import { CustomModal } from './Modal/Modal'
import { useQuery } from 'react-query'
import fetchEmojis from '../api/apiEmojis'
import Card from './Card'

export const Board = () => {
	const { data: EMOJIS, isLoading, error } = useQuery('emojis', fetchEmojis)
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
			}, 800)
		}
	}, [selected])

	useEffect(() => {
		if (guessed.length === EMOJIS?.length) {
			setEndTime(Date.now())
			setIsGameWon(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [guessed])

	const handleResetGame = () => {
		setIsGameWon(false)
		location.reload()
	}

	if (isLoading) return <div>Loading...</div>

	if (error) return <div>Error getting images...</div>

	return (
		<div className='bg-customBackground w-screen h-screen flex items-center justify-center '>
			<div className=' grid grid-cols-6 gap-10'>
				{EMOJIS?.map((image, index) => {
					const pieces = image.split('-')
					const emoji = pieces[1]
					const isFlipped = selected.includes(image) || guessed.includes(image)

					return (
						<Card
							key={image}
							isFlipped={isFlipped}
							emoji={emoji}
							image={image}
							selected={selected}
							setSelected={setSelected}
							numberImage={index + 1}
						/>
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
