import { InfoAddressContent } from '../../store/slices/components/info/info.type';
import { InfoTypeStyle } from './info.enum';

export type InfoProps = {
	type: InfoTypeStyle;
};

export type InfoAddressProps = {
	currentAddress?: InfoAddressContent;
};
