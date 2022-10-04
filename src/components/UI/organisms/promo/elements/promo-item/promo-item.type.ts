import * as EPromoItem from './promo-item.enum';

export type PromoItem = {
	id: string;
	title: string;
	link: string;
	linkTitle: string;
	description?: string;
};

export type PromoItemUnion = PromoItem;

export type PromoItemConfig = {
	as?: EPromoItem.EPromoItemAs;
	item?: PromoItemUnion;
	views?: EPromoItem.EPromoItemViews;
};

export type PromoItemProps = {
	children?: React.ReactNode;
	className?: string;
	config: PromoItemConfig;
};
