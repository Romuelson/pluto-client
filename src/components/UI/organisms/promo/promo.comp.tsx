import './styles/index.scss';

import { useSingleMediaQuery } from '@hooks/utils/single-media-query/use.single-media-query';

import { usePromoList } from './elements/promo-list/use.promo-list';
import { usePromoConfig } from './hooks/promo-config/use.promo-config';

import { PromoProps } from './promo.type';

import PromoList from './elements/promo-list/promo-list.comp';
import PromoCarousel from './elements/promo-carousel/promo-carousel.comp';

function Promo({ className }: PromoProps) {
	const { isMinHigh } = useSingleMediaQuery();

	const { listConfig, carouselConfig } = usePromoConfig();
	const list = usePromoList().createListItem({ config: carouselConfig });

	const createPromoCarousel = () => {
		if (isMinHigh) {
			return PromoCarousel({ config: { list } });
		}
		return undefined;
	};

	return (
		<section className={[className, 'promo'].join(' ')}>
			<PromoList config={listConfig}>{createPromoCarousel()}</PromoList>
		</section>
	);
}

export default Promo;
