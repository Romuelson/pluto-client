import { TextCreateView } from '@components/UI/atoms/text/hooks/text-create/text-create.type';

import {
	TextAlignEnum,
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
} from '@components/UI/atoms/text/text.enum';

export const contentDescription: TextCreateView = ({ id, children }) => ({
	id,
	children,
	className: 'not-found__description',
	as: TextAsEnum.p,
	size: TextSizeEnum.M,
	font: TextFontEnum.TypeTypeNorms,
	lineHeight: TextLineHeightEnum.SM,
	textAlign: TextAlignEnum.center,
});
