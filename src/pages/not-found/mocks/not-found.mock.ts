import { nanoid } from '@reduxjs/toolkit';

import { NotFoundContextData } from '../elements/not-found-context/not-found-context.type';

export const notFoundMock = (): NotFoundContextData => {
	return {
		content: {
			data: [
				{
					id: nanoid(),
					title: 'Упс… Мы не можем найти то, что Вы ищете',
					description: [
						{
							id: nanoid(),
							text: 'Вернитесь на главную или свяжитесь по телефону',
						},
					],
				},
			],
		},
	};
};
