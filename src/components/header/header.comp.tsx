/* Components */
import Navigation from '../navigation/navigation.comp';
import Logo from '../logo/logo.comp';
import Hamburger from '../hamburger/hamburger.comp';
import Menu from '../menu/menu.comp';
import NavigationList from '../navigation-list/navigation-list.comp';
import Promo from '../promo/promo.comp';

function Header() {
	return (
		<header className="header">
			<h1 className="visually-hidden">Магазин одежды</h1>
			<h2 className="visually-hidden">Главная страница</h2>
			<Navigation>
				<div className="navigation__wrapper">
					<Logo />
					<Hamburger />
					<Menu />
				</div>
				<NavigationList />
			</Navigation>
		</header>
	);
}

export default Header;
