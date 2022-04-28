/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import {
	PayloadCardList,
	ProductCardList,
} from '../../../types/data/product-card/product-card.type';

/* Store - Enums */
import { DataActionType, ReducerType } from '../../store.enum';
import { ELabelSections } from '../../../types/data/product-card/product-card.enum';
import { DataStatusType } from './data.enum';

export type ISliceCardsType = {
	data: ProductCardList;
	isLoading: DataStatusType;
};

export type ISliceCards = {
	[key in ELabelSections]: ISliceCardsType;
};

export type IDataSlice = {
	cards: ISliceCards;
};

const initialState: IDataSlice = {
	cards: {
		all: {
			data: [],
			isLoading: DataStatusType.sleeping,
		},
		novelties: {
			data: [],
			isLoading: DataStatusType.sleeping,
		},
		collections: {
			data: [],
			isLoading: DataStatusType.sleeping,
		},
		sale: {
			data: [],
			isLoading: DataStatusType.sleeping,
		},
	},
};

export type IStatusCards = {
	type: ELabelSections;
	status: DataStatusType;
};

export const dataSlice = createSlice({
	name: ReducerType.data,
	initialState,
	reducers: {
		[DataActionType.setCards]: (
			state,
			action: PayloadAction<PayloadCardList>
		) => {
			switch (action.payload.type) {
				case ELabelSections.novelties:
					state.cards.novelties.data = action.payload.data;

					break;
				case ELabelSections.collections:
					state.cards.collections.data = action.payload.data;

					break;
				case ELabelSections.sale:
					state.cards.sale.data = action.payload.data;

					break;
				default:
					state.cards.all.data = action.payload.data;
			}
		},
		[DataActionType.statusCards]: (
			state,
			action: PayloadAction<IStatusCards>
		) => {
			switch (action.payload.type) {
				case ELabelSections.novelties:
					state.cards.novelties.isLoading = action.payload.status;

					break;
				case ELabelSections.collections:
					state.cards.collections.isLoading = action.payload.status;

					break;
				case ELabelSections.sale:
					state.cards.sale.isLoading = action.payload.status;

					break;
				default:
					state.cards.all.isLoading = action.payload.status;
			}
		},
	},
	extraReducers: (builder) => {},
});

export const { setCards, statusCards } = dataSlice.actions;
