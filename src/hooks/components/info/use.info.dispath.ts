/* Hooks */
import { useAppDispatch } from '../../store/redux/use.redux';

/* Actions */
import { setActiveIndex } from '../../../store/slices/components/info/info.slice';

export const useInfoDispath = () => {
	const dispatch = useAppDispatch();

	const dispatchActiveIndex = (index: number) => {
		dispatch(setActiveIndex(index));
	};

	return { dispatchActiveIndex };
};
