/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';

import { useCardDispatch } from './use.card.dispatch';
import { useCardSelector } from './use.card.selector';

import { CardConfigCallback, UseCard } from './card.type';

import withCard from './with.card';

export const useCard = (props: UseCard) => {
	const { id, section } = props;

	const dispatch = useCardDispatch();
	const selector = useCardSelector();

	const activeId = selector.activeId({ id });
	const activeSection = selector.activeSection({ id, section });

	const card = selector.card({ id, section });
	const cardActive = selector.card({ id: activeId, section: activeSection });

	const activeColor = selector.activeColor(props);

	useEffect(() => {
		if (!cardActive)
			dispatch.getId({ id: activeId, section: activeSection });
	}, [dispatch, card, props]);

	const configWithCard: CardConfigCallback = ({ initCard, activeCard }) => ({
		children: activeCard,
		key: initCard.id,
		config: {
			initCard,
			activeCard,
			indexActiveColor: activeColor,
		},
	});

	return cardActive && card
		? withCard(configWithCard({ initCard: card, activeCard: cardActive }))()
		: null;
};
