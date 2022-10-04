import {
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
} from '@components/UI/atoms/text/text.enum';

import { TextProps } from '@components/UI/atoms/text/text.type';
import { UseSpecialTextProps } from '../../special-text.type';

const specialDescription = ({
	id,
	children,
}: UseSpecialTextProps): TextProps => ({
	id,
	children,
	className: 'special__description',
	as: TextAsEnum.p,
	font: TextFontEnum.TypeTypeNorms,
	lineHeight: TextLineHeightEnum.XS,
});

export default specialDescription;
