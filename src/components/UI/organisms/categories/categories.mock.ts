import { nanoid } from '@reduxjs/toolkit';

export const categoriesMock = () => {
	const data = [
		{ id: nanoid(), title: 'Нижнее бельё', link: '!#' },
		{ id: nanoid(), title: 'Купальники', link: '!#' },
		{ id: nanoid(), title: 'Домашняя одежда', link: '!#' },
		{ id: nanoid(), title: 'Носочно-чулочные изделия', link: '!#' },
		{ id: nanoid(), title: 'Пляжная одежда', link: '!#' },
		{ id: nanoid(), title: 'Аксессуары', link: '!#' },
		{ id: nanoid(), title: 'Мужчинам', link: '!#' },
		{ id: nanoid(), title: 'Детям', link: '!#' },
		{ id: nanoid(), title: 'SALE', link: '!#' },
	];

	return { data };
};
