import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';
import { LoadingStatus } from '@store/store.enum';
import { AppStore } from '../../../store';

type InfoSelectorPayload = {
	recipient: string;
};

export const takeRecipientState = (
	state: AppStore,
	{ recipient }: InfoSelectorPayload
) => state.info?.[recipient];

export const takeLoading = (
	state: AppStore,
	{ recipient }: InfoSelectorPayload
) =>
	state.info?.[recipient]?.loading || {
		status: LoadingStatus.idle,
		error: undefined,
	};

export const takeListAddress = (
	state: AppStore,
	{ recipient }: InfoSelectorPayload
) => state.info?.[recipient]?.listAddress || [];

export const takeActiveButton = (
	state: AppStore,
	{ recipient }: InfoSelectorPayload
) => state.info?.[recipient]?.activeButton || 0;

export const takeListType = (
	state: AppStore,
	{ recipient }: InfoSelectorPayload
) => state.info?.[recipient]?.listType || InfoTypeEnums.categories;

// export const takeLoading = (state: AppStore) => state.info.loading;
// export const takeListAddress = (state: AppStore) => state.info.listAddress;
// export const takeActiveButton = (state: AppStore) => state.info.activeButton;
// export const takeListType = (state: AppStore) => state.info.listType;
