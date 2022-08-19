/* eslint-disable @typescript-eslint/no-unused-expressions */

import { LoadingStatus } from '@store/store.enum';

import {
	CardTakeCard,
	CardTakeCards,
	CardTakeStatus,
	CardTakeActiveId,
	CardTakeActiveColor,
	CardTakeSectionPage,
	CardTakeActiveSection,
} from './card.type';

export const takeCard: CardTakeCard = (state, { id, section }) =>
	state.card.cards[section].data.find((card) => card.id === id);

export const takeCards: CardTakeCards = (state, { section }) =>
	state.card.cards[section].data || [];

export const takeCardsStatus: CardTakeStatus = (state, { section }) =>
	state.card.cards[section].loading.status;

export const takeSectionPage: CardTakeSectionPage = (state, { section }) =>
	state.card.cards[section].page;

export const takeActiveColor: CardTakeActiveColor = (state, props) =>
	takeCard(state, props)?.properties.colorList.activeColor || '0';

export const takeActiveId: CardTakeActiveId = (state, { id }) =>
	state.card.card[id]?.activeId || id;

export const takeActiveSection: CardTakeActiveSection = (
	state,
	{ id, section }
) => state.card.card[id]?.activeSection || section;
