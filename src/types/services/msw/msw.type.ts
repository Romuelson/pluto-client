import {
	DefaultBodyType,
	PathParams,
	ResponseComposition,
	RestContext,
	RestRequest,
} from 'msw';

export type IMockServiceWorker<T extends DefaultBodyType> = {
	req: RestRequest<T, PathParams>;
	res: ResponseComposition<DefaultBodyType>;
	ctx: RestContext;
};
