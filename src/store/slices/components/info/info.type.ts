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
	listAddress: InfoListAddress;
	activeButton: InfoActiveButton;
};
