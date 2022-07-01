import { nanoid } from '@reduxjs/toolkit';

import { TabsData } from '../tabs.type';

export const tabsMock = () => {
	const data = [
		{
			id: nanoid(),
			title: 'Новинки',
			link: '#!',
		},
		{
			id: nanoid(),
			title: 'Коллекции',
			link: '#!',
		},
		{
			id: nanoid(),
			title: 'SALE',
			link: '#!',
		},
	] as TabsData;

	return { data };
};
