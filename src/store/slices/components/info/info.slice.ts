/* Modules */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { InfoSlice, InfoListAddress } from './info.type';

/* Enums */
import { LoadingStatus, ReducerType } from '../../../store.enum';
import { InfoActions } from './info.enum';
import { InfoTypeStyle } from '../../../../components/info/info.enum';

import { getListAddressThunk } from './info.thunk';

const initialState: InfoSlice = {
	loading: { status: LoadingStatus.idle, error: undefined },
	listType: InfoTypeStyle.B,
	listAddress: [],
	activeButton: 0,
};

export const infoSlice = createSlice({
	name: ReducerType.info,
	initialState,
	reducers: {
		[InfoActions.setActiveButton]: (
			state,
			action: PayloadAction<number>
		) => {
			state.activeButton = action.payload;
		},
		[InfoActions.setListType]: (
			state,
			action: PayloadAction<InfoTypeStyle>
		) => {
			state.listType = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getListAddressThunk.pending, (state) => {
				state.loading.status = LoadingStatus.loading;
			})
			.addCase(getListAddressThunk.fulfilled, (state, action) => {
				state.loading.status = LoadingStatus.succeeded;
				state.listAddress = action.payload;
			})
			.addCase(getListAddressThunk.rejected, (state, action) => {
				state.loading.status = LoadingStatus.failed;
				state.loading.error = action.error.message;
			});
	},
});

export const { setActiveIndex, setListType } = infoSlice.actions;
