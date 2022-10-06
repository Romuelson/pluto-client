import { useNotFoundMediaQuery } from './hooks/use.not-found-media-query';

import { notFoundMock } from './mocks/not-found.mock';
import { viewNotFound } from './views/view.not-found';

export const useNotFound = () => {
	const data = notFoundMock();
	const mediaQuery = useNotFoundMediaQuery();

	return ({ className }: { className: string }) =>
		viewNotFound({ className, data, mediaQuery });
};
