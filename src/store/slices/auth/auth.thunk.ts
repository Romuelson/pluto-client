/* Core */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Services */
import { saveToken } from '../../../services/token/token.service';

/* Store */
import type { AppDispatch, AppStore } from '../../store';

/* Store - Types */
import { AuthLoginForm, AuthLoginData } from '../../../types/auth/auth.type';

/* Store - Enums */
import { PrefixType } from './auth.enum';

export const authLoginThunk = createAsyncThunk<
	void,
	AuthLoginForm,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(PrefixType.login, async (authLoginForm, api) => {
	try {
		const response: AuthLoginData = await api.extra.post(
			'login',
			authLoginForm
		);

		if (response.data.accessToken) {
			saveToken(response);
		}
	} catch (error) {
		throw new Error('authLoginThunk');
	}
});
