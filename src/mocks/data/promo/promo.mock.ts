import { nanoid } from '@reduxjs/toolkit';

export const promoMock = () => {
	const data = [
		{
			id: nanoid(),
			title: 'Одежда и бельё женское',
			description:
				'Нижнее белье, пижамы, купальники, бикини, боди, ночные рубашки. Модели для каждой женщины!',
			link: '0',
			linkTitle: 'Узнать больше',
		},
		{
			id: nanoid(),
			title: 'Мужчинам',
			description: null,
			link: '0',
			linkTitle: 'Узнать больше',
		},
		{
			id: nanoid(),
			title: 'Детям',
			description: null,
			link: '0',
			linkTitle: 'Узнать больше',
		},
	];

	return { data };
};
