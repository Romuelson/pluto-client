/* eslint-disable react/destructuring-assignment */

import { useCard } from '../../use.card';
import { UseCard } from '../../card.type';

function CardWrapper(props: UseCard) {
	const Card = useCard(props);

	return <div style={{ maxWidth: 320 }}>{Card}</div>;
}

export default CardWrapper;
