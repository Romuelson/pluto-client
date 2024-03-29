// import CardModel from './card.model';

import { CardGetAll, CardGetId, CardGetSection } from './card.mock.type';

import { cardMock } from './card.mock';

const { getCardBras, getCardUnderpants } = cardMock();

class CardService {
	// getId({ id }: CardGetId) {
	// 	return id.map((idCurrent) =>
	// 		this.getAll({}).find((card) => card.id === idCurrent)
	// 	);
	// }

	getId({ id }: CardGetId) {
		return this.getAll({}).find((card) => card.id === id);
	}

	getAll({ limit }: CardGetAll) {
		return getCardBras.concat(getCardUnderpants);
	}

	getSection({ section }: CardGetSection) {
		return this.getAll({}).filter(
			(card) => card.properties.labelList.section === section
		);
	}
}

export default new CardService();
