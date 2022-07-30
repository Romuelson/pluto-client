import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus, ReducerType } from '@store/store.enum';

import { CardActions } from './card.enum';
import { ICardSlice, SetCardLoadingStatus } from './card.type';
import { getCardIdThunk, getCardSectionThunk } from './card.thunk';

const initialState: ICardSlice = {
	cards: {
		novelties: {
			page: 0,
			data: [],
			loading: {
				status: LoadingStatus.idle,
				error: undefined,
			},
		},
		collections: {
			page: 0,
			data: [],
			loading: {
				status: LoadingStatus.idle,
				error: undefined,
			},
		},
		sale: {
			page: 0,
			data: [],
			loading: {
				status: LoadingStatus.idle,
				error: undefined,
			},
		},
	},
};

export const cardSlice = createSlice({
	name: ReducerType.card,
	initialState,
	reducers: {
		[CardActions.setLoadingStatus]: (
			state,
			action: PayloadAction<SetCardLoadingStatus>
		) => {
			state.cards[action.payload.type].loading.status =
				action.payload.status;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCardIdThunk.fulfilled, (state, action) => {
			// action.payload.data.forEach((card) => {
			// 	const type = card.properties.labelList.sections;

			// 	state.cards[type].data.push(card);
			// 	state.cards[type].loading.status = LoadingStatus.succeeded;
			// });
			const card = action.payload.data;
			const type = card.properties.labelList.sections;

			state.cards[type].data.push(card);
			state.cards[type].loading.status = LoadingStatus.succeeded;
		});

		builder.addCase(getCardSectionThunk.fulfilled, (state, action) => {
			state.cards[action.payload.type].data = action.payload.data;
			state.cards[action.payload.type].page += 1;
			state.cards[action.payload.type].loading.status =
				LoadingStatus.succeeded;
		});
	},
});

export const { setLoadingStatus } = cardSlice.actions;
