/* Modules */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

/* Store */
import type { AppDispatch, AppStore } from '../../../store';

/* Enums */
import { InfoAxiosAPI, InfoPrefixThunk } from './info.enum';

/* Types */
import { InfoListAddress, ResponseDataInfo } from './info.type';

export const enum InfoListRecipientEnum {
	header = 'header',
	footer = 'footer',
}

export type InfoListArgs = {
	recipient: string;
};

export const getListAddressThunk = createAsyncThunk<
	InfoListAddress,
	InfoListArgs,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(InfoPrefixThunk.getListAddress, async (_args, api) => {
	try {
		const { data }: ResponseDataInfo = await api.extra.get(
			InfoAxiosAPI.requestListAddress
		);

		return data;
	} catch (error) {
		throw new Error('getListAddressThunk');
	}
});
