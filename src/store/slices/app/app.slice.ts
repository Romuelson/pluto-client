/* Modules */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { AppSlice } from './app.type';

/* Enums */
import { ReducerType } from '../../store.enum';
import { AppActions, NavigationStatus } from './app.enum';
import { setListType } from '../components/info/info.slice';
import { InfoTypeStyle } from '../../../components/info/info.enum';

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
	extraReducers: (builder) => {
		builder.addCase(setListType, (state, action) => {
			if (
				action.payload === InfoTypeStyle.B &&
				state.navigationStatus === NavigationStatus.opened
			) {
				state.navigationStatus = NavigationStatus.closed;
			}
		});
	},
});

export const {
	setBodyOverflowHidden,
	setNavigationStatus,
	setCategoriesStatus,
} = appSlice.actions;
