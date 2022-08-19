import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ReducerType } from '@store/store.enum';
import { AppDispatch, AppStore } from '@store/store';

import { ECardServiceType } from '@components/UI/molecules/card/mocks/card.mock.enum';

import {
	IProductCard,
	PayloadCardId,
	PayloadCardList,
	ResponceCardList,
} from '@components/UI/molecules/card/mocks/card.mock.type';

import { CardAPI, CardPrefixType } from './card.enum';
import { CardIdThunk, CardSectionThunk } from './card.type';

export const getCardIdThunk = createAsyncThunk<
	PayloadCardId,
	CardIdThunk,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(`${CardPrefixType.getCardId}`, async ({ id }, api) => {
	try {
		return await api.extra
			.post(`${CardAPI.getCardId}`, {
				[ECardServiceType.id]: id,
			})
			.then(({ data }: { data: IProductCard }) => ({ data }));
	} catch (error) {
		throw new Error(`Message: ${error}`);
	}
});

export const getCardSectionThunk = createAsyncThunk<
	PayloadCardList,
	CardSectionThunk,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(`${ReducerType.card}`, async ({ section }, api) => {
	try {
		return await api.extra
			.get(`${CardAPI.getCardSection}`, {
				params: { [ECardServiceType.section]: section },
			})
			.then(({ data }: ResponceCardList) => ({ data, section }));
	} catch (error) {
		throw new Error(`Message: ${error}`);
	}
});
