import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useCard } from '../../hooks/use.card';
import { UseCard } from '../../card.type';

function CardPage() {
	const { id = '3175ec45-31ed-4745-8e68-a0587f0a8151', section = 'sale' } =
		useParams();

	const isMediumScreen = useMediaQuery({ minWidth: 1366 });

	const createConfig: UseCard = {
		id,
		section,
		display: {
			picture: {
				page: true,
				carousel: !isMediumScreen,
			},
		},
	};

	const Page = () => useCard(createConfig);

	return <Page />;
}

export default CardPage;
