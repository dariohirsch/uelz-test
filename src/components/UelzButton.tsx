type UelzButtonProps = {
	onClick: () => void
	text: string
}

export const UelzButton = ({ onClick, text }: UelzButtonProps) => {
	return (
		<button
			className='bg-customGreen text-xl text-customWhite py-3 px-6 rounded-md font-inter'
			onClick={onClick}>
			{text}
		</button>
	)
}
