import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ReducerType } from '../../store.enum';

import { FavoriteSlice } from './favorite.type';
import { FavoriteActions } from './favorite.enum';

const initialState: FavoriteSlice = {
	cards: new Map(),
};

export const favoriteSlice = createSlice({
	name: ReducerType.favorite,
	initialState,
	reducers: {
		[FavoriteActions.setCard]: (state, action: PayloadAction<string>) => {
			state.cards.set(action.payload, true);
		},
		[FavoriteActions.deleteCard]: (
			state,
			action: PayloadAction<string>
		) => {
			state.cards.delete(action.payload);
		},
	},
	extraReducers: (builder) => {},
});

export const { setCard, deleteCard } = favoriteSlice.actions;
