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
import { PayloadCardList } from '../../../types/data/data.type';
import { setCards } from './data.slice';

export const getCardsThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.cards, async (_, api) => {
	try {
		const response: PayloadCardList = await api.extra.get('cards');

		api.dispatch(setCards(response.data));
	} catch (error) {
		throw new Error('dataGetCardsThunk');
	}
});
