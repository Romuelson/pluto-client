import * as EPromoItem from '../promo-item/promo-item.enum';

import { PromoItem } from '../promo-item/promo-item.type';

export type PromoList = PromoItem[];

export type PromoListConfig = {
	className?: string;
	as?: EPromoItem.EPromoItemAs;
	views?: EPromoItem.EPromoItemViews;
	list: PromoList;
};

export type PromoListProps = {
	children?: JSX.Element;
	config: PromoListConfig;
};

export type CreateListItemArgs = PromoListProps;
