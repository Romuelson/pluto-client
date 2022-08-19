import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { nanoid } from '@reduxjs/toolkit';
import { CarouselProps } from './carousel.type';

function Carousel(props: CarouselProps) {
	const {
		data,
		navigation,
		pagination,
		loop,
		spaceBetween = 0,
		slidesPerView,
	} = props;

	return (
		<Swiper
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			navigation={navigation}
			pagination={pagination}
			loop={loop}
			modules={[Navigation, Pagination]}
		>
			{data.map((item) => (
				<SwiperSlide key={nanoid()}>{item}</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Carousel;
