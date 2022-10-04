import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { nanoid } from '@reduxjs/toolkit';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarouselProps } from './carousel.type';

function Carousel({ config, display }: CarouselProps) {
	return (
		<Swiper {...display} modules={[Navigation, Pagination]}>
			{config.list.map((item) => (
				<SwiperSlide key={nanoid()}>{item}</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Carousel;
