import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import {
	getFooterDataThunk,
	getHeaderDataThunk,
} from '@store/slices/components/categories/categories.thunk';

import { LoadingStatus } from '@store/store.enum';
import { takeResponce } from '@store/slices/components/categories/categories.selector';

import { CategoriesDataEnum } from './categories.enum';
import { UseCategoriesProps } from './categories.type';

export const useCategories = ({ data }: UseCategoriesProps) => {
	const dispatch = useAppDispatch();
	const responce = useAppSelector(takeResponce);

	useEffect(() => {
		switch (data) {
			case CategoriesDataEnum.footer:
				if (responce.footer.loading.status === LoadingStatus.idle) {
					dispatch(getFooterDataThunk({ data }));
				}
				break;

			default:
				if (responce.header.loading.status === LoadingStatus.idle) {
					dispatch(getHeaderDataThunk({ data }));
				}
		}
	}, [data, responce, dispatch]);

	return { responce };
};
