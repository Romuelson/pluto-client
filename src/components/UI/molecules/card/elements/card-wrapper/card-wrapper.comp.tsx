import { UseCard } from '../../card.type';
import { useCard } from '../../hooks/use.card';

function CardWrapper(props: UseCard) {
	const Card = useCard(props);

	return (
		<div className="card__wrapper" style={{ maxWidth: 320 }}>
			{Card}
		</div>
	);
}

export default CardWrapper;
