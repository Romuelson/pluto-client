import { IconColorEnum } from '@components/UI/atoms/icon/icon.enum';

export type LogoProps = {
	glyph?: string;
	viewBox?: string;
	children?: string;
	className?: string;
	logoColor?: IconColorEnum;
};

export type WithProps = {
	children?: string;
	className?: string;
};
