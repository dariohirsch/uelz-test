const fetchEmojis = () => {
	const EMOJIS = ['🤠', '😳', '🤑', '😒', '🥸', '🥰', '🥲', '😎', '🤓']
		.flatMap((emoji) => [`a-${emoji}`, `b-${emoji}`])
		.sort(() => Math.random() - 0.5)

	return EMOJIS
}

export default fetchEmojis
