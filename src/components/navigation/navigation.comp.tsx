/* Styles */
import './styles/index.scss';

/* Images */
import Sprite from '../../../public/assets/images/common/sprite.svg';

type NavigationProps = {
	children: React.ReactNode;
};

function Navigation({ children }: NavigationProps) {
	return (
		<>
			<Sprite className="visually-hidden" />
			<nav className="header__navigation navigation">
				<h3 className="navigation__title visually-hidden">
					Навигация приложения
				</h3>
				{children}
			</nav>
		</>
	);
}

export default Navigation;
