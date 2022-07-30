import { useEffect } from 'react';

import { LoadingStatus } from '@store/store.enum';
import { setLoadingStatus } from '@store/slices/components/card/card.slice';
import { getCardSectionThunk } from '@store/slices/components/card/card.thunk';

import {
	takeCards,
	takeCardsStatus,
	takeSectionPage,
} from '@store/slices/components/card/card.selector';

import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import useList from '@hooks/utils/list/use.list';

import { CardPropsDisplay, UseCardListProps } from './card.type';
import { IProductCard } from './mocks/card.mock.type';

import withCard from './with.card';

export const useCardList = (props: UseCardListProps) => {
	console.log('useCardList');
	const { type, display } = props;

	const dispatch = useAppDispatch();

	const cards = useAppSelector((state) => takeCards(state, type));
	const status = useAppSelector((state) => takeCardsStatus(state, type));
	const page = useAppSelector((state) => takeSectionPage(state, type));

	useEffect(() => {
		if (status === LoadingStatus.idle || !page) {
			dispatch(setLoadingStatus({ type, status: LoadingStatus.loading }));
			dispatch(getCardSectionThunk({ type }));
		}
	}, [dispatch, type, status, cards, page]);

	return useList<IProductCard, CardPropsDisplay>({
		Component: withCard,
		data: cards,
		config: display,
	});
};
