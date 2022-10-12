/* eslint-disable @typescript-eslint/no-floating-promises */

import { worker } from '../../../mocks/services/browser/browser';

export const initMockServiceWorker = (): void => {
	if (process.env.NODE_ENV === 'development') {
		worker.start();
	}

	// worker.start({
	// 	serviceWorker: {
	// 		url: '/assets/mockServiceWorker.js',
	// 	},
	// });

	// worker.start();
};
