import Card from './card.comp';

import { WithCardArgs } from './card.type';

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
		return <Card children={params} key={key} {...otherProps} />;
	}

	return WithCard;
}

export default withCard;
