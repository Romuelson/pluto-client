/* Modules */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

/* Store */
import { AppDispatch, AppStore } from '../../../store';
import { setDataInfo } from './info.slice';

/* Enums */
import { InfoAxiosAPI, InfoPrefixThunk } from './info.enum';

/* Types */
import { ResponseDataInfo } from './info.type';

export const getListAddressThunk = createAsyncThunk<
	void,
	undefined,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(InfoPrefixThunk.getListAddress, async (_args, api) => {
	try {
		const { data }: ResponseDataInfo = await api.extra.get(
			InfoAxiosAPI.requestListAddress
		);

		api.dispatch(setDataInfo(data));
	} catch (error) {
		throw new Error('getListAddressThunk');
	}
});
