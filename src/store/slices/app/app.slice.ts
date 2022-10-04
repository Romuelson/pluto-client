import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppSlice } from './app.type';

import { ReducerType } from '../../store.enum';
import { AppActions, NavigationStatus } from './app.enum';

const initialState: AppSlice = {
	bodyOverflowHidden: false,
	navigationStatus: NavigationStatus.sleeping,
	categoriesStatus: false,
};

export const appSlice = createSlice({
	name: ReducerType.app,
	initialState,
	reducers: {
		[AppActions.setBodyOverflowHidden]: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.bodyOverflowHidden = action.payload;
		},
		[AppActions.setNavigationStatus]: (
			state,
			action: PayloadAction<NavigationStatus>
		) => {
			state.navigationStatus = action.payload;
		},
		[AppActions.setCategoriesStatus]: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.categoriesStatus = action.payload;
		},
	},
});

export const {
	setBodyOverflowHidden,
	setNavigationStatus,
	setCategoriesStatus,
} = appSlice.actions;
