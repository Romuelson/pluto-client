import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, AppStore } from '@store/store';

import {
	SpecialAPI,
	SpecialPrefixType,
	SpecialServiceType,
} from './special.enum';

import {
	GetSpecialInfoArgs,
	GetSpecialInfoPayload,
} from './special.thunk.type';

export const getSpecialInfoThunk = createAsyncThunk<
	GetSpecialInfoPayload,
	GetSpecialInfoArgs,
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(SpecialPrefixType.getSpecialInfo, async ({ recipient }, api) => {
	try {
		return await api.extra
			.post(SpecialAPI.getSpecialInfo, {
				[SpecialServiceType.recipient]: recipient,
			})
			.then(({ data }: GetSpecialInfoPayload) => ({ data }));
	} catch (error) {
		throw new Error(`Message: ${error}`);
	}
});
