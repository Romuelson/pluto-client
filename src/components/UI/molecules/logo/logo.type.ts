import { IconColorEnum } from '@components/UI/atoms/icon/icon.enum';
import { LogoSizeEnum } from './logo.enum';

export type LogoProps = {
	glyph?: string;
	viewBox?: string;
	children?: string;
	className?: string;
	logoSize?: LogoSizeEnum;
	logoColor?: IconColorEnum;
};

export type WithProps = {
	children?: string;
	className?: string;
};
