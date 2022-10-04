import { combineReducers } from '@reduxjs/toolkit';

import { ReducerType } from '@store/store.enum';

import { appSlice } from '@store/slices/app/app.slice';
import { userSlice } from '@store/slices/user/user.slice';
// import { dataSlice } from '@store/slices/data/data.slice';

import { cardSlice } from '@store/slices/components/card/card.slice';
import { categoriesSlice } from '@store/slices/components/categories/categories.slice';
import { infoSlice } from '@store/slices/components/info/info.slice';
import { favoriteSlice } from '@store/slices/favorite/favorite.slice';

import { homeSlice } from '@store/slices/pages/home/home.slice';

export const rootReducer = combineReducers({
	[ReducerType.app]: appSlice.reducer,
	[ReducerType.user]: userSlice.reducer,
	// [ReducerType.data]: dataSlice.reducer,

	[ReducerType.card]: cardSlice.reducer,
	[ReducerType.categories]: categoriesSlice.reducer,
	[ReducerType.info]: infoSlice.reducer,
	[ReducerType.favorite]: favoriteSlice.reducer,

	[ReducerType.home]: homeSlice.reducer,
});
