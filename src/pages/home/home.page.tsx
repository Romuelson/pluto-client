import './styles/index.scss';

import Promo from '@components/UI/organisms/promo/promo.comp';
import Personal from '@components/UI/organisms/personal/personal.comp';

import { useHomeSpecial } from './elements/home-special/use.home-special';

function HomePage() {
	const HomeSpecial = useHomeSpecial();

	return (
		<main className="container__home home">
			<Promo className="home__promo" />
			<Personal className="home__personal" />
			<HomeSpecial className="home__special" />
		</main>
	);
}

export default HomePage;
