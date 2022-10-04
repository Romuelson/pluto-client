import { InfoListRecipientEnum } from '@store/slices/components/info/info.thunk';
import { InfoAddressContent } from '@store/slices/components/info/info.type';

import { InfoTypeEnums } from './info.enum';

export type InfoProps = {
	type?: InfoTypeEnums;
	recipient: string;
	className?: string;
};

export type InfoListProps = {
	children?: JSX.Element;
	recipient: string;
};

export type InfoAddressProps = {
	currentAddress?: InfoAddressContent;
};

export type InfoTitleProps = {
	index: number;
	item: InfoAddressContent;
	recipient: string;
};
