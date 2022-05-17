/* Modules */
import { useEffect } from 'react';

/* Hooks */
import { useAppDispatch, useAppSelector } from '../../store/redux/use.redux';

/* Thunks */
import { getListAddressThunk } from '../../../store/slices/components/info/info.thunk';

/* Slices */
import { setActiveIndex } from '../../../store/slices/components/info/info.slice';

/* Selectors */
import {
	takeListAddress,
	takeActiveButton,
} from '../../../store/slices/components/info/info.selector';

export const useInfo = () => {
	const dispath = useAppDispatch();

	const addressList = useAppSelector(takeListAddress);
	const activeButton = useAppSelector(takeActiveButton);

	useEffect(() => {
		dispath(getListAddressThunk());
	}, [dispath]);

	const dispathActiveIndex = (index: number) => {
		dispath(setActiveIndex(index));
	};

	const currentAddress = addressList[activeButton];

	return { addressList, activeButton, dispathActiveIndex, currentAddress };
};
