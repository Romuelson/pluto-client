import { useAppSelector } from '@hooks/store/redux/use.redux';

import {
	takeActiveColor,
	takeActiveId,
	takeActiveSection,
	takeCard,
	takeCards,
	takeCardsStatus,
	takeSectionPage,
} from '@store/slices/components/card/card.selector';

import { UseCardSelectorReturn } from './card.type';

export const useCardSelector = () => {
	const selector = useAppSelector;

	return {
		card: (props) => selector((state) => takeCard(state, props)),
		cards: (props) => selector((state) => takeCards(state, props)),
		status: (props) => selector((state) => takeCardsStatus(state, props)),
		page: (props) => selector((state) => takeSectionPage(state, props)),
		activeId: (props) => selector((state) => takeActiveId(state, props)),
		activeColor: (props) =>
			selector((state) => takeActiveColor(state, props)),
		activeSection: (props) => {
			return selector((state) => takeActiveSection(state, props));
		},
	} as UseCardSelectorReturn;
};
