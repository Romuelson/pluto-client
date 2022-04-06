/* Components */
import Personal from '../../components/personal/personal.comp';

function HomePage() {
	return (
		<div className="home">
			<h1 className="home__title visually-hidden">Домашняя страница</h1>
			<Personal />
		</div>
	);
}

export default HomePage;
