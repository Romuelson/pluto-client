/* Styles */
import './styles/index.scss';

/* Hooks */
import { useIcons } from '../../hooks/components/icons/use.icons';

/* Components */
// import Personal from '../../components/personal/personal.comp';
// import Promo from '../../components/promo/promo.comp';
// import Special from '../../components/special/special.comp';

function HomePage() {
	const { Search, Inbox, Check } = useIcons();

	return (
		<main className="container__home home">
			<h1 className="home__title visually-hidden">Домашняя страница</h1>
			<Search />
			<Inbox />
			<Check />
			{/* <Promo />
			<Personal />
			<Special /> */}
		</main>
	);
}

export default HomePage;
