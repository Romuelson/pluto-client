import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div className="menu">
			<h1 className="visually-hidden">Меню приложения</h1>
			<ul className="menu__list list">
				<li className="menu__item list__item">
					<Link to="0" className="menu__link link">
						<svg width="20" height="20" className="icon">
							<use xlinkHref="#sprite_svg__search" />
						</svg>
						Искать
					</Link>
				</li>
				<li className="menu__item list__item">
					<Link to="0" className="menu__link link">
						<svg width="20" height="20" className="icon">
							<use xlinkHref="#sprite_svg__login" />
						</svg>
						Вход
					</Link>
				</li>
				<li className="menu__item list__item">
					<Link to="0" className="menu__link link">
						<svg width="20" height="20" className="icon">
							<use xlinkHref="#sprite_svg__favorites" />
						</svg>
						Избранное
					</Link>
				</li>
				<li className="menu__item list__item">
					<Link to="0" className="menu__link link">
						<svg width="20" height="20" className="icon">
							<use xlinkHref="#sprite_svg__basket" />
						</svg>
						Корзина
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
