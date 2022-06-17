import { nanoid } from '@reduxjs/toolkit';

export const legalMock = () => {
	const responce = [
		{
			id: nanoid(),
			title: '© 2022 «Плуто» Все права защищены',
			link: '#!',
		},
		{
			id: nanoid(),
			title: 'Карта сайта',
			link: '#!',
		},
		{
			id: nanoid(),
			title: 'Политика обработки персональных данных',
			link: '#!',
		},
	];

	return { responce };
};
