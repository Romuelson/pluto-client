import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatus, ReducerType } from '@store/store.enum';

import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';

import { InfoActions } from './info.enum';
import { infoBuilder } from './info.builder';

import {
	InfoActiveIndexPayload,
	InfoListTypePayload,
	InfoRecipient,
	InfoSetStatePayload,
	InfoSlice,
} from './info.type';

export const createInfoState: InfoSlice = () => ({
	loading: { status: LoadingStatus.idle, error: undefined },
	listType: InfoTypeEnums.categories,
	listAddress: [],
	activeButton: 0,
});

const initialState: InfoRecipient = {};

export const infoSlice = createSlice({
	name: ReducerType.info,
	initialState,
	reducers: {
		[InfoActions.setState]: (
			state,
			{ payload }: PayloadAction<InfoSetStatePayload>
		) => {
			state[payload.recipient] = createInfoState();
		},
		[InfoActions.setActiveButton]: (
			state,
			{ payload }: PayloadAction<InfoActiveIndexPayload>
		) => {
			const { recipient, value } = payload;
			const recipientState = state?.[recipient];

			if (recipientState) {
				recipientState.activeButton = value;
			}
		},
		[InfoActions.setListType]: (
			state,
			{ payload }: PayloadAction<InfoListTypePayload>
		) => {
			const { recipient, type } = payload;
			const recipientState = state?.[recipient];

			if (recipientState) {
				recipientState.listType = type;
			}
		},
	},
	extraReducers: infoBuilder,
});

export const { setState, setActiveIndex, setListType } = infoSlice.actions;
