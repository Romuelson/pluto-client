import { nanoid } from '@reduxjs/toolkit';

import { PersonalData } from '../personal.type';
import { PersonalRouteApp } from '../routes/personal.enum';

export const personalMock = () => {
	const data = [
		{ id: nanoid(), title: 'Новинки', link: PersonalRouteApp.Main },
		{
			id: nanoid(),
			title: 'Коллекции',
			link: `${PersonalRouteApp.Main}${PersonalRouteApp.Collections}`,
		},
		{
			id: nanoid(),
			title: 'SALE',
			link: `${PersonalRouteApp.Main}${PersonalRouteApp.Sale}`,
		},
	] as PersonalData;

	return { data };
};
