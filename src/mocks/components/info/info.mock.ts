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
				phone: '+7 (912) 668-90-13',
			},
		},
		{
			id: nanoid(),
			title: 'Шоурум',
			link: '0',
			address: {
				street: 'Екатеринбург ул. 8 марта 66 ТРЦ «Точка»',
				phone: '+7 (922) 033-67-96',
			},
		},
	];

	return { data };
};
