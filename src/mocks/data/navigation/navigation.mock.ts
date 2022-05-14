import { nanoid } from '@reduxjs/toolkit';

export const navigationMock = () => {
	const data = [
		{ id: nanoid(), title: 'Нижнее бельё', link: '0' },
		{ id: nanoid(), title: 'Купальники', link: '0' },
		{ id: nanoid(), title: 'Домашняя одежда', link: '0' },
		{ id: nanoid(), title: 'Носочно-чулочные изделия', link: '0' },
		{ id: nanoid(), title: 'Пляжная одежда', link: '0' },
		{ id: nanoid(), title: 'Аксессуары', link: '0' },
		{ id: nanoid(), title: 'Мужчинам', link: '0' },
		{ id: nanoid(), title: 'Детям', link: '0' },
		{ id: nanoid(), title: 'SALE', link: '0' },
	];

	return { data };
};
