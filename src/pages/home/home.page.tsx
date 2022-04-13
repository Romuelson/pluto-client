/* Components */
import Personal from '../../components/personal/personal.comp';
import Promo from '../../components/promo/promo.comp';

function HomePage() {
	return (
		<div className="home">
			<h1 className="home__title visually-hidden">Домашняя страница</h1>
			<Promo />
			<Personal />
		</div>
	);
}

export default HomePage;
