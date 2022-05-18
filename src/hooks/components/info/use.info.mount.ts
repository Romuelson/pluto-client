/* Modules */
import { useEffect } from 'react';

/* Thunks */
import { getListAddressThunk } from '../../../store/slices/components/info/info.thunk';

/* Hooks */
import { useAppDispatch } from '../../store/redux/use.redux';

/* Enums */
import { InfoTypeStyle } from '../../../components/info/info.enum';
import { setListType } from '../../../store/slices/components/info/info.slice';

export const useInfoMount = (type?: InfoTypeStyle) => {
	const dispath = useAppDispatch();

	useEffect(() => {
		dispath(getListAddressThunk());

		if (type) {
			dispath(setListType(type));
		}
	}, [dispath, type]);
};
