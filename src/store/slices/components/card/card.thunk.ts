import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	IProductCard,
	PayloadCardId,
	PayloadCardList,
	ResponceCardList,
} from '@components/UI/molecules/card/mocks/card.mock.type';
import { ECardServiceType } from '@components/UI/molecules/card/mocks/card.mock.enum';

import { ReducerType } from '@store/store.enum';
import { AppDispatch, AppStore } from '@store/store';

import {
	GetCardAllThunk,
	GetCardIdThunk,
	GetCardSectionThunk,
} from './card.type';
import { CardAPI, CardPrefixType } from './card.enum';

export const getCardIdThunk = createAsyncThunk<
	PayloadCardId,
	GetCardIdThunk,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(`${CardPrefixType.getCardId}`, async ({ id }, api) => {
	try {
		return await api.extra
			.post(`${CardAPI.getCardId}`, {
				[ECardServiceType.id]: id,
			})
			.then(({ data }: { data: IProductCard[] }) => ({ data }));
	} catch (error) {
		throw new Error(`Message: ${error}`);
	}
});

// export const getCardAllThunk = createAsyncThunk<
// 	PayloadCardList,
// 	GetCardAllThunk,
// 	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
// >(`${ReducerType.card}`, async ({ type }, api) => {
// 	try {
// 		return await api.extra
// 			.get(`${CardAPI.getCardAll}`, {
// 				params: {
// 					[ECardServiceType.ids]: ids,
// 				},
// 			})
// 			.then(({ data }: ResponceCardList) => ({ data, type }));
// 	} catch (error) {
// 		throw new Error(`Message: ${error}`);
// 	}
// });

export const getCardSectionThunk = createAsyncThunk<
	PayloadCardList,
	GetCardSectionThunk,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(`${ReducerType.card}`, async ({ type }, api) => {
	try {
		return await api.extra
			.get(`${CardAPI.getCardSection}`, {
				params: { [ECardServiceType.section]: type },
			})
			.then(({ data }: ResponceCardList) => ({ data, type }));
	} catch (error) {
		throw new Error(`Message: ${error}`);
	}
});
