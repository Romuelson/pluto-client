import { combineReducers } from '@reduxjs/toolkit';

import { appSlice } from '@store/slices/app/app.slice';
import { cardSlice } from '@store/slices/components/card/card.slice';
import { categoriesSlice } from '@store/slices/components/categories/categories.slice';
// import { dataSlice } from '@store/slices/data/data.slice';
import { infoSlice } from '@store/slices/components/info/info.slice';
import { favoriteSlice } from '@store/slices/favorite/favorite.slice';
import { userSlice } from '@store/slices/user/user.slice';

import { ReducerType } from '@store/store.enum';

export const rootReducer = combineReducers({
	[ReducerType.app]: appSlice.reducer,
	[ReducerType.card]: cardSlice.reducer,
	[ReducerType.categories]: categoriesSlice.reducer,
	// [ReducerType.data]: dataSlice.reducer,
	[ReducerType.info]: infoSlice.reducer,
	[ReducerType.user]: userSlice.reducer,
	[ReducerType.favorite]: favoriteSlice.reducer,
});
