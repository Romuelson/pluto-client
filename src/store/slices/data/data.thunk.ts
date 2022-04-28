/* eslint-disable import/no-cycle */
/* Core */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* Services - Enums */
import { AxiosAPI } from '../../../services/services.enum';

/* Store */
import type { AppDispatch, AppStore } from '../../store';
import { IStatusCards, setCards, statusCards } from './data.slice';

/* Store - Enums */
import { DataPrefixType, DataStatusType } from './data.enum';

/* Types */
import {
	PayloadCardList,
	ResponceCardList,
} from '../../../types/data/product-card/product-card.type';
import { ELabelSections } from '../../../types/data/product-card/product-card.enum';

export const getCardAllThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.getCardAll, async (_args, api) => {
	try {
		const response: PayloadCardList = await api.extra.get(
			AxiosAPI.DataCardAll
		);

		const cards: PayloadCardList = {
			data: response.data,
		};

		api.dispatch(setCards(cards));
	} catch (error) {
		throw new Error('getCardAllThunk');
	}
});

export const getCardType = createAsyncThunk<
	void,
	{ type: ELabelSections },
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(DataPrefixType.getCardNovelties, async ({ type }, api) => {
	api.dispatch(statusCards({ type, status: DataStatusType.pending }));

	try {
		const { data }: ResponceCardList = await api.extra.get(
			`${AxiosAPI.DataCardSection}/?section=${type}`
		);

		const cards: PayloadCardList = { data, type };

		api.dispatch(setCards(cards));
		api.dispatch(statusCards({ type, status: DataStatusType.fulfilled }));
	} catch (error) {
		api.dispatch(statusCards({ type, status: DataStatusType.rejected }));
		throw new Error('getCardType');
	}
});
