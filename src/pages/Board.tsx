import { useEffect, useState } from 'react'
import card1 from '../assets/Card1.png'
import card2 from '../assets/Card2.png'
import card3 from '../assets/Card3.png'
import card4 from '../assets/Card4.png'
import card5 from '../assets/Card5.png'
import card6 from '../assets/Card6.png'
import card7 from '../assets/Card7.png'
import card8 from '../assets/Card8.png'
import card9 from '../assets/Card9.png'
import number from '../assets/number1.png'

const IMAGES = [card1, card2, card3, card4, card5, card6, card7, card8, card9]
	.flatMap((image) => [`a-${image}`, `b-${image}`])
	.sort(() => Math.random() - 0.5)

export const Board = () => {
	const [selected, setSelected] = useState<string[]>([])
	const [guessed, setGuessed] = useState<string[]>([])

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

	return (
		<div className='bg-customBackground w-screen h-screen flex items-center justify-center '>
			<div className=' grid grid-cols-6 gap-10'>
				{IMAGES.map((image) => {
					const pieces = image.split('-')
					const url = pieces[1]
					const isFlipped = selected.includes(image) || guessed.includes(image)

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
		</div>
	)
}
