import { worker } from '../../../mocks/services/browser/browser';

export const initMockServiceWorker = (): void => {
	if (process.env.NODE_ENV === 'development') {
		worker.start().catch((error) => {
			console.log(error);
		});
	}
};
