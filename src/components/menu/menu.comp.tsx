/* Modules */
import { Link } from 'react-router-dom';

/* Mocks */
import { menuMock } from '../../mocks/data/menu/menu.mock';

/* Styles */
import './styles/index.scss';

function Menu() {
	const { data } = menuMock();

	return (
		<div className="menu">
			<h1 className="visually-hidden">Меню приложения</h1>
			<ul className="menu__list list">
				{data.map((item) => (
					<li className="menu__item list__item" key={item.id}>
						<Link to={item.link} className="menu__link link">
							<svg width="20" height="20" className="icon">
								<use xlinkHref={item.xlinkHref} />
							</svg>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Menu;
