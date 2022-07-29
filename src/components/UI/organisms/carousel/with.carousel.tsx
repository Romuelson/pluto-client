import { SwiperSlide } from 'swiper/react';
import { WithArgsType } from './carousel.type';

function withCarousel({ children, key }: WithArgsType) {
	function WithCarousel() {
		return <SwiperSlide key={key}>{children}</SwiperSlide>;
	}

	return WithCarousel;
}

export default withCarousel;
