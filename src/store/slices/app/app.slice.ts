/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigationStatusType } from '../../../types/app/app.enum';

/* Types */
import { NavigationStatus } from '../../../types/app/app.type';

/* Store - Enums */
import { ActionType, ReducerType } from '../../store.enum';

export type AppSlice = {
	isNavActive: NavigationStatus;
};

const initialState: AppSlice = {
	isNavActive: NavigationStatusType.sleeping,
};

export const appSlice = createSlice({
	name: ReducerType.app,
	initialState,
	reducers: {
		[ActionType.navigationStatus]: (
			state,
			action: PayloadAction<NavigationStatus>
		) => {
			state.isNavActive = action.payload;
		},
	},
});

export const { navigationStatus } = appSlice.actions;
