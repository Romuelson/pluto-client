/* Styles */
import './styles/index.scss';

/* Images */
import Sprite from '../../../public/assets/images/common/sprite.svg';
import { useNavigationList } from '../../hooks/components/navigation/use.navigation-list';
import { NavigationStatus } from '../../store/slices/app/app.enum';
import { useApp } from '../../hooks/components/app/use.app';

type NavigationProps = {
	children: React.ReactNode;
};

function Navigation({ children }: NavigationProps) {
	const { navigationStatus } = useApp();

	const setClassName = () => {
		switch (navigationStatus) {
			case NavigationStatus.opened:
				return 'header__navigation navigation navigation--open';
			default:
				return 'header__navigation navigation';
		}
	};

	return (
		<>
			<Sprite className="visually-hidden" />
			<nav className={setClassName()}>
				<h3 className="navigation__title visually-hidden">
					Навигация приложения
				</h3>
				<div className="navigation__content">{children}</div>
			</nav>
		</>
	);
}

export default Navigation;
