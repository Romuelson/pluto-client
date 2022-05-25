/* Hooks */
import { useMediaQuery } from 'react-responsive';

/* Types */
import { NavigationStatus } from '../../../store/slices/app/app.enum';

/* Mocks */
import { navigationMock } from '../../../mocks/data/navigation/navigation.mock';
import { useApp } from '../app/use.app';

export const useNavigationList = () => {
	const { data } = navigationMock();

	const navAnimationDelay = () => 800;

	const { sleepingNavigationStatus } = useApp();

	const isLowScreen = useMediaQuery({ maxWidth: 1210.98 });

	const setClassName = (status: NavigationStatus) => {
		if (isLowScreen) {
			switch (status) {
				case NavigationStatus.opened:
					return 'navigation__container navigation__container--open';
				case NavigationStatus.closed:
					sleepingNavigationStatus(navAnimationDelay());

					return 'navigation__container navigation__container--closed';
				default:
					return 'navigation__container';
			}
		}

		return 'navigation__container';
	};

	return { setClassName, data };
};
