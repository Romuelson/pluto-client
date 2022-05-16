/* Modules */
import { SyntheticEvent } from 'react';

/* Hooks */
import { useAppDispatch, useAppSelector } from '../../store/redux/use.redux';

/* Store */
import { getNavigationStatus } from '../../../store/slices/app/app.selectors';
import { navigationStatus } from '../../../store/slices/app/app.slice';

/* Types */
import { NavigationStatusType } from '../../../types/app/app.enum';
import { NavigationStatus } from '../../../types/app/app.type';

export const useHamburger = () => {
	const dispath = useAppDispatch();
	const getStatus = useAppSelector(getNavigationStatus);

	const setClassName = (status: NavigationStatus) =>
		status === NavigationStatusType.opened
			? 'hamburger hamburger--collapse hamburger--open button'
			: 'hamburger hamburger--collapse button';

	const setNavigationStatus = (
		evt: SyntheticEvent,
		status: NavigationStatus
	) => {
		evt.preventDefault();

		if (status === NavigationStatusType.opened) {
			dispath(navigationStatus(NavigationStatusType.closed));
		} else {
			dispath(navigationStatus(NavigationStatusType.opened));
		}
	};

	return { setClassName, setNavigationStatus, getStatus };
};
