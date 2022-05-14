/* Modules */
import { Link } from 'react-router-dom';

/* Mocks */
import { promoMock } from '../../mocks/data/promo/promo.mock';

/* Styles */
import './styles/index.scss';

function Promo() {
	const { data } = promoMock();

	return (
		<section className="home__promo promo">
			<ul className="promo__list list">
				{data.map((item) => (
					<li className="promo__item" key={item.id}>
						<h4 className="promo__title title">{item.title}</h4>
						{item.description ? (
							<p className="promo__description description">
								{item.description}
							</p>
						) : null}
						<Link to={item.link} className="promo__link link">
							{item.linkTitle}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Promo;
