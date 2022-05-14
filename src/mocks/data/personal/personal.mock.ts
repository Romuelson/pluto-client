import { nanoid } from '@reduxjs/toolkit';

export const personalMock = () => {
	const data = [
		{ id: nanoid(), title: 'Новинки', link: '/' },
		{ id: nanoid(), title: 'Коллекции', link: '/home/collections' },
		{ id: nanoid(), title: 'SALE', link: '/home/sale' },
	];

	return { data };
};
