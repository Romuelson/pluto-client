import { useAppSelector } from '@hooks/store/redux/use.redux';

import {
	takeListAddress,
	takeActiveButton,
	takeListType,
	takeLoading,
	takeRecipientState,
} from '@store/slices/components/info/info.selector';

type UseInfoProps = {
	recipient: string;
};

export const useInfoSelector = ({ recipient }: UseInfoProps) => {
	const repecientState = useAppSelector((state) =>
		takeRecipientState(state, { recipient })
	);

	const loading = useAppSelector((state) =>
		takeLoading(state, { recipient })
	);
	const addressList = useAppSelector((state) =>
		takeListAddress(state, { recipient })
	);
	const activeButton = useAppSelector((state) =>
		takeActiveButton(state, { recipient })
	);
	const listType = useAppSelector((state) =>
		takeListType(state, { recipient })
	);

	const currentAddress = addressList[activeButton];

	return {
		repecientState,
		loading,
		addressList,
		activeButton,
		currentAddress,
		listType,
	};
};
