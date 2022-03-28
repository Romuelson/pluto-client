/* Core */
import { createSlice } from '@reduxjs/toolkit';

/* Services */
import { AuthenticationStatus } from '../../../services/services.enum';

/* Store - Enums */
import { ReducerType } from '../../store.enum';

/* Store - Thunk actions */
import { authLoginThunk } from '../auth/auth.thunk';

export type UserSlice = {
	authenticationStatus: AuthenticationStatus;
};

const initialState: UserSlice = {
	authenticationStatus: AuthenticationStatus.UNKNOWN,
};

export const userSlice = createSlice({
	name: ReducerType.user,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(authLoginThunk.fulfilled, (state) => {
			state.authenticationStatus = AuthenticationStatus.AUTH;

			// type UserLocalData = {
			// 	accessToken: string;
			// };
			// const user = JSON.parse(getUser() || '{}') as UserLocalData;
			// console.log(user.accessToken);
		});
	},
});
