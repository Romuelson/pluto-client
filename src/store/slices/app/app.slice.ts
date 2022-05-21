/* Modules */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { AppSlice } from './app.type';

/* Enums */
import { ReducerType } from '../../store.enum';
import { AppActions, NavigationStatus } from './app.enum';

const initialState: AppSlice = {
	bodyOverflowHidden: false,
	navigationStatus: NavigationStatus.sleeping,
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
	},
});

export const { setBodyOverflowHidden, setNavigationStatus } = appSlice.actions;
