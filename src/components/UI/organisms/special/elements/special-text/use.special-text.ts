import { createElement } from 'react';

import Text from '@components/UI/atoms/text/text.comp';

import specialTitle from './views/special-title/special-title.view';
import specialControl from './views/special-control/special-control.view';
import specialDescription from './views/special-description/special-description.view';

import { ESpecialTextViews } from './special-text.enum';
import { UseSpecialTextProps } from './special-text.type';

export const useSpecialText = () => {
	const createSpecialText = (view: ESpecialTextViews) => {
		switch (view) {
			case ESpecialTextViews.control:
				return (props: UseSpecialTextProps) =>
					createElement(Text, specialControl({ ...props }));
			case ESpecialTextViews.title:
				return (props: UseSpecialTextProps) =>
					createElement(Text, specialTitle({ ...props }));
			default:
				return (props: UseSpecialTextProps) =>
					createElement(Text, specialDescription({ ...props }));
		}
	};

	return { createSpecialText };
};
