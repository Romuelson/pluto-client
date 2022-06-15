import { useEffect } from 'react';

import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';

import { getListAddressThunk } from '../../../store/slices/components/info/info.thunk';

import { useAppDispatch } from '../../store/redux/use.redux';

import { InfoTypeStyle } from '../../../components/info/info.enum';
import { setListType } from '../../../store/slices/components/info/info.slice';

import { useInfoSelector } from './use.info.selector';
import { LoadingStatus } from '../../../store/store.enum';

export const useInfoMount = (type: InfoTypeEnums) => {
	const { loading } = useInfoSelector();
	const dispath = useAppDispatch();

	useEffect(() => {
		if (loading.status === LoadingStatus.idle) {
			dispath(getListAddressThunk());
		}

		dispath(setListType(type));
	}, [dispath, loading.status, type]);
};
