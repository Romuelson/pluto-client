/* eslint-disable @typescript-eslint/no-unused-vars */

/* Core */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Store */
import type { AppDispatch, AppStore } from '../../store';
import { ThunkType } from '../../store.enum';

/* Store - Types */
import { UserData } from '../../../types/user/user.type';
// import { AuthData } from '../auth/auth.type';

// export const userLoginThunk = createAsyncThunk<
// 	void,
// 	AuthData,
// 	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
// >(
// 	PrefixType.login,
// 	async ({ login: email, password }, { dispatch, extra: api }) => {
// 		try {
// 			const {
// 				data: { token },
// 			} = await api.post<UserData>(ThunkType.login, {
// 				email,
// 				password,
// 			});
// 		} catch (error) {}
// 	}
// );
