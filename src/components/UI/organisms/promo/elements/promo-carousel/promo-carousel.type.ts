import type { CarouselList } from '@components/UI/organisms/carousel/carousel.type';

export type PromoCarouselList = CarouselList;

export type PromoCarouselConfig = {
	list: PromoCarouselList;
};

export type PromoCarouselProps = {
	config: PromoCarouselConfig;
};
