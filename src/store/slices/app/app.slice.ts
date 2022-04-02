/* Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { NavigationStatus } from '../../../types/app/app.type';

/* Store - Enums */
import { ActionType, ReducerType } from '../../store.enum';

export type AppSlice = {
	navigationStatus: NavigationStatus;
};

const initialState: AppSlice = {
	navigationStatus: false,
};

export const appSlice = createSlice({
	name: ReducerType.app,
	initialState,
	reducers: {
		[ActionType.navigationStatus]: (
			state,
			action: PayloadAction<NavigationStatus>
		) => {
			state.navigationStatus = action.payload;
		},
	},
});

export const { navigationStatus } = appSlice.actions;
