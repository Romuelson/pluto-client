import { nanoid } from '@reduxjs/toolkit';

import type { PromoList } from '../elements/promo-list/promo-list.type';

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
	] as PromoList;

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
	] as PromoList;

	return { promoListData, promoCarouselData };
};
