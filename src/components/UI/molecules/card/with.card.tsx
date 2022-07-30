import Card from './card.comp';

import { WithCardArgs } from './card.type';

import CardPicture from './elements/card-picture/card-picture.comp';
import CardColor from './elements/card-color/card-color.comp';
import CardContext from './elements/card-context/card-context.comp';
import CardControl from './elements/card-control/card-control.comp';

function withCard(props: WithCardArgs) {
	const { children, key, ...otherProps } = props;

	const params = {
		id: children.id,
		title: children.title,
		price: children.properties.priceList.price,
		path: `${children.properties.vendor}/${children.id}/${children.images.mainFront}`,
		colorList: children.properties.colorList,
	};

	function WithCard() {
		return (
			<Card key={key} {...otherProps}>
				<CardPicture
					className="card__picture"
					path={params.path}
					id={params.id}
				/>

				<CardColor
					className="card__color"
					colorList={params.colorList}
				/>

				<CardContext
					className="card__context"
					title={params.title}
					price={params.price}
				/>

				<CardControl className="card__control" id={params.id} />
			</Card>
		);
	}

	return WithCard;
}

export default withCard;
