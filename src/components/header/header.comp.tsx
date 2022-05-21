/* Modules */
import { useMediaQuery } from 'react-responsive';

/* Components */
import Navigation from '../navigation/navigation.comp';
import Info from '../info/info.comp';
import Logo from '../logo/logo.comp';
import Hamburger from '../hamburger/hamburger.comp';
import Menu from '../menu/menu.comp';

/* Elements */
import NavigationList from '../navigation/elements/navigation-list/navigation-list.comp';

/* Enums */
import { NavigationStatus } from '../../store/slices/app/app.enum';
import { InfoTypeStyle } from '../info/info.enum';

/* Hooks */
import { useApp } from '../../hooks/components/app/use.app';
import { useNavigationList } from '../../hooks/components/navigation/use.navigation-list';

/* Styles */
import './styles/index.scss';

function Header() {
	const isLowScreen = useMediaQuery({
		maxWidth: 1210.98,
	});

	const isMediumScreen = useMediaQuery({ minWidth: 1211 });

	const { navigationStatus } = useApp();
	const { setClassName } = useNavigationList();

	const navigationContainer = () => {
		switch (navigationStatus) {
			case NavigationStatus.opened:
				return (
					<div className={setClassName(navigationStatus)}>
						<NavigationList>
							{isLowScreen ? (
								<Info type={InfoTypeStyle.A} />
							) : null}
						</NavigationList>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<header className="container__header header">
			<h1 className="visually-hidden">Магазин одежды</h1>
			<h2 className="visually-hidden">Главная страница</h2>
			<Navigation>
				<div className="navigation__wrapper">
					{isMediumScreen ? <Info type={InfoTypeStyle.B} /> : null}
					<Logo />
					{isLowScreen ? <Hamburger /> : null}
					<Menu />
				</div>
				{isMediumScreen ? (
					<div className={setClassName(navigationStatus)}>
						<NavigationList>
							{isLowScreen ? (
								<Info type={InfoTypeStyle.A} />
							) : null}
						</NavigationList>
					</div>
				) : (
					navigationContainer()
				)}
			</Navigation>
		</header>
	);
}

export default Header;
