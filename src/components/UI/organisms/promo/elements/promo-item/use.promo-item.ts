import { createElement } from 'react';

import ItemDefault from './views/item-default/item-default.view';
import ItemCarousel from './views/item-carousel/item-carousel.view';

import { PromoItem } from './promo-item.type';
import { EPromoItemViews } from './promo-item.enum';

export const UsePromoItem = () => {
	const createContext = (item: PromoItem, views: EPromoItemViews) => {
		switch (views) {
			case EPromoItemViews.carousel:
				return createElement(ItemCarousel, { item });

			default:
				return createElement(ItemDefault, { item });
		}
	};

	return { createContext };
};
