/* Styles */
import './styles/index.scss';

/* Hooks */
import Button from 'src/components/UI/molecules/button/button.comp';
import useLogos from '@hooks/components/logos/use.logos';
import useIcons from '../../hooks/components/icons/use.icons';
import { IconSizeEnum } from '../../components/UI/atoms/icon/icon.enum';

/* Components */
// import Personal from '../../components/personal/personal.comp';
// import Promo from '../../components/promo/promo.comp';
// import Special from '../../components/special/special.comp';

function HomePage() {
	const { Brand } = useLogos();

	return (
		<main className="container__home home">
			<h1 className="home__title visually-hidden">Домашняя страница</h1>
			<Brand />
			{/* <Promo />
			<Personal />
			<Special /> */}
		</main>
	);
}

export default HomePage;
