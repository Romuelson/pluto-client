import { TextProps } from '@components/UI/atoms/text/text.type';

import {
	TextAlignEnum,
	TextAsEnum,
	TextLineHeightEnum,
} from '@components/UI/atoms/text/text.enum';

import { UseSpecialTextProps } from '../../special-text.type';

const specialControl = ({ id, children }: UseSpecialTextProps): TextProps => ({
	id,
	children,
	as: TextAsEnum.span,
	lineHeight: TextLineHeightEnum.LC,
	textAlign: TextAlignEnum.center,
});

export default specialControl;
