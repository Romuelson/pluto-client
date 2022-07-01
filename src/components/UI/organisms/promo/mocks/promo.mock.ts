import { nanoid } from '@reduxjs/toolkit';

import { PromoListData } from '../promo.type';
import { CarouselDataType } from '../../carousel/carousel.type';

export const promoMock = () => {
	const promoListData = [
		{
			id: nanoid(),
			title: 'Одежда и бельё женское',
			description:
				'Нижнее белье, пижамы, купальники, бикини, боди, ночные рубашки. Модели для каждой женщины!',
			link: '#!',
			linkTitle: 'Узнать больше',
		},
		{
			id: nanoid(),
			title: 'Мужчинам',
			description: null,
			link: '#!',
			linkTitle: 'Узнать больше',
		},
		{
			id: nanoid(),
			title: 'Детям',
			description: null,
			link: '#!',
			linkTitle: 'Узнать больше',
		},
	] as PromoListData;

	const promoCarouselData = [
		{
			id: nanoid(),
			title: 'Тенденции женской моды весна-лето 2022 в Pluto',
			link: '#!',
			linkTitle: 'Подробнее',
		},
		{
			id: nanoid(),
			title: 'Тенденции женской моды лето-осень 2023 в Pluto',
			link: '#!',
			linkTitle: 'Подробнее',
		},
		{
			id: nanoid(),
			title: 'Тенденции женской моды осень-зима 2024 в Pluto',
			link: '#!',
			linkTitle: 'Подробнее',
		},
	] as CarouselDataType;

	return { promoListData, promoCarouselData };
};
