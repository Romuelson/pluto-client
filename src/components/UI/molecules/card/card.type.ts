import { CardSizeEnum } from './card.enum';
import { ELabelSections } from './mocks/card.mock.enum';

import {
	CardColorList,
	IProductCard,
	ProductCardId,
} from './mocks/card.mock.type';

export type CardChildrenProp = {
	id: ProductCardId;
	path: string;
	price: number;
	title: string;
	colorList: CardColorList;
};

export type CardPropsDisplay = {
	size?: CardSizeEnum;
};

export type CardProps = CardPropsDisplay & {
	className?: string;
	children: CardChildrenProp;
};

// ---

export type WithCardArgs = {
	children: IProductCard;
	key: string;
};

//---

export type CardContextProps = {
	className: string;
	price: number;
	title: string;
};

export type CardPictureProps = {
	id: string;
	path: string;
	className: string;
};

export type CardControlProps = {
	className: string;
	id: ProductCardId;
};

export type CardColorProps = {
	className: string;
	colorList: CardColorList;
};

// ---

export type UseCardType = {
	type: ELabelSections;
	display?: CardPropsDisplay;
};

export type UseCardProps = UseCardType & {
	id: string[];
};

export type UseCardListProps = UseCardType;
