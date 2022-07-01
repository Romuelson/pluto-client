import './styles/index.scss';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import PromoList from './elements/promo-list/promo-list.comp';
import PromoCarousel from './elements/promo-carousel/promo-carousel.comp';

function Promo() {
	const { isMinHigh } = useSingleMediaQuery();

	return (
		<section className="home__promo promo">
			<PromoList>{isMinHigh && <PromoCarousel />}</PromoList>
		</section>
	);
}

export default Promo;
