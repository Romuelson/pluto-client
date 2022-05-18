/* Hooks */
import { useAppDispatch } from '../../store/redux/use.redux';

/* Actions */
import { setActiveIndex } from '../../../store/slices/components/info/info.slice';

export const useInfoDispath = () => {
	const dispath = useAppDispatch();

	const dispathActiveIndex = (index: number) => {
		dispath(setActiveIndex(index));
	};

	return { dispathActiveIndex };
};
