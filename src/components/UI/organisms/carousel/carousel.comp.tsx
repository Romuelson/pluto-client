import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import CarouselList from './elements/carousel-list/carousel-list.comp';

import { CarouselProps } from './carousel.type';
import { CarouselViews } from './carousel.enum';

function Carousel(props: CarouselProps) {
	const { data, views = CarouselViews.default } = props;

	return (
		<Swiper navigation pagination loop modules={[Navigation, Pagination]}>
			{CarouselList({ data, views })}
		</Swiper>
	);
}

export default Carousel;
