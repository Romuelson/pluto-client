import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus, ReducerType } from '@store/store.enum';

import { CardActions } from './card.enum';
import {
	ICardSlice,
	CardLoadingStatus,
	CardActiveColor,
	CardActiveId,
} from './card.type';
import { getCardIdThunk, getCardSectionThunk } from './card.thunk';

const initialState: ICardSlice = {
	card: {},
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
			action: PayloadAction<CardLoadingStatus>
		) => {
			state.cards[action.payload.section].loading.status =
				action.payload.status;
		},
		[CardActions.setCardActiveColor]: (
			state,
			action: PayloadAction<CardActiveColor>
		) => {
			const activeIndex = state.cards[action.payload.section].data.find(
				(card) => card.id === action.payload.id
			);

			if (activeIndex) {
				activeIndex.properties.colorList.activeColor =
					action.payload.index;
			}
		},
		[CardActions.setCardActiveId]: (
			state,
			action: PayloadAction<CardActiveId>
		) => {
			state.card[action.payload.id] = {
				activeId: action.payload.activeId,
				activeSection: action.payload.section,
			};
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
			state.cards[action.payload.section].data = action.payload.data;
			state.cards[action.payload.section].page += 1;
			state.cards[action.payload.section].loading.status =
				LoadingStatus.succeeded;
		});
	},
});

export const { setLoadingStatus, setCardActiveColor, setCardActiveId } =
	cardSlice.actions;
