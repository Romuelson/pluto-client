/* Routes */
import { NavLink } from 'react-router-dom';
import PersonalRoute from '../../routes/personal/personal.route';

type NavLinkTypes = {
	isActive: boolean;
};

function Personal() {
	const setActive = ({ isActive }: NavLinkTypes) =>
		isActive
			? 'personal__link personal__link--active link'
			: 'personal__link link';

	return (
		<section className="home__personal personal">
			<ul className="personal__list list">
				<li className="personal__item list__item">
					<NavLink to="/" className={setActive}>
						Новинки
					</NavLink>
				</li>
				<li className="personal__item list__item">
					<NavLink to="/home/collections" className={setActive}>
						Коллекции
					</NavLink>
				</li>
				<li className="personal__item list__item">
					<NavLink to="/home/sale" className={setActive}>
						SALE
					</NavLink>
				</li>
			</ul>
			<PersonalRoute />
		</section>
	);
}

export default Personal;
