/* Hooks */
import { useAppSelector } from '../../store/redux/use.redux';

/* Selectors */
import {
	takeListAddress,
	takeActiveButton,
	takeListType,
	takeLoading,
} from '../../../store/slices/components/info/info.selector';

import { takeNavigationStatus } from '../../../store/slices/app/app.selectors';

export const useInfoSelector = () => {
	const loading = useAppSelector(takeLoading);
	const addressList = useAppSelector(takeListAddress);
	const activeButton = useAppSelector(takeActiveButton);
	const listType = useAppSelector(takeListType);

	const currentAddress = addressList[activeButton];

	return {
		loading,
		addressList,
		activeButton,
		currentAddress,
		listType,
	};
};
