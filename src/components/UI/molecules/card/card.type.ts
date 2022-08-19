import { Props, ReactNode } from 'react';

import type {
	takeCard,
	takeCards,
	takeActiveId,
	takeCardsStatus,
	takeActiveColor,
	takeSectionPage,
	takeActiveSection,
} from '@store/slices/components/card/card.selector';

import {
	CardTakeCardProps,
	CardTakeCardsProps,
	CardTakeStatusProps,
	CardTakeActiveIdProps,
	CardTakeActiveColorProps,
	CardTakeSectionPageProps,
	CardActiveColor,
	CardActiveId,
	CardTakeActiveSectionProps,
} from '@store/slices/components/card/card.type';

import { ELabelSections } from './mocks/card.mock.enum';
import { CardSizeEnum, UseCardType } from './card.enum';

import {
	IProductCard,
	CardColorList,
	ProductCardId,
} from './mocks/card.mock.type';

export type CardChildrenProp = {
	id: ProductCardId;
	path: string;
	price: number;
	title: string;
	colorList: CardColorList;
};

export type CardConfig = {
	type: ELabelSections;
	id: string[];
	display: {
		size: CardSizeEnum;
	};
};

export type CardPropsDisplay = {
	size?: CardSizeEnum;
};

export type CardProps = CardPropsDisplay & {
	className?: string;
	// config: CardChildrenProp;
	children: ReactNode;
};

// ---

export type WithCardProps = {
	initCard: IProductCard;
	activeCard: IProductCard;
};

export type WithCardConfig = (props: WithCardProps) => {
	initCard: IProductCard;
	activeCard: IProductCard;
	indexActiveColor: string;
	display?: CardPropsDisplay;
};

export type WithCardArgs = {
	children: IProductCard;
	key: string;
	config: ReturnType<WithCardConfig>;
};

export type CardConfigCallback = (props: WithCardProps) => WithCardArgs;

//---

export type CardContextProps = {
	className: string;
	price: number;
	title: string | undefined;
};

export type CardPictureProps = {
	id: string | undefined;
	path: string;
	className: string;
};

export type CardControlProps = {
	className: string;
	id: ProductCardId | undefined;
};

export type CardColorProps = {
	className: string;
	colorList: CardColorList;
	id: ProductCardId;
	initId: ProductCardId;
	sectionType: ELabelSections;
	activeIndex: string;
};

// ---

export type UseCardActiveCard = {
	activeId: ProductCardId;
	activeSection: ELabelSections | string;
};

export type UseCard = {
	id: ProductCardId;
	section: ELabelSections | string;
	display?: CardPropsDisplay;
	// activeCard: UseCardActiveCard;
};

// export type UseCardType = {
// 	type: ELabelSections;
// 	display?: CardPropsDisplay;
// };

export type UseCardProps = UseCardType & {
	// id: string[];
	id: string;
};

export type UseCardListProps = UseCardType;

export type UseCardUpload = {
	id: ProductCardId;
	type: ELabelSections;
};

export type UseCardUpdate = {
	id: ProductCardId;
};

export type UseCardDispatchReturn = {
	getId: (props: CardTakeCardProps) => void;
	getSection: (props: CardTakeCardsProps) => void;
	setActiveColor: (props: CardActiveColor) => void;
	setActiveId: (props: CardActiveId) => void;
};

export type UseCardSelectorReturn = {
	card: (props: CardTakeCardProps) => ReturnType<typeof takeCard>;
	cards: (props: CardTakeCardsProps) => ReturnType<typeof takeCards>;
	status: (props: CardTakeStatusProps) => ReturnType<typeof takeCardsStatus>;
	activeId: (props: CardTakeActiveIdProps) => ReturnType<typeof takeActiveId>;

	page: (
		props: CardTakeSectionPageProps
	) => ReturnType<typeof takeSectionPage>;

	activeColor: (
		props: CardTakeActiveColorProps
	) => ReturnType<typeof takeActiveColor>;

	activeSection: (
		props: CardTakeActiveSectionProps
	) => ReturnType<typeof takeActiveSection>;
};
