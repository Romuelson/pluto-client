import { faker } from '@faker-js/faker';

export type CardTypes = {
	id: string;
	title: string;
	description: string;
	price: string;
	size: number[];
	color: string[];
	image: string;
};

const CARD_LENGTH = 16;
const cards = new Array(CARD_LENGTH).fill({});

cards.forEach((item: CardTypes, index) => {
	const card = item;

	card.id = faker.datatype.uuid();
	card.title = faker.commerce.productAdjective();
	card.description = faker.commerce.productDescription();
	card.price = faker.commerce.price(2300, 3400, 2, 'руб.');
	card.size = [32, 34, 40, 42];
	card.color = ['red', 'blue'];
	card.image = `gerl-${index + 1}.jpg`;
});

export default cards;
