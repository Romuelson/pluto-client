import { useEffect } from 'react';

import { LoadingStatus } from '@store/store.enum';

import {
	setListType,
	setState,
} from '@store/slices/components/info/info.slice';

import { useAppDispatch } from '@hooks/store/redux/use.redux';
import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';

import { getListAddressThunk } from '../../../store/slices/components/info/info.thunk';

import { useInfoSelector } from './use.info.selector';

export const useInfoMount = (recipient: string, type: InfoTypeEnums) => {
	const dispath = useAppDispatch();
	const { repecientState, loading } = useInfoSelector({ recipient });

	useEffect(() => {
		if (!repecientState) {
			dispath(setState({ recipient }));
		}

		if (loading.status === LoadingStatus.idle) {
			dispath(getListAddressThunk({ recipient }));
		}

		dispath(setListType({ recipient, type }));
	}, [dispath, loading.status, type, recipient, repecientState]);
};
