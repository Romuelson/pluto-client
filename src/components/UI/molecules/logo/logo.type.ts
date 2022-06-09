import { IconColorEnum } from '@components/UI/atoms/icon/icon.enum';

import {
	TextColorEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

import { LogoChildrenEnum, LogoSizeEnum } from './logo.enum';

export type LogoProps = {
	glyph?: string;
	viewBox?: string;

	children?: LogoChildrenEnum | string;
	className?: string;

	logoIconSize?: LogoSizeEnum;
	logoIconColor?: IconColorEnum;

	logoTextSize?: TextSizeEnum;
	logoTextLineHeight?: TextLineHeightEnum;
	logoTextColor?: TextColorEnum;
};

export type WithProps = {
	children?: string;
	className?: string;
};
