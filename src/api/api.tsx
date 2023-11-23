import card1 from '../assets/Card1.png'
import card2 from '../assets/Card2.png'
import card3 from '../assets/Card3.png'
import card4 from '../assets/Card4.png'
import card5 from '../assets/Card5.png'
import card6 from '../assets/Card6.png'
import card7 from '../assets/Card7.png'
import card8 from '../assets/Card8.png'
import card9 from '../assets/Card9.png'

const fetchImages = () => {
	const IMAGES = [card1, card2, card3, card4, card5, card6, card7, card8, card9]
		.flatMap((image) => [`a-${image}`, `b-${image}`])
		.sort(() => Math.random() - 0.5)

	return IMAGES
}

export default fetchImages
