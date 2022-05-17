/* Hooks */
import { useMediaQuery } from 'react-responsive';

/* Components */
import Navigation from '../navigation/navigation.comp';

import Info from '../info/info.comp';
import Logo from '../logo/logo.comp';
import Hamburger from '../hamburger/hamburger.comp';
import Menu from '../menu/menu.comp';

import NavigationList from '../navigation/elements/navigation-list/navigation-list.comp';

/* Constants */
import { SizeMediaQuery } from '../../index.enum';

/* Styles */
import './styles/index.scss';

function Header() {
	const isLowScreen = useMediaQuery({
		maxWidth: 1210.98,
	});

	const isMediumScreen = useMediaQuery({ minWidth: 1211 });

	return (
		<header className="container__header header">
			<h1 className="visually-hidden">Магазин одежды</h1>
			<h2 className="visually-hidden">Главная страница</h2>
			<Navigation>
				<div className="navigation__wrapper">
					{isMediumScreen ? <Info /> : null}
					<Logo />
					{isLowScreen ? <Hamburger /> : null}
					<Menu />
				</div>
				<NavigationList />
			</Navigation>
		</header>
	);
}

export default Header;
