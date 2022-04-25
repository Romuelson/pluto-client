/* Core */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Services - Enums */
import { AxiosAPI } from '../../../services/services.enum';

/* Store */
import type { AppDispatch, AppStore } from '../../store';
import { setCards } from './data.slice';

/* Store - Enums */
import { DataPrefixType } from './data.enum';

/* Types */
import { PayloadCardList } from '../../../types/data/product-card/product-card.type';

export const getCardAllThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.getCardAll, async (_, api) => {
	try {
		const response: PayloadCardList = await api.extra.get(
			AxiosAPI.DataCardAll
		);

		api.dispatch(setCards(response.data));
	} catch (error) {
		throw new Error('getCardAllThunk');
	}
});

export const getCardNoveltiesThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.getCardNovelties, async (_, api) => {
	try {
		const response: PayloadCardList = await api.extra.get(
			`${AxiosAPI.DataCardSection}/?section=novelties`
		);

		api.dispatch(setCards(response.data));
	} catch (error) {
		throw new Error('getCardNoveltiesThunk');
	}
});

export const getCardCollectionsThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.getCardCollections, async (_, api) => {
	try {
		const response: PayloadCardList = await api.extra.get(
			`${AxiosAPI.DataCardSection}/?section=collections`
		);

		api.dispatch(setCards(response.data));
	} catch (error) {
		throw new Error('getCardCollectionsThunk');
	}
});

export const getCardSaleThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.getCardSale, async (_, api) => {
	try {
		const response: PayloadCardList = await api.extra.get(
			`${AxiosAPI.DataCardSection}/?section=sale`
		);

		api.dispatch(setCards(response.data));
	} catch (error) {
		throw new Error('getCardSaleThunk');
	}
});
