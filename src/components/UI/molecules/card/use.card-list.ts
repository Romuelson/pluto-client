/* eslint-disable react-hooks/exhaustive-deps */

import { createElement, useEffect } from 'react';

import { LoadingStatus } from '@store/store.enum';
import { ELabelSections } from '@components/UI/molecules/card/mocks/card.mock.enum';

import { useCardDispatch } from './use.card.dispatch';
import { useCardSelector } from './use.card.selector';

import { CardPropsDisplay } from './card.type';

import CardWrapper from './elements/card-wrapper/card-wrapper.comp';

export type UseCardList = {
	section: ELabelSections;
	display?: CardPropsDisplay;
};

export const useCardList = ({ section, display }: UseCardList) => {
	const dispatch = useCardDispatch();
	const selector = useCardSelector();

	const page = selector.page({ section });
	const cards = selector.cards({ section });
	const status = selector.status({ section });

	useEffect(() => {
		if (status === LoadingStatus.idle || !page)
			dispatch.getSection({ section });
	}, [section]);

	return cards.map((card) => {
		const createProps = {
			id: card.id,
			section: card.properties.labelList.sections,
			display,
		};

		return createElement(CardWrapper, createProps);
	});
};
