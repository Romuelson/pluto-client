import { LoadingStatus } from '@store/store.enum';
import { Loading } from '@store/store.type';

import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';
import { ProductCardList } from '@components/UI/molecules/card/mocks/card.mock.type';

export type GetCardIdThunk = {
	// type: ELabelSections;
	// id: string[];
	id: string;
};

export type GetCardAllThunk = {
	type: ELabelSections;
};

export type GetCardSectionThunk = {
	type: ELabelSections;
};

// ---

export type ICardsType = {
	page: number;
	data: ProductCardList;
	loading: Loading;
};

export type ICards = {
	[key in ELabelSections]: ICardsType;
};

export type ICardSlice = {
	cards: ICards;
};

// ---

export type SetCardLoadingStatus = {
	type: ELabelSections;
	status: LoadingStatus;
};
