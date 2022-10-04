import { createElement } from 'react';

import PromoItem from '../promo-item/promo-item.comp';
import { CreateListItemArgs } from './promo-list.type';

export const usePromoList = () => {
	return {
		createListItem: (props: CreateListItemArgs) => {
			const { children, config } = props;
			const { className, as, views, list } = config;

			return list.map((item, index) => {
				if (children && index === 0) {
					return createElement(PromoItem, {
						key: item.id,
						children,
						className,
						config: {},
					});
				}

				return createElement(PromoItem, {
					key: item.id,
					className,
					config: { item, as, views },
				});
			});
		},
	};
};
