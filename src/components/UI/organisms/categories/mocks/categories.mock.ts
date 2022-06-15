import { nanoid } from '@reduxjs/toolkit';

export const categoriesMock = () => {
	const responce = {
		header: [
			{ id: nanoid(), title: 'Нижнее бельё', link: '!#' },
			{ id: nanoid(), title: 'Купальники', link: '!#' },
			{ id: nanoid(), title: 'Домашняя одежда', link: '!#' },
			{ id: nanoid(), title: 'Носочно-чулочные изделия', link: '!#' },
			{ id: nanoid(), title: 'Пляжная одежда', link: '!#' },
			{ id: nanoid(), title: 'Аксессуары', link: '!#' },
			{ id: nanoid(), title: 'Мужчинам', link: '!#' },
			{ id: nanoid(), title: 'Детям', link: '!#' },
			{ id: nanoid(), title: 'SALE', link: '!#' },
		],
		footer: [
			{ id: nanoid(), title: 'О нас', link: '!#' },
			{ id: nanoid(), title: 'Услуги', link: '!#' },
			{ id: nanoid(), title: 'Доставка и Оплата', link: '!#' },
			{ id: nanoid(), title: 'Блог', link: '!#' },
			{ id: nanoid(), title: 'Помощь', link: '!#' },
			{ id: nanoid(), title: 'Контакты', link: '!#' },
		],
	};

	return responce;
};
