import { CarouselViews } from './carousel.enum';

export type CarouselObject = {
	id: string;
	title: string;
	link: string;
	linkTitle: string;
};

export type CarouselDataType = CarouselObject[];

export type CarouselProps = {
	data: CarouselDataType;
	views: CarouselViews;
};

export type CarouselListProps = {
	data: CarouselDataType;
	views: CarouselViews;
};

export type CarouselListDefaultProps = CarouselObject;
