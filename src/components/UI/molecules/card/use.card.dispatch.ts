import { useAppDispatch } from '@hooks/store/redux/use.redux';
import { LoadingStatus } from '@store/store.enum';

import {
	setCardActiveId,
	setLoadingStatus,
	setCardActiveColor,
} from '@store/slices/components/card/card.slice';

import {
	getCardIdThunk,
	getCardSectionThunk,
} from '@store/slices/components/card/card.thunk';

import { CardLoadingStatus } from '@store/slices/components/card/card.type';
import { UseCardDispatchReturn } from './card.type';

export const useCardDispatch = () => {
	const dispatch = useAppDispatch();

	const changeStatus = (props: CardLoadingStatus) => {
		dispatch(setLoadingStatus(props));
	};

	return {
		getId: ({ id, section }) => {
			dispatch(getCardIdThunk({ id }));
			changeStatus({ section, status: LoadingStatus.loading });
		},

		getSection: ({ section }) => {
			dispatch(getCardSectionThunk({ section }));
			changeStatus({ section, status: LoadingStatus.loading });
		},

		setActiveColor: (props) => {
			dispatch(setCardActiveColor(props));
		},

		setActiveId: (props) => {
			dispatch(setCardActiveId(props));
		},
	} as UseCardDispatchReturn;
};
