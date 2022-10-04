import { LoadingStatus } from '@store/store.enum';
import { Loading, SelectorState } from '@store/store.type';

import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';

import {
	CardSizeItem,
	CardSizeList,
	IProductCard,
	ProductCardId,
	ProductCardList,
} from '@components/UI/molecules/card/mocks/card.mock.type';

export interface ICardsType {
	page: number;
	data: ProductCardList;
	loading: Loading;
}

export type ICards = {
	[key in ELabelSections | string]: ICardsType;
};

export type ICardType = {
	activeId: string;
	activeSection: ELabelSections | string;
	activeSize?: CardSizeItem;
	// activeIndex: string;
};

export type ICard = {
	[key: string]: ICardType | undefined;
};

export type ICardSlice = {
	card: ICard;
	cards: ICards;
};

/* Reducer */

export interface CardReducerProps {
	id: ProductCardId;
	section: ELabelSections | string;
	status: LoadingStatus;
	index: string;
	activeId: ProductCardId;
	activeSize: CardSizeItem;
}

/* Action */

export type CardLoadingStatus = Pick<CardReducerProps, 'section' | 'status'>;

export type CardActiveId = Pick<
	CardReducerProps,
	'id' | 'section' | 'activeId'
>;

export type CardActiveColor = Pick<
	CardReducerProps,
	'id' | 'section' | 'index'
>;

export type CardActiveSize = Pick<CardReducerProps, 'id' | 'activeSize'>;

/* Thunk */

export type CardIdThunk = Pick<CardReducerProps, 'id'>;
export type CardAllThunk = Pick<CardReducerProps, 'section'>;
export type CardSectionThunk = Pick<CardReducerProps, 'section'>;

/* Props */

export type CardTakeCardProps = Pick<CardReducerProps, 'id' | 'section'>;
export type CardTakeCardsProps = Pick<CardReducerProps, 'section'>;
export type CardTakeStatusProps = Pick<CardReducerProps, 'section'>;
export type CardTakeSectionPageProps = Pick<CardReducerProps, 'section'>;
export type CardTakeActiveColorProps = Pick<CardReducerProps, 'id' | 'section'>;
export type CardTakeActiveIdProps = Pick<CardReducerProps, 'id'>;

export type CardTakeActiveSectionProps = Pick<
	CardReducerProps,
	'id' | 'section'
>;

export type CardTakeActiveSizeProps = Pick<CardReducerProps, 'id'>;

/* Selector */

export type CardTakeCard = (
	...args: SelectorState<CardTakeCardProps>
) => IProductCard | undefined;

export type CardTakeCards = (
	...args: SelectorState<CardTakeCardsProps>
) => ProductCardList;

export type CardTakeStatus = (
	...args: SelectorState<CardTakeStatusProps>
) => LoadingStatus;

export type CardTakeSectionPage = (
	...args: SelectorState<CardTakeSectionPageProps>
) => ICardsType['page'];

export type CardTakeActiveColor = (
	...args: SelectorState<CardTakeActiveColorProps>
) => CardReducerProps['index'];

export type CardTakeActiveId = (
	...args: SelectorState<CardTakeActiveIdProps>
) => ICardType['activeId'];

export type CardTakeActiveSection = (
	...args: SelectorState<CardTakeActiveSectionProps>
) => ICardType['activeSection'];

export type CardTakeActiveSize = (
	...args: SelectorState<CardTakeActiveSizeProps>
) => ICardType['activeSize'];
