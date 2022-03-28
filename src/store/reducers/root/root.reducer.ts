/* Core */
import { combineReducers } from '@reduxjs/toolkit';

/* Store - Slices */
import { userSlice } from '../../slices/user/user.slice';
// import { authSlice } from '../../slices/auth/auth.slice';

/* Store - Enums */
import { ReducerType } from '../../store.enum';

export const rootReducer = combineReducers({
	[ReducerType.user]: userSlice.reducer,
	// [ReducerType.auth]: authSlice.reducer,
});
