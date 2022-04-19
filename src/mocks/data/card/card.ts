/* eslint-disable no-plusplus */

import { faker } from '@faker-js/faker';

export type CardItem = {
	id: string;
	title: string;
	description: string;
	price: string;
	size: number[];
	color: string[];
	image: string;
};

export type CardsList = CardItem[];

function getMockCards(initialValue = 7): CardsList {
	function createCard(index: number): CardItem {
		return {
			id: faker.datatype.uuid(),
			title: faker.commerce.productAdjective(),
			description: faker.commerce.productDescription(),
			price: faker.commerce.price(2300, 3400, 2),
			size: [32, 34, 40, 42],
			color: ['red', 'blue'],
			image: `gerl-${index + 1}`,
		};
	}

	const cardList = new Array(initialValue)
		.fill(null)
		.map((_, index) => createCard(index));

	return cardList;
}

export default getMockCards;
