import { SwiperSlideProps } from 'swiper/react';
import { NavigationOptions } from 'swiper/types';

import { CarouselViews } from './carousel.enum';

export type CarouselObject = {
	id: string;
	title: string;
	link: string;
	linkTitle: string;
};

export type CarouselDataType = CarouselObject[];
export type CarouselSlideType = React.VoidFunctionComponent<SwiperSlideProps>;

export type CarouselDataProp = JSX.Element | null;

export type CarouselProps = {
	// data: CarouselDataType;
	data: CarouselDataProp[];
	// views: CarouselViews;
	navigation: boolean | NavigationOptions;
	pagination: boolean;
	loop: boolean;
	spaceBetween?: number;
	slidesPerView?: number;
};

export type CarouselListProps = {
	data: CarouselDataType;
	views: CarouselViews;
};

export type CarouselListDefaultProps = CarouselObject;

// ---

export type WithArgsType = {
	children: React.ReactNode;
	key: string;
};
