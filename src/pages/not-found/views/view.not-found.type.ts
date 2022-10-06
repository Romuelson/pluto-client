import {
	NotFoundContextData,
	NotFoundContextProps,
} from '../elements/not-found-context/not-found-context.type';

import { UseNotFoundMediaQuery } from '../hooks/use.not-found-media-query';

export type ViewNotFoundArgs = {
	className: string;
	data: NotFoundContextData;
	mediaQuery: UseNotFoundMediaQuery;
};

export type ViewNotFound = (args: ViewNotFoundArgs) => NotFoundContextProps;
