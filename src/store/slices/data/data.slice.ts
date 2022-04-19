/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Mocks - Data */
import { CardsList } from '../../../mocks/data/card/card';

/* Types */
import { PayloadCardList } from '../../../types/data/data.type';

/* Store - Enums */
import { DataActionType, ReducerType } from '../../store.enum';

/* Store - Thunk actions */

export type DataSlice = {
	cards: CardsList;
};

const initialState: DataSlice = {
	cards: [],
};

export const dataSlice = createSlice({
	name: ReducerType.data,
	initialState,
	reducers: {
		[DataActionType.setCards]: (
			state,
			action: PayloadAction<CardsList>
		) => {
			state.cards = action.payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { setCards } = dataSlice.actions;
