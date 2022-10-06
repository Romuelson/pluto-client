import { TextCreateView } from '@components/UI/atoms/text/hooks/text-create/text-create.type';

import {
	TextAlignEnum,
	TextAsEnum,
	TextFontEnum,
	TextLineHeightEnum,
	TextSizeEnum,
	TextWeightEnum,
} from '@components/UI/atoms/text/text.enum';

export const contentTitle: TextCreateView = ({ id, children }) => ({
	id,
	children,
	className: 'not-found__title',
	as: TextAsEnum.h3,
	font: TextFontEnum.ForumRegular,
	weight: TextWeightEnum.Normal,
	// size: TextSizeEnum.XXLXXXL,
	lineHeight: TextLineHeightEnum.LXL,
	textAlign: TextAlignEnum.center,
});
