import { ENotFoundContextWidth } from '@pages/not-found/elements/not-found-context/not-fount-context.enum';

import { contentDescription } from '@pages/not-found/elements/not-found-content/views/content-description/content-description.view';
import { contentTitle } from '@pages/not-found/elements/not-found-content/views/content-title/content-title.view';

import { ViewNotFound } from '../view.not-found.type';

export const notFoundMedium: ViewNotFound = (args) => {
	const { className, data } = args;

	return {
		className,
		data,
		view: {
			display: {
				width: ENotFoundContextWidth.low,
			},
			elements: {
				content: {
					view: {
						title: contentTitle,
						description: contentDescription,
					},
				},
				control: {
					view: {
						title: () => {},
						description: () => {},
					},
				},
			},
		},
	};
};
