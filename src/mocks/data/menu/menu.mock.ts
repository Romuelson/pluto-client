/* Modules */
import { nanoid } from '@reduxjs/toolkit';

export const menuMock = () => {
	const data = [
		{
			id: nanoid(),
			title: 'Искать',
			link: '0',
			xlinkHref: '#sprite_svg__search',
		},
		{
			id: nanoid(),
			title: 'Вход',
			link: '0',
			xlinkHref: '#sprite_svg__login',
		},
		{
			id: nanoid(),
			title: 'Избранное',
			link: '0',
			xlinkHref: '#sprite_svg__favorites',
		},
		{
			id: nanoid(),
			title: 'Корзина',
			link: '0',
			xlinkHref: '#sprite_svg__basket',
		},
	];

	return { data };
};
