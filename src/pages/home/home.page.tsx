/* Styles */
import './styles/index.scss';

/* Components */
import Personal from '../../components/personal/personal.comp';
import Promo from '../../components/promo/promo.comp';
import Special from '../../components/special/special.comp';

function HomePage() {
	return (
		<main className="container__home home">
			<h1 className="home__title visually-hidden">Домашняя страница</h1>
			<Promo />
			<Personal />
			<Special />
		</main>
	);
}

export default HomePage;
