import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AppDispatch, AppStore } from '@store/store';

import { CategoriesDataEnum } from '@components/UI/organisms/categories/categories.enum';

import { ResponseDataCategories } from './categories.type';
import { CategoriesPrefixThunk, CategoriesAxiosAPI } from './categories.enum';

export const getHeaderDataThunk = createAsyncThunk<
	ResponseDataCategories,
	{ data: CategoriesDataEnum },
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(CategoriesPrefixThunk.getHeaderList, async (_args, api) => {
	try {
		return await api.extra
			.get(CategoriesAxiosAPI.requestCategoriesHeader)
			.then(({ data }) => ({
				data,
				type: CategoriesDataEnum.header,
			}));
	} catch (error) {
		throw new Error('getCategoriesDataThunk');
	}
});

export const getFooterDataThunk = createAsyncThunk<
	ResponseDataCategories,
	{ data: CategoriesDataEnum },
	{ dispath: AppDispatch; state: AppStore; extra: AxiosInstance }
>(CategoriesPrefixThunk.getFooterList, async (_args, api) => {
	try {
		return await api.extra
			.get(CategoriesAxiosAPI.requestCategoriesFooter)
			.then(({ data }) => ({
				data,
				type: CategoriesDataEnum.footer,
			}));
	} catch (error) {
		throw new Error('getCategoriesDataThunk');
	}
});
