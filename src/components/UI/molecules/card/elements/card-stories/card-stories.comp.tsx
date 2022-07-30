import { useCard } from '../../use.card';
import { ELabelSections } from '../../mocks/card.mock.enum';
import { CardSizeEnum } from '../../card.enum';

function CardStories() {
	// const arr = ['94d17faa-ae31-4a2c-9b54-d2f465d294ca'];

	const config = {
		type: ELabelSections.collections,
		id: '94d17faa-ae31-4a2c-9b54-d2f465d294ca',
		display: {
			size: CardSizeEnum.S,
		},
	};

	const Card = useCard(config);

	return <div style={{ maxWidth: 320 }}>{Card ? Card() : null}</div>;
}

export default CardStories;
