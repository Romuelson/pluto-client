/* Hooks */
import { useAppSelector } from '../../store/redux/use.redux';

/* Selectors */
import {
	takeListAddress,
	takeActiveButton,
	takeListType,
} from '../../../store/slices/components/info/info.selector';

export const useInfoSelector = () => {
	const addressList = useAppSelector(takeListAddress);
	const activeButton = useAppSelector(takeActiveButton);
	const listType = useAppSelector(takeListType);

	const currentAddress = addressList[activeButton];

	return {
		addressList,
		activeButton,
		currentAddress,
		listType,
	};
};
