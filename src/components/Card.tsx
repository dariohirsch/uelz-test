type CardProps = {
	isFlipped: boolean
	image: string
	selected: string[]
	setSelected: React.Dispatch<React.SetStateAction<string[]>>
	emoji: string
	numberImage: number
}

const Card = ({
	isFlipped,
	image,
	selected,
	setSelected,
	emoji,
	numberImage,
}: CardProps) => {
	return (
		<div
			className={!isFlipped ? 'cursor-pointer' : 'cursor-default'}
			onClick={() =>
				selected.length < 2 &&
				!isFlipped &&
				setSelected((prevSelected) => [...prevSelected, image])
			}>
			{isFlipped ? (
				<div className='w-36 h-36 flex items-center justify-center rounded-xl border-4 border-solid border-white bg-customYellow custom-box-shadow'>
					<p className='text-6xl'>{emoji}</p>
				</div>
			) : (
				<div
					className='w-36 h-36 flex items-center justify-center rounded-xl border-4 border-solid border-white 
				 custom-box-shadow custom-gradient-background'>
					<p className='text-customWhite font-inter font-semibold text-6xl'>
						{numberImage}
					</p>
				</div>
			)}
		</div>
	)
}

export default Card
