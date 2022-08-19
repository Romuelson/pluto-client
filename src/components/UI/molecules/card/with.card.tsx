/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */

import Card from './card.comp';

import { WithCardArgs } from './card.type';

import CardColor from './elements/card-color/card-color.comp';
import CardPicture from './elements/card-picture/card-picture.comp';
import CardContext from './elements/card-context/card-context.comp';
import CardControl from './elements/card-control/card-control.comp';

function withCard(props: WithCardArgs) {
	const { children, key, config, ...otherProps } = props;
	const { initCard, indexActiveColor } = config;

	const params = {
		id: children.id,
		title: children.title,
		price: children.properties.priceList.price,
		path: `${children.properties.vendor}/${children.id}/${children.images.mainFront}`,
		colorList: children.properties.colorList,
		section: children.properties.labelList.sections,
	};

	function WithCard() {
		const vendorList = initCard?.properties.colorList.vendorList;

		let activeId: string | undefined;

		if (vendorList?.length && Number(indexActiveColor)) {
			activeId = vendorList[Number(indexActiveColor) - 1].id;
		}

		return (
			<Card key={key} {...otherProps}>
				<CardPicture
					className="card__picture"
					path={params.path}
					id={params.id}
				/>

				<CardColor
					className="card__color"
					colorList={initCard.properties.colorList}
					id={params.id}
					initId={initCard.id}
					sectionType={initCard.properties.labelList.sections}
					activeIndex={indexActiveColor}
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
