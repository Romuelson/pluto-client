import { createSlice } from '@reduxjs/toolkit';

import { LoadingStatus, ReducerType } from '@store/store.enum';

import { CategoriesDataEnum } from '@components/UI/organisms/categories/categories.enum';

import { getHeaderDataThunk, getFooterDataThunk } from './categories.thunk';
import { CategoriesSlice } from './categories.type';

const initialState: CategoriesSlice = {
	responce: {
		[CategoriesDataEnum.header]: {
			loading: { status: LoadingStatus.idle, error: undefined },
			data: [],
		},
		[CategoriesDataEnum.footer]: {
			loading: { status: LoadingStatus.idle, error: undefined },
			data: [],
		},
	},
};

export const categoriesSlice = createSlice({
	name: ReducerType.categories,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getHeaderDataThunk.pending, (state, action) => {
				state.responce.header.loading.status = LoadingStatus.loading;
				// action.type = ... enum
			})
			.addCase(getHeaderDataThunk.fulfilled, (state, action) => {
				state.responce.header.data = action.payload.data;
				state.responce.header.loading.status = LoadingStatus.succeeded;
			})
			.addCase(getHeaderDataThunk.rejected, (state, action) => {
				state.responce.header.loading.status = LoadingStatus.failed;
				state.responce.header.loading.error = action.error.message;
			});

		builder
			.addCase(getFooterDataThunk.pending, (state) => {
				state.responce.footer.loading.status = LoadingStatus.loading;
			})
			.addCase(getFooterDataThunk.fulfilled, (state, action) => {
				state.responce.footer.data = action.payload.data;
				state.responce.footer.loading.status = LoadingStatus.succeeded;
			})
			.addCase(getFooterDataThunk.rejected, (state, action) => {
				state.responce.footer.loading.status = LoadingStatus.failed;
				state.responce.footer.loading.error = action.error.message;
			});
	},
});
