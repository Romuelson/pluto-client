import { promoMock } from '../../mocks/promo.mock';
import { UsePromoConfigReturn } from './promo-config.type';

import {
	EPromoItemAs,
	EPromoItemViews,
} from '../../elements/promo-item/promo-item.enum';

export const usePromoConfig = (): UsePromoConfigReturn => {
	const { promoListData, promoCarouselData } = promoMock();

	return {
		listConfig: {
			className: 'promo__item',
			list: promoListData,
		},

		carouselConfig: {
			className: 'promo__carousel-item',
			as: EPromoItemAs.div,
			list: promoCarouselData,
			views: EPromoItemViews.carousel,
		},
	};
};
