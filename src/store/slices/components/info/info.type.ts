import { InfoTypeEnums } from '@components/UI/molecules/info/info.enum';
import { Loading } from '../../../store.type';

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

export type InfoSlice = {
	loading: Loading;
	listType: InfoTypeEnums;
	listAddress: InfoListAddress;
	activeButton: InfoActiveButton;
};
