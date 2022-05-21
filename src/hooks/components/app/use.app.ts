/* Hooks */
import { useAppDispatch, useAppSelector } from '../../store/redux/use.redux';

/* Slices */
import {
	setBodyOverflowHidden,
	setNavigationStatus,
} from '../../../store/slices/app/app.slice';

/* Enums */
import { NavigationStatus } from '../../../store/slices/app/app.enum';

/* Selectors */
import {
	takeBodyOverflowHidden,
	takeNavigationStatus,
} from '../../../store/slices/app/app.selectors';

export const useApp = () => {
	const dispatch = useAppDispatch();

	const bodyOverflowHidden = useAppSelector(takeBodyOverflowHidden);
	const navigationStatus = useAppSelector(takeNavigationStatus);

	const setBodyLock = (value: boolean) => {
		const page = document.querySelector('.page');

		if (value) {
			dispatch(setBodyOverflowHidden(true));
			page?.classList.add('overflow-hidden');
		} else {
			dispatch(setBodyOverflowHidden(false));
			page?.classList.remove('overflow-hidden');
		}
	};

	const reverseNavigationStatus = (status: NavigationStatus) => {
		switch (status) {
			case NavigationStatus.opened:
				dispatch(setNavigationStatus(NavigationStatus.closed));
				setBodyLock(false);
				break;
			default:
				setBodyLock(true);
				dispatch(setNavigationStatus(NavigationStatus.opened));
		}
	};

	const sleepingNavigationStatus = (delay = 0) => {
		setTimeout(() => {
			dispatch(setNavigationStatus(NavigationStatus.sleeping));
		}, delay);
	};

	return {
		reverseNavigationStatus,
		sleepingNavigationStatus,
		bodyOverflowHidden,
		navigationStatus,
	};
};
