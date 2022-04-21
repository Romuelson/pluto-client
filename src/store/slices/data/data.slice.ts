/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { ProductCardList } from '../../../types/data/product-card/product-card.type';

/* Store - Enums */
import { DataActionType, ReducerType } from '../../store.enum';

export type DataSlice = {
	cardList: ProductCardList;
	cardNovelties: [];
	cardCollections: [];
	cardSale: [];
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
			action: PayloadAction<ProductCardList>
		) => {
			state.cardList = action.payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { setCards } = dataSlice.actions;
