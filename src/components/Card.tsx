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
			className='cursor-pointer'
			onClick={() =>
				selected.length < 2 &&
				setSelected((prevSelected) => [...prevSelected, image])
			}>
			{isFlipped ? (
				<img src={url} alt='card' className='w-38' />
			) : (
				<img src={numberImage} alt='card' className='w-38' />
			)}
		</div>
	)
}

export default Card
