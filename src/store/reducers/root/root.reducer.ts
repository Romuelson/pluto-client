/* Core */
import { combineReducers } from '@reduxjs/toolkit';

/* Store - Slices */
import { appSlice } from '../../slices/app/app.slice';
import { dataSlice } from '../../slices/data/data.slice';
import { userSlice } from '../../slices/user/user.slice';

/* Store - Enums */
import { ReducerType } from '../../store.enum';

export const rootReducer = combineReducers({
	[ReducerType.app]: appSlice.reducer,
	[ReducerType.data]: dataSlice.reducer,
	[ReducerType.user]: userSlice.reducer,
});
