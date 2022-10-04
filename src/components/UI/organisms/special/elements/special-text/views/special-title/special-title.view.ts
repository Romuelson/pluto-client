import {
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
	TextWeightEnum,
} from '@components/UI/atoms/text/text.enum';

import { TextProps } from '@components/UI/atoms/text/text.type';
import { UseSpecialTextProps } from '../../special-text.type';

const specialTitle = ({ id, children }: UseSpecialTextProps): TextProps => ({
	id,
	children,
	className: 'special__title',
	as: TextAsEnum.h3,
	font: TextFontEnum.ForumRegular,
	weight: TextWeightEnum.Normal,
	size: TextSizeEnum.XL,
	lineHeight: TextLineHeightEnum.M,
});

export default specialTitle;
