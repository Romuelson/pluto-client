import { ComponentType } from 'react';

import { CardProps } from '../../components/card/card.comp';
import { IProductCard } from '../../types/data/product-card/product-card.type';

function withCardList(
	Component: ComponentType<CardProps>,
	list: IProductCard[]
) {
	function WithCardList() {
		return (
			<>
				{list.map((item) => (
					<Component
						key={item.id}
						id={item.id}
						title={item.title}
						price={item.properties.priceList.price}
						path={`${item.properties.vendor}/${item.id}/${item.images.mainFront}`}
					/>
				))}
			</>
		);
	}

	return WithCardList;
}

export default withCardList;
