/* Routes */
import { Link, Route, Routes } from 'react-router-dom';
import PersonalRoute from '../../routes/personal/personal.route';

/* Enums */
import { DefaultRouteApp } from '../../routes/default/default.enum';
import { PersonalRouteApp } from '../../routes/personal/personal.enum';

function Personal() {
	return (
		<section className="home__personal personal">
			<ul className="personal__list list">
				<li className="personal__item list__item">
					<Link to="/" className="personal__link link">
						Новинки
					</Link>
				</li>
				<li className="personal__item list__item">
					<Link
						to="/home/collections"
						className="personal__link link"
					>
						Коллекции
					</Link>
				</li>
				<li className="personal__item list__item">
					<Link to="/home/sale" className="personal__link link">
						SALE
					</Link>
				</li>
			</ul>
			<PersonalRoute />
		</section>
	);
}

export default Personal;
