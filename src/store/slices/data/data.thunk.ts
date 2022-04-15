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
import { DataPrefixType } from './data.enum';

/* Types */
import { DataCardsTypes } from '../../../types/data/data.type';

export const dataGetCardsThunk = createAsyncThunk<
	DataCardsTypes,
	null,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.cards, async (_, api) => {
	try {
		const response: DataCardsTypes = await api.extra.get('cards');
		console.log(response);

		return response;
	} catch (error) {
		throw new Error('dataGetCardsThunk');
	}
});
