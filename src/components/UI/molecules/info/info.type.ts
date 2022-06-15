import { InfoAddressContent } from '@store/slices/components/info/info.type';
import { InfoTypeEnums } from './info.enum';

export type InfoProps = {
	type?: InfoTypeEnums;
};

export type InfoListProps = {
	children?: JSX.Element;
};

export type InfoAddressProps = {
	currentAddress?: InfoAddressContent;
};

export type InfoTitleProps = {
	index: number;
	item: InfoAddressContent;
};
