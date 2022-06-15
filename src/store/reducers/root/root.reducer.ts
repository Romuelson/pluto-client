/* Modules */
import { combineReducers } from '@reduxjs/toolkit';

/* Store - Slices */
import { appSlice } from '@store/slices/app/app.slice';
import { dataSlice } from '@store/slices/data/data.slice';
import { userSlice } from '@store/slices/user/user.slice';
import { infoSlice } from '@store/slices/components/info/info.slice';
import { categoriesSlice } from '@store/slices/components/categories/categories.slice';

/* Store - Enums */
import { ReducerType } from '@store/store.enum';

export const rootReducer = combineReducers({
	[ReducerType.app]: appSlice.reducer,
	[ReducerType.data]: dataSlice.reducer,
	[ReducerType.user]: userSlice.reducer,
	[ReducerType.info]: infoSlice.reducer,
	[ReducerType.categories]: categoriesSlice.reducer,
});
