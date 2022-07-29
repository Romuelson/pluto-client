import { SwiperSlide } from 'swiper/react';

import { CarouselListProps, CarouselObject } from '../../carousel.type';
import CarouselListDefault from '../../views/carousel-list-default/carousel-list-default.comp';

function CarouselList({ data, views }: CarouselListProps) {
	const CarouselListContext = (item: CarouselObject) =>
		CarouselListDefault(item);

	return data.map((item) => (
		<SwiperSlide key={item.id}>{CarouselListContext(item)}</SwiperSlide>
	));
}

// function CarouselList({ data, views }: CarouselListProps) {
// 	const CarouselListContext = (item: CarouselObject) =>
// 		CarouselListDefault(item);

// 	return data.map((item) => (
// 		<SwiperSlide key={item.id}>{CarouselListContext(item)}</SwiperSlide>
// 	));
// }

export default CarouselList;
