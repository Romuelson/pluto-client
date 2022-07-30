import { AppStore } from '@store/store';
import { LoadingStatus } from '@store/store.enum';

import { ProductCardList } from '@components/UI/molecules/card/mocks/card.mock.type';
import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';

// export const takeCard = (
// 	state: AppStore,
// 	type: ELabelSections,
// 	id: string[]
// ) => {
// 	return id.map((currentId) =>
// 		state.card.cards[type].data.find((card) => card.id === currentId)
// 	);
// };

export const takeCard = (state: AppStore, type: ELabelSections, id: string) =>
	state.card.cards[type].data.find((card) => card.id === id);

export const takeCards = (
	state: AppStore,
	type: ELabelSections
): ProductCardList => state.card.cards[type].data || [];

export const takeCardsStatus = (
	state: AppStore,
	type: ELabelSections
): LoadingStatus => state.card.cards[type].loading.status || LoadingStatus.idle;

export const takeSectionPage = (state: AppStore, type: ELabelSections) =>
	state.card.cards[type].page;
