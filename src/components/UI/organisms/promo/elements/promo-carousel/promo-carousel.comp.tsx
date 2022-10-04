import Carousel from '@components/UI/organisms/carousel/carousel.comp';

import { PromoCarouselProps } from './promo-carousel.type';

function PromoCarousel({ config }: PromoCarouselProps) {
	return (
		<Carousel
			config={config}
			display={{ loop: true, pagination: true, navigation: true }}
		/>
	);
}

export default PromoCarousel;
