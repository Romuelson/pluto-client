/* Modules */
import { nanoid } from '@reduxjs/toolkit';

/* Types */
import { InfoListAddress } from '../../../store/slices/components/info/info.type';

export const infoMock = () => {
	const data: InfoListAddress = [
		{
			id: nanoid(),
			title: 'Магазин',
			link: '0',
			address: {
				street: 'Нижний Тагил ул. 9 мая 77 ТРЦ «Комета»',
				phone: '+79126689013',
			},
		},
		{
			id: nanoid(),
			title: 'Шоурум',
			link: '0',
			address: {
				street: 'Екатеринбург ул. 8 марта 66 ТРЦ «Точка»',
				phone: '+79220336796',
			},
		},
	];

	return { data };
};
