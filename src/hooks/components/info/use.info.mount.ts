/* Modules */
import { useEffect } from 'react';

/* Thunks */
import { getListAddressThunk } from '../../../store/slices/components/info/info.thunk';

/* Hooks */
import { useAppDispatch } from '../../store/redux/use.redux';

/* Enums */
import { InfoTypeStyle } from '../../../components/info/info.enum';
import { setListType } from '../../../store/slices/components/info/info.slice';

/* Selectors */
import { useInfoSelector } from './use.info.selector';
import { LoadingStatus } from '../../../store/store.enum';

export const useInfoMount = (type?: InfoTypeStyle) => {
	const { loading } = useInfoSelector();
	const dispath = useAppDispatch();

	useEffect(() => {
		if (loading.status === LoadingStatus.idle) {
			dispath(getListAddressThunk());
		}

		if (type) {
			dispath(setListType(type));
		}
	}, [dispath, loading.status, type]);
};
