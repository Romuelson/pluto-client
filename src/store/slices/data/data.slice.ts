/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELabelSections } from '../../../types/data/product-card/product-card.enum';

/* Types */
import {
	PayloadCardList,
	ProductCardList,
} from '../../../types/data/product-card/product-card.type';

/* Store - Enums */
import { DataActionType, ReducerType } from '../../store.enum';

export type DataSlice = {
	cardList: ProductCardList;
	cardNovelties: ProductCardList;
	cardCollections: ProductCardList;
	cardSale: ProductCardList;
};

const initialState: DataSlice = {
	cardList: [],
	cardNovelties: [],
	cardCollections: [],
	cardSale: [],
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
				case ELabelSections.new:
					state.cardNovelties = action.payload.data;

					break;
				case ELabelSections.collections:
					state.cardCollections = action.payload.data;

					break;
				case ELabelSections.sale:
					state.cardSale = action.payload.data;

					break;
				default:
					state.cardList = action.payload.data;
			}
		},
	},
	extraReducers: (builder) => {},
});

export const { setCards } = dataSlice.actions;
