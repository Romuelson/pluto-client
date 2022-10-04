import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/store/redux/use.redux';

import {
	takeSpecialInfo,
	takeSpecialLoading,
} from '@store/slices/pages/home/home.selector';

import { LoadingStatus } from '@store/store.enum';
import { SpecialRecipient } from '@store/slices/components/special/special.enum';
import { getSpecialInfoThunk } from '@store/slices/components/special/special.thunk';

import { useHomeMediaQuery } from '@pages/home/use.home-media-query';
import { viewHomeSpecial } from './view.home-special';

export const useHomeSpecial = () => {
	const dispatch = useAppDispatch();
	const mediaQuery = useHomeMediaQuery();

	const info = useAppSelector((state) => takeSpecialInfo(state));
	const infoLoading = useAppSelector((state) => takeSpecialLoading(state));

	useEffect(() => {
		dispatch(getSpecialInfoThunk({ recipient: SpecialRecipient.home }));
	}, [dispatch]);

	return ({ className }: { className: string }) =>
		infoLoading.status === LoadingStatus.succeeded
			? viewHomeSpecial({ className, info, mediaQuery })
			: null;
};
