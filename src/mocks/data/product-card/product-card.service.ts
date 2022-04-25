/* eslint-disable class-methods-use-this */

// import ProductCardModel from './product-card.model';

import { ELabelSections } from '../../../types/data/product-card/product-card.enum';
import { IProductCard } from '../../../types/data/product-card/product-card.type';

import { getBrasCards } from './response/get-bras-cards';
import { getUnderpantsCards } from './response/get-underpants-cards';

class ProductCardService {
	create() {}

	getAll() {
		const cards = getBrasCards.concat(getUnderpantsCards);

		return cards;
	}

	getLabel(label: string | null) {
		const cards = this.getAll();

		const findLabel = (item: ELabelSections) => item === label;

		const filterCards = (item: IProductCard) =>
			item.properties.labelList.sections.find(findLabel);

		const sectionCards = cards.filter(filterCards);

		return sectionCards;
	}

	getOne() {}

	update() {}

	delete() {}
}

export default new ProductCardService();
