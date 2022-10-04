import { Loading } from '@store/store.type';
import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';

import type { InfoListRecipientEnum } from './info.thunk';

export type InfoAddressData = {
	street: string;
	phone: string;
};

export type InfoAddressContent = {
	id: string;
	title: string;
	link: string;
	address: InfoAddressData;
};

export type InfoListAddress = InfoAddressContent[];

export type InfoActiveButton = number;

export type ResponseDataInfo = {
	data: InfoListAddress;
};

export type InfoState = {
	loading: Loading;
	listType: InfoTypeEnums;
	listAddress: InfoListAddress;
	activeButton: InfoActiveButton;
};

export type InfoRecipient = {
	[key in string]?: InfoState;
};

export type InfoSlice = () => InfoState;

/** */

export type InfoWithRecipient = {
	recipient: string;
};

export type InfoSetStatePayload = Pick<InfoWithRecipient, 'recipient'>;

export type InfoActiveIndexPayload = InfoWithRecipient & {
	value: number;
};

export type InfoListTypePayload = InfoWithRecipient & {
	type: InfoTypeEnums;
};
