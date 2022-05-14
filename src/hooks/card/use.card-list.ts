import { useEffect } from 'react';

/* Components */
import Card from '../../components/card/card.comp';

/* Hocs */
import withCardList from '../../hocs/card/with.card-list';

/* Hooks */
import { useAppDispatch, useAppSelector } from '../redux/use.redux';

/* Store */
import {
	takeCardsType,
	takeCardsStatus,
} from '../../store/slices/data/data.selectors';
import { DataStatusType } from '../../store/slices/data/data.enum';
import { getCardType } from '../../store/slices/data/data.thunk';

/* Types */
import { ELabelSections } from '../../types/data/product-card/product-card.enum';

type UseCaradListProps = {
	type: ELabelSections;
};

export const useCardList = (props: UseCaradListProps) => {
	const { type } = props;

	const dispatch = useAppDispatch();

	const cards = useAppSelector((state) => takeCardsType(state, type));
	const status = useAppSelector((state) => takeCardsStatus(state, type));

	useEffect(() => {
		if (status === DataStatusType.sleeping) {
			dispatch(getCardType({ type }));
		}
	}, [cards, dispatch, status, type]);

	return withCardList(Card, cards);
};
