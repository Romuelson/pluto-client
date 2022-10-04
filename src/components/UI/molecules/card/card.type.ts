import React, { ReactNode } from 'react';

import { TextProps } from '@components/UI/atoms/text/text.type';

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
	CardActiveSize,
} from '@store/slices/components/card/card.type';

import { ELabelSections } from './mocks/card.mock.enum';
import { CardSizeEnum, UseCardType } from './card.enum';

import {
	IProductCard,
	CardColorList,
	ProductCardId,
	ProductCardImages,
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
	picture: TCardPictureDisplay;
	// size?: CardSizeEnum;
};

export type CardProps = {
	className?: string;
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
	// viewType: UseCard['viewType'];
};

export type WithCardArgs = {
	children: IProductCard;
	key: string;
	config: ReturnType<WithCardConfig>;
	display: CardPropsDisplay;
};

export type CardConfigCallback = (props: WithCardProps) => WithCardArgs;

//---

export type CardContextConfig = {
	price: number;
	title: string;
	page: boolean;
	section: ELabelSections;
};

export type CardContextProps = {
	className: string;
	children: React.ReactNode;
	config: CardContextConfig;
};

export type CardPictureTransferProps<T> = {
	className: string;
	config: T;
	display: TCardPictureDisplay;
};

export type CardPictureProps = CardPictureTransferProps<
	Omit<TCardPictureConfig, 'paths'>
>;
export type CardPictureListProps = CardPictureTransferProps<
	Omit<TCardPictureConfig, 'path'>
>;

export type CardControlConfig = {
	id: ProductCardId;
	section: ELabelSections;
};

export type CardControlDisplay = {
	page: boolean;
};

export type CardControlProps = {
	className: string;
	config: CardControlConfig;
	display: CardControlDisplay;
};

// export type CardColorProps = {
// 	className: string;
// 	id: ProductCardId;
// 	initId: ProductCardId;
// 	initColorList: CardColorList;
// 	colorList: CardColorList;
// 	sectionType: ELabelSections;
// 	activeIndex: string;
// 	page: boolean;
// };

export type ColorConfigArgs = {
	id: ProductCardId;
	section: ELabelSections;
	colorList: CardColorList;
};

export type ColorConfigInit = ColorConfigArgs;
export type ColorConfigCurrent = ColorConfigArgs;

export type CardColorConfig = {
	init: ColorConfigInit;
	current: ColorConfigCurrent;
};

export type CardColorDisplay = {
	page: boolean;
};

export type CardColorProps = {
	className: string;
	config: CardColorConfig;
	display: CardColorDisplay;
};

export type CardMainInfoProps = CardContextConfig & {
	className: string;
};

export type CardFeatureProps = {
	className: string;
	children: React.ReactNode;
};

// ---

export type UseCardActiveCard = {
	activeId: ProductCardId;
	activeSection: ELabelSections | string;
};

export type UseCard = {
	id: ProductCardId;
	section: ELabelSections | string;
	display: CardPropsDisplay;
	// viewType: UseCardType;
};

export type UseCardList = {
	section: ELabelSections;
	display: CardPropsDisplay;
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
	setActiveSize: (props: CardActiveSize) => void;
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

/** */

export type CardFieldsetItem = {
	key: string;
	value: string;
	section?: ELabelSections;
	labelStyle?: React.CSSProperties;
	amount?: string;
};

export type CardFieldsetList = {
	name: string;
	values: CardFieldsetItem[];
};

export type CardFieldsetLegendItem = {
	className: string;
	children: string;
};

export type CardFieldsetLegend = CardFieldsetLegendItem[];

export type CardFieldsetConfig = {
	id: ProductCardId;
	list: CardFieldsetList;
	legend: CardFieldsetLegend;
	keyChecked: string;
	page: boolean;
};

export type CardFieldsetDisplay = {
	disableLabel?: boolean;
};

export type CardFieldsetProps = {
	className: string;
	fieldsetClickHandler: (evt: React.SyntheticEvent<EventTarget>) => void;
	config: CardFieldsetConfig;
	display: CardFieldsetDisplay;
};

export type CraeteLegendContext = (
	props: CardFieldsetLegendItem
) => React.FunctionComponentElement<TextProps>;

/** */

export type TCardPictureConfig = {
	id: ProductCardId;
	path: string;
	paths: ProductCardImages;
	vendor: string;
};

export type TCardPictureDisplay = {
	page: boolean;
	carousel: boolean;
};

export type UseCardPicture = CardPictureTransferProps<TCardPictureConfig>;
