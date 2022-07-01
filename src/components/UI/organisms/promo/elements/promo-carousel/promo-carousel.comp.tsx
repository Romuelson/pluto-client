import Carousel from '@components/UI/organisms/carousel/carousel.comp';

import { CarouselViews } from '@components/UI/organisms/carousel/carousel.enum';

import { promoMock } from '../../mocks/promo.mock';

function PromoCarousel() {
	const { promoCarouselData } = promoMock();

	return <Carousel data={promoCarouselData} views={CarouselViews.default} />;
}

export default PromoCarousel;
