import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import useList from '@hooks/utils/list/use.list';

import CarouselList from './elements/carousel-list/carousel-list.comp';

import {
	CarouselDataProp,
	CarouselProps,
	CarouselSlideType,
} from './carousel.type';
import { CarouselViews } from './carousel.enum';
import withCarousel from './with.carousel';

// SwiperSlide();
// {/* <React.VoidFunctionComponent<SwiperSlideProps>></React.VoidFunctionComponent> */}
// {CarouselList({ data, views })}

function Carousel(props: CarouselProps) {
	const {
		data,
		navigation,
		pagination,
		loop,
		spaceBetween = 0,
		slidesPerView,
	} = props;

	const list = useList<CarouselDataProp>({
		Component: withCarousel,
		data,
	});

	return (
		<Swiper
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			navigation={navigation}
			pagination={pagination}
			loop={loop}
			modules={[Navigation, Pagination]}
		>
			{list}
		</Swiper>
	);
}

export default Carousel;
