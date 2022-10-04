import * as TextEnum from './text.enum';

export type TextProps = {
	id?: string;
	children?: string | string[];
	className?: string;
	as?: TextEnum.TextAsEnum;
	display?: TextEnum.TextDisplayEnum;
	weight?: TextEnum.TextWeightEnum;
	font?: TextEnum.TextFontEnum;
	size?: TextEnum.TextSizeEnum;
	lineHeight?: TextEnum.TextLineHeightEnum;
	color?: TextEnum.TextColorEnum;
	fontStyle?: TextEnum.TextFontStyleEnum;
	textTransform?: TextEnum.TextTransformEnum;
	letterSpacing?: TextEnum.TextLetterSpacingEnum;
	textCursor?: TextEnum.TextCursorEnum;
	textAlign?: TextEnum.TextAlignEnum;
	textDecoration?: TextEnum.TextDecorationEnum;

	onClick?: () => void;
};

export type TextSizeType = typeof TextEnum.TextSizeEnum;
export type TextLineHeightType = typeof TextEnum.TextLineHeightEnum;
