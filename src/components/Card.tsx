type CardProps = {
	isFlipped: boolean
	image: string
	selected: string[]
	setSelected: React.Dispatch<React.SetStateAction<string[]>>
	url: string
	numberImage: string | undefined
}

const Card = ({
	isFlipped,
	image,
	selected,
	setSelected,
	url,
	numberImage,
}: CardProps) => {
	return (
		<div
			className={!isFlipped ? 'cursor-pointer' : ''}
			onClick={() =>
				selected.length < 2 &&
				!isFlipped &&
				setSelected((prevSelected) => [...prevSelected, image])
			}>
			{isFlipped ? (
				<img src={url} alt='card' className='w-36' />
			) : (
				<img src={numberImage} alt='card' className='w-36' />
			)}
		</div>
	)
}

export default Card
