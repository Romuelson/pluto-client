import { createSlice } from '@reduxjs/toolkit';

import { LoadingStatus, ReducerType } from '@store/store.enum';
import { getSpecialInfoThunk } from '@store/slices/components/special/special.thunk';

import { SpecialRecipient } from '@store/slices/components/special/special.enum';
import { HomeState } from './home.type';

const initialState: HomeState = {
	special: {
		info: {
			list: [],
			loading: {
				status: LoadingStatus.idle,
				error: undefined,
			},
		},
	},
};

export const homeSlice = createSlice({
	name: ReducerType.home,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSpecialInfoThunk.pending, (state, action) => {
				const { recipient } = action.meta.arg;
				if (recipient === SpecialRecipient.home) {
					state.special.info.loading.status = LoadingStatus.loading;
				}
			})
			.addCase(getSpecialInfoThunk.rejected, (state, action) => {
				const { recipient } = action.meta.arg;
				if (recipient === SpecialRecipient.home) {
					state.special.info.loading.status = LoadingStatus.failed;
					state.special.info.loading.error = action.error;
				}
			})
			.addCase(getSpecialInfoThunk.fulfilled, (state, action) => {
				const { recipient } = action.meta.arg;
				if (recipient === SpecialRecipient.home) {
					state.special.info.loading.status = LoadingStatus.succeeded;
					state.special.info.list = action.payload.data;
				}
			});
	},
});
