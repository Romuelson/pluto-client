/* Core */
import { createSlice } from '@reduxjs/toolkit';

/* Store - Enums */
import { ReducerType } from '../../store.enum';

export type AuthSlice = {
	is: boolean;
};

const initialState: AuthSlice = {
	is: false,
};

export const authSlice = createSlice({
	name: ReducerType.auth,
	initialState,
	reducers: {},
});
