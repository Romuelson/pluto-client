import {
	DefaultRequestBody,
	PathParams,
	ResponseComposition,
	RestContext,
	RestRequest,
} from 'msw';

export type IMockServiceWorker<T extends DefaultRequestBody> = {
	req: RestRequest<T, PathParams>;
	res: ResponseComposition<DefaultRequestBody>;
	ctx: RestContext;
};
