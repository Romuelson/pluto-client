import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import {
	setActiveIndex,
	setState,
} from '@store/slices/components/info/info.slice';
import { useInfoSelector } from './use.info.selector';

export const useInfoDispath = () => {
	const dispatch = useAppDispatch();

	const dispatchSetState = (recipient: string) => {
		dispatch(setState({ recipient }));
	};

	const dispatchActiveIndex = (recipient: string, index: number) => {
		dispatch(setActiveIndex({ recipient, value: index }));
	};

	return { dispatchSetState, dispatchActiveIndex };
};
