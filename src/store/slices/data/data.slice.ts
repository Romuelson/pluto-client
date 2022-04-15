/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Mocks - Data */
import { CardTypes } from '../../../mocks/data/card/card';

/* Types */
import { DataCardsTypes } from '../../../types/data/data.type';

/* Store - Enums */
import { ReducerType } from '../../store.enum';

/* Store - Thunk actions */
import { dataGetCardsThunk } from './data.thunk';

export type DataSlice = {
	cards: CardTypes[];
};

const initialState: DataSlice = {
	cards: [],
};

export const dataSlice = createSlice({
	name: ReducerType.data,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			dataGetCardsThunk.fulfilled,
			(state, action: PayloadAction<DataCardsTypes>) => {
				state.cards = action.payload.data;
			}
		);
	},
});
