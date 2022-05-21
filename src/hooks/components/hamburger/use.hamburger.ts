/* Types */
import { NavigationStatus } from '../../../store/slices/app/app.enum';

export const useHamburger = () => {
	const setClassName = (status: NavigationStatus) =>
		status === NavigationStatus.opened
			? 'hamburger hamburger--collapse hamburger--open button'
			: 'hamburger hamburger--collapse button';

	return { setClassName };
};
