import { createElement } from 'react';

import Special from '@components/UI/organisms/special/special.comp';

import { specialLow } from './views/special-low/special-low.view';
import { specialMedium } from './views/special-medium/special-medium.view';

import { EHomeSpecialViews } from './home-special.enum';

import {
	UseHomeSpecialViewProps,
	ViewHomeSpecialArgs,
} from './home-special.type';

export const viewHomeSpecial = (props: ViewHomeSpecialArgs) => {
	const createHomeSpecial = (view: EHomeSpecialViews) => {
		switch (view) {
			case EHomeSpecialViews.medium:
				return (args: UseHomeSpecialViewProps) =>
					createElement(Special, specialLow(args));
			default:
				return (args: UseHomeSpecialViewProps) =>
					createElement(Special, specialMedium(args));
		}
	};

	return props.mediaQuery.M
		? createHomeSpecial(EHomeSpecialViews.low)(props)
		: createHomeSpecial(EHomeSpecialViews.medium)(props);
};
