/* Core */
import { createSlice } from '@reduxjs/toolkit';

/* Services */
import { AuthenticationStatus } from '../../../services/services.enum';

/* Store - Enums */
import { ReducerType } from '../../store.enum';

export type FavoriteSlice = {
	favoriteList: [];
};

const initialState: FavoriteSlice = {
	favoriteList: [],
};

export const favoriteSlice = createSlice({
	name: ReducerType.favorite,
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});
