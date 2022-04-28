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
