// import { SwiperSlideProps } from 'swiper/react';
import { NavigationOptions } from 'swiper/types';

// export type CarouselObject = {
// 	id: string;
// 	title: string;
// 	link: string;
// 	linkTitle: string;
// };

// export type CarouselSlideType = React.VoidFunctionComponent<SwiperSlideProps>;

export type CarouselItem = JSX.Element;
export type CarouselList = CarouselItem[];

export type CarouselConfig = {
	list: CarouselList;
};

export type CarouselDisplay = {
	loop: boolean;
	navigation?: boolean | NavigationOptions;
	pagination?: boolean;
	spaceBetween?: number;
	slidesPerView?: number;
};

export type CarouselProps = {
	config: CarouselConfig;
	display: CarouselDisplay;
};

// export type WithArgsType = {
// 	children: React.ReactNode;
// 	key: string;
// };
