import { createElement } from 'react';

import NotFoundContext from '../elements/not-found-context/not-found-context.elem';

import { ENotFoundViews } from '../not-found.enum';
import { ViewNotFoundArgs } from './view.not-found.type';

import { notFoundLow } from './not-found-low/not-found-low.view';
import { notFoundMedium } from './not-found-medium/not-found-medium.view';

export const viewNotFound = (props: ViewNotFoundArgs) => {
	const createContext = (view: ENotFoundViews) => {
		switch (view) {
			case ENotFoundViews.medium:
				return (args: ViewNotFoundArgs) =>
					createElement(NotFoundContext, notFoundLow(args));
			default:
				return (args: ViewNotFoundArgs) =>
					createElement(NotFoundContext, notFoundMedium(args));
		}
	};

	return props.mediaQuery.M
		? createContext(ENotFoundViews.low)(props)
		: createContext(ENotFoundViews.medium)(props);
};
