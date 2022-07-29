/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from 'react';

import useList from '@hooks/utils/list/use.list';
import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import {
	takeCard,
	takeCardsStatus,
} from '@store/slices/components/card/card.selector';

import { LoadingStatus } from '@store/store.enum';
import { getCardIdThunk } from '@store/slices/components/card/card.thunk';
import { setLoadingStatus } from '@store/slices/components/card/card.slice';

import withCard from './with.card';

import { CardPropsDisplay, UseCardProps } from './card.type';
import { IProductCard } from './mocks/card.mock.type';

export const useCard = (props: UseCardProps) => {
	const { type, id, display } = props;

	const dispatch = useAppDispatch();

	const cards = useAppSelector((state) => takeCard(state, type, id));
	const status = useAppSelector((state) => takeCardsStatus(state, type));

	useEffect(() => {
		if (status === LoadingStatus.idle) {
			dispatch(setLoadingStatus({ type, status: LoadingStatus.loading }));
			dispatch(getCardIdThunk({ id }));
			// .unwrap()
			// .then(({ data }) => console.log(data));
		}

		if (status === LoadingStatus.succeeded) {
			if (!cards) {
				dispatch(
					setLoadingStatus({ type, status: LoadingStatus.loading })
				);
				dispatch(getCardIdThunk({ id }));
			}
		}
	}, [dispatch, status, cards, type, id]);

	console.log(display);

	return useList<IProductCard, CardPropsDisplay>({
		Component: withCard,
		data: cards,
		config: display,
	});
};
