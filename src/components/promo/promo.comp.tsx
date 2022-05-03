import { Link } from 'react-router-dom';

function Promo() {
	return (
		<section className="home__promo promo">
			<ul className="promo__list list">
				<li className="promo__item">
					<h4 className="promo__title title">
						Одежда и бельё женское
					</h4>
					<p className="promo__description description">
						Нижнее белье, пижамы, купальники, бикини, боди, ночные
						рубашки. Модели для каждой женщины!
					</p>
					<Link to="0" className="promo__link link">
						Узнать больше
					</Link>
				</li>
				<li className="promo__item">
					<h4 className="promo__title title">Мужчинам</h4>
					<Link to="0" className="promo__link link">
						Смотреть каталог
					</Link>
				</li>
				<li className="promo__item">
					<h4 className="promo__title title">Детям</h4>
					<Link to="0" className="promo__link link">
						Смотреть каталог
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default Promo;
