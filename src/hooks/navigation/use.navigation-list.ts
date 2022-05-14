/* Hooks */
import { useAppSelector, useAppDispatch } from '../redux/use.redux';

/* Store */
import { getNavigationStatus } from '../../store/slices/app/app.selectors';
import { navigationStatus } from '../../store/slices/app/app.slice';

/* Types */
import { NavigationStatusType } from '../../types/app/app.enum';
import { NavigationStatus } from '../../types/app/app.type';

/* Mocks */
import { navigationMock } from '../../mocks/data/navigation/navigation.mock';

export const useNavigationList = () => {
	const ANIMATION_DELAY = 800;

	const getStatus = useAppSelector(getNavigationStatus);
	const dispatch = useAppDispatch();

	const { data } = navigationMock();

	const setNavigationStatus = () =>
		setTimeout(() => {
			dispatch(navigationStatus(NavigationStatusType.sleeping));
		}, ANIMATION_DELAY);

	const setClassName = (status: NavigationStatus) => {
		switch (status) {
			case NavigationStatusType.opened:
				return 'navigation__list navigation__list--open list';
			case NavigationStatusType.closed:
				setNavigationStatus();
				return 'navigation__list navigation__list--closed list';
			default:
				return 'navigation__list list visually-hidden';
		}
	};

	return { setClassName, getStatus, data };
};
