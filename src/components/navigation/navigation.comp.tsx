/* Core */
import { useAppSelector } from '../../hooks/use.redux';

/* Components */
import Logo from '../logo/logo.comp';
import Hamburger from '../hamburger/hamburger.comp';
import Menu from '../menu/menu.comp';

/* Store - Selectors */
import { getNavigationStatus } from '../../store/slices/app/app.selectors';

/* SVG Sprite */
import MenuSprite from '../../../public/images/common/sprite.svg';

type NavigationProps = {
	children: React.ReactNode;
};

function Navigation({ children }: NavigationProps) {
	return (
		<>
			<MenuSprite className="visually-hidden" />
			<nav className="navigation">
				<h3 className="navigation__title visually-hidden">
					Навигация приложения
				</h3>
				{children}
			</nav>
		</>
	);
}

export default Navigation;
